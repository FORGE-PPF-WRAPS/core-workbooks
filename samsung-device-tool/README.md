# Samsung Device Tool

A command-line helper for **Samsung Galaxy A15** factory reset and **Galaxy A16** root readiness (Android equivalent of "jailbreak").

**Use only on devices you own.** This tool does not bypass Factory Reset Protection (FRP), screen locks, Knox, or Google/Samsung account verification.

## What it does

| Command | Purpose |
|---------|---------|
| `check` | Verify `adb` / `fastboot` and show connected device info |
| `reset-a15` | Factory reset Galaxy A15 (recovery guide or ADB reboot to recovery) |
| `root-a16` | Check A16 root prerequisites and print a step-by-step rooting guide |

## Prerequisites

1. **Android Platform Tools** (includes `adb` and `fastboot`)
   - Download: https://developer.android.com/tools/releases/platform-tools
2. **USB cable** to connect the phone to your computer
3. For ADB-based actions:
   - Enable **Developer options** (tap Build number 7 times in Settings → About phone)
   - Enable **USB debugging**
   - Accept the RSA fingerprint prompt on the phone

## Quick start

```bash
cd samsung-device-tool
python3 samsung_tool.py check
```

### Factory reset Galaxy A15

**No computer needed** — show button instructions:

```bash
python3 samsung_tool.py reset-a15 --method guide
```

**With USB debugging enabled** — reboot into recovery (you still confirm wipe on the phone):

```bash
python3 samsung_tool.py reset-a15 --method adb
```

**Interactive menu:**

```bash
python3 samsung_tool.py reset-a15
```

#### A15 recovery shortcut (manual)

1. Power off the phone
2. Hold **Volume Up + Power** until recovery appears
3. Select **Wipe data/factory reset** → confirm → **Reboot system now**

### Root Galaxy A16 ("jailbreak")

```bash
python3 samsung_tool.py root-a16
```

Offline guide only (no phone connected):

```bash
python3 samsung_tool.py root-a16 --offline
```

## Important limitations

### Factory reset (A15)

- Erases all apps, photos, and settings
- If **Factory Reset Protection** was on, you must sign in with the Google account that was on the device before the reset
- This tool cannot remove FRP or bypass a forgotten PIN/password without the account

### Rooting (A16)

- On Android, gaining full control is called **rooting**, not jailbreaking
- Many **Galaxy A16** models (especially carrier/US variants) have a **locked bootloader** with no official unlock — rooting may be **impossible**
- Unlocking the bootloader **trips Knox** (permanent `0x1`) and **voids warranty**
- Rooting typically requires **Magisk** and a patched boot image for your exact firmware
- Search [XDA Forums](https://forum.xda-developers.com/) for your exact model (e.g. `SM-A165F`)

## Model numbers

| Phone | Common model IDs |
|-------|------------------|
| Galaxy A15 | SM-A155F, SM-A155M, SM-A156B, … |
| Galaxy A16 | SM-A165F, SM-A165M, SM-A166B, … |

## Legal notice

Only use this tool on devices you own or are explicitly authorized to manage. Unauthorized access to mobile devices may violate local laws.
