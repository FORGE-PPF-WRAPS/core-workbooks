#!/usr/bin/env python3
"""
Samsung Galaxy factory reset helper (A15, A16, and similar models).

This tool only supports legitimate factory reset on devices you own and control.
It does NOT bypass FRP, unlock bootloaders, or root/jailbreak devices.
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
import time
from dataclasses import dataclass
from typing import Sequence


SUPPORTED_MODEL_HINTS = ("SM-A156", "SM-A166", "SM-A155", "SM-A165", "A15", "A16")


@dataclass(frozen=True)
class AdbDevice:
    serial: str
    state: str


def run(cmd: Sequence[str], *, check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        list(cmd),
        capture_output=True,
        text=True,
        check=check,
    )


def find_adb(explicit: str | None) -> str:
    if explicit:
        if not shutil.which(explicit) and not explicit.startswith("/"):
            raise SystemExit(f"ADB not found at: {explicit}")
        return explicit
    path = shutil.which("adb")
    if not path:
        raise SystemExit(
            "ADB not found. Install Android Platform Tools:\n"
            "  https://developer.android.com/tools/releases/platform-tools"
        )
    return path


def list_devices(adb: str) -> list[AdbDevice]:
    result = run([adb, "devices", "-l"])
    devices: list[AdbDevice] = []
    for line in result.stdout.splitlines()[1:]:
        line = line.strip()
        if not line:
            continue
        parts = line.split()
        if len(parts) >= 2:
            devices.append(AdbDevice(serial=parts[0], state=parts[1]))
    return devices


def pick_device(adb: str, serial: str | None) -> AdbDevice:
    devices = list_devices(adb)
    if not devices:
        raise SystemExit(
            "No device detected.\n"
            "Connect your phone via USB, enable USB debugging "
            "(Settings → Developer options), and authorize this computer."
        )

    if serial:
        for device in devices:
            if device.serial == serial:
                if device.state != "device":
                    raise SystemExit(
                        f"Device {serial} is in state '{device.state}'. "
                        "It must show as 'device' (authorized)."
                    )
                return device
        raise SystemExit(f"Serial not found: {serial}")

    authorized = [d for d in devices if d.state == "device"]
    if len(authorized) == 1:
        return authorized[0]
    if not authorized:
        states = ", ".join(f"{d.serial} ({d.state})" for d in devices)
        raise SystemExit(
            "No authorized device found.\n"
            f"Connected: {states}\n"
            "Unlock the phone and tap 'Allow' on the USB debugging prompt."
        )
    lines = "\n".join(f"  [{i}] {d.serial}" for i, d in enumerate(authorized, 1))
    print("Multiple authorized devices:\n" + lines)
    while True:
        choice = input("Select device number: ").strip()
        if choice.isdigit() and 1 <= int(choice) <= len(authorized):
            return authorized[int(choice) - 1]
        print("Invalid selection.")


def adb_shell(adb: str, serial: str, *args: str) -> subprocess.CompletedProcess[str]:
    return run([adb, "-s", serial, "shell", *args])


def print_recovery_instructions(model: str | None) -> None:
    print(
        """
=== Recovery mode factory reset (works when locked out) ===

1. Charge the phone to at least 30%.
2. Power off completely.
3. Press and hold Volume Up + Power until the Samsung logo / recovery screen appears.
4. Use Volume Down to highlight "Wipe data/factory reset".
5. Press Power to select.
6. Confirm "Factory data reset" with Power.
7. When finished, select "Reboot system now".

Note: After reset, sign in with the Google/Samsung account that was on the device
      before reset (Factory Reset Protection). This tool cannot bypass FRP.
"""
    )
    if model:
        print(f"Target model hint: {model}\n")


def print_settings_instructions() -> None:
    print(
        """
=== Settings factory reset (phone unlocked) ===

1. Settings → General management → Reset
2. Tap "Factory data reset"
3. Confirm and enter your PIN/password if prompted

