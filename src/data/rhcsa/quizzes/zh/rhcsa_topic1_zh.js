// RHCSA Quiz — Topic 1: Essential Tools (简体中文) — 25 questions

export const rhcsaTopic1QuizzesZH = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个操作符能将标准输出 (stdout) 和标准错误 (stderr) 同时重定向到同一个文件中？',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '`&>` 能够将标准输出（文件描述符 1）和标准错误输出（文件描述符 2）一起捕获并重定向到同一个指定的文件中。',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '命令 `ls -la /etc >> /tmp/output.txt` 会产生什么效果？',
    options: [
      '用 /etc 的内容覆盖 /tmp/output.txt 原有的内容',
      '将 ls 的输出结果追加到 /tmp/output.txt 的末尾',
      '仅将 ls 的报错信息重定向到 /tmp/output.txt',
      '在 /etc 和 /tmp/output.txt 之间创建一个硬链接',
    ],
    correct: 1,
    explanation: '`>>` 是追加重定向符，它会将新输出内容添加到现有文件的末尾，而不会覆盖（删除）原有内容。',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '你想要运行 `find / -name "*.log"`，但希望屏蔽掉满屏的 "Permission denied"（权限被拒绝）错误信息。应该使用哪个命令？',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '`2> /dev/null` 专门将标准错误 (stderr, 文件描述符 2) 丢弃到空设备 (黑洞) 中，而保留正常的搜索结果输出在屏幕上。',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '在命令 `ps aux | grep httpd` 中，管道符 `|` 的作用是什么？',
    options: [
      '将 ps aux 的输出保存到一个名为 "grep httpd" 的文件中',
      '将左边 ps aux 的输出，作为输入数据传递给右边的 grep httpd',
      '在后台并行运行 ps aux 和 grep httpd 而互不干涉',
      '将 ps aux 产生的任何错误重定向给 grep',
    ],
    correct: 1,
    explanation: '管道符 `|` 将前一个命令的标准输出 (stdout) 动态连接到下一个命令的标准输入 (stdin)，实现数据的流水线处理。',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '以下哪个命令能将标准输出和标准错误同时发送到 /dev/null，实现“完全静默”的执行效果？',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '`> /dev/null` 先将正常输出丢弃，接着 `2>&1` 将错误输出也重定向到正常输出所指向的地方（即 /dev/null）。这在编写脚本时非常常见。等价于更现代的 `&> /dev/null`。',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '在 Linux 文件描述符中，哪个数字代表“标准错误 (stderr)”？',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: '在 POSIX 标准中，文件描述符被固定分配：0 表示 stdin（标准输入），1 表示 stdout（标准输出），2 表示 stderr（标准错误）。',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '特殊路径 `/dev/null` 在 Linux 系统中代表什么？',
    options: [
      '一个只能存放纯文本数据的空文件',
      '一个特殊的设备文件，它会静默地丢弃写入它的所有数据（黑洞）',
      '内核用来记录底层崩溃日志的文件',
      '指向当前用户 home 目录的符号链接',
    ],
    correct: 1,
    explanation: '`/dev/null` 被称为空设备（null device）。发送到它那里的任何数据都会被系统抛弃，读取它时会立刻返回文件结束标志（EOF）。',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '如何使用 `tee` 命令，使得输出结果既能显示在终端屏幕上，又能同时保存到文件中？',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` 会从标准输入读取数据，然后将输出“一分为二”，一份写到标准输出（屏幕），另一份保存到指定的文件（如 output.txt）中。',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个 `grep` 选项可以在搜索时忽略字母的大小写差别？',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '`-i` (ignore-case) 使得搜索不区分大小写。例如 `grep -i "error" file` 会同时匹配 Error、ERROR 和 error。',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能显示 `/etc/passwd` 文件中“不包含”单词 "nologin" 的所有行？',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '`-v` (invert-match) 是反转匹配，它会过滤掉包含指定模式的行，仅输出那些与之不匹配的行。',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '在正则表达式中，模式 `^root` 会匹配什么？',
    options: [
      '匹配该行中任何位置出现的单词 "root"',
      '仅仅匹配以 "root" 开头的行',
      '仅仅匹配以 "root" 结尾的行',
      '匹配任何字符后面紧跟着 "root" 的情况',
    ],
    correct: 1,
    explanation: '在正则表达式中，脱字符 `^` 是一个锚点（anchor），表示被匹配的字符串必须出现在文本行的最开始位置。',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个 `grep` 选项可以让它不输出匹配的具体内容，而是只打印出成功匹配了多少行（行数统计）？',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '`-c` (count) 只会输出匹配行的总数。`-l` 输出包含匹配项的文件名，`-n` 则会输出行号及该行的内容。',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '为了启用并在 `grep` 中使用“扩展正则表达式”（Extended Regular Expressions, ERE），应该使用什么命令或选项？',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '使用 `-E` 选项（或旧的等价命令 `egrep`）可以开启扩展正则模式。这样诸如 `+`、`?`、`|`、`()` 等特殊符号就不需要用反斜杠转义了。',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '以下哪个正则表达式命令能精确找到“以任意数字开头”的文本行？',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` 表示行首，`[0-9]` 表示匹配 0 到 9 之间的任意一个数字字符。组合起来就是“必须以数字作为整行的第一个字符”。',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '要使用 `grep` 深入目录层级，递归搜寻所有子目录内文件中的内容，需使用哪个选项？',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '`-r` (recursive) 让 `grep` 深入到指定目录及其所有子目录下，查找所有文件包含该模式的地方（例如：`grep -r "192.168" /etc/`）。',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '字符权限表示法 `rwxr-xr-x` 对应的八进制（八位字节组合）数字表示是多少？',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: '计算方法：所有者 rwx(4+2+1=7)，所属组 r-x(4+0+1=5)，其他人 r-x(4+0+1=5)。组合起来就是 755。这是可执行文件和公共目录的典型权限。',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '要在 `/tmp` 目录中为 `/etc/hosts` 文件创建一个符号链接（软链接 / Symlink），应该使用哪个命令？',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s <目标源> <链接名>` 是创建软链接（符号链接）的规范方式。省略 `-s` 的话，默认会创建一个硬链接（Hard link）。',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '硬链接（Hard link）和软/符号链接（Symbolic link）之间的“主要区别”是什么？',
    options: [
      '符号链接的读取速度远快于硬链接',
      '硬链接直接共享同一个底层 inode，而符号链接只是一个包含目标路径字符串的新文件',
      '硬链接可以跨越不同的文件系统/分区，而符号链接不可以',
      '符号链接不能指向常规文件，只能指向目录',
    ],
    correct: 1,
    explanation: '硬链接是在文件系统底层的同一 inode 上增加目录条目（不能跨区）。符号链接本身拥有独立的 inode，其内容只是指向目标文件的文本路径（能跨区，但原文件删除会变成死链）。',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '只想给文件的“所有者（Owner / User）”增加执行 (execute) 权限，而不去改变其他人的权限，应该怎么做？',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`u+x` 含义是：仅针对 User（所有者）增加 Executable（执行）权限。如果是 `a+x`（或者简写 `+x`），则会赋予所有类别执行权限。',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '哪个命令能够一次性同时更改一个文件的“所有者（User）”和“所属组（Group）”？',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown user:group file`（或者用点隔离如 `chown user.group`）是一个复合用法，允许你只用一条命令就同时变更所有者和主要所属群组。',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '哪个选项组合能将 `/home/mario` 目录打包，并且通过 gzip 进行压缩，最终生成名为 `backup.tar.gz` 的归档文件？',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: '`-c` 创建(create), `-z` 使用gzip压缩, `-v` 详细输出(verbose), `-f` 指定生成的归档文件名(file)。',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '如果要调用 `bzip2` 算法（可以得到更高的压缩率但耗时相对更多）来进行压缩，在 `tar` 命令中应该使用哪个参数字母？',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: '在 `tar` 中，`-j` 指定 bzip2 (.tar.bz2)，`-z` 指定 gzip (.tar.gz)，大写的 `-J` 指定使用强力的 xz 算法 (.tar.xz)。',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '你当前在 `/root` 目录下。如何将压缩包 `archive.tar.gz` 解压（提取）释放到 `/opt/` 目录中，而不需要先 cd 切换过去？',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: '`-C` (Change to directory) 参数指示 `tar` 在开始任何解包提取动作之前，先临时切换到所指定的目录 `/opt/` 下。',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '如何查阅属于“特殊配置文件格式”（第 5 章节）的 `passwd` 文件的的官方手册页？',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man N command` 语法允许指定查阅第几章节的文档。因为第 1 章是 `passwd` 命令本身，如果要看 `/etc/passwd` 配置文件的结构说明，必须明确指定查阅第 5 章：`man 5 passwd`。',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '当你通过 RPM / DNF 安装了新的软件包后，该软件自带的附带文档、README 说明、配置示例模板等文件通常会被自动安装并存放在 Linux 的哪个目录下？',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: '`/usr/share/doc/` 是 Linux 系统中专门用来存放已安装软件包的说明文档、许可协议和最佳实践样例配置文件的标准层级目录。',
  },
]
