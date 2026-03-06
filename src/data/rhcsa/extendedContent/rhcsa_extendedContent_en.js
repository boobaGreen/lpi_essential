export const rhcsaExtendedContentEN = {
  'rhcsa-1-1': {
    title: 'Deep Dive: Advanced Redirection and Descriptors',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'File Descriptors in Linux' },
      { type: 'paragraph', text: 'In Linux "everything is a file", including input/output streams. Every process has three default file descriptors (FD) open:' },
      { type: 'table', headers: ['FD', 'Name', 'Standard Purpose'], rows: [
        ['0', 'stdin', 'Keyboard input'],
        ['1', 'stdout', 'Terminal output (success)'],
        ['2', 'stderr', 'Terminal output (errors)'],
      ]},
      { type: 'code', title: 'Combined Redirection', prompt: '# Writes stdout to file and discards stderr\n$ command > output.txt 2> /dev/null\n\n# Redirects stderr to stdout (2>&1), and then stdout to file\n$ command > output.txt 2>&1\n\n# Bash shortcut for stderr+stdout to file\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Exam Tip', content: 'When using find / or commands that generate a lot of "Permission denied" errors, append "2> /dev/null" to get a clean output with only the actual matches.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Deep Dive: LVM Architecture',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Physical vs Logical' },
      { type: 'paragraph', text: 'The Logical Volume Manager (LVM) adds a layer of abstraction between physical disks and filesystems, allowing for flexibility impossible with traditional partitions.' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'The fundamental building blocks of LVM (default 4MB). A PV is divided into PEs.' },
        { term: 'Logical Element (LE)', desc: 'Map 1:1 onto PEs (or 1:N in mirror scenarios).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'In the exam, you might need to create a VG with a specific PE size (e.g. 16MB) using "vgcreate -s 16M vgname /dev/sdb1".' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Deep Dive: SELinux Troubleshooting',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Troubleshooting Workflow' },
      { type: 'paragraph', text: 'SELinux is blocking a service. What to do?' },
      { type: 'timeline', events: [
        { year: 'Step 1', title: 'Verify if it is SELinux', desc: 'Run "setenforce 0" and restart the service. If it works, SELinux is the culprit. Re-enable it with "setenforce 1".' },
        { year: 'Step 2', title: 'Check the logs', desc: 'Look at /var/log/audit/audit.log looking for "denied" messages: ausearch -m AVC -ts recent' },
        { year: 'Step 3', title: 'Generate solutions', desc: 'Use audit2allow or sealert. "sealert -a /var/log/audit/audit.log" will give you the exact command to fix the issue (e.g. setsebool or semanage fcontext).' },
      ]},
    ]
  }
}
