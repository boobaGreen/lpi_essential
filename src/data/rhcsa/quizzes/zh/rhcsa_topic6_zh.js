// RHCSA Quiz — Topic 6: System Maintenance (简体中文) — 15 questions

export const rhcsaTopic6QuizzesZH = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '在现代的 RHEL 9 中，哪个命令是被官方推荐用于从网络软件库安装 "httpd" 软件包的？',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: '`dnf install <包名>` 会自动计算并下载安装包括依赖项在内的所有必须包。虽然 `yum` 在红帽 9 里作为 `dnf` 的一个向后兼容链接依然能用，但是真正官方且更现代的名字就是 `dnf`。',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '如何一键升级系统中所有当前已安装的软件包到软件库里提供的最新可用版本？',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', '选项 A 和 B 都正确'],
    correct: 3,
    explanation: '在现代基于 `dnf` 的系统（RHEL 8/9, Fedora）上，`dnf update` 和 `dnf upgrade` 在底层代码层面完全等价，均执行安全的整机软件包升级。',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '如果你想逆向查询“到底是哪个软件包在系统里生成或提供了 `/usr/bin/vim` 这个执行文件？”，哪个命令是有效的？',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      '选项 B 和 C 都非常有用',
    ],
    correct: 3,
    explanation: '`dnf provides` 更强大，因为它能从网络大仓库中反查即使你尚未安装的包。而 `rpm -qf` (query file) 原理上更快，但只能从本地已安装的数据库里进行验证和查询。',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '如果你在一台没有互联网连接的机房服务器上，想将插入的光盘 ISO 挂载目录作为本地软件源，应该怎么在 `/etc/yum.repos.d/` 目录下进行配置？',
    options: [
      '手动创建一个以 `.repo` 为后缀的文本文件，里面使用 `baseurl=file:///mount/point` 的语法指向光盘',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: '红帽系软件源的根本在于 `.repo` 配置文件。通过 `baseurl=file:///挂载点路径` 并配合 `gpgcheck=0` (不验证在线签名)，这是配置本地源最经典且必考的核心方式。',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '如何获取当前系统内“所有已经安装成功”的软件包清单列表？',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', '选项 B 和 C 都正确'],
    correct: 3,
    explanation: '`dnf list installed` 是 DNF 的用法，输出工整。而 `rpm -qa`（query all）是底层 RPM 工具箱最古老且经典的输出方式（多用于管道配合 grep 使用）。两者都能准确列出清单。',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '哪个 `rpm` 专用选项可以列出某个（比如 httpd）已安装软件包释放在硬盘各个角落的具体“全部文件清单”？',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: '`-q` 代表 query (查询模式)，`-l` 代表 list (列表）。因此 `rpm -ql` 能让你清楚地看到这个包到底往 `/etc`、`/var/www` 以及 `/usr/bin` 里塞了哪些配置文件。',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '如果你怀疑某个程序遭到黑客篡改，想要将现有系统里某个软件包的底层散列值与安装包原本的特征码进行“校验对比（Verify）”，使用的命令是？',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: '`rpm -V <包名>` (Verify) 是系统审计的核心手段。它能检查大小、MD5/SHA 摘要、权限、类型、所有者和所属组，如果文件正常它一声不响，任何偏差将会打印出报警字母缩写。',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: '你要如何强制使用低级别 `rpm` 工具从本地文件安装一个以 `.rpm` 结尾的包，并且“强行无视任何不满足的依赖关系”？（尽管这是极其危险的）',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: '`-i` 是安装 (install)，`-v` 和 `-h` 是显示详细过程条。而 `--nodeps` (No dependencies) 是关键选项，它会让 RPM 闭口不谈缺失错误强行安装，常在紧急抢修或者互相循环依赖的死锁局面中使用。',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '在 RHEL 9 系列中，作为管理员如果想要修改 GRUB2 的全局主控宏观参数（比如超时秒数、默认附加内核启动参数等），“唯一推荐”被直接手动编辑的配置文件是在哪里？',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: '`/etc/default/grub` 包含可读可写的高级全局变量。你绝对不应该直接使用 vi 去编辑 `/boot/grub2/grub.cfg`，因为那个是由脚本组装拼接自动生成的最终产物，任何升级都会抹掉你的改动。',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '当你编辑并保存了 `/etc/default/grub` 后。接下来必须执行哪条命令来重新编译并生成应用该改变的 `grub.cfg`？',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: '`grub2-mkconfig` 是专门读取各层配置模板来制成启动脚本的命令工具。`-o` 参数将最终生成的文本输出落地覆盖到核心引导目录里（旧系统为 `/boot/grub2/grub.cfg`，UEFI时代则是向固件路径映射）。Ubuntu 系中常叫 `update-grub`。',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: '如何通过标准流程把系统开机时 GRUB 引导黑底白字菜单的等待倒数停留时间明确改为 5 秒？',
    options: [
      '用编辑器打开 /etc/default/grub，把项 GRUB_TIMEOUT 修改为 5，保存退出后再运行 grub2-mkconfig 命令',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: '在配置文件中修改 `GRUB_TIMEOUT=5` 并随后重新生成 cfg 是最为正规的考场动作保障。',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '哪个文件或目录实际上存储着 RHEL 当前系统中所有内核版本的 GRUB2 具体引导启动项脚本（菜单条目）？',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 1,
    explanation: '最终呈现所有内核选项（menuentry）合并好的大全集依然是 `/boot/grub2/grub.cfg` 文件内部。',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '如何使用 `dnf` 一次性将一整个开发大礼包（如 "Development Tools" 开发工具群组，包含了 gcc、make 等上百个相关软件）全部连带安装？',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      '选项 B 和 C 在日常语境下都可行',
    ],
    correct: 3,
    explanation: '针对概念集（Groups），较新的 DNF 使用 `dnf group install <带双引号组全名>` 作为最清晰的推荐语法，而老版的无缝连接写法 `groupinstall` 也依然为了兼容被完整保留了下来。',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '哪个 RPM 选项专门负责在终端里为你展示关于某个包的长篇“大论说明（Information）”，比如官网地址、作者、授权协议以及产品文本简介？',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: '`rpm -qi` (query info) 能打出一张完整的“名片”，包括该包的架构、编译时间戳甚至详细的功能自述。',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '你只想利用 `dnf` 强大的依赖计算能力从网络源把某个软件包物理地“下载并缓存 (Download)”到当前目录作为离线储备包，而绝对不想让它被“安装”进系统，你该用什么命令？',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: '`dnf download <包名>` 是一个被高度集成的超级实用插件命令。它会直接抓取官方仓库里匹配的 `.rpm` 原压缩包并扔在你当前的黑框命令行路径下，常被用在中转跳板机做离线搬运活。',
  },
]
