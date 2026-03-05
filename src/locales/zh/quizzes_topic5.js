export const topic5Quizzes = [
  {
    "lessonId": "5-1",
    "question": "root 用户有什么 UID？",
    "options": [
      "1",
      "0",
      "1000",
      "999"
    ],
    "correct": 1,
    "explanation": "root 用户的 UID 始终为 0。"
  },
  {
    "lessonId": "5-1",
    "question": "哪个命令允许您以 root 身份运行命令？",
    "options": [
      "在",
      "我出汗",
      "根",
      "行政"
    ],
    "correct": 1,
    "explanation": "sudo 使用您的密码以 root 权限运行单个命令。"
  },
  {
    "lessonId": "5-1",
    "question": "su - （带有连字符）如下：",
    "options": [
      "仅更改用户",
      "切换用户并加载其完整环境",
      "创建一个新用户",
      "删除用户"
    ],
    "correct": 1,
    "explanation": "su - 模拟目标用户的完整登录，加载所有环境变量。"
  },
  {
    "lessonId": "5-1",
    "question": "/etc/sudoers 修改为：",
    "options": [
      "矮人",
      "维姆",
      "维苏多",
      "chmod"
    ],
    "correct": 2,
    "explanation": "visudo 是编辑 /etc/sudoers 的安全方法：在保存之前检查语法。"
  },
  {
    "lessonId": "5-1",
    "question": "“最小特权”原则意味着：",
    "options": [
      "始终给予 root",
      "仅授予必要的权限",
      "没有密码",
      "始终使用 sudo"
    ],
    "correct": 1,
    "explanation": "仅向用户和进程授予其任务严格必需的权限。"
  },
  {
    "lessonId": "5-1",
    "question": "sudo与su相比有以下优点：",
    "options": [
      "不要询问密码",
      "在日志中可追踪",
      "更快",
      "不要要求特权"
    ],
    "correct": 1,
    "explanation": "sudo 将每个命令记录在日志（/var/log/auth.log）中，使操作可追溯。"
  },
  {
    "lessonId": "5-1",
    "question": "“id”命令显示：",
    "options": [
      "主机名",
      "用户的 UID、GID 和组",
      "PID",
      "内核版本"
    ],
    "correct": 1,
    "explanation": "id 显示 UID、GID 以及用户所属的所有组。"
  },
  {
    "lessonId": "5-1",
    "question": "系统用户有UID：",
    "options": [
      "0",
      "从 1 到 999",
      "1000 及以上",
      "负面影响"
    ],
    "correct": 1,
    "explanation": "系统用户（守护进程、服务）通常具有从 1 到 999 的 UID。"
  },
  {
    "lessonId": "5-1",
    "question": "用户“nobody”用于：",
    "options": [
      "管理员",
      "不需要特权的进程",
      "备份",
      "远程登录"
    ],
    "correct": 1,
    "explanation": "nobody (UID 65534) 用于必须以最低权限运行的进程。"
  },
  {
    "lessonId": "5-1",
    "question": "身份验证日志位于：",
    "options": [
      "/var/log/auth.log",
      "/etc/log/auth",
      "/tmp/auth.log",
      "/主页/日志"
    ],
    "correct": 0,
    "explanation": "/var/log/auth.log (Debian) 或 /var/log/secure (RHEL) 包含身份验证日志。"
  },
  {
    "lessonId": "5-2",
    "question": "加密的密码存储在哪个文件中？",
    "options": [
      "/etc/密码",
      "/etc/影子",
      "/etc/组",
      "/etc/登录"
    ],
    "correct": 1,
    "explanation": "/etc/shadow 包含加密密码，只有 root 可读。"
  },
  {
    "lessonId": "5-2",
    "question": "哪个命令创建一个具有主目录的新用户？",
    "options": [
      "添加用户",
      "用户添加-m",
      "新用户",
      "库用户"
    ],
    "correct": 1,
    "explanation": "useradd -m 创建用户及其主目录。 -m 是必不可少的。"
  },
  {
    "lessonId": "5-2",
    "question": "/etc/passwd 的格式为：",
    "options": [
      "用户：密码：home",
      "用户:x:UID:GID:信息:主页:shell",
      "用户:UID:shell",
      "名称：哈希：盐"
    ],
    "correct": 1,
    "explanation": "user:x:UID:GID:gecos:home:shell — x 表示密码位于 /etc/shadow 中。"
  },
  {
    "lessonId": "5-2",
    "question": "usermod -aG 用户组 执行以下操作：",
    "options": [
      "从组中删除用户",
      "将用户添加到附加组",
      "更改主要组",
      "创建一个新组"
    ],
    "correct": 1,
    "explanation": "-aG（附加组）将用户添加到附加组中，而不将其从其他组中删除。"
  },
  {
    "lessonId": "5-2",
    "question": "/etc/skel 包含：",
    "options": [
      "密码",
      "新主目录的模板",
      "团体",
      "日志"
    ],
    "correct": 1,
    "explanation": "/etc/skel 包含复制到每个新用户主目录的文件（例如 .bashrc）。"
  },
  {
    "lessonId": "5-2",
    "question": "userdel -r 删除：",
    "options": [
      "仅用户",
      "用户及其主目录",
      "只有家",
      "只需密码即可"
    ],
    "correct": 1,
    "explanation": "-r 还删除用户的主目录和邮件假脱机。"
  },
  {
    "lessonId": "5-2",
    "question": "用户密码用于：",
    "options": [
      "创建用户",
      "更改用户密码",
      "删除用户",
      "阻止用户"
    ],
    "correct": 1,
    "explanation": "passwd 更改用户的密码。 Root 可以更改任何用户的权限。"
  },
  {
    "lessonId": "5-2",
    "question": "/etc/group 包含：",
    "options": [
      "群组密码",
      "团体及其成员列表",
      "文件权限",
      "网络配置"
    ],
    "correct": 1,
    "explanation": "/etc/group 列出系统组及其附加成员。"
  },
  {
    "lessonId": "5-2",
    "question": "groupadd 组名 创建：",
    "options": [
      "一个用户",
      "一个新的团体",
      "一个文件",
      "一个目录"
    ],
    "correct": 1,
    "explanation": "groupadd 在系统中创建一个新组。"
  },
  {
    "lessonId": "5-2",
    "question": "/etc/passwd 中的哪个字段包含登录 shell？",
    "options": [
      "第一个",
      "第三个",
      "倒数第二个",
      "最后一张"
    ],
    "correct": 3,
    "explanation": "/etc/passwd 的最后一个（第 7 个）字段指定用户的登录 shell。"
  },
  {
    "lessonId": "5-2",
    "question": "/sbin/nologin 作为 shell 意味着：",
    "options": [
      "根壳",
      "用户无法交互登录",
      "应急炮弹",
      "没有密码的外壳"
    ],
    "correct": 1,
    "explanation": "/sbin/nologin 阻止交互式登录（用于服务帐户）。"
  },
  {
    "lessonId": "5-2",
    "question": "每个用户都有一个组：",
    "options": [
      "选修的",
      "初级（必修）",
      "仅当管理员",
      "只要他有家"
    ],
    "correct": 1,
    "explanation": "每个用户都有一个主要组（/etc/passwd 中的 GID），并且可以有其他组。"
  },
  {
    "lessonId": "5-3",
    "question": "rwxr-xr-- 权限对应什么八进制值？",
    "options": [
      "第644章",
      "第755章",
      "第754章",
      "第764章"
    ],
    "correct": 2,
    "explanation": "rwx=7，r-x=5，r--=4 → 754。"
  },
  {
    "lessonId": "5-3",
    "question": "哪个命令更改文件的所有者？",
    "options": [
      "chmod",
      "乔恩",
      "chgrp",
      "赫佩尔姆"
    ],
    "correct": 1,
    "explanation": "chown（更改所有者）更改所有者。 chmod 更改权限。"
  },
  {
    "lessonId": "5-3",
    "question": "chmod u+x script.sh 命令有什么作用？",
    "options": [
      "删除执行权限",
      "为所有者添加执行权限",
      "给所有添加执行权限",
      "更改所有者"
    ],
    "correct": 1,
    "explanation": "u+x 向所有者（u=用户）添加（+）执行权限（x）。"
  },
  {
    "lessonId": "5-3",
    "question": "什么特殊权限会导致目录中的新文件继承该组？",
    "options": [
      "粘性位",
      "苏伊德",
      "SGID",
      "前交叉韧带"
    ],
    "correct": 2,
    "explanation": "目录上的 SGID 会导致新文件继承该目录的组。"
  },
  {
    "lessonId": "5-3",
    "question": "r（读取）的八进制值为：",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "correct": 2,
    "explanation": "r=4，w=2，x=1。数值相加：rw=6，rwx=7。"
  },
  {
    "lessonId": "5-3",
    "question": "chmod 644 集：",
    "options": [
      "rwxr-xr-x",
      "RW-R--R--",
      "读写x-----",
      "RW-RW-RW-"
    ],
    "correct": 1,
    "explanation": "6=rw-, 4=r--, 4=r-- → rw-r--r--（所有者读/写，其他人只读）。"
  },
  {
    "lessonId": "5-3",
    "question": "/tmp 上的粘滞位可防止：",
    "options": [
      "阅读别人的作品",
      "删除他人的文件",
      "写作",
      "执行"
    ],
    "correct": 1,
    "explanation": "粘滞位可防止用户删除 /tmp 中不属于他们的文件。"
  },
  {
    "lessonId": "5-3",
    "question": "umask 022 为以下文件生成默认权限：",
    "options": [
      "第777章",
      "第755章",
      "第644章",
      "600"
    ],
    "correct": 2,
    "explanation": "对于文件：666 - 022 = 644 (rw-r--r--)。对于目录：777 - 022 = 755。"
  },
  {
    "lessonId": "5-3",
    "question": "chgrp 更改：",
    "options": [
      "业主",
      "所有权集团",
      "许可证",
      "文件名"
    ],
    "correct": 1,
    "explanation": "chgrp（更改组）更改拥有文件的组。"
  },
  {
    "lessonId": "5-3",
    "question": "可执行文件上的 SUID 使其能够以权限运行：",
    "options": [
      "运行它的用户",
      "文件所有者的",
      "始终扎根",
      "团体中"
    ],
    "correct": 1,
    "explanation": "SUID 使程序以文件所有者的权限运行（例如 passwd 具有 SUID root）。"
  },
  {
    "lessonId": "5-3",
    "question": "chmod o-w 文件删除：",
    "options": [
      "为所有人写作",
      "为“他人”写作",
      "为“他人”读书",
      "为“主人”奔跑"
    ],
    "correct": 1,
    "explanation": "o=其他，-w=删除文字。删除“其他”的写入权限。"
  },
  {
    "lessonId": "5-3",
    "question": "ls -l 以以下格式显示权限：",
    "options": [
      "八进制 (755)",
      "符号 (rwxr-xr-x)",
      "曲目",
      "十六进制"
    ],
    "correct": 1,
    "explanation": "ls -l 以符号格式显示权限：rwxr-xr-x。"
  },
  {
    "lessonId": "5-3",
    "question": "具有 700 权限的文件只能通过以下方式访问：",
    "options": [
      "每个人",
      "业主",
      "团体",
      "根"
    ],
    "correct": 1,
    "explanation": "700 = rwx------ — 只有所有者拥有权限（root 绕过一切）。"
  },
  {
    "lessonId": "5-4",
    "question": "什么类型的链接可以跨不同的文件系统？",
    "options": [
      "硬链接",
      "符号链接",
      "两个都",
      "没有人"
    ],
    "correct": 1,
    "explanation": "符号链接可以跨越不同的文件系统。硬链接则不然。"
  },
  {
    "lessonId": "5-4",
    "question": "当删除硬链接的目标文件时会发生什么？",
    "options": [
      "链接变得“损坏”",
      "该文件仍然可以通过链接访问",
      "链接也被删除了",
      "系统出现故障"
    ],
    "correct": 1,
    "explanation": "通过硬链接，只要存在至少一个到 inode 的链接，文件就保持可访问。"
  },
  {
    "lessonId": "5-4",
    "question": "ln -s 目标链接创建：",
    "options": [
      "硬链接",
      "符号链接",
      "一份",
      "别名"
    ],
    "correct": 1,
    "explanation": "-s 表示符号链接。如果没有 -s，ln 将创建硬链接。"
  },
  {
    "lessonId": "5-4",
    "question": "“损坏的”符号链接是指：",
    "options": [
      "权限被拒绝",
      "目标文件已被删除",
      "索引节点已损坏",
      "文件系统已满"
    ],
    "correct": 1,
    "explanation": "当目标文件不再存在时，符号链接就会“损坏”。"
  },
  {
    "lessonId": "5-4",
    "question": "硬链接指向：",
    "options": [
      "一条路",
      "一个索引节点",
      "另一个链接",
      "一个目录"
    ],
    "correct": 1,
    "explanation": "硬链接是指向与原始文件相同的 inode 的附加名称。"
  },
  {
    "lessonId": "5-4",
    "question": "您可以创建目录的硬链接吗？",
    "options": [
      "是的，总是",
      "否（通常）",
      "只有root可以",
      "仅与-d一起使用"
    ],
    "correct": 1,
    "explanation": "不允许对目录进行硬链接，以避免文件系统中出现循环。"
  },
  {
    "lessonId": "5-4",
    "question": "ls -i 显示：",
    "options": [
      "文件类型",
      "索引节点号",
      "业主",
      "创建日期"
    ],
    "correct": 1,
    "explanation": "ls -i 显示每个文件的索引节点号。"
  },
  {
    "lessonId": "5-4",
    "question": "阅读链接显示：",
    "options": [
      "文件的内容",
      "符号链接的目标",
      "许可证",
      "业主"
    ],
    "correct": 1,
    "explanation": "readlink 显示符号链接指向的文件/路径。"
  },
  {
    "lessonId": "5-4",
    "question": "指向同一文件的两个硬链接具有：",
    "options": [
      "不同的索引节点",
      "相同的索引节点",
      "内容不同",
      "不同的主人"
    ],
    "correct": 1,
    "explanation": "硬链接共享相同的索引节点。它们与“原始”文件没有区别。"
  },
  {
    "lessonId": "5-4",
    "question": "符号链接的大小为：",
    "options": [
      "零字节",
      "与目标相同",
      "等于目标路径长度",
      "4096字节"
    ],
    "correct": 2,
    "explanation": "符号链接的大小是目标路径的长度（例如 /etc/passwd = 11 字节）。"
  }
];
