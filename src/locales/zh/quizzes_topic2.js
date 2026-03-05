export const topic2Quizzes = [
  {
    "lessonId": "2-1",
    "question": "大多数 Linux 发行版中默认使用哪个 shell？",
    "options": [
      "桀骜",
      "鱼",
      "巴什",
      "西施"
    ],
    "correct": 2,
    "explanation": "Bash (Bourne Again Shell) 是大多数 Linux 发行版中的默认 shell。"
  },
  {
    "lessonId": "2-1",
    "question": "提示符中什么符号表示 root 用户？",
    "options": [
      "$",
      "#",
      "@",
      "！"
    ],
    "correct": 1,
    "explanation": "#符号表示root用户，$表示普通用户。"
  },
  {
    "lessonId": "2-1",
    "question": "双引号 (\") 的引用有什么作用？",
    "options": [
      "防止任何扩展",
      "允许变量扩展但不允许通配符",
      "没有效果",
      "将内容作为命令执行"
    ],
    "correct": 1,
    "explanation": "双引号允许变量扩展 ($VAR)，但防止通配符（* 和 ?）。"
  },
  {
    "lessonId": "2-1",
    "question": "bash 中的单引号 (')：",
    "options": [
      "他们扩大了变量",
      "他们将一切都视为文字",
      "他们执行命令",
      "他们相当于双打"
    ],
    "correct": 1,
    "explanation": "单引号将所有内容视为文字文本，不进行扩展。"
  },
  {
    "lessonId": "2-1",
    "question": "哪个字符允许单个字符转义？",
    "options": [
      "/",
      "～",
      "\\",
      "！"
    ],
    "correct": 2,
    "explanation": "反斜杠 (\\) 转义下一个字符。"
  },
  {
    "lessonId": "2-1",
    "question": "bash 中的“type”命令显示：",
    "options": [
      "文件类型",
      "如何解释命令",
      "文件系统类型",
      "用户类型"
    ],
    "correct": 1,
    "explanation": "类型显示命令是内置命令、别名命令、函数命令还是外部程序命令。"
  },
  {
    "lessonId": "2-1",
    "question": "哪个命令显示当前用户？",
    "options": [
      "WHO",
      "瓦阿米",
      "ID",
      "用户"
    ],
    "correct": 1,
    "explanation": "whoami 打印当前用户的名称。"
  },
  {
    "lessonId": "2-1",
    "question": "哪个文件定义了用户的默认 shell？",
    "options": [
      "/etc/shell",
      "/etc/密码",
      "/etc/bashrc",
      "/etc/配置文件"
    ],
    "correct": 1,
    "explanation": "/etc/passwd 的最后一个字段指定用户的默认 shell。"
  },
  {
    "lessonId": "2-1",
    "question": "“echo $SHELL”打印什么？",
    "options": [
      "当前的外壳",
      "默认登录 shell",
      "所有外壳均已安装",
      "bash 版本"
    ],
    "correct": 1,
    "explanation": "$SHELL 包含用户默认登录 shell 的路径。"
  },
  {
    "lessonId": "2-1",
    "question": "哪个命令显示有关操作系统的信息？",
    "options": [
      "uname -a",
      "操作系统信息",
      "系统信息",
      "主机信息"
    ],
    "correct": 0,
    "explanation": "uname -a 显示内核、主机名、体系结构和其他系统信息。"
  },
  {
    "lessonId": "2-1",
    "question": "命令替换 $(command) 相当于：",
    "options": [
      "$（命令）",
      "“命令”",
      "`命令`",
      "{命令}"
    ],
    "correct": 2,
    "explanation": "`command` 和 $(command) 反引号对于命令替换是等效的。"
  },
  {
    "lessonId": "2-1",
    "question": "哪个键允许在 bash 中自动完成？",
    "options": [
      "进入",
      "选项卡",
      "Ctrl+C",
      "Esc键"
    ],
    "correct": 1,
    "explanation": "Tab 键允许自动完成命令、文件和目录。"
  },
  {
    "lessonId": "2-2",
    "question": "哪个命令显示 PATH 变量的值？",
    "options": [
      "显示路径",
      "回显$PATH",
      "打印路径",
      "猫路径"
    ],
    "correct": 1,
    "explanation": "echo $PATH 打印 PATH 环境变量的值。"
  },
  {
    "lessonId": "2-2",
    "question": "哪个命令使局部变量可供子进程使用？",
    "options": [
      "分享",
      "出口",
      "放",
      "推"
    ],
    "correct": 1,
    "explanation": "export 使局部变量可用作子进程的环境变量。"
  },
  {
    "lessonId": "2-2",
    "question": "bash 中如何给变量赋值？",
    "options": [
      "名称=“值”",
      "名称=“值”",
      "设置名称=“值”",
      "让 NAME=“值”"
    ],
    "correct": 1,
    "explanation": "在 bash 赋值中，等号周围不能有空格：NAME=“value”。"
  },
  {
    "lessonId": "2-2",
    "question": "HOME 变量包含：",
    "options": [
      "根目录/",
      "用户的主目录",
      "bash 的路径",
      "主机名"
    ],
    "correct": 1,
    "explanation": "$HOME 包含用户个人目录的路径（例如 /home/user）。"
  },
  {
    "lessonId": "2-2",
    "question": "“env”命令显示：",
    "options": [
      "仅局部变量",
      "环境变量",
      "可用命令",
      "系统变量"
    ],
    "correct": 1,
    "explanation": "env 显示所有导出的环境变量。"
  },
  {
    "lessonId": "2-2",
    "question": "启动交互式 bash 会话时会读取哪个文件？",
    "options": [
      "/etc/密码",
      "～/.bashrc",
      "/etc/motd",
      "〜/ .bash_logout"
    ],
    "correct": 1,
    "explanation": "每次打开非登录交互式 bash shell 时都会读取 ~/.bashrc。"
  },
  {
    "lessonId": "2-2",
    "question": "如何删除变量？",
    "options": [
      "删除VAR",
      "删除VAR",
      "未设置VAR",
      "清除VAR"
    ],
    "correct": 2,
    "explanation": "unset VAR 从 shell 环境中删除变量。"
  },
  {
    "lessonId": "2-2",
    "question": "LANG 变量集：",
    "options": [
      "编程语言",
      "系统的语言和本地化",
      "键盘布局",
      "局域网网络"
    ],
    "correct": 1,
    "explanation": "LANG 定义系统的语言和本地化（例如 it_IT.UTF-8）。"
  },
  {
    "lessonId": "2-2",
    "question": "路径包含：",
    "options": [
      "最近的文件",
      "查找命令的目录",
      "密码",
      "网络路径"
    ],
    "correct": 1,
    "explanation": "PATH 是一个以 : 分隔的目录列表，shell 在其中查找可执行文件。"
  },
  {
    "lessonId": "2-2",
    "question": "所有用户登录时都会读取哪个文件？",
    "options": [
      "～/.bashrc",
      "〜/.profile",
      "/etc/配置文件",
      "/etc/bashrc"
    ],
    "correct": 2,
    "explanation": "/etc/profile 是所有用户登录时读取的全局配置文件。"
  },
  {
    "lessonId": "2-2",
    "question": "回声$？展示：",
    "options": [
      "当前PID",
      "最后一个命令的退出代码",
      "当前用户",
      "当前目录"
    ],
    "correct": 1,
    "explanation": "$？包含最后执行的命令的退出代码（0 = 成功）。"
  },
  {
    "lessonId": "2-3",
    "question": "Linux 命令手册显示了哪些命令？",
    "options": [
      "帮助命令",
      "人命令",
      "命令信息",
      "--帮助命令"
    ],
    "correct": 1,
    "explanation": "man（手册）显示命令的完整手册页。"
  },
  {
    "lessonId": "2-3",
    "question": "哪个命令按名称搜索文件系统中的文件？",
    "options": [
      "搜索",
      "grep",
      "寻找",
      "看起来"
    ],
    "correct": 2,
    "explanation": "find 搜索文件系统中的文件和目录。例如：find / -name“file.txt”"
  },
  {
    "lessonId": "2-3",
    "question": "该男子的第 1 节包含：",
    "options": [
      "配置文件",
      "用户命令",
      "系统调用",
      "管理命令"
    ],
    "correct": 1,
    "explanation": "第 1 部分 = 用户命令。 5 = 文件格式。 8 = 管理命令。"
  },
  {
    "lessonId": "2-3",
    "question": "“apropos”命令的作用是：",
    "options": [
      "按关键字搜索手册页",
      "安装包",
      "显示版本",
      "列出用户"
    ],
    "correct": 0,
    "explanation": "apropos 搜索手册页描述。相当于 man -k。"
  },
  {
    "lessonId": "2-3",
    "question": "哪个命令显示可执行文件所在的位置？",
    "options": [
      "寻找",
      "定位",
      "哪个",
      "在哪里"
    ],
    "correct": 2,
    "explanation": "它显示了将要执行的可执行文件的路径（在 PATH 中查找）。"
  },
  {
    "lessonId": "2-3",
    "question": "“locate”比“find”更快，因为：",
    "options": [
      "使用更少的内存",
      "使用预先填充的数据库",
      "它是用C写的",
      "这是一个内置的"
    ],
    "correct": 1,
    "explanation": "locate 搜索由updatedb 更新的数据库，因此速度非常快。"
  },
  {
    "lessonId": "2-3",
    "question": "该男子的第 5 节包含：",
    "options": [
      "用户命令",
      "游戏",
      "文件格式和配置",
      "管理命令"
    ],
    "correct": 2,
    "explanation": "第 5 节记录了文件格式和配置文件。"
  },
  {
    "lessonId": "2-3",
    "question": "find /home -type f -name \"*.txt\" 搜索：",
    "options": [
      ".txt 目录",
      "家中的 .txt 文件",
      "链接.txt",
      "处理txt"
    ],
    "correct": 1,
    "explanation": "-type f = 常规文件，-name \"*.txt\" = 以 .txt 结尾的名称。"
  },
  {
    "lessonId": "2-3",
    "question": "哪个命令选项显示简短帮助？",
    "options": [
      " - 男人",
      " - 信息",
      " - 帮助",
      "--doc"
    ],
    "correct": 2,
    "explanation": "几乎所有命令都支持 --help 以获得简洁的帮助。"
  },
  {
    "lessonId": "2-3",
    "question": "“whatis”命令显示：",
    "options": [
      "文件类型",
      "Breve descrizione del comando",
      "系统版本",
      "Directory corrente"
    ],
    "correct": 1,
    "explanation": "Whatis 显示命令的手册页描述行。"
  },
  {
    "lessonId": "2-4",
    "question": "系统配置文件位于哪个目录？",
    "options": [
      "/垃圾桶",
      "/ETC",
      "/var",
      "/选择"
    ],
    "correct": 1,
    "explanation": "/etc 包含系统配置文件。"
  },
  {
    "lessonId": "2-4",
    "question": "Quale comando crea una directory incluse le directory padre mancanti?",
    "options": [
      "mkdir -f",
      "mkdir -r",
      "mkdir -p",
      "mkdir -a"
    ],
    "correct": 2,
    "explanation": "mkdir -p 创建目录和任何必要的父目录。"
  },
  {
    "lessonId": "2-4",
    "question": "哪个全局模式与任何单个字符匹配？",
    "options": [
      "*",
      "？",
      "[]",
      "#"
    ],
    "correct": 1,
    "explanation": "？完全匹配单个字符。 * 匹配零个或多个字符。"
  },
  {
    "lessonId": "2-4",
    "question": "/var 目录包含：",
    "options": [
      "基本命令",
      "可变数据（日志、假脱机、邮件）",
      "配置",
      "核心"
    ],
    "correct": 1,
    "explanation": "/var 包含操作期间更改的数据：日志、缓存、邮件。"
  },
  {
    "lessonId": "2-4",
    "question": "“ls -a”命令显示：",
    "options": [
      "仅限大文件",
      "甚至隐藏文件（以 . 开头）",
      "文件按日期排序",
      "仅可执行文件"
    ],
    "correct": 1,
    "explanation": "-a（全部）还显示以点 (.) 开头的隐藏文件。"
  },
  {
    "lessonId": "2-4",
    "question": "路径中的“.”（单个句点）表示：",
    "options": [
      "根",
      "当前目录",
      "家",
      "隐藏文件"
    ],
    "correct": 1,
    "explanation": "。代表当前目录。 .. 代表父目录。"
  },
  {
    "lessonId": "2-4",
    "question": "哪个目录包含用户的主目录？",
    "options": [
      "/根",
      "/用户",
      "/家",
      "/usr"
    ],
    "correct": 2,
    "explanation": "/home 包含普通用户的主目录。 /root 是根目录。"
  },
  {
    "lessonId": "2-4",
    "question": "glob [abc] 对应于：",
    "options": [
      "字符串abc",
      "单个字符：a、b 或 c",
      "任意角色",
      "三个字符"
    ],
    "correct": 1,
    "explanation": "[abc] 匹配单个字符 a、b 或 c。"
  },
  {
    "lessonId": "2-4",
    "question": "触摸文件名创建：",
    "options": [
      "一个目录",
      "一个链接",
      "空文件（或更新时间戳）",
      "一个过程"
    ],
    "correct": 2,
    "explanation": "touch 如果文件不存在则创建一个空文件，如果存在则更新时间戳。"
  },
  {
    "lessonId": "2-4",
    "question": "/tmp 用于：",
    "options": [
      "临时文件",
      "系统文件",
      "备份",
      "配置"
    ],
    "correct": 0,
    "explanation": "/tmp 包含可以在重新启动时删除的临时文件。"
  },
  {
    "lessonId": "2-4",
    "question": "cp -r 用于：",
    "options": [
      "仅复制文件",
      "递归复制目录",
      "重命名文件",
      "压缩文件"
    ],
    "correct": 1,
    "explanation": "cp -r 递归复制目录及其所有内容。"
  },
  {
    "lessonId": "2-1",
    "question": "在 bash 中按 Ctrl+C：",
    "options": [
      "关闭外壳",
      "中断当前命令 (SIGINT)",
      "复制文本",
      "删除该行"
    ],
    "correct": 1,
    "explanation": "Ctrl+C 向前台进程发送 SIGINT，将其杀死。"
  },
  {
    "lessonId": "2-1",
    "question": "bash 中的 Ctrl+D 表示：",
    "options": [
      "输入结束 (EOF)",
      "消除",
      "新航站楼",
      "命令完成"
    ],
    "correct": 0,
    "explanation": "Ctrl+D 发送 EOF（文件结束），如果没有输入则关闭 shell。"
  },
  {
    "lessonId": "2-2",
    "question": "PS1 变量控制：",
    "options": [
      "路径",
      "外壳提示符",
      "密码",
      "流程"
    ],
    "correct": 1,
    "explanation": "PS1 定义 shell 提示符的外观（例如 \\u@\\h:\\w$ ）。"
  },
  {
    "lessonId": "2-3",
    "question": "man -k 关键字相当于：",
    "options": [
      "什么是",
      "恰到好处",
      "哪里",
      "哪个"
    ],
    "correct": 1,
    "explanation": "man -k 和 apropos 搜索手册页描述中的关键字。"
  },
  {
    "lessonId": "2-3",
    "question": "该男子的第 8 节包含：",
    "options": [
      "用户命令",
      "系统调用",
      "游戏",
      "行政命令"
    ],
    "correct": 3,
    "explanation": "第 8 节包含系统管理命令（例如 mount、useradd）。"
  },
  {
    "lessonId": "2-4",
    "question": "/usr 包含：",
    "options": [
      "个人用户文件",
      "安装的程序和库",
      "临时文件",
      "系统日志"
    ],
    "correct": 1,
    "explanation": "/usr（Unix 系统资源）包含程序、库和文档。"
  },
  {
    "lessonId": "2-4",
    "question": "/dev 包含：",
    "options": [
      "文档",
      "设备文件",
      "开发工具",
      "固件"
    ],
    "correct": 1,
    "explanation": "/dev 包含代表硬件设备的特殊文件。"
  },
  {
    "lessonId": "2-4",
    "question": "glob [!abc] 对应于：",
    "options": [
      "字符a、b、c",
      "除 a、b、c 之外的任何字符",
      "字符串 !abc",
      "无字符"
    ],
    "correct": 1,
    "explanation": "[!abc] 或 [^abc] 匹配非 a、b 或 c 的单个字符。"
  },
  {
    "lessonId": "2-4",
    "question": "rm -r 用于：",
    "options": [
      "重命名文件",
      "递归删除文件",
      "恢复文件",
      "旋转日志"
    ],
    "correct": 1,
    "explanation": "rm -r 递归删除目录及其内容。"
  },
  {
    "lessonId": "2-4",
    "question": "哪个目录包含共享库？",
    "options": [
      "/垃圾桶",
      "/lib",
      "/ETC",
      "/src"
    ],
    "correct": 1,
    "explanation": "/lib 和 /lib64 包含程序所需的共享库。"
  }
];
