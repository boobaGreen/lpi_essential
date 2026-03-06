// RHCSA Quiz — Topic 2: Shell Scripting (简体中文) — 15 questions

export const rhcsaTopic2QuizzesZH = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '在 bash 中如何正确声明并赋值一个变量？',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: '在 bash 中，变量赋值时等号（`=`）两侧绝对不能有空格：`NAME="value"`。美元符号（`$`）仅在读取引用该变量时才使用。',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '哪个特殊的内置变量包含了当前正在运行的 bash 进程的 PID（进程 ID）？',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '`$$` 保存了当前 shell 进程的 PID。相比之下，`$?` 是上一个命令的退出状态码，`$0` 是脚本名称，`$!` 是刚放入后台的最后一个作业的 PID。',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '命令 `export VARIABLE="value"` 的主要作用是什么？',
    options: [
      '在当前脚本中创建一个局部私有变量',
      '使其成为全局环境变量，从而能被所有派生的子进程（child processes）继承和访问',
      '将变量的值自动永久保存到 /etc/environment 系统文件中',
      '在当前脚本执行完毕后自动销毁该变量',
    ],
    correct: 1,
    explanation: '`export` 会将局部 Shell 变量提升为环​​境变量。这意味着随后从该 Shell 启动的任何子进程或新脚本，都能读取到这个变量及其值。',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '以下哪种语法能“捕获（截取）命令的输出结果”并保存到某个变量中？',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', '选项 A 和 B 都正确', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: '传统的反引号 (`` `cmd` ``) 和现代的命令替换 `$(cmd)` 都可以捕获输出结果。但通常强烈推荐使用 `$()`，因为它的嵌套（nested）能力更强且更易读。',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '执行以下脚本片段会输出什么？\n```bash\nNAME="world"\necho "Hello ${NAME}!"\n```',
    options: ['Hello ${NAME}!', 'Hello world!', 'Hello $NAME!', 'Error: variable undefined'],
    correct: 1,
    explanation: '`${NAME}` 会被展开为变量的实际值 "world"（在大括号的保护下安全地和其他字符串拼接）。双引号（`""`）允许内部的变量被求值展开。输出为："Hello world!"。',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '在 bash 的条件判断（test）中，哪个标志位用于检查文件是否存在？',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: '`-e` (exists) 用于测试指定路径是否存在（无论是哪种类型）。`-f` 则更严格，除了存在之外，还必须是一个“普通/常规文件”(regular file)。',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '这段循环代码执行后会打印什么？\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      '在一行内打印出：123',
      '在三个独立的行上分别打印出：1、2 以及 3',
      '出现语法错误',
      '执行一次 echo，并把 "1 2 3" 作为一整个参数打印',
    ],
    correct: 1,
    explanation: '这是标准 `for` 循环。变量 `i` 会依次在每次迭代中取列表里的一个值（1，然后是2，然后是3）。且 `echo` 默认自带换行符，所以会分多行打印。',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '在 Bash 脚本的方括号 `[  ]` 内，使用哪个运算符来判断两个字符串是否完全相等？',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', '选项 A 和 C 都是正确的'],
    correct: 3,
    explanation: '对于字符串的比较，单等号（`=`）是在 POSIX 中标准且安全的；在特定的 bash 环境中双等号（`==`）也同样有效。而 `-eq` 专门用于比较两个“整数”的数值。',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '哪个测试标志 (test flag) 会专门排查给定的路径名是否存在，并且“是一个目录 (Directory)”？',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: '`-d` (directory) 用于测试路径是否是目录。其他选项：`-f` = 普通文件，`-e` = 存在即可，`-r` = 当前用户有读取权限。',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '要编写一个能够从数字 1 计数循环到 5 的 `while` 循环，以下哪个语法结构是正确的？',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Bash 的原生地道语法是：在循环外初始化变量 (`i=1`)；使用 `[ $i -le 5 ]`（less than or equal）设定循环继续的条件；在主体内打印并用双括号 `((i++))` 来进行数学递增运算。',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '条件测试 `[ -z "$VARIABLE" ]` 具体用来检查什么？',
    options: [
      '检查变量的数值是否等于零（0）',
      '检查该变量包含的字符串长度是否为零（即变量为空字符串）',
      '检查变量是否为纯数字类型',
      '检查变量是否已经在环境中被定义',
    ],
    correct: 1,
    explanation: '`-z` (zero length) 用于测试某个字符串长度是否为 0，也就是判断它是否为空。与其对应的是 `-n`，表示字符串长度是否非 0（不为空）。',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '在 bash shell 脚本内部，变量 `$1` 包含什么数值内容？',
    options: [
      '当前运行脚本的进程 PID',
      '启动该脚本时从命令行传入的“第一个位置参数（Argument）”',
      '脚本自身的文件名',
      '传递进来的参数的总个数',
    ],
    correct: 1,
    explanation: '`${1}` 或 `$1` 代表用户传递给脚本的第一个位置参数。类似地，`$0` 是被执行命令（脚本名），`$#` 是参数的总数量，`$@` 表示全部参数的集合。',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '哪个系统特殊变量专门用于捕获“最近一条被执行完毕的命令”所返回的退出状态码（Exit code）？',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '`$?` 存储了上一个执行进程抛出的退出码。习惯上 0 代表成功执行没有错误，任何非 0 的数字（如 1、2、127）都分别暗示了不同类型的错误或异常。',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '关于特殊变量 `$@` 和 `$*`，它们之间有什么区别？',
    options: [
      '没有区别，它们在任何情况下的行为都完全一样',
      '在带双引号时，`$@` 会将各个参数保持为一个个独立隔离的单词字串；而 `$*` 会把所有参数融合拼接成一整个单一长字符串',
      '带有双引号时，`$*` 会保持各参数彼此独立，而 `$@` 则拼接合并',
      '`$@` 专门用于处理并保存纯数字的参数',
    ],
    correct: 1,
    explanation: '当用双引号包裹时：`"$@"` 会把每个命令行位置参数展开为彼此独立的引号包裹部分。如果用 `"$*"`，所有的参数则会被空格（或 IFS 设置的首字符）分隔，融合成一个巨大的单字符串。循环遍历参数时这尤为关键。',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '如何使一个脚本安全中止：如果它运行时没有接收到任何参数的话，立即以错误码（exit 1）退出？',
    options: [
      'if [ $# -eq 0 ]; then echo "Error"; fi',
      'if [ $# -eq 0 ]; then echo "Error" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: '如果参数个数 `$#` 等于零，这是一个最佳错误处理实践：首先将错误文本写入标准错误句柄 (stderr `>&2`) 以供日志捕捉排查，然后强制程序执行 `exit 1` 来中止并向上游汇报失败情况。',
  },
]
