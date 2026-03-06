// LPIC-1 101 Lesson Content — English
// Lesson content for all 28 lessons

export const lpic1_101_lessonContent_en = {
  // ──── Topic 1: System Architecture ────
  'lpic1-101-1-1': {
    title: 'Hardware and Peripherals',
    comic: {
      title: 'Linux and Hardware: A Perfect Match 🤝',
      panels: [
        { emoji: '⚙️', text: 'At boot, the kernel scans the PCI and USB buses to find every component.' },
        { emoji: '📁', text: 'Everything is a file! Hardware info appears in /proc and /sys as text files.' },
        { emoji: '🔌', text: 'udev creates nodes in /dev (e.g., /dev/sda) so we can use the disks.' },
        { emoji: '🛠️', text: 'lspci and lsusb are your microscopes to see what\'s under the hood!' },
      ]
    },
    keyPoints: [
      { title: 'Virtual FS', items: ['/proc — Dynamic info (cpuinfo, meminfo)', '/sys — Bus and driver structure', '/dev — Special device files'] },
      { title: 'PCI/USB Tools', items: ['lspci — List PCI/PCIe devices', 'lsusb — List USB peripherals', 'lsblk — Tree view of block devices (disks)'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Boot Process',
    comic: {
      title: 'From Power-on to Desktop ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI: Performs POST and looks for the bootloader in the MBR or ESP partition.' },
        { emoji: '🐧', text: 'GRUB2: The traffic warden that loads the Kernel and initramfs into memory.' },
        { emoji: '🧠', text: 'Kernel: Initializes hardware and mounts the final root filesystem (/).' },
        { emoji: '🚀', text: 'Systemd: The first process (PID 1) that starts all system services.' },
      ]
    },
    keyPoints: [
      { title: 'Boot Phases', items: ['Firmware → Bootloader → Kernel → Init', 'dmesg — Reads kernel messages at boot', 'journalctl -b — Logs of the last boot'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: 'Runlevels and systemd Targets', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: Installation and Package Management ────
  'lpic1-101-2-1': { title: 'Hard Disk Layout', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: 'Boot Manager (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: 'Shared Libraries', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Debian Packages (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'RPM and YUM/DNF Packages', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Linux Virtualization', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: GNU and Unix Commands ────
  'lpic1-101-3-1-1': { title: 'Command Line — Basics', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: 'Command Line — Variables', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: 'Text Filters', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: 'File Management — Basics', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: 'File Management — Advanced', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: 'Redirects and Pipes — Basics', terminal: { prompt: '$ ls > list.txt', output: '' } },
  'lpic1-101-3-4-2': { title: 'Redirects and Pipes — Advanced', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: 'Processes — Basics', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: 'Processes — Job Control', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: 'Process Priorities', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: 'Regex — Basics', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: 'Regex — Extended', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'vi/vim Editor', terminal: { prompt: 'vi file.txt', output: '[Opens editor]' } },

  // ──── Topic 4: Devices, Linux Filesystems and FHS Standard ────
  'lpic1-101-4-1-1': { title: 'Partitions and Filesystems', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: 'Filesystem Integrity', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: 'Mounting and Unmounting', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: 'Permissions and Ownership', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: 'Hard and Soft Links', terminal: { prompt: '$ ln -s original link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS and File Locations', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
