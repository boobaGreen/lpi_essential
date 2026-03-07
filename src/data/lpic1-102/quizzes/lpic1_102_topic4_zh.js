// LPIC-1 102 Quiz Pool — Chinese — Topic 108 (核心系统服务)

export const lpic1_102_topic4Quizzes_zh = [
  // ─── 108.1 维护系统时间 (5 题) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "哪个命令允许将硬件时钟 (RTC) 与当前的系统软件时间进行同步？",
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: "--systohc 将系统软件时间的值写入到硬件时钟 (Hardware Clock) 中。"
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "用于在网络中进行计算机时间精准同步的标准协议是什么？",
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: "网络时间协议 (NTP) 保证了计算机集群时间的同步一致性。",
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "在哪种基于 systemd 的发行版中，使用哪个现代工具来修改时区和时间设置？",
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: "`timedatectl` 是 systemd 用于管理时间日期偏好的主要途径。",
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "chrony 软件在 Linux 时间服务中的主要定位是什么？",
    options: ['它是 ntpd 的替代品，旨在更快速精准地同步时间', '它是日志同步工具', '它是 IP 地址管理工具', '它是备份软件'],
    correct: 0,
    explanation: "chrony 特别适合网络连接不稳定的系统提供快速的时间同步。",
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "大多数专业 Linux 服务器的硬件时钟通常设置为哪个标准时间？",
    options: ['当地时间 (Local Time)', 'PST', 'UTC', 'GMT+8'],
    correct: 2,
    explanation: "将硬件时钟设置为协调世界时 (UTC) 是服务器环境的最佳实践。",
  },

  // ─── 108.2 系统日志记录 (Logging) (5 题) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "哪项服务主要负责自动定期转储日志，防止单个日志文件撑满磁盘空间？",
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: "logrotate 可以对旧日志进行压缩、删除或邮件发送。"
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "`journalctl` 的哪个选项可以实时“跟踪”正在生成的新日志以便动态查看？",
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: "-f 参数类似于 tail -f 功能，随日志滚动实时显示消息。",
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "systemd 架构中，负责将日志收集并以二进制格式保存的守候进程叫什么？",
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: "systemd-journald 管理核心的二级制系统日志 (Journal)。",
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "rsyslog 软件的主要配置文件在哪里？",
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: "/etc/rsyslog.conf 定义了不同优先级消息的过滤和保存逻辑。",
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "如何从命令行或通过脚本手动向系统日志发送一条测试消息？",
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: "`logger` 命令提供了一个简单的接口，可以将信息写入日志。",
  },

  // ─── 108.3 邮件传输代理 (MTA) 基础 (5 题) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "要将发往 root 的邮件重定向给普通用户，应该修改哪个配置文件？",
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: "/etc/aliases 文件用于定义本地邮件的收件人别名。",
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "以下哪项不是 Linux 中的邮件传输代理 (MTA)？",
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: "Apache 是网站服务器，Postfix/Exim/Sendmail 都是 MTA 服务程序。",
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "在修改了 `/etc/aliases` 之后，必须运行哪个命令使配置生效？",
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: "`newaliases` 用于根据文本别名文件重建二进制数据库。",
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可供管理员查看当前邮件发送队列的积压情况？",
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: "`mailq` 会展示所有待处理及其投递状态的邮件条目。",
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "在 Postfix 下，定义服务器主机名和域名的主配置文件叫什么？",
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: "main.cf 是存放 Postfix 绝大部分重要运行参数的文件。",
  },

  // ─── 108.4 打印机与 CUPS 管理 (5 题) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "CUPS 网页端的管理后台默认监听哪个端口？",
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: "631 是通用打印协议 IPP 和 CUPS 服务的标准端口号。",
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可以从打印队列中取消（删除）一个特定的打印作业？",
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: "lprm (line printer remove) 是删除打印队列中指定任务的标准工具。",
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "查看系统整体打印机状态的常见命令包括哪些？",
    options: ['lpstat', 'lpq', 'lpc status', '以上所有命令都可以'],
    correct: 3,
    explanation: "现代 CUPS 复刻并支持上述所有旧版 Unix/BSD 的打印查询命令。",
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "哪两个是提交打印任务最常用的核心命令行程序？",
    options: ['lp', 'lpr', 'lp 和 lpr 都可以', 'sendprint'],
    correct: 2,
    explanation: "CUPS 同时兼容 System V 的 `lp` 风格和 BSD 的 `lpr` 风格提交工具。",
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "CUPS 服务的核心守护进程配置文件叫什么？",
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: "cupsd.conf 是配置打印服务运行逻辑的关键。",
  },
];
