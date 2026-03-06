// LPIC-1 101 Extended Content — English
// In-depth content for each topic

export const lpic1_101_extendedContent_en = {
  1: {
    title: 'System Architecture — Deep Dive',
    content: `
## 🖥️ BIOS vs UEFI
The **BIOS** (Basic Input/Output System) is the traditional firmware that initializes hardware and starts the bootloader from the MBR.
**UEFI** (Unified Extensible Firmware Interface) is the modern successor: it supports GPT disks >2TB, Secure Boot, graphical interfaces, and faster booting.

## 📁 Kernel Virtual Directories
- **/proc** — Virtual filesystem with process and kernel info (cpuinfo, meminfo, partitions)
- **/sys** — sysfs, exposes the kernel's device and driver hierarchy
- **/dev** — Device nodes, dynamically created by udev

## 🔧 Kernel Modules
The Linux kernel is modular: drivers can be loaded/unloaded at runtime.
- \`lsmod\` — List loaded modules
- \`modprobe module\` — Load module with dependencies
- \`modprobe -r module\` — Remove module
- \`modinfo module\` — Detailed info
- Persistent config: \`/etc/modules-load.d/\`

## ⚡ Boot Process
1. **Firmware** (BIOS/UEFI) → POST, initializes hardware
2. **Bootloader** (GRUB2) → Loads kernel and initramfs
3. **Kernel** → Initializes drivers, mounts initramfs
4. **init/systemd** (PID 1) → Starts services according to targets

## 🎯 systemd Targets vs SysVinit Runlevels
| Runlevel | systemd Target | Description |
|---|---|---|
| 0 | poweroff.target | Power off |
| 1 | rescue.target | Single user (maintenance) |
| 3 | multi-user.target | Multi-user text mode |
| 5 | graphical.target | Multi-user GUI |
| 6 | reboot.target | Reboot |
    `,
  },
  2: {
    title: 'Installation and Package Management — Deep Dive',
    content: `
## 💾 Disk Layout
A good partition scheme includes: \`/\` (root), \`/boot\` (250-512MB), \`/home\` (user data), \`swap\` (1-2x RAM).
**MBR** max 4 primary partitions and 2TB. **GPT** up to 128 partitions and 8ZiB.

## 📦 Package Management 
### Debian/Ubuntu (dpkg/apt)
- \`dpkg -i file.deb\` — Install local (no deps formatting)
- \`apt install pkgname\` — Install from repo (with deps)
- \`apt update && apt upgrade\` — Update system
- \`dpkg -S /path/file\` — Find owning package

### RHEL/Fedora (rpm/dnf)
- \`rpm -i file.rpm\` — Install local
- \`dnf install pkgname\` — Install from repo
- \`rpm -qa\` — List all installed packages
- \`rpm -qf /path/file\` — Find owning package

## 🔗 Shared Libraries
\`.so\` (shared object) libraries are loaded at runtime and shared between processes.
- \`ldd /usr/bin/ls\` — Show dependencies
- \`ldconfig\` — Update cache \`/etc/ld.so.cache\`
- \`LD_LIBRARY_PATH\` — Additional library directories

## ☁️ Virtualization and Cloud
- **Type 1** (bare-metal): KVM, Xen, ESXi — directly on hardware
- **Type 2** (hosted): VirtualBox, VMware Workstation — on top of a host OS
- **Containers**: Docker, Podman — share host kernel
- **Cloud**: IaaS (VMs), PaaS (platform), SaaS (ready apps)
    `,
  },
  3: {
    title: 'GNU and Unix Commands — Deep Dive',
    content: `
## ⌨️ The Bash Shell
Bash is the standard Linux shell. Essential concepts:
- **Variables**: \`VAR=value\`, \`export VAR\`, \`$VAR\`, \`\${VAR}\`
- **Quoting**: \`'literal'\`, \`"expands $VAR"\`, \`\\escape\`
- **History**: up arrow, \`Ctrl+R\`, \`!n\`, \`history\`
- **Globbing**: \`*\` (all), \`?\` (one char), \`[abc]\` (set)

## 📝 Text Filters — Pipeline Power
\`\`\`bash
# Count .conf files in /etc
find /etc -name "*.conf" | wc -l

# Top 10 largest directories
du -sh /* 2>/dev/null | sort -rh | head -10

# Users with bash shell
grep "/bin/bash$" /etc/passwd | cut -d: -f1 | sort
\`\`\`

## 🔀 Redirects and Pipes
| Operator | Meaning |
|---|---|
| \`>\` | stdout → file (overwrite) |
| \`>>\` | stdout → file (append) |
| \`2>\` | stderr → file |
| \`&>\` | stdout + stderr → file |
| \`<\` | file → stdin |
| \`|\` | stdout → stdin of next |
| \`tee\` | stdout → file + terminal |

## ⚙️ Process Management
- **Critical signals**: SIGTERM (15, clean exit), SIGKILL (9, forced), SIGINT (2, Ctrl+C)
- **Job control**: \`&\` (background), \`Ctrl+Z\` (suspend), \`fg\` (foreground), \`bg\` (background)
- **nice/renice**: -20 (max priority) to +19 (min priority)

## 🔍 Regular Expressions
| Symbol | BRE | ERE | Meaning |
|---|---|---|---|
| \`.\` | ✓ | ✓ | Any character |
| \`*\` | ✓ | ✓ | Zero or more |
| \`+\` | \\+ | ✓ | One or more |
| \`?\` | \\? | ✓ | Zero or one |
| \`^\` | ✓ | ✓ | Start of line |
| \`$\` | ✓ | ✓ | End of line |
    `,
  },
  4: {
    title: 'Devices, Filesystems and FHS — Deep Dive',
    content: `
## 💿 Partitions and Filesystems
- **fdisk**: interactive partitioning (MBR, now GPT too)
- **gdisk**: specific to GPT
- **parted**: supports MBR/GPT, applies changes instantly
- **mkfs.ext4**, **mkfs.xfs**: create filesystems

## 🔧 Integrity and Maintenance
- **fsck**: check and repair (must be unmounted!)
- **df -h**: disk space of mounted filesystems
- **du -sh /dir**: space used by a directory
- **tune2fs**: modify ext2/3/4 parameters
- **xfs_repair**: XFS repair tool

## 📂 Mounting Filesystems
\`/etc/fstab\` has 6 fields: device, mountpoint, type, options, dump, pass.
\`\`\`
UUID=xxxx  /home  ext4  defaults  0  2
\`\`\`

## 🔐 Special Permissions
| Bit | Octal | On File | On Directory |
|---|---|---|---|
| SUID | 4000 | Execute as owner | — |
| SGID | 2000 | Execute as group | New files inherit group |
| Sticky | 1000 | — | Only owner can delete |

## 🗂️ FHS (Filesystem Hierarchy Standard)
| Directory | Content |
|---|---|
| / | Root filesystem |
| /bin, /sbin | Essential binaries |
| /etc | Configuration |
| /home | User homes |
| /var | Variable data (logs, spool) |
| /tmp | Temporary files |
| /usr | User programs and libraries |
| /opt | Optional software |
| /srv | Service data |
| /proc, /sys | Kernel virtual filesystems |
    `,
  },
}
