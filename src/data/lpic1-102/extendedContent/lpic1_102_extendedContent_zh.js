// LPIC-1 102 Extended Content  Chinese
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_zh = {

  // Topic 1: Shells and Shell Scripting
  // Topic 1: Shells and Shell Scripting
  'lpic1-102-105-1': {
    title: 'Shell 环境 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: '定制化 BASH 环境配置' },
      { type: 'paragraph', text: 'Shell 环境通过一系列初始化文件、变量、别名和函数来管理。理解这些文件的调用顺序对于系统管理和 LPIC-1 考试至关重要。' },
      { type: 'table', headers: ['初始化文件', 'Shell 类型', '用途'], rows: [
        ['/etc/profile', 'Login (全域)', '为所有登录用户设置全局环境变量和启动程序。'],
        ['~/.bash_profile', 'Login (用户)', '用户专属配置，通常会调用 ~/.bashrc。'],
        ['~/.bash_login', 'Login (用户)', '若 ~/.bash_profile 不存在则执行此文件。'],
        ['~/.profile', 'Login (用户)', '通用配置文件，若前两者都不存在则执行。'],
        ['/etc/bash.bashrc', 'Non-login (全域)', '为所有交互式 Shell 提供全局配置（如终端窗口）。'],
        ['~/.bashrc', 'Non-login (用户)', '最常用的用户配置文件，存储别名和个人函数。'],
        ['~/.bash_logout', 'Logout (退出)', '在用户退出登录 Shell 时执行清理任务。'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: '关键环境变量' },
      { type: 'table', headers: ['变量名', '描述', '示例'], rows: [
        ['PATH', '执行命令时搜索二进制文件的目录列表', '/usr/bin:/bin'],
        ['PS1', '主命令提示符（Primary Prompt）', '"\\u@\\h:\\w\\$ "'],
        ['PS2', '多行命令的辅助提示符', '"> "'],
        ['HISTFILE', '存储历史命令的文件路径', '~/.bash_history'],
        ['HISTSIZE', '内存中缓存的历史命令行数', '1000'],
        ['HISTFILESIZE', '磁盘文件中保存的历史命令行数', '2000'],
        ['HISTCONTROL', '控制历史记录的行为 (如 ignoreboth)', 'ignoreboth'],
      ]},
      { type: 'code', title: '设置变量与别名', prompt: '# 使别名永久生效 (在 ~/.bashrc 中)\nalias update="sudo apt update && sudo apt upgrade"\n\n# 修改 PATH (在 ~/.profile 或 ~/.bashrc 中)\nexport PATH="$PATH:$HOME/bin"\n\n# 立即应用 .bashrc 的更改\n$ source ~/.bashrc\n# 或者使用：\n$ . ~/.bashrc', output: '' },
      { type: 'infobox', variant: 'exam', content: '请记住：要在当前 Shell 中重新加载配置文件，请使用 `source file` 或 `. file`。~/.bash_profile 和 ~/.profile 文件仅在登录时读取（例如通过 ssh），而 ~/.bashrc 在打开新终端（非登录）时读取。' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Bash 脚本编程基础 — 深度解析',
    sections: [
      { type: 'code', title: '基础脚本示例', prompt: '#!/bin/bash\n# 这是一个注释\n\necho "脚本开始"\n\nNAME="Linux"\necho "系统: $NAME"\n\n# 执行：\n# 1. 赋予执行权限：chmod +x script.sh\n# 2. 执行：./script.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🔢', text: '特殊变量与参数' },
      { type: 'table', headers: ['变量', '含义'], rows: [
        ['$0', '脚本名称 (例如: ./script.sh)'],
        ['$1, $2... $9', '传递给脚本的参数 (参数 1, 2 等)'],
        ['$#', '传递的参数总数'],
        ['$@', '所有参数，各自独立 ("$1" "$2" "$3")'],
        ['$*', '所有参数，作为一个整体字符串 ("$1 $2 $3")'],
        ['$?', '上一条命令的退出状态码 (0=成功, >0=错误)'],
        ['$$', '当前脚本进程的 PID'],
        ['$!', '最后一个后台作业的 PID'],
      ]},
      { type: 'infobox', variant: 'warning', title: '命令返回值 ($?)', content: '在 Linux 和 Bash 中，退出状态码 0 表示命令执行成功。任何非 0 的数字（例如 1, 2, 127）都表示错误。这与许多编程语言中布尔值的运作方式相反。' },
      { type: 'code', title: '条件结构：if / case', prompt: '# if-then-elif-else-fi 结构\nif [ -f "/etc/passwd" ]; then\n  echo "文件存在"\nelif [ -d "/etc" ]; then\n  echo "它是目录"\nelse\n  echo "未找到"\nfi\n\n# case 结构 (switch)\ncase "$1" in\n  start)\n    echo "正在启动服务..."\n    ;;\n  stop)\n    echo "正在停止服务..."\n    ;;\n  *)\n    echo "用法: $0 {start|stop}"\n    exit 1\n    ;;\nesac', output: '' },
      { type: 'heading', level: 2, emoji: '🔄', text: '循环：for 与 while' },
      { type: 'code', title: '迭代结构', prompt: '# for 循环 - 遍历列表\nfor FILE in *.txt; do\n  echo "正在处理 $FILE"\n  cp "$FILE" "$FILE.bak"\ndone\n\n# while 循环 - 当条件为真时执行\nCOUNTER=1\nwhile [ $COUNTER -le 5 ]; do\n  echo "循环 $COUNTER"\n  COUNTER=$((COUNTER + 1))\ndone\n\n# 命令执行 (命令替换)\nDATE=$(date +%Y-%m-%d)\n# 旧式的等效语法：DATE=`date +%Y-%m-%d`', output: '' },
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 考试要求您掌握在 for 循环中使用 seq 构造（例如 for i in $(seq 1 10)），理解 "$@"（独立参数）与 "$*"（单一字符串）的区别，并能识别数值比较符（-eq, -lt）与字符串比较符（=, <）。' },
    ]
  },

  // Topic 2: User Interfaces and Desktops
  'lpic1-102-106-1': {
    title: 'X11 与 Wayland 视窗系统 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: '显示服务器架构' },
      { type: 'paragraph', text: 'Linux 图形界面依赖于显示服务器来管理窗口、输入设备和绘图。X11 是传统标准，而 Wayland 是现代替代方案。' },
      { type: 'comparison', left: {
        title: 'X Window System (X11)',
        items: ['网络客户端/服务器架构', '应用与 X 服务器通信', '支持通过 SSH 进行图形转发 (X11 Forwarding)', '历史悠久且架构复杂', '窗口和菜单由窗口管理器 (Window Manager) 管理', '历史客户端：xhost, xauth']
      }, right: {
        title: 'Wayland',
        items: ['更现代且更安全的协议', '应用直接绘制到缓冲区', '合成器集成在服务器中', '更低的延迟和画面撕裂', '将取代 X11 (Fedora/Ubuntu 默认)', 'XWayland 用于支持旧版应用']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'X11 配置' },
      { type: 'table', headers: ['文件 / 目录', '功能'], rows: [
        ['/etc/X11/xorg.conf', '传统的单体配置文件（现在是可选的）'],
        ['/etc/X11/xorg.conf.d/', '用于模块化配置片段的目录'],
        ['~/.xsession', '通过显示管理器启动时执行的用户脚本'],
        ['~/.Xresources', '管理 X 程序定制（颜色、字体）'],
        ['/usr/share/X11/', 'X11 服务器的系统数据'],
        ['/var/log/Xorg.0.log', '用于故障排除的主 X11 服务器日志'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: '远程访问与 X11 转发' },
      { type: 'paragraph', text: 'X11 的客户端-服务器架构允许您在远程服务器上运行图形应用，但通过 SSH 将其显示在本地显示器上。' },
      { type: 'code', title: 'X11 转发 (X11 Forwarding)', prompt: '# 在客户端（本地电脑）启用 X11 转发\n$ ssh -X user@remote-server\n# 或使用 -Y 跳过安全检查启用\n$ ssh -Y user@remote-server\n\n# 运行远程程序，它将会在本地显示器打开\nuser@remote:~$ firefox &', output: '' },
      { type: 'table', headers: ['访问命令', '操作'], rows: [
        ['xhost +IP', '旧的不安全模式：允许特定 IP 连接到本地 X 显示器'],
        ['DISPLAY', '定义要使用的显示器的环境变量（如 :0.0）'],
        ['VNC / RDP', '用于远程桌面访问的现代协议（Wayland 和 X11）'],
        ['SPICE', '用于图形化管理 KVM 虚拟机的协议'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 要求区分 X Window System（架构）、关键文件如 `xorg.conf.d`、调试日志 `Xorg.0.log`，并理解显示变量概念（如 `DISPLAY=:0`）和 ssh 选项 `-X`。' },
    ]
  },

  'lpic1-102-106-2': {
    title: '辅助功能 (Accessibility) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: '视觉辅助功能' },
      { type: 'paragraph', text: 'Linux 桌面环境提供了一系列功能来帮助视力、听力或运动受损的用户。这些工具被称为 a11y（Accessibility，辅助功能）。' },
      { type: 'table', headers: ['身体状况', '软件工具', '目的与功能'], rows: [
        ['低视力', 'Orca', '屏幕阅读器（在 GNOME 中通过语音合成读取屏幕内容）'],
        ['低视力', '高对比度主题', '高对比度主题（黑底白字 / 大字体）'],
        ['低视力', '放大镜 / KMagnifier', '屏幕放大工具'],
        ['全盲', 'BRLTTY', '仅在文本/控制台模式下管理盲文显示器的后台程序'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: '运动辅助（键盘）' },
      { type: 'list', items: [
        { term: 'Sticky Keys (粘滞键)', desc: '允许循序按下组合键（如 Ctrl+Alt+Del），适合无法同时按下多个键的用户。' },
        { term: 'Slow Keys (慢速键)', desc: '要求键位按下一定时间才被接受，防止误触。' },
        { term: 'Bounce Keys (回弹键)', desc: '忽略快速且重复的按键。适合手部震颤的用户。' },
        { term: 'Mouse Keys (鼠标键)', desc: '允许使用数字小键盘移动鼠标光标。' },
        { term: '屏幕键盘', desc: '可通过鼠标或眼动追踪系统控制的虚拟屏幕键盘。' },
      ]},
      { type: 'infobox', variant: 'tip', title: '辅助工具', content: '记住这些关联：Orca = 屏幕阅读器。BRLTTY = 盲文支持。Sticky/Slow/Bounce Keys = 用于运动受限的情况。' },
    ]
  },

  // Topic 3: Administrative Tasks
  'lpic1-102-107-1': {
    title: '用户与组群管理 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: '核心账号文件' },
      { type: 'table', headers: ['文件', '描述', '权限'], rows: [
        ['/etc/passwd', '包含用户名、UID、GID、Home、Shell', '644'],
        ['/etc/shadow', '存储加密密码和过期信息', '600/640'],
        ['/etc/group', '定义组信息和成员', '644'],
        ['/etc/gshadow', '组密码和管理信息', '600'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: '管理命令' },
      { type: 'table', headers: ['命令', '功能', '常用参数'], rows: [
        ['useradd', '创建新用户', '-m (创建目录), -s (指定 Shell), -G (附加组)'],
        ['usermod', '修改用户信息', '-aG (追加组), -L (锁定), -U (解锁)'],
        ['userdel', '删除用户', '-r (同时删除家目录)'],
        ['passwd', '设置/改密码', '-l (锁定), -S (状态)'],
        ['groupadd', '创建新组', '-g (指定 GID)'],
      ]},
      { type: 'infobox', variant: 'warning', content: '使用 `usermod -G` 会覆盖用户的所有附加组。请始终使用 `-aG` 以追加组。' },
    ]
  },

  'lpic1-102-107-2': {
    title: '任务调度 (Cron 与 At) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: '周期性任务：Cron' },
      { type: 'paragraph', text: '`crond` 后台程序负责执行预定的周期性任务。' },
      { type: 'code', title: 'Crontab 格式', prompt: '# 分 时 日 月 周 命令\n30 2 * * 1 /usr/local/bin/backup.sh', output: '解释：每周一凌晨 2:30 执行备份' },
      { type: 'table', headers: ['命令/文件', '用途'], rows: [
        ['crontab -e', '编辑当前用户的计划任务'],
        ['crontab -l', '列出计划任务'],
        ['/etc/cron.allow', '允许使用 cron 的用户列表'],
        ['/etc/cron.deny', '禁止使用 cron 的用户列表'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: '一次性任务：At' },
      { type: 'paragraph', text: '`at` 用于在特定时间执行一次性任务。' },
      { type: 'code', title: 'At 使用', prompt: '$ at 14:00\nat> /home/user/script.sh\nat> <EOT> (Ctrl+D)', output: '' },
      { type: 'table', headers: ['命令/文件', '用途'], rows: [
        ['at', '在指定时间执行一次性任务'],
        ['atq', '列出待执行的任务'],
        ['atrm', '删除待执行的任务'],
        ['/etc/at.allow', '允许使用 at 的用户列表'],
        ['/etc/at.deny', '禁止使用 at 的用户列表'],
      ]},
      { type: 'infobox', variant: 'exam', content: '请记住 `cron` 用于周期性任务，`at` 用于一次性任务。了解 `crontab` 格式和 `at` 命令的基本用法。' },
    ]
  },

  'lpic1-102-107-3': {
    title: '本地化与国际化 (Localization) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: '语言环境变量 (LC_*)' },
      { type: 'table', headers: ['变量', '描述'], rows: [
        ['LANG', '所有类别未定义时的默认值'],
        ['LC_CTYPE', '字符分类与编码（如 UTF-8）'],
        ['LC_TIME', '时间与日期格式'],
        ['LC_NUMERIC', '数字格式（小数点符号）'],
        ['LC_MONETARY', '货币符号与格式'],
        ['LC_ALL', '强制覆盖所有其他语言环境变量'],
      ]},
      { type: 'heading', level: 2, emoji: '🔤', text: '编码：ASCII vs UTF-8' },
      { type: 'comparison', left: {
        title: 'ASCII',
          items: ['每个字符 7 位', '仅包含基础英文字母', '最多 128 个字符', '旧有标准']
      }, right: {
        title: 'UTF-8 (Unicode)',
          items: ['变长编码 (1-4 字节)', '支持全球所有语言和表情符号', '向下兼容 ASCII', '全球现代通用标准']
      }},
      { type: 'code', title: '本地化相关命令', prompt: '# 显示当前配置\n$ locale\n\n# 列出所有已安装的语言环境\n$ locale -a\n\n# 临时更改语言\n$ export LANG=en_US.UTF-8\n\n# 设置时区（交互式）\n$ tzselect', output: '' },
      { type: 'infobox', variant: 'tip', title: 'I18n 与 L10n', content: 'I18n (国际化) 是使软件支持多语言。L10n (本地化) 是针对特定地区的实际适配过程。' },
    ]
  },


  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: '系统时间与网络时间同步 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: '硬件时钟与系统时钟' },
      { type: 'paragraph', text: '在 Linux 系统中保持准确的时间对于日志记录、安全性以及自动备份至关重要。' },
      { type: 'comparison', left: {
        title: '硬件时钟 (RTC/CMOS)',
        items: ['主板电池供电', '通常设为 UTC 时间', '使用 `hwclock` 命令管理']
      }, right: {
        title: '系统时钟 (Kernel)',
        items: ['由内核管理', '处理时区和夏令时', '使用 `date` 命令管理']
      }},
      { type: 'table', headers: ['文件 / 目录', '用途'], rows: [
        ['/etc/localtime', '指向当前时区的符号链接（例如 Europe/Paris）'],
        ['/etc/timezone', '包含时区名称的文本文件'],
        ['/usr/share/zoneinfo/', '全球所有时区的系统数据库'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'NTP 与 Chrony' },
      { type: 'table', headers: ['工具', '描述'], rows: [
        ['ntpd', '传统的网络时间协议 (Network Time Protocol) 守护进程'],
        ['chronyd', '在经常离线的系统中性能更出色的现代时间守护进程'],
        ['chronyc', '用于监控和管理 chronyd 的命令行工具'],
        ['ntpq', '用于查询 NTP 时间服务器的实用工具'],
      ]},
      { type: 'code', title: '使用 timedatectl 管理时间', prompt: '# 显示时间、时区和 NTP 状态\n$ timedatectl\n\n# 列出可用的时区\n$ timedatectl list-timezones | grep "Shanghai"\n\n# 更改时区\n$ sudo timedatectl set-timezone Asia/Shanghai\n\n# 启用 NTP 同步\n$ sudo timedatectl set-ntp true', output: '' },
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 要求您了解硬件时钟 (BIOS/RTC) 与系统时钟的区别，并能够使用 `timedatectl` 配置时区和 NTP。' },
    ]
  },

  'lpic1-102-108-2': {
    title: '系统日志记录 (Logging) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'rsyslog 与日志管理' },
      { type: 'paragraph', text: '`rsyslog` 是 Linux 处理系统日志的核心服务。它的配置基于“设施 (Facility)”和“优先级 (Priority)”。' },
      { type: 'table', headers: ['符号', '含义', '示例'], rows: [
        ['Facility', '产生日志的子系统', 'auth, cron, mail, kern'],
        ['Priority', '日志的严重程度', 'debug, info, warn, err, crit'],
        ['Action', '日志的去向', '/var/log/messages, @remote-host'],
      ]},
      { type: 'table', headers: ['日志文件', '通常内容'], rows: [
        ['/var/log/messages', '通用系统消息 (CentOS/RHEL)'],
        ['/var/log/syslog', 'Debian/Ubuntu 系统中的主要通用日志'],
        ['/var/log/auth.log', '登录尝试和身份验证消息'],
        ['/var/log/boot.log', '系统启动期间记录的消息'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Syslog 配置' },
      { type: 'paragraph', text: '`/etc/rsyslog.conf` 文件根据消息的来源 (facility) 和重要性 (priority) 定义消息的去向。' },
      { type: 'code', title: 'Syslog 选择器', prompt: '# 格式：来源.优先级  目的地\n# 将所有身份验证相关信息记录到 auth.log\nauth,authpriv.*                 /var/log/auth.log\n\n# 将所有类型的关键错误记录到控制台\n*.crit                          /dev/console', output: '' },
      { type: 'heading', level: 2, emoji: '🔍', text: 'systemd 日志 (journalctl)' },
      { type: 'code', title: '使用 journalctl', prompt: '# 查看所有日志\n$ journalctl\n# 查看内核日志\n$ journalctl -k\n# 实时滚动查看\n$ journalctl -f\n# 查看自当前启动以来的所有日志\n$ journalctl -b\n\n# 实时跟踪日志（类似 tail -f）\n$ journalctl -f\n\n# 查看特定服务的消息\n$ journalctl -u ssh\n\n# 按优先级过滤（如错误及更严重级别）\n$ journalctl -p err', output: '' },
      { type: 'infobox', variant: 'exam', content: '请务必理解 syslog 选择器的格式（如 mail.info, *.err）以及 journalctl 按单位或时间过滤的常用选项。' },
    ]
  },

  'lpic1-102-108-3': {
    title: '邮件传输代理 (MTA) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: '邮件转发与管理' },
      { type: 'paragraph', text: 'MTA (邮件传输代理) 负责电子邮件的发送和路由。在 Linux 上，最常见的有 Postfix、Exim 和 Sendmail。' },
      { type: 'list', items: [
        { term: 'Postfix / Exim / Sendmail', desc: '常见的邮件传输代理 (MTA) 实现。' },
        { term: '/etc/aliases', desc: '定义邮件别名（如将 root 邮件转发给普通用户）。' },
        { term: 'newaliases', desc: '修改别名文件后必须运行此命令以生效。' },
        { term: 'mail / mailq', desc: '查看和管理本地邮件队列。' },
      ]},
      { type: 'table', headers: ['组件', '描述'], rows: [
        ['/etc/aliases', '定义邮件重定向（例如从 root 到实际用户）'],
        ['newaliases', '修改 /etc/aliases 后运行此命令以应用更改'],
        ['mailq / postqueue -p', '查看待发的邮件队列'],
        ['~/.forward', '用户用于重定向自己邮件的文件'],
      ]},
      { type: 'code', title: '测试发送邮件', prompt: '# 通过控制台快速发送邮件\n$ echo "Test body" | mail -s "Subject" user@example.com\n\n# 检查邮件队列\n$ mailq', output: '' },
      { type: 'infobox', variant: 'exam', content: '考试涉及 `/etc/aliases` 文件、运行 `newaliases` 的重要性以及对常见 MTA 名称的了解。' },
    ]
  },

  'lpic1-102-108-4': {
    title: '打印管理 (CUPS) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'CUPS 与打印流程' },
      { type: 'paragraph', text: 'CUPS (通用 Unix 打印系统) 是 Linux 下管理打印机的标准，使用 IPP (互联网打印协议)。' },
      { type: 'table', headers: ['命令', '功能'], rows: [
        ['lp, lpr', '提交打印作业'],
        ['lpq', '查看打印队列状态'],
        ['lprm', '删除打印作业'],
        ['lpadmin', '配置打印机和队列'],
      ]},
      { type: 'table', headers: ['命令 / 文件', '操作'], rows: [
        ['/etc/cups/', 'CUPS 的主配置目录'],
        ['localhost:631', '用于管理打印机的 Web 界面'],
        ['lpstat -a', '查看打印机状态'],
        ['lpr <文件>', '将文件发送到打印队列'],
        ['lpq', '查看打印队列'],
        ['lprm <id>', '从队列中删除打印作业'],
      ]},
      { type: 'code', title: '打印相关命令', prompt: '# 列出接受作业的打印机\n$ lpstat -a\n\n# 打印文档的 2 份副本\n$ lpr -#2 document.pdf\n\n# 查看我的打印队列\n$ lpq', output: '' },
      { type: 'infobox', variant: 'tip', content: 'CUPS 的 Web 管理界面通常位于 `http://localhost:631`。' },
      { type: 'infobox', variant: 'exam', content: '请记住来自 BSD 的命令 (lpr, lpq, lprm) 与来自 System V 的命令 (lp, lpstat) —— 现代 CUPS 系统两者都支持。' },
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: '网络协议与基础架构 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: '互联网协议 (IP)' },
      { type: 'paragraph', text: '理解 TCP/IP 是任何 Linux 系统管理员的基本功。以下是考试中涉及的关键概念。' },
      { type: 'comparison', left: {
        title: 'IPv4',
        items: ['32 位（如 192.168.1.1）', '约 40 亿个地址（已枯竭）', '通过 DHCP 或静态配置', '点分十进制格式']
      }, right: {
        title: 'IPv6',
        items: ['128 位（如 2001:db8::1）', '地址数量近乎无限', '原生无状态自动配置 (SLAAC)', '冒号十六进制格式']
      }},
      { type: 'heading', level: 2, emoji: '🔌', text: '常用端口与服务' },
      { type: 'table', headers: ['端口', '协议', '服务'], rows: [
        ['21', 'FTP', '文件传输'],
        ['22', 'SSH', '安全远程访问'],
        ['25', 'SMTP', '电子邮件发送'],
        ['53', 'DNS', '域名解析'],
        ['80 / 443', 'HTTP / HTTPS', 'Web 服务（非加密 / 加密）'],
        ['123', 'NTP', '时间同步'],
      ]},
      { type: 'heading', level: 2, emoji: '📦', text: 'TCP vs UDP' },
      { type: 'comparison', left: {
        title: 'TCP (面向连接)',
        items: ['可靠（确认送达）', '流量控制', '较慢（有额外开销）', '用于：Web, SSH, Mail']
      }, right: {
        title: 'UDP (无连接)',
        items: ['快速（无确认机制）', '轻量', '不保证顺序', '用于：流媒体, DNS, DHCP']
      }},
      { type: 'infobox', variant: 'tip', title: '子网掩码', content: '掩码（如 255.255.255.0 或 /24）定义了 IP 地址中“网络”部分和“主机”部分。' },
    ]
  },

  'lpic1-102-109-2': {
    title: '持久化网络配置 — 深度解析',
    sections: [
      { type: 'paragraph', text: '在 Linux 上，网络配置可以通过文本文件或 NetworkManager 等工具进行管理。' },
      { type: 'table', headers: ['文件', '功能'], rows: [
        ['/etc/hostname', '主机名配置'],
        ['/etc/hosts', '静态本地 IP 与名称映射'],
        ['/etc/resolv.conf', '定义用于查询的 DNS 服务器'],
        ['/etc/nsswitch.conf', '定义解析优先级（如 hosts 先于 dns）'],
        ['/etc/network/interfaces', '传统的 Debian/Ubuntu 配置'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: '配置与诊断工具' },
      { type: 'table', headers: ['工具', '用途'], rows: [
        ['ifconfig / ip addr', '配置或显示网络接口'],
        ['route / ip route', '管理路由表'],
        ['netstat / ss', '查看网络连接和监听端口'],
        ['nmcli / nmtui', '通过控制台管理 NetworkManager'],
      ]},
      { type: 'code', title: 'ip 命令示例', prompt: '# 显示 IP 地址\n$ ip addr show\n\n# 启用接口\n$ sudo ip link set eth0 up\n\n# 显示默认路由（网关）\n$ ip route show\n\n# 查看监听端口 (ss 比 netstat 更快)\n$ ss -tulpn', output: '' },
      { type: 'infobox', variant: 'exam', content: '请掌握 DNS 的配置位置 (`/etc/resolv.conf`)，并理解 `ss` 和 `ip` 命令如何取代旧有的 `netstat` 和 `ifconfig`。' },
    ]
  },

  'lpic1-102-109-3': {
    title: '网络故障诊断 — 深度解析',
    sections: [
      { type: 'paragraph', text: '解决网络问题需要一套条理清晰的方法。' },
      { type: 'table', headers: ['工具', '诊断用途'], rows: [
        ['ping', '验证基础 ICMP 连通性'],
        ['traceroute', '识别路径及中间路由器'],
        ['host / dig', '测试 DNS 域名解析'],
        ['netstat -r', '检查路由表'],
        ['telnet / nc', '验证远程端口是否打开'],
      ]},
      { type: 'heading', level: 2, emoji: '🩹', text: '典型排错流程' },
      { type: 'code', title: '验证步骤', prompt: '# 1. 接口是否激活？\n$ ip link\n# 2. 是否有 IP 地址？\n$ ip addr\n# 3. 能否 ping 通网关？\n$ ping -c 4 192.168.1.1\n# 4. DNS 是否正常工作？\n$ host google.com\n# 5. 外部路由是否通畅？\n$ traceroute 8.8.8.8', output: '' },
      { type: 'infobox', variant: 'exam', content: '考试经常会问该用哪个工具：测试路径 (`traceroute`)、测试 DNS (`dig`) 或查看本地开启的端口 (`ss`)。' },
    ]
  },

  // Topic 6: Security
  'lpic1-102-110-1': {
    title: '系统安全审计 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: '权限与特殊位' },
      { type: 'paragraph', text: '除了基本的 rwx 权限，Linux 还通过特殊位来增强安全性。' },
      { type: 'table', headers: ['特殊位', '缩写', '含义'], rows: [
        ['SetUID', 'SUID', '以文件所有者权限运行'],
        ['SetGID', 'SGID', '以文件所属组权限运行（常用于共享目录）'],
        ['Sticky Bit', 't', '防删位：防止他人删除非自己所有的文件（如 /tmp）'],
      ]},
      { type: 'code', title: '使用特殊权限位', prompt: '# 为可执行文件添加 SUID\n$ chmod u+s /usr/bin/my-tool\n\n# 为目录添加 SGID（实现组继承）\n$ chmod g+s /shared/data\n\n# 查找系统中所有的 SUID 文件\n$ find / -perm -4000 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '📉', text: '资源限制 (ulimit)' },
      { type: 'paragraph', text: '`ulimit` 命令允许对用户进程消耗的资源设置限制，以防止拒绝服务 (DoS) 攻击。' },
      { type: 'code', title: 'ulimit 示例', prompt: '# 显示当前所有限制\n$ ulimit -a\n\n# 限制最大打开文件数\n$ ulimit -n 1024\n\n# 限制创建文件的最大大小\n$ ulimit -f 100000', output: '' },
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 要求能够通过 `ls -l` 中的字母 (s) 识别 SUID/SGID 文件，并理解 `ulimit` 对系统稳定性的作用。' },
    ]
  },

  'lpic1-102-110-2': {
    title: '账户安全与资源限制 — 深度解析',
    sections: [
      { type: 'paragraph', text: '使用 `sudo` 管理 root 访问权限是推荐的管理方法，因为它具有完整的日志记录且权限粒度可控。' },
      { type: 'table', headers: ['文件 / 命令', '角色'], rows: [
        ['/etc/sudoers', '主配置文件（切勿直接编辑）'],
        ['visudo', '用于编辑 /etc/sudoers 的安全命令（会检查语法）'],
        ['/etc/login.defs', '账户参数和密码过期的全局配置'],
        ['/etc/securetty', '列出 root 可以直接登录的终端'],
      ]},
      { type: 'heading', level: 2, emoji: '🚫', text: '禁用账户' },
      { type: 'table', headers: ['方法', '操作'], rows: [
        ['/etc/nologin', '如果此文件存在，则只有 root 可以登录'],
        ['passwd -l', '锁定用户密码'],
        ['usermod -s /sbin/nologin', '禁止访问 Shell'],
      ]},
      { type: 'code', title: 'Sudo 的使用', prompt: '# 以 root 身份执行命令\n$ sudo apt update\n\n# 临时切换为 root（交互式 Shell）\n$ sudo -i\n\n# 查看自己的 sudo 权限\n$ sudo -l', output: '' },
      { type: 'infobox', variant: 'exam', content: '请关注 `visudo`、锁定账户与更改 Shell 的区别，以及 `/etc/securetty` 的重要性。' },
    ]
  },

  'lpic1-102-110-3': {
    title: '加密技术 (GPG/SSH) — 深度解析',
    sections: [
      { type: 'paragraph', text: '加密是 Linux 数据安全的核心，无论是存储还是通信。' },
      { type: 'table', headers: ['GPG 命令', '操作'], rows: [
        ['gpg -c <文件>', '使用密码短语加密文件'],
        ['gpg -d <文件.gpg>', '解密文件'],
        ['gpg --gen-key', '生成公钥/私钥对'],
      ]},
      { type: 'heading', level: 2, emoji: '🔑', text: 'SSH 密钥与身份验证' },
      { type: 'code', title: '管理 SSH 密钥', prompt: '# 生成新密钥 (RSA 4096 位)\n$ ssh-keygen -t rsa -b 4096\n\n# 将公钥复制到远程服务器\n$ ssh-copy-id user@remote-host\n\n# 为 ~/.ssh 设置正确的权限\n$ chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys', output: '' },
      { type: 'infobox', variant: 'tip', title: 'SSH 代理', content: '使用 `ssh-agent` 和 `ssh-add` 在当前会话中记住密钥的密码短语。' },
    ]
  },
};
