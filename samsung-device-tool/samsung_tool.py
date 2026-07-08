#!/usr/bin/env python3
"""
Samsung Galaxy A-series device helper.

Supports:
  - Factory reset guidance and ADB-assisted reset for Galaxy A15
  - Root (Android "jailbreak") readiness checks and guided steps for Galaxy A16

Use only on devices you own. This tool does not bypass FRP, screen locks, or
other account/security protections.
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
import textwrap
from dataclasses import dataclass
from typing import Callable

A15_MODEL_HINTS = ("SM-A155", "SM-A156", "GALAXY A15", "A155")
A16_MODEL_HINTS = ("SM-A165", "SM-A166", "GALAXY A16", "A165")


@dataclass
class DeviceInfo:
    serial: str
    model: str
    manufacturer: str
    android_version: str
    build_id: str
    bootloader_locked: str | None
    oem_unlock_allowed: str | None


class ToolError(Exception):
    pass


def print_header(title: str) -> None:
    line = "=" * len(title)
    print(f"\n{title}\n{line}")


def print_step(number: int, text: str) -> None:
    print(f"\n  {number}. {text}")


def confirm(prompt: str, default: bool = False) -> bool:
    suffix = " [Y/n]" if default else " [y/N]"
    while True:
        answer = input(f"{prompt}{suffix}: ").strip().lower()
        if not answer:
            return default
        if answer in ("y", "yes"):
            return True
        if answer in ("n", "no"):
            return False
        print("Please answer y or n.")


def run_command(
    args: list[str],
    *,
    timeout: int = 30,
    check: bool = True,
) -> subprocess.CompletedProcess[str]:
    try:
        return subprocess.run(
            args,
            capture_output=True,
            text=True,
            timeout=timeout,
            check=check,
        )
    except subprocess.CalledProcessError as exc:
        stderr = exc.stderr.strip() or exc.stdout.strip() or "unknown error"
        raise ToolError(f"Command failed ({' '.join(args)}): {stderr}") from exc
    except FileNotFoundError as exc:
        raise ToolError(f"Required command not found: {args[0]}") from exc
    except subprocess.TimeoutExpired as exc:
        raise ToolError(f"Command timed out: {' '.join(args)}") from exc


def require_tool(name: str) -> str:
    path = shutil.which(name)
    if not path:
        raise ToolError(
            f"'{name}' is not installed or not on PATH. "
            f"Install Android platform-tools and ensure {name} is available."
        )
    return path


def adb(*args: str, serial: str | None = None, check: bool = True) -> subprocess.CompletedProcess[str]:
    cmd = ["adb"]
    if serial:
        cmd.extend(["-s", serial])
    cmd.extend(args)
    return run_command(cmd, check=check)


def fastboot(*args: str, check: bool = True) -> subprocess.CompletedProcess[str]:
    return run_command(["fastboot", *args], check=check)


def list_adb_devices() -> list[str]:
    result = adb("devices", check=True)
    serials: list[str] = []
    for line in result.stdout.splitlines()[1:]:
        line = line.strip()
        if not line:
            continue
        parts = line.split()
        if len(parts) >= 2 and parts[1] == "device":
            serials.append(parts[0])
    return serials


def get_prop(serial: str, prop: str) -> str:
    result = adb("shell", "getprop", prop, serial=serial, check=True)
    return result.stdout.strip()


def read_device_info(serial: str) -> DeviceInfo:
    return DeviceInfo(
        serial=serial,
        model=get_prop(serial, "ro.product.model"),
        manufacturer=get_prop(serial, "ro.product.manufacturer"),
        android_version=get_prop(serial, "ro.build.version.release"),
        build_id=get_prop(serial, "ro.build.id"),
        bootloader_locked=_read_bootloader_lock(serial),
        oem_unlock_allowed=_read_oem_unlock_allowed(serial),
    )


def _read_bootloader_lock(serial: str) -> str | None:
    for prop in ("ro.boot.flash.locked", "ro.boot.verifiedbootstate"):
        value = get_prop(serial, prop)
        if value:
            return value
    return None


def _read_oem_unlock_allowed(serial: str) -> str | None:
    result = adb("shell", "getprop", "sys.oem_unlock_allowed", serial=serial, check=False)
    value = result.stdout.strip()
    return value or None


def model_matches(model: str, hints: tuple[str, ...]) -> bool:
    upper = model.upper()
    return any(hint in upper for hint in hints)


def choose_device(serials: list[str], expected: str | None = None) -> str:
    if not serials:
        raise ToolError(
            "No authorized device found.\n"
            "Connect the phone via USB, enable USB debugging, and accept the "
            "RSA fingerprint prompt on the phone."
        )

    if len(serials) == 1:
        serial = serials[0]
        info = read_device_info(serial)
        print(f"Using device {info.model} ({serial})")
        if expected == "a15" and not model_matches(info.model, A15_MODEL_HINTS):
            print(
                f"Warning: connected model '{info.model}' does not look like a Galaxy A15."
            )
        if expected == "a16" and not model_matches(info.model, A16_MODEL_HINTS):
            print(
                f"Warning: connected model '{info.model}' does not look like a Galaxy A16."
            )
        return serial

    print("Multiple devices detected:")
    infos = []
    for index, serial in enumerate(serials, start=1):
        info = read_device_info(serial)
        infos.append(info)
        print(f"  [{index}] {info.model} ({serial})")

    while True:
        choice = input("Select device number: ").strip()
        if choice.isdigit():
            idx = int(choice)
            if 1 <= idx <= len(infos):
                return infos[idx - 1].serial
        print("Invalid selection.")


def print_device_summary(info: DeviceInfo) -> None:
    print_header("Connected device")
    print(f"  Model:        {info.model}")
    print(f"  Manufacturer: {info.manufacturer}")
    print(f"  Android:      {info.android_version}")
    print(f"  Build:        {info.build_id}")
    print(f"  Serial:       {info.serial}")
    if info.bootloader_locked is not None:
        print(f"  Bootloader:   {info.bootloader_locked}")
    if info.oem_unlock_allowed is not None:
        print(f"  OEM unlock:   {info.oem_unlock_allowed}")


def factory_reset_recovery_guide() -> None:
    print_header("Galaxy A15 — recovery mode factory reset")
    print(
        textwrap.dedent(
            """
            This wipes all user data on the phone. Back up anything important first.
            You will need the Google/Samsung account that was on the device if FRP
            (Factory Reset Protection) was enabled.
            """
        ).strip()
    )
    print_step(1, "Power the phone completely off.")
    print_step(2, "Press and hold Volume Up + Power until the Samsung logo appears.")
    print_step(3, "Release both buttons when you enter Recovery mode.")
    print_step(4, 'Use Volume keys to highlight "Wipe data/factory reset".')
    print_step(5, "Press Power to select it.")
    print_step(6, 'Confirm with "Factory data reset" / "Yes".')
    print_step(7, 'Select "Reboot system now" when finished.')
    print(
        "\nIf the phone asks for a Google account after reset, that is normal FRP "
        "behavior — sign in with the account that was on the device before the wipe."
    )


def factory_reset_via_adb(serial: str, info: DeviceInfo) -> None:
    print_header("Galaxy A15 — ADB factory reset")
    print_device_summary(info)

    print(
        "\nThis reboots the phone into recovery. You must still confirm the wipe "
        "on the phone with the hardware keys."
    )
    if not confirm("Reboot into recovery now?", default=False):
        print("Cancelled.")
        return

    adb("reboot", "recovery", serial=serial, check=True)
    print("\nPhone is rebooting to recovery.")
    factory_reset_recovery_guide()


def factory_reset_a15(args: argparse.Namespace) -> None:
    if args.method == "guide":
        factory_reset_recovery_guide()
        return

    require_tool("adb")

    serials = list_adb_devices()
    serial = choose_device(serials, expected="a15")
    info = read_device_info(serial)

    if args.method == "adb":
        factory_reset_via_adb(serial, info)
        return

    print_device_summary(info)
    print_header("Choose factory reset method")
    print("  [1] Reboot to recovery via ADB (USB debugging required)")
    print("  [2] Show recovery-mode button guide (no USB required)")
    choice = input("Select option [1/2]: ").strip()
    if choice == "1":
        factory_reset_via_adb(serial, info)
    else:
        factory_reset_recovery_guide()


def interpret_bootloader_status(value: str | None) -> tuple[str, str]:
    if value is None:
        return (
            "unknown",
            "Could not read bootloader lock status. Try fastboot mode with the phone connected.",
        )

    normalized = value.strip().lower()
    if normalized in ("1", "locked", "green"):
        return (
            "locked",
            "Bootloader appears locked. Rooting is not possible until it can be unlocked.",
        )
    if normalized in ("0", "unlocked", "orange"):
        return (
            "unlocked",
            "Bootloader appears unlocked. You can proceed with a custom recovery and Magisk.",
        )
    return ("unknown", f"Bootloader state reported as '{value}'.")


def root_readiness_check(serial: str, info: DeviceInfo) -> dict[str, object]:
    status, message = interpret_bootloader_status(info.bootloader_locked)
    oem_unlock = info.oem_unlock_allowed

    checks = {
        "model_ok": model_matches(info.model, A16_MODEL_HINTS),
        "bootloader_status": status,
        "bootloader_message": message,
        "oem_unlock_allowed": oem_unlock == "1",
        "android_version": info.android_version,
    }
    return checks


def print_root_limitations() -> None:
    print(
        textwrap.dedent(
            """
            Important limitations for Galaxy A16:
              - Android devices are "rooted", not "jailbroken" (that term is for iOS).
              - Many Samsung A16 units ship with a permanently locked bootloader,
                especially carrier/US models. Root is impossible without unlock.
              - Unlocking trips Samsung Knox (0x1) and voids warranty.
              - This tool does NOT bypass FRP, Knox, or screen locks.
            """
        ).strip()
    )


def root_guide_a16(args: argparse.Namespace) -> None:
    print_header('Galaxy A16 — root ("jailbreak") guide')
    print_root_limitations()

    if args.offline:
        print_header("Offline rooting checklist")
        _print_offline_root_steps()
        return

    require_tool("adb")
    serials = list_adb_devices()
    serial = choose_device(serials, expected="a16")
    info = read_device_info(serial)
    print_device_summary(info)

    checks = root_readiness_check(serial, info)
    print_header("Readiness check")

    if checks["model_ok"]:
        print("  [OK] Model looks like Galaxy A16 family.")
    else:
        print(f"  [!!] Model '{info.model}' may not be an A16. Steps still apply generally.")

    print(f"  [??] {checks['bootloader_message']}")

    if checks["oem_unlock_allowed"]:
        print("  [OK] OEM unlocking appears allowed in developer options.")
    else:
        print(
            "  [!!] OEM unlocking not allowed or not enabled.\n"
            "       Enable: Settings → Developer options → OEM unlocking."
        )

    print_header("Recommended path if bootloader can be unlocked")
    _print_offline_root_steps()

    if checks["bootloader_status"] == "locked":
        print_header("Bootloader appears locked")
        print(
            textwrap.dedent(
                """
                On many Galaxy A16 variants there is no supported way to unlock the
                bootloader. Check whether your exact model (SM-A165x / SM-A166x) and
                region/carrier supports unlock:

                  Settings → Developer options → OEM unlocking

                If that toggle is missing or greyed out, rooting is not feasible on
                that unit without unsupported exploits (not provided by this tool).
                """
            ).strip()
        )


def _print_offline_root_steps() -> None:
    print_step(1, "Back up all data. Unlocking/rooting can erase the device.")
    print_step(2, "Enable Developer options (tap Build number 7 times).")
    print_step(3, 'Enable "OEM unlocking" and "USB debugging".')
    print_step(4, "Boot to Download Mode: Volume Down + Volume Up, then connect USB.")
    print_step(
        5,
        "If your model supports it, unlock the bootloader with Samsung/Odin or "
        "fastboot (varies by region). Expect a full data wipe.",
    )
    print_step(
        6,
        "Flash a patched boot image with Magisk (https://github.com/topjohnwu/Magisk) "
        "or install Magisk through a custom recovery if available.",
    )
    print_step(7, "Verify root with the Magisk app. Avoid banking apps if Knox is tripped.")
    print(
        "\nResources:\n"
        "  - Magisk: https://github.com/topjohnwu/Magisk\n"
        "  - XDA forums: search for your exact model number (e.g. SM-A165F)\n"
        "  - Samsung Odin (official firmware flash): use only firmware for your model/region"
    )


def check_environment() -> None:
    print_header("Environment check")
    for tool in ("adb", "fastboot"):
        path = shutil.which(tool)
        status = path if path else "NOT FOUND"
        print(f"  {tool:8} {status}")

    try:
        serials = list_adb_devices()
    except ToolError as exc:
        print(f"\nADB error: {exc}")
        return

    if not serials:
        print("\nNo authorized devices connected.")
        return

    for serial in serials:
        info = read_device_info(serial)
        print_device_summary(info)
        if model_matches(info.model, A15_MODEL_HINTS):
            print("  Detected family: Galaxy A15")
        elif model_matches(info.model, A16_MODEL_HINTS):
            print("  Detected family: Galaxy A16")
        checks = root_readiness_check(serial, info)
        print(f"  Bootloader assessment: {checks['bootloader_message']}")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Samsung Galaxy A15/A16 helper — factory reset and root guidance.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent(
            """
            Examples:
              python samsung_tool.py check
              python samsung_tool.py reset-a15 --method guide
              python samsung_tool.py reset-a15 --method adb
              python samsung_tool.py root-a16
              python samsung_tool.py root-a16 --offline

            Legal: Use only on devices you own. Unauthorized access to devices is illegal.
            """
        ).strip(),
    )

    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("check", help="Check adb/fastboot and connected devices")

    reset_parser = subparsers.add_parser(
        "reset-a15",
        help="Factory reset a Galaxy A15",
    )
    reset_parser.add_argument(
        "--method",
        choices=("interactive", "adb", "guide"),
        default="interactive",
        help="Reset method: interactive menu, adb reboot recovery, or offline guide",
    )

    root_parser = subparsers.add_parser(
        "root-a16",
        help='Root readiness and guide for Galaxy A16 ("jailbreak")',
    )
    root_parser.add_argument(
        "--offline",
        action="store_true",
        help="Show rooting steps without requiring a connected device",
    )

    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    handlers: dict[str, Callable[[argparse.Namespace], None]] = {
        "check": lambda _: check_environment(),
        "reset-a15": factory_reset_a15,
        "root-a16": root_guide_a16,
    }

    try:
        handlers[args.command](args)
    except ToolError as exc:
        print(f"\nError: {exc}", file=sys.stderr)
        return 1
    except KeyboardInterrupt:
        print("\nInterrupted.")
        return 130

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
