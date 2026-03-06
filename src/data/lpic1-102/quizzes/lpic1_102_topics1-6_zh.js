// LPIC-1 102 Quiz Pool — Chinese — Topics 1-6 (Consolidated)
export const lpic1_102_topic1Quizzes_zh = [
  {
    topicId: 1,
    question: "当用户退出 Bash 登录 Shell 时，会执行哪个文件？",
    options: ["~/.bashrc", "~/.bash_logout", "/etc/bash_exit", "~/.profile"],
    correct: 1,
    explanation: "~/.bash_logout 用于在会话结束时执行清理任务（例如清除屏幕）。"
  }
];

export const lpic1_102_topic2Quizzes_zh = [
  {
    topicId: 2,
    question: "在 X11 中，哪个组件直接管理硬件（显示器、键盘、鼠标）？",
    options: ["X Client", "X Server", "Window Manager", "Display Manager"],
    correct: 1,
    explanation: "X Server 负责管理本地硬件并将资源提供给客户端。"
  }
];

export const lpic1_102_topic3Quizzes_zh = [
  {
    topicId: 3,
    question: "在现代 Linux 系统中，密码哈希存储在哪个文件中？",
    options: ["/etc/passwd", "/etc/shadow", "/etc/gshadow", "/etc/security"],
    correct: 1,
    explanation: "/etc/shadow 存储加密的密码信息，且仅 root 用户可读。"
  }
];

export const lpic1_102_topic4Quizzes_zh = [
  {
    topicId: 4,
    question: "CUPS 网页管理界面默认使用哪个端口？",
    options: ["80", "443", "631", "9100"],
    correct: 2,
    explanation: "CUPS 使用 631 端口进行基于 IPP 协议的管理。"
  }
];

export const lpic1_102_topic5Quizzes_zh = [
  {
    topicId: 5,
    question: "哪个文件定义了主机名解析的顺序（例如：先查文件，再查 DNS）？",
    options: ["/etc/hosts", "/etc/resolv.conf", "/etc/nsswitch.conf", "/etc/networks"],
    correct: 2,
    explanation: "/etc/nsswitch.conf 控制各种系统数据库的搜索顺序。"
  }
];

export const lpic1_102_topic6Quizzes_zh = [
  {
    topicId: 6,
    question: "推荐使用哪个命令来安全地编辑 /etc/sudoers 文件？",
    options: ["nano", "visudo", "sudoedit", "vi"],
    correct: 1,
    explanation: "visudo 会在保存前检查语法，防止配置错误锁定 root 访问权。"
  }
];
