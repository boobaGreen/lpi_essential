// LPIC-1 101 — Topic 104: 设备、文件系统、FHS — Quiz ZH

export const lpic1_101_topic4_zh = [
  {
    id: 1,
    question: "哪个命令用于在分区中创建 Ext4 文件系统？",
    options: ["fdisk", "mkfs.ext4", "fsck", "mount"],
    answer: "mkfs.ext4",
    explanation: "mkfs (make filesystem) 是通过所需结构格式化分区的命令。"
  },
  {
    id: 2,
    question: "哪个命令检查并尝试修复 Linux 文件系统中的错误？",
    options: ["fdisk", "df", "fsck", "tune2fs"],
    answer: "fsck",
    explanation: "fsck (filesystem check) 是用于损坏分区的诊断工具。"
  },
  {
    id: 3,
    question: "哪个配置文件定义了系统启动时的自动磁盘挂载？",
    options: ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/etc/mount.conf"],
    answer: "/etc/fstab",
    explanation: "fstab (filesystem table) 文件对于操作系统的正确启动至关重要。"
  },
  {
    id: 4,
    question: "在 fstab 中推荐使用哪个标识符而不是设备名称（如 /dev/sda1）？",
    options: ["LABEL", "ID", "UUID", "SERIAL"],
    answer: "UUID",
    explanation: "UUID 是唯一的，即使电缆或硬件顺序发生变化也不会改变。"
  },
  {
    id: 5,
    question: "哪个命令以易读格式 (GB/MB) 显示已用和可用的磁盘空间？",
    options: ["du -sh", "df -h", "ls -l", "free -m"],
    answer: "df -h",
    explanation: "df (disk free) 显示所有已挂载分区的摘要。"
  },
  {
    id: 6,
    question: "文件上的八进制权限 755 意味着：",
    options: [
      "所有者拥有一切，组和其他人仅允许读取和执行",
      "所有人都有全部权限",
      "仅所有者可以读取和写入",
      "没有人可以执行该文件"
    ],
    answer: "所有者拥有一切，组和其他人仅允许读取 and 执行",
    explanation: "7 (rwx) 代表所有者，5 (r-x) 代表组和他人。"
  },
  {
    id: 7,
    question: "哪个特殊位允许执行文件以文件所有者 (root) 的权限运行？",
    options: ["Sticky Bit", "SGID", "SUID", "Umask"],
    answer: "SUID",
    explanation: "SUID (Set User ID) 常用于 'passwd' 命令。"
  },
  {
    id: 8,
    question: "哪个命令在两个文件名之间创建符号链接 (soft link)？",
    options: ["ln", "ln -s", "cp -l", "link"],
    answer: "ln -s",
    explanation: "-s (symbolic) 创建一个指针，而不是指向 inode 的硬链接。"
  },
  {
    id: 9,
    question: "根据 FHS (文件系统层级标准)，系统基本二进制文件应存放在哪里？",
    options: ["/home", "/var", "/bin", "/tmp"],
    answer: "/bin",
    explanation: "/bin 和 /usr/bin 包含基本工具 (ls, cp 等)。"
  },
  {
    id: 10,
    question: "目录（如 /tmp）中的哪个特殊位阻止用户删除彼此的文件？",
    options: ["SUID", "SGID", "Sticky Bit", "Immutable bit"],
    answer: "Sticky Bit",
    explanation: "Sticky bit 将删除操作限制为仅允许所有者或 root。"
  }
];
