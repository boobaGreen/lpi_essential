// LPIC-1 102 Quiz Pool — English — Topic 106 (Desktop)

export const lpic1_102_topic2Quizzes_en = [
  {
    topicId: 2,
    question: "Which software component in the X11 architecture is responsible for managing the display hardware, mouse, and keyboard?",
    options: [
      "X Client",
      "X Server",
      "Window Manager",
      "Display Manager"
    ],
    correct: 1,
    explanation: "The X Server interacts directly with the local hardware."
  },
  {
    topicId: 2,
    question: "Which environment variable is used by X11 programs to know which screen and server to use for graphical output?",
    options: [
      "XSERVER",
      "SCREEN",
      "DISPLAY",
      "GRAPHICS"
    ],
    correct: 2,
    explanation: "The DISPLAY variable (e.g., :0.0) points the client to the correct X server."
  },
  {
    topicId: 2,
    question: "What is the modern replacement for the X Window System, designed to be simpler and more secure?",
    options: [
      "X12",
      "Wayland",
      "Mir",
      "Quartz"
    ],
    correct: 1,
    explanation: "Wayland is the modern successor to X11 on many Linux distributions."
  },
  {
    topicId: 2,
    question: "Which component provides the graphical login screen and starts the user session?",
    options: [
      "Window Manager",
      "Display Manager",
      "Desktop Environment",
      "X Server"
    ],
    correct: 1,
    explanation: "Display Managers like GDM or LightDM handle the initial user authentication."
  },
  {
    topicId: 2,
    question: "Which toolkit is primarily used by the KDE Plasma desktop environment?",
    options: [
      "GTK",
      "Qt",
      "Swing",
      "Cocoa"
    ],
    correct: 1,
    explanation: "KDE is built using the Qt toolkit, while GNOME uses GTK."
  },
  {
    topicId: 2,
    question: "Which accessibility feature allows a user to press modifier keys (like Ctrl or Shift) one by one instead of holding them down?",
    options: [
      "Slow Keys",
      "Sticky Keys",
      "Bounce Keys",
      "Mouse Keys"
    ],
    correct: 1,
    explanation: "Sticky Keys helps users who have difficulty pressing multiple keys simultaneously."
  },
  {
    topicId: 2,
    question: "How can you allow any host to connect to your local X server (note: this is insecure)?",
    options: [
      "xdpyinfo --all",
      "xhost +",
      "xauth add",
      "DISPLAY=any"
    ],
    correct: 1,
    explanation: "xhost + disables all access control for the X server."
  },
  {
    topicId: 2,
    question: "Which screen reader is commonly used in the GNOME desktop environment for accessibility?",
    options: [
      "VoiceOver",
      "Orca",
      "JAWS",
      "NVDA"
    ],
    correct: 1,
    explanation: "Orca is the standard screen reader and magnifier for GNOME."
  }
];
