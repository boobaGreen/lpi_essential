export const dragDropData = [
  {
    "title": "基本命令",
    "pairs": [
      {
        "left": "ls",
        "right": "文件列表"
      },
      {
        "left": "cd",
        "right": "更改目录"
      },
      {
        "left": "pwd",
        "right": "当前目录"
      },
      {
        "left": "cp",
        "right": "复制文件"
      },
      {
        "left": "rm",
        "right": "删除文件"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux目录",
    "pairs": [
      {
        "left": "/etc",
        "right": "系统配置"
      },
      {
        "left": "/home",
        "right": "用户之家"
      },
      {
        "left": "/var",
        "right": "可变数据（日志）"
      },
      {
        "left": "/tmp",
        "right": "临时文件"
      },
      {
        "left": "/boot",
        "right": "内核和引导加载程序"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux 发行版",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "基于Debian"
      },
      {
        "left": "Fedora",
        "right": "RHEL 基础"
      },
      {
        "left": "Arch",
        "right": "滚动发布"
      },
      {
        "left": "CentOS",
        "right": "源自 RHEL"
      },
      {
        "left": "openSUSE",
        "right": "使用 zypper"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "开源应用程序",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "办公套件"
      },
      {
        "left": "Firefox",
        "right": "网络浏览器"
      },
      {
        "left": "GIMP",
        "right": "图片编辑器"
      },
      {
        "left": "Blender",
        "right": "3D建模"
      },
      {
        "left": "Audacity",
        "right": "音频编辑器"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "软件许可证",
    "pairs": [
      {
        "left": "GPL",
        "right": "强版权左"
      },
      {
        "left": "MIT",
        "right": "允许，非常短"
      },
      {
        "left": "Apache 2.0",
        "right": "许可+专利"
      },
      {
        "left": "LGPL",
        "right": "与所有者链接"
      },
      {
        "left": "AGPL",
        "right": "SaaS 的 Copyleft"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "包管理器",
    "pairs": [
      {
        "left": "apt",
        "right": "Debian/Ubuntu"
      },
      {
        "left": "dnf",
        "right": "费多拉/RHEL"
      },
      {
        "left": "pacman",
        "right": "ArchLinux"
      },
      {
        "left": "zypper",
        "right": "开放SUSE"
      },
      {
        "left": "snap",
        "right": "通用包（规范）"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "文件权限（数字）",
    "pairs": [
      {
        "left": "777",
        "right": "适合所有人阅读、写作、表演"
      },
      {
        "left": "755",
        "right": "所有者执行所有操作，其他人读取/执行"
      },
      {
        "left": "644",
        "right": "所有者读/写，其他人读"
      },
      {
        "left": "600",
        "right": "只有所有者才能读取和写入"
      },
      {
        "left": "400",
        "right": "只有所有者可以阅读"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "重击符号",
    "pairs": [
      {
        "left": ">",
        "right": "重定向输出（覆盖）"
      },
      {
        "left": ">>",
        "right": "重定向输出（追加）"
      },
      {
        "left": "|",
        "right": "管道（连接命令）"
      },
      {
        "left": "&",
        "right": "在后台运行"
      },
      {
        "left": "$$",
        "right": "当前shell的PID"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "系统服务",
    "pairs": [
      {
        "left": "systemd",
        "right": "现代初始化系统"
      },
      {
        "left": "sshd",
        "right": "SSH服务器"
      },
      {
        "left": "cron",
        "right": "恶魔策划"
      },
      {
        "left": "cups",
        "right": "打印服务器"
      },
      {
        "left": "rsyslog",
        "right": "系统日志管理"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "创建目录： _____ 目录名",
    "answer": "mkdir",
    "hint": "制作目录",
    "difficulty": 1
  },
  {
    "prompt": "删除文件： _____ 文件名",
    "answer": "rm",
    "hint": "消除",
    "difficulty": 1
  },
  {
    "prompt": "复制文件： _____ 源目标",
    "answer": "cp",
    "hint": "复制",
    "difficulty": 1
  },
  {
    "prompt": "移动文件： _____ 源目标",
    "answer": "mv",
    "hint": "移动",
    "difficulty": 1
  },
  {
    "prompt": "查看当前目录：_____",
    "answer": "pwd",
    "hint": "打印工作目录",
    "difficulty": 1
  },
  {
    "prompt": "创建空文件： _____ 文件名",
    "answer": "touch",
    "hint": "点击/创建",
    "difficulty": 1
  },
  {
    "prompt": "显示内容： _____ 文件名",
    "answer": "cat",
    "hint": "连接",
    "difficulty": 1
  },
  {
    "prompt": "阅读手册：_____ ls",
    "answer": "man",
    "hint": "手动的",
    "difficulty": 1
  },
  {
    "prompt": "打印文本：_____“Hello World”",
    "answer": "echo",
    "hint": "环保/印刷",
    "difficulty": 1
  },
  {
    "prompt": "要列出包含详细信息的文件： _____ -la",
    "answer": "ls",
    "hint": "列表",
    "difficulty": 1
  },
  {
    "prompt": "要查看进程：_____ aux",
    "answer": "ps",
    "hint": "进程状态",
    "difficulty": 2
  },
  {
    "prompt": "更改权限： _____ 755 script.sh",
    "answer": "chmod",
    "hint": "改变模式",
    "difficulty": 2
  },
  {
    "prompt": "要更改所有权：_____ 用户：组文件",
    "answer": "chown",
    "hint": "变更所有者",
    "difficulty": 2
  },
  {
    "prompt": "搜索文本：_____“pattern”file.txt",
    "answer": "grep",
    "hint": "全局正则表达式打印",
    "difficulty": 2
  },
  {
    "prompt": "要提取 tar.gz 存档： tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "提取 gZip 文件",
    "difficulty": 2
  },
  {
    "prompt": "添加用户： _____ -m newuser",
    "answer": "useradd",
    "hint": "用户添加",
    "difficulty": 2
  },
  {
    "prompt": "查看磁盘空间：_____ -h",
    "answer": "df",
    "hint": "无盘",
    "difficulty": 2
  },
  {
    "prompt": "要在文件系统中搜索文件： _____ / -name \"*.log\"",
    "answer": "find",
    "hint": "搜索文件系统",
    "difficulty": 2
  },
  {
    "prompt": "显示第一行： _____ -n 5 file.txt",
    "answer": "head",
    "hint": "头/开始",
    "difficulty": 2
  },
  {
    "prompt": "显示最后几行： _____ -n 5 file.txt",
    "answer": "tail",
    "hint": "尾部/末端",
    "difficulty": 2
  },
  {
    "prompt": "挂载文件系统： _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "山",
    "difficulty": 2
  },
  {
    "prompt": "要测试连接：_____ google.com",
    "answer": "ping",
    "hint": "发送ICMP数据包",
    "difficulty": 2
  },
  {
    "prompt": "要从 URL 下载文件： _____ http://example.com/file",
    "answer": "wget",
    "hint": "网页获取",
    "difficulty": 2
  },
  {
    "prompt": "终止进程： _____ -9 PID",
    "answer": "kill",
    "hint": "结束进程",
    "difficulty": 3
  },
  {
    "prompt": "要跟踪实时日志： tail _____ /var/log/syslog",
    "answer": "-f",
    "hint": "跟随",
    "difficulty": 3
  },
  {
    "prompt": "要创建符号链接：ln _____ 目标链接",
    "answer": "-s",
    "hint": "象征性的",
    "difficulty": 3
  },
  {
    "prompt": "编辑内联文本： _____ -i \"s/old/new/g\" file",
    "answer": "sed",
    "hint": "流编辑器",
    "difficulty": 3
  },
  {
    "prompt": "计算行/字/字节数：_____ -l file.txt",
    "answer": "wc",
    "hint": "字数统计",
    "difficulty": 3
  },
  {
    "prompt": "对行进行排序： _____ -rn data.txt",
    "answer": "sort",
    "hint": "命令",
    "difficulty": 3
  },
  {
    "prompt": "剪切列： _____ -d: -f1 /etc/passwd",
    "answer": "cut",
    "hint": "剪切/提取",
    "difficulty": 3
  },
  {
    "prompt": "同步文件： _____ -avz src/ dest/",
    "answer": "rsync",
    "hint": "远程同步",
    "difficulty": 3
  },
  {
    "prompt": "要提取模式列：_____“{print $1}”文件",
    "answer": "awk",
    "hint": "处理语言",
    "difficulty": 3
  },
  {
    "prompt": "显示打开的文件： _____ -i :80",
    "answer": "lsof",
    "hint": "列出打开的文件",
    "difficulty": 3
  },
  {
    "prompt": "管理 systemd 服务： _____ 重新启动 nginx",
    "answer": "systemctl",
    "hint": "系统控制",
    "difficulty": 3
  },
  {
    "prompt": "编辑 crontab：_____ -e",
    "answer": "crontab",
    "hint": "计划表",
    "difficulty": 3
  },
  {
    "prompt": "查看网络连接： _____ -tuln",
    "answer": "ss",
    "hint": "套接字统计",
    "difficulty": 3
  },
  {
    "prompt": "翻译字符： echo \"hello\" | _____ a-z A-Z",
    "answer": "tr",
    "hint": "翻译",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "文件和目录列表"
  },
  {
    "command": "cd",
    "description": "更改目录"
  },
  {
    "command": "pwd",
    "description": "显示当前目录"
  },
  {
    "command": "cp",
    "description": "复制文件"
  },
  {
    "command": "mv",
    "description": "移动或重命名文件"
  },
  {
    "command": "rm",
    "description": "删除文件"
  },
  {
    "command": "cat",
    "description": "查看文件内容"
  },
  {
    "command": "mkdir",
    "description": "创建目录"
  },
  {
    "command": "touch",
    "description": "创建空文件"
  },
  {
    "command": "echo",
    "description": "将文本打印到标准输出"
  },
  {
    "command": "man",
    "description": "显示手册"
  },
  {
    "command": "sudo",
    "description": "以 root 身份运行"
  },
  {
    "command": "whoami",
    "description": "显示当前用户"
  },
  {
    "command": "exit",
    "description": "关闭外壳"
  },
  {
    "command": "chmod",
    "description": "更改文件权限"
  },
  {
    "command": "grep",
    "description": "搜索文本中的模式"
  },
  {
    "command": "find",
    "description": "在文件系统中搜索文件"
  },
  {
    "command": "tar",
    "description": "归档和压缩文件"
  },
  {
    "command": "chown",
    "description": "更改文件所有者"
  },
  {
    "command": "df",
    "description": "显示可用磁盘空间"
  },
  {
    "command": "du",
    "description": "文件和目录大小"
  },
  {
    "command": "top",
    "description": "监控实时进程"
  },
  {
    "command": "ps",
    "description": "活动进程列表"
  },
  {
    "command": "kill",
    "description": "结束一个进程"
  },
  {
    "command": "ssh",
    "description": "安全的远程连接"
  },
  {
    "command": "scp",
    "description": "通过 SSH 复制文件"
  },
  {
    "command": "ln",
    "description": "创建文件链接"
  },
  {
    "command": "head",
    "description": "文件的第一行"
  },
  {
    "command": "tail",
    "description": "文件的最后几行"
  },
  {
    "command": "wc",
    "description": "计算行数、字数、字节数"
  },
  {
    "command": "sort",
    "description": "对文本行进行排序"
  },
  {
    "command": "mount",
    "description": "挂载文件系统"
  },
  {
    "command": "umount",
    "description": "卸载文件系统"
  },
  {
    "command": "awk",
    "description": "按列处理文本"
  },
  {
    "command": "sed",
    "description": "文本流编辑器"
  },
  {
    "command": "xargs",
    "description": "从 stdin 构造参数"
  },
  {
    "command": "crontab",
    "description": "安排周期性任务"
  },
  {
    "command": "iptables",
    "description": "配置Linux防火墙"
  },
  {
    "command": "rsync",
    "description": "同步远程文件"
  },
  {
    "command": "cut",
    "description": "从文本中提取列"
  },
  {
    "command": "tr",
    "description": "翻译/删除字符"
  },
  {
    "command": "tee",
    "description": "输出到文件和标准输出"
  },
  {
    "command": "useradd",
    "description": "添加用户"
  },
  {
    "command": "passwd",
    "description": "更改用户密码"
  },
  {
    "command": "groupadd",
    "description": "创建一个新组"
  },
  {
    "command": "netstat",
    "description": "网络连接统计"
  },
  {
    "command": "ifconfig",
    "description": "配置网络接口"
  },
  {
    "command": "ping",
    "description": "测试网络连接"
  },
  {
    "command": "wget",
    "description": "从 URL 下载文件"
  },
  {
    "command": "curl",
    "description": "从 URL 传输数据"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "显示当前目录的内容",
    "answer": "ls",
    "hints": [
      "2个字母的命令",
      "以“l”开头"
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "将目录更改为用户的主目录",
    "answer": "cd ~",
    "hints": [
      "使用光盘...",
      "~ 符号代表家"
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "显示当前目录（绝对路径）",
    "answer": "pwd",
    "hints": [
      "打印工作...",
      "3 个字母"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "创建一个名为“project”的目录",
    "answer": "mkdir progetto",
    "hints": [
      "制作目录...",
      "mkdir + 名称"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "显示 /etc/hostname 文件的内容",
    "answer": "cat /etc/hostname",
    "hints": [
      "与CATenate...",
      "通道+路径"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "显示当前用户ID",
    "answer": "id",
    "hints": [
      "一个非常短的命令",
      "2 个字母"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "创建一个名为 test.txt 的空文件",
    "answer": "touch test.txt",
    "hints": [
      "这不是猫...",
      "触摸+名字"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "显示 log.txt 文件的前 10 行",
    "answer": "head log.txt",
    "hints": [
      "与“尾”相反",
      "头+文件"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "显示 ls 命令手册",
    "answer": "man ls",
    "hints": [
      "手动的...",
      "人+命令"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "删除 obsolete.txt 文件",
    "answer": "rm obsoleto.txt",
    "hints": [
      "消除...",
      "rm + 姓名"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "将config.txt文件复制到backup.txt",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "复制...",
      "cp 源 目的地"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "显示命令历史记录",
    "answer": "history",
    "hints": [
      "命令的历史",
      "7 个字母"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "在系统日志文件中查找“错误”一词",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "全局正则表达式...",
      "grep 模式文件"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "使 hello.sh 脚本可执行",
    "answer": "chmod +x hello.sh",
    "hints": [
      "更改模式...",
      "chmod + 一些东西"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "创建 docs/ 文件夹的 tar.gz 存档",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "焦油 -c...",
      "c=创建 z=gzip f=文件"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "以可读格式显示已用磁盘空间",
    "answer": "df -h",
    "hints": [
      "无盘...",
      "df + 标志"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "计算 /etc/passwd 文件中的行数",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "字数统计...",
      "厕所-l"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "实时显示正在运行的进程",
    "answer": "top",
    "hints": [
      "3 个字母",
      "系统监视器"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "通过 SSH 连接到主机 192.168.1.10",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "安全外壳...",
      "ssh + 地址"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "将文件所有者更改为用户“admin”",
    "answer": "chown admin file",
    "hints": [
      "更改所有者...",
      "chown 用户文件"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "显示 /var/log 目录的大小",
    "answer": "du -sh /var/log",
    "hints": [
      "磁盘使用情况...",
      "杜什"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "实时跟踪/var/log/syslog文件",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "尾巴上有一个标志...",
      "f = 跟随"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "在/tmp/中创建/etc/hosts的符号链接",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "带着旗帜...",
      "-s = 象征性的"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "在 PATH 中搜索 ifconfig 命令",
    "answer": "which ifconfig",
    "hints": [
      "哪个 ifconfig...",
      "哪个 + 命令"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "查找 /var 中所有大于 10MB 的 .log 文件",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "查找+-名称+-大小",
      "M = 兆字节"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "按相反的数字顺序对 data.txt 文件进行排序",
    "answer": "sort -rn data.txt",
    "hints": [
      "排序 -r = 反向排序，-n = 数字排序",
      "排序+标记"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "仅显示 /etc/passwd 的第一个字段（用户名）",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "用分隔符剪切：...",
      "剪切-d：-f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "将每日 cron 作业安排在凌晨 3:00",
    "answer": "0 3 * * *",
    "hints": [
      "分钟 小时 日 月 week_day",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "使用 sed 将文件中的“foo”替换为“bar”",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i“s/旧/新/g”",
      "流编辑器"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "显示活动的网络连接",
    "answer": "ss -tuln",
    "hints": [
      "套接字统计...",
      "党卫军+旗帜"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "使用 awk 提取第二个空格分隔列",
    "answer": "awk '{print $2}'",
    "hints": [
      "awk 打印...",
      "$2 = 第二列"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "显示网络路由表",
    "answer": "ip route",
    "hints": [
      "ip ...",
      "路由/路由表"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "显示 PID 1234 的进程打开的文件",
    "answer": "lsof -p 1234",
    "hints": [
      "列出打开的文件...",
      "lsof + 标志"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "使用systemd重启nginx服务",
    "answer": "systemctl restart nginx",
    "hints": [
      "系统控制...",
      "重启+服务名"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "将用户“mario”添加到组“sudo”",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "用户模式...",
      "-aG = 附加组"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "“ls”命令显示当前目录中的文件。",
    "answer": true,
    "explanation": "正确的！ ls（列表）列出文件和目录。",
    "difficulty": 1
  },
  {
    "text": "/etc 包含系统配置文件。",
    "answer": true,
    "explanation": "正确的！ /etc 是配置的标准目录。",
    "difficulty": 1
  },
  {
    "text": "chmod 命令更改文件的所有者。",
    "answer": false,
    "explanation": "chmod 更改权限。 chown 更换所有者。",
    "difficulty": 1
  },
  {
    "text": "Android 使用 Linux 内核。",
    "answer": true,
    "explanation": "正确的！ Android 使用由 Google 修改的 Linux 内核。",
    "difficulty": 1
  },
  {
    "text": "root 的 UID 始终为 0。",
    "answer": true,
    "explanation": "正确的！在所有 Unix/Linux 系统上，root 用户的 UID 始终为 0。",
    "difficulty": 1
  },
  {
    "text": "管道 (|) 将输出写入文件。",
    "answer": false,
    "explanation": "管道将输出传递到下一个管道。 > 写入文件。",
    "difficulty": 1
  },
  {
    "text": "Ubuntu 基于 Debian。",
    "answer": true,
    "explanation": "正确的！ Ubuntu 源自 Debian。",
    "difficulty": 1
  },
  {
    "text": "~ 符号表示 /tmp 目录。",
    "answer": false,
    "explanation": "~ 表示用户的主目录，而不是 /tmp。",
    "difficulty": 1
  },
  {
    "text": "Bash 是大多数 Linux 发行版中的默认 shell。",
    "answer": true,
    "explanation": "正确的！ Bash (Bourne Again Shell) 是默认 shell。",
    "difficulty": 1
  },
  {
    "text": "bash 脚本中的 # 字符表示注释。",
    "answer": true,
    "explanation": "正确的！以 # 开头的行是 bash 中的注释。",
    "difficulty": 1
  },
  {
    "text": "Tab 键自动补全命令和文件名。",
    "answer": true,
    "explanation": "正确的！ Tab 自动完成是一项核心 shell 功能。",
    "difficulty": 1
  },
  {
    "text": "/home 目录包含 root 用户的主目录。",
    "answer": false,
    "explanation": "根目录是/root。 /home 包含普通用户的家。",
    "difficulty": 1
  },
  {
    "text": "GPL 许可证允许您将衍生代码设为专有。",
    "answer": false,
    "explanation": "GPL（copyleft）强制衍生品保持相同的许可证。",
    "difficulty": 2
  },
  {
    "text": "MIT 许可证是一种宽松的许可证。",
    "answer": true,
    "explanation": "麻省理工学院非常宽松：它几乎允许任何用途。",
    "difficulty": 2
  },
  {
    "text": "SSH 默认使用端口 443。",
    "answer": false,
    "explanation": "SSH 使用端口 22。端口 443 用于 HTTPS。",
    "difficulty": 2
  },
  {
    "text": "shebang #!/bin/bash 必须位于脚本的第一行。",
    "answer": true,
    "explanation": "正确的！ shebang 告诉系统使用哪个解释器。",
    "difficulty": 2
  },
  {
    "text": "RAID 1 创建数据的镜像副本。",
    "answer": true,
    "explanation": "正确的！ RAID 1 在两个磁盘上复制数据。",
    "difficulty": 2
  },
  {
    "text": "DNS 将域名转换为 IP 地址。",
    "answer": true,
    "explanation": "正确的！ DNS 将名称解析为 IP。",
    "difficulty": 2
  },
  {
    "text": "“查找”命令搜索文件中的文本。",
    "answer": false,
    "explanation": "find 在文件系统中搜索文件。 grep 搜索文件内的文本。",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow 可供所有用户读取。",
    "answer": false,
    "explanation": "/etc/shadow 只能由 root 读取。包含散列密码。",
    "difficulty": 2
  },
  {
    "text": "“export”命令使变量可供子进程使用。",
    "answer": true,
    "explanation": "正确的！ export 将变量导出为环境变量。",
    "difficulty": 2
  },
  {
    "text": "/etc/passwd 文件包含明文形式的用户密码。",
    "answer": false,
    "explanation": "/etc/passwd 不再包含真实密码。它们以散列形式存在于 /etc/shadow 中。",
    "difficulty": 2
  },
  {
    "text": "glob * 也对应于隐藏文件（以点开头）。",
    "answer": false,
    "explanation": "glob * 不包括以点开头的文件。您需要像 dotglob 这样的选项。",
    "difficulty": 2
  },
  {
    "text": "NFS 是一种用于在 Unix/Linux 系统之间共享文件的协议。",
    "answer": true,
    "explanation": "正确的！ NFS（网络文件系统）通过网络在 Unix 系统之间共享文件。",
    "difficulty": 2
  },
  {
    "text": "“cat”命令可以连接多个文件。",
    "answer": true,
    "explanation": "正确的！ cat（连接）连接多个文件的内容：cat file1 file2。",
    "difficulty": 2
  },
  {
    "text": "apt 是 Fedora 使用的包管理器。",
    "answer": false,
    "explanation": "Fedora 使用 dnf（或 yum）。 apt 适用于 Debian/Ubuntu。",
    "difficulty": 2
  },
  {
    "text": "Linux是一个完整的操作系统。",
    "answer": false,
    "explanation": "Linux只是内核。 GNU/Linux 是完整的操作系统。",
    "difficulty": 3
  },
  {
    "text": "硬链接可以指向目录。",
    "answer": false,
    "explanation": "硬链接不能指向目录（以避免循环）。",
    "difficulty": 3
  },
  {
    "text": "tar -czf 命令提取存档。",
    "answer": false,
    "explanation": "-czf 创建 gzip 存档。要提取使用-xzf。",
    "difficulty": 3
  },
  {
    "text": "Bash 脚本中的 $1 表示第一个参数。",
    "answer": true,
    "explanation": "正确的！ $1 = 第一个参数，$2 = 第二个参数，依此类推。",
    "difficulty": 3
  },
  {
    "text": "符号链接在目标删除后仍然存在。",
    "answer": false,
    "explanation": "如果删除目标，符号链接就会“损坏”。",
    "difficulty": 3
  },
  {
    "text": "SIGKILL(9)可以被进程拦截。",
    "answer": false,
    "explanation": "SIGKILL 无法被拦截。立即结束。",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 是一个私有 IP 范围。",
    "answer": true,
    "explanation": "正确的！它是 RFC 1918 定义的三个私有范围之一。",
    "difficulty": 3
  },
  {
    "text": "ext4 文件系统支持日志。",
    "answer": true,
    "explanation": "正确的！ ext4 是一个日志文件系统。",
    "difficulty": 3
  },
  {
    "text": "“nice”命令更改进程的优先级。",
    "answer": true,
    "explanation": "正确的！ Nice 设置调度优先级。",
    "difficulty": 3
  },
  {
    "text": "TCP 是一种无连接协议。",
    "answer": false,
    "explanation": "TCP 是面向连接的。 UDP 是无连接的。",
    "difficulty": 3
  },
  {
    "text": "“crontab -e”命令修改用户的计划作业。",
    "answer": true,
    "explanation": "正确的！ crontab -e 打开用户的 cron 作业编辑器。",
    "difficulty": 3
  },
  {
    "text": "处于僵尸状态的进程正在使用大量 CPU。",
    "answer": false,
    "explanation": "僵尸进程已终止，但父进程尚未读取其退出状态。它不使用任何资源。",
    "difficulty": 3
  },
  {
    "text": "/dev/null 丢弃发送给它的所有内容。",
    "answer": true,
    "explanation": "正确的！ /dev/null 是 Linux 的“黑洞”：它会丢弃任何数据。",
    "difficulty": 3
  },
  {
    "text": "/etc/fstab 文件定义了启动时自动挂载的文件系统。",
    "answer": true,
    "explanation": "正确的！ fstab（文件系统表）包含自动挂载信息。",
    "difficulty": 3
  },
  {
    "text": "“df”命令显示单个文件的大小。",
    "answer": false,
    "explanation": "df 显示文件系统的磁盘空间。对于文件大小，请使用 du 或 ls -l。",
    "difficulty": 3
  },
  {
    "text": "systemd 是大多数现代发行版使用的 init 系统。",
    "answer": true,
    "explanation": "正确的！ systemd 已在大多数发行版中取代了 SysVinit。",
    "difficulty": 3
  },
  {
    "text": "~/.bash_history 文件包含用户键入的命令。",
    "answer": true,
    "explanation": "正确的！ bash 命令的历史记录保存在 ~/.bash_history 中。",
    "difficulty": 3
  },
  {
    "text": "“grep -r”命令递归搜索目录。",
    "answer": true,
    "explanation": "正确的！ grep -r（或 -R）在目录和子目录中的所有文件中搜索模式。",
    "difficulty": 3
  },
  {
    "text": "粘滞位可防止用户删除共享目录中其他人的文件。",
    "answer": true,
    "explanation": "正确的！ /tmp 上的粘滞位 (t) 可防止用户删除其他人的文件。",
    "difficulty": 3
  }
];