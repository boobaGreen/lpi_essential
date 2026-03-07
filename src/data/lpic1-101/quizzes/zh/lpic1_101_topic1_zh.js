// LPIC-1 101 Quiz — 主题 1：系统架构 (中文)

export const lpic1_101_topic1_zh = [
  // ─── 101.1 硬件与外设 (12 题) ───
  {
    id: 'q-lpic1-101-1-001', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '与传统 BIOS 相比，UEFI 的主要优势是什么？',
    options: [
      '它是开源 hardware',
      '它仅支持 32 位系统',
      '它支持大于 2TB 的 GPT 分区和安全启动 (Secure Boot)',
      '它不需要像 GRUB2 这样的启动加载程序'
    ],
    correct: 2,
    explanation: 'UEFI 取代了传统 BIOS，提供对大于 2TB 的 GPT 磁盘的支持、安全启动以及更快的启动过程。',
  },
  {
    id: 'q-lpic1-101-1-002', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '内核的哪个虚拟目录包含有关系统硬件和进程的信息？',
    options: ['/dev', '/sys', '/proc', '/etc'],
    correct: 2,
    explanation: '/proc 是一个基于内存的虚拟文件系统，提供内核视图，显示正在运行的进程和硬件信息。',
  },
  {
    id: 'q-lpic1-101-1-003', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'udev 使用哪个虚拟目录来动态创建设备节点？',
    options: ['/dev', '/udev', '/sys', '/proc'],
    correct: 0,
    explanation: '/dev 包含由 udev 服务动态管理和创建的设备节点（如 /dev/sda）。',
  },
  {
    id: 'q-lpic1-101-1-004', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个命令可以列出所有连接到系统的 PCI 设备？',
    options: ['lsusb', 'lshw', 'lspci', 'lsscsi'],
    correct: 2,
    explanation: 'lspci 显示系统中所有 PCI 总线和设备的详细信息。',
  },
  {
    id: 'q-lpic1-101-1-005', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个命令可以列出当前加载到内存中的内核模块？',
    options: ['modprobe', 'lsmod', 'insmod', 'modinfo'],
    correct: 1,
    explanation: 'lsmod 读取 /proc/modules 并打印当前加载的内核模块的格式化列表。',
  },
  {
    id: 'q-lpic1-101-1-006', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '加载内核模块及其依赖项的推荐方式是哪个命令？',
    options: ['insmod', 'depmod', 'modprobe', 'lsmod'],
    correct: 2,
    explanation: 'modprobe 可以智能地加载模块，并自动解决/加载任何相关的依赖模块。',
  },
  {
    id: 'q-lpic1-101-1-007', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '如何安全地移除一个名为 "e1000" 的已加载内核模块？',
    options: ['rmmod -f e1000', 'modprobe -r e1000', 'delete e1000', 'rm /lib/modules/e1000'],
    correct: 1,
    explanation: 'modprobe -r 可以安全地移除模块以及任何未使用的相关依赖模块。',
  },
  {
    id: 'q-lpic1-101-1-008', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '/sys 文件系统 (sysfs) 的目的是什么？',
    options: [
      '存储系统配置文件（如 /etc）',
      '存放编译好的内核镜像',
      '将内核设备模型和硬件层次结构暴露给用户空间',
      '记录系统错误'
    ],
    correct: 2,
    explanation: 'sysfs (/sys) 将内核内部的对象和设备驱动层次结构暴露给用户空间。',
  },
  {
    id: 'q-lpic1-101-1-009', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个命令可以显示内核在启动过程中生成的消息？',
    options: ['syslog', 'dmesg', 'tail /var/log/messages', 'journalctl -k'],
    correct: 1,
    explanation: 'dmesg 打印内核环形缓冲区 (kernel ring buffer)，包含硬件检测消息。',
  },
  {
    id: 'q-lpic1-101-1-010', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个文件包含启动加载程序传递给内核的确切配置选项？',
    options: ['/boot/grub/grub.cfg', '/sys/kernel', '/etc/default/grub', '/proc/cmdline'],
    correct: 3,
    explanation: '/proc/cmdline 包含系统启动时传递给内核的参数。',
  },
  {
    id: 'q-lpic1-101-1-011', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '哪个目录应包含在启动时自动加载特定内核模块的文件？',
    options: ['/etc/modprobe.d/', '/etc/modules-load.d/', '/lib/modules/', '/boot/modules/'],
    correct: 1,
    explanation: '/etc/modules-load.d/ 被 systemd 用来在启动时无条件加载模块。',
  },
  {
    id: 'q-lpic1-101-1-012', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个命令可以显示有关特定模块的详细信息（作者、描述、参数）？',
    options: ['modprobe -i', 'modinfo', 'lsmod -v', 'sysctl'],
    correct: 1,
    explanation: 'modinfo 从内核模块文件中提取并显示元数据。',
  },

  // ─── 101.2 启动过程 (10 题) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Linux 启动过程的正确顺序是什么？',
    options: [
      'Bootloader -> BIOS -> init -> Kernel',
      'BIOS/UEFI -> Bootloader -> Kernel -> init/systemd',
      'Kernel -> BIOS -> Bootloader -> systemd',
      'Bootloader -> Kernel -> BIOS -> init'
    ],
    correct: 1,
    explanation: '固件 (BIOS/UEFI) 首先运行，将控制权交给加载程序 (GRUB)，加载程序加载内核，内核最后启动第一个进程 (init/systemd)。',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '启动过程中 initramfs 的目的是什么？',
    options: [
      '格式化硬盘',
      '提供一个临时的根文件系统，包含挂载实际根目录所需的必备驱动程序',
      '检查 RAM 是否存在硬件错误',
      '它是内核的备份副本'
    ],
    correct: 1,
    explanation: 'initramfs 由启动加载程序加载，并提供必要的模块（如 RAID、LVM）来挂载实际的根文件系统。',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '历史上，内核启动的第一个 PID 为 1 的用户空间进程是什么？',
    options: ['bash', 'grub', 'init', 'kthreadd'],
    correct: 2,
    explanation: 'init（或现代系统中的 systemd）是内核启动后启动的第一个进程，被分配为 PID 1。',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '为 GRUB2 生成的主要配置文件是什么？',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg 是由 grub-mkconfig 命令生成的主要文件。',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '如果要配置 GRUB2 超时或默认内核参数，应编辑哪个文件？',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: '/etc/default/grub 包含用于生成 grub.cfg 的用户可自定义变量。',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '在 Debian/Ubuntu 系统上，编辑 /etc/default/grub 后，哪个命令可以应用更改？',
    options: ['grub-install /dev/sda', 'update-grub', 'grub-update', 'systemctl restart grub'],
    correct: 1,
    explanation: 'update-grub 是运行 grub-mkconfig 来生成新配置的脚本。',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个命令将 GRUB2 启动加载程序安装到第一块硬盘的 MBR 中？',
    options: ['grub-mkconfig /dev/sda', 'update-grub /dev/sda', 'grub-install /dev/sda', 'fdisk /dev/sda'],
    correct: 2,
    explanation: 'grub-install 将 GRUB 镜像复制并嵌入到指定磁盘的 MBR 中。',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'GRUB2 用来生成配置文件的脚本位于何处？',
    options: ['/boot/grub/', '/etc/default/grub.d/', '/etc/grub.d/', '/usr/lib/grub/'],
    correct: 2,
    explanation: '/etc/grub.d/ 包含 grub-mkconfig 用来构建 grub.cfg 的可执行脚本。',
  },
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '传统 MBR 分区表支持的最大磁盘大小是多少？',
    options: ['2 GB', '2 TB', '8 TB', '8 ZiB'],
    correct: 1,
    explanation: 'MBR 使用 32 位扇区寻址，这将其总大小限制在 2 Terabytes。',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '在 systemd 系统上，哪个命令可以显示当前启动的具体日志？',
    options: ['journalctl -b', 'dmesg -boot', 'tail /var/log/boot.log', 'systemctl logs'],
    correct: 0,
    explanation: 'journalctl -b 过滤 systemd 日志，仅显示自上次启动以来的消息。',
  },

  // ─── 101.3 运行级别与目标 (10 题) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '在 SysVinit 中，传统上哪个运行级别用于具有图形界面 (GUI) 的多用户环境？',
    options: ['运行级别 1', '运行级别 3', '运行级别 5', '运行级别 6'],
    correct: 2,
    explanation: '运行级别 5 包括网络、多用户支持并启动图形系统。',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个 systemd 目标等同于 SysVinit 的运行级别 3（文本多用户模式）？',
    options: ['graphical.target', 'multi-user.target', 'network.target', 'rescue.target'],
    correct: 1,
    explanation: 'multi-user.target 提供了一个不带图形界面的完整多用户系统。',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '在 systemd 系统上，哪个命令可显示配置的默认目标 (default target)？',
    options: ['systemctl default', 'systemctl status', 'systemctl get-default', 'runlevel'],
    correct: 2,
    explanation: 'systemctl get-default 打印系统默认启动到的目标。',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '如何在不重启的情况下将当前的 systemd 系统切换到多用户目标（文本）？',
    options: [
      'systemctl switch multi-user.target',
      'systemctl isolate multi-user.target',
      'systemctl start multi-user.target',
      'systemctl default multi-user.target'
    ],
    correct: 1,
    explanation: 'systemctl isolate 停止不必要的单元并立即启动新目标。',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'rescue.target 和 emergency.target 之间的主要区别是什么？',
    options: [
      '没有区别，它们是别名',
      'rescue.target 挂载本地文件和基础服务；emergency.target 仅以只读方式挂载 / 且启动项极少',
      'emergency.target 提供网络，rescue.target 则不提供',
      'rescue.target 用于 GRUB 修复'
    ],
    correct: 1,
    explanation: 'emergency.target 是最基本的救援模式。rescue.target (运行级别 1) 挂载更多的文件系统。',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '下列哪个命令可以立即且安全地重启系统？',
    options: ['shutdown -h now', 'shutdown -r now', 'halt', 'init 0'],
    correct: 1,
    explanation: 'shutdown -r now (或 reboot) 立即重启系统。',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个命令计划在 15 分钟后关闭系统并附带警告消息？',
    options: [
      'shutdown -t 15 "系统关闭"',
      'shutdown +15 "系统关闭"',
      'shutdown -h 15m "系统关闭"',
      'halt +15'
    ],
    correct: 1,
    explanation: 'shutdown +15 计划在 15 分钟后关机并通知用户。',
  },
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '如何取消一个已经计划好的关机 (shutdown)？',
    options: ['shutdown -a', 'shutdown -c', 'killall shutdown', 'systemctl cancel shutdown'],
    correct: 1,
    explanation: 'shutdown -c 取消任何待处理的计划关机。',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个命令向所有当前登录用户的终端发送消息？',
    options: ['broadcast', 'echo-all', 'wall', 'send'],
    correct: 2,
    explanation: 'wall (write all) 向所有活动终端发送消息。',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '在 SysVinit 中，哪个命令可以打印出上一个和当前的运行级别？',
    options: ['showlevel', 'runlevel', 'who -r', 'runlevel 或 who -r'],
    correct: 3,
    explanation: '`runlevel` 和 `who -r` 命令均显示上一个和当前的运行级别。',
  },
];
