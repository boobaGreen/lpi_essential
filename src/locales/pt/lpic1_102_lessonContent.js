export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "Personalizar o Ambiente da Shell",
    content: `
Personalizar o ambiente da shell permite otimizar o fluxo de trabalho. Os arquivos de configuração são carregados ao iniciar a shell.

### Arquivos de Configuração (Bash)
- **/etc/profile**: Configuração global (shell de login).
- **/etc/bash.bashrc**: Configuração global (shell interativa sem login).
- **~/.bash_profile**, **~/.profile**: Configurações específicas do usuário.
- **~/.bashrc**: Arquivo mais usado para aliases e variáveis pessoais.

### Variáveis e Aliases
- **export**: Torna uma variável disponível para processos filhos.
- **PATH**: Define diretórios onde a shell procura executáveis.
- **alias**: Cria atalhos para comandos complexos (\`alias ll='ls -la'\`).

### Diretório Skeleton
- **/etc/skel/**: Contém arquivos padrão copiados para o home de novos usuários.
    `
  },
  '105.2': {
    title: "Personalizar ou Escrever Scripts Simples",
    content: `
Shell scripting automatiza tarefas repetitivas.

### Estrutura do Script
- **Shebang (#!)**: A primeira linha indica o interpretador (ex: \`#!/bin/bash\`).
- **Permissões**: O script deve ser executável (\`chmod +x script.sh\`).

### Operadores Lógicos
- **&&**: Executa o segundo comando apenas se o primeiro tiver sucesso.
- **||**: Executa o segundo comando apenas se o primeiro falhar.
    `
  },

  // --- TOPIC 106 ---
  '106.1': {
    title: "Instalar e Configurar X11",
    content: `
X11 é o framework base para interfaces gráficas no Linux.

### Arquitetura
- **Servidor X**: Gerencia o hardware (display, teclado, mouse).
- **Cliente X**: A aplicação gráfica.
- **Wayland**: Sucessor moderno do X11, mais simples e seguro.

### Utilitários
- **xdpyinfo**: Informações sobre o servidor X.
- **DISPLAY**: Variável que indica para onde enviar a saída gráfica.
    `
  },

  // --- TOPIC 107 ---
  '107.1': {
    title: "Gerenciar Contas de Usuários e Grupos",
    content: `
- **/etc/passwd**: Informações de contas.
- **/etc/shadow**: Hashes de senhas (leitura apenas por root).
- **id**: Mostra UID e GIDs.
- **useradd / usermod / userdel**: Gestão de usuários.
    `
  },

  // --- TOPIC 108 ---
  '108.1': {
    title: "Manter a Hora do Sistema",
    content: `
- **hwclock**: Gerencia o relógio de hardware (RTC).
- **NTP**: Protocolo de sincronização via rede.
    `
  },
  '108.2': {
    title: "Registro do Sistema",
    content: `
- **rsyslog**: Logging tradicional.
- **journald**: Logging binário do systemd.
    `
  },

  // --- TOPIC 109 ---
  '109.1': {
    title: "Fundamentos de Rede",
    content: `
- **IPv4 / IPv6**: Endereçamento de rede.
- **TCP / UDP**: Protocolos de transporte.
    `
  },
  '109.2': {
    title: "Configuração Persistente",
    content: `
- **NetworkManager**: nmcli/nmtui.
- **Netplan**: Configuração YAML (Ubuntu).
- **ip addr**: Exibe endereços IP.
    `
  },

  // --- TOPIC 110 ---
  '110.1': {
    title: "Administração de Segurança",
    content: `
- **SUID/SGID**: Permissões especiais.
- **Sticky Bit**: Proteção de exclusão em /tmp.
- **sudo**: Executa comandos com privilégios de root.
    `
  }
};
