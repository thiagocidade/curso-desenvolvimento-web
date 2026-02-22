# Modulo 4: JavaScript -- Interatividade na Web

> **Duracao:** 8 horas (Dias 6 e 7)
> **Pre-requisitos:** Modulo 2 (HTML) e Modulo 3 (CSS)
> **Objetivo:** Dominar os fundamentos de JavaScript para adicionar interatividade, logica e dinamismo as paginas web.

---

## Sumario

- [4.1 O que e JavaScript](#41-o-que-e-javascript)
- [4.2 Onde Escrever JavaScript](#42-onde-escrever-javascript)
- [4.3 Variaveis](#43-variaveis)
- [4.4 Tipos de Dados](#44-tipos-de-dados)
- [4.5 Operadores](#45-operadores)
- [4.6 Condicionais](#46-condicionais)
- [4.7 Loops](#47-loops)
- [4.8 Funcoes](#48-funcoes)
- [4.9 Arrays](#49-arrays)
- [4.10 Objetos](#410-objetos)
- [4.11 Template Literals](#411-template-literals)
- [4.12 Manipulacao do DOM](#412-manipulacao-do-dom)
- [4.13 Eventos](#413-eventos)
- [4.14 Formularios com JavaScript](#414-formularios-com-javascript)
- [4.15 localStorage](#415-localstorage)
- [4.16 Atividades Praticas -- Dia 6](#416-atividades-praticas----dia-6)
- [4.17 Atividades Praticas -- Dia 7](#417-atividades-praticas----dia-7)

---

## 4.1 O que e JavaScript

Nos Modulos 2 e 3, voce aprendeu a criar a **estrutura** (HTML) e a **aparencia** (CSS) de paginas web. Agora, vamos aprender a linguagem que traz **vida** as suas paginas: o **JavaScript**.

### Relembrando: JavaScript na analogia da casa

- **HTML** = Estrutura (tijolos, paredes, telhado)
- **CSS** = Aparencia (pintura, decoracao, cores)
- **JavaScript** = Funcionalidade (eletricidade, automacao, alarme, portao eletrico)

JavaScript e o que faz as coisas **acontecerem**. Quando voce clica em um botao e algo muda na tela, quando um formulario valida seus dados, quando um menu abre e fecha -- tudo isso e JavaScript.

### O que JavaScript pode fazer

Com JavaScript voce pode:

- **Reagir a acoes do usuario:** cliques, teclas, scroll, hover
- **Modificar a pagina:** alterar textos, cores, adicionar/remover elementos
- **Validar formularios:** verificar se o e-mail e valido antes de enviar
- **Criar animacoes:** sliders, carrosseis, efeitos visuais
- **Armazenar dados:** salvar informacoes no navegador (localStorage)
- **Buscar dados:** comunicar-se com servidores e APIs
- **E muito mais!**

### Breve historia

JavaScript foi criado em **1995** por **Brendan Eich** em apenas **10 dias** enquanto trabalhava na Netscape. Apesar do nome, **JavaScript nao tem relacao com Java** -- o nome foi uma estrategia de marketing da epoca.

Desde entao, o JavaScript evoluiu enormemente:

```
1995  JavaScript e criado (chamava-se Mocha, depois LiveScript)
  |
1997  ECMAScript 1 -- primeira padronizacao
  |
2009  ECMAScript 5 (ES5) -- melhorias importantes
  |
2015  ECMAScript 6 (ES6/ES2015) -- GRANDE atualizacao (let, const, arrow functions, etc.)
  |
2016+ Atualizacoes anuais (ES2016, ES2017, ... ES2024)
```

> **Curiosidade:** Hoje, JavaScript e a linguagem de programacao **mais popular do mundo**. Ela roda nao apenas no navegador, mas tambem em servidores (Node.js), aplicativos moveis (React Native), desktop (Electron) e ate em dispositivos IoT.

### JavaScript e uma linguagem de PROGRAMACAO

Diferente do HTML (marcacao) e CSS (estilizacao), JavaScript e uma **linguagem de programacao** completa. Isso significa que ela tem:

- **Variaveis** -- armazenar dados
- **Condicionais** -- tomar decisoes (se isso, faca aquilo)
- **Loops** -- repetir acoes
- **Funcoes** -- agrupar codigo reutilizavel
- **Logica** -- resolver problemas com algoritmos

> **Dica:** Nao se assuste com a palavra "programacao". Voce ja programa no dia a dia sem perceber: seguir uma receita de bolo e um algoritmo, decidir se leva guarda-chuva e um condicional, repetir exercicios na academia e um loop!

---

## 4.2 Onde Escrever JavaScript

Assim como o CSS, existem tres formas de adicionar JavaScript a uma pagina HTML.

### 1. No Console do Navegador (para testes rapidos)

O console do DevTools e um excelente lugar para testar codigo JavaScript:

1. Abra qualquer pagina no navegador
2. Pressione **F12** para abrir o DevTools
3. Clique na aba **Console**
4. Digite o codigo e pressione **Enter**

```javascript
// Teste no console:
alert("Ola, mundo!");
console.log("Meu primeiro JavaScript!");
2 + 2
"Ola" + " " + "Mundo"
```

### 2. Inline (dentro da tag HTML) -- NAO RECOMENDADO

```html
<button onclick="alert('Voce clicou!')">Clique aqui</button>
```

Assim como o CSS inline, isso mistura HTML com JavaScript e dificulta a manutencao. **Evite.**

### 3. Interno (dentro de `<script>`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha Pagina</title>
</head>
<body>
    <h1>Ola, Mundo!</h1>

    <!-- JavaScript no final do body -->
    <script>
        console.log("Pagina carregada!");
        alert("Bem-vindo ao meu site!");
    </script>
</body>
</html>
```

### 4. Externo (arquivo separado) -- RECOMENDADO

**Arquivo `script.js`:**

```javascript
console.log("Pagina carregada!");
alert("Bem-vindo ao meu site!");
```

**Arquivo `index.html`:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha Pagina</title>
</head>
<body>
    <h1>Ola, Mundo!</h1>

    <!-- JavaScript externo (no final do body) -->
    <script src="js/script.js"></script>
</body>
</html>
```

> **Atencao:** Coloque a tag `<script>` no **final do `<body>`** (logo antes de `</body>`). Isso garante que todo o HTML ja foi carregado quando o JavaScript executa, evitando erros ao tentar acessar elementos que ainda nao existem.

### `console.log()` -- Sua ferramenta de depuracao

O `console.log()` e a forma mais basica de "imprimir" informacoes no console do navegador. Voce vai usar **o tempo todo** para testar e depurar codigo:

```javascript
console.log("Mensagem de texto");
console.log(42);
console.log(true);
console.log("O resultado e:", 2 + 2);

// Outros metodos do console
console.warn("Isso e um aviso!");        // Aviso amarelo
console.error("Isso e um erro!");        // Erro vermelho
console.table([1, 2, 3]);               // Exibe dados em tabela
```

> **Dica:** `console.log()` e seu melhor amigo durante o desenvolvimento. Use-o generosamente para entender o que esta acontecendo no seu codigo.

> **Nota:** Veja o arquivo `exemplos/01-variaveis-e-tipos.html` para testar JavaScript no navegador!

---

## 4.3 Variaveis

Variaveis sao **"caixas"** onde voce guarda informacoes para usar depois. Toda linguagem de programacao tem variaveis, e em JavaScript temos tres formas de cria-las.

### `let` -- Variavel que pode mudar

Use `let` quando o valor pode ser **alterado** depois:

```javascript
let nome = "Ana";
console.log(nome);  // Ana

nome = "Carlos";    // Mudou o valor
console.log(nome);  // Carlos

let idade = 25;
idade = 26;         // Aniversario!
console.log(idade); // 26
```

### `const` -- Constante (nao muda)

Use `const` quando o valor **nunca vai mudar**:

```javascript
const PI = 3.14159;
const URL_API = "https://api.exemplo.com";
const ANO_ATUAL = 2025;

// PI = 3.14;  // ERRO! Nao pode reatribuir uma const
```

### `var` -- A forma antiga (EVITE)

`var` e a forma antiga de declarar variaveis em JavaScript. Ela tem comportamentos confusos e foi substituida por `let` e `const`:

```javascript
var nome = "Ana";  // Funciona, mas EVITE
```

> **Atencao:** Sempre use `let` ou `const`. Nunca use `var` em codigo novo. O `var` tem problemas de escopo que causam bugs dificeis de encontrar.

### Quando usar `let` vs `const`

A regra e simples:

- **`const`** como **padrao** (sempre que possivel)
- **`let`** apenas quando voce **precisa reatribuir** o valor

```javascript
// const: valores que nao mudam
const nome = "Ana Silva";
const dataNascimento = "1999-05-15";
const corPrimaria = "#3498db";

// let: valores que mudam
let pontuacao = 0;
pontuacao = pontuacao + 10;  // Mudou!

let logado = false;
logado = true;  // Mudou!

let contador = 0;
contador++;     // Incrementou
```

### Regras para nomes de variaveis

```javascript
// VALIDO
let nome = "Ana";
let idadeDoUsuario = 25;     // camelCase (RECOMENDADO)
let _privado = true;
let $preco = 99.90;
let nomeCompleto2 = "Ana S.";

// INVALIDO
// let 2nome = "Ana";         // Nao pode comecar com numero
// let nome completo = "Ana"; // Nao pode ter espaco
// let for = "valor";         // Nao pode usar palavras reservadas
```

**Convencao de nomenclatura (camelCase):**

```javascript
// camelCase: primeira palavra minuscula, demais com inicial maiuscula
let nomeCompleto = "Ana Silva";
let dataDeCadastro = "2025-01-15";
let estaLogado = true;
let quantidadeDeItens = 5;

// Constantes com valores "magicos": UPPER_SNAKE_CASE
const TAXA_JUROS = 0.05;
const MAX_TENTATIVAS = 3;
const URL_BASE = "https://api.exemplo.com";
```

---

## 4.4 Tipos de Dados

JavaScript tem varios tipos de dados. Vamos conhecer os principais.

### String (texto)

Textos sao envolvidos por aspas simples, duplas ou crases:

```javascript
const nome = "Ana Silva";           // Aspas duplas
const cidade = 'Sao Paulo';         // Aspas simples
const mensagem = `Ola, ${nome}!`;   // Template literal (crase) -- veremos em 4.11

// Propriedades e metodos de strings
console.log(nome.length);           // 9 (quantidade de caracteres)
console.log(nome.toUpperCase());    // "ANA SILVA"
console.log(nome.toLowerCase());    // "ana silva"
console.log(nome.includes("Silva")); // true
console.log(nome.indexOf("Silva")); // 4 (posicao onde comeca)
console.log(nome.replace("Ana", "Maria")); // "Maria Silva"
console.log(nome.trim());           // Remove espacos das pontas
console.log(nome.split(" "));       // ["Ana", "Silva"]
console.log(nome.slice(0, 3));      // "Ana" (do indice 0 ao 3)
```

### Number (numero)

JavaScript tem um unico tipo numerico para inteiros e decimais:

```javascript
const idade = 25;              // Inteiro
const preco = 99.90;           // Decimal
const temperatura = -5;        // Negativo
const pi = 3.14159;            // Decimal longo

// Operacoes matematicas
console.log(10 + 3);    // 13
console.log(10 - 3);    // 7
console.log(10 * 3);    // 30
console.log(10 / 3);    // 3.333...
console.log(10 % 3);    // 1 (resto da divisao)
console.log(10 ** 3);   // 1000 (potencia: 10 elevado a 3)

// Metodos uteis
console.log(Math.round(4.7));    // 5 (arredonda)
console.log(Math.floor(4.7));    // 4 (arredonda para baixo)
console.log(Math.ceil(4.2));     // 5 (arredonda para cima)
console.log(Math.random());      // Numero aleatorio entre 0 e 1
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

// Converter string para numero
const idadeTexto = "25";
const idadeNumero = Number(idadeTexto);     // 25
const preco2 = parseInt("99");               // 99 (inteiro)
const preco3 = parseFloat("99.90");          // 99.9 (decimal)
```

### Boolean (verdadeiro ou falso)

Um boolean so pode ter dois valores: `true` ou `false`:

```javascript
const estaLogado = true;
const temDesconto = false;
const maiorDeIdade = idade >= 18;  // true (se idade >= 18)

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10);  // true
console.log("a" === "b"); // false
```

### Null e Undefined

```javascript
// undefined: variavel declarada mas sem valor atribuido
let endereco;
console.log(endereco);  // undefined

// null: ausencia INTENCIONAL de valor
let usuario = null;  // "Nao tem usuario logado"
console.log(usuario);  // null
```

**Diferenca:**
- `undefined` = "esqueci de dar um valor" (JavaScript atribui automaticamente)
- `null` = "intencionalmente vazio" (voce definiu como vazio)

### Array (lista)

Arrays sao **listas ordenadas** de valores:

```javascript
const frutas = ["maca", "banana", "laranja"];
const numeros = [1, 2, 3, 4, 5];
const misturado = ["Ana", 25, true, null];

console.log(frutas[0]);    // "maca" (primeiro item -- indice 0!)
console.log(frutas[1]);    // "banana"
console.log(frutas.length); // 3
```

> **Atencao:** Em programacao, a contagem comeca do **zero**, nao do um! O primeiro item esta no indice `0`, o segundo no `1`, e assim por diante.

Vamos aprofundar arrays na secao 4.9.

### Object (objeto)

Objetos sao colecoes de **pares chave-valor**:

```javascript
const pessoa = {
    nome: "Ana Silva",
    idade: 25,
    cidade: "Sao Paulo",
    profissao: "Desenvolvedora"
};

console.log(pessoa.nome);       // "Ana Silva"
console.log(pessoa.idade);      // 25
console.log(pessoa["cidade"]);  // "Sao Paulo"
```

Vamos aprofundar objetos na secao 4.10.

### `typeof` -- Verificar o tipo

O operador `typeof` retorna o tipo de uma variavel:

```javascript
console.log(typeof "Ola");       // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (bug historico do JS!)
console.log(typeof [1, 2, 3]);   // "object"
console.log(typeof {nome: "A"}); // "object"
```

### Conversao de tipos

```javascript
// Para String
String(42);           // "42"
(42).toString();      // "42"

// Para Number
Number("42");         // 42
Number("abc");        // NaN (Not a Number -- nao e um numero)
Number(true);         // 1
Number(false);        // 0

// Para Boolean
Boolean(1);           // true
Boolean(0);           // false
Boolean("");          // false (string vazia)
Boolean("texto");     // true (string com conteudo)
Boolean(null);        // false
Boolean(undefined);   // false
```

**Valores "falsy" (avaliados como false):**
`false`, `0`, `""` (string vazia), `null`, `undefined`, `NaN`

**Tudo o resto e "truthy" (avaliado como true).**

---

## 4.5 Operadores

Operadores sao simbolos que realizam operacoes sobre valores.

### Operadores aritmeticos

```javascript
const a = 10;
const b = 3;

console.log(a + b);   // 13  (adicao)
console.log(a - b);   // 7   (subtracao)
console.log(a * b);   // 30  (multiplicacao)
console.log(a / b);   // 3.33... (divisao)
console.log(a % b);   // 1   (resto/modulo)
console.log(a ** b);  // 1000 (potencia)
```

**Incremento e decremento:**

```javascript
let contador = 0;
contador++;       // contador = 1 (incrementa 1)
contador--;       // contador = 0 (decrementa 1)
contador += 5;    // contador = 5 (soma e atribui)
contador -= 2;    // contador = 3 (subtrai e atribui)
contador *= 3;    // contador = 9 (multiplica e atribui)
contador /= 3;    // contador = 3 (divide e atribui)
```

### Concatenacao de strings

O operador `+` com strings **concatena** (junta) textos:

```javascript
const nome = "Ana";
const sobrenome = "Silva";
const nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);  // "Ana Silva"

// Cuidado com a mistura de tipos!
console.log("5" + 3);     // "53" (string! O + concatena)
console.log("5" - 3);     // 2 (numero! O - converte automaticamente)
console.log("5" * 3);     // 15 (numero!)
```

### Operadores de comparacao

```javascript
// Igualdade estrita (RECOMENDADO -- compara valor E tipo)
console.log(5 === 5);       // true
console.log(5 === "5");     // false (tipos diferentes)
console.log(true === 1);    // false

// Igualdade frouxa (EVITE -- converte tipos automaticamente)
console.log(5 == "5");      // true (converte e compara)
console.log(true == 1);     // true

// Desigualdade estrita
console.log(5 !== "5");     // true (tipos diferentes)
console.log(5 !== 5);       // false

// Maior, menor, maior ou igual, menor ou igual
console.log(10 > 5);        // true
console.log(10 < 5);        // false
console.log(10 >= 10);      // true
console.log(10 <= 9);       // false
```

> **Atencao:** Sempre use `===` (igualdade estrita) e `!==` (desigualdade estrita). Evite `==` e `!=`, pois a conversao automatica de tipos causa bugs.

### Operadores logicos

```javascript
// E (&&) -- ambos devem ser true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(5 > 3 && 10 > 7); // true

// OU (||) -- pelo menos um deve ser true
console.log(true || false);   // true
console.log(false || false);  // false
console.log(5 > 3 || 10 < 7); // true

// NAO (!) -- inverte o valor
console.log(!true);           // false
console.log(!false);          // true
console.log(!(5 > 3));        // false
```

**Analogia:**
- `&&` (E): para entrar no cinema, voce precisa ter **ingresso E identidade**
- `||` (OU): para pagar, voce pode usar **cartao OU dinheiro**
- `!` (NAO): o restaurante **NAO esta aberto** = esta fechado

---

## 4.6 Condicionais

Condicionais permitem que seu programa **tome decisoes** -- execute um bloco de codigo ou outro dependendo de uma condicao.

### `if` / `else if` / `else`

```javascript
const idade = 18;

if (idade >= 18) {
    console.log("Voce e maior de idade.");
} else {
    console.log("Voce e menor de idade.");
}
```

**Com multiplas condicoes:**

```javascript
const nota = 7.5;

if (nota >= 9) {
    console.log("Excelente! Nota A");
} else if (nota >= 7) {
    console.log("Bom! Nota B");
} else if (nota >= 5) {
    console.log("Suficiente. Nota C");
} else {
    console.log("Reprovado. Nota D");
}
// Resultado: "Bom! Nota B"
```

**Analogia:** E como uma placa de sinalizacao em uma estrada:
- Se a estrada estiver livre, siga em frente
- Se nao, se tiver um desvio, pegue o desvio
- Se nao, pare e espere

### Condicionais com operadores logicos

```javascript
const idade = 25;
const temCNH = true;

// Pode dirigir? Precisa ter 18+ E ter CNH
if (idade >= 18 && temCNH) {
    console.log("Pode dirigir!");
} else {
    console.log("Nao pode dirigir.");
}

// Desconto? Se for estudante OU idoso
const eEstudante = true;
const eIdoso = false;

if (eEstudante || eIdoso) {
    console.log("Voce tem direito a meia!");
}
```

### Operador ternario

Uma forma **curta** de escrever um `if/else` simples:

```javascript
// Sintaxe: condicao ? valorSeTrue : valorSeFalse

const idade = 20;
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);  // "Maior de idade"

// Equivalente a:
// if (idade >= 18) {
//     status = "Maior de idade";
// } else {
//     status = "Menor de idade";
// }
```

> **Dica:** Use o ternario apenas para condicoes **simples**. Para logica complexa, prefira `if/else` -- e mais legivel.

### `switch` -- Multiplas opcoes

Quando voce tem muitas opcoes para um unico valor:

```javascript
const diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terca-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
    case 7:
        console.log("Final de semana!");
        break;
    default:
        console.log("Dia invalido");
}
// Resultado: "Quarta-feira"
```

> **Atencao:** Nao esqueca o `break`! Sem ele, a execucao "cai" para o proximo caso.

> **Nota:** Veja o arquivo `exemplos/02-condicionais-e-loops.html` para ver condicionais em acao!

---

## 4.7 Loops

Loops (lacos de repeticao) permitem **repetir** um bloco de codigo varias vezes. Eles sao essenciais quando voce precisa processar listas, contar, ou repetir acoes.

### `for` -- O loop classico

```javascript
// for (inicializacao; condicao; incremento)
for (let i = 0; i < 5; i++) {
    console.log("Volta numero:", i);
}
// Volta numero: 0
// Volta numero: 1
// Volta numero: 2
// Volta numero: 3
// Volta numero: 4
```

```
Como funciona:
1. let i = 0       --> Comeca com i valendo 0
2. i < 5 ?         --> Sim? Executa o bloco
3. console.log(i)  --> Imprime o valor de i
4. i++             --> Incrementa i (0 -> 1 -> 2 -> 3 -> 4)
5. Volta para o passo 2
6. i < 5 ?         --> Nao (i = 5)? Para o loop
```

**Percorrendo um array com `for`:**

```javascript
const frutas = ["maca", "banana", "laranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}
// Fruta 1: maca
// Fruta 2: banana
// Fruta 3: laranja
// Fruta 4: uva
```

### `while` -- Enquanto a condicao for verdadeira

```javascript
let contador = 0;

while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}
// Contador: 0, 1, 2, 3, 4
```

> **Atencao:** Cuidado com loops infinitos! Se a condicao nunca se tornar `false`, o loop roda para sempre e trava o navegador. Sempre garanta que a condicao vai mudar.

### `do...while` -- Executa pelo menos uma vez

```javascript
let numero = 10;

do {
    console.log("Numero:", numero);
    numero++;
} while (numero < 5);
// Numero: 10  (executou 1 vez, mesmo com a condicao falsa)
```

### `for...of` -- Percorrer arrays (RECOMENDADO)

A forma mais moderna e legivel de percorrer arrays:

```javascript
const cores = ["vermelho", "azul", "verde"];

for (const cor of cores) {
    console.log("Cor:", cor);
}
// Cor: vermelho
// Cor: azul
// Cor: verde
```

### `for...in` -- Percorrer propriedades de objetos

```javascript
const pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "Sao Paulo"
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
// nome: Ana
// idade: 25
// cidade: Sao Paulo
```

### `break` e `continue`

```javascript
// break: para o loop completamente
for (let i = 0; i < 10; i++) {
    if (i === 5) break;  // Para quando i chega a 5
    console.log(i);
}
// 0, 1, 2, 3, 4

// continue: pula para a proxima iteracao
for (let i = 0; i < 6; i++) {
    if (i === 3) continue;  // Pula o 3
    console.log(i);
}
// 0, 1, 2, 4, 5
```

### Quando usar cada loop

| Loop | Quando usar |
|------|-------------|
| `for` | Quando voce sabe quantas vezes repetir |
| `while` | Quando nao sabe quantas vezes (depende de condicao) |
| `for...of` | Para percorrer arrays (mais legivel) |
| `for...in` | Para percorrer propriedades de objetos |

---

## 4.8 Funcoes

Funcoes sao **blocos de codigo reutilizaveis** que realizam uma tarefa especifica. Elas sao um dos conceitos mais importantes da programacao.

**Analogia:** Uma funcao e como uma **receita de bolo**. Voce escreve a receita uma vez e pode executa-la quantas vezes quiser, com ingredientes diferentes a cada vez.

### Declaracao de funcao

```javascript
// Declarar (criar) a funcao
function saudacao() {
    console.log("Ola! Bem-vindo ao site!");
}

// Chamar (executar) a funcao
saudacao();  // "Ola! Bem-vindo ao site!"
saudacao();  // Pode chamar quantas vezes quiser!
```

### Funcoes com parametros

Parametros sao as "entradas" da funcao -- os dados que ela precisa para trabalhar:

```javascript
function saudacao(nome) {
    console.log(`Ola, ${nome}! Bem-vindo!`);
}

saudacao("Ana");     // "Ola, Ana! Bem-vindo!"
saudacao("Carlos");  // "Ola, Carlos! Bem-vindo!"

// Multiplos parametros
function soma(a, b) {
    console.log(a + b);
}

soma(5, 3);   // 8
soma(10, 20); // 30
```

### Funcoes com retorno (`return`)

O `return` faz a funcao **devolver um resultado** que pode ser usado depois:

```javascript
function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

const minhaMedia = calcularMedia(8, 7, 9);
console.log(`Sua media e: ${minhaMedia}`);  // "Sua media e: 8"

// Usar o resultado diretamente
if (calcularMedia(8, 7, 9) >= 7) {
    console.log("Aprovado!");
}
```

> **Atencao:** O `return` **encerra** a funcao imediatamente. Qualquer codigo apos o `return` nao sera executado.

### Parametros com valor padrao

```javascript
function saudacao(nome = "visitante") {
    console.log(`Ola, ${nome}!`);
}

saudacao("Ana");    // "Ola, Ana!"
saudacao();         // "Ola, visitante!" (usa o valor padrao)
```

### Expressao de funcao

Uma funcao pode ser armazenada em uma variavel:

```javascript
const calcularArea = function(base, altura) {
    return base * altura;
};

console.log(calcularArea(5, 3));  // 15
```

### Arrow Functions (funcoes seta) -- ES6

Uma forma mais **curta** de escrever funcoes:

```javascript
// Funcao tradicional
function soma(a, b) {
    return a + b;
}

// Arrow function
const soma = (a, b) => {
    return a + b;
};

// Arrow function com retorno implicito (uma linha)
const soma = (a, b) => a + b;

// Com um unico parametro, parenteses sao opcionais
const dobro = numero => numero * 2;

// Sem parametros
const saudacao = () => console.log("Ola!");
```

**Exemplos praticos:**

```javascript
// Verificar se e par
const ePar = (numero) => numero % 2 === 0;
console.log(ePar(4));   // true
console.log(ePar(7));   // false

// Calcular desconto
const aplicarDesconto = (preco, percentual) => preco - (preco * percentual / 100);
console.log(aplicarDesconto(100, 20));  // 80
```

> **Dica:** Use arrow functions para funcoes curtas e expressoes simples. Para funcoes mais complexas, a declaracao tradicional `function` pode ser mais legivel.

> **Nota:** Veja o arquivo `exemplos/03-funcoes-e-arrays.html` para ver funcoes em acao!

---

## 4.9 Arrays

Arrays sao **listas ordenadas** de valores. Sao uma das estruturas de dados mais usadas em programacao.

### Criando arrays

```javascript
// Array de strings
const frutas = ["maca", "banana", "laranja"];

// Array de numeros
const notas = [8, 7.5, 9, 6.5, 10];

// Array misto (possivel, mas evite)
const misto = ["Ana", 25, true];

// Array vazio
const lista = [];
```

### Acessando elementos

```javascript
const frutas = ["maca", "banana", "laranja", "uva"];

console.log(frutas[0]);    // "maca" (primeiro)
console.log(frutas[1]);    // "banana" (segundo)
console.log(frutas[3]);    // "uva" (quarto)
console.log(frutas.length); // 4 (quantidade de itens)
console.log(frutas[frutas.length - 1]); // "uva" (ultimo)
```

### Modificando arrays

```javascript
const frutas = ["maca", "banana", "laranja"];

// Adicionar no final
frutas.push("uva");            // ["maca", "banana", "laranja", "uva"]

// Adicionar no inicio
frutas.unshift("morango");     // ["morango", "maca", "banana", "laranja", "uva"]

// Remover do final
const ultima = frutas.pop();   // Remove "uva", frutas = ["morango", "maca", "banana", "laranja"]

// Remover do inicio
const primeira = frutas.shift(); // Remove "morango", frutas = ["maca", "banana", "laranja"]

// Remover/adicionar em posicao especifica
frutas.splice(1, 1);           // Remove 1 item a partir do indice 1 (remove "banana")
// frutas = ["maca", "laranja"]
```

### Metodos de busca

```javascript
const frutas = ["maca", "banana", "laranja", "banana"];

// Verificar se existe
console.log(frutas.includes("banana"));  // true
console.log(frutas.includes("uva"));     // false

// Encontrar a posicao
console.log(frutas.indexOf("banana"));   // 1 (primeiro encontrado)
console.log(frutas.indexOf("uva"));      // -1 (nao encontrado)

// Encontrar um item com condicao
const numeros = [10, 25, 30, 45, 50];
const encontrado = numeros.find(num => num > 20);
console.log(encontrado);  // 25 (primeiro que satisfaz a condicao)
```

### Metodos de iteracao (os mais importantes!)

#### `forEach` -- Executar uma acao para cada item

```javascript
const nomes = ["Ana", "Carlos", "Maria"];

nomes.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
});
// 1. Ana
// 2. Carlos
// 3. Maria

// Com arrow function (mais curto)
nomes.forEach((nome) => console.log(nome));
```

#### `map` -- Transformar cada item (cria um novo array)

```javascript
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]

// Original nao muda!
console.log(numeros);   // [1, 2, 3, 4, 5]

// Exemplo pratico: criar HTML a partir de dados
const nomes = ["Ana", "Carlos", "Maria"];
const itensHTML = nomes.map(nome => `<li>${nome}</li>`);
console.log(itensHTML);
// ["<li>Ana</li>", "<li>Carlos</li>", "<li>Maria</li>"]
```

#### `filter` -- Filtrar itens (cria um novo array)

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);  // [2, 4, 6, 8, 10]

const maioresQue5 = numeros.filter(num => num > 5);
console.log(maioresQue5);  // [6, 7, 8, 9, 10]

// Exemplo pratico: filtrar produtos por preco
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calca", preco: 129.90 },
    { nome: "Meia", preco: 19.90 },
    { nome: "Jaqueta", preco: 249.90 }
];

const baratos = produtos.filter(p => p.preco < 100);
console.log(baratos);
// [{ nome: "Camiseta", preco: 49.90 }, { nome: "Meia", preco: 19.90 }]
```

### Outros metodos uteis

```javascript
const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Ordenar
const ordenado = [...numeros].sort((a, b) => a - b);
console.log(ordenado);  // [1, 1, 2, 3, 4, 5, 6, 9]

// Inverter
const invertido = [...numeros].reverse();
console.log(invertido);  // [6, 2, 9, 5, 1, 4, 1, 3]

// Juntar em string
const frutas = ["maca", "banana", "laranja"];
console.log(frutas.join(", "));  // "maca, banana, laranja"
console.log(frutas.join(" - ")); // "maca - banana - laranja"

// Reduce (reduzir a um unico valor)
const notas = [8, 7, 9, 6, 10];
const soma = notas.reduce((total, nota) => total + nota, 0);
console.log(soma);  // 40
console.log(soma / notas.length);  // 8 (media)
```

### Resumo dos metodos de array

| Metodo | O que faz | Retorna |
|--------|-----------|---------|
| `push()` | Adiciona no final | Novo tamanho |
| `pop()` | Remove do final | Item removido |
| `unshift()` | Adiciona no inicio | Novo tamanho |
| `shift()` | Remove do inicio | Item removido |
| `includes()` | Verifica se existe | `true`/`false` |
| `indexOf()` | Encontra a posicao | Indice ou `-1` |
| `find()` | Encontra primeiro item que satisfaz condicao | Item ou `undefined` |
| `forEach()` | Executa acao para cada item | `undefined` |
| `map()` | Transforma cada item | Novo array |
| `filter()` | Filtra itens por condicao | Novo array |
| `sort()` | Ordena | Array ordenado |
| `join()` | Junta em string | String |
| `reduce()` | Reduz a um valor | Valor final |

---

## 4.10 Objetos

Objetos sao colecoes de **propriedades** (pares chave-valor). Eles sao perfeitos para representar entidades do mundo real com multiplas caracteristicas.

### Criando objetos

```javascript
const pessoa = {
    nome: "Ana Silva",
    idade: 25,
    cidade: "Sao Paulo",
    profissao: "Desenvolvedora",
    hobbies: ["leitura", "programacao", "musica"],
    estaEmpregada: true
};
```

### Acessando propriedades

```javascript
// Notacao de ponto (mais comum)
console.log(pessoa.nome);       // "Ana Silva"
console.log(pessoa.idade);      // 25

// Notacao de colchetes (quando o nome e dinamico ou tem caracteres especiais)
console.log(pessoa["cidade"]);  // "Sao Paulo"

const campo = "profissao";
console.log(pessoa[campo]);     // "Desenvolvedora"
```

### Modificando objetos

```javascript
// Alterar uma propriedade
pessoa.idade = 26;

// Adicionar nova propriedade
pessoa.email = "ana@email.com";

// Remover uma propriedade
delete pessoa.estaEmpregada;

console.log(pessoa);
```

### Metodos (funcoes dentro de objetos)

```javascript
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    // Forma curta (ES6)
    subtrair(a, b) {
        return a - b;
    },
    multiplicar: (a, b) => a * b
};

console.log(calculadora.somar(5, 3));       // 8
console.log(calculadora.subtrair(10, 4));   // 6
console.log(calculadora.multiplicar(3, 7)); // 21
```

### Desestruturacao de objetos (ES6)

Extrair propriedades de objetos em variaveis individuais:

```javascript
const pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "Sao Paulo"
};

// Sem desestruturacao
const nome = pessoa.nome;
const idade = pessoa.idade;

// Com desestruturacao (mais elegante)
const { nome, idade, cidade } = pessoa;
console.log(nome);    // "Ana"
console.log(idade);   // 25
console.log(cidade);  // "Sao Paulo"

// Com renomeacao
const { nome: nomeCompleto, cidade: cidadeAtual } = pessoa;
console.log(nomeCompleto);  // "Ana"
console.log(cidadeAtual);   // "Sao Paulo"
```

### Desestruturacao de arrays

```javascript
const cores = ["vermelho", "azul", "verde"];

const [primeira, segunda, terceira] = cores;
console.log(primeira);  // "vermelho"
console.log(segunda);   // "azul"
```

### Verificando propriedades

```javascript
const pessoa = { nome: "Ana", idade: 25 };

// Verificar se a propriedade existe
console.log("nome" in pessoa);      // true
console.log("email" in pessoa);     // false

// Listar todas as chaves
console.log(Object.keys(pessoa));    // ["nome", "idade"]

// Listar todos os valores
console.log(Object.values(pessoa));  // ["Ana", 25]

// Listar pares [chave, valor]
console.log(Object.entries(pessoa)); // [["nome", "Ana"], ["idade", 25]]
```

### Spread operator (`...`) -- Copiar e mesclar

```javascript
// Copiar objetos
const original = { nome: "Ana", idade: 25 };
const copia = { ...original };

// Mesclar objetos
const endereco = { cidade: "Sao Paulo", estado: "SP" };
const pessoaCompleta = { ...original, ...endereco };
console.log(pessoaCompleta);
// { nome: "Ana", idade: 25, cidade: "Sao Paulo", estado: "SP" }

// Copiar arrays
const frutas = ["maca", "banana"];
const maisFrutas = [...frutas, "laranja", "uva"];
console.log(maisFrutas);  // ["maca", "banana", "laranja", "uva"]
```

---

## 4.11 Template Literals

Template literals sao uma forma moderna e poderosa de trabalhar com strings, usando **crases** (`` ` ``) em vez de aspas.

### Interpolacao de variaveis

```javascript
const nome = "Ana";
const idade = 25;

// Forma antiga (concatenacao)
const mensagem1 = "Ola, " + nome + "! Voce tem " + idade + " anos.";

// Template literal (MUITO melhor!)
const mensagem2 = `Ola, ${nome}! Voce tem ${idade} anos.`;

console.log(mensagem2);  // "Ola, Ana! Voce tem 25 anos."
```

### Expressoes dentro de `${}`

```javascript
const preco = 99.90;
const desconto = 20;

console.log(`Preco final: R$ ${(preco * (1 - desconto / 100)).toFixed(2)}`);
// "Preco final: R$ 79.92"

console.log(`5 + 3 = ${5 + 3}`);
// "5 + 3 = 8"

console.log(`Status: ${idade >= 18 ? "Maior de idade" : "Menor de idade"}`);
// "Status: Maior de idade"
```

### Strings multilinhas

```javascript
// Forma antiga
const html1 = "<div>\n" +
    "    <h1>Titulo</h1>\n" +
    "    <p>Paragrafo</p>\n" +
    "</div>";

// Template literal (preserva quebras de linha!)
const html2 = `
<div>
    <h1>Titulo</h1>
    <p>Paragrafo</p>
</div>
`;
```

### Uso pratico: gerar HTML dinamico

```javascript
const produto = {
    nome: "Camiseta Dev",
    preco: 79.90,
    imagem: "camiseta.jpg"
};

const cardHTML = `
<div class="card">
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
    <button>Comprar</button>
</div>
`;

console.log(cardHTML);
```

---

## 4.12 Manipulacao do DOM

O **DOM** (Document Object Model) e a representacao da pagina HTML como uma arvore de objetos que o JavaScript pode acessar e modificar. Manipular o DOM e o que permite ao JavaScript **alterar a pagina em tempo real**.

### O que e o DOM

Quando o navegador carrega uma pagina HTML, ele cria uma arvore de objetos:

```
document
└── html
    ├── head
    │   ├── meta
    │   └── title
    └── body
        ├── header
        │   └── h1
        ├── main
        │   ├── p
        │   └── button
        └── footer
```

Cada elemento HTML se torna um **no** (node) nessa arvore, e o JavaScript pode acessar e modificar qualquer um deles.

### Selecionando elementos

#### `querySelector` -- Seleciona o PRIMEIRO elemento (RECOMENDADO)

Usa a mesma sintaxe de seletores CSS:

```javascript
// Por tag
const titulo = document.querySelector("h1");

// Por classe
const card = document.querySelector(".card");

// Por ID
const menu = document.querySelector("#menu-principal");

// Seletores complexos
const primeiroLink = document.querySelector("nav a");
const botaoEnviar = document.querySelector("form button[type='submit']");
```

#### `querySelectorAll` -- Seleciona TODOS os elementos

Retorna uma **NodeList** (semelhante a um array):

```javascript
// Todos os paragrafos
const paragrafos = document.querySelectorAll("p");

// Todos os itens de lista
const itens = document.querySelectorAll("li");

// Todos os cards
const cards = document.querySelectorAll(".card");

// Percorrer a lista
paragrafos.forEach((p) => {
    console.log(p.textContent);
});
```

#### `getElementById` -- Seleciona por ID

```javascript
const menu = document.getElementById("menu-principal");
// Equivalente a: document.querySelector("#menu-principal")
```

### Modificando conteudo

```javascript
const titulo = document.querySelector("h1");

// Alterar o texto (apenas texto, sem HTML)
titulo.textContent = "Novo Titulo";

// Alterar o HTML interno (interpreta tags HTML)
titulo.innerHTML = "Novo <em>Titulo</em> com <strong>formatacao</strong>";
```

> **Atencao:** Use `textContent` quando o conteudo e apenas texto. Use `innerHTML` apenas quando voce precisa inserir tags HTML. Nunca use `innerHTML` com dados do usuario (risco de seguranca XSS).

### Modificando estilos

```javascript
const caixa = document.querySelector(".caixa");

// Modificar estilos individuais
caixa.style.backgroundColor = "#3498db";
caixa.style.color = "white";
caixa.style.padding = "20px";
caixa.style.borderRadius = "10px";   // camelCase! (nao border-radius)
```

> **Dica:** Para estilizacao, prefira **adicionar/remover classes CSS** em vez de modificar `style` diretamente. Isso mantem a separacao entre CSS e JavaScript.

### Modificando classes CSS

```javascript
const botao = document.querySelector(".botao");

// Adicionar uma classe
botao.classList.add("ativo");

// Remover uma classe
botao.classList.remove("ativo");

// Alternar (toggle): adiciona se nao tem, remove se tem
botao.classList.toggle("ativo");

// Verificar se tem uma classe
if (botao.classList.contains("ativo")) {
    console.log("O botao esta ativo!");
}
```

**Exemplo pratico: menu aberto/fechado**

```javascript
const menuBotao = document.querySelector("#menu-botao");
const menuLista = document.querySelector("#menu-lista");

menuBotao.addEventListener("click", () => {
    menuLista.classList.toggle("aberto");
});
```

```css
/* CSS */
.menu-lista {
    display: none;
}
.menu-lista.aberto {
    display: flex;
}
```

### Modificando atributos

```javascript
const imagem = document.querySelector("img");

// Ler atributo
console.log(imagem.getAttribute("src"));
console.log(imagem.src);  // Tambem funciona

// Alterar atributo
imagem.setAttribute("src", "nova-foto.jpg");
imagem.setAttribute("alt", "Nova descricao");
imagem.src = "outra-foto.jpg";  // Tambem funciona

// Remover atributo
imagem.removeAttribute("width");

// Data attributes (atributos personalizados)
// HTML: <div data-id="42" data-categoria="tech">
const div = document.querySelector("[data-id]");
console.log(div.dataset.id);         // "42"
console.log(div.dataset.categoria);  // "tech"
```

### Criando e inserindo elementos

```javascript
// Criar um novo elemento
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este paragrafo foi criado pelo JavaScript!";
novoParagrafo.classList.add("destaque");

// Inserir no final de um elemento pai
const main = document.querySelector("main");
main.appendChild(novoParagrafo);

// Inserir antes de um elemento especifico
const referencia = document.querySelector("#referencia");
main.insertBefore(novoParagrafo, referencia);

// Remover um elemento
const elementoAntigo = document.querySelector(".antigo");
elementoAntigo.remove();
```

### Exemplo pratico: criar uma lista dinamica

```javascript
const nomes = ["Ana", "Carlos", "Maria", "Pedro"];
const lista = document.querySelector("#lista-nomes");

nomes.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
});
```

> **Nota:** Veja o arquivo `exemplos/04-dom-e-eventos.html` para ver manipulacao do DOM em acao!

---

## 4.13 Eventos

Eventos sao **acoes que acontecem** na pagina -- cliques, teclas pressionadas, scroll, envio de formulario, etc. O JavaScript permite "ouvir" esses eventos e reagir a eles.

### `addEventListener` -- Ouvindo eventos

A forma recomendada de lidar com eventos:

```javascript
const botao = document.querySelector("#meu-botao");

botao.addEventListener("click", function() {
    console.log("Botao clicado!");
});

// Com arrow function (mais curto)
botao.addEventListener("click", () => {
    console.log("Botao clicado!");
});
```

### Tipos de eventos mais comuns

#### Eventos de mouse

```javascript
const elemento = document.querySelector(".caixa");

// Clique
elemento.addEventListener("click", () => {
    console.log("Clicou!");
});

// Duplo clique
elemento.addEventListener("dblclick", () => {
    console.log("Clique duplo!");
});

// Mouse entrou no elemento
elemento.addEventListener("mouseenter", () => {
    elemento.style.backgroundColor = "#3498db";
});

// Mouse saiu do elemento
elemento.addEventListener("mouseleave", () => {
    elemento.style.backgroundColor = "";
});
```

#### Eventos de teclado

```javascript
// Em um campo de texto
const campo = document.querySelector("#busca");

campo.addEventListener("keydown", (evento) => {
    console.log("Tecla pressionada:", evento.key);
});

campo.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
        console.log("Enter pressionado! Buscando...");
    }
});

// Em toda a pagina
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        console.log("Escape pressionado!");
    }
});
```

#### Eventos de formulario

```javascript
const campo = document.querySelector("#nome");
const formulario = document.querySelector("form");

// Quando o valor muda (e o campo perde foco)
campo.addEventListener("change", () => {
    console.log("Valor mudou para:", campo.value);
});

// A cada tecla digitada (em tempo real)
campo.addEventListener("input", () => {
    console.log("Digitando:", campo.value);
});

// Quando o campo recebe foco
campo.addEventListener("focus", () => {
    campo.style.borderColor = "#3498db";
});

// Quando o campo perde foco
campo.addEventListener("blur", () => {
    campo.style.borderColor = "";
});

// Quando o formulario e enviado
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();  // Impede o envio padrao
    console.log("Formulario enviado!");
});
```

#### Eventos de scroll

```javascript
window.addEventListener("scroll", () => {
    console.log("Posicao do scroll:", window.scrollY);

    // Exemplo: mostrar botao "voltar ao topo"
    const botaoTopo = document.querySelector("#voltar-topo");
    if (window.scrollY > 300) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }
});
```

### O objeto `event` (evento)

Quando um evento acontece, o JavaScript cria um objeto com informacoes sobre o evento:

```javascript
botao.addEventListener("click", function(evento) {
    console.log(evento.type);      // "click"
    console.log(evento.target);    // O elemento que foi clicado
    console.log(evento.clientX);   // Posicao X do mouse
    console.log(evento.clientY);   // Posicao Y do mouse
});

campo.addEventListener("keydown", function(evento) {
    console.log(evento.key);       // "a", "Enter", "Escape", etc.
    console.log(evento.code);      // "KeyA", "Enter", "Escape", etc.
});
```

### `preventDefault()` -- Cancelar o comportamento padrao

Impede o comportamento padrao do navegador:

```javascript
// Impedir o envio do formulario (para validar com JS primeiro)
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Agora voce controla o que acontece
});

// Impedir um link de navegar
const link = document.querySelector("a");
link.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("Link clicado, mas nao navegou!");
});
```

### Exemplo pratico: contador de cliques

```html
<p>Cliques: <span id="contador">0</span></p>
<button id="botao-contar">Clique aqui!</button>
```

```javascript
let cliques = 0;
const botao = document.querySelector("#botao-contar");
const display = document.querySelector("#contador");

botao.addEventListener("click", () => {
    cliques++;
    display.textContent = cliques;
});
```

### Exemplo pratico: alternar tema claro/escuro

```javascript
const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "Tema Claro";
    } else {
        botaoTema.textContent = "Tema Escuro";
    }
});
```

### Tabela de eventos mais usados

| Evento | Quando acontece |
|--------|----------------|
| `click` | Clique do mouse |
| `dblclick` | Clique duplo |
| `mouseenter` | Mouse entrou no elemento |
| `mouseleave` | Mouse saiu do elemento |
| `keydown` | Tecla pressionada |
| `keyup` | Tecla solta |
| `input` | Valor de campo muda (em tempo real) |
| `change` | Valor de campo muda (ao perder foco) |
| `focus` | Campo recebe foco |
| `blur` | Campo perde foco |
| `submit` | Formulario enviado |
| `scroll` | Pagina ou elemento rolado |
| `load` | Pagina carregou completamente |
| `DOMContentLoaded` | HTML carregou (sem esperar imagens) |

---

## 4.14 Formularios com JavaScript

No Modulo 2, voce aprendeu a criar formularios com validacao HTML5. Agora, vamos adicionar **validacao personalizada** e **interatividade** com JavaScript.

### Acessando valores dos campos

```javascript
const formulario = document.querySelector("#formulario-contato");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // Pegar valores dos campos
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
});
```

### Validacao personalizada

```javascript
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value;

    // Limpar mensagens anteriores
    limparErros();

    let valido = true;

    // Validar nome
    if (nome.length < 3) {
        mostrarErro("nome", "O nome deve ter pelo menos 3 caracteres.");
        valido = false;
    }

    // Validar email
    if (!email.includes("@") || !email.includes(".")) {
        mostrarErro("email", "Digite um email valido.");
        valido = false;
    }

    // Validar senha
    if (senha.length < 6) {
        mostrarErro("senha", "A senha deve ter pelo menos 6 caracteres.");
        valido = false;
    }

    if (valido) {
        console.log("Formulario valido! Enviando...");
        // Aqui voce enviaria os dados para o servidor
    }
});

function mostrarErro(campoId, mensagem) {
    const campo = document.querySelector(`#${campoId}`);
    const erro = document.createElement("span");
    erro.className = "mensagem-erro";
    erro.textContent = mensagem;
    campo.parentElement.appendChild(erro);
    campo.classList.add("campo-invalido");
}

function limparErros() {
    document.querySelectorAll(".mensagem-erro").forEach(el => el.remove());
    document.querySelectorAll(".campo-invalido").forEach(el => {
        el.classList.remove("campo-invalido");
    });
}
```

### Validacao em tempo real

```javascript
const campoEmail = document.querySelector("#email");

campoEmail.addEventListener("input", () => {
    const email = campoEmail.value;

    if (email.includes("@") && email.includes(".")) {
        campoEmail.classList.remove("invalido");
        campoEmail.classList.add("valido");
    } else {
        campoEmail.classList.remove("valido");
        campoEmail.classList.add("invalido");
    }
});
```

```css
/* CSS correspondente */
.valido { border-color: #2ecc71; }
.invalido { border-color: #e74c3c; }
.mensagem-erro { color: #e74c3c; font-size: 0.85em; display: block; margin-top: 4px; }
```

### Exemplo: contador de caracteres

```javascript
const textarea = document.querySelector("#mensagem");
const contador = document.querySelector("#contador-caracteres");
const maximo = 500;

textarea.addEventListener("input", () => {
    const restante = maximo - textarea.value.length;
    contador.textContent = `${restante} caracteres restantes`;

    if (restante < 50) {
        contador.style.color = "#e74c3c";
    } else {
        contador.style.color = "#666";
    }
});
```

> **Nota:** Veja o arquivo `exemplos/05-formularios.html` para ver validacao de formularios com JavaScript em acao!

---

## 4.15 localStorage

O **localStorage** permite **armazenar dados no navegador** do usuario de forma persistente -- os dados permanecem mesmo apos fechar o navegador.

### Conceitos basicos

O localStorage armazena dados como pares **chave-valor**, e ambos devem ser **strings**.

```javascript
// Salvar um dado
localStorage.setItem("nome", "Ana Silva");

// Ler um dado
const nome = localStorage.getItem("nome");
console.log(nome);  // "Ana Silva"

// Remover um dado
localStorage.removeItem("nome");

// Limpar tudo
localStorage.clear();
```

### Armazenando objetos e arrays

O localStorage so aceita strings, entao voce precisa **converter** objetos e arrays:

```javascript
// Salvar um objeto (converter para JSON)
const usuario = {
    nome: "Ana",
    email: "ana@email.com",
    tema: "escuro"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Ler o objeto (converter de volta)
const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioSalvo.nome);  // "Ana"

// Salvar um array
const tarefas = ["Estudar HTML", "Praticar CSS", "Aprender JS"];
localStorage.setItem("tarefas", JSON.stringify(tarefas));

// Ler o array
const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
console.log(tarefasSalvas);  // ["Estudar HTML", "Praticar CSS", "Aprender JS"]
```

### Verificar se um dado existe

```javascript
const dados = localStorage.getItem("usuario");

if (dados !== null) {
    const usuario = JSON.parse(dados);
    console.log(`Bem-vindo de volta, ${usuario.nome}!`);
} else {
    console.log("Primeiro acesso! Bem-vindo!");
}
```

### Exemplo pratico: salvar preferencia de tema

```javascript
// Verificar se tem tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("tema-escuro");
}

// Ao clicar no botao de tema
const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
});
```

### Exemplo pratico: lista de tarefas persistente

```javascript
// Carregar tarefas salvas
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const inputTarefa = document.querySelector("#nova-tarefa");
const botaoAdicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#lista-tarefas");

// Renderizar tarefas na tela
function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {
        const item = document.createElement("li");
        item.textContent = tarefa;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.addEventListener("click", () => {
            tarefas.splice(indice, 1);
            salvarTarefas();
            renderizarTarefas();
        });

        item.appendChild(botaoRemover);
        listaTarefas.appendChild(item);
    });
}

// Salvar tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Adicionar nova tarefa
botaoAdicionar.addEventListener("click", () => {
    const novaTarefa = inputTarefa.value.trim();

    if (novaTarefa !== "") {
        tarefas.push(novaTarefa);
        salvarTarefas();
        renderizarTarefas();
        inputTarefa.value = "";
    }
});

// Renderizar ao carregar a pagina
renderizarTarefas();
```

### Limites do localStorage

| Caracteristica | Detalhe |
|---------------|---------|
| **Capacidade** | ~5-10 MB por dominio |
| **Tipo de dados** | Apenas strings (use JSON para objetos) |
| **Persistencia** | Permanece ate ser removido explicitamente |
| **Seguranca** | Nao e seguro para dados sensiveis (senhas, tokens) |
| **Escopo** | Disponivel apenas no mesmo dominio |

> **Atencao:** Nunca armazene **senhas**, **tokens de autenticacao** ou **dados sensiveis** no localStorage. Ele pode ser acessado por qualquer script na pagina.

> **Nota:** Veja o arquivo `exemplos/06-localstorage.html` para ver o localStorage em acao com uma lista de tarefas persistente!

---

## 4.16 Atividades Praticas -- Dia 6

As atividades do Dia 6 focam nos fundamentos de JavaScript: variaveis, tipos, condicionais, loops e funcoes.

---

### Atividade 4.1 -- Calculadora no Console

**Objetivo:** Praticar variaveis, operadores, condicionais e funcoes criando uma calculadora.

**Tempo estimado:** 30 minutos

#### Passo 1: Criar o arquivo

Crie `calculadora.html` com a estrutura HTML basica e um `<script>` no final do body.

#### Passo 2: Criar as funcoes da calculadora

```javascript
// Funcoes basicas
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero!";
    }
    return a / b;
}

// Funcao principal
function calcular(operacao, a, b) {
    switch (operacao) {
        case "+": return somar(a, b);
        case "-": return subtrair(a, b);
        case "*": return multiplicar(a, b);
        case "/": return dividir(a, b);
        default: return "Operacao invalida";
    }
}

// Testar
console.log(calcular("+", 10, 5));   // 15
console.log(calcular("-", 10, 5));   // 5
console.log(calcular("*", 10, 5));   // 50
console.log(calcular("/", 10, 5));   // 2
console.log(calcular("/", 10, 0));   // "Erro: divisao por zero!"
```

#### Passo 3: Adicionar funcoes extras

Adicione pelo menos 3 funcoes adicionais:
- `calcularPotencia(base, expoente)`
- `calcularMedia(numeros)` -- recebe um array
- `eParOuImpar(numero)`
- `calcularIMC(peso, altura)`
- `converterTemperatura(celsius)`

#### Passo 4: Testar tudo no console

Abra o arquivo no navegador, abra o console (F12) e teste todas as funcoes.

> **Checklist de conclusao:**
> - [ ] 4 funcoes basicas (somar, subtrair, multiplicar, dividir)
> - [ ] Funcao calcular com switch
> - [ ] Tratamento de divisao por zero
> - [ ] Pelo menos 3 funcoes extras
> - [ ] Todas as funcoes testadas no console

---

### Atividade 4.2 -- Jogo de Adivinhacao

**Objetivo:** Criar um jogo onde o usuario tenta adivinhar um numero aleatorio, usando loops, condicionais e manipulacao basica do DOM.

**Tempo estimado:** 40 minutos

#### Passo 1: Criar a interface HTML

```html
<main>
    <h1>Jogo de Adivinhacao</h1>
    <p>Estou pensando em um numero de 1 a 100. Tente adivinhar!</p>

    <div>
        <input type="number" id="palpite" min="1" max="100" placeholder="Seu palpite">
        <button id="botao-adivinhar">Adivinhar</button>
    </div>

    <p id="resultado"></p>
    <p id="tentativas">Tentativas: 0</p>

    <button id="botao-reiniciar" style="display:none;">Jogar Novamente</button>
</main>
```

#### Passo 2: Logica do jogo

```javascript
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const inputPalpite = document.querySelector("#palpite");
const botaoAdivinhar = document.querySelector("#botao-adivinhar");
const resultado = document.querySelector("#resultado");
const displayTentativas = document.querySelector("#tentativas");
const botaoReiniciar = document.querySelector("#botao-reiniciar");

botaoAdivinhar.addEventListener("click", () => {
    const palpite = Number(inputPalpite.value);

    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        resultado.textContent = "Digite um numero valido entre 1 e 100!";
        return;
    }

    tentativas++;
    displayTentativas.textContent = `Tentativas: ${tentativas}`;

    if (palpite === numeroSecreto) {
        resultado.textContent = `Parabens! Voce acertou em ${tentativas} tentativas!`;
        resultado.style.color = "#2ecc71";
        botaoAdivinhar.disabled = true;
        botaoReiniciar.style.display = "block";
    } else if (palpite < numeroSecreto) {
        resultado.textContent = "Muito baixo! Tente um numero maior.";
        resultado.style.color = "#e74c3c";
    } else {
        resultado.textContent = "Muito alto! Tente um numero menor.";
        resultado.style.color = "#e74c3c";
    }

    inputPalpite.value = "";
    inputPalpite.focus();
});

// Permitir Enter no campo
inputPalpite.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        botaoAdivinhar.click();
    }
});

// Reiniciar jogo
botaoReiniciar.addEventListener("click", () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    displayTentativas.textContent = "Tentativas: 0";
    resultado.textContent = "";
    botaoAdivinhar.disabled = false;
    botaoReiniciar.style.display = "none";
    inputPalpite.focus();
});
```

#### Passo 3: Estilizar com CSS

Adicione CSS para tornar o jogo visualmente atraente (use o que aprendeu no Modulo 3).

> **Checklist de conclusao:**
> - [ ] Numero aleatorio gerado (1-100)
> - [ ] Input para palpite do usuario
> - [ ] Feedback: "muito alto", "muito baixo", "acertou"
> - [ ] Contador de tentativas
> - [ ] Tecla Enter funciona no input
> - [ ] Botao de reiniciar apos acertar
> - [ ] Validacao de entrada (numero valido)
> - [ ] CSS aplicado

---

### Atividade 4.3 -- Processador de Dados com Arrays

**Objetivo:** Praticar metodos de arrays criando funcoes que processam dados.

**Tempo estimado:** 30 minutos

#### Passo 1: Dados iniciais

```javascript
const alunos = [
    { nome: "Ana", nota: 8.5, idade: 22 },
    { nome: "Carlos", nota: 6.0, idade: 25 },
    { nome: "Maria", nota: 9.2, idade: 20 },
    { nome: "Pedro", nota: 4.5, idade: 23 },
    { nome: "Julia", nota: 7.8, idade: 21 },
    { nome: "Lucas", nota: 5.5, idade: 24 },
    { nome: "Beatriz", nota: 9.8, idade: 19 },
    { nome: "Rafael", nota: 3.2, idade: 26 }
];
```

#### Passo 2: Criar funcoes usando metodos de array

Implemente e teste cada funcao:

1. `listarNomes()` -- retorna array com apenas os nomes (use `map`)
2. `aprovados()` -- retorna alunos com nota >= 7 (use `filter`)
3. `reprovados()` -- retorna alunos com nota < 7 (use `filter`)
4. `calcularMediaTurma()` -- retorna a media de notas da turma (use `reduce`)
5. `maisNovo()` -- retorna o aluno mais novo (use `reduce` ou `sort`)
6. `ordenarPorNota()` -- retorna array ordenado por nota decrescente (use `sort`)
7. `buscarAluno(nome)` -- busca aluno pelo nome (use `find`)
8. `alunosFormatados()` -- retorna array de strings: "Ana - Nota: 8.5" (use `map`)

#### Passo 3: Exibir na pagina

Crie uma interface HTML que mostre os resultados de cada funcao em secoes diferentes.

> **Checklist de conclusao:**
> - [ ] 8 funcoes implementadas usando metodos de array
> - [ ] Uso correto de map, filter, reduce, sort, find
> - [ ] Todas as funcoes testadas no console
> - [ ] Resultados exibidos na pagina HTML

---

## 4.17 Atividades Praticas -- Dia 7

As atividades do Dia 7 focam em manipulacao do DOM, eventos, formularios e localStorage.

---

### Atividade 4.4 -- Formulario com Validacao Dinamica

**Objetivo:** Criar um formulario de cadastro com validacao em tempo real usando JavaScript.

**Tempo estimado:** 40 minutos

#### Passo 1: HTML do formulario

Crie `cadastro.html` com um formulario contendo:
- Nome completo (minimo 3 caracteres)
- E-mail (deve conter @ e .)
- Senha (minimo 8 caracteres, deve conter numero e letra)
- Confirmar senha (deve ser igual a senha)
- Idade (deve ser entre 18 e 120)
- Botao de cadastrar

#### Passo 2: Validacao em tempo real

Para **cada campo**, adicione um listener de `input` que valida enquanto o usuario digita:

```javascript
const campoNome = document.querySelector("#nome");
const erroNome = document.querySelector("#erro-nome");

campoNome.addEventListener("input", () => {
    const nome = campoNome.value.trim();

    if (nome.length < 3) {
        erroNome.textContent = "Nome deve ter pelo menos 3 caracteres";
        campoNome.classList.add("invalido");
        campoNome.classList.remove("valido");
    } else {
        erroNome.textContent = "";
        campoNome.classList.remove("invalido");
        campoNome.classList.add("valido");
    }
});
```

#### Passo 3: Validacao de senha forte

```javascript
function validarSenhaForte(senha) {
    const temMinimo = senha.length >= 8;
    const temLetra = /[a-zA-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    return temMinimo && temLetra && temNumero;
}
```

#### Passo 4: Validacao no envio

No `submit`, valide **todos** os campos novamente e so envie se tudo estiver correto. Mostre uma mensagem de sucesso.

#### Passo 5: Estilizar

Adicione CSS com:
- Borda verde para campos validos
- Borda vermelha para campos invalidos
- Mensagens de erro em vermelho
- Transicao suave ao mudar as cores

> **Checklist de conclusao:**
> - [ ] Formulario com 5+ campos
> - [ ] Validacao em tempo real (input event)
> - [ ] Validacao de e-mail
> - [ ] Validacao de senha forte (8+ caracteres, letra + numero)
> - [ ] Confirmacao de senha
> - [ ] Mensagens de erro especificas para cada campo
> - [ ] Visual: bordas coloridas e mensagens estilizadas
> - [ ] Validacao final no submit

---

### Atividade 4.5 -- Lista de Tarefas (To-Do List)

**Objetivo:** Criar um aplicativo de lista de tarefas completo com todas as funcionalidades: adicionar, remover, marcar como concluida e salvar com localStorage.

**Tempo estimado:** 60 minutos

Este e o **projeto integrador** do modulo -- combina tudo o que voce aprendeu sobre JavaScript.

#### Requisitos do aplicativo

| Funcionalidade | Descricao |
|----------------|-----------|
| **Adicionar tarefa** | Campo de texto + botao (e tecla Enter) |
| **Exibir lista** | Cada tarefa com texto, checkbox e botao de remover |
| **Marcar como concluida** | Checkbox risca o texto da tarefa |
| **Remover tarefa** | Botao remove a tarefa da lista |
| **Persistencia** | Tarefas salvas no localStorage (sobrevivem ao recarregar) |
| **Contador** | Exibir quantidade de tarefas pendentes |
| **Limpar concluidas** | Botao para remover todas as tarefas concluidas |

#### Passo 1: Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <link rel="stylesheet" href="css/tarefas.css">
</head>
<body>
    <main>
        <h1>Minhas Tarefas</h1>

        <div class="input-container">
            <input type="text" id="nova-tarefa" placeholder="Adicionar nova tarefa...">
            <button id="btn-adicionar">Adicionar</button>
        </div>

        <div class="info">
            <span id="contador">0 tarefas pendentes</span>
            <button id="btn-limpar">Limpar concluidas</button>
        </div>

        <ul id="lista-tarefas">
            <!-- Tarefas serao inseridas aqui pelo JavaScript -->
        </ul>
    </main>

    <script src="js/tarefas.js"></script>
</body>
</html>
```

#### Passo 2: JavaScript

Crie `js/tarefas.js` com a seguinte estrutura:

```javascript
// Estado da aplicacao
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Elementos do DOM
const inputTarefa = document.querySelector("#nova-tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");
const listaTarefas = document.querySelector("#lista-tarefas");
const contador = document.querySelector("#contador");
const btnLimpar = document.querySelector("#btn-limpar");

// Funcoes
function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function atualizarContador() {
    const pendentes = tarefas.filter(t => !t.concluida).length;
    contador.textContent = `${pendentes} tarefa${pendentes !== 1 ? "s" : ""} pendente${pendentes !== 1 ? "s" : ""}`;
}

function renderizar() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {
        const li = document.createElement("li");
        li.className = tarefa.concluida ? "concluida" : "";

        li.innerHTML = `
            <input type="checkbox" ${tarefa.concluida ? "checked" : ""}>
            <span>${tarefa.texto}</span>
            <button class="btn-remover">X</button>
        `;

        // Marcar como concluida
        li.querySelector("input").addEventListener("change", () => {
            tarefas[indice].concluida = !tarefas[indice].concluida;
            salvar();
            renderizar();
        });

        // Remover
        li.querySelector(".btn-remover").addEventListener("click", () => {
            tarefas.splice(indice, 1);
            salvar();
            renderizar();
        });

        listaTarefas.appendChild(li);
    });

    atualizarContador();
}

// Adicionar tarefa
function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto !== "") {
        tarefas.push({ texto: texto, concluida: false });
        salvar();
        renderizar();
        inputTarefa.value = "";
        inputTarefa.focus();
    }
}

// Event listeners
btnAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});

btnLimpar.addEventListener("click", () => {
    tarefas = tarefas.filter(t => !t.concluida);
    salvar();
    renderizar();
});

// Renderizar ao carregar
renderizar();
```

#### Passo 3: CSS completo

Crie `css/tarefas.css` estilizando:
- Layout centralizado e limpo
- Campo de input e botao de adicionar alinhados (Flexbox)
- Itens da lista com hover effect
- Tarefas concluidas com texto riscado e cor mais clara
- Botao de remover (vermelho, aparece no hover)
- Animacao ao adicionar/remover itens
- Responsivo para celulares

#### Passo 4: Testar

1. Adicionar varias tarefas
2. Marcar algumas como concluidas
3. Remover tarefas
4. **Recarregar a pagina** e verificar se as tarefas foram salvas
5. Usar o botao "Limpar concluidas"
6. Testar em tela de celular (DevTools > modo responsivo)

#### Passo 5: Commit no Git

```bash
git add .
git commit -m "Adicionar lista de tarefas com JavaScript e localStorage"
git push
```

> **Checklist de conclusao:**
> - [ ] HTML semantico com estrutura limpa
> - [ ] CSS externo com design atraente
> - [ ] Adicionar tarefas (botao e tecla Enter)
> - [ ] Marcar tarefas como concluidas (checkbox + texto riscado)
> - [ ] Remover tarefas individuais
> - [ ] Contador de tarefas pendentes
> - [ ] Botao para limpar concluidas
> - [ ] localStorage: tarefas persistem apos recarregar
> - [ ] Responsivo para celulares
> - [ ] Commit feito no Git

---

## Resumo do Modulo 4

Parabens por completar o Modulo 4! Voce agora sabe programar com JavaScript:

| Topico | O que aprendeu |
|--------|---------------|
| O que e JavaScript | Historia, o que faz, onde roda |
| Onde escrever JS | Console, inline, interno, externo |
| Variaveis | let, const, (var), regras de nomenclatura |
| Tipos de dados | String, Number, Boolean, null, undefined, Array, Object, typeof |
| Operadores | Aritmeticos, comparacao (===), logicos (&&, \|\|, !), atribuicao |
| Condicionais | if/else if/else, operador ternario, switch |
| Loops | for, while, do...while, for...of, for...in, break, continue |
| Funcoes | Declaracao, parametros, return, arrow functions, valor padrao |
| Arrays | Criacao, acesso, push, pop, map, filter, forEach, find, reduce, sort |
| Objetos | Criacao, acesso, metodos, desestruturacao, spread, Object.keys/values |
| Template literals | Interpolacao com ${}, strings multilinhas |
| Manipulacao do DOM | querySelector, textContent, innerHTML, classList, createElement |
| Eventos | addEventListener, click, input, submit, keydown, preventDefault |
| Formularios com JS | Validacao personalizada, validacao em tempo real, mensagens de erro |
| localStorage | setItem, getItem, removeItem, JSON.stringify/parse |

### O que vem a seguir

No **Modulo 5 (Projeto Final)**, voce vai colocar **tudo** em pratica:
- Revisao geral de HTML, CSS e JavaScript
- Boas praticas de desenvolvimento
- Deploy na internet (GitHub Pages)
- Construcao do projeto final completo
- Apresentacao do projeto

Voce agora domina as **tres linguagens fundamentais da web**: HTML, CSS e JavaScript. O proximo passo e colocar tudo junto em um projeto real!

> **Dica final:** JavaScript e uma linguagem vasta e profunda. O que voce aprendeu aqui sao os fundamentos, mas eles sao a base para tudo o que vem depois -- frameworks como React, Vue e Angular; desenvolvimento back-end com Node.js; aplicativos moveis e muito mais. Continue praticando e explorando!

---

> **Nota do instrutor:** Este material faz parte do curso de Fundamentos de Desenvolvimento Web. A reproducao parcial ou total para fins educacionais e permitida com os devidos creditos.
