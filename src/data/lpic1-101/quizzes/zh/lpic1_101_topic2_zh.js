// LPIC-1 101 Quiz — 主题 2：安装和软件包管理 (中文)

export const lpic1_101_topic2_zh = [
  // ─── 102.1 设计硬盘布局 (8 题) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '在挂载其他文件系统之前，哪个文件系统层次结构必须在初始引导阶段可用？',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot 包含引导加载程序启动操作系统所需的内核和 initramfs 文件。',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Linux 中交换分区 (swap) 的主要目的是什么？',
    options: [
      '存储系统备份',
      '当物理内存 (RAM) 满时充当虚拟内存',
      '在 Windows 和 Linux 之间交换数据',
      '存储重启时删除的临时文件'
    ],
    correct: 1,
    explanation: '交换空间充当溢出区域（虚拟内存），当 RAM 利用率很高时，内核会将内存页分配到其中。',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '为什么强烈建议将 /home 放在单独的分区中？',
    options: [
      '它提高了系统性能',
      '它允许在不丢失用户数据的情况下重新安装操作系统',
      '它防止用户占用过多的 CPU 时间',
      '内核启动需要它'
    ],
    correct: 1,
    explanation: '将 /home 放在单独的分区中意味着您可以抹掉根分区 (/) 以升级或重新安装操作系统，同时保留所有用户文件和设置。',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '如果系统运行数据库或产生大量日志文件，哪个目录应该放在单独的分区中？',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var 包含变量数据，如日志、邮件假脱机和数据库。如果它填满，除非将其隔离在自己的分区上，否则可能会导致系统崩溃。',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '在使用经典 MBR 分区表的磁盘上，允许的最大主分区数是多少？',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'MBR (主引导记录) 最多允许 4 个主分区。要拥有更多，必须将其中一个设为扩展分区。',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪种技术允许您将多个物理磁盘组合成单个卷组并创建可调整大小的逻辑卷？',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (逻辑卷管理器) 在物理存储之上提供了一个抽象层。',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '在现代基于 UEFI 的系统上安装 Linux 时，必须具备哪个特殊分区？',
    options: ['交换分区 (swap)', 'LVM 物理卷', 'EFI 系统分区 (ESP)', '格式化为 ext4 的 /boot 分区'],
    correct: 2,
    explanation: 'UEFI 固件需要一个 EFI 系统分区 (ESP)，通常格式化为 FAT32 并挂载在 /boot/efi。',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个命令显示特定磁盘（如 /dev/sda）的当前分区表？',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'fdisk -l 后跟设备名称会显示该特定块设备的周期性分区表（MBR 或 GPT）。',
  },

  // ─── 102.2 安装启动加载程序 (4 题) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个命令将 GRUB2 引导加载程序安装到第一个硬盘的主引导记录 (MBR) 中？',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install 命令用于在磁盘上安装 GRUB 引导加载程序文件并设置引导扇区。',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '在 Debian 系统上编辑 /etc/default/grub 后，必须运行哪个命令来生成最终的 grub.cfg 文件？',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub 是 Debian 及其发行版中 `grub-mkconfig -o /boot/grub/grub.cfg` 的封装脚本。',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '根据其自身的页眉注释，绝对不应手动编辑哪个 GRUB2 配置文件？',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg 是自动生成的，手动更改将被覆盖。应在 /etc/default/grub 中进行修改。',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '在 GRUB2 术语中，第一个硬盘的第一个分区如何表示？',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'GRUB2 从 0 (hd0) 开始计算磁盘，但通常从 1 (hd0,1) 开始计算分区。',
  },

  // ─── 102.3 管理共享库 (4 题) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个命令显示动态链接的可执行文件所需的共享库依赖项？',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) 打印指定程序所需的共享库 (.so 文件)。',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个配置文件列出了动态链接器搜索共享库的目录？',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf 定义了 ld.so 用来搜索库的目录。',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '在将新目录添加到 /etc/ld.so.conf 后，必须运行哪个命令来更新库缓存？',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig 根据配置的目录更新动态链接器缓存 (/etc/ld.so.cache)。',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'ldconfig 的哪个命令选项允许您查看当前存储在 /etc/ld.so.cache 中的缓存库？',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) 显示当前存储在缓存中的目录和候选库列表。',
  },

  // ─── 102.4 Debian 软件包管理 (6 题) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个低级 Debian 工具用于在不自动下载依赖项的情况下安装本地 .deb 文件？',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg 是 Debian 的基础软件包管理器。`dpkg -i file.deb` 安装本地软件包。',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个命令从 Debian 系统上配置的存储库更新可用软件包的本地索引？',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update 从存储库下载最新的软件包列表。',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '`apt remove` 和 `apt purge` 之间的主要区别是什么？',
    options: [
      'remove 卸载软件包；purge 从 apt 缓存中删除软件包',
      'remove 留下配置文件；purge 删除软件包及其配置文件',
      'purge 强制删除，忽略依赖项',
      '没有区别'
    ],
    correct: 1,
    explanation: 'apt purge 完全移除软件包，包括全局配置文件。',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个命令列出 Debian 系统上所有已安装的软件包？',
    options: ['dpkg -l', 'apt list --installed', 'dpkg -l 和 apt list --installed 都可以', 'rpm -qa'],
    correct: 2,
    explanation: '`dpkg -l` 和 `apt list --installed` 都可以执行此操作。',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '哪个 dpkg 标志允许您找出哪个已安装的软件包提供了特定文件（例如 /bin/ls）？',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) 从已安装的软件包中搜索文件名。',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个文件存储了 APT 用来下载软件包的存储库 URL 列表？',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list 是 APT 软件包源的主要配置文件。',
  },

  // ─── 102.5 RPM 和 YUM/DNF 软件包管理 (6 题) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个低级工具用于在基于 Red Hat 的系统上安装本地 .rpm 文件？',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) 是安装 RPM 软件包的基础命令。',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个现代高级工具取代了 YUM 成为 Fedora 和 RHEL 8+ 中的默认软件包管理器？',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) 是 YUM 的下一代版本。',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个命令列出系统上所有已安装的 RPM 软件包？',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) 列出当前安装的所有 RPM 软件包。',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '哪个 rpm 命令查询已安装的软件包以查看其安装了哪些文件？',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) 列出特定软件包安装的文件。',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '如何找到哪个 RPM 软件包提供了文件 /etc/httpd/conf/httpd.conf？',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) 查找哪个已安装的软件包拥有指定的文件。',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个命令验证已安装的 RPM 软件包的完整性？',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) 将已安装的文件与原始元数据进行比较。',
  },

  // ─── 102.6 虚拟化客体 (4 题) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '1 型和 2 型管理程序 (hypervisor) 之间的主要区别是什么？',
    options: [
      '1 型需要 Windows，2 型需要 Linux',
      '1 型直接运行在硬件上（裸机），2 型运行在宿主操作系统上',
      '1 型用于容器，2 型用于虚拟机',
      '没有区别'
    ],
    correct: 1,
    explanation: '1 型直接在裸机上运行以获得最大性能。2 型作为应用程序在宿主 OS 中运行。',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Linux 容器（如 Docker 或 Podman）与完整的虚拟机有何不同？',
    options: [
      '容器比虚拟机慢',
      '容器共享宿主操作系统的内核，避免了运行完整客体操作系统的开销',
      '容器可以在 Linux 上原生运行 Windows 应用程序',
      '容器需要专用硬件'
    ],
    correct: 1,
    explanation: '容器由于共享宿主机的内核而非常轻量，通过命名空间和 cgroup 隔离进程而不是模拟硬件。',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪种 Linux 技术是原生的基于内核的 1 型管理程序？',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'KVM (基于内核的虚拟机) 将 Linux 内核转变为 1 型管理程序。',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '虚拟机中“增强功能 (Guest Additions)”或“客体工具”的目的是什么？',
    options: [
      '允许客体在未经允许的情况下直接访问宿主机的硬件',
      '提供更好的视频驱动、鼠标集成和共享文件夹',
      '对虚拟磁盘进行加密',
      '允许虚拟机在没有内核的情况下运行'
    ],
    correct: 1,
    explanation: '增强功能提供了优化后的驱动程序和服务，提高了客体操作系统的性能和易用性。',
  },
];
