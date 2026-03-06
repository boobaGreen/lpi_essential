// LPIC-1 101 — Topic 101: Архитектура системы — Quiz RU

export const lpic1_101_topic1_ru = [
  {
    id: 1,
    question: "Какой каталог содержит файлы динамических устройств и аппаратные узлы в Linux?",
    options: ["/etc", "/dev", "/proc", "/sys"],
    answer: "/dev",
    explanation: "Каталог /dev (devices) содержит специальные файлы, представляющие аппаратное обеспечение системы."
  },
  {
    id: 2,
    question: "Какая команда отображает подробную информацию о PCI-устройствах и шине?",
    options: ["lsusb", "lspci", "lshw", "lsmod"],
    answer: "lspci",
    explanation: "Команда lspci используется для вывода списка всех устройств, подключенных к шине PCI."
  },
  {
    id: 3,
    question: "Где ядро хранит информацию о прерываниях (IRQ) в реальном времени?",
    options: ["/proc/interrupts", "/etc/interrupts", "/sys/irq", "/var/log/irq"],
    answer: "/proc/interrupts",
    explanation: "/proc — это виртуальная файловая система, предоставляющая информацию о ядре и оборудовании."
  },
  {
    id: 4,
    question: "Какая команда загружает модуль ядра и автоматически разрешает его зависимости?",
    options: ["insmod", "rmmod", "modprobe", "lsmod"],
    answer: "modprobe",
    explanation: "modprobe более интеллектуальна, чем insmod, так как проверяет и загружает необходимые зависимости модуля."
  },
  {
    id: 5,
    question: "Каков правильный порядок фаз начальной загрузки (Boot) Linux?",
    options: [
      "BIOS/UEFI -> Bootloader -> Kernel -> Init/Systemd",
      "Kernel -> BIOS -> Bootloader -> Init",
      "Bootloader -> Kernel -> BIOS -> Systemd",
      "Init -> Kernel -> Bootloader -> BIOS"
    ],
    answer: "BIOS/UEFI -> Bootloader -> Kernel -> Init/Systemd",
    explanation: "Прошивка (BIOS/UEFI) запускает загрузчик, который загружает ядро, а оно запускает первый процесс (PID 1)."
  },
  {
    id: 6,
    question: "Какая команда отображает историю сообщений ядра (кольцевой буфер)?",
    options: ["logshow", "dmesg", "kernellog", "syslog"],
    answer: "dmesg",
    explanation: "dmesg (display message) необходима для диагностики проблем с оборудованием, обнаруженных ядром."
  },
  {
    id: 7,
    question: "В systemd какой 'target' соответствует старому уровню выполнения 3 (многопользовательский текстовый режим)?",
    options: ["graphical.target", "rescue.target", "multi-user.target", "reboot.target"],
    answer: "multi-user.target",
    explanation: "multi-user.target — это стандартный режим для серверов без графического интерфейса (GUI)."
  },
  {
    id: 8,
    question: "Какая команда systemd позволяет переключиться на новую цель без перезагрузки?",
    options: ["systemctl change", "systemctl isolate", "systemctl switch", "systemctl jump"],
    answer: "systemctl isolate",
    explanation: "Команда isolate останавливает службы текущей цели и запускает службы новой выбранной цели."
  },
  {
    id: 9,
    question: "Как запросить немедленное выключение (halt) системы через командную строку?",
    options: ["shutdown -h now", "shutdown -r now", "shutdown -s now", "halt -wait"],
    answer: "shutdown -h now",
    explanation: "-h означает halt (остановка), а now указывает на немедленное выполнение."
  },
  {
    id: 10,
    question: "Какой конфигурационный файл определяет цель по умолчанию (default) в systemd?",
    options: ["/etc/systemd/system/default.target", "/etc/inittab", "/boot/grub/grub.cfg", "/etc/runlevel"],
    answer: "/etc/systemd/system/default.target",
    explanation: "Эта символическая ссылка указывает на цель, которую система должна автоматически загружать при старте."
  }
];
