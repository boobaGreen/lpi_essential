// LPIC-1 101 — Topic 102: 安装和软件包管理 — Quiz ZH

export const lpic1_101_topic2_zh = [
  {
    id: 1,
    question: "在 MBR (主引导记录) 分区表中，主分区的限制是多少？",
    options: ["2", "4", "128", "无限制"],
    answer: "4",
    explanation: "MBR 最多允许 4 个主分区。如果需要更多，必须使用扩展分区。"
  },
  {
    id: 2,
    question: "哪种现代技术支持超过 2TB 的分区和多达 128 个主分区？",
    options: ["MBR", "LVM", "GPT", "FAT32"],
    answer: "GPT",
    explanation: "GPT (GUID 分区表) 是 UEFI 系统中使用的现代标准。"
  },
  {
    id: 3,
    question: "为什么建议在服务器上将 /var 分区从根目录 (/) 中分离出来？",
    options: [
      "它包含系统二进制文件",
      "它包含不断增长的文件（日志/邮件），可能会填满磁盘",
      "用户在这里存储他们的文档",
      "它是 GRUB 启动管理器所必需的"
    ],
    answer: "它包含不断增长的文件（日志/邮件），可能会填满磁盘",
    explanation: "分离 /var 可以确保失控的日志文件不会阻塞根操作系统。"
  },
  {
    id: 4,
    question: "哪个命令将 GRUB 安装到第一个硬盘 (MBR)？",
    options: ["grub-mkconfig", "grub-install /dev/sda", "update-grub", "grub-setup"],
    answer: "grub-install /dev/sda",
    explanation: "grub-install 将启动管理器的基础代码写入物理磁盘的主引导记录。"
  },
  {
    id: 5,
    question: "哪个命令显示可执行二进制文件所需的共享库 (.so)？",
    options: ["ldd", "ldconfig", "lsmod", "apt show"],
    answer: "ldd",
    explanation: "ldd (list dynamic dependencies) 命令显示所需的库映射。"
  },
  {
    id: 6,
    question: "在 Debian/Ubuntu 中，dpkg 中的 'remove' 和 'purge' 之间的主要区别是什么？",
    options: [
      "Remove 删除所有内容，Purge 仅删除二进制文件",
      "Purge 删除二进制文件和配置文件 (/etc)，Remove 仅删除二进制文件",
      "它们之间没有区别",
      "Purge 从互联网下载软件包"
    ],
    answer: "Purge 删除二进制文件和配置文件 (/etc)，Remove 仅删除二进制文件",
    explanation: "Purge 是完全移除应用程序及其本地定义的设置。"
  },
  {
    id: 7,
    question: "哪个 APT 命令更新来自仓库的目录列表和版本？",
    options: ["apt upgrade", "apt update", "apt dist-upgrade", "apt search"],
    answer: "apt update",
    explanation: "update 将本地仓库文件与互联网上的最新信息同步。"
  },
  {
    id: 8,
    question: "哪个 RPM 命令显示某个文件属于系统中的哪个软件包（例如：/bin/ls）？",
    options: ["rpm -ql", "rpm -qa", "rpm -qf", "rpm -p"],
    answer: "rpm -qf",
    explanation: "-f (file) 标志执行反向查询以查找原始文件的所有者。"
  },
  {
    id: 9,
    question: "哪个文件包含 Debian/Ubuntu 中的官方仓库列表？",
    options: ["/etc/yum.repos.d/", "/etc/apt/sources.list", "/boot/grub/grub.cfg", "/etc/dpkg.cfg"],
    answer: "/etc/apt/sources.list",
    explanation: "sources.list 定义了 apt 命令应从何处下载软件包。"
  },
  {
    id: 10,
    question: "在 Fedora/RHEL 中，哪个现代命令取代了 YUM 进行软件包管理？",
    options: ["apt", "dnf", "zypper", "pacman"],
    answer: "dnf",
    explanation: "DNF (Dandified YUM) 是 YUM 管理器更快、更干净的进化版。"
  }
];
