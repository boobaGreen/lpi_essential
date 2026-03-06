// RHCSA Games Data — Chinese
// Used by useGameData() when courseId === 'rhcsa'

export const memoryGameData = [
  // Topic 1
  { command: 'grep -r "pattern" /etc/', description: '在 /etc/ 中递归搜索匹配的模式串' },
  { command: 'tar -czvf archive.tar.gz /dir', description: '创建并使用 gzip 压缩一个归档文件' },
  { command: 'tar -xzvf archive.tar.gz', description: '解压一个 tar.gz 归档文件' },
  { command: 'find / -name "*.conf" -type f', description: '在系统中查找所有 .conf 结尾的文件' },
  { command: 'chmod 755 file', description: 'rwxr-xr-x — 属主具全权限，其他人可读可执行' },
  { command: 'chown mario:dev file', description: '更改文件的属主与属组' },
  { command: 'ln -s /real/src /symbolic/link', description: '创建一个软链接 (Symbolic link)' },
  { command: 'man -k "keyword"', description: '在所有的 man 联机帮助页中搜索关键字' },
  // Topic 2
  { command: 'export VAR="value"', description: '将变量导出，使其在所有的子进程 (subshells) 可用' },
  { command: 'RESULT=$(command)', description: '执行命令并将它的输出结果捕获给一个变量' },
  { command: '[ -f "$FILE" ]', description: '检查当前变量所指向的目标是否是一个存在的常规文件' },
  { command: '[ -d "$DIR" ]', description: '检查当前变量所指向的目标是否是一个存在的目录' },
  { command: '[ -z "$VAR" ]', description: '检查字符串变量是否为空 (长度为 0)' },
  { command: 'for f in /etc/*.conf; do echo $f; done', description: '使用 for 循环遍历 /etc 里的所有 .conf 文件' },
  // Topic 3
  { command: 'systemctl enable --now sshd', description: '一次性开机自启并立刻拉起启动 sshd 服务' },
  { command: 'systemctl mask httpd', description: '强制屏蔽 httpd 防止任何程序的意外拉起调用' },
  { command: 'systemctl set-default multi-user.target', description: '配置 CLI 终端字符界面为下次默认启动目标' },
  { command: 'journalctl -u sshd -f', description: '像 tail -f 一样，追踪实时查阅 sshd 系统日志' },
  { command: 'kill -9 PID', description: '发送无情不可阻挡的 SIGKILL 信号杀掉某进程' },
  { command: 'renice -n -5 -p PID', description: '动态修改一个已经在运行的进程优先度 (Priority/Nice)' },
  // Topic 4
  { command: 'pvcreate /dev/sdb1', description: '将一个块设备的分区初始化为 LVM 物理卷 (PV)' },
  { command: 'vgcreate datavg /dev/sdb1', description: '通过 PV 组建一个基于 LVM 逻辑的卷组 (VG)' },
  { command: 'lvcreate -L 2G -n datalv datavg', description: '从卷组可用空间中切出一块 2GB 的逻辑卷 (LV)' },
  { command: 'lvextend -L +1G -r /dev/vg/lv', description: '原位给 LV 扩容的同时一起在线无缝扩展文件系统的大小' },
  { command: 'xfs_growfs /mountpoint', description: '扩展并把最新容量挂载给以 XFS 格式运行的文件系统' },
  // Topic 5
  { command: 'mkfs.xfs /dev/sdb1', description: '直接将新添加的块设备使用 XFS 文件系统格式化' },
  { command: 'cryptsetup luksFormat /dev/sdc1', description: '对一个块设备通过 LUKS 标准设置密码并全盘加密' },
  { command: 'cryptsetup open /dev/sdc1 vault', description: '提供密码之后映射该块设备在 /dev/mapper/vault 读取' },
  { command: 'setfacl -m u:mario:rw file', description: '为文件配置扩展 ACL 规则，给予 mario 读写权限' },
  { command: 'getfacl file', description: '显示某一个文件挂带的所有的安全相关的 ACL 配置节点信息' },
]

