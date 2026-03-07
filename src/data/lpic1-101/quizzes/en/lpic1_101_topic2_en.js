// LPIC-1 101 Quiz — Topic 2: Installation and Package Management (English)

export const lpic1_101_topic2QuizzesEN = [
  // ─── 102.1 Hard Disk Layout (8 questions) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which filesystem hierarchy must be available during the initial boot phase before other filesystems are mounted?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot contains the kernel and initramfs files required by the bootloader to start the operating system.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What is the primary purpose of a swap partition in Linux?',
    options: [
      'To store system backups',
      'To act as virtual memory when physical RAM is full',
      'To exchange data between Windows and Linux',
      'To store temporary files deleted at reboot'
    ],
    correct: 1,
    explanation: 'Swap space acts as an overflow area (virtual memory) where the kernel pages out memory blocks when RAM is highly utilized.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Why is it highly recommended to place /home on a separate partition?',
    options: [
      'It increases system performance',
      'It allows reinstalling the operating system without losing user data',
      'It prevents users from taking too much CPU time',
      'The kernel requires it to boot'
    ],
    correct: 1,
    explanation: 'Having /home on a separate partition means you can wipe the root partition (/) to upgrade or reinstall the OS while preserving all user files and settings.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which directory should be placed on a separate partition if the system runs a database or generates massive log files?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var contains variable data like logs, mail spools, and databases. If it fills up, it can crash the system unless it is isolated on its own partition.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'What is the absolute maximum number of primary partitions permitted on a disk using the classic MBR partition table?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'MBR (Master Boot Record) allows a maximum of 4 primary partitions. To have more, one must be an Extended partition containing logical drives.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What technology allows you to combine multiple physical disks into a single volume group and create resizable logical volumes?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (Logical Volume Manager) provides a layer of abstraction over physical storage, allowing dynamic resizing and snapshotting of volumes.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'When installing Linux on a modern UEFI-based system, which special partition is strictly required?',
    options: ['A swap partition', 'An LVM physical volume', 'An EFI System Partition (ESP)', 'A /boot partition formatted as ext4'],
    correct: 2,
    explanation: 'UEFI firmware requires an EFI System Partition (ESP), typically formatted as FAT32 and mounted at /boot/efi, to hold UEFI bootloaders like GRUB.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command displays the current partition table for a specific disk like /dev/sda?',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'fdisk -l followed by a device name displays the partition table (MBR or GPT) for that specific block device.',
  },

  // ─── 102.2 Install a Boot Manager (4 questions) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command installs the GRUB2 boot loader into the Master Boot Record of the first hard drive?',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install is the command to install the GRUB bootloader files and set up the boot sector on a disk.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'After editing /etc/default/grub, which command must be run to generate the final grub.cfg file on a Debian system?',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub is a wrapper script for `grub-mkconfig -o /boot/grub/grub.cfg` used in Debian-based distributions.',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which GRUB2 configuration file should you NEVER edit manually according to its own header comments?',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg is automatically generated and will be overwritten. Changes should be made in /etc/default/grub or /etc/grub.d/.',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'In GRUB2 terminology, how is the first partition of the first hard disk represented?',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'GRUB2 counts disks from 0 (hd0) but partitions typically from 1 (hd0,1).',
  },

  // ─── 102.3 Shared Libraries (4 questions) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command displays the shared library dependencies required by a dynamically linked executable?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) prints the shared libraries (.so files) required by each program specified.',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which configuration file lists the directories where the dynamic linker searches for shared libraries?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf defines the directories that ld.so uses to search for libraries.',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'After adding a new directory to /etc/ld.so.conf, which command MUST be run to update the library cache?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig updates the dynamic linker cache (/etc/ld.so.cache) based on the directories configured.',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command option for ldconfig allows you to see the currently cached libraries stored in /etc/ld.so.cache?',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) displays the lists of directories and candidate libraries currently stored in the cache.',
  },

  // ─── 102.4 Debian Package Management (6 questions) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which low-level Debian tool is used to install a local .deb file without automatically downloading dependencies?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg is the base package manager for Debian. `dpkg -i file.deb` installs a local package.',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command updates the local index of available packages from the repositories on a Debian system?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update downloads the latest package lists from the repositories.',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the primary difference between `apt remove` and `apt purge`?',
    options: [
      'remove uninstall the package; purge deletes the package from the apt cache',
      'remove leaves configuration files behind; purge removes the package AND its configuration files',
      'purge forces removal ignoring dependencies',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'apt purge completely removes the package including global configuration files.',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command lists all installed packages on a Debian-based system?',
    options: ['dpkg -l', 'apt list --installed', 'Both dpkg -l and apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Both `dpkg -l` and `apt list --installed` perform this action.',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which dpkg flag allows you to find out which installed package provided a specific file (e.g., /bin/ls)?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) searches for a filename from installed packages.',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which file stores the list of repository URLs that APT uses to download packages?',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list is the main configuration file for APT package sources.',
  },

  // ─── 102.5 RPM and YUM/DNF Package Management (6 questions) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which low-level tool is used to install a local .rpm file on a Red Hat based system?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) is the base command to install an RPM package.',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which modern high-level tool replaced YUM as the default package manager in Fedora and RHEL 8+?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) is the next-generation version of YUM.',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command lists all installed RPM packages on the system?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) lists all currently installed RPM packages.',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which rpm command queries an installed package to see which files it installed?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) lists the files installed by a specific package.',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'How do you find which RPM package provided the file /etc/httpd/conf/httpd.conf?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) finds which installed package owns the specified file.',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command verifies the integrity of an installed RPM package?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) compares information about installed files against the original metadata.',
  },

  // ─── 102.6 Virtualization Guest (4 questions) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What is the main difference between Type 1 and Type 2 hypervisors?',
    options: [
      'Type 1 requires Windows, Type 2 requires Linux',
      'Type 1 runs directly on hardware (bare-metal), Type 2 runs on top of a host operating system',
      'Type 1 is for containers, Type 2 is for virtual machines',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'Type 1 runs on bare metal for max performance. Type 2 runs as an application inside a host OS.',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'How do Linux containers (like Docker or Podman) differ from full Virtual Machines?',
    options: [
      'Containers are slower than VMs',
      'Containers share the host operating system kernel, avoiding the overhead of running a full guest OS',
      'Containers can run Windows apps natively on Linux',
      'Containers require dedicated hardware'
    ],
    correct: 1,
    explanation: 'Containers share the host\'s kernel, isolating processes instead of emulating hardware.',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which Linux technology is a native kernel-based Type 1 hypervisor?',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'KVM (Kernel-based Virtual Machine) turns the Linux kernel into a Type 1 hypervisor.',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the purpose of "Guest Additions" or "Guest Tools" in a virtual machine?',
    options: [
      'To allow the guest to access the host\'s hardware directly without permission',
      'To provide better drivers for video, mouse integration, and shared folders',
      'To encrypt the virtual disk',
      'To allow the VM to run without a kernel'
    ],
    correct: 1,
    explanation: 'Guest Additions provide optimized drivers and services that improve the performance and usability of the guest OS.',
  },
  {
    id: 'q-lpic1-101-2-033', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command installs a package using dnf on RHEL/Fedora?',
    options: ['dnf install package', 'rpm -i package', 'yum add package', 'apt install package'],
    correct: 0,
    explanation: '`dnf install` downloads and installs the package from the repository, automatically resolving dependencies.',
  },
  {
    id: 'q-lpic1-101-2-034', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command lists all installed RPM packages?',
    options: ['rpm -qa', 'rpm -ql', 'yum list', 'dnf show all'],
    correct: 0,
    explanation: '`rpm -qa` (query all) lists all RPM packages currently installed in the system.',
  },
  {
    id: 'q-lpic1-101-2-035', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command shows which RPM package a specific file belongs to?',
    options: ['rpm -qf /path/to/file', 'rpm -ql package', 'rpm -qi package', 'dnf provides file'],
    correct: 0,
    explanation: '`rpm -qf` (query file) shows which installed package owns the specified file.',
  },
  {
    id: 'q-lpic1-101-2-036', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command verifies the integrity of an installed RPM package?',
    options: ['rpm -V package', 'rpm -qa', 'yum check', 'dnf verify'],
    correct: 0,
    explanation: '`rpm -V` (verify) checks the size, checksum, permissions, and timestamps of the files in an installed package.',
  },
  {
    id: 'q-lpic1-101-2-037', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which tool is the successor to yum on modern RHEL/Fedora systems?',
    options: ['apt', 'dnf', 'zypper', 'pacman'],
    correct: 1,
    explanation: 'DNF (Dandified YUM) is the successor to yum, offering faster performance and better dependency management.',
  },
  {
    id: 'q-lpic1-101-2-038', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which package manager is primarily used by SUSE/openSUSE?',
    options: ['yum', 'apt', 'zypper', 'pacman'],
    correct: 2,
    explanation: '`zypper` is the command-line package manager for SUSE Linux, managing RPM packages.',
  },
  {
    id: 'q-lpic1-101-2-039', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Where are YUM/DNF repositories configured?',
    options: ['/etc/yum.repos.d/', '/etc/apt/sources.list', '/etc/rpm/', '/var/lib/yum/'],
    correct: 0,
    explanation: '`/etc/yum.repos.d/` contains `.repo` files that define repository details (baseurl, gpgcheck, etc.).',
  },
  {
    id: 'q-lpic1-101-2-040', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which rpm option shows package information such as description and version?',
    options: ['rpm -qi', 'rpm -ql', 'rpm -qf', 'rpm -qa'],
    correct: 0,
    explanation: '`rpm -qi` (query info) displays the name, version, release, architecture, and description of the package.',
  },
  {
    id: 'q-lpic1-101-2-041', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'How do you import a GPG key to verify RPM packages?',
    options: ['rpm --import URL-OR-KEY-FILE', 'yum gpg-import', 'dnf key-add', 'rpm -K file'],
    correct: 0,
    explanation: '`rpm --import` imports the public GPG key used to verify the digital signature of RPM packages.',
  },
  {
    id: 'q-lpic1-101-2-042', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which dnf command searches for a package that provides a specific file?',
    options: ['dnf search', 'dnf provides */filename', 'dnf info', 'dnf list'],
    correct: 1,
    explanation: '`dnf provides` searches for which package (even if not installed) contains a specific file or command.',
  },
  {
    id: 'q-lpic1-101-2-043', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which type of hypervisor runs directly on the hardware (bare-metal)?',
    options: ['Type 1', 'Type 2', 'Type 3', 'Software type'],
    correct: 0,
    explanation: 'Type 1 (bare-metal) hypervisors run directly on the hardware. Type 2 hypervisors run on top of a host operating system.',
  },
  {
    id: 'q-lpic1-101-2-044', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following is an example of a Type 1 hypervisor?',
    options: ['VirtualBox', 'VMware Workstation', 'KVM/Xen/VMware ESXi', 'QEMU'],
    correct: 2,
    explanation: 'KVM, Xen, and VMware ESXi are Type 1 hypervisors. VirtualBox and VMware Workstation are Type 2.',
  },
  {
    id: 'q-lpic1-101-2-045', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the main difference between a Virtual Machine (VM) and a Container?',
    options: [
      'VMs share the kernel, containers have separate kernels',
      'Containers share the host kernel, while VMs have a full kernel for each instance',
      'There is no functional difference',
      'Containers are heavier than VMs'
    ],
    correct: 1,
    explanation: 'Containers share the host kernel (making them lightweight), whereas VMs run a complete OS and kernel (providing better isolation).',
  },
  {
    id: 'q-lpic1-101-2-046', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What does IaaS stand for in cloud computing?',
    options: ['Internet as a Service', 'Infrastructure as a Service', 'Integration as a Service', 'Intel as a Service'],
    correct: 1,
    explanation: 'IaaS (Infrastructure as a Service): the provider offers VMs, storage, and networking; the user manages the OS and applications.',
  },
  {
    id: 'q-lpic1-101-2-047', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which cloud model provides ready-to-use applications (e.g., email, CRM)?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    correct: 2,
    explanation: 'SaaS (Software as a Service) offers complete applications managed by the provider, such as Gmail or Salesforce.',
  },
  {
    id: 'q-lpic1-101-2-048', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which containerization technology is most common on Linux?',
    options: ['LXC', 'Docker/Podman', 'Hyper-V', 'OpenVZ'],
    correct: 1,
    explanation: 'Docker (and Podman) are the most widely used container platforms on Linux.',
  },
  {
    id: 'q-lpic1-101-2-049', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which Linux kernel module provides hardware-assisted virtualization?',
    options: ['vbox', 'kvm', 'vmware', 'hyperv'],
    correct: 1,
    explanation: 'KVM (Kernel-based Virtual Machine) is the module that turns Linux into a Type 1 hypervisor.',
  },
  {
    id: 'q-lpic1-101-2-050', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is PaaS in cloud computing?',
    options: [
      'The provider manages everything, including applications',
      'The provider provides a development and runtime platform; the user manages the code',
      'The user manages everything from hardware up',
      'Automatic programming on servers'
    ],
    correct: 1,
    explanation: 'PaaS (Platform as a Service): the provider manages the OS, runtime, and middleware; the user focuses on deploying code.',
  },
];

