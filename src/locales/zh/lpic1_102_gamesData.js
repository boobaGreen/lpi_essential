export const memoryGameData = [
  { command: 'export', description: '定义全局环境变量' },
  { command: 'alias', description: '创建命令别名' },
  { command: 'source', description: '在当前 Shell 中执行脚本' },
  { command: '/etc/skel', description: '新用户家目录模板' },
  { command: 'DISPLAY', description: 'X11 图形输出目标' },
  { command: 'Wayland', description: '现代 X11 替代方案' },
  { command: 'Orca', description: '屏幕阅读器（辅助功能）' },
  // Topic 107
  { command: '/etc/shadow', description: '存储加密后的密码' },
  { command: 'chage', description: '管理密码过期策略' },
  { command: 'crontab -e', description: '编辑定时任务' },
  // Topic 108
  { command: 'hwclock', description: '管理硬件时钟' },
  { command: 'journalctl', description: '读取 systemd 日志' },
  { command: 'logrotate', description: '自动轮替日志文件' },
  { command: 'CUPS', description: '打印系统' },
  // Topic 109
  { command: 'ip addr', description: '查看 IP 地址' },
  { command: 'ping', description: '测试网络连通性' },
  { command: 'dig', description: 'DNS 查询工具' },
  // Topic 110
  { command: 'SUID', description: '以文件所有者权限运行' },
  { command: 'visudo', description: '安全编辑 sudoers 文件' },
  { command: 'ssh-keygen', description: '生成 SSH 密钥对' },
];

export const trueFalseData = [
  { text: '/etc/skel 在创建新用户时被克隆。', answer: true, explanation: '正确！它是家目录的“骨架”。', difficulty: 1 },
  { text: 'Shebang #! 必须放在脚本最后一行。', answer: false, explanation: '错误。它必须放在脚本的第一行。', difficulty: 1 },
  { text: 'X11 支持网络透明性（通过网络运行）。', answer: true, explanation: '正确。', difficulty: 1 },
  { text: '/etc/passwd 存储明文密码。', answer: false, explanation: '错误。密码散列存储在 /etc/shadow 中。', difficulty: 1 },
  { text: 'CUPS 的默认端口是 631。', answer: true, explanation: '正确。', difficulty: 1 },
];

export const terminalChallengeData = [
  { id: 'tc-zh-1', description: '将变量 VAR 导出为 10', prompt: 'export VAR=10', expectedOutput: '', hint: '使用 export', difficulty: 1 },
  { id: 'tc-zh-2', description: '显示你的 UID 和所属组', prompt: 'id', expectedOutput: '', hint: 'id', difficulty: 1 },
  { id: 'tc-zh-3', description: '查看 google.com 的连通性', prompt: 'ping google.com', expectedOutput: '', hint: 'ping', difficulty: 1 },
  { id: 'tc-zh-4', description: '生成一个新的 SSH 密钥对', prompt: 'ssh-keygen', expectedOutput: '', hint: 'ssh-keygen', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-zh-1',
    category: '配置文件',
    question: '将文件与其作用匹配：',
    items: [
      { text: '/etc/profile', matches: '全局登录配置' },
      { text: '~/.bashrc', matches: '用户交互配置' },
      { text: '/etc/skel', matches: '新用户模板' },
    ],
  },
];

export const fillGapData = [
  { prompt: '_____ VAR="val"', answer: 'export', hint: '导出变量', difficulty: 1 },
  { prompt: 'HTTP 默认端口：_____', answer: '80', hint: '整数', difficulty: 1 },
  { prompt: 'DNS 配置文件：/etc/_____.conf', answer: 'resolv', hint: 'resolv', difficulty: 1 },
];
