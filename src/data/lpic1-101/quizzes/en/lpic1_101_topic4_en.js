// LPIC-1 101 Quiz — Topic 4: Devices, Filesystems, FHS (English)
// ~50 MCQ questions for Topic 104

export const lpic1_101_topic4QuizzesEN = [
  // ─── 104.1 Partitions and Filesystems (10 questions) ───
  {
    id: 'q-lpic1-104-1-001', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which interactive command-line tool is traditionally used to create and manipulate MBR partition tables?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` is the traditional interactive text-based tool for manipulating disk partition tables (especially MBR).',
  },
  {
    id: 'q-lpic1-104-1-002', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Unlike fdisk, which partitioning tool can apply changes immediately without needing an explicit write command?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) executes commands (like creating or deleting partitions) immediately on the disk, whereas fdisk only commits changes when you type `w`.',
  },
  {
    id: 'q-lpic1-104-1-003', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command writes an ext4 filesystem onto the partition /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` (or `mkfs -t ext4`) builds an ext4 filesystem on a specified device/partition.',
  },
  {
    id: 'q-lpic1-104-1-004', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command prepares a partition to be used as swap space?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` formats the partition or file with a swap signature. Afterwards, `swapon` activates it for use by the system.',
  },

  // ─── 104.2 Filesystem Integrity (8 questions) ───
  {
    id: 'q-lpic1-104-2-001', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What is a critical requirement before running `fsck` to repair a filesystem?',
    options: [
      'The system must be rebooted into rescue target',
      'The filesystem must be unmounted or mounted read-only',
      'The root user must run it with the --force flag',
      'The filesystem must be an logical volume'
    ],
    correct: 1,
    explanation: 'Running fsck on an actively mounted read-write filesystem can result in severe data corruption. It must be unmounted first.',
  },
  {
    id: 'q-lpic1-104-2-002', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows the total disk space, used space, and available space on all currently mounted filesystems?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) reports filesystem disk space usage. The `-h` flag makes it human-readable (MB/GB).',
  },
  {
    id: 'q-lpic1-104-2-003', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'If you need to know how much disk space a specific directory (like /var/log) is consuming, which command do you use?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) estimates file space usage. `-s` gives a summarize total, and `-h` makes it human-readable.',
  },
  {
    id: 'q-lpic1-104-2-004', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which tool allows you to modify parameters (like max mount counts or error behavior) on an existing ext4 filesystem?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` allows adjustment of tunable filesystem parameters on ext2/ext3/ext4 filesystems without reformatting.',
  },

  // ─── 104.3 Mounting and Unmounting (8 questions) ───
  {
    id: 'q-lpic1-104-3-001', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which configuration file does the OS read at boot to automatically mount filesystems?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) contains static information about filesystems and their mount points used during boot.',
  },
  {
    id: 'q-lpic1-104-3-002', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'What command mounts all filesystems mentioned in /etc/fstab with the "auto" option?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` executes a mount for every entry in /etc/fstab, except those marked with the "noauto" option.',
  },
  {
    id: 'q-lpic1-104-3-003', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'In /etc/fstab, what is the purpose of the sixth field (pass)?',
    options: [
      'It defines the number of times the filesystem can be mounted',
      'It controls whether the filesystem uses swap',
      'It determines the order in which fsck checks the filesystem at boot',
      'It sets the backup frequency for dump'
    ],
    correct: 2,
    explanation: 'The pass field (usually 0, 1, or 2) tells fsck the order to check filesystems. Root is 1, others are 2, and 0 means do not check.',
  },
  {
    id: 'q-lpic1-104-3-004', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which fstab mount option prevents users from executing any binary files located on that filesystem?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'The `noexec` mount option prevents the execution of binaries on the filesystem, often used for security on /tmp or removable media.',
  },

  // ─── 104.5 Permissions and Ownership (9 questions) ───
  {
    id: 'q-lpic1-104-5-001', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'If a file has permissions `rwxr-xr--`, what is the numeric (octal) equivalent?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (4+2+1=7) for user, r-x (4+0+1=5) for group, r-- (4+0+0=4) for others. Result: 754.',
  },
  {
    id: 'q-lpic1-104-5-002', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command changes the owner and group of a file named report.doc to user "alice" and group "finance"?',
    options: ['chmod alice:finance report.doc', 'chown alice:finance report.doc', 'chgrp alice:finance report.doc', 'chuser alice:finance report.doc'],
    correct: 1,
    explanation: '`chown user:group file` changes both the ownership and the group ownership simultaneously.',
  },
  {
    id: 'q-lpic1-104-5-003', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What happens when a binary executable file has the SUID (Set User ID) bit set?',
    options: [
      'The file can only be modified by the root user',
      'When executed, the process runs with the privileges of the file\'s owner, not the person executing it',
      'The file runs in the background automatically',
      'It cannot be deleted by anyone except root'
    ],
    correct: 1,
    explanation: 'SUID allows a normal user to execute a file with the temporary privileges of the file\'s owner (commonly root, like with the `passwd` command).',
  },
  {
    id: 'q-lpic1-104-5-004', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'A directory (/shared) has permissions 1777 (drwxrwxrwt). What does the sticky bit (the "t") do here?',
    options: [
      'All newly created files inherent the group ownership',
      'It forces all files to be read-only',
      'It prevents users from deleting files owned by other users within this directory',
      'It makes the directory immutable'
    ],
    correct: 2,
    explanation: 'The sticky bit on a directory prevents users from deleting or renaming files they do not own inside that directory. Example: /tmp.',
  },
  {
    id: 'q-lpic1-104-5-005', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'If the system umask is 0022, what are the default permissions applied to a newly created text file?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Files start with 666 base permission. 666 - 022 = 644 (rw-r--r--). Directories start with 777. 777 - 022 = 755.',
  },

  // ─── 104.6 Hard and Soft Links (5 questions) ───
  {
    id: 'q-lpic1-104-6-001', lessonId: 'lpic1-104-6-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following creates a symbolic (soft) link named `shortcut` pointing to `file.txt`?',
    options: ['ln file.txt shortcut', 'ln -s file.txt shortcut', 'link file.txt shortcut', 'ln -c file.txt shortcut'],
    correct: 1,
    explanation: '`ln -s target link_name` creates a symbolic link. Without `-s`, it creates a hard link.',
  },
  {
    id: 'q-lpic1-104-6-002', lessonId: 'lpic1-104-6-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which statement is TRUE regarding hard links?',
    options: [
      'They can point to directories',
      'They can span across different filesystems',
      'They share the exact same inode number as the original file',
      'If the original file is deleted, the hard link stops working'
    ],
    correct: 2,
    explanation: 'Hard links point to the inode directly. They cannot cross filesystems, cannot point to directories, but keep the data accessible even if the original name is deleted.',
  },
  {
    id: 'q-lpic1-104-6-003', lessonId: 'lpic1-104-6-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What happens to a symbolic link if the original file it points to is deleted?',
    options: [
      'The symbolic link becomes a "broken" or "dangling" link and stops working',
      'The symbolic link is automatically deleted',
      'The data remains available through the symbolic link',
      'The symbolic link converts into a hard link'
    ],
    correct: 0,
    explanation: 'A symlink stores a text path to the target. If the target is deleted, the path points to nothing, causing an error when trying to access the link.',
  },

  // ─── 104.7 FHS (6 questions) ───
  {
    id: 'q-lpic1-104-7-001', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'According to the Filesystem Hierarchy Standard (FHS), where should system-wide configuration files be located?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc contains host-specific system-wide configuration files. No executable binaries should be placed here.',
  },
  {
    id: 'q-lpic1-104-7-002', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which directory is intended for rapidly changing, variable data such as log files, mail spools, and databases?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var contains variable data. Logs specifically go in /var/log.',
  },
  {
    id: 'q-lpic1-104-7-003', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Where should optional, monolithic third-party software packages be installed according to the FHS?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt (optional) is reserved for the installation of complete, unbundled add-on software packages.',
  },
]
