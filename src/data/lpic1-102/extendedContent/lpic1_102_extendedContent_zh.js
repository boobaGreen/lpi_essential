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
      { type: 'infobox', variant: 'tip', content: '使用 `source ~/.bashrc` 或 `. ~/.bashrc` 可以立即在当前会话中应用配置文件的更改。' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Bash 脚本编程基础 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Shebang 与脚本结构' },
      { type: 'paragraph', text: 'Bash 脚本必须以 Shebang (`#!`) 开头，指明解释器的路径。' },
      { type: 'code', title: '脚本首行', prompt: '#!/bin/bash', output: '' },
      { type: 'table', headers: ['特殊变量', '含义'], rows: [
        ['$0', '脚本自身的名称'],
        ['$1, $2...', '传递给脚本的命令行参数'],
        ['$#', '传递给脚本的参数总数'],
        ['$@', '所有参数的列表（每个参数都被引号括起来）'],
        ['$*', '所有参数构成的一个字符串'],
        ['$?', '上一条命令的退出状态码 (0 为成功)'],
        ['$$', '当前进程的 PID'],
      ]},
      { type: 'heading', level: 2, emoji: '🔄', text: '流程控制：If, Case 与 循环' },
      { type: 'code', title: '控制结构示例', prompt: '# If 语句\nif [ $# -gt 0 ]; then\n  echo "参数个数: $#"\nfi\n\n# For 循环\nfor i in {1..5}; do\n  echo "计数: $i"\ndone', output: '' },
      { type: 'infobox', variant: 'exam', content: '注意：在 Shell 中，`0` 表示成功，非零值（通常为 1-255）表示失败。这在脚本逻辑判断中非常关键。' },
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
        items: ['网络透明架构', '使用 X Server 管理显示', '支持 X11 转发 (ssh -X)', '配置复杂 (/etc/X11/xorg.conf)']
      }, right: {
        title: 'Wayland',
        items: ['更安全、高效', '合成器 (Compositor) 直接管理', '现代桌面的默认选择', '通过 XWayland 兼容旧应用']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'X11 配置与日志' },
      { type: 'table', headers: ['文件/目录', '用途'], rows: [
        ['/etc/X11/xorg.conf.d/', '现代 X11 模块化配置文件目录'],
        ['/var/log/Xorg.0.log', '查看显示错误的首选日志文件'],
        ['DISPLAY', '指定显示终端的环境变量 (如 :0.0)'],
        ['~/.xsession', '由显示管理器启动的用户脚本'],
      ]},
    ]
  },

  'lpic1-102-106-2': {
    title: '辅助功能 (Accessibility) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: '视觉与输入辅助' },
      { type: 'list', items: [
        { term: 'Orca', desc: '功能强大的屏幕阅读器。' },
        { term: 'GOK', desc: 'GNOME 屏幕键盘。' },
        { term: 'BRLTTY', desc: '支持盲文显示器的后台程序。' },
        { term: 'Sticky Keys', desc: '粘滞键：允许顺序按下组合键。' },
        { term: 'Mouse Keys', desc: '鼠标键：使用小键盘模拟鼠标移动。' },
      ]},
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
    ]
  },

  'lpic1-102-107-3': {
    title: '本地化与国际化 (Localization) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: '环境变量与区域设置' },
      { type: 'table', headers: ['变量', '含义'], rows: [
        ['LANG', '默认语言和字符编码 (如 zh_CN.UTF-8)'],
        ['LC_ALL', '强制覆盖所有 LC_* 变量'],
        ['LC_TIME', '时间日期格式'],
        ['LC_MESSAGES', '系统消息语言'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: '管理工具' },
      { type: 'list', items: [
        { term: 'locale', desc: '显示当前的区域设置信息。' },
        { term: 'localectl', desc: 'systemd 时代管理时区和键盘布局的工具。' },
        { term: 'iconv', desc: '字符编码转换工具 (如 GBK 转 UTF-8)。' },
      ]},
    ]
  },


  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: '系统时间与网络时间同步 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: '硬件时钟与系统时钟' },
      { type: 'comparison', left: {
        title: '硬件时钟 (RTC/CMOS)',
        items: ['主板电池供电', '通常设为 UTC 时间', '使用 `hwclock` 命令管理']
      }, right: {
        title: '系统时钟 (Kernel)',
        items: ['由内核管理', '处理时区和夏令时', '使用 `date` 命令管理']
      }},
      { type: 'heading', level: 2, emoji: '🌐', text: 'NTP 同步工具' },
      { type: 'table', headers: ['工具/服务', '特征', '配置文件'], rows: [
        ['ntpd', '经典 NTP 服务，精度极高但同步慢', '/etc/ntp.conf'],
        ['chronyd', '现代推荐方案，尤其适合不常在线的电脑', '/etc/chrony.conf'],
        ['systemd-timesyncd', '轻量级客户端，仅用于同步时间', '/etc/systemd/timesyncd.conf'],
      ]},
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
      { type: 'heading', level: 2, emoji: '🔍', text: 'systemd 日志 (journalctl)' },
      { type: 'code', title: '常用指令', prompt: '# 查看所有日志\n$ journalctl\n# 查看内核日志\n$ journalctl -k\n# 实时滚动查看\n$ journalctl -f', output: '' },
    ]
  },

  'lpic1-102-108-3': {
    title: '邮件传输代理 (MTA) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: '邮件转发与管理' },
      { type: 'paragraph', text: '在 Linux 中，系统任务（如 Cron）常通过邮件发送报告。' },
      { type: 'list', items: [
        { term: 'Postfix / Exim / Sendmail', desc: '常见的邮件传输代理 (MTA) 实现。' },
        { term: '/etc/aliases', desc: '定义邮件别名（如将 root 邮件转发给普通用户）。' },
        { term: 'newaliases', desc: '修改别名文件后必须运行此命令以生效。' },
        { term: 'mail / mailq', desc: '查看和管理本地邮件队列。' },
      ]},
    ]
  },

  'lpic1-102-108-4': {
    title: '打印管理 (CUPS) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'CUPS 与打印流程' },
      { type: 'paragraph', text: 'CUPS (Common Unix Printing System) 是 Linux 打印的标准方案。' },
      { type: 'table', headers: ['命令', '功能'], rows: [
        ['lp, lpr', '提交打印作业'],
        ['lpq', '查看打印队列状态'],
        ['lprm', '删除打印作业'],
        ['lpadmin', '配置打印机和队列'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'CUPS 的 Web 管理界面通常位于 `http://localhost:631`。' },
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: '网络协议与基础架构 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: '互联网协议 (IP)' },
      { type: 'paragraph', text: '理解 IPv4 地址空间、子网掩码以及默认网关是配置网络的基础。' },
      { type: 'table', headers: ['协议', '端口', '描述'], rows: [
        ['HTTP / HTTPS', '80 / 443', '网页传输'],
        ['SSH', '22', '远程加密登录'],
        ['DNS', '53', '域名解析'],
        ['DHCP', '67/68', '自动分配 IP'],
      ]},
    ]
  },

  'lpic1-102-109-2': {
    title: '持久化网络配置 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: '接口与路由配置' },
      { type: 'table', headers: ['文件', '描述'], rows: [
        ['/etc/hostname', '设置静态主机名'],
        ['/etc/hosts', '本地主机名到 IP 的映射'],
        ['/etc/resolv.conf', '指定 DNS 服务器地址'],
        ['/etc/nsswitch.conf', '定义名称搜索顺序'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: '网络管理工具' },
      { type: 'list', items: [
        { term: 'ip addr / ip route', desc: '现代网络配置的首选工具。' },
        { term: 'ifconfig / route', desc: '传统的旧式工具（已淡出，但需了解）。' },
        { term: 'nmcli / nmtui', desc: 'NetworkManager 的命令行和图形界面工具。' },
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: '网络故障诊断 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: '网络探测神器' },
      { type: 'list', items: [
        { term: 'ping', desc: '测试连通性。' },
        { term: 'traceroute', desc: '追踪数据包经过的路由节点。' },
        { term: 'netstat / ss', desc: '查看开放的端口和活跃连接。' },
        { term: 'dig / host', desc: '执行 DNS 深度查询（属于 bind9-utils）。' },
      ]},
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
        ['Sticky Bit', 't', '防删位：仅限文件所有者删除内容（如 /tmp）'],
      ]},
      { type: 'code', title: '查找 SUID 程序', prompt: '$ find /usr/bin -perm -4000', output: '/usr/bin/sudo\n/usr/bin/passwd' },
    ]
  },

  'lpic1-102-110-2': {
    title: '账户安全与资源限制 — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: '安全加固' },
      { type: 'list', items: [
        { term: 'ulimit', desc: '限制单用户可使用的系统资源（如进程数、文件大小）。' },
        { term: 'sudo', desc: '以 root 权限执行单条命令，具有完整的日志审计。' },
        { term: '/etc/sudoers', desc: 'sudo 的配置文件（推荐使用 `visudo` 编辑）。' },
      ]},
    ]
  },

  'lpic1-102-110-3': {
    title: '加密技术 (GPG/SSH) — 深度解析',
    sections: [
      { type: 'heading', level: 2, emoji: '🔑', text: 'SSH 与公钥加密' },
      { type: 'paragraph', text: 'SSH 协议提供了安全的远程管理手段。' },
      { type: 'table', headers: ['文件', '用途'], rows: [
        ['~/.ssh/id_rsa', '私钥：绝对不可泄露'],
        ['~/.ssh/id_rsa.pub', '公钥：分发给远程服务器'],
        ['~/.ssh/authorized_keys', '存储允许访问本机的远程公钥'],
        ['/etc/ssh/sshd_config', 'SSH 服务端的主配置文件'],
      ]},
      { type: 'infobox', variant: 'warning', content: '为了安全，应在 `sshd_config` 中禁用 Root 登录 (`PermitRootLogin no`) 并禁用密码认证。' },
    ]
  },
};
