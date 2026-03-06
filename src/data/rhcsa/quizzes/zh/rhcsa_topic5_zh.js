// RHCSA Quiz — Topic 5: File System (简体中文) — 20 questions

export const rhcsaTopic5QuizzesZH = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能够在上层块设备 `/dev/sdb1` 上实际建立也就是格式化出一个 ext4 文件系统？',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', '选项 A 和 B 都正确'],
    correct: 3,
    explanation: '`mkfs.ext4` 和 `mkfs -t ext4` 是完全等价的底线指令写法。但在系统管理员日常中，`mkfs.ext4` 是最常用且具备 bash 补全友好的缩写形式。',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '在 RHEL 9 (Red Hat Enterprise Linux 9) 中，为新建的分区进行格式化操作时，系统默认首推的“标准主流文件系统”是哪一种？',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: '自 RHEL 7 起乃至到现在的 RHEL 9，高度可扩展且具备卓越大数据吞吐性能的 64 位高性能日志文件系统 XFS 已经成为红帽官方的首选默认格式。',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '如果你想查看一个已经挂载在 `/data` 目录下的 XFS 格式文件系统的详细块结构、UUID 和内部几何边界数据，应该用哪条命令？',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: '`xfs_info <挂载点>` 是用来抓取运行中 XFS 特征的专用诊断工具。你要记住 `tune2fs` 和 `dumpe2fs` 这些带 2 的命令只能用于老派的 ext 家族体系。',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '如果出现意外断电导致一个 XFS 文件系统损坏无法挂载，应该使用哪个底层专有命令来进行抢救性修复工作？',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'XFS 与其他的系统逻辑不同，传统的 `fsck` 即便加了参数也几乎什么都不干（只返回成功）。你必须调用专属的 `xfs_repair` 工具，并且千万切记：该盘处于**未挂载**状态才能修。',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '在进行 fstab 挂载编写时，哪个选项可以让系统在用户尝试访问该目录时再“按需挂载”，并在一段时间不活跃后“自动卸载”？',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: '`x-systemd.automount` 是基于新时代 systemd 的智能按需触发器。它极大地节约了开机时长，常用于管理网络硬盘或非高频访问的冷数据区。',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '为了对硬盘裸盘或分区进行全盘块加密改造以阻止数据失窃，你该如何把 `/dev/sdc1` 格式化并套上 LUKS 加密壳？',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: '命令 `cryptsetup luksFormat` 是创建加密磁盘的第一步。它会在开头写入 LUKS 强加密头（Header），你需要在此步骤键入大写的 YES 并设定好你的解密密钥口令（Passphrase）。',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '在使用 `luksFormat` 加密完毕后，必须用哪条命令像开锁一样把内部的磁盘暴露出一个名为 "datadisk" 的明文映射设备供格式化？',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      '选项 A 和 B 均可正确执行',
    ],
    correct: 3,
    explanation: '早年大家常背诵 `cryptsetup luksOpen`，但是在新版较短的 `cryptsetup open` 是被广泛引用的标准语法。两者效果完全相同，解密后你就能在 `/dev/mapper/datadisk` 找到这块盘。',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '如果这是一块挂载数据库用的系统内置盘，要求在每次服务器重启 Boot 引机过程中能“无人值守、无需密码交互自动解锁”LUKS卷。你需要在哪核心配置文件中建立它的匹配信息？',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: '文件 `/etc/crypttab` 在 Linux 系统开机初期的作用犹如破冰船，它负责在操作系统读取 fstab 进行常规挂载前，先依据此表配置（包含指定挂载用的密钥文件 keyfile 路径）将所有上锁的容器解锁摊开。',
  },
  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '如果要在你的 RHEL 9 (作为客户端) 机器上稳定挂载一台由另一台 Linux 主机共享过来的 NFS 网络存储文件夹，你首先确认需要安装哪个核心软件包？',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: '包名 `nfs-utils` 即包含了部署 NFS 服务端的核心组件，也囊括了让本地系统支持 `mount.nfs` 连接的底层套件。反之，挂载 Windows 共享必须装 `cifs-utils`。',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '想要借助 `/etc/fstab` 实现开机自动挂载远端 IP 为 `192.168.1.10`、暴露路径为 `/data` 的 NFS 存储到本机的 `/mnt/data`，其正确无误的规则书写格式是？',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: '对于网络 NFS 存储书写规范：`<服务器IP或域名>:<远程暴露出去的目录绝对路径>` （冒号不可少！）。然后接 ` <本地挂载点>`，由于不涉及本地底层盘符校验，末端的 dump 和 FSCK 一定也只能填 `0 0`。',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '在配置极其方便的透明按需挂载工具 `autofs` 的运作原理中，哪个基础配置文件负责总揽群局，并指向具体映射规则文件（如 `/etc/auto.misc`）用于把 NFS 智能挂载到宿主根目录下的某个节点（如 /misc）？',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 1,
    explanation: '`/etc/auto.master` (或者现在常存放在主控目录下的包含文件) 是最上层的根蓝图。它定义了“挂载监听根目录”并指引 AutofS 守护进程去看附庸地图（如 `/etc/auto.misc`）里的详细挂载规则。',
  },
  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '为了给 `/project` 这个目录加上特殊细度权限，仅让其中一个叫 "mario" 的用户额外拥有读（r）写（w）权力而完全不改动传统的归属者和组，你应该用？',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: '针对特定账号进行精细的超越传统 UGO 范围的管理依靠 ACL。语法是 `setfacl` (设置文件ACL指令) 加上 `-m` (修改追加)，其后跟随类型(u):用户名(mario):授予具体权限位(rw)。',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能够最直观打印并展现出该文件或目录上那些传统 `ls -l` 里只显示为一个小 `+` 加号背后隐藏的详细所有 ACL 访问控制列表？',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: '`getfacl` 顾名思义就是 get file ACLs，它会在终端打印出清晰的文字报表，罗列出到底有哪些特殊独立的用户或组也拥有穿透权限。',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '如果在某个大家公用的协同目录上（用 `chmod g+s` 或者 `chmod 2770`）打上了神奇的 `setGID` 位（粘滞组授权），这会导致什么样的实战特性？',
    options: [
      '使存放在该目录内的所有二进制程序在运行时强行窃取并获取根 Root 权限',
      '从此以后任何人在此目录内新建立的文件，其“所属组（Group）”属性将强制继承此父目录的组名，而不再跟随创建者主人的主组群',
      '强制使得只有 Root 或这个目录的主人才能在这个目录中写入数据',
      '这个目录即使权限再开放也绝对不准被删除保护起来',
    ],
    correct: 1,
    explanation: '`sgid` (在组权限区标量为小写 s ) 作用于目录层面时代表着“项目协同组继承”。团队所有成员在其内新拉的文件组归属一致，从而确保后续协作不会因为权限分裂导致无法互相编辑。',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '你想在目录 `/shared` 上设下一个具有“传染性质”的默认 ACL：在此日之后在这个目录下凭空创建的所有新子目录和文件，自动默认赐予用户 "mario" 以 rw 权限。你该怎么做？',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      '选项 A、B、C 理论上或本质上都能达成目的',
    ],
    correct: 3,
    explanation: '这题展示灵活的写法：`d:` (default 的缩写前缀) 加在修改串外最为经典，或者直接采用 `-d` 和 `--default` 的命令长选项标志。这是一种设置继承性质的“默认 ACL”的核心技能点。',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '通常情况下，要想让挂载好的底层文件系统（比如老版本的 ext4）彻底支持以上复杂的细腻授权管理，必须在它当初被挂载时赋予它什么基础特性参数选项？',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: '需要在 fstab 或 mount 命令挂载该盘时夹带挂载选项 `acl`。备注：但在现代的新型内核特别是 xfs 时代，这个基础支持大多已被底层芯片或操作系统默认无形启用了。',
  },
  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '为了杜绝黑客将木马传至服务器上运行，对于作为临时黑洞或缓存空间的比如 `/tmp` 分区挂载时，防守最严密的挂载选项是什么，旨在屏蔽所有的任何“木马程序”可被在其中执行并拉起？',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: '`noexec` 是最强加固选项之一。挂上了它的分区即使里面包含文件具有强悍的 `rwxrwxrwx` 777 属性，操作系统底层的沙盒内核都会无情地拒绝将其当作二进制程序或可执行脚本来装入和运行。',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '你发现有一台服务器告警说磁盘报满。你要迅速扫描并一眼看清这台机子上“各个已挂载好”的分区他们总计多大，并且到底哪个吃掉了多少吉字节或兆字节占比百分比？',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: '`df -h` (disk free 搭配 human readable 可读选项) 它就像宏观的上帝视角概览图。相对而言，`du -sh` (disk usage) 代表你已经怀疑到了某个大黑洞大文件夹，需要微观进去称重算大小了。',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '如果有某一条属于网络存储（或并不紧要的扩展小U盘）写到了系统核心启动项 `/etc/fstab` 表里，一旦其连接不上引发报错，可能引发生产大宕机导致阻滞在黑屏加载或应急抢修界面上。为了告诉内核：“哪怕这坨东西挂载不出来拉倒，不管它，请照常让机器直接爽快开机进入登录界面”。应该加什么标签安全栓？',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: '`nofail` 即是不失败指令，它是避免因网络依赖等外部小设备问题连带导致操作系统由于 systemd 高度刚硬依赖从而开不了机而配置。非核心卷配置 `nofail` 可以视作是老法师必会的护身符。',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '由于是“卷中卷”结构，当我们执行了一次完整的用密码解密刚打开 LUKS 外层生壳之后。后续你必须在哪个特定的明文抽象路径口上去对它里面软嫩的核心进行 ext4 或 xfs 的格式化以及操作？',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/volume_name',
      'cryptsetup mkfs /dev/mapper/volume_name',
      'luks-mkfs /dev/mapper/volume_name',
    ],
    correct: 1,
    explanation: '千万不可以再去试图往原本底盘 `/dev/sdc1` 那个加密后的物理地址乱打格式，那会导致整个加密卷的头签名粉碎。一旦打开（open映射），所有对于存储明文的操作全部都统统只准往经过映射转换后的虚拟路径 `/dev/mapper/<你自设的解密名>` 上打入。',
  },
]
