// RHCSA Quiz — Topic 2: Shell Scripting (日本語)
// 15 MCQ questions

export const rhcsaTopic2QuizzesJA = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'bashスクリプトにおいて、変数はどのように宣言しますか？',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'bashにおける変数代入では、等号（=）の左右にスペースを入れてはいけません：`NAME="value"`。変数を読み取る（展開する）時にのみ `$` を使用します。',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '現在実行中のシェル（bash）プロセスのプロセスID (PID) は、どの特殊変数に格納されていますか？',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '`$$` は現在のプロセスのPIDを保持します。`$?` は直前のコマンドの終了ステータス、`$0` はスクリプト自身の名前、`$!` は最後にバックグラウンドで実行されたプロセスのPIDです。',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'コマンド `export VARIABLE="value"` はどのような働きをしますか？',
    options: [
      '現在のスクリプト内でのみ有効なローカル変数を作成する',
      '変数を環境変数にし、子プロセス（サブシェル）に引き継がせる',
      '変数を /etc/environment ファイルに永続的に保存する',
      'スクリプト実行直後に変数をメモリから削除する',
    ],
    correct: 1,
    explanation: '`export` を使用すると、その変数は環境変数としてマークされ、後から起動されるすべての子プロセスから参照可能になります。',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'コマンドの実行結果（標準出力）を変数に代入するための正しい構文はどれですか？',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'A と B のどちらも正しい', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'バッククォート `` `cmd` `` と `$()` の両方がコマンド置換（サブシェル展開）を行います。ただし、モダンなスクリプトではネスティングが可能で可読性の高い `$()` が推奨されています。',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '以下のスクリプトは何を出力しますか？\n```bash\nNAME="world"\necho "Hello ${NAME}!"\n```',
    options: ['Hello ${NAME}!', 'Hello world!', 'Hello $NAME!', 'エラー：変数が未定義です'],
    correct: 1,
    explanation: 'ダブルクォーテーション `""` の内部では変数の展開が行われます。`${NAME}` は "world" に置き換わるため、出力は `Hello world!` となります。',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'ファイルが「存在するかどうか」を確認する bash の test 条件式はどれですか？',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: '`-e` (exists) はファイルやディレクトリが（種類を問わず）存在するかどうかをテストします。`-f` (file) はそれが「通常のファイル」であるかどうかも含めてテストします。',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '以下のループは何を実行しますか？\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      '改行なしで 123 と出力する',
      '改行を挟んで 1、2、3 と別々の行に出力する',
      'シンタックスエラーを返す',
      '引数 "1 2 3" を一度だけ echo に渡す',
    ],
    correct: 1,
    explanation: 'forループはリストの各要素に対し1回ずつ実行されます。`echo $i` は毎回実行され、暗黙的に最後に改行が追加されるため、別々の行に出力されます。',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'bash のテスト構文 `[ ... ]` 内で、2つの「文字列」が等しいかどうかを比較する演算子はどれですか？',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'A と C の両方が正しい'],
    correct: 3,
    explanation: '文字列比較について、POSIX準拠の古いシェルでは `=` のみが正解ですが、bashでは `=` と `==` の両方が文字列の同値比較として完全に有効です。`-eq` は整数の比較にのみ使用します。',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'パスが存在し、かつそれが「ディレクトリ」であるかどうかをテストするオプションフラグはどれですか？',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: '`-d` (directory) はパスがディレクトリであることを確認します。`-f` は通常ファイル、`-e` は任意のエンティティ、`-r` は読み取り可能権限の有無をテストします。',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '1から5までをカウントアップする `while` ループの正しい構文はどれですか？',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Bash本来の while ループでは：ループ前に初期化 `i=1` を行い、条件式 `[ $i -le 5 ]` で判定し、ブロック内で算術展開によるインクリメント `((i++))` を実行します。',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '条件式 `[ -z "$VARIABLE" ]` は何をチェックしていますか？',
    options: [
      '変数の値が数値のゼロ (0) であるか',
      '変数の値の文字列長がゼロである（空文字・未定義）か',
      '変数の値が数値として評価可能か',
      '変数自体がシステムに存在しているか',
    ],
    correct: 1,
    explanation: '`-z` (zero length) は文字列の長さが 0 であるか（空文字か）をテストします。逆の条件、つまり文字列が空ではないことをテストするには `-n` (non-zero length) を使用します。',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'bashスクリプトにおいて、変数 `$1` には何が格納されますか？',
    options: [
      'スクリプト自身のPID',
      'スクリプトの実行時に渡された第1引数（最初のパラメータ）',
      'スクリプト自身のファイル名',
      '引数の総数',
    ],
    correct: 1,
    explanation: '`$1`, `$2`, `$3` はコマンドラインから渡された位置パラメータ（引数）です。`$0` にはスクリプト名そのものが入り、`$#` には引数の総数が格納されます。',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '「直前に実行されたコマンドの終了コード (Exit Code / Return Code)」が格納される特殊変数はどれですか？',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '`$?` に直前のコマンドの終了ステータスが格納されます。0 が格納されていれば成功（エラーなし）、0以外（1〜255）なら何らかのエラーとして判定します。',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '位置パラメータを一括で参照する `$@` と `$*` の違いは何ですか？',
    options: [
      '違いは全くなく、完全に同一である',
      'ダブルクォートで囲んだ時、`$@` は個別の引数を保持するが、`$*` はすべてを繋げた1つの巨大な文字列にする',
      'ダブルクォートで囲んだ時、`$*` は個別の引数を保持するが、`$@` はすべてを繋げる',
      '`$@` は数値引数のみを保持し、`$*` は文字列引数のみを保持する',
    ],
    correct: 1,
    explanation: '両者をダブルクォーテーションで囲んだ場合、`"$@"` は `"arg1" "arg2"` のように独立した要素を展開し、forループで安全に回せます。`"$*"` は `"arg1 arg2"` という単一の繋がった文字列パラメータに変換します。',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'スクリプトの実行時、引数が全く渡されなかった場合に、「エラーメッセージを出力し、異常終了コード 1 でスクリプトを即時停止させる」ための最適な記述はどれですか？',
    options: [
      'if [ $# -eq 0 ]; then echo "Error"; fi',
      'if [ $# -eq 0 ]; then echo "Error" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: '引数がない (`$# -eq 0`) 場合のベストプラクティスは、エラーメッセージを標準エラー出力 (`>&2`) に送り、明示的に `exit 1` を呼んでスクリプトを異常終了させることです。これにより呼び出し元で `$?` のチェックが可能になります。',
  },
]
