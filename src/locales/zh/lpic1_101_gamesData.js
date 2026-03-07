// LPIC-1 101 Games Data — Chinese (中文)
// Used by useGameData() when courseId === 'lpic1-101'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1
  { command: 'lspci', description: '列出所有 PCI 设备' },
  { command: 'lsusb', description: '列出所有 USB 设备' },
  { command: 'lsmod', description: '显示已加载的内核模块' },
  { command: 'modprobe module', description: '加载内核模块及其依赖' },
  { command: 'modprobe -r module', description: '移除内核模块' },
  { command: 'dmesg', description: '显示内核环形缓冲区消息' },
  { command: 'systemctl get-default', description: '显示默认 systemd 目标' },
  { command: 'systemctl set-default multi-user.target', description: '设置启动目标为多用户文本模式' },
  // Topic 2
  { command: 'grub-mkconfig -o /boot/grub/grub.cfg', description: '重新生成 GRUB2 配置' },
  { command: 'grub-install /dev/sda', description: '将 GRUB2 安装到 MBR' },
  { command: 'ldd /usr/bin/ls', description: '显示共享库依赖关系' },
  { command: 'ldconfig', description: '更新共享库缓存' },
  { command: 'dpkg -i package.deb', description: '安装本地 Debian 软件包' },
  { command: 'apt-get update', description: '更新软件包列表' },
  { command: 'rpm -qa', description: '列出所有已安装的 RPM 软件包' },
  { command: 'dnf install package', description: '从仓库安装 RPM 软件包' },
  // Topic 3
  { command: 'which cmd', description: '显示可执行文件的完整路径' },
  { command: 'type cmd', description: '判断是内置命令、别名还是可执行文件' },
  { command: 'head -n 20 file', description: '显示文件的前 20 行' },
  { command: 'tail -f /var/log/syslog', description: '实时跟踪日志文件' },
  { command: 'sort -rn file', description: '反向数字排序' },
  { command: 'cut -d: -f1 /etc/passwd', description: '提取以冒号分隔的第一个字段' },
  { command: 'find / -name "*.conf" -type f', description: '查找所有 .conf 文件' },
  { command: 'grep -rn "pattern" /etc/', description: '递归搜索并显示行号' },
  { command: 'ps aux', description: '显示所有进程的详细信息' },
  { command: 'kill -9 PID', description: '强制终止进程 (SIGKILL)' },
  { command: 'nice -n 10 cmd', description: '以低优先级启动命令' },
  { command: 'nohup cmd &', description: '运行不受 SIGHUP 影响的进程' },
  // Topic 4
  { command: 'fdisk -l', description: '列出磁盘分区' },
  { command: 'mkfs.ext4 /dev/sda1', description: '将分区格式化为 ext4' },
  { command: 'blkid', description: '显示 UUID 和文件系统类型' },
  { command: 'mount /dev/sda1 /mnt', description: '挂载文件系统' },
  { command: 'umount /mnt', description: '卸载文件系统' },
  { command: 'fsck /dev/sda1', description: '检查并修复文件系统' },
  { command: 'df -h', description: '以易读格式显示磁盘空间' },
  { command: 'du -sh /home', description: '显示目录大小' },
  { command: 'chmod 755 file', description: '设置 rwxr-xr-x 权限' },
  { command: 'ln -s /original /link', description: '创建符号链接' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1
  { text: 'BIOS 比 UEFI 更现代。', answer: false, explanation: 'UEFI 是现代后继者，支持 GPT、安全启动和更快的引导。', difficulty: 1 },
  { text: '/proc 是仅存在于 RAM 中的虚拟文件系统。', answer: true, explanation: '/proc 不占用磁盘空间；它由内核动态生成。', difficulty: 1 },
  { text: 'init/systemd 进程始终具有 PID 1。', answer: true, explanation: 'init 或 systemd 是内核启动的第一个用户进程，PID 为 1。', difficulty: 1 },
  { text: 'MBR 支持大于 2TB 的磁盘。', answer: false, explanation: 'MBR 限制为 2TB。GPT 支持高达 8ZiB 的磁盘。', difficulty: 1 },
  { text: 'apt-get update 安装软件包更新。', answer: false, explanation: 'update 下载软件包列表。upgrade 安装实际更新。', difficulty: 1 },
  { text: '共享 .so 库在运行时加载。', answer: true, explanation: '.so（共享对象）在执行程序时由动态链接器加载。', difficulty: 1 },
  { text: 'cat 命令主要用于创建空文件。', answer: false, explanation: 'cat 连接并显示文件。touch 创建空文件。', difficulty: 1 },
  { text: '| 管道将一个命令的 stdout 连接到下一个命令的 stdin。', answer: true, explanation: '管道创建流水线，将输出作为输入传递。', difficulty: 1 },
  { text: 'SIGKILL (9) 可以被进程捕获。', answer: false, explanation: 'SIGKILL 不能被捕获或忽略，它立即终止进程。', difficulty: 1 },
  { text: 'ext4 文件系统支持日志功能。', answer: true, explanation: 'ext4 内置日志功能，用于崩溃恢复保护。', difficulty: 1 },
  { text: 'chmod 644 使文件对所有人可执行。', answer: false, explanation: '644 = rw-r--r--。没有执行权限。755 包含执行权限。', difficulty: 1 },
  { text: '/etc/fstab 定义在启动时自动挂载的文件系统。', answer: true, explanation: 'fstab 包含设备、挂载点、类型和选项。', difficulty: 1 },
  // Difficulty 2
  { text: 'modprobe 自动处理内核模块依赖关系。', answer: true, explanation: 'modprobe 使用 depmod 解析依赖，与 insmod 不同。', difficulty: 2 },
  { text: 'rescue.target 相当于 SysVinit 运行级别 5。', answer: false, explanation: 'rescue.target 是单用户模式（运行级别 1）。图形模式是运行级别 5。', difficulty: 2 },
  { text: 'dpkg 自动安装软件包依赖。', answer: false, explanation: 'dpkg 安装 .deb 但不解析依赖。apt 会解析。', difficulty: 2 },
  { text: 'uniq 命令删除文件中所有重复行。', answer: false, explanation: 'uniq 只删除连续的重复行。使用 sort | uniq 删除所有重复。', difficulty: 2 },
  { text: '在正则表达式中，. 点匹配任何字符。', answer: true, explanation: '. 元字符匹配任何单个字符（除换行符外）。', difficulty: 2 },
  { text: 'nice 值为 -20 表示最低优先级。', answer: false, explanation: '-20 是最高优先级。+19 是最低。', difficulty: 2 },
  { text: 'parted 立即应用分区更改。', answer: true, explanation: '与缓冲更改的 fdisk 不同，parted 直接应用到磁盘。', difficulty: 2 },
  { text: '目录上的 sticky bit 阻止任何人删除文件。', answer: false, explanation: '只有文件所有者（或 root）可以删除，防止用户删除他人的文件。', difficulty: 2 },
  { text: 'fsck 必须在已挂载的文件系统上运行。', answer: false, explanation: 'fsck 必须在未挂载的文件系统上运行，以防止数据损坏。', difficulty: 2 },
  { text: 'UUID 是文件系统的唯一且永久的标识符。', answer: true, explanation: 'UUID 在格式化时创建且不会更改，与 /dev/sdX 名称不同。', difficulty: 2 },
  // Difficulty 3
  { text: '在 ERE 正则中，+ 需要转义 (\\\\+) 才能工作。', answer: false, explanation: '在扩展 RE (-E) 中，+ 无需转义即可工作。在基本 RE 中需要转义。', difficulty: 3 },
  { text: 'emergency.target 仅以只读方式挂载 / 且不启动任何服务。', answer: true, explanation: 'emergency 是最受限的目标，用于极端恢复。', difficulty: 3 },
  { text: '使用 umask 077，新文件获得 rw------- (600) 权限。', answer: true, explanation: '666 默认值 - 077 umask = 600。', difficulty: 3 },
  { text: 'rpm -V 验证已安装软件包的依赖关系。', answer: false, explanation: 'rpm -V 验证完整性（校验和、权限）。rpm -R 检查依赖。', difficulty: 3 },
  { text: '硬链接可以指向目录。', answer: false, explanation: 'Linux 禁止对目录创建硬链接，以避免文件系统循环。', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: '列出 PCI 设备', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: '显示默认目标', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: '更新软件包列表', difficulty: 1 },
  { prompt: 'head -n _____ file', answer: '10', hint: '默认行数', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: '创建父目录', difficulty: 1 },
  { prompt: 'chmod _____ file', answer: '755', hint: '设置 rwxr-xr-x', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: '挂载文件系统', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: '递归删除', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: '显示所有进程', difficulty: 1 },
  { prompt: 'grep _____ "pattern" file', answer: '-i', hint: '不区分大小写搜索', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ module', answer: '-r', hint: '移除模块', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: '停止系统', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'GRUB 配置文件路径', difficulty: 2 },
  { prompt: 'dpkg _____ /path/to/file', answer: '-S', hint: '搜索文件所属的软件包', difficulty: 2 },
  { prompt: 'rpm _____ package', answer: '-qi', hint: '显示软件包信息', difficulty: 2 },
  { prompt: 'find /etc -name "_____"', answer: '*.conf', hint: '配置文件', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'SIGKILL 信号', difficulty: 2 },
  { prompt: 'nice -n _____ cmd', answer: '10', hint: '低优先级', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: '常见的 Linux 文件系统', difficulty: 2 },
  { prompt: 'ln _____ /original /link', answer: '-s', hint: '创建符号链接', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: '不重启切换目标', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: '文件 644，目录 755', difficulty: 3 },
  { prompt: 'sed "s/old/new/_____" file', answer: 'g', hint: '全局替换', difficulty: 3 },
  { prompt: 'grep -_____ "error|warning" file', answer: 'E', hint: '启用扩展正则表达式', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: '指定进程 ID', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: '启动顺序',
    question: '按顺序排列 Linux 启动阶段：',
    items: [
      { text: '内核初始化硬件', order: 3 },
      { text: 'init/systemd 启动服务', order: 4 },
      { text: 'BIOS/UEFI 执行 POST', order: 1 },
      { text: 'GRUB2 加载内核/initramfs', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: '运行级别 → 目标',
    question: '将 SysVinit 运行级别与 systemd 目标匹配：',
    items: [
      { text: '运行级别 3（多用户文本模式）', matches: 'multi-user.target' },
      { text: '运行级别 5（图形界面）', matches: 'graphical.target' },
      { text: '运行级别 1（单用户）', matches: 'rescue.target' },
      { text: '运行级别 0（关机）', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: '软件包家族',
    question: '按软件包家族分类命令：',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RPM' },
      { text: 'dnf install', category: 'RPM' },
      { text: 'zypper install', category: 'RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: '八进制权限',
    question: '将八进制表示法与权限匹配：',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic1-1', description: '显示 PCI 设备', prompt: 'lspci', expectedOutput: 'VGA compatible controller', hint: '使用 lspci', difficulty: 1 },
  { id: 'tc-lpic1-2', description: '显示默认 systemd 目标', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: '使用 systemctl get-default', difficulty: 1 },
  { id: 'tc-lpic1-3', description: '显示已加载的内核模块', prompt: 'lsmod', expectedOutput: 'Module', hint: '使用 lsmod', difficulty: 1 },
  { id: 'tc-lpic1-4', description: '显示 CPU 信息', prompt: 'cat /proc/cpuinfo', expectedOutput: 'model name', hint: '读取 /proc/cpuinfo', difficulty: 1 },
  { id: 'tc-lpic1-5', description: '显示磁盘空间', prompt: 'df -h', expectedOutput: 'Filesystem', hint: '使用 df -h', difficulty: 1 },
  { id: 'tc-lpic1-6', description: '在 /etc 中查找 .conf 文件', prompt: 'find /etc -name "*.conf"', expectedOutput: '.conf', hint: '使用 find 和 -name', difficulty: 2 },
  { id: 'tc-lpic1-7', description: '显示 /etc/passwd 的前 5 行', prompt: 'head -n 5 /etc/passwd', expectedOutput: 'root:', hint: '使用 head -n 5', difficulty: 1 },
  { id: 'tc-lpic1-8', description: '统计 /etc/passwd 的行数', prompt: 'wc -l /etc/passwd', expectedOutput: '[0-9]+', hint: '使用 wc -l', difficulty: 1 },
  { id: 'tc-lpic1-9', description: '显示 /usr/bin/ls 的文件类型', prompt: 'file /usr/bin/ls', expectedOutput: 'ELF', hint: '使用 file 命令', difficulty: 2 },
  { id: 'tc-lpic1-10', description: '查找包含 /usr/bin/vim 的软件包', prompt: 'dpkg -S /usr/bin/vim', expectedOutput: 'vim', hint: '使用 dpkg -S', difficulty: 2 },
  { id: 'tc-lpic1-11', description: '显示块设备 UUID', prompt: 'blkid', expectedOutput: 'UUID=', hint: '使用 blkid', difficulty: 2 },
  { id: 'tc-lpic1-12', description: '显示 /etc/passwd 的权限', prompt: 'ls -l /etc/passwd', expectedOutput: '-rw-r--r--', hint: '使用 ls -l', difficulty: 1 },
  { id: 'tc-lpic1-13', description: '显示 /etc/hostname 的 inode', prompt: 'ls -i /etc/hostname', expectedOutput: '[0-9]+', hint: '使用 ls -i', difficulty: 2 },
  { id: 'tc-lpic1-14', description: '显示 /bin/ls 需要的库', prompt: 'ldd /bin/ls', expectedOutput: 'libc.so', hint: '使用 ldd', difficulty: 2 },
  { id: 'tc-lpic1-15', description: '显示内核版本', prompt: 'uname -r', expectedOutput: '[0-9]+\\.[0-9]+', hint: '使用 uname -r', difficulty: 1 },
]
