// RHCSA Quiz — Topic 2: Shell Scripting (Spanish)
// 15 MCQ questions

export const rhcsaTopic2QuizzesES = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Cómo declaras una variable local en bash?',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'En bash, las variables se declaran sin espacios: NAME="value". El símbolo $ solo se usa al leerlas.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué variable especial contiene el PID del proceso bash actual?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '$$ contiene el PID del bash actual. $? = código de salida, $0 = nombre del script, $! = PID del último trabajo en segundo plano.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué hace `export VARIABLE="value"`?',
    options: [
      'Crea una variable estrictamente local para el script actual',
      'Hace que la variable esté disponible para los procesos hijo',
      'Guarda la variable en /etc/environment permanentemente',
      'Elimina la variable después de que termine el script',
    ],
    correct: 1,
    explanation: 'export convierte la variable en una variable de entorno, heredada por los subprocesos.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué sintaxis captura la salida de un comando hacia una variable?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Tanto A como B son correctas', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Ambas opciones, tildes invertidas `cmd` y $() capturan la salida. Se prefiere $() porque permite anidamiento y es más legible.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Qué imprime este script?\n```bash\nNAME="mundo"\necho "Hola ${NAME}!"\n```',
    options: ['Hola ${NAME}!', 'Hola mundo!', 'Hola $NAME!', 'Error: variable undefined'],
    correct: 1,
    explanation: '${NAME} expande la variable NAME dentro de comillas dobles. Las comillas simples evitarían la expansión.',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué flag comprueba si un archivo existe (de cualquier tipo) en bash?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ]', 'if test exists "$FILE"'],
    correct: 1,
    explanation: '-e comprueba si la ruta existe. -f comprueba si existe y además es un archivo regular (no directorio ni link).',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué hace este bucle?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'Imprime: 123 en una sola línea',
      'Imprime: 1, luego 2, luego 3 en líneas separadas',
      'Error de sintaxis',
      'Ejecuta echo una vez pasando los tres parámetros',
    ],
    correct: 1,
    explanation: 'El bucle for itera sobre cada elemento separado por espacios. Al hacer echo $i, cada valor sale en una línea nueva.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué operador compara si dos strings son iguales en bash?',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'Tanto A como C son correctas'],
    correct: 3,
    explanation: 'En bash tanto = como == sirven para comprobar igualdad de strings. -eq se utiliza exclusivamente para números enteros.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Qué flag evalúa si una variable corresponde a la ruta de un directorio?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: '-d evalúa que sea directorio. -f archivo regular, -e cualquier archivo, -r legible por el usuario que ejecuta.',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo escribes un bucle while legítimo que cuenta de 1 a 5?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Sintaxis clásica: se inicia la variable, se comprueba con -le (menor o igual) de 5, y se hace incremento aritmético ((i++)).',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comprueba el test `[ -z "$VARIABLE" ]`?',
    options: [
      'Si el valor de la variable es exactamente cero (0)',
      'Si la longitud del string es igual a cero (cadena vacía)',
      'Si la variable contiene caracteres alfanuméricos',
      'Si el archivo apuntado por la variable está comprimido',
    ],
    correct: 1,
    explanation: '-z evalúa a TRUE si la longitud de la cadena es cero. En oposición, -n comprueba si el string NO está vacío.',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Dentro de un script bash, ¿qué contiene la variable `$1`?',
    options: [
      'El PID del script actual',
      'El primer argumento posicional recibido por el script',
      'El nombre comando con el que se invocó el script',
      'El número total de argumentos recibidos',
    ],
    correct: 1,
    explanation: '$1 es el 1er parámetro. $0 es el nombre del script, $# es el recuento total de argumentos, $@ los agrupa todos.',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué variable especial proporciona el código de salida (exit code) del último comando?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '$? captura el status del comando previo. 0 indica éxito (succcess), diferente a cero indica fallo o error semántico.',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué principal diferencia funcional existe entre `$@` y `$*`?',
    options: [
      'Ninguna, se procesan exactamente igual en bash',
      '"$@" mantiene cada argumento protegido entre comillas como palabras separadas, "$*" los une en una sola gran cadena',
      '"$*" mantiene las separaciones reales, "$@" hace limpieza de espacios',
      '$@ únicamente procesa números, ignorando letras pasadas en argumentos',
    ],
    correct: 1,
    explanation: 'Si reciben comillas dobles, "$@" lista cada argumento individual ("A" "B" "C"), mientras que "$*" se parsea como un monolito ("A B C").',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Cómo fuerzas a un script a abandonar ejecución con un error formal (exit code 1) si no recibe los argumentos esperados?',
    options: [
      'if [ $# -eq 0 ]; then echo "Format Error"; fi',
      'if [ $# -eq 0 ]; then echo "Format Error" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'Buena práctica: desviar el echo a error estándar (>&2) para que las tuberías no lo capturen erróneamente, seguido de exit 1.',
  },
]
