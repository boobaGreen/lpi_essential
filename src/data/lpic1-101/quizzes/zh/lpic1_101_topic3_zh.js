// LPIC-1 101 — Topic 103: GNU 和 Unix 命令 — Quiz ZH

export const lpic1_101_topic3_zh = [
  {
    id: 1,
    question: "哪个命令识别命令是别名 (alias)、函数、内置命令 (builtin) 还是外部文件？",
    options: ["which", "whatis", "type", "whereis"],
    answer: "type",
    explanation: "type 是在 bash 中了解命令来源的最完整命令。"
  },
  {
    id: 2,
    question: "为了使局部变量对所有子进程可用，必须使用哪个命令？",
    options: ["set", "env", "export", "alias"],
    answer: "export",
    explanation: "export 将变量发送到会话的全局环境 (environment) 中。"
  },
  {
    id: 3,
    question: "哪个命令统计文本文件中的行数？",
    options: ["wc -l", "wc -w", "linecount", "grep -c"],
    answer: "wc -l",
    explanation: "wc (word count) 指令配合 -l (lines) 选项是统计行数的标准方法。"
  },
  {
    id: 4,
    question: "哪个命令实时（跟随方式）显示添加到日志文件的新行？",
    options: ["head -f", "tail -f", "cat -f", "more -f"],
    answer: "tail -f",
    explanation: "-f (follow) 选项允许在系统日志发生时进行监控。"
  },
  {
    id: 5,
    question: "在终端中挂起（暂停）正在运行的进程的键盘快捷键是什么？",
    options: ["Ctrl+C", "Ctrl+D", "Ctrl+Z", "Ctrl+A"],
    answer: "Ctrl+Z",
    explanation: "Ctrl+Z 发送 SIGTSTP 信号，将进程挂起并放入后台。"
  },
  {
    id: 6,
    question: "kill 命令的哪个信号最强且不能被应用程序忽略（杀死进程）？",
    options: ["SIGTERM (15)", "SIGHUP (1)", "SIGKILL (9)", "SIGINT (2)"],
    answer: "SIGKILL (9)",
    explanation: "信号 9 (SIGKILL) 强制由内核立即终止，不发出警告。"
  },
  {
    id: 7,
    question: "哪个工具将标准输出 (stdout) 同时复制到文件和屏幕？",
    options: ["split", "tee", "join", "pipe"],
    answer: "tee",
    explanation: "就像家用水管中的 'T' 型接头，tee 将流分流到两个目的地。"
  },
  {
    id: 8,
    question: "哪个基础正则表达式 (regex) 代表“行首”？",
    options: ["$", "*", "^", "."],
    answer: "^",
    explanation: "^ 符号将搜索锚定在行的确切开头。"
  },
  {
    id: 9,
    question: "在 vi 编辑器中，哪个按键允许进入“插入模式”以开始书写？",
    options: [":", "i", "esc", "x"],
    answer: "i",
    explanation: "在命令模式下，按下 'i' (insert) 允许输入文本。"
  },
  {
    id: 10,
    question: "哪个工具使用 Lempel-Ziv 算法压缩文件并创建 .gz 文件？",
    options: ["bzip2", "xz", "gzip", "tar"],
    answer: "gzip",
    explanation: "gzip 是 Linux 中最常用且速度最快的压缩工具标准。"
  }
];
