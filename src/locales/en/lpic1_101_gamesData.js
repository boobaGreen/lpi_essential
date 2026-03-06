// LPIC-1 101 Games Data — English
// Used by useGameData() when courseId === 'lpic1-101'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1
  { command: 'lspci', description: 'List all PCI devices' },
  { command: 'lsusb', description: 'List all USB devices' },
  { command: 'lsmod', description: 'Show loaded kernel modules' },
  { command: 'modprobe module', description: 'Load kernel module with dependencies' },
  { command: 'modprobe -r module', description: 'Remove a kernel module' },
  { command: 'dmesg', description: 'Show kernel ring buffer messages' },
  { command: 'systemctl get-default', description: 'Show default systemd target' },
  { command: 'systemctl set-default multi-user.target', description: 'Set boot target to multi-user text' },
  // Topic 2
  { command: 'grub-mkconfig -o /boot/grub/grub.cfg', description: 'Regenerate GRUB2 configuration' },
  { command: 'grub-install /dev/sda', description: 'Install GRUB2 to MBR' },
  { command: 'ldd /usr/bin/ls', description: 'Show shared library dependencies' },
  { command: 'ldconfig', description: 'Update shared library cache' },
  { command: 'dpkg -i package.deb', description: 'Install local Debian package' },
  { command: 'apt-get update', description: 'Update package list' },
  { command: 'rpm -qa', description: 'List all installed RPM packages' },
  { command: 'dnf install package', description: 'Install RPM package from repository' },
  // Topic 3
  { command: 'which cmd', description: 'Show full path of executable' },
  { command: 'type cmd', description: 'Indicate if builtin, alias, or executable' },
  { command: 'head -n 20 file', description: 'Show first 20 lines of a file' },
  { command: 'tail -f /var/log/syslog', description: 'Follow realtime log file' },
  { command: 'sort -rn file', description: 'Reverse numeric sort' },
  { command: 'cut -d: -f1 /etc/passwd', description: 'Extract first field separated by colon' },
  { command: 'find / -name "*.conf" -type f', description: 'Find all .conf files' },
  { command: 'grep -rn "pattern" /etc/', description: 'Search recursively with line numbers' },
  { command: 'ps aux', description: 'Show all processes with details' },
  { command: 'kill -9 PID', description: 'Force kill process (SIGKILL)' },
  { command: 'nice -n 10 cmd', description: 'Start command with low priority' },
  { command: 'nohup cmd &', description: 'Run process immune to SIGHUP' },
  // Topic 4
  { command: 'fdisk -l', description: 'List disk partitions' },
  { command: 'mkfs.ext4 /dev/sda1', description: 'Format partition with ext4' },
  { command: 'blkid', description: 'Show UUID and filesystem types' },
  { command: 'mount /dev/sda1 /mnt', description: 'Mount filesystem' },
  { command: 'umount /mnt', description: 'Unmount filesystem' },
  { command: 'fsck /dev/sda1', description: 'Check and repair filesystem' },
  { command: 'df -h', description: 'Show human-readable disk space' },
  { command: 'du -sh /home', description: 'Show directory size' },
  { command: 'chmod 755 file', description: 'Set rwxr-xr-x permissions' },
  { command: 'ln -s /original /link', description: 'Create symbolic link' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1
  { text: 'BIOS is more modern than UEFI.', answer: false, explanation: 'UEFI is the modern successor with GPT, Secure Boot, and faster boot.', difficulty: 1 },
  { text: '/proc is a virtual filesystem residing only in RAM.', answer: true, explanation: '/proc takes no disk space; it is generated dynamically by the kernel.', difficulty: 1 },
  { text: 'The init/systemd process always has PID 1.', answer: true, explanation: 'init or systemd is the first user process started by the kernel with PID 1.', difficulty: 1 },
  { text: 'MBR supports disks larger than 2TB.', answer: false, explanation: 'MBR is limited to 2TB. GPT supports disks up to 8ZiB.', difficulty: 1 },
  { text: 'apt-get update installs package upgrades.', answer: false, explanation: 'update downloads package lists. upgrade installs the actual updates.', difficulty: 1 },
  { text: 'Shared .so libraries are loaded at runtime.', answer: true, explanation: '.so (shared objects) are loaded by the dynamic linker when executing a program.', difficulty: 1 },
  { text: 'The cat command is primarily used to create empty files.', answer: false, explanation: 'cat concatenates and displays files. touch creates empty files.', difficulty: 1 },
  { text: 'The | pipe connects stdout of one command to stdin of the next.', answer: true, explanation: 'A pipe creates a pipeline passing output as input.', difficulty: 1 },
  { text: 'SIGKILL (9) can be intercepted by a process.', answer: false, explanation: 'SIGKILL cannot be caught or ignored. It terminates immediately.', difficulty: 1 },
  { text: 'The ext4 filesystem supports journaling.', answer: true, explanation: 'ext4 has built-in journaling for crash recovery protection.', difficulty: 1 },
  { text: 'chmod 644 makes a file executable for everyone.', answer: false, explanation: '644 = rw-r--r--. No execute permissions. 755 includes execute.', difficulty: 1 },
  { text: '/etc/fstab defines filesystems mounted automatically at boot.', answer: true, explanation: 'fstab contains device, mount point, type, and options.', difficulty: 1 },

  // Difficulty 2
  { text: 'modprobe automatically handles kernel module dependencies.', answer: true, explanation: 'modprobe uses depmod to resolve dependencies, unlike insmod.', difficulty: 2 },
  { text: 'rescue.target is equivalent to SysVinit runlevel 5.', answer: false, explanation: 'rescue.target is single-user (runlevel 1). Graphical is runlevel 5.', difficulty: 2 },
  { text: 'dpkg automatically installs package dependencies.', answer: false, explanation: 'dpkg installs .deb but does NOT resolve dependencies. apt does.', difficulty: 2 },
  { text: 'The uniq command removes all duplicate lines in a file.', answer: false, explanation: 'uniq only removes CONSECUTIVE duplicate lines. Use sort | uniq for all.', difficulty: 2 },
  { text: 'In a regex, the . dot matches any character.', answer: true, explanation: 'The . meta-character matches any single character (except newline).', difficulty: 2 },
  { text: 'A nice value of -20 indicates the MINIMUM priority.', answer: false, explanation: '-20 is the MAXIMUM priority. +19 is minimum.', difficulty: 2 },
  { text: 'parted applies partition changes immediately.', answer: true, explanation: 'Unlike fdisk which buffers changes, parted applies them directly to the disk.', difficulty: 2 },
  { text: 'The sticky bit on a directory prevents anyone from deleting files.', answer: false, explanation: 'Only the file owner (or root) can delete it, preventing users from deleting each others files.', difficulty: 2 },
  { text: 'fsck must be run on a mounted filesystem.', answer: false, explanation: 'fsck must run on UNMOUNTED filesystems to prevent data corruption.', difficulty: 2 },
  { text: 'UUID is a unique and permanent identifier for a filesystem.', answer: true, explanation: 'UUIDs are created during formatting and do not change, unlike /dev/sdX names.', difficulty: 2 },

  // Difficulty 3
  { text: 'In ERE regex, + requires an escape (\\+) to function.', answer: false, explanation: 'In Extended RE (-E), + works without escapes. It needs escapes in Basic RE.', difficulty: 3 },
  { text: 'emergency.target only mounts / in read-only and starts no services.', answer: true, explanation: 'emergency is the most restrictive target for extreme recovery.', difficulty: 3 },
  { text: 'With umask 077, new files get rw------- (600) permissions.', answer: true, explanation: '666 default - 077 umask = 600.', difficulty: 3 },
  { text: 'rpm -V verifies the dependencies of an installed package.', answer: false, explanation: 'rpm -V verifies integrity (checksums, permissions). rpm -R checks dependencies.', difficulty: 3 },
  { text: 'Hard links can point to directories.', answer: false, explanation: 'Linux prevents hard linking directories to avoid filesystem loops.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: 'list PCI devices', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: 'show default target', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: 'update package list', difficulty: 1 },
  { prompt: 'head -n _____ file', answer: '10', hint: 'default number of lines', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: 'create parent directories', difficulty: 1 },
  { prompt: 'chmod _____ file', answer: '755', hint: 'set rwxr-xr-x', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: 'mount a filesystem', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: 'remove recursively', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: 'show all processes', difficulty: 1 },
  { prompt: 'grep _____ "pattern" file', answer: '-i', hint: 'case-insensitive search', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ module', answer: '-r', hint: 'remove the module', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: 'halt the system', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'GRUB config file path', difficulty: 2 },
  { prompt: 'dpkg _____ /path/to/file', answer: '-S', hint: 'search for owning package', difficulty: 2 },
  { prompt: 'rpm _____ package', answer: '-qi', hint: 'show package info', difficulty: 2 },
  { prompt: 'find /etc -name "_____"', answer: '*.conf', hint: 'configuration files', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'SIGKILL signal', difficulty: 2 },
  { prompt: 'nice -n _____ cmd', answer: '10', hint: 'low priority', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: 'common linux filesystem', difficulty: 2 },
  { prompt: 'ln _____ /original /link', answer: '-s', hint: 'create symbolic link', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'switch target without reboot', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: 'results in file 644, dir 755', difficulty: 3 },
  { prompt: 'sed "s/old/new/_____" file', answer: 'g', hint: 'replace globally', difficulty: 3 },
  { prompt: 'grep -_____ "error|warning" file', answer: 'E', hint: 'enable Extended Regex', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: 'specify Process ID', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: 'Boot Order',
    question: 'Order the Linux boot phases:',
    items: [
      { text: 'Kernel initializes hardware', order: 3 },
      { text: 'init/systemd starts services', order: 4 },
      { text: 'BIOS/UEFI runs POST', order: 1 },
      { text: 'GRUB2 loads kernel/initramfs', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: 'Runlevel → Target',
    question: 'Match SysVinit runlevel to systemd target:',
    items: [
      { text: 'Runlevel 3 (multi-user text)', matches: 'multi-user.target' },
      { text: 'Runlevel 5 (GUI)', matches: 'graphical.target' },
      { text: 'Runlevel 1 (single user)', matches: 'rescue.target' },
      { text: 'Runlevel 0 (halt)', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: 'Package Families',
    question: 'Classify commands by package family:',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RPM' },
      { text: 'dnf install', category: 'RPM' },
      { text: 'zypper install', category: 'RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: 'Octal Permissions',
    question: 'Match octal notation to permissions:',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic1-1', description: 'Show PCI devices', prompt: 'lspci', expectedOutput: 'VGA compatible controller', hint: 'Use lspci', difficulty: 1 },
  { id: 'tc-lpic1-2', description: 'Show default systemd target', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Use systemctl get-default', difficulty: 1 },
  { id: 'tc-lpic1-3', description: 'Show loaded kernel modules', prompt: 'lsmod', expectedOutput: 'Module', hint: 'Use lsmod', difficulty: 1 },
  { id: 'tc-lpic1-4', description: 'Show CPU info', prompt: 'cat /proc/cpuinfo', expectedOutput: 'model name', hint: 'Read /proc/cpuinfo', difficulty: 1 },
  { id: 'tc-lpic1-5', description: 'Show disk space', prompt: 'df -h', expectedOutput: 'Filesystem', hint: 'Use df -h', difficulty: 1 },
  { id: 'tc-lpic1-6', description: 'Find .conf files in /etc', prompt: 'find /etc -name "*.conf"', expectedOutput: '.conf', hint: 'Use find with -name', difficulty: 2 },
  { id: 'tc-lpic1-7', description: 'Show first 5 lines of /etc/passwd', prompt: 'head -n 5 /etc/passwd', expectedOutput: 'root:', hint: 'Use head -n 5', difficulty: 1 },
  { id: 'tc-lpic1-8', description: 'Count lines in /etc/passwd', prompt: 'wc -l /etc/passwd', expectedOutput: '[0-9]+', hint: 'Use wc -l', difficulty: 1 },
  { id: 'tc-lpic1-9', description: 'Show file type of /usr/bin/ls', prompt: 'file /usr/bin/ls', expectedOutput: 'ELF', hint: 'Use the file command', difficulty: 2 },
  { id: 'tc-lpic1-10', description: 'Find package owning /usr/bin/vim', prompt: 'dpkg -S /usr/bin/vim', expectedOutput: 'vim', hint: 'Use dpkg -S', difficulty: 2 },
  { id: 'tc-lpic1-11', description: 'Show block device UUIDs', prompt: 'blkid', expectedOutput: 'UUID=', hint: 'Use blkid', difficulty: 2 },
  { id: 'tc-lpic1-12', description: 'Show permissions for /etc/passwd', prompt: 'ls -l /etc/passwd', expectedOutput: '-rw-r--r--', hint: 'Use ls -l', difficulty: 1 },
  { id: 'tc-lpic1-13', description: 'Show inode of /etc/hostname', prompt: 'ls -i /etc/hostname', expectedOutput: '[0-9]+', hint: 'Use ls -i', difficulty: 2 },
  { id: 'tc-lpic1-14', description: 'Show libraries required by /bin/ls', prompt: 'ldd /bin/ls', expectedOutput: 'libc.so', hint: 'Use ldd', difficulty: 2 },
  { id: 'tc-lpic1-15', description: 'Show kernel version', prompt: 'uname -r', expectedOutput: '[0-9]+\\.[0-9]+', hint: 'Use uname -r', difficulty: 1 },
]
