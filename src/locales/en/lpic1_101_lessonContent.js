// LPIC-1 101 Lesson Content — English
// Lesson content for all 28 lessons

export const lpic1_101_lessonContent = {
  // ──── Topic 1: System Architecture ────
  'lpic1-101-1-1': {
    title: 'Hardware and Peripherals',
    content: `
# 🖥️ Linux Hardware and Peripherals

## Objective 101.1 — Determine and Configure Hardware Settings

### BIOS vs UEFI
**BIOS** (Basic Input/Output System) is the legacy firmware that initializes hardware. **UEFI** (Unified Extensible Firmware Interface) is its modern successor with GPT support, Secure Boot, and a graphical interface.

### The Kernel Virtual Directories

#### /proc — Process Filesystem
Virtual filesystem exposing kernel and process info:
- \`/proc/cpuinfo\` — CPU information
- \`/proc/meminfo\` — Memory information
- \`/proc/partitions\` — Detected partitions
- \`/proc/modules\` — Loaded kernel modules
- \`/proc/cmdline\` — Kernel boot parameters
- \`/proc/interrupts\` — IRQs in use

#### /sys — Sysfs
Exposes the kernel's device and driver hierarchy. Allows direct configuration of hardware parameters.

#### /dev — Device Files
Contains device nodes created dynamically by **udev**:
- \`/dev/sda\` — First SCSI/SATA/USB drive
- \`/dev/tty\` — Terminal
- \`/dev/null\` — "Black hole" to discard data

### Essential Commands
| Command | Description |
|---|---|
| \`lspci\` | List all PCI devices |
| \`lsusb\` | List all USB devices |
| \`lsmod\` | Show loaded modules |
| \`modprobe module\` | Load a module with dependencies |
| \`modprobe -r module\` | Remove a module |
| \`modinfo module\` | Module information |
| \`lsblk\` | List block devices |

### Kernel Module Management
The Linux kernel is modular. Drivers can be loaded/unloaded without rebooting.
- Persistent config: \`/etc/modules-load.d/\`
- Module options: \`/etc/modprobe.d/\`
    `,
  },
  'lpic1-101-1-2': {
    title: 'Boot Process',
    content: `
# ⚡ Linux Boot Process

## Objective 101.2 — Boot the System

### The 4 Phases of Boot
1. **Firmware (BIOS/UEFI)** — POST (Power-On Self-Test), initializes hardware, searches for bootloader
2. **Bootloader (GRUB2)** — Presents menu, loads kernel and initramfs into memory
3. **Kernel** — Decompresses, initializes drivers, mounts initramfs, starts init
4. **init/systemd (PID 1)** — Starts services, reaches default target

### GRUB2 — GRand Unified Bootloader
The standard bootloader. Configuration:
- \`/boot/grub/grub.cfg\` — Generated file (do not edit directly)
- \`/etc/default/grub\` — Customizable settings
- \`/etc/grub.d/\` — Scripts to generate the menu

### initramfs
Temporary archive loaded into RAM with drivers and scripts to mount the real root filesystem.
- Regeneration: \`update-initramfs -u\` (Debian) or \`dracut\` (RHEL)

### MBR vs GPT
| Feature | MBR | GPT |
|---|---|---|
| Max partitions | 4 primary | 128 |
| Max size | 2 TB | 8 ZiB |
| Backup table | No | Yes |
| Boot mode | BIOS | UEFI |

### Boot Logs
- \`dmesg\` — Kernel ring buffer
- \`journalctl -b\` — Current boot log (systemd)
    `,
  },
  'lpic1-101-1-3': {
    title: 'Runlevels and systemd Targets',
    content: `
# 🎯 Runlevels and systemd Targets

## Objective 101.3 — Change Runlevels / Boot Targets

### SysVinit Runlevel vs systemd Target
| Runlevel | Target | Description |
|---|---|---|
| 0 | poweroff.target | Power off |
| 1 | rescue.target | Single user (maintenance) |
| 2 | multi-user.target | Multi-user (Debian) |
| 3 | multi-user.target | Multi-user text |
| 5 | graphical.target | Multi-user GUI |
| 6 | reboot.target | Reboot |

### systemd Target Commands
| Command | Action |
|---|---|
| \`systemctl get-default\` | Show default target |
| \`systemctl set-default multi-user.target\` | Set default target |
| \`systemctl isolate rescue.target\` | Change target on the fly |

### Shutdown and Reboot
- \`shutdown -h now\` — Power off immediately
- \`shutdown -r now\` or \`reboot\` — Reboot
- \`shutdown -r +10 "message"\` — Reboot in 10 mins
- \`shutdown -c\` — Cancel scheduled shutdown
- \`poweroff\` — Power off
- \`wall "message"\` — Send message to all users

### emergency.target vs rescue.target
- **emergency**: only / in read-only, no services, minimal shell
- **rescue**: basic services active, filesystems mounted, more functionality
    `,
  },

  // ──── Topic 2: Installation and Package Management ────
  'lpic1-102-1-1': {
    title: 'Hard Disk Layout',
    content: `
# 💾 Hard Disk Layout

## Objective 102.1 — Design Hard Disk Layout

### Essential Partitions
- **/** (root) — Main filesystem, contains everything
- **/boot** (250-512 MB) — Kernel, initramfs, GRUB
- **/home** — User data (recommended separate)
- **swap** — Virtual memory (1-2x RAM)
- **/var** — Logs, spool, databases (optional separate)

### LVM — Logical Volume Manager
LVM allows flexible storage management: resize partitions, create snapshots.
- **PV** (Physical Volume) → **VG** (Volume Group) → **LV** (Logical Volume)

### Best Practices
- Separate /home: reinstall OS without data loss
- Separate /var: logs don't fill up /
- swap ≥ RAM if hibernation is needed
- ESP for UEFI: 100-500 MB FAT32 on /boot/efi
    `,
  },
  'lpic1-102-1-2': { title: 'Boot Manager (GRUB2)', content: `# 🔧 GRUB2\n\n## Objective 102.2\n\nGRUB2 is the standard bootloader. Key commands:\n- \`grub-install /dev/sda\` — Install GRUB in MBR/ESP\n- \`grub-mkconfig -o /boot/grub/grub.cfg\` — Regenerate config\n- \`update-grub\` — Debian wrapper\n\nConfiguration: /etc/default/grub (GRUB_TIMEOUT, GRUB_CMDLINE_LINUX)\n\nScripts in /etc/grub.d/ generate the menu entries.` },
  'lpic1-102-1-3': { title: 'Shared Libraries', content: `# 🔗 Shared Libraries\n\n## Objective 102.3\n\n.so (shared object) files loaded at runtime and shared among processes.\n\n- \`ldd /usr/bin/ls\` — Show dependencies\n- \`ldconfig\` — Update cache /etc/ld.so.cache\n- \`LD_LIBRARY_PATH\` — Additional directories\n- /etc/ld.so.conf — Directory configuration` },
  'lpic1-102-1-4': { title: 'Debian Packages (dpkg/apt)', content: `# 📦 Debian Package Management\n\n## Objective 102.4\n\n| Command | Level | Action |\n|---|---|---|\n| dpkg -i pkg.deb | low | Install local |\n| dpkg -S /path | low | Find owning package |\n| apt update | high | Update package list |\n| apt install pkg | high | Install with dependencies |\n| apt purge pkg | high | Remove with config |\n\nRepos: /etc/apt/sources.list` },
  'lpic1-102-1-5': { title: 'RPM and YUM/DNF Packages', content: `# 📦 RPM Package Management\n\n## Objective 102.5\n\n| Command | Action |\n|---|---|\n| rpm -i pkg.rpm | Install local |\n| rpm -qa | List all packages |\n| rpm -qf /file | Find owning package |\n| dnf install pkg | Install from repo |\n| dnf provides */file | Find provider |\n| zypper install pkg | SUSE |\n\nRepos: /etc/yum.repos.d/` },
  'lpic1-102-1-6': { title: 'Linux Virtualization', content: `# ☁️ Virtualization\n\n## Objective 102.6\n\n- **Type 1** (bare-metal): KVM, Xen, ESXi\n- **Type 2** (hosted): VirtualBox, VMware Workstation\n- **Containers**: Docker, Podman — share host kernel\n- **Cloud**: IaaS (VM), PaaS (platform), SaaS (ready apps)` },

  // ──── Topic 3: GNU and Unix Commands ────
  'lpic1-103-1-1': { title: 'Command Line — Basics', content: `# ⌨️ Command Line — Basics\n\n## Objective 103.1\n\nBash is the standard shell. Essential commands:\n- \`type cmd\` — builtin, alias or file?\n- \`which cmd\` — executable path\n- \`echo $PATH\` — search directories\n- \`uname -a\` — system info\n- Tab for autocompletion` },
  'lpic1-103-1-2': { title: 'Command Line — Variables', content: `# ⌨️ Variables and Quoting\n\n## Objective 103.1 (cont.)\n\n- VAR=value → local variable\n- export VAR → available to child processes\n- env / printenv → list environment variables\n- 'single' → no expansion\n- "double" → expands $VAR\n- history, !n, Ctrl+R → command history` },
  'lpic1-103-2-1': { title: 'Text Filters', content: `# 📝 Text Filters\n\n## Objective 103.2\n\n| Filter | Use |\n|---|---|\n| cat | Show/concatenate |\n| head/tail | First/last lines |\n| sort | Sort lines |\n| uniq | Consecutive duplicates |\n| wc | Count lines/words |\n| cut -d: -f1 | Extract fields |\n| tr a-z A-Z | Translate characters |\n| sed 's/a/b/g' | Substitute |\n| split | Divide into pieces |` },
  'lpic1-103-3-1': { title: 'File Management — Basics', content: `# 📁 File Management — Basics\n\n## Objective 103.3\n\n- ls -la → detailed list with hidden files\n- cp -r dir/ dest/ → copy directory\n- mv old new → move/rename\n- rm -r dir/ → delete recursively\n- mkdir -p a/b/c → create with parents\n- touch file → create empty / update timestamp\n- file myfile → identify type` },
  'lpic1-103-3-2': { title: 'File Management — Advanced', content: `# 📁 File Management — Advanced\n\n## Objective 103.3 (cont.)\n\n- Globbing: * (all), ? (one char), [abc] (set)\n- find /etc -name "*.conf" → search files\n- locate filename → search via database\n- updatedb → update locate database\n- tar -cvf arch.tar dir/ → create archive\n- tar -xvf arch.tar → extract\n- tar -czvf arch.tar.gz dir/ → with gzip` },
  'lpic1-103-4-1': { title: 'Redirects and Pipes — Basics', content: `# 🔀 Redirects — Basics\n\n## Objective 103.4\n\n| Operator | Meaning |\n|---|---|\n| > | stdout → file (overwrite) |\n| >> | stdout → file (append) |\n| < | file → stdin |\n| 2> | stderr → file |\n| &> | stdout+stderr → file |\n| 2>&1 | stderr where stdout goes |` },
  'lpic1-103-4-2': { title: 'Redirects and Pipes — Advanced', content: `# 🔀 Pipes and Advanced\n\n## Objective 103.4 (cont.)\n\n- | → pipe: stdout → stdin\n- tee file → writes to file AND stdout\n- xargs → builds commands from stdin\n- Here document: <<EOF ... EOF` },
  'lpic1-103-5-1': { title: 'Processes — Basics', content: `# ⚙️ Processes — Basics\n\n## Objective 103.5\n\n- ps aux → all processes\n- top / htop → real-time monitor\n- kill PID → SIGTERM (15)\n- kill -9 PID → SIGKILL\n- killall name → by name\n- Ctrl+C → SIGINT (2)` },
  'lpic1-103-5-2': { title: 'Processes — Job Control', content: `# ⚙️ Job Control\n\n## Objective 103.5 (cont.)\n\n- command & → background\n- Ctrl+Z → suspend (SIGTSTP)\n- jobs → list jobs\n- fg %N → foreground\n- bg %N → background\n- nohup cmd & → immune to SIGHUP\n- screen / tmux → persistent sessions` },
  'lpic1-103-6-1': { title: 'Process Priorities', content: `# 📊 Process Priorities\n\n## Objective 103.6\n\nNice value: -20 (max priority) to +19 (min)\n\n- nice -n 10 cmd → start with low priority\n- renice -n -5 -p PID → change priority\n- Only root can set negative values\n- In top: NI column = nice value` },
  'lpic1-103-7-1': { title: 'Regex — Basics', content: `# 🔍 Regular Expressions — Basics\n\n## Objective 103.7\n\n- grep pattern file → search pattern\n- . → any character\n- * → zero or more of preceding\n- ^ → start of line\n- $ → end of line\n- [a-z] → character range\n- grep -n → show line numbers\n- grep -i → case-insensitive\n- grep -v → lines NOT matching` },
  'lpic1-103-7-2': { title: 'Regex — Extended', content: `# 🔍 Extended Regex (ERE)\n\n## Objective 103.7 (cont.)\n\n- grep -E or egrep\n- + → one or more\n- ? → zero or one\n- | → alternation (OR)\n- () → grouping\n- {n,m} → repetitions\n\nExample: grep -E "error|warning" /var/log/syslog` },
  'lpic1-103-8-1': { title: 'vi/vim Editor', content: `# ✏️ vi/vim\n\n## Objective 103.8\n\nModes: Normal → Insert (i) → Normal (Esc)\n\n| Command | Action |\n|---|---|\n| i | Insert mode |\n| Esc | Normal mode |\n| :wq | Save and exit |\n| :q! | Exit without saving |\n| dd | Delete line |\n| yy | Copy line |\n| p | Paste |\n| u | Undo |\n| /pattern | Search forward |\n| :s/old/new/g | Substitute |` },

  // ──── Topic 4: Devices, Filesystems and FHS ────
  'lpic1-104-1-1': { title: 'Partitions and Filesystems', content: `# 💿 Partitions and Filesystems\n\n## Objective 104.1\n\n- fdisk → interactive partitioning\n- gdisk → GPT specific\n- parted → MBR+GPT, applies immediately\n- mkfs.ext4 /dev/sda1 → format\n- mkfs.xfs /dev/sda1 → XFS\n- mkswap /dev/sda2 → create swap\n- blkid → show UUID` },
  'lpic1-104-2-1': { title: 'Filesystem Integrity', content: `# 🔧 Filesystem Integrity\n\n## Objective 104.2\n\n- fsck /dev/sda1 → verify (unmounted!)\n- e2fsck → ext specific\n- xfs_repair → XFS specific\n- df -h → filesystem space\n- du -sh /dir → directory space\n- tune2fs → modify ext parameters\n- dumpe2fs → detailed ext dump` },
  'lpic1-104-3-1': { title: 'Mounting and Unmounting', content: `# 📂 Mounting Filesystems\n\n## Objective 104.3\n\n- mount /dev/sda1 /mnt → mount\n- umount /mnt → unmount\n- mount -a → mount all from fstab\n- /etc/fstab → automatic mounting\n\nfstab format:\nUUID=xxx  /home  ext4  defaults  0  2\n\nOptions: rw, ro, noexec, nosuid, nodev\nswap: swapon /dev/sda2, swapoff` },
  'lpic1-104-5-1': { title: 'Permissions and Ownership', content: `# 🔐 Linux Permissions\n\n## Objective 104.5\n\n### Basic Permissions\nrwx = read(4) write(2) execute(1)\n- chmod 755 file → rwxr-xr-x\n- chmod u+x file → add execute to owner\n- chown user:group file → change owner\n\n### Special Permissions\n| Bit | Octal | File | Directory |\n|---|---|---|---|\n| SUID | 4000 | Execute as owner | — |\n| SGID | 2000 | Execute as group | Inherit group |\n| Sticky | 1000 | — | Only owner deletes |\n\n### umask\numask 022 → file 644, dir 755` },
  'lpic1-104-6-1': { title: 'Hard and Soft Links', content: `# 🔗 Links\n\n## Objective 104.6\n\n### Hard Link\n- ln file hardlink → same inode\n- Not cross-filesystem, no directories\n- File valid as long as 1 link exists\n\n### Symbolic Link\n- ln -s file symlink → points to path\n- Cross-filesystem, supports directories\n- Broken if target is deleted\n\n- ls -i → show inode\n- stat file → detailed info` },
  'lpic1-104-7-1': { title: 'FHS and File Locations', content: `# 🗂️ FHS — Filesystem Hierarchy Standard\n\n## Objective 104.7\n\n| Dir | Content |\n|---|---|\n| / | Root |\n| /bin | Essential commands |\n| /sbin | System commands |\n| /etc | Configuration |\n| /home | User homes |\n| /root | Root home |\n| /var | Variable data (logs) |\n| /tmp | Temporary files |\n| /usr | User programs/libraries |\n| /opt | Optional software |\n| /srv | Service data |\n| /proc /sys | Kernel virtual FS |\n\nSearch files:\n- find, locate, updatedb\n- whereis, which, type` },
}
