// LPIC-1 101 — Topic 101: 系统架构 — Quiz ZH

export const lpic1_101_topic1_zh = [
  {
    id: 1,
    question: "在 Linux 中，哪个目录包含动态设备文件和硬件节点？",
    options: ["/etc", "/dev", "/proc", "/sys"],
    answer: "/dev",
    explanation: "/dev (devices) 目录包含代表系统硬件的特殊文件。"
  },
  {
    id: 2,
    question: "哪个命令显示有关 PCI 设备和总线的详细信息？",
    options: ["lsusb", "lspci", "lshw", "lsmod"],
    answer: "lspci",
    explanation: "lspci 命令用于列出所有连接到 PCI 总线的设备。"
  },
  {
    id: 3,
    question: "内核在哪里实时存储有关中断 (IRQ) 的信息？",
    options: ["/proc/interrupts", "/etc/interrupts", "/sys/irq", "/var/log/irq"],
    answer: "/proc/interrupts",
    explanation: "/proc 是一个虚拟文件系统，提供实时的内核和硬件信息。"
  },
  {
    id: 4,
    question: "哪个命令加载内核模块并自动解决其依赖关系？",
    options: ["insmod", "rmmod", "modprobe", "lsmod"],
    answer: "modprobe",
    explanation: "modprobe 比 insmod 更智能，因为它会检查并加载模块所需的依赖项。"
  },
  {
    id: 5,
    question: "Linux 启动 (Boot) 阶段的正确顺序是什么？",
    options: [
      "BIOS/UEFI -> Bootloader -> Kernel -> Init/Systemd",
      "Kernel -> BIOS -> Bootloader -> Init",
      "Bootloader -> Kernel -> BIOS -> Systemd",
      "Init -> Kernel -> Bootloader -> BIOS"
    ],
    answer: "BIOS/UEFI -> Bootloader -> Kernel -> Init/Systemd",
    explanation: "固件 (BIOS/UEFI) 启动启动管理器，启动管理器加载内核，内核随后启动第一个进程 (PID 1)。"
  },
  {
    id: 6,
    question: "哪个命令显示内核消息历史记录（环形缓冲区）？",
    options: ["logshow", "dmesg", "kernellog", "syslog"],
    answer: "dmesg",
    explanation: "dmesg (display message) 对于诊断内核检测到的硬件问题至关重要。"
  },
  {
    id: 7,
    question: "在 systemd 中，哪个 'target' 对应于旧的运行级别 3（文本多用户模式）？",
    options: ["graphical.target", "rescue.target", "multi-user.target", "reboot.target"],
    answer: "multi-user.target",
    explanation: "multi-user.target 是服务器的标准模式，没有图形界面 (GUI)。"
  },
  {
    id: 8,
    question: "哪个 systemd 命令允许在不重启的情况下切换到新目标？",
    options: ["systemctl change", "systemctl isolate", "systemctl switch", "systemctl jump"],
    answer: "systemctl isolate",
    explanation: "isolate 命令停止当前目标的项并启动新选定目标的项。"
  },
  {
    id: 9,
    question: "如何通过命令行请求立即停机 (halt) 系统？",
    options: ["shutdown -h now", "shutdown -r now", "shutdown -s now", "halt -wait"],
    answer: "shutdown -h now",
    explanation: "-h 代表 halt (停机)，now 表示立即执行。"
  },
  {
    id: 10,
    question: "哪个配置文件定义了 systemd 中的默认目标 (default target)？",
    options: ["/etc/systemd/system/default.target", "/etc/inittab", "/boot/grub/grub.cfg", "/etc/runlevel"],
    answer: "/etc/systemd/system/default.target",
    explanation: "这个符号链接指向系统在启动时应自动加载的目标。"
  }
];
