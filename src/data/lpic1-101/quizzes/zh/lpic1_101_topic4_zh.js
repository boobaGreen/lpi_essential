// LPIC-1 101 Quiz — 主题 4：设备、Linux 文件系统、FHS (中文)

export const lpic1_101_topic4_zh = [
  // ─── 104.1 创建分区和文件系统 (5 题) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '以下哪个交互式命令行工具传统上用于创建和操作 MBR 分区表？',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` 是传统的操作磁盘分区表（尤其是 MBR）的交互式文本工具。',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '哪个分区工具专门设计用于处理 GPT (GUID 分区表)，并使用类似于 fdisk 的界面？',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) 模仿 fdisk 的界面，但专门用于处理 GPT 分区表。',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '与 fdisk 不同，哪个分区工具可以立即应用更改，而不需要显式的写入命令？',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) 会立即在磁盘上执行命令（如创建或删除分区）。',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个命令在分区 /dev/sdb1 上写入 ext4 文件系统？',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` 在指定的设备或分区上构建 ext4 文件系统。',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '哪个命令准备一个分区以用作交换空间 (swap)？',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` 格式化分区或文件，使其带有交换空间签名。',
  },

  // ─── 104.2 维护文件系统的完整性 (5 题) ───
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '运行 `fsck` 修复文件系统之前的一个关键要求是什么？',
    options: [
      '系统必须重启进入救援目标模式 (rescue target)',
      '文件系统必须卸载 (unmounted) 或以只读方式挂载',
      '必须由 root 用户使用 --force 标志运行',
      '文件系统必须是一个逻辑卷'
    ],
    correct: 1,
    explanation: '在以读写模式挂载的文件系统上运行 fsck 可能会导致严重的数据损坏。',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个命令可以显示所有当前挂载的文件系统的总磁盘空间、已用空间和可用空间？',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) 报告文件系统磁盘空间的使用情况。`-h` 标志使其易于阅读（GB/MB）。',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '如果您想知道特定目录（如 /var/log）占用了多少磁盘空间，您会使用哪个命令？',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) 估算文件空间使用情况；`-s` 提供总计摘要。',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '哪个工具允许您修改现有 ext4 文件系统的参数（如最大挂载次数或错误行为）？',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` 允许在不重新格式化的情况下调整 ext2/ext3/ext4 文件系统的参数。',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '哪个命令专门用于检查和修复 XFS 文件系统？',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: '虽然为了兼容性存在 `fsck.xfs`，但 `xfs_repair` 是检查和修复 XFS 文件系统的主要工具。',
  },

  // ─── 104.3 控制文件系统的挂载和卸载 (5 题) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '操作系统在启动时读取哪个配置文件以自动挂载文件系统？',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab 文件包含关于文件系统及其挂载点的静态信息。',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '哪个命令挂载 /etc/fstab 中提到的所有带有 "auto" 选项的文件系统？',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` 会挂载 /etc/fstab 中的所有条目，除非标有 "noauto"。',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '在 /etc/fstab 中，第六个字段 (pass) 的目的是什么？',
    options: [
      '它定义了文件系统可以挂载的次数',
      '它控制文件系统是否使用交换空间',
      '它决定了系统启动时 fsck 检查文件系统的顺序',
      '它设置了 dump 命令的备份频率'
    ],
    correct: 2,
    explanation: 'pass 字段告知 fsck 检查文件系统的顺序。根分区通常为 1，其他分区为 2，0 表示不检查。',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '哪个 fstab 挂载选项可以防止用户在对应的文件系统上执行任何二进制文件？',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: '`noexec` 挂载选项禁止在文件系统上运行二进制文件。',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '哪个文件（或符号链接）提供了内核维护的当前挂载的文件系统列表？',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` 是一个虚拟文件，反映了内核已知的详细挂载状态。',
  },

  // ─── 104.5 管理文件权限和所有权 (6 题) ───
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '如果一个文件的权限是 `rwxr-xr--`，对应的数字（八进制）是多少？',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4)。结果为 754。',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '哪个命令将名为 report.doc 的文件的所有者更改为 "alice"，组更改为 "finance"？',
    options: ['chmod alice:finance report.doc', 'chown alice:finance report.doc', 'chgrp alice:finance report.doc', 'chuser alice:finance report.doc'],
    correct: 1,
    explanation: '`chown user:group file` 命令可以同时更改所有者和所有组。',
  },
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '当二进制可执行文件设置了 SUID (Set User ID) 位时，会发生什么？',
    options: [
      '该文件只能由 root 用户修改',
      '执行时，进程以文件所有者的权限运行',
      '该文件会自动在后台运行',
      '除了 root 之外，任何人都不能删除它'
    ],
    correct: 1,
    explanation: 'SUID 允许普通用户以文件所有者（通常是 root）的临时权限执行该文件（如 passwd 命令）。',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '一个目录 (/shared) 的权限为 1777 (drwxrwxrwt)。粘滞位 (Sticky bit，即 "t") 在这里有什么作用？',
    options: [
      '所有新创建的文件都会继承组所有权',
      '它强制所有文件都变为只读',
      '它防止用户删除该目录内不属于他们的文件',
      '它使目录变为不可变'
    ],
    correct: 2,
    explanation: '目录上的粘滞位（Sticky bit）通常用于类似 /tmp 的共享目录，防止用户删除他人的文件。',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '如果系统 umask 是 0022，新创建的文本文件的默认权限是什么？',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: '文件的基础权限通常为 666；666 - 022 = 644 (rw-r--r--)。',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '哪个标志与 `chmod` 或 `chown` 一起使用可以递归应用于目录内的所有文件和子目录？',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: '`-R` 标志表示递归，会将命令应用于目录及其整个树状结构。',
  },

  // ─── 104.6 创建和修改硬链接和符号链接 (4 题) ───
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '以下哪个命令可以创建一个名为 `shortcut` 且指向 `file.txt` 的符号链接（软链接）？',
    options: ['ln file.txt shortcut', 'ln -s file.txt shortcut', 'link file.txt shortcut', 'ln -c file.txt shortcut'],
    correct: 1,
    explanation: '`ln -s target link_name` 用于创建符号链接。',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '关于硬链接，以下哪项叙述是正确的？',
    options: [
      '它们可以指向目录',
      '它们可以跨越不同的文件系统',
      '它们与原文件共享完全相同的 inode 节点号',
      '如果删除了原文件，硬链接也会失效'
    ],
    correct: 2,
    explanation: '硬链接直接指向 inode，并共享相同的 inode 号。它们不能跨文件系统。',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '如果符号链接指向的原文件被删除，符号链接会怎样？',
    options: [
      '符号链接变为“断开”状态并停止工作',
      '符号链接会被自动删除',
      '数据仍然可以通过符号链接访问',
      '符号链接会自动转为硬链接'
    ],
    correct: 0,
    explanation: '如果目标被删除，符号链接（软链接）将变为断开（dangling）状态。',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '当您为文件创建硬链接时，该文件的 inode 链接计数 (link count) 会发生什么变化？',
    options: [
      '减少 1',
      '增加 1',
      '保持不变',
      '重置为 0'
    ],
    correct: 1,
    explanation: '创建硬链接会使 inode 上的链接计数 (nlink) 增加 1。',
  },

  // ─── 104.7 查找系统文件并将文件放置在正确的位置 (5 题) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '根据文件系统层级标准 (FHS)，系统级配置文件应该放在哪里？',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc 目录包含主机特定的系统级配置文件。',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个目录旨在存放快速变化的变量数据，如日志文件和数据库？',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var 目录存放变量数据文件。',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '根据 FHS，可选的、单体式的第三方软件包应该安装在哪里？',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt 目录保留用于安装额外的软件包。',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '在遵循 FHS 的现代 Linux 系统中，哪个目录通常是指向 /usr/bin 的符号链接？',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: '许多现代发行版（如 Fedora 或 Arch）合并了 `/bin` 和 `/usr/bin`，使 `/bin` 成为指向 `/usr/bin` 的链接。',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '哪个目录包含的临时文件不保证在系统重启后被保留？',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` 用于临时文件，许多系统在重启时会清理它。',
  },
];
