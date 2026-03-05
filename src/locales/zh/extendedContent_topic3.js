export const topic3Extended = {
  "3-1": {
    "title": "归档和压缩",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗜️",
        "text": "压缩与存储"
      },
      {
        "type": "paragraph",
        "text": "归档和压缩是两个经常一起使用的不同操作。归档意味着将多个文件分组为一个。压缩意味着减小数据的大小。 tar 存档，gzip/bzip2/xz 压缩。"
      },
      {
        "type": "comparison",
        "left": {
          "title": "📦 存储（焦油）",
          "items": [
            "将多个文件/目录组合为一个",
            "不压缩（大小 ≈ 相等）",
            "保留权限、时间戳、结构",
            "生成 .tar 文件"
          ]
        },
        "right": {
          "title": "🗜️ 压缩（gzip、bzip2、xz）",
          "items": [
            "减少一个文件的大小",
            "消除冗余的数学算法",
            "压缩得越多，速度就越慢",
            "生成 .gz、.bz2、.xz"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "算法比较"
      },
      {
        "type": "table",
        "headers": [
          "算法",
          "扩大",
          "速度",
          "压缩",
          "命令",
          "减压"
        ],
        "rows": [
          [
            "压缩包",
            ".gz",
            "⚡ 快点",
            "⭐⭐⭐",
            "gzip 文件",
            "gunzip 文件.gz"
          ],
          [
            "压缩包2",
            ".bz2",
            "🐌 中等",
            "⭐⭐⭐⭐",
            "bzip2 文件",
            "Bunzip2 文件.bz2"
          ],
          [
            "xz",
            ".xz",
            "🐢 慢",
            "⭐⭐⭐⭐⭐",
            "xz 文件",
            "unxz 文件.xz"
          ],
          [
            "拉链",
            "。拉链",
            "⚡ 快点",
            "⭐⭐⭐",
            "zip arch.zip 文件",
            "解压 arch.zip"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "什么时候用哪个？",
        "content": "gzip 适合日常使用（快速且良好）。 xz 分发软件（最大压缩）。 bzip2 逐渐不再使用，取而代之的是 xz。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "焦油旗——食谱"
      },
      {
        "type": "table",
        "headers": [
          "旗帜",
          "意义",
          "助记符"
        ],
        "rows": [
          [
            "-c",
            "创建（创建存档）",
            "C=创建"
          ],
          [
            "-x",
            "提炼",
            "X = 提取"
          ],
          [
            "-t",
            "列表（显示内容）",
            "T = 列表T"
          ],
          [
            "-f",
            "文件（指定名称）",
            "F = 文件（总是最后！）"
          ],
          [
            "-z",
            "压缩包",
            "Z 代表拉链"
          ],
          [
            "-j",
            "压缩包2",
            "J 代表 bJip2"
          ],
          [
            "-J",
            "xz",
            "大写J = XZ（更强大）"
          ],
          [
            "-v",
            "详细（显示进度）",
            "V = 详细"
          ]
        ]
      },
      {
        "type": "code",
        "title": "tar 的实际例子",
        "prompt": "# 创建 gzip 压缩档案\n$ tar -czf backup.tar.gz /home/user/docs/\n\n# 提取存档\n$ tar -xzf 备份.tar.gz\n\n# 解压到指定目录\n$ tar -xzf backup.tar.gz -C /tmp/\n\n# 列出内容而不解压\n$ tar -tzf 备份.tar.gz\n\n# 使用 xz 创建（最大压缩）\n$ tar -cJf archive.tar.xz 目录/",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试要求提供用于创建 (-czf) 和提取 (-xzf) 的 tar 标志，并了解 -z (gzip)、-j (bzip2) 和 -J (xz) 之间的区别。请记住：默认情况下，gzip 是最常用的。"
      }
    ]
  },
  "3-2": {
    "title": "I/O 和管道重定向",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "0️⃣",
        "text": "三个标准文件描述符"
      },
      {
        "type": "paragraph",
        "text": "默认情况下，每个 Linux 进程都打开三个 I/O 通道。了解这些通道对于重定向和管道至关重要。"
      },
      {
        "type": "diagram",
        "title": "标准I/O流程",
        "boxes": [
          {
            "label": "stdin (0)",
            "color": "#10b981",
            "children": [
              "Tastiera (default)",
              "File (<)",
              "Pipe output"
            ]
          },
          {
            "label": "stdout (1)",
            "color": "#3b82f6",
            "children": [
              "Schermo (default)",
              "File (>)",
              "Pipe input"
            ]
          },
          {
            "label": "stderr (2)",
            "color": "#ef4444",
            "children": [
              "Schermo (default)",
              "File (2>)",
              "/dev/null"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "➡️",
        "text": "重定向运算符"
      },
      {
        "type": "table",
        "headers": [
          "操作员",
          "功能",
          "例子"
        ],
        "rows": [
          [
            "> 文件",
            "标准输出 → 文件（覆盖）",
            "ls > 列表.txt"
          ],
          [
            ">> 文件",
            "标准输出 → 文件（追加）",
            "echo \"新行\" >> log.txt"
          ],
          [
            "< 文件",
            "文件 → 标准输入",
            "排序<数字.txt"
          ],
          [
            "2> 文件",
            "标准错误 → 文件",
            "查找/-名称“x”2>错误.txt"
          ],
          [
            "2>&1",
            "stderr → 与 stdout 相同的输出",
            "cmd > all.log 2>&1"
          ],
          [
            "&> 文件",
            "标准输出 + 标准错误 → 文件",
            "cmd &> 输出.log"
          ],
          [
            "/dev/空",
            "“黑洞”——抛弃一切",
            "cmd 2>/dev/null"
          ]
        ]
      },
      {
        "type": "code",
        "title": "常见重定向场景",
        "prompt": "# 保存命令输出\n$ ls -la /etc > list_etc.txt\n\n# 忽略错误\n$ find / -name \"config\" 2>/dev/null\n\n# 保存全部（标准输出+标准错误）\n$ apt update &> update.log\n\n# 挂在日志上\n$ echo \"$(date): 备份完成\" >> /var/log/backup.log",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "管道——组合的力量"
      },
      {
        "type": "paragraph",
        "text": "管道 (|) 是 Unix 命令行中最强大的概念。它将一个命令的标准输出连接到下一个命令的标准输入，允许您从简单的命令构建复杂的管道。"
      },
      {
        "type": "code",
        "title": "管道：从简单到复杂",
        "prompt": "# 统计/etc中有多少个文件\n$ls /etc|厕所-l\n\n# 找出使用最多 RAM 的 5 个进程\n$ps 辅助 |排序-k4-rn |头-5\n\n# 统计日志中出现“错误”的次数\n$ 猫 /var/log/syslog | grep -i 错误 |厕所-l\n\n# 提取登录的唯一用户名\n$最后| awk '{print $1}' |排序| uniq-c|排序-rn",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "命令之间的逻辑运算符"
      },
      {
        "type": "table",
        "headers": [
          "操作员",
          "意义",
          "例子"
        ],
        "rows": [
          [
            "cmd1 && cmd2",
            "仅当 cmd1 成功时才运行 cmd2（退出 0）",
            "mkdir 目录 && cd 目录"
          ],
          [
            "cmd1 ||指令2",
            "仅当 cmd1 失败时才运行 cmd2（退出 ≠ 0）",
            "ping 主机 ||回显“离线”"
          ],
          [
            "cmd1;指令2",
            "无论如何，始终运行 cmd2",
            "日期 ;瓦阿米"
          ],
          [
            "命令&",
            "在后台运行cmd",
            "睡眠 100 &"
          ]
        ]
      },
      {
        "type": "story",
        "title": "场景：自动备份",
        "text": "您是系统管理员，需要进行每日备份。使用管道： tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo \"备份正常\" >> /var/log/backup.log || echo \"备份错误\" >> /var/log/backup.log — 创建存档，将结果保存到日志。如果失败，请记录错误。"
      }
    ]
  },
  "3-3": {
    "title": "Grep 和正则表达式",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔎",
        "text": "grep——文本瑞士军刀"
      },
      {
        "type": "table",
        "headers": [
          "选项",
          "功能",
          "例子"
        ],
        "rows": [
          [
            "-这",
            "不区分大小写",
            "grep -i“错误”log.txt"
          ],
          [
            "-v",
            "反向匹配（不匹配的行）",
            "grep -v \"^#\" config.txt"
          ],
          [
            "-r / -R",
            "递归搜索目录",
            "grep -r“TODO”src/"
          ],
          [
            "-n",
            "显示行号",
            "grep -n“主”程序.c"
          ],
          [
            "-c",
            "计算找到的行数",
            "grep -c“错误”系统日志"
          ],
          [
            "-这",
            "仅显示文件名",
            "grep -rl“密码”/etc/"
          ],
          [
            "-w",
            "仅匹配整个单词",
            "grep -w “是”文件（不是“这个”）"
          ],
          [
            "-和",
            "扩展正则表达式 (egrep)",
            "grep -E“错误|警告”日志"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌟",
        "text": "正则表达式元字符"
      },
      {
        "type": "table",
        "headers": [
          "元字符",
          "意义",
          "例子",
          "匹配"
        ],
        "rows": [
          [
            "。",
            "任意单个字符",
            "CT",
            "猫，切，婴儿床"
          ],
          [
            "^",
            "行首",
            "^错误",
            "行首错误"
          ],
          [
            "$",
            "行尾",
            "结束$",
            "结束"
          ],
          [
            "*",
            "比前一个零个或更多",
            "ab*c",
            "交流、ABC、ABC"
          ],
          [
            "[ ]",
            "套装中的角色之一",
            "[艾欧]",
            "单元音"
          ],
          [
            "[^]",
            "除集合中的字符外的任何字符",
            "[^0-9]",
            "不是一个数字"
          ],
          [
            "\\",
            "通配符转义",
            "\\.",
            "字面上的一点"
          ]
        ]
      },
      {
        "type": "code",
        "title": "正则表达式的实际示例",
        "prompt": "# 以 # 开头的行（注释）\n$ grep \"^#\" /etc/ssh/sshd_config\n\n# 空行\n$ grep \"^$\" 文件.txt\n\n# IP 地址（简单模式）\n$ grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" access.log\n\n# 不是空行，也不是注释\n$ grep -v \"^#\" 配置 | grep -v“^$”",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "✂️",
        "text": "文本操作：Power Toolkit"
      },
      {
        "type": "table",
        "headers": [
          "命令",
          "功能",
          "关键示例"
        ],
        "rows": [
          [
            "切",
            "提取列/字段",
            "剪切-d：-f1 /etc/passwd"
          ],
          [
            "种类",
            "对行进行排序",
            "排序 -n（数字）-r（反向）"
          ],
          [
            "独特的",
            "删除相邻的重复项",
            "排序文件 |优衣库-c"
          ],
          [
            "洗手间",
            "计算行数、字数、字节数",
            "wc -l（行）-w（字）"
          ],
          [
            "头",
            "前 N 行",
            "head -n 20个文件"
          ],
          [
            "尾巴",
            "最后 N 行",
            "tail -f syslog（跟随）"
          ],
          [
            "t",
            "翻译字符",
            "tr 'a-z' 'A-Z' （大写）"
          ],
          [
            "sed",
            "流编辑器",
            "sed 's/old/new/g' 文件"
          ],
          [
            "awk",
            "工艺塔",
            "awk '{print $1, $3}' 文件"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试使用 -i、-v、-r 和基本正则表达式（^、$、.、*）测试 grep。您还知道 cut、sort、wc 以及头和尾的区别。"
      }
    ]
  },
  "3-4": {
    "title": "bash 脚本",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Bash 脚本剖析"
      },
      {
        "type": "code",
        "title": "脚本的基本结构",
        "prompt": "#!/bin/bash\n# 这是一条评论\n# shebang（第一行）告诉系统使用哪个解释器\n\n# 变量\n名称=“LinuxQuest”\n版本=2.0\n\n# 打印\necho“欢迎来到$NAME v$VERSION！”\necho \"用户：$(whoami)，日期：$(date +%F)\"\n\n# 退出代码：0 = 成功\n出口0",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "不要忘记 chmod +x！",
        "content": "默认情况下，脚本不可执行。需要添加执行权限：chmod +x script.sh。然后使用 ./script.sh 运行它（如果当前目录不在 PATH 中，则需要 ./）。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📥",
        "text": "脚本中的特殊变量"
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
            "$0",
            "脚本名称",
            "./备份.sh → 备份.sh"
          ],
          [
            "1 美元、2 美元、...",
            "位置参数",
            "./script.sh 你好 → $1=你好"
          ],
          [
            "$#",
            "主题数量",
            "如果你使用 3 个参数调用 → $#=3"
          ],
          [
            "$@",
            "所有主题（分开）",
            "“$@”=“$1”“$2”“$3”"
          ],
          [
            "$*",
            "所有主题（合并）",
            "“$*” = “$1 $2 $3”"
          ],
          [
            "$？",
            "退出代码最后一个命令",
            "0 = 成功，其他 = 错误"
          ],
          [
            "$$",
            "当前脚本的PID",
            "对于临时文件很有用"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "条件和周期"
      },
      {
        "type": "code",
        "title": "如果-那么-否则",
        "prompt": "#!/bin/bash\n如果[-f“/etc/passwd”];那么\n    echo \"文件存在！\"\nelif [ -d \"/etc\" ];那么\n    echo \"这是一个目录\"\n否则\n    回显“未找到”\n菲",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "测试",
          "意义",
          "类型"
        ],
        "rows": [
          [
            "[-f 文件]",
            "文件存在并且是常规文件",
            "文件"
          ],
          [
            "[-d 目录]",
            "该目录存在",
            "文件"
          ],
          [
            "[-e路径]",
            "路径存在（任何类型）",
            "文件"
          ],
          [
            "[-r 文件]",
            "文件可读",
            "权限"
          ],
          [
            "[-x 文件]",
            "该文件是可执行的",
            "权限"
          ],
          [
            "[-z“$var”]",
            "字符串为空",
            "细绳"
          ],
          [
            "[“$a”=“$b”]",
            "相等的字符串",
            "细绳"
          ],
          [
            "[ $a -eq $b ]",
            "数量相等",
            "数字"
          ],
          [
            "[ $a -lt $b ]",
            "a < b（小于）",
            "数字"
          ],
          [
            "[ $a -gt $b ]",
            "a > b（大于）",
            "数字"
          ]
        ]
      },
      {
        "type": "code",
        "title": "For 和 while 循环",
        "prompt": "# 对列表进行 For 循环\n对于 *.txt 中的文件；做\n    echo“进程：$文件”\n    wc -l \"$文件\"\n完成\n\n# 对于数值范围的循环\n对于 $(seq 1 10) 中的 i；做\n    回显“迭代$i”\n完成\n\n# while 循环\n计数器=1\nwhile [ $counter -le 5 ];做\n    echo“计数器：$counter”\n    计数器=$((计数器+1))\n完成",
        "output": ""
      },
      {
        "type": "story",
        "title": "场景：自动备份脚本",
        "text": "创建一个 backup.sh 脚本，用于：1) 检查备份目录是否存在（如果是 -d），2) 创建名称中包含日期的 tar.gz 存档，3) 计算旧备份的数量，如果超过 7 个则删除它们（for + rm），4) 记录结果。这是每个系统管理员每天都会做的自动化类型！"
      }
    ]
  }
};
