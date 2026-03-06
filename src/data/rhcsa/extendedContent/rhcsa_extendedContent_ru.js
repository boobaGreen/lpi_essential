export const rhcsaExtendedContentRU = {
  'rhcsa-1-1': {
    title: 'Глубокое погружение: Расширенное перенаправление и дескрипторы',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Файловые дескрипторы в Linux' },
      { type: 'paragraph', text: 'В Linux "все является файлом", включая потоки ввода/вывода. Каждый процесс по умолчанию имеет три открытых файловых дескриптора (FD):' },
      { type: 'table', headers: ['FD', 'Имя', 'Стандартное назначение'], rows: [
        ['0', 'stdin', 'Клавиатурный ввод'],
        ['1', 'stdout', 'Вывод терминала (успех)'],
        ['2', 'stderr', 'Вывод терминала (ошибки)'],
      ]},
      { type: 'code', title: 'Комбинированные перенаправления', prompt: '# Записывает stdout в файл и отбрасывает stderr\n$ command > output.txt 2> /dev/null\n\n# Перенаправляет stderr в stdout (2>&1), а затем stdout в файл\n$ command > output.txt 2>&1\n\n# Сокращение в Bash для stderr+stdout в файл\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Совет для экзамена', content: 'При использовании find / или команд, генерирующих много ошибок "Permission denied", добавляйте "2> /dev/null", чтобы получить чистый вывод только с реальными совпадениями.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Глубокое погружение: Архитектура LVM',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Физическое против Логического' },
      { type: 'paragraph', text: 'Менеджер логических томов (LVM) добавляет уровень абстракции между физическими дисками и файловыми системами, обеспечивая гибкость, невозможную при использовании традиционных разделов.' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'Фундаментальные строительные блоки LVM (по умолчанию 4MB). PV делится на PE.' },
        { term: 'Logical Element (LE)', desc: 'Отображаются 1:1 на PE (или 1:N в сценариях зеркалирования).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'На экзамене вам может потребоваться создать VG с определенным размером PE (например, 16MB), используя команду: "vgcreate -s 16M vgname /dev/sdb1".' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Глубокое погружение: Устранение неполадок SELinux',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Рабочий процесс устранения неполадок' },
      { type: 'paragraph', text: 'SELinux блокирует службу. Что делать?' },
      { type: 'timeline', events: [
        { year: 'Шаг 1', title: 'Проверьте, виноват ли SELinux', desc: 'Выполните "setenforce 0" и перезапустите службу. Если работает, виноват SELinux. Включите его снова с помощью "setenforce 1".' },
        { year: 'Шаг 2', title: 'Проверьте логи', desc: 'Посмотрите /var/log/audit/audit.log в поисках сообщений "denied": ausearch -m AVC -ts recent' },
        { year: 'Шаг 3', title: 'Сгенерируйте решения', desc: 'Используйте audit2allow или sealert. "sealert -a /var/log/audit/audit.log" выдаст точную команду для исправления проблемы (например, setsebool или semanage fcontext).' },
      ]},
    ]
  }
}
