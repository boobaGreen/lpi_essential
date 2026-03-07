// LPIC-1 102 Quiz Pool — Chinese — Topic 107 (管理员任务)

export const lpic1_102_topic3Quizzes_zh = [
  // ─── 107.1 管理用户、组帐号及相关的系统文件 (8 题) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "在大多数现代 Linux 系统中，哪个文件存储了加密后的用户密码和过期信息？",
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: "/etc/shadow 仅 root 可读，用于存储加密的哈希密码。"
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "哪个命令用于修改用户密码的过期参数？",
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: "chage (change age) 工具用于管理密码的时效和策略。"
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "/etc/passwd 文件中的第三个字段代表什么？",
    options: [
      '用户名',
      '组 ID (GID)',
      '用户 ID (UID)',
      '家目录'
    ],
    correct: 2,
    explanation: "格式通常为：用户名:密码占位符:UID:GID:描述:家目录:Shell。"
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "哪个命令可以显示当前用户的 UID 和 GID 信息？",
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: "`id` 命令提供有关用户和所属组 ID 的完整摘要。"
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "哪个文件定义了组以及分配给它们的成员？",
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: "/etc/group 文件管理系统中的所有组信息。",
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "在不移除现有组的情况下，如何将用户添加到名为 'staff' 的补充组中？",
    options: ['usermod -g staff user', 'usermod -aG staff user', 'useradd -G staff user', 'groupmod -A user staff'],
    correct: 1,
    explanation: "`usermod -aG` (append supplementary groups) 用于追加新组而不删除已存在的组。",
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "`useradd` 命令会参考哪个文件来确定默认的文件所有权、主目录路径和 Skeleton 模板？",
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', '/etc/login.defs 和 /etc/default/useradd 都会'],
    correct: 3,
    explanation: "这两个配置文件共同定义了新用户创建时的默认环境设置。",
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可以删除用户帐户，并可选择将其主目录一起删除？",
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: "`userdel -r` 连带删除用户及关联的家目录文件。",
  },

  // ─── 107.2 自动化系统管理任务 (6 题) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "在 crontab 文件中，第一列（最左侧）代表什么？",
    options: [
      '小时',
      '月份',
      '分钟',
      '星期'
    ],
    correct: 2,
    explanation: "cron 时间条目从分钟 (0-59) 开始。"
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "哪个命令显示由 `at` 排队正在等待执行的任务？",
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: "atq 即 'at queue' 的缩写。"
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "哪个目录存放每小时运行一次的系统级周期性任务脚本？",
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: "/etc/cron.hourly/ 包含需要系统每隔一小时定期执行的可执行脚本。",
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "当系统在预定时间处于停机状态时，哪个工具最适合处理重启后的遗漏计划任务？",
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: "`anacron` 专为非 24 小时运行的桌面或服务器设计，解决过期未运行的任务。",
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "如何安全地编辑属于您自己的个人 crontab 条目？",
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/user'],
    correct: 1,
    explanation: "`crontab -e` 在您保存退出后会自动重新加载 cron 配置并检查格式。",
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "哪个文件列出了那些明确被禁止使用 `at` 命令的用户？",
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: "/etc/at.deny 允许管理员限制特定的个人使用 `at`。",
  },

  // ─── 107.3 本地化与国际化 (6 题) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "哪个环境变量定义了系统的全局默认语言和字符编码？",
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: "LANG 是定义本地化设置 (locales) 的主要变量。"
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Linux 系统通常如何设置本地时区？",
    options: [
      '通过编辑 /etc/timezone.conf 文件',
      '通过将 /etc/localtime 指向 /usr/share/zoneinfo/ 中的文件',
      '通过在 /etc/profile 中设置 TZ 变量',
      '使用命钟设置命令'
    ],
    correct: 1,
    explanation: "使用符号链接将 /etc/localtime 链接到正确的 zoneinfo 是标准方法。",
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "如果设置了 `LC_ALL` 变量，它的作用是什么？",
    options: ['它是强制语言变量', '它会覆盖所有其他以 LC_* 开头的环境变量', '它是 LANG 的旧版别名', '它锁定编码'],
    correct: 1,
    explanation: "`LC_ALL` 具有最高的优先级，并能替换 LANG 以及所有其他分类变量。",
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "哪个命令用于转换文本文件的编码格式（例如从 ISO-8859-1 转换为 UTF-8）？",
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: "`iconv` 是专门用于字符编码转换的标准命令行工具。",
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "哪个命令显示当前的系统日期、时间以及时区信息？",
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: "`date` 用于显示或设置系统时钟。",
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Unicode (及其常见的 UTF-8 编码) 的核心目标是什么？",
    options: [
      '对文本文件提供压缩方法',
      '为全世界几乎所有语言的字符提供统一编码',
      '为 Web 流量提供加密标准',
      '提高数据库查询脚本的处理速度'
    ],
    correct: 1,
    explanation: "Unicode 旨在为每个字符分配唯一的数字代码，不分平台、语言或程序。",
  },
];