export const trueFalseData = [
  // Nivel 1
  { text: 'RHEL9操作系统的默认官方建议文件系统规格为XFS格式。', answer: true, explanation: 'XFS 因为支持动态的超大高吞吐高伸缩性的文件数据写入与挂载扩展而被红帽采用。', difficulty: 1 },
  { text: '命令"systemctl enable sshd"会马上原地强启这个服务生效。', answer: false, explanation: '它仅仅只做添加开机自启映射的活儿，唯有再补上 --now 的标志后才能做到即开启。', difficulty: 1 },
  { text: '/etc/fstab 文件控制在进入操作系统登录桌面之前，底层需要挂载硬盘。', answer: true, explanation: '这个fstab是一个表，Systemd底层用以映射盘符和内核的联系并自动mount挂起设备。', difficulty: 1 },
  { text: '当优先级数值为 "-20" 时，这实际上是个非常差优先级。', answer: false, explanation: '数值 -20 是给到进程在CPU中优先的最高极品通道待遇，数值+19反而是干啥都最慢给别人让开性能的。', difficulty: 1 },
  { text: '在命令信号层面SIGKILL（代码9）是可以被Linux下的拦截程序阻断防掉线杀进程的。', answer: false, explanation: 'SIGKILL不能捕获阻塞拒绝拦截，收到它的宿主程序会被无条件结束终止杀死。', difficulty: 1 },
  { text: '"pvcreate" 在LVM中直接用于直接生成一个 Logical Volume (LV)。', answer: false, explanation: 'PV是Physical Volume缩写。也就是最底层的物理设备注册。创建LV(逻辑卷)是使用lvcreate的。', difficulty: 1 },
  { text: '如果把SELinux设置切换至 "permissive" 的容忍模式，一旦触发红线它还是会对网络服务强制阻止拦截连接。', answer: false, explanation: '宽容模式 (permissive) 它非常慈悲只会去记录警告进审计log报告日志那里，但是从来"不拦截干预"真实运行。', difficulty: 1 },
  { text: '基于Podman的构架因为安全原因他依然还是绑定了强需求的系统级守护后台Root进程权限 Daemon 才可操作。', answer: false, explanation: '与Docker不同，它的一个核心亮点是不需要挂一个恶心的 root级别的后端后台 Daemon 服务也能直接跑容器。', difficulty: 1 },
  { text: '"restorecon" 是用于抹去文件和目录一切配置后全部复原修复最初默认预设自带的 SELinux 标签配置文件的。', answer: true, explanation: '如果策略中有被semanage定死的标准路径预设置，那么这条命令将会洗掉脏数据并将安全标志全还原。', difficulty: 1 },
  { text: '硬盘系统的 UUID 其实是一个浮动数值，只要服务器重启挂载点发生更改他立刻同步随时变化更新。', answer: false, explanation: '唯一识别符（UUID）在创建格式化初始化这块虚拟硬盘介质的那几秒就已经定下生成不变绑定了，哪怕给它插到不同主板也是这号。', difficulty: 1 },
]

export const fillGapData = [
  // Difficulty 1
  { prompt: 'systemctl _____ sshd', answer: 'enable --now', hint: '设置自启并立马拉起服务的组合词', difficulty: 1 },
  { prompt: 'dnf _____ httpd', answer: 'install', hint: 'yum/dnf 的第一步当然是下载安装命令字', difficulty: 1 },
  { prompt: 'useradd -m -s /bin/bash _____', answer: 'mario', hint: '填上末尾该要建的具体用户名即可', difficulty: 1 },
  { prompt: 'pvcreate _____', answer: '/dev/sdb1', hint: '指向一个磁盘具体的块路径区域', difficulty: 1 },
  { prompt: 'getenforce', answer: 'getenforce', hint: '能直接告诉你现在的安全核心是在拦截还是放任的指令', difficulty: 1 },
]

export const dragDropData = [
  {
    id: 'dd-lvm-order',
    category: '理解 LVM 正确配置顺序及工作流',
    question: '尝试拖拽恢复下列乱序 LVM 管理指令至最正确无误的过程:',
    items: [
      { text: 'lvcreate -L 2G -n datalv datavg', order: 3 },
      { text: 'mkfs.xfs /dev/datavg/datalv', order: 4 },
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
    ],
  },
  {
    id: 'dd-systemd-match',
    category: '系统引导启动级别的 Target与旧日Runlevel对应',
    question: '联系下面 SystemD 系统的最新模式代号与以往老版系统的纯数字级别的定义相互正确连线绑定:',
    items: [
      { text: 'multi-user.target', matches: 'Runlevel 3 (纯粹多用户的终端代码文字页面黑白无显卡桌面的服务器环境)' },
      { text: 'graphical.target', matches: 'Runlevel 5 (最高级别的 GUI 全图形花里胡哨点点桌面运行配置)' },
      { text: 'rescue.target', matches: 'Runlevel 1 (系统炸锅管理员单骑救主的孤狼单账户脱机急救底层维护调试)' },
    ],
  },
]

export const terminalChallengeData = [
  { id: 'tc-rhcsa-1', description: '检查输出现在服务器内核里面安全模块SELinux处于咋样个阻拦状态', prompt: 'getenforce', expectedOutput: 'Enforcing', hint: '英文本义获取强迫状态那个命令', difficulty: 1 },
  { id: 'tc-rhcsa-2', description: '提取打印这台服务器下次重启以后开机会进入什么默认桌面环境Target状态配置', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'System Service Controller 管理器拿去获得预设值的指令配对', difficulty: 1 },
  { id: 'tc-rhcsa-3', description: '输出展示目前有啥磁盘硬盘设备块能接能挂到主机上的简明列表图', prompt: 'lsblk', expectedOutput: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS', hint: 'List 出底层的块 Blocks', difficulty: 1 },
]
