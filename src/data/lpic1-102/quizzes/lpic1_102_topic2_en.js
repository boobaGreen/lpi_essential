// LPIC-1 102 Quiz Pool — English — Topic 106 (Desktop)

export const lpic1_102_topic2Quizzes_en = [
  // ─── 106.1 Install and configure X11 (8 questions) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which software component in the X11 architecture is responsible for managing the display hardware, mouse, and keyboard?',
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: 'The X Server interacts directly with the local hardware.'
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which environment variable is used by X11 programs to know which screen and server to use for graphical output?',
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: 'The DISPLAY variable (e.g., :0.0) points the client to the correct X server.'
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What is the modern replacement for the X Window System, designed to be simpler and more secure?',
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: 'Wayland is the modern successor to X11 on many Linux distributions.'
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'In which directory are modern X11 configuration snippets typically stored?',
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: 'Modern systems use /etc/X11/xorg.conf.d/ for modular configuration instead of a single monolithic file.',
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to authorize a specific remote user to access your X session using a cookie-based mechanism?',
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: '`xauth` manages the .Xauthority file containing MIT-MAGIC-COOKIE-1 authentication tokens.',
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'How can you allow any host to connect to your local X server (note: this is insecure)?',
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: 'xhost + disables all access control for the X server.'
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which protocol allows graphical applications to be run on a server but displayed on a client across a network?',
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: 'XDMCP (X Display Manager Control Protocol) allows remote login sessions over the network.',
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which tool allows you to change the resolution and orientation of your screen in X11 from the command line?',
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: '`xrandr` (X Resize, Rotate and Reflect) is the standard utility for screen configuration.',
  },

  // ─── 106.2 Graphical Desktops (6 questions) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which component provides the graphical login screen and starts the user session?',
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: 'Display Managers like GDM or LightDM handle the initial user authentication.'
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which toolkit is primarily used by the KDE Plasma desktop environment?',
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: 'KDE is built using the Qt toolkit, while GNOME uses GTK.'
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which of the following is NOT a Linux desktop environment?',
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: 'Apache is a web server, not a desktop environment.',
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the primary role of a Window Manager?',
    options: [
      'To verify user passwords',
      'To provide windows with borders, titles, and controls (minimize/maximize)',
      'To manage network connections',
      'To install video card drivers'
    ],
    correct: 1,
    explanation: 'Window Managers (like Openbox or Mutter) manage the appearance and placement of application windows.',
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which technology allows a user to access a graphical desktop on a remote server over a low-bandwidth connection?',
    options: ['VNC', 'SSH with -X', 'RDP', 'All of the above'],
    correct: 3,
    explanation: 'VNC, RDP, and X-forwarding over SSH are all common methods for remote desktop access.',
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Spice is a remote display protocol primarily used with which virtualization technology?',
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: 'Spice is heavily used in KVM environments to provide high-performance remote access to VMs.',
  },

  // ─── 106.3 Accessibility (6 questions) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which accessibility feature allows a user to press modifier keys (like Ctrl or Shift) one by one instead of holding them down?',
    options: [
      'Slow Keys',
      'Sticky Keys',
      'Bounce Keys',
      'Mouse Keys'
    ],
    correct: 1,
    explanation: 'Sticky Keys helps users who have difficulty pressing multiple keys simultaneously.'
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which screen reader is commonly used in the GNOME desktop environment for accessibility?',
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: 'Orca is the standard screen reader and magnifier for GNOME.'
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which feature ignores brief or fast repeated key presses of the same key?',
    options: ['Slow Keys', 'Sticky Keys', 'Bounce Keys', 'Repeat Keys'],
    correct: 2,
    explanation: 'Bounce Keys is designed for users with tremors who might accidentally hit a key multiple times.',
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the purpose of the "Slow Keys" accessibility feature?',
    options: [
      'It slows down the mouse cursor',
      'It requires a key to be held down for a certain period before it is accepted',
      'It reads the screen text slowly',
      'It decreases the refresh rate of the monitor'
    ],
    correct: 1,
    explanation: 'Slow Keys helps prevent accidental key presses by requiring a prolonged hold.',
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which feature allows controlling the mouse pointer using the numeric keypad?',
    options: ['Sticky Mouse', 'Numeric Cursor', 'Mouse Keys', 'Key Mouse'],
    correct: 2,
    explanation: 'Mouse Keys allows keyboard navigation of the visual pointer.',
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Braille displays and screen magnifiers are categorized under which set of technologies?',
    options: ['Assistive Technologies', 'Visual Enhancements', 'Hardware Drivers', 'Kernel Modules'],
    correct: 0,
    explanation: 'These are Assistive Technologies (AT) designed to help users with disabilities interact with the system.',
  },
];
