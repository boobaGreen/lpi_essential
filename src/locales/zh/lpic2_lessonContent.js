export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: '资源监控',
    comic: {
      title: '医生，服务器着火了！ 🩺',
      panels: [
        { emoji: '📉', text: '容量规划：不要等服务器爆炸。提前规划负载！' },
        { emoji: '🧠', text: 'CPU 和内存：mpstat 和 vmstat 是你倾听系统脉搏的听诊器。' },
        { emoji: '🚥', text: 'I/O 等待：如果磁盘慢，CPU 就会无所事事，整个系统都会变慢。' },
        { emoji: '📊', text: '历史分析：使用 collectd 或 sar 查看负载随时间的变化。' },
      ]
    },
    keyPoints: [
      { title: 'CPU/内存监控', items: ['uptime — 平均负载（1, 5, 15 分钟）', 'vmstat — 虚拟内存和交换统计', 'mpstat — 详细的每个 CPU 核心报告'] },
      { title: 'I/O 和网络监控', items: ['iostat — 磁盘使用情况和吞吐量', 'ss / netstat — 连接和套接字状态', 'iftop / nload — 实时网络流量'] },
      { title: '预测分析', items: ['sar (sysstat) — 历史性能数据库', '基准测试 (Benchmarks) — 衡量理论最大性能'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: '预测未来需求',
    comic: {
      title: '管理员的水晶球 🔮',
      panels: [
        { emoji: '📅', text: '趋势分析：如果数据每月增长 10%，磁盘什么时候会满？' },
        { emoji: '📈', text: '图形工具：Cacti, MRTG 和 Graphite 将数字转化为易懂的图表。' },
        { emoji: '🔔', text: '警报：设置关键阈值。今天的邮件好过明天的崩溃！' },
        { emoji: '🏗️', text: '可扩展性：在增加功率（垂直）或增加服务器（水平）之间做出选择。' },
      ]
    },
    keyPoints: [
      { title: '集中监控', items: ['Collectd — 轻量级数据采集守护进程', 'Prometheus — 现代时序数据库监控系统', 'Nagios / Zabbix — 监控和警报平台'] },
      { title: '可视化', items: ['Grafana — 为你的数据提供绝佳仪表板', 'Cacti — 基于 RRDTool，非常适合历史图表'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: '内核组件',
    comic: {
      title: '内核里面有什么？ 🧠',
      panels: [
        { emoji: '📦', text: '内核镜像：vmlinuz 是系统压缩的、可引导的核心。' },
        { emoji: '🏗️', text: 'Initramfs: 装有驱动程序的小背包，用于挂载真实的根文件系统。' },
        { emoji: '🧩', text: '模块：为什么要一次加载所有东西？模块 (.ko) 按需加载。' },
        { emoji: '🩹', text: '打补丁 (Patching)：更新内核而无需从头重写。' },
      ]
    },
    keyPoints: [
      { title: '镜像和文件', items: ['vmlinuz — 压缩的内核镜像', 'System.map — 用于调试的符号表', 'config-X — 编译时使用的选项'] },
      { title: '引导和 RAM 磁盘', items: ['initrd / initramfs — 用于加载根驱动的临时文件系统', 'dracut / mkinitrd — 创建 initramfs 的工具'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: '内核编译',
    comic: {
      title: '数字裁缝：编译你的内核！ 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig: 仔细选择要启用的驱动程序。' },
        { emoji: '⚙️', text: '编译：将源代码转化为针对你的 CPU 优化的二进制文件。' },
        { emoji: '📦', text: '安装：将文件复制到 /boot，将模块复制到 /lib/modules。' },
        { emoji: '🚀', text: 'GRUB 更新：引导加载程序需要知道城里有了新首领！' },
      ]
    },
    keyPoints: [
      { title: '配置目标', items: ['make menuconfig — 图形界面 (ncurses)', 'make oldconfig — 使用当前内核配置', 'make localmodconfig — 仅启用当前加载的模块'] },
      { title: '构建阶段', items: ['make — 编译内核和模块', 'make modules_install — 安装到 /lib/modules', 'make install — 安装到 /boot 并更新引导程序'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: '运行时内核管理',
    comic: {
      title: '开胸手术 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo: 在加载前揭示驱动程序的秘密。' },
        { emoji: '🔧', text: 'Sysctl: 在系统运行时更改内核参数（网络、内存）。' },
        { emoji: '⚠️', text: 'Dmesg: 实时倾听内核的低语（或尖叫）。' },
        { emoji: '💾', text: '/proc/sys: 直接访问系统内部的通道。' },
      ]
    },
    keyPoints: [
      { title: '模块工具', items: ['lsmod — 显示已加载模块', 'insmod / rmmod — 加载/卸载（无依赖检查）', 'modprobe -v — 带有细节和依赖检查的加载'] },
      { title: '内核参数', items: ['sysctl -a — 列出所有参数', 'sysctl -w net.ipv4.ip_forward=1 — 启用路由', '/etc/sysctl.conf — 使更改永久生效'] },
    ],
    terminal: { 
      prompt: '$ modprobe -v xfs\n$ sysctl kernel.hostname', 
      output: 'insmod /lib/modules/5.15.0/kernel/fs/xfs/xfs.ko\nkernel.hostname = linux-server' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'SysVinit 定制',
    comic: {
      title: '老智者：SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab: 告诉系统如何逐行启动的乐谱。' },
        { emoji: '🔢', text: '运行级别 (Runlevels)：从级别 1（单用户）到级别 5（图形界面）。' },
        { emoji: '🚦', text: 'K 和 S 脚本：每个运行级别中谁停止，谁启动。' },
        { emoji: '🔄', text: 'Telinit q: 重新加载配置，而无需重启整个村庄！' },
      ]
    },
    keyPoints: [
      { title: '文件和目录', items: ['/etc/inittab — 主配置文件', '/etc/init.d/ — 服务脚本目录', '/etc/rc[0-6].d/ — 运行级别的符号链接'] },
      { title: '经典命令', items: ['runlevel — 显示当前和之前的级别', 'init 6 — 重启系统', 'telinit q — 重新加载 /etc/inittab'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: '系统恢复',
    comic: {
      title: 'Linux 救援队 🚑',
      panels: [
        { emoji: '⌨️', text: '编辑 GRUB：在启动时按 \'e\' 向内核发送紧急命令。' },
        { emoji: '🔧', text: 'init=/bin/bash: 在服务加载前夺取控制权。' },
        { emoji: '📀', text: 'Live-CD / 救援模式：将受损系统挂载到 /mnt 并通过 chroot 进行操作。' },
        { emoji: '🛠️', text: 'LILO: GRUB 的古老祖先，仍存在于阴暗角落。' },
      ]
    },
    keyPoints: [
      { title: '启动参数', items: ['1, s, single — 启动进入单用户模式', 'systemd.unit=rescue.target — 现代等效项', 'rd.break — 在 initramfs 中停止启动过程'] },
      { title: '恢复技术', items: ['chroot — 更改根目录进行外部修复', 'fsck — 修复阻止启动的文件系统'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: '高级引导加载程序',
    comic: {
      title: '引导之王 👑',
      panels: [
        { emoji: '💿', text: 'UEFI vs BIOS: 从旧的 MBR 扇区转变为现代 ESP 分区。' },
        { emoji: '📦', text: 'GRUB 2: 灵活、强大，能从几乎任何 FS 加载内核。' },
        { emoji: '🌐', text: 'PXE: 直接通过网络引导你的服务器大军，无需本地磁盘！' },
        { emoji: '🔑', text: '安全启动 (Secure Boot)：对内核进行数字签名以阻止入侵者。' },
      ]
    },
    keyPoints: [
      { title: 'GRUB 2 组件', items: ['/boot/grub/grub.cfg — 最终文件（不要编辑！）', '/etc/default/grub — 用户配置变量', 'grub-mkconfig — 生成最终文件'] },
      { title: '现代标准', items: ['GPT — 大于 2TB 磁盘的新分区表', 'ESP — EFI 系统分区 (FAT32)', 'systemd-boot — UEFI 系统的轻量级替代方案'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: '管理文件系统',
    comic: {
      title: '磁盘架构师 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs: 无需格式化即可调整 ext2/3/4 参数。' },
        { emoji: '🏷️', text: 'LABEL 和 UUID: 为磁盘命名，以免在 /dev 中迷失。' },
        { emoji: '💾', text: 'XFS_info: 探索高性能 XFS 系统的先进几何结构。' },
        { emoji: '🔧', text: 'Mount -o: 添加如 "noatime" 的超能力来加速读取。' },
      ]
    },
    keyPoints: [
      { title: '调整工具', items: ['tune2fs -L DATA /dev/sdb1 — 设置标签', 'xfs_admin — 管理 XFS 参数', 'dumpe2fs — 显示 FS 技术细节'] },
      { title: '识别', items: ['blkid — 显示所有块设备的 UUID 和类型', 'findmnt — 当前挂载点的树状视图'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: '文件系统维护',
    comic: {
      title: '文件机械师 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck: 修复断电后 FS 伤口的医生。' },
        { emoji: '🧠', text: 'SMART: 在磁盘彻底坏掉前倾听它的信号。' },
        { emoji: '🧹', text: 'Badblocks: 扫描每个角落寻找损坏扇区。' },
        { emoji: '🧪', text: 'Debugfs: 深入 FS 内部营救被删除的文件。' },
      ]
    },
    keyPoints: [
      { title: '磁盘健康', items: ['smartctl -a /dev/sda — 完整的硬件报告', 'smartctl -t short — 启动快速测试'] },
      { title: '修复', items: ['fsck.ext4 -v /dev/sdb1 — 详细检查和清理', 'xfs_repair — XFS 专用工具'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: '使用 udev 管理设备',
    comic: {
      title: 'Udev: 内核交通警 🚨',
      panels: [
        { emoji: '⚡', text: '热插拔：插入 U 盘，udev 会在眨眼间识别它。' },
        { emoji: '📜', text: '自定义规则："当我插入此磁盘时，始终将其挂载到 /backup"。' },
        { emoji: '🔍', text: 'Udevadm: 质询 udev 并测试新规则的工具。' },
        { emoji: '📁', text: '/dev: udev 在此创建节点，以便我们与硬件对话。' },
      ]
    },
    keyPoints: [
      { title: '配置', items: ['/etc/udev/rules.d/ — 编写你自己的规则', '/lib/udev/rules.d/ — 系统规则（不要动）'] },
      { title: '调试命令', items: ['udevadm monitor — 实时观察硬件事件', 'udevadm info -a -p /sys/class/net/eth0 — 寻找规则属性'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'RAID 配置',
    comic: {
      title: '团结就是力量（和安全） 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID：为什么要信任单个磁盘？你可以拥有一支军队。' },
        { emoji: '⚡', text: 'RAID 0 (Stripe): 速度翻倍，但如果一个磁盘坏了，数据就全完了！' },
        { emoji: '🪞', text: 'RAID 1 (Mirror): 每个数据都有双胞胎。安全性最高，空间减半。' },
        { emoji: '🏗️', text: 'RAID 5/6: 速度、空间和容错能力之间的神奇平衡。' },
      ]
    },
    keyPoints: [
      { title: '常见 RAID 级别', items: ['RAID 0 — 纯性能（无冗余）', 'RAID 1 — 镜像（高可用性）', 'RAID 5 — 分布式校验（容忍 1 个故障）', 'RAID 6 — 双重校验（容忍 2 个故障）'] },
      { title: '软 RAID 工具', items: ['mdadm — Linux 软 RAID 的通用命令', '/proc/mdstat — 实时查看数组状态的窗口'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: '存储奥林匹克',
    comic: {
      title: '极限速度 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm: 将旧机械硬盘推向极限。' },
        { emoji: '🌠', text: 'NVMe: 使用专为速度而生的协议进入闪存时代。' },
        { emoji: '⚡', text: 'SD 卡 / SSD: 管理写入参数以获得最长寿命。' },
        { emoji: '🛠️', text: 'Smartctl: 因为预防胜过为丢失的数据而哭泣。' },
      ]
    },
    keyPoints: [
      { title: '优化', items: ['hdparm -tT /dev/sda — 读取速度测试（缓存和磁盘）', 'hdparm -S 120 /dev/sda — 设置休眠时间（10 分钟）'] },
      { title: '现代技术', items: ['nvme-cli — 现代 NVMe 磁盘工具', 'SSD Trim — 通过释放不使用的块来保持性能'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: '逻辑卷管理器 (LVM)',
    comic: {
      title: '硬盘像 LEGO 积木 🧱',
      panels: [
        { emoji: '📦', text: 'PV (物理卷)：将你的磁盘转化为原材料。' },
        { emoji: '🏗️', text: 'VG (卷组)：将 PV 汇集到一个大空间池中。' },
        { emoji: '🍰', text: 'LV (逻辑卷)：切出空间并在需要时随意调整大小。' },
        { emoji: '📸', text: '快照 (Snapshot)：冻结时间以便在风险更新前备份。' },
      ]
    },
    keyPoints: [
      { title: 'LVM 层级', items: ['pvcreate / pvdisplay — 物理磁盘管理', 'vgcreate / vgextend — 卷组管理', 'lvcreate / lvextend — 逻辑卷管理'] },
      { title: '优势', items: ['在线调整大小 — 无需重启即可增加分区', '快照 — 一致的备份和快速测试'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: '基础网络配置',
    comic: {
      title: '网络公民 🌐',
      panels: [
        { emoji: '📍', text: '寻址：每个人都需要一个名字和一个住处。' },
        { emoji: '🗺️', text: '路由："如果你不知道路，问问默认网关"。' },
        { emoji: '🔌', text: '接口：以太网、Wi-Fi 或容器和 VM 的虚拟网卡。' },
        { emoji: '🛠️', text: 'Iproute2: 取代旧 ifconfig 的强大新套件。' },
      ]
    },
    keyPoints: [
      { title: 'IP 配置', items: ['ip addr show — 显示地址和接口', 'ip route show — 显示路由表', 'ip -6 addr — IPv6 配置'] },
      { title: '持久性', items: ['Debian/Ubuntu: /etc/network/interfaces 或 Netplan', 'RHEL/CentOS: /etc/sysconfig/network-scripts/ 或 NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: '高级网络配置',
    comic: {
      title: '桥梁和通道 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding: 合并多张卡以实现速度或冗余。' },
        { emoji: '🌉', text: 'Bridging: 虚拟网桥让 VM 与外部世界对话。' },
        { emoji: '📡', text: '专业 Wi-Fi: 通过命令行管理无线连接。' },
        { emoji: '🚀', text: '流量控制 (tc): 为下载限速，确保服务器优先级！' },
      ]
    },
    keyPoints: [
      { title: '技术', items: ['Bonding — 链路聚合 (LACP, Round-robin)', 'Bridging — 典型用于虚拟化 (br0)'] },
      { title: '无线', items: ['iw / iwconfig — 802.11 接口工具', 'wpa_supplicant — WPA/WPA2 认证管理器'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Office_Linux\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: '网络排错',
    comic: {
      title: '包侦探 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: 倾听通过网卡的每一比特。' },
        { emoji: '🔬', text: 'Wireshark: 通过图形界面分析包的显微镜。' },
        { emoji: '📡', text: 'Nmap: 敲开服务器的每一扇门看看谁在回应。' },
        { emoji: '🔎', text: 'Netstat/SS: 谁在倾听？检查套接字和进程。' },
      ]
    },
    keyPoints: [
      { title: '流量分析', items: ['tcpdump -i eth0 -n — 实时分析（无 DNS 解析）', 'nc (netcat) — 网络瑞士军刀'] },
      { title: '扫描和套接字', items: ['nmap -sV target — 端口扫描和服务版本', 'ss -tulpn — 显示带有 PID 的监听套接字'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: '编译与安装',
    comic: {
      title: '数字缝纫：编译软件 🧵',
      panels: [
        { emoji: '📦', text: '源码：下载原始代码 (tarball) 以获取最新版本。' },
        { emoji: '🛠️', text: './configure: 检查你是否拥有所有构建工具。' },
        { emoji: '⚙️', text: 'Make: 将数千行代码煮成一个现成的程序。' },
        { emoji: '🚀', text: 'Make install: 将程序安装到系统文件夹中。' },
      ]
    },
    keyPoints: [
      { title: '编译阶段', items: ['./configure — 配置并校验依赖', 'make — 编译源代码', 'make install — 安装二进制文件'] },
      { title: '代码管理', items: ['tar -xvf — 解压源码包', 'patch — 对代码应用更正'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: '备份操作',
    comic: {
      title: '数据的人寿保险 💾',
      panels: [
        { emoji: '🛡️', text: '备份：不要问磁盘是否会坏，而是问何时。做好准备！' },
        { emoji: '🔄', text: 'Rsync: 只拷贝变化部分的各种天才，节省时间。' },
        { emoji: '📦', text: 'Tar: 将整个文件系统打包成一个文件。' },
        { emoji: '☁️', text: '异地备份：将副本存放在远离服务器的地方（云端或其他地方）。' },
      ]
    },
    keyPoints: [
      { title: '备份类型', items: ['全量 — 拷贝所有数据', '增量 — 仅备份自上次备份以来的变化', '差异 — 仅备份自上次全量备份以来的变化'] },
      { title: '工具', items: ['rsync -avz — 原子化压缩同步', 'tar -cvf — 创建文件/文件夹归档', 'mt — 控制磁带机（传统）'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/file.txt\nuser2/photo.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: '通知用户',
    comic: {
      title: '系统播报员 📢',
      panels: [
        { emoji: '🔔', text: 'Wall: 向所有打开的终端广播消息。' },
        { emoji: '📅', text: '/etc/motd: 每次登录时出现的“每日消息”。' },
        { emoji: '📔', text: '/etc/issue: 密码前出现的欢迎横幅。' },
        { emoji: '🛑', text: 'Shutdown: 通知所有人服务器将因维护而休眠。' },
      ]
    },
    keyPoints: [
      { title: '直接消息', items: ['wall — 向所有已登录用户发消息', 'write — 向特定用户发消息'] },
      { title: '静态消息', items: ['/etc/motd — 登录后显示的每日消息', '/etc/issue — 本地登录前的横幅', '/etc/issue.net — SSH/远程登录前的横幅'] },
    ],
    terminal: { 
      prompt: '# wall "晚上10点维护"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\n晚上10点维护' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'DNS 基础配置',
    comic: {
      title: '网络电话簿 📖',
      panels: [
        { emoji: '🌐', text: 'DNS: 将名字 (google.com) 转化为数字 (IP 地址)。' },
        { emoji: '🏗️', text: 'BIND: 世界上最常用且最强大的 DNS 服务器。' },
        { emoji: '🗺️', text: '层级：从根服务器 (.) 到域名 (.com) 到主机。' },
        { emoji: '🔎', text: '查询：递归询问直到有人知道答案。' },
      ]
    },
    keyPoints: [
      { title: 'BIND 组件', items: ['named — DNS 服务守护进程', '/etc/bind/named.conf — 主配置', 'rndc — BIND 远程控制工具'] },
      { title: '服务器类型', items: ['Master — 包含原始区域', 'Slave — 从 Master 拷贝区域以实现冗余（区域传输）'] },
    ],
    terminal: { 
      prompt: '$ dig google.com\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.com.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: '管理区域',
    comic: {
      title: '域名登记处 🗺️',
      panels: [
        { emoji: '📝', text: 'A 记录：基础的名字 -> IPv4 绑定。' },
        { emoji: '📛', text: 'CNAME: 已经有名字的主机的别名。' },
        { emoji: '📧', text: 'MX: 告诉世界谁接收该域名的邮件。' },
        { emoji: '🔄', text: 'SOA: 区域的出生证明，带有序列号。' },
      ]
    },
    keyPoints: [
      { title: 'DNS 记录', items: ['A / AAAA — 名字 -> IPv4 / IPv6', 'PTR — IP -> 名字 (反向区域)', 'TXT — 自由文本 (用于 SPF, DKIM)', 'NS — 指示权威域名服务器'] },
      { title: '区域管理', items: ['标准序列号: YYYYMMDDNN (如 2024030601)', 'named-checkzone — 加载前校验错误'] },
    ],
    terminal: { 
      prompt: '# named-checkzone example.com /etc/bind/db.example', 
      output: 'zone example.com/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: '安全与 DNSSEC',
    comic: {
      title: '带护盾的 DNS 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: 对区域进行数字签名以防止虚假重定向。' },
        { emoji: '🚫', text: '访问控制：决定谁可以查询或拷贝区域。' },
        { emoji: '🔭', text: 'TSIG: 用于主从通信的秘密密钥。' },
        { emoji: '🏰', text: 'Chroot: 将 BIND 锁在虚拟监狱中以保护系统。' },
      ]
    },
    keyPoints: [
      { title: '保护', items: ['allow-query — 限制谁可以提问', 'allow-transfer — 限制谁可以拷贝区域（至关重要！）'] },
      { title: '高级', items: ['Split DNS — 为内部和外部用户显示不同的数据', 'TSIG — 区域传输的安全密钥'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.com AXFR', 
      output: '; Transfer failed. (如果配置正确，将被拒绝访问！)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Apache 配置',
    comic: {
      title: '网站主人 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server: Web 服务器之王，灵活且永恒。' },
        { emoji: '📂', text: 'VirtualHost: 在一台服务器上托管 100 个网站而互不冲突。' },
        { emoji: '🧩', text: '模块：通过一条命令启用 rewrite, proxy 或 php。' },
        { emoji: '🔎', text: '日志：窥探访客或寻找 404 错误的原因。' },
      ]
    },
    keyPoints: [
      { title: 'Apache 结构', items: ['/etc/apache2/ (Debian) 或 /etc/httpd/ (RHEL)', 'apache2ctl configtest — 重启前校验语法'] },
      { title: '虚拟主机', items: ['基于域名的虚拟主机 — 一个 IP 上的多个网站', 'ServerName / ServerAlias — 定义网站名称'] },
    ],
    terminal: { 
      prompt: '# a2ensite my-site.conf\n# systemctl reload apache2', 
      output: 'Enabling site my-site.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS 与 Web 安全',
    comic: {
      title: '绿色小锁 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS: 加密浏览器与服务器之间的对话。' },
        { emoji: '📜', text: '证书：由权威机构验证的网站身份。' },
        { emoji: '🏎️', text: 'HTTP/2: 超快加载的新跑道。' },
        { emoji: '🛡️', text: 'HSTS: 强制浏览器始终使用安全连接。' },
      ]
    },
    keyPoints: [
      { title: '证书', items: ['CSR (证书签名请求) — 向机构发出的申请', 'SSLCertificateFile / SSLCertificateKeyFile — Apache 配置'] },
      { title: '工具', items: ['OpenSSL — 管理密钥和证书的工具', 'Let\'s Encrypt — 免费、自动的 SSL/TLS 证书'] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = my-site.com' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx 与反向代理',
    comic: {
      title: '极速替代方案：Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx: 轻量、异步，专为千万并发用户而生。' },
        { emoji: '🔀', text: '反向代理：将 Nginx 放在前面进行保护和均衡。' },
        { emoji: '💨', text: '缓存：将静态文件存于内存中实现极速交付。' },
        { emoji: '🛡️', text: 'WAF: 将 Nginx 作为抵御 Web 攻击的盾牌。' },
      ]
    },
    keyPoints: [
      { title: 'Nginx 配置', items: ['/etc/nginx/nginx.conf — 全局配置', 'server { ... } — 网站定义（类似 VirtualHost）'] },
      { title: '反向代理', items: ['proxy_pass — 将请求转发给其他服务器（如 Node.js）'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: Windows 桥梁',
    comic: {
      title: '两个世界，一个磁盘 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba: SMB 协议，让 Windows 将 Linux 视为文件服务器。' },
        { emoji: '👥', text: '域控制器：使用 Active Directory 管理用户和权限。' },
        { emoji: '📂', text: '共享：定义哪些是公共的，哪些是私有的。' },
        { emoji: '📝', text: 'Smb.conf: Samba 配置的核心。' },
      ]
    },
    keyPoints: [
      { title: '配置', items: ['[global] — 网络和安全选项', '[share] — 共享文件夹定义'] },
      { title: '工具', items: ['testparm — 验证 smb.conf 语法', 'smbpasswd -a user — 将用户添加到 Samba'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Linux 原生共享',
    comic: {
      title: '网络文件系统：纯粹的透明度 📁',
      panels: [
        { emoji: '🔌', text: 'NFS: 在局域网中像本地一样挂载远程磁盘。' },
        { emoji: '🛡️', text: '导出 (Exports)：谁能进入？按 IP 定义权限 (ro/rw)。' },
        { emoji: '🧱', text: 'RPC: 服务器间对话的小信差。' },
        { emoji: '⚡', text: 'NFSv4: 现代、安全且对防火墙友好。' },
      ]
    },
    keyPoints: [
      { title: '配置', items: ['/etc/exports — 共享文件夹和权限列表', 'exportfs -a — 立即应用更改'] },
      { title: '挂载选项', items: ['soft/hard — 断开连接时的反应方式', 'proto=tcp — 使用 TCP 代替 UDP 以获得稳定性'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/remote', 
      output: '/data  192.168.1.0/24(rw,sync,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP: 自动地址',
    comic: {
      title: '欢迎来到 IP 大厦 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP: 为每位新访客分配房间 (IP) 的管理员。' },
        { emoji: '⏱️', text: '租约时间：IP 是借给你的。别忘了及时续约！' },
        { emoji: '📍', text: '保留："由于 MAC 地址，这位服务器总是得到同一房间"。' },
        { emoji: '📝', text: 'Dhcpd.conf: 分配规则存放处。' },
      ]
    },
    keyPoints: [
      { title: 'DHCP 配置', items: ['subnet { ... } — 定义 IP 范围', 'option routers — 告知默认网关', 'option domain-name-servers — 告知 DNS 服务器'] },
      { title: '中继代理', items: ['dhcrelay — 在不同网络间转发 DHCP 请求'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'PAM 认证',
    comic: {
      title: 'PAM: 模块化守卫 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM: 为各种登录（密码、指纹等）提供的系统。' },
        { emoji: '🧩', text: '模块：无需重新编程即可更改认证方式。' },
        { emoji: '📋', text: '栈 (Stack)："先问密码，再检查他是否在组内"。' },
        { emoji: '🔐', text: '安全：强制执行强密码并在多次错误后锁定。' },
      ]
    },
    keyPoints: [
      { title: '模块类型', items: ['auth — 验证身份（密码）', 'account — 账号是否激活且允许进入？', 'password — 管理密码更改', 'session — 登录前后的处理事项'] },
      { title: '配置', items: ['/etc/pam.d/ — 按服务分配的配置目录（sshd, login 等）'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'LDAP 客户端',
    comic: {
      title: '网络中央登记处 📂',
      panels: [
        { emoji: '📋', text: 'LDAP: 高效的合规的公司用户和组目录。' },
        { emoji: '🔍', text: '搜索：立即找到同事的分机或老板的邮件。' },
        { emoji: '🌐', text: '单点登录 (SSO)：办公室内所有电脑共用一个密码。' },
        { emoji: '⚡', text: 'NSS: 告诉 Linux 也要从 LDAP 寻找用户。' },
      ]
    },
    keyPoints: [
      { title: 'LDAP 工具', items: ['ldapsearch — 通过终端查询 LDAP', 'ldapadd / ldapmodify — 管理数据库中的数据'] },
      { title: 'NSS 服务', items: ['/etc/nsswitch.conf — 定义寻找顺序 (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=example,dc=com" "(uid=smith)"', 
      output: 'dn: uid=smith,ou=People,dc=example,dc=com\nobjectClass: posixAccount\nuid: smith\nmail: smith@example.com' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: '网络私有隧道 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN: 穿过公共互联网的安全路径。' },
        { emoji: '🔐', text: '加密：没人能窃听隧道内的内容。' },
        { emoji: '🏠', text: '远程办公：像在办公室办公一样在家工作。' },
        { emoji: '🔑', text: 'TLS 证书：只有授权设备可以进入隧道。' },
      ]
    },
    keyPoints: [
      { title: 'OpenVPN 配置', items: ['/etc/openvpn/server.conf — 服务端', '/etc/openvpn/client.conf — 客户端'] },
      { title: '模式', items: ['Tun (路由) — IP 隧道（最常用）', 'Tap (桥接) — 模拟以太网卡'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'SMTP 服务器 (Postfix)',
    comic: {
      title: '数字邮差 📩',
      panels: [
        { emoji: '📨', text: 'SMTP: 在服务器之间投递信件的协议。' },
        { emoji: '🏤', text: 'Postfix: 可靠、快速，比旧的 Sendmail 简单得多。' },
        { emoji: '🛑', text: '反垃圾邮件：在垃圾邮件激怒用户前拦截它。' },
        { emoji: '📋', text: 'Main.cf: 邮差学习行为准则的地方。' },
      ]
    },
    keyPoints: [
      { title: 'Postfix 配置', items: ['myhostname — 你的邮件服务器名称', 'mynetworks — 谁可以无密码发信？', 'relayhost — 通过提供商发送邮件'] },
      { title: '别名与队列', items: ['/etc/aliases — 重定向名字（如 info -> smith）', 'mailq — 检查队列中滞留的邮件'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.example.com\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: '投递与过滤',
    comic: {
      title: '包裹分类 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve: 自动将邮件移至正确文件夹。' },
        { emoji: '⚖️', text: '配额 (Quotas)：没人能凭一己之力占满所有磁盘！' },
        { emoji: '🚫', text: 'SpamAssasin: 为邮件评分以评估风险。' },
        { emoji: '🦠', text: 'ClamAV: 扫描附件寻找病毒。' },
      ]
    },
    keyPoints: [
      { title: '投递', items: ['Maildir/ — 一封邮件一个文件（现代且快速）', 'mbox — 所有邮件存于一个文件（传统风格）'] },
      { title: '协议', items: ['IMAP — 邮件存于服务器（适合多设备）', 'POP3 — 下载邮件并从服务器删除'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: '消息访问 (Dovecot)',
    comic: {
      title: '你的邮箱 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot: Outlook 或 Thunderbird 用来读信的服务器。' },
        { emoji: '🔐', text: 'IMAPS/POPS: 读信时保护密码和数据。' },
        { emoji: '💼', text: '共享文件夹：与团队分享邮箱。' },
        { emoji: '📊', text: '监控：查看现在谁在登录。' },
      ]
    },
    keyPoints: [
      { title: '角色', items: ['MDA (邮件投递代理) — 将邮件存入磁盘', 'MRA (邮件获取代理) — 让客户端读取'] },
      { title: '登录', items: ['可以使用系统用户或集成 LDAP/MySQL'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: '防火墙 (iptables)',
    comic: {
      title: '城市围墙 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter: 决定什么进入，什么离开。' },
        { emoji: '🚦', text: '链 (Chains): INPUT (给我的), OUTPUT (我出的), FORWARD (经过我的)。' },
        { emoji: '🛑', text: '目标 (Targets): ACCEPT (放行), DROP (忽略), REJECT (拒收)。' },
        { emoji: '⚡', text: '状态检查：防火墙记得谁先发起的对话。' },
      ]
    },
    keyPoints: [
      { title: '表和链', items: ['Filter (默认) — 过滤报文', 'NAT — 地址转换（如路由器）', 'INPUT / OUTPUT / FORWARD : 主要链'] },
      { title: '语法', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — 开启 SSH', 'iptables -P INPUT DROP — 关掉其他所有内容'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: '本地安全与入侵',
    comic: {
      title: '数字警卫 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban: 输错密码就进监狱（封锁 IP）。' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter: 寻找潜伏黑客的踪迹。' },
        { emoji: '📜', text: 'Logwatch: 发送到你邮箱的每日日志摘要。' },
        { emoji: '🔒', text: 'Sudoers: 不要给所有人万能钥匙。仅限必需！' },
      ]
    },
    keyPoints: [
      { title: '防御武器', items: ['rkhunter / chkrootkit — 扫描恶意软件/权限提升', 'aide / tripwire — 检查系统文件是否被更改'] },
      { title: '访问跟踪', items: ['last — 最后登录记录', 'faillog — 失败尝试报告'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'SSH 安全',
    comic: {
      title: '强化锁 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH: 你的服务器秘密通道。' },
        { emoji: '🚫', text: '免密登录：使用密钥 (Public/Private)。安全一百倍！' },
        { emoji: '🕵️‍♂️', text: '审计：谁在何时输入了什么命令？' },
        { emoji: '🔒', text: '横幅 (Banner)：劝退好奇者的警告。' },
      ]
    },
    keyPoints: [
      { title: 'SSH 硬化', items: ['PermitRootLogin no — 禁止 root 直接登录', 'PasswordAuthentication no — 强制使用 SSH 密钥', 'AllowUsers — 只允许授权人士进入'] },
      { title: '密钥管理', items: ['ssh-keygen — 创建你的密钥对', 'ssh-copy-id — 将公钥传给服务器'] },
    ],
    terminal: { 
      prompt: '$ ssh-keygen -t ed25519\n$ ssh-copy-id user@server', 
      output: 'Generating public/private ed25519 key pair.\nNumber of key(s) added: 1' 
    },
  },
}
