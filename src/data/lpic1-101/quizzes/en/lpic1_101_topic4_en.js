// LPIC-1 101 Quiz — Topic 4: Devices, Filesystems, FHS (English)

export const lpic1_101_topic4QuizzesEN = [
  // ─── 104.1 Partitions and Filesystems (5 questions) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which interactive command-line tool is traditionally used to create and manipulate MBR partition tables?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` is the traditional interactive text-based tool for manipulating disk partition tables (especially MBR).',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which partitioning tool is specifically designed to work with GPT (GUID Partition Table) using an interface similar to fdisk?',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) is modeled after fdisk but specifically handles GPT partition tables.',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Unlike fdisk, which partitioning tool can apply changes immediately without needing an explicit write command?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) executes commands (like creating or deleting partitions) immediately on the disk.',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command writes an ext4 filesystem onto the partition /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` builds an ext4 filesystem on a specified device/partition.',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command prepares a partition to be used as swap space?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` formats the partition or file with a swap signature.',
  },
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command can be used to list the partitions currently available on a disk?',
    options: ['lsblk', 'fdisk -l', 'df', 'Both lsblk and fdisk -l'],
    correct: 3,
    explanation: 'Both `lsblk` and `fdisk -l` show partition lists; `lsblk` shows a tree view while `fdisk -l` gives technical details.',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which is the most common default filesystem for standard partitions on many Linux distributions?',
    options: ['NTFS', 'FAT32', 'ext4', 'ReiserFS'],
    correct: 2,
    explanation: '`ext4` (Fourth Extended Filesystem) is the standard and most widely used filesystem on Linux.',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which filesystem is used as the default for many modern Red Hat, RHEL, and Fedora installations?',
    options: ['ext4', 'xfs', 'btrfs', 'zfs'],
    correct: 1,
    explanation: '`XFS` is the default on Red Hat-based systems due to its performance with large files and scalability.',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command displays the Universally Unique Identifier (UUID) of disk partitions?',
    options: ['blkid', 'lsblk -f', 'Both blkid and lsblk -f', 'fdisk -l'],
    correct: 2,
    explanation: 'Both `blkid` and `lsblk -f` correctly display the UUID, which is vital for persistent mounting in `/etc/fstab`.',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to format a partition specifically with the XFS filesystem?',
    options: ['mkfs.ext4', 'mkfs.xfs', 'xfs_mkfs', 'format -t xfs'],
    correct: 1,
    explanation: '`mkfs.xfs` is the standard utility for creating XFS filesystems.',
  },

  // ─── 104.2 Filesystem Integrity (5 questions) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What is a critical requirement before running `fsck` to repair a filesystem?',
    options: [
      'The system must be rebooted into rescue target',
      'The filesystem must be unmounted or mounted read-only',
      'The root user must run it with the --force flag',
      'The filesystem must be a logical volume'
    ],
    correct: 1,
    explanation: 'Running fsck on an actively mounted read-write filesystem can result in severe data corruption.',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows the total disk space, used space, and available space on all currently mounted filesystems?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) reports filesystem disk space usage. The `-h` flag makes it human-readable.',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'If you need to know how much disk space a specific directory (like /var/log) is consuming, which command do you use?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) estimates file space usage; `-s` summarizes the total.',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which tool allows you to modify parameters (like max mount counts or error behavior) on an existing ext4 filesystem?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` allows adjustment of tunable filesystem parameters on ext2/ext3/ext4 filesystems.',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which command is specifically used to check and repair XFS filesystems?',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: 'While `fsck.xfs` exists for compatibility, `xfs_repair` is the primary tool for checking and repairing XFS filesystems.',
  },
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command is used to verify the integrity of and repair errors on a Linux filesystem?',
    options: ['mkfs', 'fsck', 'mount', 'fdisk'],
    correct: 1,
    explanation: '`fsck` (filesystem check) is used for diagnostic and repair; it should always be run on unmounted filesystems.',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which tool can be used to expand or shrink an ext2, ext3, or ext4 filesystem?',
    options: ['tune2fs', 'resize2fs', 'e2fsck', 'fsck.ext4'],
    correct: 1,
    explanation: '`resize2fs` is the standard utility for resizing Extended filesystems, supporting online growth for ext4.',
  },

  // ─── 104.3 Mounting and Unmounting (5 questions) ───
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which configuration file does the OS read at boot to automatically mount filesystems?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) contains static information about filesystems and their mount points.',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'What command mounts all filesystems mentioned in /etc/fstab with the "auto" option?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` executes a mount for every entry in /etc/fstab, except those marked with "noauto".',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'In /etc/fstab, what is the purpose of the sixth field (pass)?',
    options: [
      'It defines the number of times the filesystem can be mounted',
      'It controls whether the filesystem uses swap',
      'It determines the order in which fsck checks the filesystem at boot',
      'It sets the backup frequency for dump'
    ],
    correct: 2,
    explanation: 'The pass field tells fsck the order to check filesystems. Root is 1, others are 2, and 0 means do not check.',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which fstab mount option prevents users from executing any binary files located on that filesystem?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'The `noexec` mount option prevents the execution of binaries on the filesystem.',
  },
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command is used to activate a partition that has been prepared as swap space?',
    options: ['mount -t swap', 'swapon /dev/sda2', 'swapctl -a', 'mkswap /dev/sda2'],
    correct: 1,
    explanation: '`swapon` enables the device for paging and swapping.',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which file (or symbolic link) provides a list of currently mounted filesystems as maintained by the kernel?',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` is a virtual file that reflects the current state of mounts as known by the kernel. `/etc/mtab` often symlinks to it in modern systems.',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command is used to manually mount a filesystem onto a specific directory?',
    options: ['mount', 'attach', 'link', 'add'],
    correct: 0,
    explanation: 'The `mount` command attaches a storage device to a specific point in the directory tree.',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to safely unmount a filesystem?',
    options: ['unmount', 'umount', 'dismount', 'remove'],
    correct: 1,
    explanation: 'The command is `umount` (note the spelling: no "n").',
  },

  // ─── 104.5 Permissions and Ownership (6 questions) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'If a file has permissions `rwxr-xr--`, what is the numeric (octal) equivalent?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4). Result: 754.',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command changes the owner and group of a file named report.doc to user "alice" and group "finance"?',
    options: ['chmod alice:finance report.doc', 'chown alice:finance report.doc', 'chgrp alice:finance report.doc', 'chuser alice:finance report.doc'],
    correct: 1,
    explanation: '`chown user:group file` changes both the owner and the group.',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What happens when a binary executable file has the SUID (Set User ID) bit set?',
    options: [
      'The file can only be modified by the root user',
      'When executed, the process runs with the privileges of the file\'s owner',
      'The file runs in the background automatically',
      'It cannot be deleted by anyone except root'
    ],
    correct: 1,
    explanation: 'SUID allows a process to run with the privileges of the file owner.',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'A directory (/shared) has permissions 1777 (drwxrwxrwt). What does the sticky bit (the "t") do here?',
    options: [
      'All newly created files inherent the group ownership',
      'It forces all files to be read-only',
      'It prevents users from deleting files owned by other users within this directory',
      'It makes the directory immutable'
    ],
    correct: 2,
    explanation: 'The sticky bit on a directory prevents users from deleting files they do not own.',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'If the system umask is 0022, what are the default permissions applied to a newly created text file?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Files start with 666; 666 - 022 = 644.',
  },
  {
    id: 'q-lpic1-101-4-031', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which flag is used with `chmod` or `chown` to apply changes to all files and subdirectories within a directory?',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: 'The `-R` flag stands for Recursive and applies the command to the directory and its entire tree.',
  },
  {
    id: 'q-lpic1-101-4-032', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command is used to change the access permissions of files or directories?',
    options: ['chown', 'chmod', 'chgrp', 'chattr'],
    correct: 1,
    explanation: '`chmod` (change mode) is used to set read, write, and execute permissions.',
  },
  {
    id: 'q-lpic1-101-4-033', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'What is a primary benefit of setting the SGID bit on a collaborative directory?',
    options: [
      'It prevents files from being deleted by others',
      'Newly created files inherit the group ownership of the directory',
      'It allows any user to execute files as the owner',
      'It encrypts all files within the directory'
    ],
    correct: 1,
    explanation: 'SGID on a directory ensures that all new files belong to the directory\'s group, facilitating group collaboration.',
  },
  {
    id: 'q-lpic1-101-4-034', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which numeric mode sets the SUID bit on a file along with standard 755 (rwxr-xr-x) permissions?',
    options: ['1755', '2755', '4755', '0755'],
    correct: 2,
    explanation: 'The leading bit 4 represents SUID (Set User ID).',
  },
  {
    id: 'q-lpic1-101-4-035', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'With a umask of 027, what will be the default octal permissions for a newly created DIRECTORY?',
    options: ['750', '640', '770', '700'],
    correct: 0,
    explanation: 'Directories start with 777; 777 - 027 = 750 (rwxr-x---).',
  },
  {
    id: 'q-lpic1-101-4-036', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which octal permission represents the symbolic mode rw-r--r--?',
    options: ['755', '644', '600', '664'],
    correct: 1,
    explanation: 'rw- (6), r-- (4), r-- (4) equals 644.',
  },

  // ─── 104.6 Hard and Soft Links (4 questions) ───
  {
    id: 'q-lpic1-101-4-037', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following creates a symbolic (soft) link named `shortcut` pointing to `file.txt`?',
    options: ['ln file.txt shortcut', 'ln -s file.txt shortcut', 'link file.txt shortcut', 'ln -c file.txt shortcut'],
    correct: 1,
    explanation: '`ln -s target link_name` creates a symbolic link.',
  },
  {
    id: 'q-lpic1-101-4-038', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which statement is TRUE regarding hard links?',
    options: [
      'They can point to directories',
      'They can span across different filesystems',
      'They share the exact same inode number as the original file',
      'If the original file is deleted, the hard link stops working'
    ],
    correct: 2,
    explanation: 'Hard links point to the inode directly and share the same inode number.',
  },
  {
    id: 'q-lpic1-101-4-039', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What happens to a symbolic link if the original file it points to is deleted?',
    options: [
      'The symbolic link becomes a "broken" link and stops working',
      'The symbolic link is automatically deleted',
      'The data remains available through the symbolic link',
      'The symbolic link converts into a hard link'
    ],
    correct: 0,
    explanation: 'A symlink becomes broken (dangling) if its target is removed.',
  },
  {
    id: 'q-lpic1-101-4-040', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'When you create a hard link to a file, what happens to the link count of that file\'s inode?',
    options: [
      'It decreases by 1',
      'It increases by 1',
      'It stays the same',
      'It is reset to 0'
    ],
    correct: 1,
    explanation: 'Creating a hard link increments the hard link count (nlink) on the inode.',
  },
  {
    id: 'q-lpic1-101-4-041', lessonId: 'lpic1-104-6-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Why does Linux generally prohibit users from creating hard links to directories?',
    options: [
      'Directories are too large for hard links',
      'To prevent the creation of infinite circular loops in the filesystem',
      'Directories do not have inode numbers',
      'Only soft links are supported for metadata'
    ],
    correct: 1,
    explanation: 'Hard links to directories would create complex circular structures that could crash filesystem traversal tools.',
  },
  {
    id: 'q-lpic1-101-4-042', lessonId: 'lpic1-104-6-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command displays the unique inode number assigned to a file?',
    options: ['ls -l', 'ls -i', 'stat', 'Both ls -i and stat'],
    correct: 3,
    explanation: '`ls -i` displays the inode number next to the file name, and `stat` provides comprehensive inode details.',
  },

  // ─── 104.7 FHS (5 questions) ───
  {
    id: 'q-lpic1-101-4-043', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'According to the Filesystem Hierarchy Standard (FHS), where should system-wide configuration files be located?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc contains host-specific system-wide configuration files.',
  },
  {
    id: 'q-lpic1-101-4-044', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which directory is intended for rapidly changing, variable data such as log files and databases?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var contains variable data files.',
  },
  {
    id: 'q-lpic1-101-4-045', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Where should optional, monolithic third-party software packages be installed according to the FHS?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt is reserved for the installation of additional software packages.',
  },
  {
    id: 'q-lpic1-101-4-046', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'In modern Linux systems adhering to FHS, which directory is often a symbolic link to /usr/bin?',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: 'Many modern distributions (like Fedora or Arch) have merged `/bin` and `/usr/bin`, making `/bin` a symlink to `/usr/bin`.',
  },
  {
    id: 'q-lpic1-101-4-047', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which directory contains temporary files that are NOT guaranteed to be preserved between system reboots?',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` is for temporary files; many systems clear it on reboot. `/var/tmp` is for temporary files that should be preserved across reboots.',
  },
  {
    id: 'q-lpic1-101-4-048', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'According to the FHS, what is the traditional location for non-root user home directories?',
    options: ['/users', '/home', '/usr', '/root'],
    correct: 1,
    explanation: 'The `/home` directory contains the personal storage for all standard users.',
  },
  {
    id: 'q-lpic1-101-4-049', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to manually update the database used by the `locate` utility?',
    options: ['updatedb', 'locate --refresh', 'find -db', 'mklocatedb'],
    correct: 0,
    explanation: '`updatedb` scans the filesystem and updates the database used for fast file searching.',
  },
  {
    id: 'q-lpic1-101-4-050', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Where should site-specific data served by services like Web and FTP servers be located?',
    options: ['/opt', '/srv', '/var', '/data'],
    correct: 1,
    explanation: 'The `/srv` directory is reserved for data provided by local services.',
  },
  {
    id: 'q-lpic1-101-4-051', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which standard directory is the primary location for system log files?',
    options: ['/var/log', '/etc/log', '/log', '/sys/log'],
    correct: 0,
    explanation: '`/var/log` contains logs for the kernel, boot process, and various applications.',
  },
];
