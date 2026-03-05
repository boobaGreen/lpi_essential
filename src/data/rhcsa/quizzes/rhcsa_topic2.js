// RHCSA Quiz — Topic 2: Shell Scripting (Italiano)
// 15 domande MCQ

export const rhcsaTopic2Quizzes = [
  // ─── Lezione 2.1: Variabili e Sintassi Bash (5 domande) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Come si dichiara una variabile in bash?',
    options: ['var $NOME = "valore"', 'NOME="valore"', '$NOME = "valore"', 'set NOME="valore"'],
    correct: 1,
    explanation: 'In bash le variabili si dichiarano senza spazi: NOME="valore". Il $ si usa solo per leggerle.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quale variabile speciale contiene il PID del processo bash corrente?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '$$ contiene il PID del processo corrente. $? = exit code, $0 = nome script, $! = PID ultimo background job.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Cosa fa `export VARIABILE="valore"`?',
    options: [
      'Crea una variabile locale allo script corrente',
      'Rende la variabile disponibile ai processi figli',
      'Salva la variabile in /etc/environment',
      'Elimina la variabile dopo l\'esecuzione dello script',
    ],
    correct: 1,
    explanation: 'export rende la variabile una variabile d\'ambiente, trasmessa ai processi figli.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quale syntax captura l\'output di un comando in una variabile?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Entrambe A e B sono corrette', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Sia il backtick `cmd` che $() catturano l\'output. $() è preferito perché annidabile e più leggibile.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Cosa stampa questo script?\n```bash\nNOME="mondo"\necho "Ciao ${NOME}!"\n```',
    options: ['Ciao ${NOME}!', 'Ciao mondo!', 'Ciao $NOME!', 'Errore: variabile non definita'],
    correct: 1,
    explanation: '${NOME} espande la variabile NOME tra doppie virgolette. Output: "Ciao mondo!"',
  },

  // ─── Lezione 2.2: Condizionali e Loop (6 domande) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando bash testa se un file esiste?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: '-e testa se il file esiste (qualsiasi tipo). -f testa se esiste ed è un file regolare.',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Cosa fa questo loop?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'Stampa: 123 su una riga',
      'Stampa: 1, 2, 3 su righe separate',
      'Errore di sintassi',
      'Esegue echo una volta con argomento "1 2 3"',
    ],
    correct: 1,
    explanation: 'Il for loop itera su ogni elemento. echo $i stampa ogni valore su una riga separata.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quale operatore confronta se due stringhe sono uguali in bash?',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'Sia A che C sono corrette'],
    correct: 3,
    explanation: 'In bash sia = che == funzionano per confrontare stringhe. -eq è per confrontare numeri interi.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Quale flag testa se una directory esiste?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: '-d testa se il path esiste ed è una directory. -f = file regolare, -e = qualsiasi tipo, -r = leggibile.',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Come si scrive un loop while che conta da 1 a 5?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'La sintassi while bash: inizializza la variabile, condizione [ $i -le 5 ], incremento ((i++)).',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Cosa controlla `[ -z "$VARIABILE" ]`?',
    options: [
      'Se la variabile è zero (0)',
      'Se la variabile è una stringa vuota',
      'Se la variabile è un numero',
      'Se la variabile esiste',
    ],
    correct: 1,
    explanation: '-z testa se la stringa ha lunghezza zero (è vuota). -n testa se è non vuota.',
  },

  // ─── Lezione 2.3: Parametri e Output (4 domande) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'In uno script bash, cosa contiene `$1`?',
    options: [
      'Il PID dello script',
      'Il primo argomento passato allo script',
      'Il nome dello script',
      'Il numero totale di argomenti',
    ],
    correct: 1,
    explanation: '$1 è il primo argomento posizionale. $0 = nome script, $# = numero argomenti, $@ = tutti gli argomenti.',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quale variabile speciale contiene il codice di uscita dell\'ultimo comando?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '$? contiene l\'exit code dell\'ultimo comando. 0 = successo, non-zero = errore.',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual è la differenza tra `$@` e `$*`?',
    options: [
      'Nessuna differenza, sono identici',
      '$@ preserva gli argomenti come parole separate, $* li unisce in una stringa',
      '$* preserva gli argomenti, $@ li unisce',
      '$@ contiene solo argomenti numerici',
    ],
    correct: 1,
    explanation: 'Con virgolette: "$@" → ogni argomento è separato, "$*" → tutti uniti in una stringa. Importante in loop.',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Come fai uno script che esce con errore (exit code 1) se non riceve argomenti?',
    options: [
      'if [ $# -eq 0 ]; then echo "Errore"; fi',
      'if [ $# -eq 0 ]; then echo "Errore" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'Best practice: messaggio su stderr (>&2), poi exit 1. Così il chiamante può rilevare l\'errore con $?.',
  },
]