Or on the phone: use this tool's --open-settings option when USB debugging is enabled.
"""
    )


def confirm_reset() -> None:
    print("\n*** WARNING: This permanently erases all data on the device. ***\n")
    typed = input('Type ERASE to continue: ').strip()
    if typed != "ERASE":
        raise SystemExit("Aborted (confirmation not received).")


def cmd_check(adb: str) -> None:
    print(f"ADB: {adb}")
    devices = list_devices(adb)
    if not devices:
        print("No devices connected.")
        return
    for device in devices:
        marker = "OK" if device.state == "device" else device.state.upper()
        print(f"  {device.serial}  [{marker}]")


def cmd_open_settings(adb: str, serial: str) -> None:
    confirm_reset()
    # Opens the system factory reset screen; user must still confirm on the phone.
    result = adb_shell(
        adb,
        serial,
        "am",
        "start",
        "-a",
        "android.settings.MASTER_CLEAR",
    )
    if result.returncode != 0:
        raise SystemExit(result.stderr.strip() or "Failed to open reset settings.")
    print("Opened factory reset screen on the device. Confirm the reset on the phone.")


def cmd_reboot_recovery(adb: str, serial: str) -> None:
    confirm_reset()
    run([adb, "-s", serial, "reboot", "recovery"])
    print("Rebooting to recovery...")
    time.sleep(2)
    print_recovery_instructions(None)


def cmd_wipe_via_adb(adb: str, serial: str) -> None:
    """
  Attempt direct wipe via recovery command. Works only on some builds when
  debugging is enabled and the device allows it.
    """
    confirm_reset()
    print("Sending wipe command (not supported on all firmware versions)...")
    result = adb_shell(adb, serial, "recovery", "--wipe_data", check=False)
    if result.returncode == 0:
        print("Wipe command accepted. The device should reboot and erase data.")
        return
    print(
        "Direct wipe failed or is unsupported on this device.\n"
        f"ADB said: {(result.stderr or result.stdout).strip()}\n"
        "Use recovery mode instead."
    )
    print_recovery_instructions(None)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Legitimate Samsung factory reset helper (ADB + recovery guidance).",
        epilog="This tool cannot jailbreak, root, or bypass FRP.",
    )
    parser.add_argument(
        "--adb",
        help="Path to adb binary (default: search PATH)",
    )
    parser.add_argument(
        "--serial",
        "-s",
        help="Device serial when multiple phones are connected",
    )
    parser.add_argument(
        "--model",
        help="Optional model hint for instructions (e.g. SM-A156B, A15)",
    )

    sub = parser.add_subparsers(dest="command", required=True)

    sub.add_parser("check", help="Verify ADB and list connected devices")

    p_instructions = sub.add_parser(
        "instructions",
        help="Print official factory reset steps (no device required)",
    )
    p_instructions.add_argument(
        "--model",
        help="Optional model hint (e.g. SM-A156B, A15)",
    )

    sub.add_parser(
        "open-settings",
        help="Open factory reset screen on an unlocked, authorized device",
    )

    sub.add_parser(
        "reboot-recovery",
        help="Reboot to recovery; complete wipe with hardware buttons",
    )

    sub.add_parser(
        "wipe-adb",
        help="Try adb shell recovery --wipe_data (may not work on all builds)",
    )

    return parser


def main(argv: Sequence[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "instructions":
        print_settings_instructions()
        print_recovery_instructions(args.model)
        return 0

    adb = find_adb(args.adb)

    if args.command == "check":
        cmd_check(adb)
        return 0

    device = pick_device(adb, args.serial)
    print(f"Using device: {device.serial}")

    if args.command == "open-settings":
        cmd_open_settings(adb, device.serial)
    elif args.command == "reboot-recovery":
        cmd_reboot_recovery(adb, device.serial)
    elif args.command == "wipe-adb":
        cmd_wipe_via_adb(adb, device.serial)

    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        print("\nAborted.")
        raise SystemExit(130) from None
