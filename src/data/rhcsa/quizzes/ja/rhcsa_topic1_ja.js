// RHCSA Quiz — Topic 1: Essential Tools (日本語)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesJA = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '標準出力と標準エラー出力の両方を同じファイルにリダイレクトする演算子はどれですか？',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> は、標準出力（ファイルディスクリプタ 1）と標準エラー（ファイルディスクリプタ 2）の両方を同じファイルにリダイレクトします。',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'コマンド `ls -la /etc >> /tmp/output.txt` は何をしますか？',
    options: [
      '/tmp/output.txt を /etc の内容で上書きする',
      'ls の出力を /tmp/output.txt の末尾に追記する',
      'ls のエラーを /tmp/output.txt にリダイレクトする',
      '/etc と /tmp/output.txt の間にハードリンクを作成する',
    ],
    correct: 1,
    explanation: '>> は、ファイルを上書きせずに、その末尾に出力を追記（アペンド）します。',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '`find / -name "*.log"` を実行する際、「Permission denied（許可がありません）」というエラーメッセージだけを見えないようにするには、どのコマンドを使用しますか？',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null は標準エラー（ファイルディスクリプタ 2）を /dev/null にリダイレクトし、エラーメッセージだけを破棄します。',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '`ps aux | grep httpd` におけるパイプ `|` の役割は何ですか？',
    options: [
      'ps aux の出力を "grep httpd" という名前のファイルに保存する',
      'ps aux の標準出力を grep httpd の標準入力として渡す',
      'ps aux と grep httpd を並列に独立して実行する',
      'ps aux のエラー出力を grep にリダイレクトする',
    ],
    correct: 1,
    explanation: 'パイプ | は、最初のコマンドの標準出力を次のコマンドの標準入力に接続し、データの受け渡し（パイピング）を可能にします。',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '標準出力と標準エラーの両方を /dev/null に送り、完全に沈黙させるコマンドはどれですか？',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null がまず標準出力をリダイレクトし、その後に 2>&1 が標準エラーを標準出力と同じ場所（/dev/null）にリダイレクトします。&>/dev/null と同等です。',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '標準エラー出力（stderr）に対応するファイルディスクリプタの番号はどれですか？',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: '標準ファイルディスクリプタは次の通りです。0=標準入力(stdin)、1=標準出力(stdout)、2=標準エラー(stderr)。',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '`/dev/null` は何を表していますか？',
    options: [
      'テキストのみを含むことができる空のファイル',
      '受け取ったデータをすべて静かに破棄する特殊なデバイス',
      'カーネルのログファイル',
      'ホームディレクトリへのシンボリックリンク',
    ],
    correct: 1,
    explanation: '/dev/null は入力されたデータをすべて跡形もなく消去する特殊なデバイス（ヌルデバイス / ブラックホール）です。',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '出力を画面で確認しつつ、同時にファイルにも保存するために、`tee` コマンドをどのように使用しますか？',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` は標準入力からデータを読み取り、それを標準出力（画面）と指定されたファイルの両方に書き込みます。パイプの中で非常に有用です。',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '大文字と小文字を区別せずに検索を行う grep のオプションはどれですか？',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) オプションを使用すると大文字・小文字を無視します。例: `grep -i "error" file`',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '/etc/passwd ファイルから "nologin" を「含まない」行だけを表示するコマンドはどれですか？',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) オプションは、指定したパターンに一致しない行だけを表示（反転マッチ）します。',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '正規表現において、パターン `^root` は何にマッチしますか？',
    options: [
      '行のどこかにある "root" という単語',
      '"root" から始まる行',
      '"root" で終わる行',
      '任意の文字に続く "root"',
    ],
    correct: 1,
    explanation: '^ (キャレット) は行の先頭を示すアンカーです。したがって `^root` は "root" で始まる行のみにマッチします。',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'パターンに一致した「行の数」だけを出力する grep のオプションはどれですか？',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) オプションは、マッチした行の内容を出力する代わりに、マッチした行の総数（カウント数）だけを出力します。',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '拡張正規表現 (Extended Regular Expressions) を使用するコマンドはどれですか？',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '-E (または egrep) を使用すると拡張正規表現が有効になり、+, ?, |, () などのメタ文字をエスケープなしで使用できます。',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '「数字から始まる行」を見つける grep コマンドはどれですか？',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = 行の先頭、`[0-9]` = 任意の１桁の数字。これらを組み合わせることで「数字で始まる行」を探します。',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'すべてのサブディレクトリを含めて再帰的に検索を行うオプションはどれですか？',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) は、指定ディレクトリ以下のすべてのファイルとサブディレクトリを再帰的に検索します。/etc などでの一括検索に便利です。',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '`rwxr-xr-x` のアクセス権限を表す8進数表記はどれですか？',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=4+2+1=7、r-x=4+0+1=5、r-x=5。したがって 755 になります。これは実行可能ファイルや公開ディレクトリの標準的な権限です。',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '/tmp/ ディレクトリの下に /etc/hosts へのシンボリックリンクを作成するコマンドはどれですか？',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s` でシンボリックリンク（ソフトリンク）を作成します。-s を付けないとハードリンクになります。',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'ハードリンクとシンボリックリンクの主な違いは何ですか？',
    options: [
      'シンボリックリンクはハードリンクよりも高速である',
      'ハードリンクは同じ inode を共有するが、シンボリックリンクはパスを指し示す単なる別ファイルである',
      'ハードリンクはファイルシステムをまたいで機能するが、シンボリックリンクは機能しない',
      'シンボリックリンクは通常のファイルを指し示すことができない',
    ],
    correct: 1,
    explanation: 'ハードリンクは対象と同じ inode を共有するため、同じファイルシステム内に限られます。シンボリックリンクは対象パスへの文字列ショートカットであり、ファイルシステムをまたげます。',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '他のユーザーの権限には触れず、ファイルの所有者（ユーザー）にのみ実行権限を追加するコマンドはどれですか？',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`chmod u+x` (User + eXecute) は所有者にのみ実行権限を追加します。a+x (+x のみも同じ) は全員に対して追加してしまいます。',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'ファイルの所有ユーザーと所有グループを同時に変更するコマンドはどれですか？',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown user:group file` という書式を使うと、1回のコマンドで所有者とグループの両方を一気に変更できます。',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '/home/mario ディレクトリから、gzip で圧縮された `backup.tar.gz` という名前の tar アーカイブを作成するコマンドはどれですか？',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'c=create(作成), z=gzip(圧縮), v=verbose(詳細表示), f=file(ファイル名指定)。したがって `tar -czvf アーカイブ名 元ディレクトリ` になります。',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'bzip2 圧縮を使用するための tar のフラグはどれですか？',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: '圧縮形式のフラグ: j = bzip2 (.tar.bz2), z = gzip (.tar.gz), J = xz (.tar.xz)。',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'ディレクトリを移動（cd）せずに、tar.gz アーカイブを /opt/ ディレクトリ直下に展開（解凍）するにはどうしますか？',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: '-C (Change directory) オプションを使用すると、tar は展開処理の直前に指定されたディレクトリに作業場所を移動します。',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'passwd のセクション 5 (設定ファイルフォーマットに関するマニュアル) はどのコマンドで表示できますか？',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man ページ番号 コマンド名` と指定します。セクション 1 はユーザーコマンド、セクション 5 は設定ファイル形式、セクション 8 はシステム管理コマンドです。',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'RPM パッケージとともにインストールされる各種ドキュメント（README、サンプル設定ファイルなど）は通常どこに保存されますか？',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: '/usr/share/doc/ ディレクトリ内には、インストールソフトウェアに関連するドキュメントや有益なサンプルファイルがパッケージごとに保存されます。',
  },
]
