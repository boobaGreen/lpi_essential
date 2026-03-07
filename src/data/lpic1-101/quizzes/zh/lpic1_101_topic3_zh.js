// LPIC-1 101 Quiz — 主题 3：GNU 和 Unix 命令 (中文)

export const lpic1_101_topic3_zh = [
  // ─── 103.1 在命令行工作 (7 题) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '以下哪个命令可以确定给定名称是 shell 内置命令、别名还是外部命令？',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: '`type` 命令显示 shell 如何解释给定的名称（内置命令、别名、文件或函数）。',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个环境变量包含以冒号分隔的目录列表，shell 在这些目录中查找可执行命令？',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'PATH 变量定义了 shell 搜索可执行文件的目录。',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令显示关于系统架构、内核版本和主机名的简要信息？',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: '`uname -a` 打印所有系统信息，包括内核和硬件架构。',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如何定义一个名为 `MYVAR` 且值为 "Hello" 的 shell 变量，并使其在子进程中可用？',
    options: [
      'MYVAR="Hello"',
      'set MYVAR="Hello"',
      'export MYVAR="Hello"',
      'env MYVAR="Hello"'
    ],
    correct: 2,
    explanation: '`export` 创建一个环境变量，该变量将被所有子进程继承。',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Bash 中单引号 (\') 和双引号 (") 的主要区别是什么？',
    options: [
      '单引号允许变量扩展 ($VAR)，双引号不允许',
      '双引号允许变量扩展 ($VAR)，单引号禁止所有扩展',
      '双引号用于数字，单引号用于字符串',
      '没有区别'
    ],
    correct: 1,
    explanation: '双引号允许变量扩展，而单引号保留引号内所有字符的字面值。',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个键盘快捷键在 Bash 命令历史记录中启动反向搜索？',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R 启动增量反向搜索，允许用户查找以前执行过的命令。',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Bash 命令 `!55` 的作用是什么？',
    options: [
      '杀死 PID 为 55 的进程',
      '执行历史记录列表中的第 55 号命令',
      '从历史记录中删除第 55 号命令',
      '执行名称为 "55" 的命令'
    ],
    correct: 1,
    explanation: '`!` 符号调用历史扩展。`!n` 指执行历史列表中编号为 n 的命令。',
  },

  // ─── 103.2 使用过滤器处理文本流 (6 题) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令默认显示文件的最后 10 行？',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: '`tail` 命令打印文件的最后几行；默认显示最后 10 行。',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令读取文件并在输出时为每行添加行号？',
    options: ['nl', 'wc -l', 'cat -n', 'nl 和 cat -n 都可以'],
    correct: 3,
    explanation: '`nl`（number lines）和 `cat -n` 都会给输出的行添加行号。',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '`wc` 命令默认统计文件的哪三个属性？',
    options: [
      '行数、字符数、字节数',
      '句子数、单词数、字符数',
      '行数、单词数、字节/字符数',
      '行数、单词数、段落数'
    ],
    correct: 2,
    explanation: '`wc`（word count）统计行数、单词数和字节数。',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '要从已排序的文件中删除连续的重复行，应使用哪个命令？',
    options: ['sort -u', 'uniq', 'sort -u 和 uniq 都可以', 'rmdup'],
    correct: 2,
    explanation: '`uniq` 删除连续的重复行。`sort -u` 则是排序并全局去重。',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '假设字段由冒号 (":") 分隔，哪个命令提取 /etc/passwd 文件的第一个字段？',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` 设置定界符为冒号，`-f1` 选择第一个字段。',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个 sed 命令将 file.txt 中出现的每一个 "apple" 替换为 "orange"？',
    options: ['sed "r/apple/orange/" file.txt', 'sed "s/apple/orange/g" file.txt', 'sed "s/apple/orange" file.txt', 'sed "sub/apple/orange/all" file.txt'],
    correct: 1,
    explanation: '替换命令格式为 `s/pattern/replacement/g`，其中 `g` 表示全局替换行内的所有匹配项。',
  },

  // ─── 103.3 基础文件管理 (6 题) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令创建一个名为 "notes.txt" 的空文件，或者如果文件已存在则更新其时间戳？',
    options: ['create notes.txt', 'touch notes.txt', 'echo notes.txt', 'mkfile notes.txt'],
    correct: 1,
    explanation: '`touch` 用于修改文件时间戳，如果文件不存在则创建一个空文件。',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令创建一个名为 `project` 的目录，如果父目录 `work` 不存在则一并创建？',
    options: ['mkdir work/project', 'mkdir -p work/project', 'mkdir --all work/project', 'mkdir -r work/project'],
    correct: 1,
    explanation: '`mkdir -p`（--parents）会根据需要创建缺少的中间目录。',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '您想将整个目录 `/docs` 及其内容复制到 `/backup`。您应该使用哪个命令？',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: '`-r`（recursive）选项告诉 `cp` 递归地复制目录及其内容。',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '在 Bash 通配符（Globbing）中，`?` 匹配什么？',
    options: ['任意数量的字符', '恰好一个字符', '零个或一个字符', '仅限数字'],
    correct: 1,
    explanation: '在通配符匹配中，`?` 匹配且仅匹配一个任意字符。',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令通过实时搜索文件系统来查找文件？',
    options: ['locate file', 'updatedb', 'grep file', 'find / -name file'],
    correct: 3,
    explanation: '`find` 命令通过遍历实际的文件系统目录树来定位文件。',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '哪个命令将 `/home/user` 目录压缩成一个 gzip 格式的 tar 归档文件？',
    options: [
      'tar -xzvf backup.tar.gz /home/user',
      'tar -czvf backup.tar.gz /home/user',
      'zip backup.tar.gz /home/user',
      'gzip /home/user > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` 用于创建归档文件 (`-c`) 并使用 gzip 压缩 (`-z`)。',
  },

  // ─── 103.4 使用流、管道和重定向 (4 题) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '重定向操作符 `>>` 的作用是什么？',
    options: [
      '将标准输出重定向到文件并覆盖内容',
      '从文件重定向标准输入',
      '将标准输出重定向到文件并追加到末尾',
      '将标准错误重定向到文件'
    ],
    correct: 2,
    explanation: '`>>` 将 stdout 追加到文件末尾，而不会删除已有内容。',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如何将标准错误 (stderr) 重定向到名为 `error.log` 的文件？',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: '文件描述符 2 代表标准错误；`2>` 用于重定向它。',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '在命令末尾添加 `2>&1` 的效果是什么？',
    options: [
      '将标准输出重定向到标准错误',
      '将标准输出和标准错误发送到同一位置',
      '静默所有输出',
      '先执行命令 2，再执行命令 1'
    ],
    correct: 1,
    explanation: '`2>&1` 将 stderr 重定向到 stdout 当前指向的位置。',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个工具从标准输入读取数据，并同时写入标准输出和一个或多个文件？',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` 命令如同水管的 T 型接头，将输入流分流到屏幕和文件。',
  },

  // ─── 103.5 创建、监视和终止进程 (5 题) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令提供系统中正在运行进程的动态实时视图？',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` 命令显示一个交互式的、实时更新的系统进程列表及资源使用情况。',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如果未指定信号，`kill` 命令默认发送什么信号？',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` 默认发送 SIGTERM (15)，请求进程正常终止。',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如果进程忽略了普通的终止命令，如何强制其立即终止？',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` 发送 SIGKILL 信号，该信号不能被进程捕获或忽略。',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个键盘快捷键可以暂停终端中正在运行的前台任务？',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z 发送信号挂起前台进程，之后可以通过 `bg` 或 `fg` 再次操作该任务。',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '如何运行一个命令，使其在您关闭终端后仍能继续运行？',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` 命令使后续执行的命令忽略挂起（HUP）信号。',
  },

  // ─── 103.6 修改进程执行优先级 (3 题) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '在 Linux 中，有效的 "nice" 值范围是多少？',
    options: ['0 到 100', '-20 到 +19', '-19 到 +20', '1 到 99'],
    correct: 1,
    explanation: 'nice 值的范围是从 -20（最高优先级）到 +19（最低优先级）。',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '关于进程优先级，普通用户（非 root）可以执行什么操作？',
    options: [
      '降低自己进程的 nice 值',
      '提高自己进程的 nice 值（从而降低优先级）',
      '更改任意用户的进程优先级',
      '将 nice 值设置为 -20'
    ],
    correct: 1,
    explanation: '普通用户只能增加其进程的 nice 值（即降低优先级），不能降低 nice 值（提高优先级）。',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令在启动新进程时调整其调度优先级？',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` 用于启动新进程并指定优先级；`renice` 用于调整正在运行的进程的优先级。',
  },

  // ─── 103.7 使用正则表达式搜索文本文件 (2 题) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '在正则表达式中，锚点 `^` 代表什么？',
    options: ['行尾', '任何字符组', '行首', '取反'],
    correct: 2,
    explanation: '`^` 符号将匹配项锚定在行的开始位置。',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '在正则表达式中，`.*` 是什么意思？',
    options: [
      '零个或多个字面义的点号',
      '一个字面义点号后跟一个字面义星号',
      '零个或多个任意字符',
      '恰好一个点号'
    ],
    correct: 2,
    explanation: '点号（.）匹配除换行符外的任意单个字符，星号（*）表示重复零次或多次。',
  },

  // ─── 103.8 基础文件编辑 (3 题) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '打开 vi 时，默认处于什么模式？',
    options: ['插入模式', '可视模式', '普通（命令）模式', '末行模式'],
    correct: 2,
    explanation: 'vi 默认进入普通模式，该模式下输入被视为执行命令。',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '在 vi 的普通模式下，`dd` 命令的作用是什么？',
    options: ['删除当前字符', '删除当前的整行', '复制当前行', '保存文档'],
    correct: 1,
    explanation: '在 vi 中，连续输入两次 `d` 会删除（剪切）当前光标所在的行。',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '如何强制退出 vi 而不保存任何更改？',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` 指令会放弃所有未保存的修改并强制退出编辑器。',
  },
];
