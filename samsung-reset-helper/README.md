# Samsung Factory Reset Helper

A small CLI for **legitimate factory resets** on Samsung Galaxy phones (including **A15** and **A16**). Use this only on devices you own.

## What this does

- Checks ADB connectivity
- Prints official reset steps (Settings and recovery mode)
- Opens the system factory reset screen on an unlocked phone (`open-settings`)
- Reboots into recovery for a hardware-button wipe (`reboot-recovery`)
- Optionally tries `adb shell recovery --wipe_data` when supported (`wipe-adb`)

## What this does NOT do

- **No jailbreak / root / bootloader unlock** (including Galaxy A16)
- **No FRP (Factory Reset Protection) bypass**
- **No unlock without your PIN** unless you use recovery mode on your own device

## Requirements

1. [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools) (`adb` on your PATH)
2. USB data cable (not charge-only)
3. **USB debugging enabled** before you lose access to Settings
4. Computer authorized on the phone (“Allow USB debugging?”)

## Quick start

```bash
cd samsung-reset-helper
python3 reset_helper.py check
python3 reset_helper.py instructions --model A15
```

### Factory reset with ADB (authorized device)

```bash
# Safest: open reset UI on the phone, confirm there
python3 reset_helper.py open-settings

# Or reboot to recovery and use Volume/Power buttons
python3 reset_helper.py reboot-recovery
```

### No computer / forgot PIN

Use recovery mode on the phone:

1. Power off
2. Hold **Volume Up + Power** until recovery appears
3. **Wipe data/factory reset** → confirm → **Reboot system now**

After reset, sign in with the Google account that was on the device before the wipe.

## Galaxy A16 note (jailbreak / root)

Samsung locks bootloaders and Knox on most retail units. Rooting requires an unlockable bootloader, model-specific firmware, and tools like Odin/Magisk. There is no safe generic “jailbreak program” for A16; unofficial tools often brick devices or trip Knox permanently. For official developer unlock (where available), see [Samsung bootloader unlock](https://developer.samsung.com/android-usb-driver).
