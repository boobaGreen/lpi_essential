export const lpic2_quiz_pool = [
  {
    id: 'lpic2-1',
    topicId: 1,
    question: 'Which command provides a real-time, dynamic view of the running system and processes, particularly emphasizing CPU and memory usage?',
    options: ['free', 'top', 'uptime', 'vmstat'],
    answer: 1,
    explanation: 'The `top` command provides a dynamic real-time view of a running system.'
  },
  {
    id: 'lpic2-2',
    topicId: 1,
    question: 'Which of the following commands would you use to view detailed I/O statistics for block devices?',
    options: ['vmstat', 'iostat', 'netstat', 'mpstat'],
    answer: 1,
    explanation: 'iostat command is used for monitoring system input/output device loading.'
  },
  {
    id: 'lpic2-3',
    topicId: 1,
    question: 'You want to collect and visualize system performance trends over several months. Which tool is best suited for this?',
    options: ['top', 'ss', 'Collectd/MRTG/Cacti', 'tcpdump'],
    answer: 2,
    explanation: 'Collectd, MRTG, and Cacti are standard monitoring tools designed to gather data over time and generate graphs for capacity planning.'
  },
  {
    id: 'lpic2-4',
    topicId: 2,
    question: 'Where do the default compiled kernel modules reside in the filesystem?',
    options: ['/boot/modules/', '/lib/modules/$(uname -r)/', '/etc/kernel/', '/var/lib/modules/'],
    answer: 1,
    explanation: 'Kernel modules are stored in `/lib/modules/` under a directory matching the specific kernel release version.'
  },
  {
    id: 'lpic2-5',
    topicId: 2,
    question: 'Which make target is used to build a compressed kernel image in modern 2.6+ kernels?',
    options: ['make zImage', 'make bzImage', 'make vmlinux', 'make install'],
    answer: 1,
    explanation: '`make bzImage` creates a compressed kernel image (big zImage) which handles kernels that exceed the old zImage size limitations.'
  },
  {
    id: 'lpic2-6',
    topicId: 2,
    question: 'When configuring the kernel via source, which command provides a text-based, menu-driven interface?',
    options: ['make config', 'make menuconfig', 'make xconfig', 'make defconfig'],
    answer: 1,
    explanation: '`make menuconfig` requires ncurses and provides a text-based menu interface for kernel configuration.'
  },
  {
    id: 'lpic2-7',
    topicId: 3,
    question: 'In a traditional SysVinit system, which file dictates the default runlevel on boot?',
    options: ['/etc/inittab', '/etc/runlevel', '/boot/grub/grub.cfg', '/etc/init.d/rcS'],
    answer: 0,
    explanation: 'The `/etc/inittab` file configures the init process and sets the `initdefault` runlevel.'
  },
  {
    id: 'lpic2-8',
    topicId: 4,
    question: 'Which filesystem type relies heavily on extents and is the default for many modern RHEL-based distributions?',
    options: ['ext4', 'xfs', 'btrfs', 'zfs'],
    answer: 1,
    explanation: 'XFS, developed originally by Silicon Graphics, is a highly scalable, high-performance file system and is the default in RHEL 7+.'
  },
  {
    id: 'lpic2-9',
    topicId: 5,
    question: 'Which tool is used to monitor, assemble, and manage software RAID arrays in Linux?',
    options: ['lvm', 'fdisk', 'mdadm', 'parted'],
    answer: 2,
    explanation: '`mdadm` stands for multiple device admin and is the standard utility for managing software RAID.'
  },
  {
    id: 'lpic2-10',
    topicId: 6,
    question: 'Which command allows you to view the ARP cache (neighbor table) using the modern iproute2 suite?',
    options: ['arp -n', 'ip neigh show', 'netstat -rn', 'route -n'],
    answer: 1,
    explanation: '`ip neigh show` (or simply `ip n`) replaces the old `arp` command for viewing and managing the ARP cache.'
  }
]
