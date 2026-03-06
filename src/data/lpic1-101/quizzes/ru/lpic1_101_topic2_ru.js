// LPIC-1 101 — Topic 102: Установка и управление пакетами — Quiz RU

export const lpic1_101_topic2_ru = [
  {
    id: 1,
    question: "Каков предел основных разделов в таблице разделов MBR (Master Boot Record)?",
    options: ["2", "4", "128", "Без ограничений"],
    answer: "4",
    explanation: "MBR допускает максимум 4 основных раздела. Чтобы иметь больше, необходимо использовать расширенный раздел."
  },
  {
    id: 2,
    question: "Какая современная технология поддерживает разделы более 2 ТБ и до 128 основных разделов?",
    options: ["MBR", "LVM", "GPT", "FAT32"],
    answer: "GPT",
    explanation: "GPT (GUID Partition Table) — современный стандарт, используемый в системах UEFI."
  },
  {
    id: 3,
    question: "Почему на сервере рекомендуется отделять раздел /var от корня (/)?",
    options: [
      "Он содержит системные бинарные файлы",
      "Он содержит растущие файлы (логи/почта), которые могут переполнить диск",
      "Там пользователи хранят свои документы",
      "Он необходим для загрузчика GRUB"
    ],
    answer: "Он содержит растущие файлы (логи/почта), которые могут переполнить диск",
    explanation: "Отделение /var гарантирует, что бесконтрольные лог-файлы не заблокируют корневую систему."
  },
  {
    id: 4,
    question: "Какая команда устанавливает GRUB на первый жесткий диск (MBR)?",
    options: ["grub-mkconfig", "grub-install /dev/sda", "update-grub", "grub-setup"],
    answer: "grub-install /dev/sda",
    explanation: "grub-install записывает базовый код загрузчика в Master Boot Record физического диска."
  },
  {
    id: 5,
    question: "Какая команда выводит список общих библиотек (.so), необходимых для исполняемого файла?",
    options: ["ldd", "ldconfig", "lsmod", "apt show"],
    answer: "ldd",
    explanation: "Команда ldd (list dynamic dependencies) отображает карту необходимых библиотек."
  },
  {
    id: 6,
    question: "В Debian/Ubuntu в чем основная разница между 'remove' и 'purge' в dpkg?",
    options: [
      "Remove удаляет всё, Purge только бинарный файл",
      "Purge удаляет бинарный файл и файлы настроек (/etc), Remove только бинарный файл",
      "Между ними нет разницы",
      "Purge скачивает пакет из интернета"
    ],
    answer: "Purge удаляет бинарный файл и файлы настроек (/etc), Remove только бинарный файл",
    explanation: "Purge — это полное удаление приложения вместе с его локальными настройками."
  },
  {
    id: 7,
    question: "Какая команда APT обновляет списки каталогов и версии из репозиториев?",
    options: ["apt upgrade", "apt update", "apt dist-upgrade", "apt search"],
    answer: "apt update",
    explanation: "Update синхронизирует локальные файлы репозиториев с актуальными данными из интернета."
  },
  {
    id: 8,
    question: "Какая команда RPM сообщает, к какому пакету принадлежит файл в системе (напр., /bin/ls)?",
    options: ["rpm -ql", "rpm -qa", "rpm -qf", "rpm -p"],
    answer: "rpm -qf",
    explanation: "Флаг -f (file) выполняет обратный запрос для поиска владельца исходного файла."
  },
  {
    id: 9,
    question: "Какой файл содержит список официальных репозиториев в Debian/Ubuntu?",
    options: ["/etc/yum.repos.d/", "/etc/apt/sources.list", "/boot/grub/grub.cfg", "/etc/dpkg.cfg"],
    answer: "/etc/apt/sources.list",
    explanation: "sources.list определяет, откуда команда apt должна скачивать пакеты."
  },
  {
    id: 10,
    question: "В Fedora/RHEL какая современная команда заменила YUM для управления пакетами?",
    options: ["apt", "dnf", "zypper", "pacman"],
    answer: "dnf",
    explanation: "DNF (Dandified YUM) — более быстрая и чистая эволюция менеджера YUM."
  }
];
