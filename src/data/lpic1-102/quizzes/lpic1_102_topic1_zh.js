// LPIC-1 102 Quiz Pool — Chinese — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_zh = [
  // ─── 105.1 自定义和使用 Shell 环境 (10 题) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "当用户退出 Bash 登录 Shell 时，会执行哪个文件？",
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: "~/.bash_logout 用于在会话结束时执行清理任务（例如清除屏幕）。"
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "创建新用户时，哪个目录包含默认的配置文件，这些文件会被复制到用户家目录？",
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: "/etc/skel (skeleton) 目录包含新用户的标准隐藏配置文件。"
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "如何使变量 'MYVAR' 对当前 Shell 的子进程可见？",
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: "'export' 命令将 Shell 变量转换为环境变量。"
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "要为所有 Bash 用户设置全局别名 (aliases)，应编辑哪个文件？",
    options: ['~/.bashrc', '/etc/bashrc 或 /etc/bash.bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: "全局别名和函数通常放在 /etc/bashrc 或 /etc/bash.bashrc 中。",
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "`source` 命令（或 `.` 运算符）的作用是什么？",
    options: [
      '编译 Shell 脚本',
      '在当前 Shell 环境中执行脚本，而不启动子 Shell',
      '从互联网下载文件',
      '将 Shell 重置为默认状态'
    ],
    correct: 1,
    explanation: "`source` 在当前进程上下文中运行文件，允许修改当前的环境变量和函数。",
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "`unalias` 命令在哪个路径变量中搜索别名？",
    options: ['PATH', 'ALIAS_PATH', 'Shell 不为别名使用路径', 'BASH_ALIASES'],
    correct: 2,
    explanation: "别名存储在当前 Shell 会话的内存中，不需要磁盘搜索路径。",
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可以显示当前定义的所有环境变量？",
    options: ['set', 'env', 'export -p', 'env 和 export -p 都可以'],
    correct: 3,
    explanation: "`env` 显示已导出的变量，而 `export -p` 则以可重新导入的格式列出它们。",
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Bash 登录 Shell (login shell) 首先读取哪个文件进行全局设置？",
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: "登录 Shell 首先读取 /etc/profile，它通常会加载 /etc/profile.d/ 中的脚本。",
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "如何在当前会话中移除环境变量 'TEMP_DATA'？",
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: "`unset` 从当前 Shell 环境中删除变量或函数。",
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Bash 的哪项功能允许使用 `ll` 来代替输入 `ls -l`？",
    options: ['函数', '链接', 'Alias (别名)', '重定向'],
    correct: 2,
    explanation: "别名 (Alias) 为带有特定选项的长命令提供缩写。",
  },

  // ─── 105.2 定制或编写简单脚本 (10 题) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Bash 脚本开头的哪两个字符用于指定解释器？",
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: "Shebang (#!) 位于第一行，定义了脚本的解释器（如 /bin/bash）。"
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "哪个逻辑运算符仅在第一条命令执行失败时才执行第二条命令？",
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: "OR (||) 运算符常用于错误处理或条件执行。",
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "如何将 'whoami' 命令的输出赋值给名为 'USER' 的变量？",
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: "$(command) 在现代 Shell 中用于执行命令替换。"
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "哪个变量存储了传递给 Shell 脚本的参数个数？",
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: "$# 变量保存了位置参数的数量。"
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "成功执行的命令通常返回哪个退出状态码？",
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: "在 Unix/Linux 中，0 表示成功；任何非零值都表示错误。"
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "在 Shell 脚本中，如何检查名为 `data.txt` 的文件是否存在？",
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      '[ -e data.txt ] 和 [ -f data.txt ] 都可以'
    ],
    correct: 3,
    explanation: "`-e` 检查是否存在；`-f` 检查是否为普通文件。",
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "在 Shell 脚本中，`$?` 变量代表什么？",
    options: [
      '当前 Shell 的 PID',
      '最后一条命令的退出状态码',
      '脚本的第一个参数',
      '由 Shell 生成的随机数'
    ],
    correct: 1,
    explanation: "$? 捕捉了上一条命令的返回代码 (ROI)。",
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "哪种循环结构最适合遍历文件名列表？",
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: "`for` 循环非常适合处理已知列表中的元素。",
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "如何在脚本中引用传递给它的第 2 个参数？",
    options: ['$2', '${2}', '$2 或 ${2} 都可以', '$ARG2'],
    correct: 2,
    explanation: "$2 或 ${2} 都指向第二个位置参数。",
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Bash 中一个简单的 `if` 条件语句的正确语法是什么？",
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: "Bash 的 `if` 需要 `then` 关键字（通常紧接分号），并以 `fi` 结尾。",
  },
];
