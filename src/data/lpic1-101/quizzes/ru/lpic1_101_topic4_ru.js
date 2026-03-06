// LPIC-1 101 — Topic 104: Устройства, файловые системы, FHS — Quiz RU

export const lpic1_101_topic4_ru = [
  {
    id: 1,
    question: "Какая команда используется для создания файловой системы Ext4 в разделе?",
    options: ["fdisk", "mkfs.ext4", "fsck", "mount"],
    answer: "mkfs.ext4",
    explanation: "mkfs (make filesystem) — это команда, которая форматирует раздел с нужной структурой."
  },
  {
    id: 2,
    question: "Какая команда проверяет и пытается восстановить ошибки в файловых системах Linux?",
    options: ["fdisk", "df", "fsck", "tune2fs"],
    answer: "fsck",
    explanation: "fsck (filesystem check) — инструмент диагностики для поврежденных разделов."
  },
  {
    id: 3,
    question: "Какой конфигурационный файл определяет автоматическое монтирование дисков при загрузке системы?",
    options: ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/etc/mount.conf"],
    answer: "/etc/fstab",
    explanation: "Файл fstab (filesystem table) жизненно важен для корректной загрузки ОС."
  },
  {
    id: 4,
    question: "Какой идентификатор рекомендуется использовать в fstab вместо имен устройств типа /dev/sda1?",
    options: ["LABEL", "ID", "UUID", "SERIAL"],
    answer: "UUID",
    explanation: "UUID уникален и не меняется при смене кабелей или порядка оборудования."
  },
  {
    id: 5,
    question: "Какая команда отображает используемое и свободное место на диске в понятном формате (GB/MB)?",
    options: ["du -sh", "df -h", "ls -l", "free -m"],
    answer: "df -h",
    explanation: "df (disk free) показывает сводку по всем смонтированным разделам."
  },
  {
    id: 6,
    question: "Восьмеричное право доступа 755 для файла означает:",
    options: [
      "Владелец имеет полные права, группа и остальные — только чтение и выполнение",
      "Все имеют полные права",
      "Только владелец может читать и записывать",
      "Никто не может выполнять файл"
    ],
    answer: "Владелец имеет полные права, группа и остальные — только чтение и выполнение",
    explanation: "7 (rwx) для владельца, 5 (r-x) для группы и остальных."
  },
  {
    id: 7,
    question: "Какой специальный бит позволяет исполняемому файлу запускаться с правами владельца файла (root)?",
    options: ["Sticky Bit", "SGID", "SUID", "Umask"],
    answer: "SUID",
    explanation: "SUID (Set User ID) часто используется в команде 'passwd'."
  },
  {
    id: 8,
    question: "Какая команда создает символическую ссылку (soft link) между двумя именами файлов?",
    options: ["ln", "ln -s", "cp -l", "link"],
    answer: "ln -s",
    explanation: "-s (symbolic) создает указатель, в отличие от жесткой ссылки (hard link), которая указывает на inode."
  },
  {
    id: 9,
    question: "Согласно FHS (Filesystem Hierarchy Standard), где должны находиться основные исполняемые файлы системы?",
    options: ["/home", "/var", "/bin", "/tmp"],
    answer: "/bin",
    explanation: "/bin и /usr/bin содержат фундаментальные инструменты (ls, cp и т. д.)."
  },
  {
    id: 10,
    question: "Какой специальный бит в каталоге (напр., /tmp) мешает пользователям удалять чужие файлы?",
    options: ["SUID", "SGID", "Sticky Bit", "Immutable bit"],
    answer: "Sticky Bit",
    explanation: "Sticky bit ограничивает удаление только владельцем файла или root."
  }
];
