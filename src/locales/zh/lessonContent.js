export const lessonContent = {
  "1-1": {
    "comic": {
      "title": "Linux 的诞生🐧",
      "panels": [
        {
          "emoji": "🏛️",
          "text": "1969 年——革命性的操作系统 Unix 在 AT&T 实验室诞生……"
        },
        {
          "emoji": "👨‍💻",
          "text": "1991 年 — 一位年轻的芬兰学生 Linus Torvalds 开始开发免费内核......"
        },
        {
          "emoji": "🐧",
          "text": "“我正在制作一个免费的操作系统，只是一种爱好……”——这篇文章改变了一切！"
        },
        {
          "emoji": "🌍",
          "text": "如今，Linux 无处不在：服务器、云、智能手机 (Android)、物联网、超级计算机！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "分布系列",
        "items": [
          "Debian → Ubuntu、薄荷",
          "红帽 → RHEL、Fedora、CentOS",
          "SUSE → SLES、openSUSE"
        ]
      },
      {
        "title": "包管理器",
        "items": [
          "Debian：dpkg、apt (.deb)",
          "红帽：rpm、yum、dnf (.rpm)",
          "SUSE：rpm、zypper (.rpm)"
        ]
      },
      {
        "title": "嵌入式系统",
        "items": [
          "Android = 修改后的 Linux 内核",
          "树莓派 + 树莓派",
          "90% 的公共云都采用 Linux"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /etc/os-release",
      "output": "NAME=\"Ubuntu\"\nVERSION=\"22.04 LTS\"\nID=ubuntu\nID_LIKE=debian"
    }
  },
  "1-2": {
    "comic": {
      "title": "开源应用程序的世界📦",
      "panels": [
        {
          "emoji": "📝",
          "text": "LibreOffice：Writer、Calc、Impress — 挑战 Microsoft Office 的免费套件！"
        },
        {
          "emoji": "🌐",
          "text": "Firefox 和 Chromium：免费且功能强大的网络浏览器。"
        },
        {
          "emoji": "🖥️",
          "text": "Apache 和 Nginx：让互联网运行的 Web 服务器！"
        },
        {
          "emoji": "💻",
          "text": "C、Java、Python、Bash：这些语言让 Linux 生机勃勃。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "桌面应用程序",
        "items": [
          "LibreOffice、GIMP、Blender、VLC、Audacity"
        ]
      },
      {
        "title": "应用服务器",
        "items": [
          "Apache、Nginx（网络）",
          "MariaDB、PostgreSQL（数据库）",
          "Samba、NFS（文件共享）"
        ]
      },
      {
        "title": "语言",
        "items": [
          "编译：C、Java",
          "解释：Python、Perl、JavaScript、Bash"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ apt 搜索 libreoffice",
      "output": "libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor"
    }
  },
  "1-3": {
    "comic": {
      "title": "软件的 4 项自由🔓",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "自由 0：将该程序用于任何目的！"
        },
        {
          "emoji": "1️⃣",
          "text": "自由1：研究它是如何运作的并改变它！"
        },
        {
          "emoji": "2️⃣",
          "text": "自由 2：将副本重新分发给其他人！"
        },
        {
          "emoji": "3️⃣",
          "text": "自由 3：分发您的修改版本！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Copyleft 许可证",
        "items": [
          "GPL：衍生代码必须保持 GPL",
          "LGPL：允许专有链接",
          "AGPL：将 GPL 扩展到 SaaS"
        ]
      },
      {
        "title": "许可许可",
        "items": [
          "麻省理工学院：非常简短且宽容",
          "BSD：类似于 MIT",
          "Apache 2.0：专利授予"
        ]
      },
      {
        "title": "商业开源",
        "items": [
          "支持（红帽）",
          "双许可证",
          "SaaS、认证"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ 头 -5 /usr/share/common-licenses/GPL-3",
      "output": "GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation"
    }
  },
  "1-4": {
    "comic": {
      "title": "隐私和数字安全🔒",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "GNOME 还是 KDE？选择您的桌面环境！"
        },
        {
          "emoji": "🍪",
          "text": "请小心第三方 cookie：它们会随时随地跟踪您！"
        },
        {
          "emoji": "🔒",
          "text": "HTTPS = HTTP + TLS。在浏览器中搜索挂锁！"
        },
        {
          "emoji": "🔑",
          "text": "GnuPG：非对称密码学。公钥用于加密，私钥用于解密。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "桌面环境",
        "items": [
          "GNOME (GTK) — 简单",
          "KDE (Qt) — 定制",
          "XFCE、LXDE — 轻量级"
        ]
      },
      {
        "title": "隐私",
        "items": [
          "第三方 cookie = 跟踪",
          "DNT ≠ 隐私保证",
          "私人浏览≠匿名"
        ]
      },
      {
        "title": "密码学",
        "items": [
          "用于连接的 TLS/SSL",
          "用于文件/电子邮件的 GnuPG",
          "磁盘的 dm-crypt/LUKS"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gpg --列表键",
      "output": "pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>"
    }
  },
  "2-1": {
    "comic": {
      "title": "欢迎来到壳牌！ 💻",
      "panels": [
        {
          "emoji": "⌨️",
          "text": "shell 是进入系统的窗口。编写命令，得到结果！"
        },
        {
          "emoji": "🐚",
          "text": "Bash = Bourne Again Shell。 Linux 上最常用的 shell！"
        },
        {
          "emoji": "💲",
          "text": "$提示符表示普通用户。 # 表示根——小心！"
        },
        {
          "emoji": "🔤",
          "text": "引用：“双打”扩展 $variables，“单打”从字面上理解一切。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "外壳类型",
        "items": [
          "bash——默认",
          "zsh — 高级 (macOS)",
          "鱼——用户友好",
          "sh — POSIX 基础"
        ]
      },
      {
        "title": "基本命令",
        "items": [
          "pwd — 当前目录",
          "whoami — 当前用户",
          "主机名——机器名",
          "uname -a — 系统信息"
        ]
      },
      {
        "title": "引用",
        "items": [
          "“双打”→ 扩展 $VAR",
          "“单身”→字面意思",
          "\\反斜杠 → 单转义"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo \"嗨，我是 $(hostname) 上的 $(whoami)\"",
      "output": "Ciao, sono studente su linux-pc"
    }
  },
  "2-2": {
    "comic": {
      "title": "变量：Shell 内存🧠",
      "panels": [
        {
          "emoji": "📦",
          "text": "变量是存储值的容器：NAME=“John”"
        },
        {
          "emoji": "🌐",
          "text": "环境变量是全局的。 PATH 告诉 shell 在哪里寻找命令！"
        },
        {
          "emoji": "📤",
          "text": "export 使子进程可以访问局部变量。"
        },
        {
          "emoji": "🔍",
          "text": "env 显示所有环境变量。 echo $HOME 你的家！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "局部变量",
        "items": [
          "NAME=“值”（没有空格！）",
          "echo $NAME 来读取",
          "取消设置要删除的 NAME"
        ]
      },
      {
        "title": "环境变量",
        "items": [
          "PATH — 命令路径",
          "HOME — 个人目录",
          "USER——用户名",
          "LANG — 系统语言"
        ]
      },
      {
        "title": "坚持",
        "items": [
          "~/.bashrc — 交互式登录",
          "~/.profile — 初始登录",
          "/etc/environment — 全局"
        ]
      }
    ],
    "terminal": {
      "prompt": "$回显$PATH",
      "output": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
  "2-3": {
    "comic": {
      "title": "帮助！人与信息📚",
      "panels": [
        {
          "emoji": "📖",
          "text": "男人是你最好的朋友！ man ls 告诉你有关 ls 的一切。"
        },
        {
          "emoji": "🔢",
          "text": "man 的部分：1=用户命令，5=配置​​文件，8=管理员命令。"
        },
        {
          "emoji": "🔎",
          "text": "apropos 按描述搜索命令：apropos“复制文件”"
        },
        {
          "emoji": "📁",
          "text": "find 在文件系统中搜索文件。定位速度更快，但使用数据库。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "文档",
        "items": [
          "man 命令 — 完整手册",
          "命令信息——GNU 格式",
          "--help 命令 — 简短帮助",
          "apropos 关键字 — 搜索"
        ]
      },
      {
        "title": "章节人",
        "items": [
          "1 — 用户命令",
          "5 — 文件格式",
          "8 — 系统管理命令"
        ]
      },
      {
        "title": "查找文件",
        "items": [
          "查找/-名称“*.txt”",
          "查找 / -type d -name 日志",
          "定位文件名（数据库）",
          "哪个命令（在 PATH 中）"
        ]
      }
    ],
    "terminal": {
      "prompt": "$man -k \"复制文件\"",
      "output": "cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool"
    }
  },
  "2-4": {
    "comic": {
      "title": "文件系统树🌳",
      "panels": [
        {
          "emoji": "/",
          "text": "这一切都是从根/开始的。树是向下生长的！"
        },
        {
          "emoji": "📂",
          "text": "/home — 您的个人物品。 /etc——系统配置。"
        },
        {
          "emoji": "💾",
          "text": "/var — 可变数据（日志、邮件）。 /tmp — 临时文件。"
        },
        {
          "emoji": "⚙️",
          "text": "/bin 和 /sbin — 基本命令。 /usr — 已安装的程序。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "重要目录",
        "items": [
          "/bin — 基本命令",
          "/etc——配置",
          "/home — 用户",
          "/var — 变量数据"
        ]
      },
      {
        "title": "导航",
        "items": [
          "cd /path — 改变方向",
          "ls -la — 详细列表",
          "pwd——他们在哪里",
          "。 （当前）..（父亲）"
        ]
      },
      {
        "title": "文件管理",
        "items": [
          "cp、mv、rm — 复制、移动、删除",
          "mkdir -p — 创建目录",
          "touch — 创建空文件",
          "通配： * ? [ABC]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ls/",
      "output": "bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var"
    }
  },
  "3-1": {
    "comic": {
      "title": "压缩并存档！ 📦",
      "panels": [
        {
          "emoji": "🗜️",
          "text": "tar = 磁带存档。将多个文件分组到一个存档中！"
        },
        {
          "emoji": "💨",
          "text": "gzip → .gz（快速）。 bzip2 → .bz2（压缩更多）。 xz → .xz（压缩效果更好！）"
        },
        {
          "emoji": "📋",
          "text": "tar -czf = 创建 + gzip + 文件。魔法三人组！"
        },
        {
          "emoji": "📂",
          "text": "tar -xzf = 提取 + gzip + 文件。解压缩所有内容！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "算法",
        "items": [
          "gzip (.gz) — 快、好",
          "bzip2 (.bz2) — 更慢，更好",
          "xz (.xz) — 非常慢，非常好"
        ]
      },
      {
        "title": "焦油命令",
        "items": [
          "tar -czf arch.tar.gz 目录/",
          "tar -cjf arch.tar.bz2 目录/",
          "tar -xzf arch.tar.gz",
          "tar -tf arch.tar.gz（列表）"
        ]
      },
      {
        "title": "单个文件",
        "items": [
          "gzip 文件 → 文件.gz",
          "gunzip 文件.gz → 文件",
          "bzip2/bunzip2",
          "xz/unxz"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tar -czf backup.tar.gz /home/user/docs/",
      "output": ""
    }
  },
  "3-2": {
    "comic": {
      "title": "管道和重定向：数据流🔀",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "标准输入 (0) = 输入。标准输出 (1) = 输出。标准错误 (2) = 错误。"
        },
        {
          "emoji": "➡️",
          "text": "> 写入文件（覆盖）。 >> 挂在最后。"
        },
        {
          "emoji": "🔗",
          "text": "| （管道）将一个命令的输出连接到下一个命令的输入！"
        },
        {
          "emoji": "🔇",
          "text": "2>/dev/null — 将错误发送到 Linux“黑洞”！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "文件描述符",
        "items": [
          "0 = 标准输入（键盘）",
          "1 = 标准输出（屏幕）",
          "2 = stderr（错误）"
        ]
      },
      {
        "title": "重定向",
        "items": [
          "> 文件（覆盖）",
          ">> 文件（追加）",
          "2> 错误日志",
          "&> all.log (stdout+stderr)"
        ]
      },
      {
        "title": "管道和命令",
        "items": [
          "cmd1 | cmd2（管道）",
          "tee 文件（T 型分离器）",
          "xargs（标准输入 → 参数）",
          "cmd1 && cmd2（如果可以）"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ 猫 /var/log/syslog | grep 错误 |厕所-l",
      "output": "42"
    }
  },
  "3-3": {
    "comic": {
      "title": "Grep 和文本中的超级英雄 🦸",
      "panels": [
        {
          "emoji": "🔎",
          "text": "grep 搜索文本中的模式。命令行侦探！"
        },
        {
          "emoji": "✂️",
          "text": "cut 剪切列。排序排序。 uniq 删除重复项。"
        },
        {
          "emoji": "📊",
          "text": "wc 计算行数 (-l)、单词数 (-w)、字符数 (-c)。"
        },
        {
          "emoji": "🌟",
          "text": "正则表达式：^ 行首、$ 结束、.任意、* 重复、[abc] 设置。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "grep",
        "items": [
          "grep 模式文件",
          "grep -i（不区分大小写）",
          "grep -r（递归）",
          "grep -v（反向匹配）"
        ]
      },
      {
        "title": "处理",
        "items": [
          "剪切 -d: -f1（字段 1）",
          "排序-n（数字）",
          "uniq -c（计数）",
          "头/尾 -n 5"
        ]
      },
      {
        "title": "基本正则表达式",
        "items": [
          "^ 行首",
          "$ 行尾",
          "。任何字符",
          "* 零个或多个",
          "[a-z] 范围"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep -i \"错误\" /var/log/syslog |尾-5",
      "output": "Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting"
    }
  },
  "3-4": {
    "comic": {
      "title": "Bash 脚本：自动化一切！ 🤖",
      "panels": [
        {
          "emoji": "📜",
          "text": "#!/bin/bash — shebang!它告诉系统：“此脚本使用 bash！”"
        },
        {
          "emoji": "🔄",
          "text": "for、while、if/then/else — 控制流程的结构。"
        },
        {
          "emoji": "📥",
          "text": "$1 = 第一个参数，$# = 数量，$@ = 全部。参数的力量！"
        },
        {
          "emoji": "✅",
          "text": "退出 0 = 成功。退出 1 = 错误。每个命令都有一个退出代码！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "脚本结构",
        "items": [
          "#!/bin/bash (shebang)",
          "chmod +x 脚本.sh",
          "./script.sh 运行"
        ]
      },
      {
        "title": "特殊变量",
        "items": [
          "$0 — 脚本名称",
          "$1, $2... — 参数",
          "$# — 参数数量",
          "$？ — 最后一个 cmd 退出代码"
        ]
      },
      {
        "title": "构造",
        "items": [
          "如果[条件]；然后...fi",
          "对于列表中的 i；做...完成",
          "同时[条件]；做...完成",
          "模式中的情况 $var)...esac"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ 猫你好.sh",
      "output": "#!/bin/bash\necho \"Ciao, $1!\"\necho \"Oggi è $(date)\"\nexit 0"
    }
  },
  "4-1": {
    "comic": {
      "title": "Linux 在哪里运行？到处！ 🌐",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "桌面：Ubuntu、Fedora、Mint — 适合所有人的 Linux！"
        },
        {
          "emoji": "🏢",
          "text": "企业：RHEL、SLES — 支持、认证、SLA！"
        },
        {
          "emoji": "☁️",
          "text": "云：90% 的 Web 服务器运行 Linux。 AWS、Azure、GCP 喜欢它！"
        },
        {
          "emoji": "📱",
          "text": "移动和物联网：Android = Linux！智能电视、汽车、无人机……全是Linux！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "桌面与服务器",
        "items": [
          "桌面：GUI、多媒体",
          "服务器：无头、24/7 服务",
          "企业：LTS 支持"
        ]
      },
      {
        "title": "云与虚拟化",
        "items": [
          "KVM/QEMU — 虚拟化",
          "Docker——容器",
          "Kubernetes——编排",
          "基础设施即服务、平台即服务、软件即服务"
        ]
      },
      {
        "title": "认证证书",
        "items": [
          "LPI Linux 要点",
          "LPIC-1（管理基础）",
          "LPIC-2（高级管理）",
          "RHCSA、RHCE（红帽）"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ uname -a",
      "output": "Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
    }
  },
  "4-2": {
    "comic": {
      "title": "硬件：Linux 下的 Iron ⚙️",
      "panels": [
        {
          "emoji": "🧠",
          "text": "CPU、RAM、磁盘、网卡——Linux 在 /proc 和 /sys 中看到一切！"
        },
        {
          "emoji": "💽",
          "text": "HDD = 机械硬盘，速度慢。 SSD = 闪存，速度快。 NVMe = 超快！"
        },
        {
          "emoji": "🔒",
          "text": "RAID 0 = 速度。 RAID 1 = 安全。 RAID 5 = 平衡。"
        },
        {
          "emoji": "🖨️",
          "text": "热插拔外围设备：USB、Thunderbolt。内核立即识别它们！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "成分",
        "items": [
          "CPU：lscpu",
          "内存：空闲-h",
          "磁盘：lsblk、df -h",
          "PCI: lspci, USB: lsusb"
        ]
      },
      {
        "title": "贮存",
        "items": [
          "HDD——磁性盘片",
          "SSD——NAND闪存",
          "NVMe — 直接 PCIe 总线",
          "RAID——冗余/性能"
        ]
      },
      {
        "title": "RAID 级别",
        "items": [
          "RAID 0 — 条带化（无备份）",
          "RAID 1 — 镜像（副本）",
          "RAID 5 — 条带 + 奇偶校验",
          "RAID 10 — 镜像 + 条带"
        ]
      }
    ],
    "terminal": {
      "prompt": "$lsblk",
      "output": "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /"
    }
  },
  "4-3": {
    "comic": {
      "title": "内核、进程和恶魔 👻",
      "panels": [
        {
          "emoji": "🎯",
          "text": "内核是Linux的心脏。管理 CPU、RAM、I/O、网络。"
        },
        {
          "emoji": "🌱",
          "text": "systemd = PID 1，所有进程的父进程。管理启动！"
        },
        {
          "emoji": "👻",
          "text": "恶魔=后台进程。以“d”结尾：sshd、httpd、crond。"
        },
        {
          "emoji": "💀",
          "text": "杀-9 PID=终极武器！终止任何进程。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "启动和内核",
        "items": [
          "BIOS/UEFI → 引导加载程序",
          "GRUB → 加载内核",
          "内核→挂载根目录",
          "systemd → 启动服务"
        ]
      },
      {
        "title": "流程",
        "items": [
          "ps aux — 进程列表",
          "top/htop — 实时监控",
          "bg/fg — 背景/前景",
          "& — 在后台启动"
        ]
      },
      {
        "title": "信号",
        "items": [
          "SIGTERM (15) — 干净结束",
          "SIGKILL (9) — 强制结束",
          "SIGHUP (1) — 重新加载配置",
          "SIGSTOP (19) — 暂停"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ps 辅助 |头-5",
      "output": "USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox"
    }
  },
  "4-4": {
    "comic": {
      "title": "网络：网络上的 Linux 🌐",
      "panels": [
        {
          "emoji": "📡",
          "text": "IP、子网掩码、网关——您的机器在网络上的坐标！"
        },
        {
          "emoji": "🔤",
          "text": "DNS 将名称转换为 IP。谷歌.com → 142.250.180.14"
        },
        {
          "emoji": "🔐",
          "text": "SSH（端口 22）= 安全远程访问。系统管理员的前门！"
        },
        {
          "emoji": "🌐",
          "text": "HTTP(80)、HTTPS(443)、FTP(21)、SMTP(25) — 运行互联网的端口！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "配置",
        "items": [
          "ip addr — 显示 IP",
          "ip 路由 — 显示路由",
          "/etc/resolv.conf — DNS",
          "/etc/hosts — 本地名称"
        ]
      },
      {
        "title": "私有IP",
        "items": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "IPv6: fc00::/7 (ULA)"
        ]
      },
      {
        "title": "普通门",
        "items": [
          "22 — SSH",
          "80 — HTTP",
          "443 — HTTPS",
          "53 — 域名系统"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ip 地址显示 eth0",
      "output": "inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link"
    }
  },
  "5-1": {
    "comic": {
      "title": "Root：Linux 超级英雄🦸",
      "panels": [
        {
          "emoji": "👑",
          "text": "root = UID 0。可以做任何事情。权力越大，责任越大！"
        },
        {
          "emoji": "🔑",
          "text": "sudo =“超级用户执行”。使用您的密码以 root 身份运行命令。"
        },
        {
          "emoji": "⚠️",
          "text": "永远不要一直以 root 身份工作！仅在需要时使用 sudo。"
        },
        {
          "emoji": "📋",
          "text": "/etc/sudoers 定义谁可以使用 sudo 以及执行哪些命令。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "用户",
        "items": [
          "root = UID 0（超级用户）",
          "普通用户：UID≥1000",
          "系统用户：UID 1-999",
          "无人 = UID 65534"
        ]
      },
      {
        "title": "命令",
        "items": [
          "up - （切换用户）",
          "sudo 命令（以 root 身份运行）",
          "whoami（我是谁？）",
          "id（UID、GID、组）"
        ]
      },
      {
        "title": "安全",
        "items": [
          "最小权限原则",
          "sudo > su（可追踪）",
          "/etc/sudoers (visudo)",
          "日志：/var/log/auth.log"
        ]
      }
    ],
    "terminal": {
      "prompt": "$id",
      "output": "uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)"
    }
  },
  "5-2": {
    "comic": {
      "title": "用户和组：Linux 注册表 👥",
      "panels": [
        {
          "emoji": "📒",
          "text": "/etc/passwd — 所有用户的注册表。名称、UID、家庭、外壳。"
        },
        {
          "emoji": "🔒",
          "text": "/etc/shadow — 加密密码。只有 root 才能读取它！"
        },
        {
          "emoji": "👥",
          "text": "/etc/group — 组。每个用户都有一个主要组，并且可以是其他组的一部分。"
        },
        {
          "emoji": "🛠️",
          "text": "useradd、usermod、userdel — 管理注册表的工具！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "密钥文件",
        "items": [
          "/etc/passwd — 用户信息",
          "/etc/shadow — 哈希密码",
          "/etc/group — 组",
          "/etc/skel — 模板主页"
        ]
      },
      {
        "title": "用户管理",
        "items": [
          "useradd -m 用户（创建）",
          "usermod -aG 用户组",
          "userdel -r 用户（删除）",
          "passwd 用户（密码）"
        ]
      },
      {
        "title": "密码格式",
        "items": [
          "用户:x:UID:GID:信息:主页:shell",
          "x → 影子密码",
          "UID 0 → 根",
          "/sbin/nologin → 不登录"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep 学生 /etc/passwd",
      "output": "studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash"
    }
  },
  "5-3": {
    "comic": {
      "title": "权限：谁可以做什么？ 🔐",
      "panels": [
        {
          "emoji": "📊",
          "text": "r=读(4) w=写(2) x=执行(1)。三组：所有者、组、其他。"
        },
        {
          "emoji": "🔢",
          "text": "chmod 755 = rwxr-xr-x。主人做一切，其他人读书。"
        },
        {
          "emoji": "✏️",
          "text": "chmod u+x = 将执行添加到所有者。符号表示法！"
        },
        {
          "emoji": "⚡",
          "text": "SUID、SGID、Sticky Bit — 特殊情况的特殊权限！"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "基本权限",
        "items": [
          "r（读）= 4",
          "w（写入）= 2",
          "x（执行）= 1",
          "--- = 0，rwx = 7"
        ]
      },
      {
        "title": "命令",
        "items": [
          "chmod 644 文件（八进制）",
          "chmod u+x 文件（符号）",
          "chown 用户:组文件",
          "chgrp 文件组"
        ]
      },
      {
        "title": "特价商品",
        "items": [
          "SUID (4xxx) — 作为所有者运行",
          "SGID (2xxx) — 继承组",
          "粘性 (1xxx) — 保护 /tmp",
          "umask 022 — 默认 755"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ls -la /etc/passwd /tmp",
      "output": "-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp"
    }
  },
  "5-4": {
    "comic": {
      "title": "链接：文件系统中的快捷方式🔗",
      "panels": [
        {
          "emoji": "🔗",
          "text": "硬链接：同一个文件（inode）的两个名称。无法区分！"
        },
        {
          "emoji": "➡️",
          "text": "符号链接：快捷方式。指向路径，而不是索引节点。"
        },
        {
          "emoji": "💔",
          "text": "如果删除符号链接的目标，它就会“损坏”。硬链接仍然存在！"
        },
        {
          "emoji": "📁",
          "text": "符号链接可以遍历文件系统。硬链接则不然。"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "硬链接",
        "items": [
          "ln 文件硬链接",
          "相同的索引节点",
          "它不遍历文件系统",
          "没有目录链接"
        ]
      },
      {
        "title": "符号链接",
        "items": [
          "ln -s 目标符号链接",
          "不同的索引节点",
          "遍历文件系统",
          "可以链接目录"
        ]
      },
      {
        "title": "比较",
        "items": [
          "Hard：坚固，有限",
          "象征：柔韧、脆弱",
          "ls -li 显示索引节点",
          "readlink 显示目标"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ln -s /etc/passwd link_passwd && ls -l link_passwd",
      "output": "lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd"
    }
  }
};
