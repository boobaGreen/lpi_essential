export const topic3Quizzes = [
  {
    "lessonId": "3-1",
    "question": "哪种压缩算法通常会产生最小的文件？",
    "options": [
      "压缩包",
      "压缩包2",
      "xz",
      "压缩的"
    ],
    "correct": 2,
    "explanation": "xz 提供最佳的压缩比，但也是最慢的。"
  },
  {
    "lessonId": "3-1",
    "question": "哪个命令创建 gzipped tar 存档？",
    "options": [
      "tar -czf archive.tar.gz dir/",
      "tar -xzf archive.tar.gz dir/",
      "gzip 目录/",
      "zip -r archive.tar.gz 目录/"
    ],
    "correct": 0,
    "explanation": "tar -czf：c=创建，z=gzip，f=文件。"
  },
  {
    "lessonId": "3-1",
    "question": "什么扩展名表示使用 bzip2 压缩的文件？",
    "options": [
      ".gz",
      ".bz2",
      ".xz",
      "。拉链"
    ],
    "correct": 1,
    "explanation": "bzip2 生成扩展名为 .bz2 的文件。"
  },
  {
    "lessonId": "3-1",
    "question": "tar 中的 -t 标志用于：",
    "options": [
      "创建档案",
      "提取存档",
      "列表内容",
      "测试完整性"
    ],
    "correct": 2,
    "explanation": "tar -tf archive.tar.gz 列出内容而不解压。"
  },
  {
    "lessonId": "3-1",
    "question": "tar -xjf 使用以下命令提取压缩档案：",
    "options": [
      "压缩包",
      "压缩包2",
      "xz",
      "lz4"
    ],
    "correct": 1,
    "explanation": "-j表示bzip2。 -z 表示 gzip。 -J表示xz。"
  },
  {
    "lessonId": "3-1",
    "question": "哪个 tar 标志表示 xz 压缩？",
    "options": [
      "-z",
      "-j",
      "-J",
      "-x"
    ],
    "correct": 2,
    "explanation": "-J表示xz。 -z 表示 gzip。 -j表示bzip2。"
  },
  {
    "lessonId": "3-1",
    "question": "“gunzip”命令相当于：",
    "options": [
      "gzip-d",
      "gzip-c",
      "gzip-r",
      "gzip-l"
    ],
    "correct": 0,
    "explanation": "gunzip 和 gzip -d 解压缩 .gz 文件。"
  },
  {
    "lessonId": "3-1",
    "question": "gzip 压缩文件并且：",
    "options": [
      "保留原来的样子",
      "将原来的文件替换为.gz",
      "复印一份",
      "将其移动到 /tmp"
    ],
    "correct": 1,
    "explanation": "gzip 将原始文件替换为 .gz 版本。使用-k 保留原始内容。"
  },
  {
    "lessonId": "3-1",
    "question": "哪一个压缩速度更快？",
    "options": [
      "xz",
      "压缩包2",
      "压缩包",
      "利兹玛"
    ],
    "correct": 2,
    "explanation": "gzip 速度最快，但压缩率较低。 xz 最慢，但压缩程度最高。"
  },
  {
    "lessonId": "3-1",
    "question": "未经压缩的 tar 会生成一个文件：",
    "options": [
      ".tar.gz",
      "。焦油",
      ".gz",
      "。拉链"
    ],
    "correct": 1,
    "explanation": "不带压缩标志 (-z/-j/-J) 的 tar 创建一个简单的未压缩 .tar 存档。"
  },
  {
    "lessonId": "3-2",
    "question": "哪个运算符重定向 stdout 并覆盖文件？",
    "options": [
      ">>",
      ">",
      "<",
      "|"
    ],
    "correct": 1,
    "explanation": "> 将 stdout 重定向到一个文件，并覆盖它。 >> 挂起。"
  },
  {
    "lessonId": "3-2",
    "question": "哪个运算符重定向 stderr？",
    "options": [
      "1>",
      "2>",
      "0>",
      "3>"
    ],
    "correct": 1,
    "explanation": "2> 重定向 stderr（文件描述符 2）。"
  },
  {
    "lessonId": "3-2",
    "question": "管道（|）有什么作用？",
    "options": [
      "写入文件",
      "将一个命令的标准输出连接到下一个命令的标准输入",
      "并行执行两个命令",
      "创建符号链接"
    ],
    "correct": 1,
    "explanation": "管道 (|) 将一个命令的输出作为下一个命令的输入传递。"
  },
  {
    "lessonId": "3-2",
    "question": ">> 与 > 不同的是：",
    "options": [
      "覆盖",
      "附加到文件",
      "从文件中读取",
      "删除文件"
    ],
    "correct": 1,
    "explanation": ">> 追加到文件末尾而不覆盖现有内容。"
  },
  {
    "lessonId": "3-2",
    "question": "/dev/null 是：",
    "options": [
      "虚拟磁盘",
      "丢弃一切的“黑洞”",
      "日志文件",
      "临时目录"
    ],
    "correct": 1,
    "explanation": "/dev/null 丢弃所有写入的数据。对于消除不需要的输出很有用。"
  },
  {
    "lessonId": "3-2",
    "question": "< 重定向：",
    "options": [
      "来自文件的标准输入",
      "标准输出到文件",
      "stderr 到文件",
      "没有人"
    ],
    "correct": 0,
    "explanation": "<redirect stdin：该命令从指定文件读取输入。"
  },
  {
    "lessonId": "3-2",
    "question": "“tee”命令的作用是：",
    "options": [
      "从两个文件中读取",
      "将 stdout 写入屏幕和文件",
      "将一个文件分成两部分",
      "合并两个文件"
    ],
    "correct": 1,
    "explanation": "tee 是一个“T 型分离器”：它将输出显示在屏幕上，同时将其保存到文件中。"
  },
  {
    "lessonId": "3-2",
    "question": "&> 重定向：",
    "options": [
      "仅标准输出",
      "仅标准错误",
      "标准输出和标准错误",
      "背景"
    ],
    "correct": 2,
    "explanation": "&> 将 stdout (1) 和 stderr (2) 重定向到同一文件。"
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 && cmd2 仅在以下情况下运行 cmd2：",
    "options": [
      "cmd1 失败",
      "cmd1 成功（退出 0）",
      "总是",
      "绝不"
    ],
    "correct": 1,
    "explanation": "仅当第一个命令的退出代码为 0（成功）时，&& 才执行第二个命令。"
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 || cmd2 仅在以下情况下运行 cmd2：",
    "options": [
      "cmd1成功",
      "cmd1 失败",
      "总是",
      "cmd1不存在"
    ],
    "correct": 1,
    "explanation": "||仅当第一个命令失败（退出代码 ≠ 0）时才执行第二个命令。"
  },
  {
    "lessonId": "3-2",
    "question": "xargs 转换：",
    "options": [
      "目录中的文件",
      "命令行参数中的 stdin",
      "数字文本",
      "脚本化命令"
    ],
    "correct": 1,
    "explanation": "xargs 从 stdin 读取并构造另一个命令的参数。"
  },
  {
    "lessonId": "3-2",
    "question": "文件描述符0代表：",
    "options": [
      "标准输出",
      "标准错误",
      "标准输入",
      "系统文件"
    ],
    "correct": 2,
    "explanation": "0 = stdin（键盘），1 = stdout（屏幕），2 = stderr（错误）。"
  },
  {
    "lessonId": "3-3",
    "question": "哪个 grep 选项执行不区分大小写的搜索？",
    "options": [
      "-r",
      "-这",
      "-v",
      "-c"
    ],
    "correct": 1,
    "explanation": "grep -i 忽略大小写。"
  },
  {
    "lessonId": "3-3",
    "question": "在正则表达式中，通配符“.”的作用是什么？意思是？ ？",
    "options": [
      "行尾",
      "字面上的一点",
      "任意单个字符",
      "行首"
    ],
    "correct": 2,
    "explanation": "正则表达式中的句点 (.) 匹配任何单个字符。"
  },
  {
    "lessonId": "3-3",
    "question": "grep -v 显示：",
    "options": [
      "仅第一行",
      "与模式不匹配的行",
      "出现次数",
      "二进制文件"
    ],
    "correct": 1,
    "explanation": "-v（反转）显示与模式不匹配的行。"
  },
  {
    "lessonId": "3-3",
    "question": "在正则表达式中，^ 表示：",
    "options": [
      "行尾",
      "任意角色",
      "行首",
      "拒绝"
    ],
    "correct": 2,
    "explanation": "^（脱字号）表示正则表达式中行的开头。"
  },
  {
    "lessonId": "3-3",
    "question": "正则表达式中的 $ 表示：",
    "options": [
      "多变的",
      "行尾",
      "行首",
      "实际美元"
    ],
    "correct": 1,
    "explanation": "$ 在正则表达式中表示行尾。"
  },
  {
    "lessonId": "3-3",
    "question": "cut -d: -f1 /etc/passwd 提取：",
    "options": [
      "整个文件",
      "第一个字段（用户名）",
      "最后一行",
      "第一行"
    ],
    "correct": 1,
    "explanation": "-d：使用 : 作为分隔符，-f1 选择第一个字段。"
  },
  {
    "lessonId": "3-3",
    "question": "“sort -n”命令排序：",
    "options": [
      "按字母顺序",
      "数字上",
      "按日期",
      "无独有偶"
    ],
    "correct": 1,
    "explanation": "-n 按数值排序，而不是按字母顺序。"
  },
  {
    "lessonId": "3-3",
    "question": "uniq 仅适用于：",
    "options": [
      "大文件",
      "行已排序",
      "二进制文件",
      "任何文件"
    ],
    "correct": 1,
    "explanation": "uniq 仅删除相邻的重复项。在 uniq 之前使用 sort。"
  },
  {
    "lessonId": "3-3",
    "question": "wc -l 计数：",
    "options": [
      "的话",
      "人物",
      "线条",
      "文件"
    ],
    "correct": 2,
    "explanation": "wc -l 计算行数。 -w 计算字数，-c 计算字节数。"
  },
  {
    "lessonId": "3-3",
    "question": "head -n 5 显示：",
    "options": [
      "最后5行",
      "前 5 行",
      "5条随机线",
      "每5行"
    ],
    "correct": 1,
    "explanation": "head -n 5 显示文件或输入的前 5 行。"
  },
  {
    "lessonId": "3-3",
    "question": "grep -r 搜索：",
    "options": [
      "仅在指定文件中",
      "在目录中递归",
      "仅在 .txt 文件中",
      "在变量中"
    ],
    "correct": 1,
    "explanation": "-r（递归）在目录中的所有文件中搜索模式。"
  },
  {
    "lessonId": "3-3",
    "question": "sed 是以下内容的编辑器：",
    "options": [
      "二进制文件",
      "文本流（非交互式）",
      "图片",
      "数据库"
    ],
    "correct": 1,
    "explanation": "sed（流编辑器）以非交互方式编辑文本。"
  },
  {
    "lessonId": "3-4",
    "question": "Bash 脚本中哪一行应该位于第一行？",
    "options": [
      "#!/bin/bash",
      "#/bin/bash",
      "//bin/bash",
      "!#/bin/bash"
    ],
    "correct": 0,
    "explanation": "#!/bin/bash 是 shebang：它告诉系统要使用哪个解释器。"
  },
  {
    "lessonId": "3-4",
    "question": "如何访问传递给脚本的第一个参数？",
    "options": [
      "$0",
      "1 美元",
      "$#",
      "$@"
    ],
    "correct": 1,
    "explanation": "$1 是第一个参数。 $0 是脚本的名称。 $# 是参数的数量。"
  },
  {
    "lessonId": "3-4",
    "question": "$# 包含：",
    "options": [
      "脚本名称",
      "所有主题",
      "主题数量",
      "退出代码"
    ],
    "correct": 2,
    "explanation": "$# 包含传递给脚本的参数数量。"
  },
  {
    "lessonId": "3-4",
    "question": "脚本中的 $0 包含：",
    "options": [
      "第一个话题",
      "脚本名称",
      "用户",
      "PID"
    ],
    "correct": 1,
    "explanation": "$0 是调用脚本时使用的名称。"
  },
  {
    "lessonId": "3-4",
    "question": "退出 0 意味着：",
    "options": [
      "错误",
      "成功",
      "重新启动",
      "强制终止"
    ],
    "correct": 1,
    "explanation": "exit 0 表示成功退出。 0以外的值表示错误。"
  },
  {
    "lessonId": "3-4",
    "question": "要使脚本可执行：",
    "options": [
      "mv script.sh /bin",
      "chmod +x 脚本.sh",
      "运行脚本.sh",
      "执行脚本.sh"
    ],
    "correct": 1,
    "explanation": "chmod +x 为脚本添加执行权限。"
  },
  {
    "lessonId": "3-4",
    "question": "在 if bash 中，语法是：",
    "options": [
      "如果（条件）{}",
      "如果[条件]；然后...fi",
      "如果条件：...结束",
      "if {cond} do ... 完成"
    ],
    "correct": 1,
    "explanation": "正确的语法是：if [条件];然后...fi"
  },
  {
    "lessonId": "3-4",
    "question": "bash 中的 for 循环：",
    "options": [
      "对于列表中的 i；做...完成",
      "对于（列表中的 i）{}",
      "foreach i 列表结束",
      "对于我=列表；结尾"
    ],
    "correct": 0,
    "explanation": "对于列表中的变量；我发出命令；完毕"
  },
  {
    "lessonId": "3-4",
    "question": "$@代表：",
    "options": [
      "所有参数作为单独的字符串",
      "主题数量",
      "PID",
      "退出代码"
    ],
    "correct": 0,
    "explanation": "$@ 扩展为传递的所有参数，每个参数作为一个单独的字符串。"
  },
  {
    "lessonId": "3-4",
    "question": "[ -f file ] 测试检查是否：",
    "options": [
      "该文件是一个目录",
      "该文件存在并且是一个常规文件",
      "文件为空",
      "该文件是可执行的"
    ],
    "correct": 1,
    "explanation": "-f 检查路径是否存在并且是常规文件（不是目录/链接）。"
  },
  {
    "lessonId": "3-4",
    "question": "哪个测试检查目录是否存在？",
    "options": [
      "[ -f 目录 ]",
      "[-d 目录]",
      "[-e 目录]",
      "[-r 目录]"
    ],
    "correct": 1,
    "explanation": "-d 检查路径是否存在并且是一个目录。"
  },
  {
    "lessonId": "3-4",
    "question": "bash 脚本中的 # 表示：",
    "options": [
      "根命令",
      "一条评论",
      "指令",
      "一个错误"
    ],
    "correct": 1,
    "explanation": "# 开始注释——之后的所有内容都将被忽略（第一行的 shebang 除外）。"
  }
];
