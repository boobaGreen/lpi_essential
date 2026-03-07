// LPIC-1 102 Quiz Pool — Chinese — Topic 106 (用户界面与桌面)

export const lpic1_102_topic2Quizzes_zh = [
  // ─── 106.1 安装和配置 X11 (8 题) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "在 X11 架构中，哪个软件组件负责管理显示硬件、鼠标和键盘？",
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: "X Server 直接与本地硬件交互。"
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "X11 程序使用哪个环境变量来确定要在哪个屏幕和哪个服务器上显示图形？",
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: "DISPLAY 变量（例如 :0.0）告诉客户端显示的位置。"
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "为了提供更高的简洁性和安全性，哪种现代方案正逐渐取代 X Window？",
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: "Wayland 是许多现代 Linux 发行版中 X11 的现代继承者。"
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "现代 X11 的配置文件片段通常存储在哪个目录中？",
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: "现代系统使用 /etc/X11/xorg.conf.d/ 进行模块化配置，而不是单个的大文件。",
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "哪个命令通过使用 Cookie 机制来授权特定的远程用户访问您的 X 会话？",
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: "`xauth` 管理 .Xauthority 文件，该文件包含身份验证令牌。",
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "如何允许任何主机连接到您的本地 X 服务器（警告：此举不安全）？",
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: "xhost + 禁用了 X 服务器的所有访问控制。"
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "哪个协议允许在服务器上运行图形程序，但通过网络在客户端上显示？",
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: "XDMCP (X Display Manager Control Protocol) 支持远程图形登录。",
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "哪个工具允许通过命令行更改 X11 的屏幕分辨率和方向？",
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: "`xrandr` (X Resize, Rotate and Reflect) 是配置显示器的标准工具。",
  },

  // ─── 106.2 图形桌面 (6 题) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "哪个组件提供图形登录界面并启动用户会话？",
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: "显示管理器（如 GDM 或 LightDM）负责初始登录、身份验证和桌面加载。"
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "KDE Plasma 桌面环境主要使用哪种图形工具包（toolkit）？",
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: "KDE 建立在 Qt 框架之上，而 GNOME 则使用 GTK。"
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "以下哪项不属于 Linux 桌面环境？",
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: "Apache 是一个 Web 服务器，而不是桌面环境。",
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "窗口管理器 (Window Manager) 的主要职责是什么？",
    options: [
      '验证用户密码',
      '提供窗口边框、标题栏和控制按钮（如最小化/关闭）',
      '管理网络连接',
      '安装显卡驱动'
    ],
    correct: 1,
    explanation: "窗口管理器负责窗口的外观风格和摆放位置。",
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "哪种技术允许用户在低带宽连接上访问远程服务器的图形桌面？",
    options: ['VNC', 'SSH with -X', 'RDP', '以上所有'],
    correct: 3,
    explanation: "VNC、RDP 和通过 SSH 进行 X 转发都是常见的远程桌面访问方法。",
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Spice 协议主要配合哪种虚虚拟化技术使用？",
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: "Spice 常用于 KVM 虚拟化桌面环境，提供高性能远程访问。",
  },

  // ─── 106.3 辅助功能 (6 题) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "哪项辅助功能允许用户依次按下组合键（如 Ctrl 或 Shift），而不是同时按下？",
    options: [
      '慢速键 (Slow Keys)',
      '粘滞键 (Sticky Keys)',
      '回弹键 (Bounce Keys)',
      '鼠标键 (Mouse Keys)'
    ],
    correct: 1,
    explanation: "粘滞键可帮助难以同时操作多个按键的用户。"
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "GNOME 桌面环境中通常使用哪款屏幕阅读软件？",
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: "Orca 是 GNOME 的标准屏幕阅读和放大器软件。"
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "哪项功能可以忽略极短时间内快速重复按下的同一按键？",
    options: ['慢速键', '粘滞键', '回弹键 (Bounce Keys)', '重复键'],
    correct: 2,
    explanation: "回弹键专为手部颤抖可能导致误触的用户设计。",
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "“慢速键” (Slow Keys) 的目的是什么？",
    options: [
      '降低鼠标移动速度',
      '按键必须保持一段时间才会被接受，以防止误按',
      '慢慢读出屏幕上的内容',
      '降低屏幕刷新率'
    ],
    correct: 1,
    explanation: "慢速键需要用户长按按键，有效避免了由于不经意碰触导致的输入。",
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "哪项功能可以使用键盘上的数字小键盘来控制鼠标光标？",
    options: ['Sticky Mouse', 'Numeric Cursor', 'Mouse Keys (鼠标键)', 'Key Mouse'],
    correct: 2,
    explanation: "鼠标键 (Mouse Keys) 允许完全使用键盘替代鼠标操作。",
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "盲文终端和屏幕放大器属于哪项技术类别？",
    options: ['辅助技术 (Assistive Technologies)', '视觉扩展', '硬件驱动', '内核模块'],
    correct: 0,
    explanation: "这些都是辅助技术 (AT)，用来帮助残障用户更好地操作计算机。",
  },
];
