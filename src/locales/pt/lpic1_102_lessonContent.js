// LPIC-1 102 Lesson Content — Portuguese
// Conteúdo das 20+ lições do exame 102

export const lpic1_102_lessonContent_pt = {
  // ──── Topic 105: Shells e Shell Scripting ────
  'lpic1-102-105-1': {
    title: "Personalizar o Ambiente Shell",
    comic: {
      title: 'A Tua Casa Digital 🏠',
      panels: [
        { emoji: '🎒', text: 'Arquivos de config: /etc/profile é para todos, ~/.bashrc é a tua mochila pessoal.' },
        { emoji: '🗺️', text: 'PATH: O mapa da shell. Se não estiver na lista, a shell não encontra o comando!' },
        { emoji: '🔦', text: 'Alias: ll=\'ls -la\'. Não escrevas quilômetros de código, usa atalhos.' },
        { emoji: '📦', text: '/etc/skel: O kit de primeiros socorros. Novos usuários recebem estes arquivos base.' },
      ]
    },
    keyPoints: [
      { title: 'Arquivos de Configuração', items: ['/etc/profile — Global (Login)', '~/.bashrc — Pessoal (Interativo)', '/etc/skel/ — Modelo para novos usuários'] },
      { title: 'Variáveis de Ambiente', items: ['export — Passa variável para os filhos', 'PATH — Onde procurar programas', 'env / printenv — Listar variáveis'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Escrever Scripts Simples",
    comic: {
      title: 'O Robô de Bash 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash. Diz ao kernel: "Ei, usa o Bash para isto!"' },
        { emoji: '🏃', text: 'Chmod +x: Sem permissão de execução, o teu script é apenas uma pedra.' },
        { emoji: '🔀', text: 'If/Then/Else: O cérebro do script. Toma decisões baseadas em testes.' },
        { emoji: '🔄', text: 'Loops (For/While): Repete uma tarefa 100 vezes sem te cansares.' },
      ]
    },
    keyPoints: [
      { title: 'Estrutura', items: ['#!/bin/bash — O Shebang', 'chmod +x script.sh — Crucial', 'exit [0-255] — Status de saída (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Olá $USER"', 
      output: 'Olá root' 
    },
  },

  // ──── Topic 106: Interfaces de Usuário e Desktops ────
  'lpic1-102-106-1': { title: "Instalar e Configurar X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "Desktops Gráficos", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Acessibilidade", terminal: { prompt: '$ orca --setup', output: '[Menu do Leitor de Ecrã]' } },

  // ──── Topic 107: Tarefas Administrativas ────
  'lpic1-102-107-1': { title: "Gerir Contas de Utilizador e Grupo", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "Automação (Cron e Timers)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Localização", terminal: { prompt: '$ locale', output: 'LANG=pt_PT.UTF-8' } },

  // ──── Topic 108: Serviços Essenciais do Sistema ────
  'lpic1-102-108-1': { title: "Sincronização de Horário (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Logging (Rsyslog e Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Mail MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'A fila de correio está vazia' } },
  'lpic1-102-108-4': { title: "Impressão (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'a impressora PDF está ociosa.' } },

  // ──── Topic 109: Fundamentos de Redes ────
  'lpic1-102-109-1': { title: "Protocolos de Internet (TCP/IP)", keyPoints: [{ title: 'Pilha', items: ['IPv4/IPv6 — Endereços', 'TCP/UDP — Transporte', 'ICMP — Diagnóstico'] }] },
  'lpic1-102-109-2': { title: "Configuração de Rede", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Resolução de Problemas de Rede", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "Configuração DNS", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Segurança ────
  'lpic1-102-110-1': { title: "Tarefas de Segurança", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "Segurança do Host", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Criptografia (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
