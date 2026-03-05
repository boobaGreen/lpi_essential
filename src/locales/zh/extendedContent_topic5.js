export const topic5Extended = {
  "5-1": {
    "title": "安全和用户类型",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "👑",
        "text": "root 用户——超级用户"
      },
      {
        "type": "paragraph",
        "text": "root 用户 (UID 0) 对系统具有不受限制的访问权限。它可以读取、写入和删除任何文件，终止任何进程，更改任何配置。因此，默认情况下您不应该以 root 身份工作。"
      },
      {
        "type": "table",
        "headers": [
          "用户类型",
          "用户识别码",
          "范围",
          "登录？"
        ],
        "rows": [
          [
            "根",
            "0",
            "完整的系统管理",
            "仅在必要时"
          ],
          [
            "普通用户",
            "≥1000",
            "拥有个人帐户的人类用户",
            "是的，有自己的外壳"
          ],
          [
            "系统用户",
            "1-999",
            "服务和守护进程（www-data、mysql）",
            "否（/sbin/nologin）"
          ],
          [
            "没有人",
            "65534",
            "最小权限进程",
            "不"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "su 与 sudo — 两种安全方法"
      },
      {
        "type": "comparison",
        "left": {
          "title": "打开（切换用户）",
          "items": [
            "彻底更改用户",
            "需要ROOT密码",
            "su - = 完全登录（root环境）",
            "没有详细的命令日志",
            "安全性较低：您必须共享 root 密码"
          ]
        },
        "right": {
          "title": "sudo（超级用户 DO）",
          "items": [
            "以 root 身份运行一个命令",
            "需要您的密码",
            "每个命令都会被记录",
            "精细控制（谁可以做什么）",
            "更安全：没有人知道 root 密码"
          ]
        }
      },
      {
        "type": "code",
        "title": "su 与 sudo 基本上",
        "prompt": "# su: 成为 root (要求输入 ROOT 密码)\n$ 上涨 -\n密码：[root密码]\n# 哇阿米\n根\n\n# sudo：以 root 身份运行命令（询问您的密码）\n$ sudo apt 更新\n[sudo] 马里奥的密码：[马里奥的密码]\n\n# 查看谁可以使用 sudo\n$ sudo -l # 你的权限\n$ cat /etc/sudoers # 配置文件（使用 visudo！）",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "始终使用 visudo！",
        "content": "/etc/sudoers 只能使用 visudo 命令进行编辑，该命令在保存之前检查语法。 sudoers 中的错误可能会阻止对系统的访问！"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛡️",
        "text": "最小特权原则"
      },
      {
        "type": "paragraph",
        "text": "最小权限原则是安全的黄金法则：每个用户和进程必须仅拥有执行其任务所必需的权限。而已。"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Non lavorare come root",
            "desc": "Usa sudo solo quando serve, poi torna al tuo utente"
          },
          {
            "term": "Servizi dedicati",
            "desc": "Ogni servizio gira con il proprio utente (www-data, mysql)"
          },
          {
            "term": "sudo granulare",
            "desc": "In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo"
          },
          {
            "term": "Audit trail",
            "desc": "sudo logga tutto in /var/log/auth.log — tracciabilità completa"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试询问 su 和 sudo 之间的区别、最小权限原则以及身份验证日志所在的位置（/var/log/auth.log 或 /var/log/secure）。"
      }
    ]
  },
  "5-2": {
    "title": "用户和组管理",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📒",
        "text": "Linux 注册表文件"
      },
      {
        "type": "table",
        "headers": [
          "文件",
          "所有者",
          "权限",
          "内容"
        ],
        "rows": [
          [
            "/etc/密码",
            "根",
            "644（所有人可读）",
            "用户信息：名称、UID、GID、家庭、shell"
          ],
          [
            "/etc/影子",
            "根",
            "640（仅限根）",
            "加密密码和策略"
          ],
          [
            "/etc/组",
            "根",
            "第644章",
            "其他团体和成员"
          ],
          [
            "/etc/gshadow",
            "根",
            "640",
            "组密码（罕见）"
          ],
          [
            "/etc/skel",
            "根",
            "第755章",
            "新主目录的模板"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "/etc/passwd 的格式"
      },
      {
        "type": "code",
        "title": "/etc/passwd 行剖析",
        "prompt": "马里奥:x:1000:1000:马里奥·罗西:/home/mario:/bin/bash\n  │ │ │ │ │ │ │\n  │ │ │ │ │ │ └── 登录 shell\n  │ │ │ │ │ └── 主目录\n  │ │ │ │ └──GECOS字段（用户信息）\n  │ │ │ └── GID（主要组ID）\n  │ │ └── UID（用户ID）\n  │ └── \"x\" = /etc/shadow 中的密码\n  └── 用户名",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "为什么密码中包含“x”？",
        "content": "过去，密码位于 /etc/passwd 中（每个人都可读！）。为了安全起见，它们已移至 /etc/shadow（只能由 root 读取）。 “x”表示密码位于影子文件中。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "管理用户和组的命令"
      },
      {
        "type": "table",
        "headers": [
          "命令",
          "功能",
          "重要选项"
        ],
        "rows": [
          [
            "useradd -m 用户",
            "创建具有 home 的用户",
            "-m 创建主目录、-s shell、-G 组"
          ],
          [
            "usermod -aG grp 用户",
            "编辑用户",
            "-aG 附加组、-L 锁定、-U 解锁"
          ],
          [
            "userdel -r 用户",
            "删除用户+主页",
            "-r 还删除主目录"
          ],
          [
            "密码用户",
            "更改密码",
            "-l 锁定、-u 解锁、-e 强制更改"
          ],
          [
            "群组名称",
            "创建群组",
            "-g 特定GID"
          ],
          [
            "名称组",
            "删除群组",
            "仅当没有用户将其作为主要时"
          ],
          [
            "组用户",
            "显示用户组",
            "会员团体名单"
          ],
          [
            "用户身份",
            "显示 UID/GID/组",
            "完整的用户信息"
          ]
        ]
      },
      {
        "type": "code",
        "title": "工作流程：创建完整的用户",
        "prompt": "#1.创建具有主目录的用户\n$ sudo useradd -m -s /bin/bash -c“马里奥·罗西”马里奥\n\n#2.设置您的密码\n$ sudo 密码马里奥\n\n＃3。添加到其他组\n$ sudo usermod -aG sudo,docker mario\n\n＃4。检查\n$ 马里奥 ID\nuid=1001(马里奥) gid=1001(马里奥) 组=1001(马里奥),27(sudo),999(docker)\n\n$ ls -la /home/马里奥/\n# 包含从 /etc/skel/ 复制的文件",
        "output": ""
      }
    ]
  },
  "5-3": {
    "title": "文件权限",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Unix 权限系统"
      },
      {
        "type": "paragraph",
        "text": "Linux中的每个文件和目录都有三组权限（所有者、组、其他）和三种类型的权限（读、写、执行）。这将创建一个包含 9 个权限的数组。"
      },
      {
        "type": "table",
        "headers": [
          "允许",
          "存档中",
          "在目录上",
          "八进制值"
        ],
        "rows": [
          [
            "r（读）",
            "阅读内容",
            "列出文件 (ls)",
            "4"
          ],
          [
            "w（写）",
            "编辑内容",
            "创建/删除文件",
            "2"
          ],
          [
            "x（执行）",
            "按计划运行",
            "输入（cd）目录",
            "1"
          ],
          [
            "-（没人）",
            "无法访问",
            "无法访问",
            "0"
          ]
        ]
      },
      {
        "type": "code",
        "title": "使用 ls -l 读取权限",
        "prompt": "$ ls -l /etc/passwd\n-rw-r--r-- 1 root root 2847 Mar 5 /etc/passwd\n│├──┤├──┤├──┤\n│ │ │ │\n│ │ │ └── 其他：r--（只读）\n││ └── 组：r--（只读）\n│└── 所有者：rw-（读+写）\n└── 类型：-=文件（d=目录，l=链接）",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "八进制与符号表示法"
      },
      {
        "type": "table",
        "headers": [
          "八进制",
          "象征性的",
          "意义",
          "典型用途"
        ],
        "rows": [
          [
            "第755章",
            "rwxr-xr-x",
            "所有者执行所有操作，其他人读取/执行",
            "脚本、目录"
          ],
          [
            "第644章",
            "RW-R--R--",
            "所有者读/写，其他人只读",
            "文本文件，配置"
          ],
          [
            "700",
            "读写x-----",
            "只有所有者有权访问",
            "私有文件、SSH 密钥"
          ],
          [
            "600",
            "读写-----",
            "只有所有者读/写",
            "秘密档案"
          ],
          [
            "第777章",
            "RWXRWXRWX",
            "每个人都可以做一切",
            "⚠️ 切勿在生产中使用！"
          ],
          [
            "750",
            "rwxr-x---",
            "所有者+群组阅读，其他人不阅读",
            "共享目录"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚡",
        "text": "特别许可证"
      },
      {
        "type": "table",
        "headers": [
          "允许",
          "八进制",
          "存档中",
          "在目录上",
          "例子"
        ],
        "rows": [
          [
            "苏伊德",
            "4xxx",
            "以所有者权限运行",
            "—",
            "/usr/bin/passwd（根 SUID）"
          ],
          [
            "SGID",
            "2xxx",
            "以组权限运行",
            "新文件继承该组",
            "共享项目目录"
          ],
          [
            "粘性位",
            "1xxx",
            "—",
            "只有所有者可以取消",
            "/tmp（1777 权限）"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "考试要求：ls -l 以符号格式（rwxr-xr-x）显示权限。 chmod 使用八进制 (755) 或符号 (u+x)。 umask 022 为目录生成 755 个权限，为文件生成 644 个权限。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎭",
        "text": "umask——权限的掩码"
      },
      {
        "type": "paragraph",
        "text": "umask 定义创建新文件或目录时删除的权限。普通用户的默认值为022。"
      },
      {
        "type": "table",
        "headers": [
          "掩码",
          "文件权限（666 掩码）",
          "目录权限（777-掩码）"
        ],
        "rows": [
          [
            "022",
            "644（读写-r--r--）",
            "755（rwxr-xr-x）"
          ],
          [
            "077",
            "600（右-----）",
            "700（读写------）"
          ],
          [
            "002",
            "664（读写-读写-r--）",
            "775（rwxrwxr-x）"
          ]
        ]
      }
    ]
  },
  "5-4": {
    "title": "特殊文件和链接",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "硬链接与符号链接"
      },
      {
        "type": "paragraph",
        "text": "链接是文件系统中的“快捷方式”。了解硬链接和符号链接之间的区别对于 LPI 考试和 Linux 日常工作至关重要。"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔗 硬链接",
          "items": [
            "直接指向inode",
            "和原版没有区别",
            "删除原始文件后该文件仍然存在",
            "它无法遍历文件系统",
            "它不能链接目录",
            "相同 inode，链接数+1",
            "ln 文件硬链接"
          ]
        },
        "right": {
          "title": "➡️符号链接（Symlink）",
          "items": [
            "指向 PATH（文件名）",
            "这是一个特殊文件（类型“l”）",
            "如果目标被删除，它就会“损坏”",
            "CAN遍历文件系统",
            "CAN链接目录",
            "不同的inode，大小=路径长度",
            "ln -s 目标符号链接"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💡",
        "text": "什么是索引节点？"
      },
      {
        "type": "paragraph",
        "text": "索引节点是一种文件系统数据结构，包含有关文件的信息：权限、所有者、大小、时间戳、数据块。文件 NAME 不在 inode 中 - 它位于指向 inode 的目录中。这就是同一个 inode 可以存在多个名称（硬链接）的原因。"
      },
      {
        "type": "diagram",
        "title": "索引节点和链接结构",
        "boxes": [
          {
            "label": "Directory",
            "color": "#3b82f6",
            "children": [
              "file.txt → inode 42",
              "hardlink.txt → inode 42",
              "symlink.txt → \"file.txt\""
            ]
          },
          {
            "label": "Inode 42",
            "color": "#10b981",
            "children": [
              "Permessi: rw-r--r--",
              "Owner: mario",
              "Size: 1024 bytes",
              "Link count: 2"
            ]
          },
          {
            "label": "Blocchi Dati",
            "color": "#f59e0b",
            "children": [
              "Block 100",
              "Block 101",
              "(contenuto effettivo)"
            ]
          }
        ]
      },
      {
        "type": "code",
        "title": "使用链接",
        "prompt": "# 创建硬链接\n$ ln 原始.txt 硬链接.txt\n$ ls -li # -i 显示索引节点号\n42 -rw-r--r-- 2 马里奥 马里奥 1024 原始.txt\n42 -rw-r--r-- 2 马里奥马里奥 1024 硬链接.txt\n# 相同的索引节点 (42)！链接数 = 2\n\n# 创建符号链接\n$ ln -s /etc/passwd link_passwd\n$ ls -l 链接密码\nlrwxrwxrwx 1 马里奥马里奥 11 link_passwd -> /etc/passwd\n# 不同的inode，大小=11（长度“/etc/passwd”）\n\n# 查找符号链接的目标\n$ 读取链接 link_passwd\n/etc/密码\n\n# 查找所有损坏的符号链接\n$ 查找 /home -xtype l",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📁",
        "text": "临时文件"
      },
      {
        "type": "table",
        "headers": [
          "目录",
          "范围",
          "坚持",
          "笔记"
        ],
        "rows": [
          [
            "/tmp",
            "适合所有人的临时文件",
            "重启后清除",
            "粘滞位：只有所有者才能删除其文件"
          ],
          [
            "/var/tmp",
            "持久临时文件",
            "他们在重启后幸存下来",
            "对于重新启动之间所需的数据"
          ],
          [
            "〜/.cache",
            "用户缓存",
            "执着的",
            "浏览器缓存、应用程序"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "考试要求：硬链接=相同的inode，不遍历文件系统，没有目录。符号链接=不同的inode，遍历文件系统，可以链接目录，可以变得“损坏”。 ln -s 创建符号链接，不带标志的 ln 创建硬链接。"
      }
    ]
  }
};
