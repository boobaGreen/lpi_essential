// LPIC-1 101 Lesson Content — Chinese
// 所有 28 节课的课程内容

export const lpic1_101_lessonContent_zh = {
  // ──── Topic 1: 系统架构 ────
  'lpic1-101-1-1': {
    title: '硬件和外设',
    comic: {
      title: 'Linux 与硬件：完美的结合 🤝',
      panels: [
        { emoji: '⚙️', text: '启动时，内核会扫描 PCI 和 USB 总线以查找每个组件。' },
        { emoji: '📁', text: '一切皆文件！硬件信息以文本文件的形式出现在 /proc 和 /sys 中。' },
        { emoji: '🔌', text: 'udev 在 /dev 中创建节点（例如 /dev/sda），以便我们可以使用磁盘。' },
        { emoji: '🛠️', text: 'lspci 和 lsusb 是您的显微镜，可以查看引擎盖下的情况！' },
      ]
    },
    keyPoints: [
      { title: '虚拟文件系统', items: ['/proc — 动态信息（cpuinfo, meminfo）', '/sys — 总线和驱动程序结构', '/dev — 特殊设备文件'] },
      { title: '工具', items: ['lspci — 列出 PCI/PCIe 设备', 'lsusb — 列出 USB 外设', 'lsblk — 块设备树视图（磁盘）'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: '启动过程',
    comic: {
      title: '从开机到桌面 ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI：执行 POST 并在 MBR 或 ESP 分区中查找引导加载程序。' },
        { emoji: '🐧', text: 'GRUB2：负责交通指挥，将内核和 initramfs 加载到内存中。' },
        { emoji: '🧠', text: '内核：初始化硬件并挂载最终的根文件系统 (/)。' },
        { emoji: '🚀', text: 'Systemd：第一个进程 (PID 1)，启动所有系统服务。' },
      ]
    },
    keyPoints: [
      { title: '启动阶段', items: ['固件 → 引导加载程序 → 内核 → Init', 'dmesg — 启动时读取内核消息', 'journalctl -b — 上次启动的日志'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: '运行级别和 systemd 目标', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: 安装和软件包管理 ────
  'lpic1-101-2-1': { title: '硬盘布局', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: '引导加载程序 (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: '共享库', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Debian 软件包 (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'RPM 和 YUM/DNF 软件包', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Linux 虚拟化', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: GNU 和 Unix 命令 ────
  'lpic1-101-3-1-1': { title: '命令行 — 基础', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: '命令行 — 变量', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: '文本过滤', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: '文件管理 — 基础', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: '文件管理 — 高级', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: '重定向和管道 — 基础', terminal: { prompt: '$ ls > list.txt', output: '' } },
  'lpic1-101-3-4-2': { title: '重定向和管道 — 高级', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: '进程 — 基础', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: '进程 — 作业控制', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: '进程优先级', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: '正则表达式 — 基础', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: '正则表达式 — 扩展', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'vi/vim 编辑器', terminal: { prompt: 'vi file.txt', output: '[打开编辑器]' } },

  // ──── Topic 4: 设备、Linux 文件系统和 FHS 标准 ────
  'lpic1-101-4-1-1': { title: '分区和文件系统', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: '文件系统完整性', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: '挂载和卸载', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: '权限和所有权', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: '硬链接和软链接', terminal: { prompt: '$ ln -s original link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS 和文件位置', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
