export const topic2Extended = {
  "2-1": {
    "title": "命令行基础知识",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🐚",
        "text": "什么是壳牌？"
      },
      {
        "type": "paragraph",
        "text": "shell是解释用户命令并将其传递给内核执行的程序。它是您和操作系统之间的文本界面。每次打开终端时，您都会启动一个 shell。"
      },
      {
        "type": "table",
        "headers": [
          "壳",
          "文件",
          "特征",
          "分配"
        ],
        "rows": [
          [
            "重击",
            "/bin/bash",
            "最流行、功能强大的脚本、Tab 补全",
            "几乎所有的人"
          ],
          [
            "兹什",
            "/bin/zsh",
            "高级、插件（Oh My Zsh）、可定制主题",
            "macOS 默认"
          ],
          [
            "鱼",
            "/usr/bin/鱼",
            "用户友好、语法突出显示、自动建议",
            "现代替代品"
          ],
          [
            "短跑",
            "/bin/破折号",
            "POSIX 最小，快速启动，Debian 用于 /bin/sh",
            "Debian/Ubuntu"
          ],
          [
            "嘘",
            "/bin/sh",
            "原装POSIX shell，最大兼容性",
            "所有 Unix 系统"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试询问大多数发行版上的默认 shell 是什么：它是 Bash (Bourne Again Shell)。另请记住，$SHELL 显示登录 shell，不一定是正在使用的 shell。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💲",
        "text": "提示及其符号"
      },
      {
        "type": "paragraph",
        "text": "提示符是终端准备好接收命令时显示的行。包含有用的信息。"
      },
      {
        "type": "code",
        "title": "提示的剖析",
        "prompt": "用户@主机名:~/文档$\n│ │ │ │\n│ │ │ └── $ = 普通用户 (# = root)\n│ │ └── 当前目录 (~ = home)\n│ └── 机器名称\n└── 用户名",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "$ 与 #",
        "content": "$符号表示普通用户。 # 符号表示 root 用户。如果您在提示中看到#，则表明您正在以完全权限进行操作 - 请小心！"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "引用：引号和转义符"
      },
      {
        "type": "paragraph",
        "text": "引号控制 shell 如何解释特殊字符。它是 LPI 考试中测试最多的概念之一。"
      },
      {
        "type": "table",
        "headers": [
          "类型",
          "句法",
          "展开$VAR？",
          "扩张 *？",
          "例子"
        ],
        "rows": [
          [
            "双引号",
            "“文本”",
            "✅ 是的",
            "❌ 没有",
            "“嗨 $USER” → 嗨马里奥"
          ],
          [
            "单引号",
            "'文本'",
            "❌ 没有",
            "❌ 没有",
            "'你好$USER' → 你好$USER"
          ],
          [
            "反斜杠",
            "\\特点",
            "单人逃脱",
            "单人逃脱",
            "回显 \\$HOME → $HOME"
          ],
          [
            "没有人",
            "文本",
            "✅ 是的",
            "✅ 是的",
            "echo * → 列出所有文件"
          ]
        ]
      },
      {
        "type": "code",
        "title": "引用的实际例子",
        "prompt": "$ echo \"我的家是$HOME\"\n我的家是/home/student\n\n$ echo '我的家是$HOME'\n我的家是$HOME\n\n$ echo \"有 $(ls | wc -l) 个文件\"\n有42个文件",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⌨️",
        "text": "基本键盘快捷键"
      },
      {
        "type": "table",
        "headers": [
          "捷径",
          "行动",
          "何时使用它"
        ],
        "rows": [
          [
            "选项卡",
            "自动完成",
            "完整的命令和文件路径"
          ],
          [
            "选项卡 选项卡",
            "显示所有选项",
            "当有更多的可能性时"
          ],
          [
            "Ctrl+C",
            "停止命令（SIGINT）",
            "停止被阻止的进程"
          ],
          [
            "Ctrl+D",
            "文件结束 (EOF)",
            "关闭 shell 或输入"
          ],
          [
            "Ctrl+L",
            "清洁屏幕",
            "相当于清除"
          ],
          [
            "Ctrl+R",
            "搜索历史",
            "查找以前的命令"
          ],
          [
            "↑ / ↓",
            "浏览历史记录",
            "重复最近的命令"
          ],
          [
            "Ctrl+A / Ctrl+E",
            "行开始/结束",
            "快速执行命令"
          ]
        ]
      }
    ]
  },
  "2-2": {
    "title": "变量和环境",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "局部变量与环境变量"
      },
      {
        "type": "paragraph",
        "text": "bash 中有两种类型的变量。局部变量仅存在于当前 shell 中。环境变量被导出并可供所有子进程使用。"
      },
      {
        "type": "comparison",
        "left": {
          "title": "局部变量",
          "items": [
            "NAME=“值”（= 周围没有空格）",
            "仅在当前 shell 中可见",
            "不从子进程继承",
            "未设置 NAME 的街道"
          ]
        },
        "right": {
          "title": "环境变量",
          "items": [
            "导出名称=“值”",
            "对所有子进程可见",
            "自动继承",
            "可通过 env 查看"
          ]
        }
      },
      {
        "type": "code",
        "title": "局部变量与环境变量",
        "prompt": "$ LOCALE=\"only here\" # 局部变量\n$ export GLOBAL=\"everywhere\" # 环境变量\n$回显$LOCAL $GLOBAL\n只有这里到处都有\n\n$ bash -c 'echo $LOCAL $GLOBAL' # 新的子 shell\n到处\n#LOCALE 在子 shell 中不可见！",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "注意空间！",
        "content": "在 bash 中，等号周围有空格的 NAME=\"value\" 不起作用！ Bash 会将 NAME 解释为命令。正确的语法是 NAME=“value”，不带空格。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛤️",
        "text": "路径变量"
      },
      {
        "type": "paragraph",
        "text": "PATH 是 Linux 中最重要的变量。包含当您键入命令时 shell 查找可执行文件的目录列表。目录由 :（冒号）分隔。"
      },
      {
        "type": "code",
        "title": "路径如何工作",
        "prompt": "$回显$PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# 当您输入“ls”时，shell 按顺序搜索：\n# 1. /usr/local/sbin/ls （未找到）\n# 2. /usr/local/bin/ls (未找到)\n＃3。 /usr/sbin/ls（未找到）\n# 4. /usr/bin/ls ← 找到了！它就是这样做的。\n\n# 将目录添加到 PATH:\n$ 导出 PATH=\"$PATH:/opt/myprogram/bin\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌍",
        "text": "重要的环境变量"
      },
      {
        "type": "table",
        "headers": [
          "多变的",
          "内容",
          "例子"
        ],
        "rows": [
          [
            "$HOME",
            "用户的主目录",
            "/家/学生"
          ],
          [
            "$用户",
            "当前用户名",
            "学生"
          ],
          [
            "$壳牌",
            "登录外壳",
            "/bin/bash"
          ],
          [
            "$路径",
            "可执行文件的目录",
            "/usr/bin:/bin:..."
          ],
          [
            "$LANG",
            "语言和本地化",
            "it_IT.UTF-8"
          ],
          [
            "$PWD",
            "当前目录",
            "/home/学生/文档"
          ],
          [
            "$主机名",
            "机器名称",
            "linux-pc"
          ],
          [
            "$PS1",
            "提示格式",
            "\\u@\\h:\\w\\$"
          ],
          [
            "$？",
            "退出代码最后一个命令",
            "0（成功）"
          ],
          [
            "$$",
            "当前shell的PID",
            "1234"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📄",
        "text": "外壳配置文件"
      },
      {
        "type": "paragraph",
        "text": "Bash 根据启动方式读取不同的配置文件："
      },
      {
        "type": "table",
        "headers": [
          "文件",
          "当它被读取时",
          "范围",
          "典型用途"
        ],
        "rows": [
          [
            "/etc/配置文件",
            "Shell 登录（所有用户）",
            "全球的",
            "全局环境变量"
          ],
          [
            "〜/ .bash_profile",
            "外壳登录",
            "用户",
            "设置登录（调用.bashrc）"
          ],
          [
            "〜/.profile",
            "Shell 登录（如果 .bash_profile 不存在）",
            "用户",
            ".bash_profile 的替代品"
          ],
          [
            "～/.bashrc",
            "非登录交互式 shell",
            "用户",
            "别名、提示、函数"
          ],
          [
            "/etc/bash.bashrc",
            "交互式 shell（全部）",
            "全球的",
            "全局 bash 配置"
          ],
          [
            "〜/ .bash_logout",
            "退出",
            "用户",
            "清理、退出消息"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试询问登录时读取哪些文件与交互式 shell 时读取哪些文件。请记住：登录 → /etc/profile + ~/.bash_profile。交互式 → ~/.bashrc。"
      }
    ]
  },
  "2-3": {
    "title": "获取帮助",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📖",
        "text": "手册页"
      },
      {
        "type": "paragraph",
        "text": "man命令是Linux的内置文档系统。每个命令、配置文件和系统调用都有（或应该有）一个手册页。"
      },
      {
        "type": "table",
        "headers": [
          "部分",
          "内容",
          "例子"
        ],
        "rows": [
          [
            "1",
            "用户命令",
            "男人 1 ls"
          ],
          [
            "2",
            "系统调用（内核）",
            "人2开"
          ],
          [
            "3",
            "C 库函数",
            "人 3 printf"
          ],
          [
            "4",
            "特殊文件 (/dev)",
            "男人 4 空"
          ],
          [
            "5",
            "文件格式和配置",
            "人5密码"
          ],
          [
            "6",
            "游戏",
            "男人6财富"
          ],
          [
            "7",
            "各种各样的",
            "人 7 ip"
          ],
          [
            "8",
            "管理命令",
            "男子8号坐骑"
          ]
        ]
      },
      {
        "type": "code",
        "title": "获取帮助的命令",
        "prompt": "$ man ls # 完整的 ls 手册\n$ man -k \"copy file\" # 按关键字搜索 (= apropos)\n$ man 5 passwd # 第 5 部分：文件格式\n$whatis ls # 简短描述\n$ info coreutils # 详细的 GNU 文档\n$ ls --help # 命令内置帮助",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "导航到人的内心",
        "content": "手册页内：Space = 前进，b = 后退，/text = 搜索，q = 退出。 Man 使用“less”程序作为寻呼机。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔍",
        "text": "搜索系统中的文件"
      },
      {
        "type": "comparison",
        "left": {
          "title": "查找（实时）",
          "items": [
            "实时搜索文件系统",
            "在大型文件系统上速度缓慢",
            "强大：按名称、类型、大小、日期、权限搜索",
            "始终保持最新状态"
          ]
        },
        "right": {
          "title": "定位（数据库）",
          "items": [
            "搜索预先索引的数据库",
            "非常快",
            "有限：仅按名称搜索",
            "使用updatedb更新数据库（通常每天）"
          ]
        }
      },
      {
        "type": "code",
        "title": "文件搜索示例",
        "prompt": "$ find /home -name \"*.txt\" # /home 中的 .txt 文件\n$ find / -type d -name \"config\" # 名为 config 的目录\n$ find /var -size +10M # 大于10MB的文件\n$ 查找 . -mtime -7 # 最近7天修改过\n$ 查找 . -perm 755 #拥有755个权限\n\n$locate passwd # 搜索数据库\n$ which python # 它在 PATH 中的什么位置\n$ whereis ls # 二进制文件、源代码和 man",
        "output": ""
      }
    ]
  },
  "2-4": {
    "title": "导航和文件管理",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌳",
        "text": "FHS：文件系统层次结构标准"
      },
      {
        "type": "paragraph",
        "text": "FHS 定义了标准的 Linux 目录结构。所有发行版都遵循这些约定，从而可以预测在哪里可以找到每种类型的文件。"
      },
      {
        "type": "table",
        "headers": [
          "目录",
          "内容",
          "例子"
        ],
        "rows": [
          [
            "/",
            "Root — 整个文件系统的根",
            "一切从这里开始"
          ],
          [
            "/垃圾桶",
            "所有用户的基本命令",
            "ls、cp、mv、猫、bash"
          ],
          [
            "/sbin",
            "管理员的系统命令",
            "挂载、fdisk、iptables"
          ],
          [
            "/ETC",
            "系统配置文件",
            "密码、fstab、nginx.conf"
          ],
          [
            "/家",
            "用户的个人目录",
            "/home/马里奥，/home/学生"
          ],
          [
            "/根",
            "root用户的主页",
            "为了安全起见与 /home 分开"
          ],
          [
            "/var",
            "可变数据（日志、假脱机、缓存）",
            "/var/log/系统日志，/var/www"
          ],
          [
            "/tmp",
            "临时文件（重新启动时删除）",
            "会话文件、临时下载"
          ],
          [
            "/usr",
            "安装的程序和库",
            "/usr/bin、/usr/lib、/usr/share"
          ],
          [
            "/选择",
            "可选/第三方软件",
            "浏览器、IDE、自定义应用程序"
          ],
          [
            "/dev",
            "设备文件",
            "/dev/sda（磁盘）、/dev/null"
          ],
          [
            "/进程",
            "虚拟文件系统——内核/进程信息",
            "/proc/cpuinfo、/proc/meminfo"
          ],
          [
            "/系统",
            "虚拟文件系统——硬件信息",
            "设备和驱动程序信息"
          ],
          [
            "/启动",
            "内核和引导加载程序",
            "vmlinuz、initramfs、grub"
          ],
          [
            "/lib",
            "基本共享库",
            "libc.so、libpthread.so"
          ],
          [
            "/ mnt，/媒体",
            "设备的安装点",
            "USB、CD-ROM、外部磁盘"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧭",
        "text": "绝对路径与相对路径"
      },
      {
        "type": "comparison",
        "left": {
          "title": "绝对路径",
          "items": [
            "始终以 / 开头",
            "唯一标识一个文件",
            "与您当前的位置无关",
            "示例：/home/mario/documenti/file.txt"
          ]
        },
        "right": {
          "title": "相对路径",
          "items": [
            "不以 / 开头",
            "相对于当前目录（pwd）",
            "美国。 （现任）和..（父亲）",
            "示例：../documents/file.txt"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔠",
        "text": "通配符——模式匹配"
      },
      {
        "type": "paragraph",
        "text": "通配允许您使用特殊模式选择文件。 shell 在将模式传递给命令之前对其进行扩展。"
      },
      {
        "type": "table",
        "headers": [
          "图案",
          "意义",
          "例子",
          "结果"
        ],
        "rows": [
          [
            "*",
            "零个或多个任意字符",
            "ls *.txt",
            "文件.txt、报告.txt"
          ],
          [
            "？",
            "恰好一个字符",
            "ls 文件？.txt",
            "文件1.txt、文件A.txt"
          ],
          [
            "[ABC]",
            "a、b 或 c 之一",
            "ls 文件[123].txt",
            "文件1.txt、文件2.txt"
          ],
          [
            "[a-z]",
            "范围内的字符",
            "ls [a-c]*.txt",
            "abc.txt、beta.txt"
          ],
          [
            "[!abc]",
            "除 a、b、c 之外的任意值",
            "ls [!0-9]*",
            "file.txt（不是 1file）"
          ]
        ]
      },
      {
        "type": "code",
        "title": "管理文件的基本命令",
        "prompt": "$ mkdir -p project/src/main # 使用所有父目录创建\n$ cp -r src/ backup/ # 递归复制\n$ mv old.txt new.txt # 重命名（或移动）\n$ rm -rf obsolete_directory/ # 递归删除（警告！）\n$ touch new.txt # 创建空文件或更新时间戳\n$ ls -la # 隐藏文件的详细列表",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "rm -rf 很危险！",
        "content": "命令 rm -rf 会递归删除所有内容，而不要求确认。像“rm -rf /”这样的错误可能会破坏整个系统。使用时务必极其小心！"
      }
    ]
  }
};
