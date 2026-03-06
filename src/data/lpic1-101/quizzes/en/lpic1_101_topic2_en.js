// LPIC-1 101 Quiz — Topic 2: Installation and Package Management (English)
// ~50 MCQ questions for Topic 102

export const lpic1_101_topic2QuizzesEN = [
  // ─── 102.1 Hard Disk Layout (10 questions) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which filesystem hierarchy must be available during the initial boot phase before other filesystems are mounted?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot contains the kernel and initramfs files required by the bootloader to start the operating system.',
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'easy', type: 'mcq',
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
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'medium', type: 'mcq',
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
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which directory should be placed on a separate partition if the system runs a database or generates massive log files?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var contains variable data like logs, mail spools, and databases. If it fills up, it can crash the system unless it is isolated on its own partition.',
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'What is the absolute maximum number of primary partitions permitted on a disk using the classic MBR partition table?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'MBR (Master Boot Record) allows a maximum of 4 primary partitions. To have more, one must be an Extended partition containing logical drives.',
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What technology allows you to combine multiple physical disks into a single volume group and create resizable logical volumes?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (Logical Volume Manager) provides a layer of abstraction over physical storage, allowing dynamic resizing and snapshotting of volumes.',
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'When installing Linux on a modern UEFI-based system, which special partition is strictly required?',
    options: ['A swap partition', 'An LVM physical volume', 'An EFI System Partition (ESP)', 'A /boot partition formatted as ext4'],
    correct: 2,
    explanation: 'UEFI firmware requires an EFI System Partition (ESP), typically formatted as FAT32 and mounted at /boot/efi, to hold UEFI bootloaders like GRUB.',
  },

  // ─── 102.3 Shared Libraries (8 questions) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-1-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command displays the shared library dependencies required by a dynamically linked executable?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) prints the shared libraries (.so files) required by each program or shared library specified on the command line.',
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-1-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which configuration file lists the directories where the dynamic linker searches for shared libraries?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf (and includes in /etc/ld.so.conf.d/) defines the non-standard directories ld.so should search for libraries.',
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-1-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'After adding a new directory to /etc/ld.so.conf, which command MUST be run to update the library cache?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig updates the dynamic linker cache (/etc/ld.so.cache) based on the directories configured in /etc/ld.so.conf.',
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-1-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which environment variable can be used to temporarily instruct the dynamic linker to search additional directories for libraries before searching the defaults?',
    options: ['LIB_PATH', 'LD_LIBRARY_PATH', 'PATH', 'LDFLAGS'],
    correct: 1,
    explanation: 'LD_LIBRARY_PATH is used to temporarily prepend directories to the dynamic linker\'s search path. Typically used for testing or development.',
  },

  // ─── 102.4 Debian Package Management (12 questions) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which low-level Debian tool is used to install a local .deb file without automatically downloading dependencies?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg is the base package manager for Debian. `dpkg -i file.deb` installs a local package but will fail if dependencies are missing.',
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command updates the local index of available packages from the configured repositories on a Debian system?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update (or apt-get update) downloads the latest package lists from the repositories so the system knows what software is available.',
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which command installs package upgrades on a Debian system?',
    options: ['apt update', 'apt install', 'apt upgrade', 'apt dist-upgrade'],
    correct: 2,
    explanation: 'apt upgrade installs the newest versions of all packages currently installed on the system.',
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the primary difference between `apt remove` and `apt purge`?',
    options: [
      'remove uninstall the package; purge deletes the package from the apt cache',
      'remove leaves configuration files behind; purge removes the package AND its configuration files',
      'purge forces removal ignoring dependencies',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'apt purge (or dpkg -P) completely removes the package including global configuration files in /etc. remove leaves config files intact.',
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command lists all installed packages on a Debian-based system?',
    options: ['dpkg -l', 'apt list --installed', 'Both dpkg -l and apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Both `dpkg -l` and `apt list --installed` perform this action. dpkg -l provides a traditional tabular view.',
  },
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which dpkg flag allows you to find out which installed package provided a specific file (e.g., /bin/ls)?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (or --search) searches for a filename from installed packages. E.g., `dpkg -S /bin/ls` returns coreutils.',
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'In which file or directory does APT store the list of repositories from which to download packages?',
    options: ['/etc/apt/apt.conf', '/etc/dpkg/dpkg.cfg', '/etc/apt/sources.list', '/var/lib/apt/'],
    correct: 2,
    explanation: '/etc/apt/sources.list (and files in /etc/apt/sources.list.d/) define the APT repositories used for downloading packages.',
  },

  // ─── 102.5 RPM and YUM/DNF Package Management (12 questions) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which low-level tool is used to install a local .rpm file on a Red Hat based system?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) is the base command to install an RPM. Like dpkg, it does not automatically download dependencies.',
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which modern high-level tool replaced YUM as the default package manager in Fedora and recent RHEL versions?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) is the next-generation version of YUM, offering better dependency resolution and performance.',
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command lists all installed RPM packages on the system?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) lists the names of all currently installed RPM packages.',
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which rpm command queries an installed package to see which files it installed?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) lists the files installed by a specific package. -qi shows info, -qc shows config files.',
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'How do you find which RPM package provided the file /etc/httpd/conf/httpd.conf?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) queries the RPM database to find which installed package owns the specified file.',
  },
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command verifies the integrity of an installed RPM package (comparing sizes, permissions, hashes to the original)?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (or --verify) compares information about installed files against the original metadata stored in the rpm database.',
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Where are the repository configuration files located for DNF/YUM?',
    options: ['/etc/yum.repos.d/', '/etc/dnf/sources.list', '/var/lib/rpm/', '/etc/rpm/repos.d/'],
    correct: 0,
    explanation: '/etc/yum.repos.d/ contains .repo files that define the repositories YUM and DNF use to download packages.',
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which package manager is the standard for SUSE/openSUSE Linux?',
    options: ['dnf', 'apt', 'zypper', 'pacman'],
    correct: 2,
    explanation: 'zypper is the command-line package manager for openSUSE and SUSE Linux Enterprise (SLES), using RPM packages.',
  },

  // ─── 102.6 Virtualization (3 questions) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-1-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What is the main difference between Type 1 and Type 2 hypervisors?',
    options: [
      'Type 1 requires Windows, Type 2 requires Linux',
      'Type 1 runs directly on hardware (bare-metal), Type 2 runs on top of a host operating system',
      'Type 1 is for containers, Type 2 is for virtual machines',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'Type 1 (e.g., KVM, ESXi) runs on bare metal for max performance. Type 2 (e.g., VirtualBox) runs as an application inside a host OS.',
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-1-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'How do Linux containers (like Docker or Podman) differ from full Virtual Machines?',
    options: [
      'Containers are slower than VMs',
      'Containers share the host operating system kernel, avoiding the overhead of running a full guest OS',
      'Containers can run Windows apps natively on Linux',
      'Containers require dedicated hardware'
    ],
    correct: 1,
    explanation: 'Containers are lightweight because they share the host\'s kernel, isolating processes using namespaces and cgroups instead of emulating hardware.',
  },
]
