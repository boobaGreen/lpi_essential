export const rhcsaExtendedContentZH = {
  'rhcsa-1-1': {
    title: '深度解析：高级重定向与文件描述符',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Linux 中的文件描述符' },
      { type: 'paragraph', text: '在 Linux 中“一切皆文件”，包括输入/输出流。默认情况下，每个进程都有三个打开的标准文件描述符（FD）：' },
      { type: 'table', headers: ['FD', '名称', '标准用途'], rows: [
        ['0', 'stdin', '键盘输入标准源'],
        ['1', 'stdout', '终端输出（成功日志）'],
        ['2', 'stderr', '终端输出（错误或警告信息）'],
      ]},
      { type: 'code', title: '组合操作', prompt: '# 用标准输出覆盖文件，但把错误全数丢进黑洞中\n$ command > output.txt 2> /dev/null\n\n# 非常正规地把 stderr 引向 stdout (2>&1)，最后一起引向磁盘文件\n$ command > output.txt 2>&1\n\n# Bash 中最受极客欢迎的偷懒缩写\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: '考试神技', content: '当在全盘如 find / 搜索时会跳出满屏血红的 "Permission denied" 拒绝访问。只要随手在末尾带上 "2> /dev/null" 即可净化世界，只留真理。' }
    ]
  },
  'rhcsa-4-2': {
    title: '深度解析：LVM 卷管理器解剖',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: '物理和逻辑的对立统一' },
      { type: 'paragraph', text: '逻辑卷管理 (LVM) 就是在物理硬盘（死板定死）和文件系统（灵便）之间插入了一个不可思议的弹性水库，让容量伸缩再也不是噩梦。' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'LVM 这面墙里头的标准物理实体砖块（默认 4MB 大小一块）。' },
        { term: 'Logical Element (LE)', desc: '一般情况下一块物理砖（PE）就精确绑定一块逻辑砖（LE）。除非你是在搞高端的阵列镜像。' },
      ]},
      { type: 'infobox', variant: 'exam', content: '红帽考官最爱考的考法：如果题目刁难你非得建立一个以特定 PE（比如 16M）为碎块大小的 Volume Group (VG)，千万记得加上参数指令："vgcreate -s 16M vgname /dev/sdb1"。' }
    ]
  },
  'rhcsa-9-1': {
    title: '深度解析：降伏 SELinux',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: '标准排障流程三板斧' },
      { type: 'paragraph', text: '一个好端端的进程跑着跑着就死球了而且找不到普通权限错误，怎么定罪 SELinux？' },
      { type: 'timeline', events: [
        { year: '第1斧', title: '定性验证', desc: '先盲切一记 "setenforce 0" 把安检关机，然后立马重启一下那出问题的服务。如果它瞬间活了，100% 就是 SELinux 干的好事。定性完毕后再 "setenforce 1" 开回来等待后续医治。' },
        { year: '第2斧', title: '顺藤摸瓜', desc: '直奔老巢 /var/log/audit/audit.log 去找 "denied"。嫌不够极客就用 "ausearch -m AVC -ts recent" 精准打击。' },
        { year: '第3斧', title: 'AI送药', desc: '绝对不要自己猜。请利用工具 "sealert -a /var/log/audit/audit.log"。它不仅详细帮你翻译人话，更是直接在末尾丢出包治百病的一行命令（比如让你开某个布尔值，或是补某个字典路径标）。照着复制粘贴即可！' },
      ]},
    ]
  }
}
