// ─── Course Registry ───────────────────────────────────────────────────────
// Add a new course here to make it appear in the CoursePicker.

export const COURSES = {
  'lpi-010': {
    id: 'lpi-010',
    name: 'LPI Linux Essentials',
    code: '010-160',
    icon: '🐧',
    color: '#00b4ff',        // neon-blue
    topicCount: 5,
    available: true,
    description: 'Fondamentali di Linux: FOSS, file system, comandi base, sicurezza.',
    tags: ['Linux', 'FOSS', 'CLI', 'LPI'],
  },
  'rhcsa': {
    id: 'rhcsa',
    name: 'RHCSA',
    code: 'EX200',
    icon: '🎯',
    color: '#ee0000',        // Red Hat red
    topicCount: 10,
    available: true,
    description: 'Red Hat Certified System Administrator: storage, rete, SELinux, container.',
    tags: ['Linux', 'RHEL', 'SysAdmin', 'Red Hat', 'EX200'],
    disclaimer: 'practical-exam',   // flag: mostra disclaimer "esame pratico"
  },
  'lpic-1': {
    id: 'lpic-1',
    name: 'LPIC-1',
    code: '101-500 / 102-500',
    icon: '🛡️',
    color: '#a855f7',        // neon-purple
    topicCount: 0,
    available: false,
    description: 'Amministrazione di sistema Linux: boot, pacchetti, rete, shell scripting.',
    tags: ['Linux', 'SysAdmin', 'LPIC'],
  },
  'lpic-2': {
    id: 'lpic-2',
    name: 'LPIC-2',
    code: '201-450 / 202-450',
    icon: '🚀',
    color: '#ff8c00',        // neon-orange
    topicCount: 0,
    available: false,
    description: 'Linux avanzato: kernel, storage, networking avanzato, server.',
    tags: ['Linux', 'Advanced', 'LPIC'],
  },
}

export const COURSES_LIST = Object.values(COURSES)

export const DEFAULT_COURSE_ID = 'lpi-010'
