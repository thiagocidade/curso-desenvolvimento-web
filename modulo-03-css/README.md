# Modulo 3: CSS -- Estilizando a Web

> **Duracao:** 8 horas (Dias 4 e 5)
> **Pre-requisitos:** Modulo 2 -- HTML: Estruturando a Web
> **Objetivo:** Dominar CSS para criar paginas web visualmente atraentes, responsivas e modernas.

---

## Sumario

- [3.1 O que e CSS](#31-o-que-e-css)
- [3.2 Como Adicionar CSS ao HTML](#32-como-adicionar-css-ao-html)
- [3.3 Seletores CSS](#33-seletores-css)
- [3.4 Especificidade e Cascata](#34-especificidade-e-cascata)
- [3.5 Cores em CSS](#35-cores-em-css)
- [3.6 Tipografia e Fontes](#36-tipografia-e-fontes)
- [3.7 Unidades CSS](#37-unidades-css)
- [3.8 Box Model](#38-box-model)
- [3.9 Display e Posicionamento](#39-display-e-posicionamento)
- [3.10 Flexbox](#310-flexbox)
- [3.11 CSS Grid](#311-css-grid)
- [3.12 Responsividade e Media Queries](#312-responsividade-e-media-queries)
- [3.13 Variaveis CSS](#313-variaveis-css)
- [3.14 Transicoes e Animacoes](#314-transicoes-e-animacoes)
- [3.15 Reset e Normalize CSS](#315-reset-e-normalize-css)
- [3.16 Frameworks CSS](#316-frameworks-css)
- [3.17 Atividades Praticas -- Dia 4](#317-atividades-praticas----dia-4)
- [3.18 Atividades Praticas -- Dia 5](#318-atividades-praticas----dia-5)

---

## 3.1 O que e CSS

No Modulo 2, voce aprendeu a estruturar paginas com HTML. Agora, vamos aprender a linguagem que transforma essas estruturas em paginas bonitas e profissionais: o **CSS**.

### Relembrando: CSS na analogia da casa

- **HTML** = Estrutura (tijolos, paredes, telhado)
- **CSS** = Aparencia (pintura, decoracao, cores, moveis, jardim)
- **JavaScript** = Funcionalidade (eletricidade, automacao)

Sem CSS, todas as paginas web seriam textos pretos em fundo branco com a formatacao padrao do navegador. O CSS e o que torna a web visualmente rica e diversificada.

### O que significa CSS

**CSS** e a sigla de *Cascading Style Sheets* (Folhas de Estilo em Cascata).

- **Cascading (Cascata):** as regras de estilo "cascateiam" -- ou seja, varias regras podem se aplicar ao mesmo elemento, e existe uma ordem de prioridade para resolver conflitos
- **Style (Estilo):** define a aparencia visual dos elementos
- **Sheets (Folhas):** os estilos sao escritos em arquivos separados (folhas de estilo)

### O que o CSS controla

Com CSS voce pode controlar praticamente tudo sobre a aparencia de uma pagina:

| Aspecto | Exemplos |
|---------|----------|
| **Cores** | Cor do texto, fundo, bordas, gradientes |
| **Tipografia** | Fonte, tamanho, peso, espacamento, alinhamento |
| **Espacamento** | Margens, padding, gaps |
| **Layout** | Posicao, tamanho, ordem dos elementos |
| **Bordas** | Estilo, espessura, arredondamento, sombras |
| **Responsividade** | Adaptacao a diferentes tamanhos de tela |
| **Animacoes** | Transicoes, transformacoes, animacoes |
| **Efeitos visuais** | Opacidade, filtros, sombras, gradientes |

### Anatomia de uma regra CSS

Uma regra CSS e composta por um **seletor** e um **bloco de declaracoes**:

```css
seletor {
    propriedade: valor;
    propriedade: valor;
}
```

```
        Regra CSS completa
|----------------------------------|
|                                  |
   h1     {  color: blue;  font-size: 32px;  }
   |          |      |       |         |
Seletor   Propriedade Valor  Propriedade Valor
(quem?)   (o que mudar?) (para que?)
          |____________|  |_______________|
           Declaracao       Declaracao
```

**Exemplo pratico:**

```css
/* Seletor: todos os paragrafos */
p {
    color: #333333;           /* Cor do texto: cinza escuro */
    font-size: 16px;          /* Tamanho da fonte: 16 pixels */
    line-height: 1.6;         /* Altura da linha: 1.6x o tamanho da fonte */
    margin-bottom: 10px;      /* Espaco abaixo do paragrafo: 10 pixels */
}
```

**Regras de sintaxe:**
- O seletor fica **antes** das chaves `{}`
- Cada declaracao termina com **ponto e virgula** `;`
- A propriedade e o valor sao separados por **dois pontos** `:`
- Use **comentarios** com `/* texto */`
- A indentacao nao e obrigatoria, mas melhora a leitura

---

## 3.2 Como Adicionar CSS ao HTML

Existem tres formas de adicionar CSS a uma pagina HTML. Vamos ver cada uma, da menos recomendada a mais recomendada.

### 1. CSS Inline (dentro da tag HTML)

O estilo e aplicado diretamente no elemento usando o atributo `style`:

```html
<p style="color: blue; font-size: 18px;">Este texto e azul e tem 18px.</p>
<h1 style="color: red; text-align: center;">Titulo vermelho e centralizado</h1>
```

**Quando usar:** quase nunca. Apenas para testes rapidos ou em situacoes muito especificas.

**Problemas:**
- Mistura HTML com CSS (dificulta manutencao)
- Nao pode ser reutilizado (precisa repetir em cada elemento)
- Tem a **maior prioridade** na cascata (pode causar confusao)
- Impossivel de usar pseudo-classes (:hover) e media queries

### 2. CSS Interno (dentro do `<head>`)

O estilo e escrito dentro de uma tag `<style>` no `<head>` do documento:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Pagina</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        h1 {
            color: #2c3e50;
            text-align: center;
        }

        p {
            color: #555;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Titulo da Pagina</h1>
    <p>Conteudo da pagina.</p>
</body>
</html>
```

**Quando usar:** para exemplos autocontidos (como os arquivos na pasta `exemplos/` deste curso) ou paginas unicas.

**Vantagens:** o CSS fica separado do HTML, pode usar seletores completos.
**Desvantagens:** nao e reutilizavel entre paginas diferentes.

### 3. CSS Externo (arquivo separado) -- RECOMENDADO

O estilo e escrito em um arquivo `.css` separado e conectado ao HTML com a tag `<link>`:

**Arquivo `estilo.css`:**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #2c3e50;
    text-align: center;
}

p {
    color: #555;
    line-height: 1.6;
}
```

**Arquivo `index.html`:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Pagina</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <h1>Titulo da Pagina</h1>
    <p>Conteudo da pagina.</p>
</body>
</html>
```

**Quando usar:** sempre que possivel. E a forma padrao e recomendada.

**Vantagens:**
- **Reutilizavel:** o mesmo CSS serve para varias paginas
- **Organizacao:** HTML e CSS ficam separados (separacao de responsabilidades)
- **Cache:** o navegador guarda o CSS em cache, acelerando o carregamento
- **Manutencao:** mais facil de encontrar e modificar estilos

### Organizacao de arquivos

Uma estrutura comum de projeto:

```
meu-site/
├── index.html
├── sobre.html
├── contato.html
├── css/
│   ├── estilo.css        (estilos globais)
│   └── responsivo.css    (media queries)
├── js/
│   └── script.js
└── img/
    ├── logo.png
    └── banner.jpg
```

> **Dica:** Neste modulo, usaremos CSS interno nos exemplos para manter tudo em um unico arquivo. Mas em projetos reais, sempre use CSS externo.

### Comparacao rapida

| Tipo | Onde fica | Reutilizavel | Recomendado |
|------|-----------|:------------:|:-----------:|
| Inline | Atributo `style` da tag | Nao | Nao |
| Interno | Tag `<style>` no `<head>` | Na mesma pagina | Exemplos |
| Externo | Arquivo `.css` separado | Sim, entre paginas | Sim |

---

## 3.3 Seletores CSS

Seletores sao a forma de **escolher quais elementos** HTML serao estilizados. Dominar seletores e uma das habilidades mais importantes em CSS.

### Seletor de Elemento (Tag)

Seleciona **todos os elementos** de um tipo:

```css
/* Todos os paragrafos */
p {
    color: #555;
    line-height: 1.6;
}

/* Todos os titulos h1 */
h1 {
    color: #2c3e50;
    font-size: 2em;
}

/* Todas as imagens */
img {
    max-width: 100%;
    border-radius: 8px;
}
```

### Seletor de Classe (`.`)

Seleciona elementos que tem uma **classe** especifica. Uma classe pode ser usada em **varios** elementos:

```css
/* CSS */
.destaque {
    background-color: #f1c40f;
    padding: 5px 10px;
    border-radius: 4px;
}

.texto-azul {
    color: #3498db;
}

.botao {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
}
```

```html
<!-- HTML -->
<p class="destaque">Este paragrafo esta destacado.</p>
<p class="texto-azul">Este texto e azul.</p>
<p class="destaque texto-azul">Multiplas classes no mesmo elemento!</p>
<button class="botao">Clique aqui</button>
```

> **Dica:** Um elemento pode ter **varias classes** separadas por espaco. Isso permite criar estilos combinaveis e reutilizaveis.

### Seletor de ID (`#`)

Seleciona um elemento **unico** pelo seu ID. Cada ID deve ser usado **apenas uma vez** por pagina:

```css
#cabecalho {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
}

#titulo-principal {
    font-size: 2.5em;
    text-align: center;
}
```

```html
<header id="cabecalho">
    <h1 id="titulo-principal">Meu Site</h1>
</header>
```

> **Atencao:** Prefira **classes** em vez de IDs para estilizacao. IDs tem especificidade muito alta (veremos na secao 3.4) e nao sao reutilizaveis. Use IDs para links ancora e JavaScript.

### Seletor Universal (`*`)

Seleciona **todos os elementos** da pagina:

```css
/* Muito usado para "reset" basico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Seletor de Atributo

Seleciona elementos com base em seus **atributos**:

```css
/* Todos os inputs do tipo text */
input[type="text"] {
    border: 2px solid #3498db;
    padding: 8px;
}

/* Todos os links que abrem em nova aba */
a[target="_blank"] {
    color: #e74c3c;
}

/* Todos os links que comecam com https */
a[href^="https"] {
    color: green;
}

/* Todos os links que terminam com .pdf */
a[href$=".pdf"] {
    color: red;
}
```

### Seletores Combinadores

Combinadores permitem selecionar elementos com base em sua **relacao** com outros elementos.

#### Descendente (espaco)

Seleciona elementos que estao **dentro** de outro elemento (qualquer nivel):

```css
/* Todos os <li> dentro de .menu (filhos, netos, etc.) */
.menu li {
    list-style: none;
    padding: 5px 10px;
}

/* Todos os <p> dentro de <article> */
article p {
    text-indent: 20px;
}
```

#### Filho direto (`>`)

Seleciona apenas os **filhos diretos** (nao netos):

```css
/* Apenas os <p> que sao filhos diretos de .container */
.container > p {
    font-weight: bold;
    color: #8e44ad;
}
```

#### Irmao adjacente (`+`)

Seleciona o elemento **imediatamente apos** outro:

```css
/* O primeiro <p> logo apos um <h2> */
h2 + p {
    font-size: 1.1em;
    color: #2980b9;
}
```

#### Irmaos gerais (`~`)

Seleciona **todos os irmaos** que vem depois:

```css
/* Todos os <p> que vem apos um <h2> (no mesmo nivel) */
h2 ~ p {
    color: #555;
}
```

### Agrupando seletores

Quando varios seletores compartilham os mesmos estilos, agrupe-os com virgula:

```css
/* Em vez de repetir: */
h1 { color: #2c3e50; font-family: Georgia, serif; }
h2 { color: #2c3e50; font-family: Georgia, serif; }
h3 { color: #2c3e50; font-family: Georgia, serif; }

/* Agrupe assim: */
h1, h2, h3 {
    color: #2c3e50;
    font-family: Georgia, serif;
}
```

### Pseudo-classes

Pseudo-classes selecionam elementos em **estados especiais**:

```css
/* Quando o mouse passa sobre o link */
a:hover {
    color: #e74c3c;
    text-decoration: underline;
}

/* Quando o link esta sendo clicado */
a:active {
    color: #c0392b;
}

/* Link ja visitado */
a:visited {
    color: #8e44ad;
}

/* Quando um campo de formulario esta focado */
input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}

/* Primeiro filho */
li:first-child {
    font-weight: bold;
}

/* Ultimo filho */
li:last-child {
    font-style: italic;
}

/* Filhos alternados (linhas zebradas) */
tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:nth-child(odd) {
    background-color: white;
}
```

**Pseudo-classes mais usadas:**

| Pseudo-classe | Seleciona quando... |
|---------------|---------------------|
| `:hover` | O mouse esta sobre o elemento |
| `:active` | O elemento esta sendo clicado |
| `:focus` | O elemento tem foco (campo de formulario) |
| `:visited` | O link ja foi visitado |
| `:first-child` | E o primeiro filho do pai |
| `:last-child` | E o ultimo filho do pai |
| `:nth-child(n)` | E o n-esimo filho (aceita numeros, `odd`, `even`, formulas) |
| `:not(seletor)` | NAO corresponde ao seletor |

### Pseudo-elementos

Pseudo-elementos permitem estilizar **partes especificas** de um elemento:

```css
/* Inserir conteudo antes do elemento */
.citacao::before {
    content: "\201C";    /* Aspas de abertura */
    font-size: 3em;
    color: #3498db;
}

/* Inserir conteudo apos o elemento */
.citacao::after {
    content: "\201D";    /* Aspas de fechamento */
    font-size: 3em;
    color: #3498db;
}

/* Primeira letra do paragrafo (capitular) */
.artigo::first-letter {
    font-size: 2.5em;
    font-weight: bold;
    color: #e74c3c;
    float: left;
    margin-right: 8px;
}

/* Primeira linha do paragrafo */
p::first-line {
    font-weight: bold;
}

/* Texto selecionado pelo usuario */
::selection {
    background-color: #3498db;
    color: white;
}
```

> **Nota:** Pseudo-elementos usam **dois-pontos duplos** `::` (pseudo-classes usam um so `:`).

> **Nota:** Veja o arquivo `exemplos/01-seletores-e-cores.html` para ver todos esses seletores em acao!

---

## 3.4 Especificidade e Cascata

Quando multiplas regras CSS se aplicam ao mesmo elemento, como o navegador decide qual regra "vence"? A resposta esta na **cascata** e na **especificidade**.

### A Cascata (Cascade)

O "C" de CSS significa **Cascading** (Cascata). As regras CSS cascateiam seguindo esta ordem de prioridade (da menor para a maior):

1. **Estilos padrao do navegador** (menor prioridade)
2. **CSS externo** (arquivo `.css`)
3. **CSS interno** (tag `<style>`)
4. **CSS inline** (atributo `style`)
5. **`!important`** (maior prioridade -- **evite usar!**)

Se duas regras tem a mesma prioridade, **a ultima declarada vence**:

```css
p { color: blue; }
p { color: red; }  /* VENCE -- veio por ultimo */
```

### Especificidade (Specificity)

A especificidade e um sistema de **pontuacao** que determina qual regra CSS tem prioridade quando varias regras se aplicam ao mesmo elemento.

**Cada tipo de seletor tem um peso:**

```
Inline styles     =  1000 pontos
ID (#)            =   100 pontos
Classe (.)/pseudo =    10 pontos
Elemento/tag      =     1 ponto
```

**Exemplos:**

| Seletor | Calculo | Especificidade |
|---------|---------|:--------------:|
| `p` | 1 elemento | 0-0-1 |
| `.destaque` | 1 classe | 0-1-0 |
| `p.destaque` | 1 elemento + 1 classe | 0-1-1 |
| `#titulo` | 1 ID | 1-0-0 |
| `#titulo .destaque` | 1 ID + 1 classe | 1-1-0 |
| `div p .texto` | 2 elementos + 1 classe | 0-1-2 |

```css
/* Especificidade: 0-0-1 */
p {
    color: blue;
}

/* Especificidade: 0-1-0 (VENCE sobre p) */
.destaque {
    color: red;
}

/* Especificidade: 1-0-0 (VENCE sobre .destaque) */
#titulo {
    color: green;
}
```

**Analogia:** Pense na especificidade como um sistema de desempate em um campeonato esportivo. Primeiro, contamos as "vitorias" (IDs), depois os "empates" (classes), depois os "gols" (elementos). O time com mais vitorias ganha, independente dos gols.

### `!important` -- O recurso de emergencia

O `!important` forca uma declaracao a ter a **maior prioridade**, ignorando todas as regras de especificidade:

```css
p {
    color: red !important;  /* VENCE tudo, ate inline styles */
}
```

> **Atencao:** **Evite `!important`** ao maximo! Ele quebra o fluxo natural da cascata e torna o CSS muito dificil de manter. Use-o apenas como ultimo recurso.

### Heranca (Inheritance)

Algumas propriedades CSS sao **herdadas** automaticamente pelos elementos filhos:

```css
body {
    font-family: Arial, sans-serif;   /* Herdado por todos */
    color: #333;                       /* Herdado por todos */
    line-height: 1.6;                  /* Herdado por todos */
}
```

**Propriedades que SAO herdadas:** `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `visibility`

**Propriedades que NAO sao herdadas:** `margin`, `padding`, `border`, `background`, `width`, `height`, `display`, `position`

> **Dica:** Defina propriedades herdaveis (como fonte e cor do texto) no `body` para que todos os elementos da pagina herdem automaticamente.

---

## 3.5 Cores em CSS

As cores sao um dos aspectos mais impactantes do design visual. O CSS oferece varios formatos para especificar cores.

### Cores por nome

O CSS reconhece **147 cores nomeadas**:

```css
p { color: red; }
h1 { color: tomato; }
div { background-color: lightblue; }
span { color: darkgreen; }
```

Algumas cores nomeadas uteis: `white`, `black`, `red`, `blue`, `green`, `orange`, `purple`, `gray`, `lightgray`, `darkgray`, `tomato`, `coral`, `salmon`, `gold`, `navy`, `teal`.

### Hexadecimal (#RRGGBB)

O formato mais popular. Cada par de digitos representa a intensidade de **Vermelho (R)**, **Verde (G)** e **Azul (B)**, de 00 a FF:

```css
h1 { color: #FF0000; }           /* Vermelho puro */
p { color: #333333; }            /* Cinza escuro */
div { background: #3498db; }     /* Azul */
span { color: #2ecc71; }         /* Verde */
```

```
#3498db
 || || ||
 RR GG BB
 34 98 db

R = 34 (pouco vermelho)
G = 98 (verde medio)
B = db (muito azul)
= Azul!
```

**Formato curto:** quando os pares sao iguais, voce pode abreviar:

```css
color: #FF0000;  /* equivale a */ color: #F00;
color: #333333;  /* equivale a */ color: #333;
color: #FFFFFF;  /* equivale a */ color: #FFF;
```

### RGB e RGBA

Especifica as cores usando valores de **0 a 255** para Vermelho, Verde e Azul:

```css
p { color: rgb(52, 152, 219); }           /* Azul */
p { color: rgb(231, 76, 60); }            /* Vermelho */
div { background: rgb(46, 204, 113); }    /* Verde */
```

**RGBA** adiciona um canal **Alpha** (transparencia) de 0 (transparente) a 1 (opaco):

```css
div { background: rgba(0, 0, 0, 0.5); }       /* Preto 50% transparente */
div { background: rgba(52, 152, 219, 0.3); }   /* Azul 30% transparente */
div { background: rgba(255, 255, 255, 0.8); }  /* Branco 80% opaco */
```

### HSL e HSLA

**HSL** define cores por **Matiz (Hue)**, **Saturacao (Saturation)** e **Luminosidade (Lightness)**:

```css
p { color: hsl(348, 100%, 61%); }          /* Vermelho/rosa */
div { background: hsl(204, 70%, 53%); }    /* Azul */
```

- **H (Hue):** angulo na roda de cores (0-360). 0=vermelho, 120=verde, 240=azul
- **S (Saturation):** intensidade da cor (0%=cinza, 100%=cor pura)
- **L (Lightness):** luminosidade (0%=preto, 50%=cor normal, 100%=branco)

```
Roda de cores (Hue):
    0/360 = Vermelho
       60 = Amarelo
      120 = Verde
      180 = Ciano
      240 = Azul
      300 = Magenta
```

**HSLA** adiciona transparencia:

```css
div { background: hsla(48, 89%, 50%, 0.8); }  /* Amarelo 80% opaco */
```

> **Dica:** HSL e mais intuitivo para ajustar cores. Quer a mesma cor mais clara? Aumente o L. Mais apagada? Diminua o S.

### Gradientes

Gradientes criam transicoes suaves entre duas ou mais cores:

#### Gradiente linear

```css
/* Da esquerda para a direita */
div { background: linear-gradient(to right, #3498db, #2ecc71); }

/* De cima para baixo (padrao) */
div { background: linear-gradient(#667eea, #764ba2); }

/* Em angulo */
div { background: linear-gradient(135deg, #667eea, #764ba2); }

/* Multiplas cores */
div { background: linear-gradient(to right, #e74c3c, #f39c12, #2ecc71, #3498db); }
```

#### Gradiente radial

```css
/* Do centro para as bordas */
div { background: radial-gradient(circle, #f093fb, #f5576c); }
```

### `opacity` -- Transparencia do elemento inteiro

```css
div {
    opacity: 0.5;   /* 50% transparente (afeta o elemento TODO, inclusive filhos) */
}
```

> **Dica:** Use `rgba()` ou `hsla()` quando quiser transparencia **apenas no fundo**, sem afetar o texto. Use `opacity` quando quiser transparencia no **elemento inteiro**.

> **Nota:** Veja o arquivo `exemplos/01-seletores-e-cores.html` para ver todos os formatos de cores e gradientes em acao!

---

## 3.6 Tipografia e Fontes

A tipografia e um dos elementos mais importantes do design web. Ela afeta diretamente a **legibilidade** e a **personalidade** visual do seu site.

### `font-family` -- Escolhendo a fonte

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

A propriedade aceita uma **lista de fontes** em ordem de preferencia. Se a primeira nao estiver disponivel, o navegador tenta a proxima:

```css
/* Fonte desejada, alternativa, familia generica */
h1 {
    font-family: 'Georgia', 'Times New Roman', serif;
}

p {
    font-family: 'Segoe UI', 'Roboto', 'Helvetica', Arial, sans-serif;
}

code {
    font-family: 'Fira Code', 'Courier New', monospace;
}
```

**Familias genericas (fallback final):**

| Familia | Caracteristica | Exemplo |
|---------|---------------|---------|
| `serif` | Com serifas (tracinhos nas pontas) | Times New Roman, Georgia |
| `sans-serif` | Sem serifas (limpa e moderna) | Arial, Helvetica, Roboto |
| `monospace` | Largura fixa (cada letra ocupa o mesmo espaco) | Courier New, Fira Code |
| `cursive` | Estilo manuscrito | Comic Sans MS, Brush Script |

> **Dica:** Sempre termine a lista com uma **familia generica** (`serif`, `sans-serif` ou `monospace`). Coloque nomes de fontes com espacos entre aspas: `'Segoe UI'`.

### Google Fonts -- Fontes gratuitas

O **Google Fonts** (fonts.google.com) oferece centenas de fontes gratuitas para usar na web:

**Como usar:**

1. Acesse https://fonts.google.com
2. Escolha uma fonte (ex: "Inter", "Poppins", "Roboto")
3. Copie o link fornecido
4. Cole no `<head>` do seu HTML

```html
<head>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

```css
body {
    font-family: 'Inter', sans-serif;
}
```

**Fontes populares para web:**
- **Inter** -- moderna e muito legivel
- **Roboto** -- a fonte padrao do Android
- **Poppins** -- geometrica e elegante
- **Open Sans** -- classica e versatil
- **Lato** -- profissional e amigavel

### Propriedades de fonte

```css
p {
    font-size: 16px;          /* Tamanho da fonte */
    font-weight: bold;        /* Peso: normal, bold, 100-900 */
    font-style: italic;       /* Estilo: normal, italic, oblique */
    font-variant: small-caps; /* Variante: normal, small-caps */
}
```

**Valores de `font-weight`:**

| Valor | Nome | Uso comum |
|:-----:|------|-----------|
| 100 | Thin | Titulos decorativos |
| 300 | Light | Textos sutis |
| 400 | Normal/Regular | Texto padrao |
| 500 | Medium | Destaque leve |
| 600 | Semi-Bold | Subtitulos |
| 700 | Bold | Negrito padrao |
| 900 | Black | Destaque forte |

### Propriedades de texto

```css
p {
    color: #333;                    /* Cor do texto */
    text-align: center;             /* Alinhamento: left, center, right, justify */
    text-decoration: underline;     /* Decoracao: none, underline, line-through */
    text-transform: uppercase;      /* Transformacao: uppercase, lowercase, capitalize */
    text-indent: 30px;              /* Indentacao da primeira linha */
    letter-spacing: 2px;            /* Espacamento entre letras */
    word-spacing: 5px;              /* Espacamento entre palavras */
    line-height: 1.6;               /* Altura da linha (1.6 = 160% do font-size) */
    text-shadow: 2px 2px 4px gray;  /* Sombra no texto */
}
```

### `line-height` -- Espacamento entre linhas

A `line-height` e uma das propriedades mais importantes para legibilidade:

```css
/* Valores recomendados */
body {
    line-height: 1.6;   /* Para texto corrido: 1.5 a 1.8 */
}

h1 {
    line-height: 1.2;   /* Para titulos: 1.1 a 1.3 */
}
```

> **Dica:** Uma `line-height` de **1.5 a 1.7** para texto corrido melhora muito a legibilidade. Nunca use 1.0 para paragrafos -- fica muito apertado.

---

## 3.7 Unidades CSS

O CSS oferece diversas unidades de medida. Entender quando usar cada uma e fundamental para criar layouts flexiveis e responsivos.

### Unidades absolutas

| Unidade | Nome | Equivalencia |
|:-------:|------|-------------|
| `px` | Pixels | 1px = 1 ponto na tela |
| `cm` | Centimetros | 1cm = ~37.8px |
| `mm` | Milimetros | 1mm = ~3.78px |
| `in` | Polegadas | 1in = 96px |
| `pt` | Pontos | 1pt = 1/72 de polegada |

Na pratica, **usamos quase exclusivamente `px`** entre as absolutas.

### Unidades relativas

| Unidade | Relativa a... | Exemplo |
|:-------:|---------------|---------|
| `em` | Tamanho da fonte do **elemento pai** | `2em` = 2x o tamanho do pai |
| `rem` | Tamanho da fonte do **elemento raiz** (`<html>`) | `1.5rem` = 1.5x o tamanho do html |
| `%` | Dimensao do **elemento pai** | `50%` = metade do pai |
| `vw` | **Largura** da viewport (tela) | `50vw` = metade da largura da tela |
| `vh` | **Altura** da viewport (tela) | `100vh` = altura total da tela |

### `px` -- Pixels

Unidade fixa e previsivel. 1 pixel = 1 ponto na tela:

```css
h1 { font-size: 32px; }
p { font-size: 16px; }
div { width: 400px; padding: 20px; }
```

### `em` -- Relativo ao pai

Relativo ao `font-size` do **elemento pai**:

```css
.container {
    font-size: 16px;
}

.container h1 {
    font-size: 2em;     /* 2 x 16px = 32px */
}

.container p {
    font-size: 1.5em;   /* 1.5 x 16px = 24px */
    margin-bottom: 1em; /* 1 x 24px = 24px (relativo ao proprio font-size!) */
}
```

> **Atencao:** `em` pode causar "efeito cascata" -- se voce aninhar elementos com `em`, os tamanhos se multiplicam.

### `rem` -- Relativo a raiz (RECOMENDADO)

Relativo ao `font-size` do **elemento `<html>`** (raiz). Padrao: 16px:

```css
html {
    font-size: 16px;  /* Padrao do navegador */
}

h1 { font-size: 2rem; }       /* 2 x 16px = 32px */
h2 { font-size: 1.5rem; }     /* 1.5 x 16px = 24px */
p { font-size: 1rem; }        /* 1 x 16px = 16px */
small { font-size: 0.875rem; } /* 0.875 x 16px = 14px */
```

> **Dica:** `rem` e a unidade mais previsivel para fontes e espacamentos. Use `rem` como unidade padrao e `px` apenas quando precisar de um valor absoluto exato.

### `%` -- Porcentagem

Relativo ao **elemento pai**:

```css
.container {
    width: 80%;          /* 80% da largura do pai */
    max-width: 1200px;   /* Nunca passa de 1200px */
    margin: 0 auto;      /* Centraliza horizontalmente */
}

img {
    width: 100%;         /* Ocupa toda a largura do container */
    height: auto;        /* Mantem proporcao */
}
```

### `vw` e `vh` -- Viewport

Relativo ao tamanho da **janela do navegador** (viewport):

```css
/* Secao que ocupa a tela inteira */
.hero {
    width: 100vw;       /* 100% da largura da tela */
    height: 100vh;      /* 100% da altura da tela */
}

/* Titulo responsivo */
h1 {
    font-size: 5vw;     /* Tamanho muda com a largura da tela */
}
```

### Quando usar cada unidade

| Situacao | Unidade recomendada |
|----------|:-------------------:|
| Tamanho de fontes | `rem` |
| Espacamento (margin, padding) | `rem` ou `px` |
| Largura de containers | `%` com `max-width` |
| Altura de secoes | `vh` ou `auto` |
| Bordas | `px` |
| Media queries | `px` ou `em` |
| Secoes full-screen | `100vh`, `100vw` |

---

## 3.8 Box Model

O **Box Model** (Modelo de Caixa) e um dos conceitos mais fundamentais do CSS. Todo elemento HTML e tratado como uma **caixa retangular** composta por quatro camadas.

### As quatro camadas

```
+------------------------------------------+
|              MARGIN                       |
|  +------------------------------------+  |
|  |           BORDER                   |  |
|  |  +------------------------------+  |  |
|  |  |         PADDING              |  |  |
|  |  |  +------------------------+  |  |  |
|  |  |  |                        |  |  |  |
|  |  |  |       CONTENT          |  |  |  |
|  |  |  |    (conteudo real)     |  |  |  |
|  |  |  |                        |  |  |  |
|  |  |  +------------------------+  |  |  |
|  |  |                              |  |  |
|  |  +------------------------------+  |  |
|  |                                    |  |
|  +------------------------------------+  |
|                                          |
+------------------------------------------+
```

| Camada | Propriedade | O que faz |
|--------|-------------|-----------|
| **Content** | `width`, `height` | O conteudo real (texto, imagem, etc.) |
| **Padding** | `padding` | Espaco **interno** entre o conteudo e a borda |
| **Border** | `border` | A borda ao redor do padding |
| **Margin** | `margin` | Espaco **externo** entre o elemento e outros elementos |

**Analogia:** Pense em um quadro na parede:
- **Content** = a foto ou pintura
- **Padding** = o passe-partout (espacamento entre a foto e a moldura)
- **Border** = a moldura
- **Margin** = o espaco entre a moldura e outros quadros na parede

### `content-box` vs `border-box`

#### `content-box` (padrao do navegador)

Com `content-box`, o `width` define apenas o **conteudo**. Padding e border sao **adicionados por fora**:

```css
div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: content-box;   /* Padrao */
}
/* Largura total = 300 + 20 + 20 + 5 + 5 = 350px */
```

#### `border-box` (RECOMENDADO)

Com `border-box`, o `width` inclui **conteudo + padding + border**:

```css
div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: border-box;
}
/* Largura total = 300px (padding e border inclusos!) */
```

**Sempre use `border-box`!** Adicione isso no inicio do seu CSS:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

### Margin -- Espaco externo

```css
/* Todos os lados iguais */
div { margin: 20px; }

/* Vertical | Horizontal */
div { margin: 10px 30px; }

/* Top | Horizontal | Bottom */
div { margin: 10px 20px 30px; }

/* Top | Right | Bottom | Left (sentido horario) */
div { margin: 10px 20px 30px 40px; }

/* Lados individuais */
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}

/* Centralizar horizontalmente */
div {
    width: 800px;
    margin: 0 auto;   /* 0 em cima/baixo, auto nas laterais */
}
```

> **Atencao: Margin Collapse!** Quando duas margens verticais se encontram, elas **nao somam** -- a maior vence. Isso se chama *margin collapse*:
>
> ```
> Elemento A (margin-bottom: 30px)
>                                    } Espaco real: 30px (nao 50px!)
> Elemento B (margin-top: 20px)
> ```

### Padding -- Espaco interno

A sintaxe e identica a do margin:

```css
/* Todos os lados iguais */
div { padding: 20px; }

/* Vertical | Horizontal */
div { padding: 15px 30px; }

/* Top | Right | Bottom | Left */
div { padding: 10px 20px 30px 40px; }

/* Lados individuais */
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

### Border -- Borda

```css
/* Shorthand: espessura estilo cor */
div { border: 2px solid #3498db; }

/* Lados individuais */
div {
    border-top: 3px solid #e74c3c;
    border-bottom: 1px dashed #ccc;
}

/* Componentes separados */
div {
    border-width: 2px;
    border-style: solid;        /* solid, dashed, dotted, double, groove */
    border-color: #3498db;
}
```

**Estilos de borda:**

| Estilo | Visual |
|--------|--------|
| `solid` | Linha solida continua |
| `dashed` | Linha tracejada |
| `dotted` | Linha pontilhada |
| `double` | Linha dupla |
| `groove` | Efeito 3D em relevo |
| `none` | Sem borda |

### `border-radius` -- Cantos arredondados

```css
div { border-radius: 10px; }          /* Todos os cantos */
div { border-radius: 50%; }           /* Circulo perfeito (se for quadrado) */
div { border-radius: 20px 0; }        /* Superior-esq/Inferior-dir | Superior-dir/Inferior-esq */
div { border-radius: 10px 20px 30px 40px; } /* Cada canto individualmente */
```

### `box-shadow` -- Sombra

```css
/* box-shadow: deslocamento-x  deslocamento-y  desfoque  espalhamento  cor */

div { box-shadow: 2px 2px 5px rgba(0,0,0,0.2); }       /* Sombra sutil */
div { box-shadow: 0 4px 15px rgba(0,0,0,0.3); }         /* Sombra elevada */
div { box-shadow: 0 0 20px rgba(52,152,219,0.5); }      /* Brilho colorido */
div { box-shadow: inset 0 0 15px rgba(0,0,0,0.2); }     /* Sombra interna */

/* Multiplas sombras */
div {
    box-shadow:
        0 2px 5px rgba(0,0,0,0.1),
        0 10px 30px rgba(0,0,0,0.15);
}
```

### Width e Height

```css
div {
    width: 80%;              /* Largura relativa */
    max-width: 1200px;       /* Largura maxima */
    min-width: 300px;        /* Largura minima */

    height: auto;            /* Altura automatica (pelo conteudo) */
    min-height: 100vh;       /* Altura minima = tela inteira */
    max-height: 500px;       /* Altura maxima */
}
```

> **Dica:** Evite definir `height` fixa. Prefira `min-height` ou deixe `auto` para que o elemento cresça conforme o conteudo. Altura fixa pode causar overflow (conteudo vazando).

### `overflow` -- Conteudo que vaza

Quando o conteudo e maior que o elemento:

```css
div {
    width: 300px;
    height: 200px;
    overflow: hidden;    /* Esconde o que vaza */
    overflow: scroll;    /* Sempre mostra barra de rolagem */
    overflow: auto;      /* Mostra barra so quando necessario */
    overflow: visible;   /* Mostra o que vaza (padrao) */
}
```

> **Nota:** Veja o arquivo `exemplos/02-box-model.html` para ver o Box Model, bordas, sombras e mais em acao!

---

## 3.9 Display e Posicionamento

Entender `display` e `position` e essencial para controlar **onde** e **como** os elementos aparecem na pagina.

### A propriedade `display`

A propriedade `display` define como o elemento se comporta no layout:

```css
div { display: block; }         /* Bloco (padrao de div, p, h1-h6) */
span { display: inline; }      /* Em linha (padrao de span, a, strong) */
img { display: inline-block; }  /* Mistura dos dois */
div { display: none; }          /* Esconde completamente */
div { display: flex; }          /* Flexbox (secao 3.10) */
div { display: grid; }          /* Grid (secao 3.11) */
```

**Comparacao:**

| Propriedade | Nova linha? | Width/Height? | Margin/Padding vertical? |
|-------------|:-----------:|:-------------:|:------------------------:|
| `block` | Sim | Sim | Sim |
| `inline` | Nao | Nao | Nao (parcial) |
| `inline-block` | Nao | Sim | Sim |
| `none` | Remove do layout | -- | -- |

```css
/* Exemplo pratico: transformar lista em menu horizontal */
nav li {
    display: inline-block;
    padding: 10px 15px;
}
```

### A propriedade `position`

A propriedade `position` define **como** o elemento e posicionado na pagina:

#### `static` (padrao)

O elemento segue o fluxo normal do documento:

```css
div { position: static; }  /* Padrao -- nao precisa declarar */
```

#### `relative`

O elemento mantem sua posicao no fluxo, mas pode ser **deslocado** com `top`, `right`, `bottom`, `left`:

```css
div {
    position: relative;
    top: 10px;      /* Desloca 10px para baixo */
    left: 20px;     /* Desloca 20px para a direita */
}
```

O espaco original do elemento e **preservado** -- outros elementos nao se movem.

#### `absolute`

O elemento e **removido do fluxo** e posicionado em relacao ao **ancestral posicionado** mais proximo (ou ao `<body>` se nenhum for posicionado):

```css
.container {
    position: relative;  /* Referencia para o absolute */
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

```
+---------------------------+
|  .container (relative)    |
|                   +-----+ |
|                   |badge| |  <-- Posicionado no canto
|                   +-----+ |      superior direito do container
|                           |
+---------------------------+
```

#### `fixed`

O elemento e fixado em relacao a **janela do navegador** e nao se move ao rolar:

```css
/* Menu fixo no topo */
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: white;
}
```

#### `sticky`

Combina `relative` e `fixed`. O elemento se comporta como `relative` ate atingir um ponto de rolagem, quando se torna `fixed`:

```css
/* Cabecalho que "gruda" ao rolar */
header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}
```

### `z-index` -- Ordem de empilhamento

Quando elementos se sobrepoe, `z-index` define qual fica **na frente**:

```css
.fundo { z-index: 1; }     /* Atras */
.meio { z-index: 10; }     /* Meio */
.frente { z-index: 100; }  /* Na frente */
```

> **Atencao:** `z-index` so funciona em elementos que tem `position` diferente de `static` (ou em flex/grid items).

---

## 3.10 Flexbox

**Flexbox** (Flexible Box Layout) e um modelo de layout **unidimensional** que facilita alinhar e distribuir espaco entre itens em um container. E a ferramenta mais importante para layouts modernos.

### Conceitos basicos

Para usar Flexbox, voce precisa de dois tipos de elementos:

```
+-----------------------------------------------+
|   FLEX CONTAINER  (display: flex)              |
|  +--------+  +--------+  +--------+           |
|  | FLEX   |  | FLEX   |  | FLEX   |           |
|  | ITEM 1 |  | ITEM 2 |  | ITEM 3 |           |
|  +--------+  +--------+  +--------+           |
+-----------------------------------------------+
```

```css
.container {
    display: flex;   /* Ativa o Flexbox no container */
}
```

Os **filhos diretos** do container automaticamente se tornam **flex items**.

### Eixos do Flexbox

O Flexbox trabalha com dois eixos:

```
flex-direction: row (padrao)

Eixo Principal (Main Axis) --->
+-----+  +-----+  +-----+
|  1  |  |  2  |  |  3  |
+-----+  +-----+  +-----+
              |
              v
    Eixo Cruzado (Cross Axis)


flex-direction: column

Eixo Principal (Main Axis)
              |
              v
         +--------+
         |   1    |
         +--------+
         +--------+
         |   2    |
         +--------+
         +--------+
         |   3    |
         +--------+
Eixo Cruzado --->
```

### Propriedades do Container

#### `flex-direction` -- Direcao dos itens

```css
.container { flex-direction: row; }            /* Horizontal (padrao) */
.container { flex-direction: column; }         /* Vertical */
.container { flex-direction: row-reverse; }    /* Horizontal invertido */
.container { flex-direction: column-reverse; } /* Vertical invertido */
```

#### `justify-content` -- Alinhamento no eixo principal

```css
.container { justify-content: flex-start; }    /* Inicio (padrao) */
.container { justify-content: center; }        /* Centro */
.container { justify-content: flex-end; }      /* Final */
.container { justify-content: space-between; } /* Espacado (sem espaco nas pontas) */
.container { justify-content: space-around; }  /* Espacado (com espaco nas pontas) */
.container { justify-content: space-evenly; }  /* Espacado (espaco igual em tudo) */
```

```
flex-start:     |[1][2][3]         |
center:         |     [1][2][3]    |
flex-end:       |         [1][2][3]|
space-between:  |[1]    [2]    [3] |
space-around:   |  [1]   [2]   [3]  |
space-evenly:   |   [1]  [2]  [3]   |
```

#### `align-items` -- Alinhamento no eixo cruzado

```css
.container { align-items: stretch; }     /* Estica para preencher (padrao) */
.container { align-items: flex-start; }  /* Topo */
.container { align-items: center; }      /* Centro */
.container { align-items: flex-end; }    /* Base */
.container { align-items: baseline; }    /* Linha de base do texto */
```

#### `flex-wrap` -- Quebra de linha

```css
.container { flex-wrap: nowrap; }   /* Nao quebra (padrao) -- itens encolhem */
.container { flex-wrap: wrap; }     /* Quebra para a proxima linha */
```

#### `gap` -- Espaco entre itens

```css
.container {
    display: flex;
    gap: 20px;           /* Espaco entre TODOS os itens */
    row-gap: 15px;       /* Espaco entre linhas */
    column-gap: 20px;    /* Espaco entre colunas */
}
```

> **Dica:** `gap` e muito mais limpo que usar `margin` nos itens, pois nao cria espaco extra nas bordas do container.

### Propriedades dos Itens

#### `flex-grow` -- Quanto o item cresce

```css
.item { flex-grow: 0; }     /* Nao cresce (padrao) */
.item { flex-grow: 1; }     /* Cresce para preencher espaco disponivel */
.item-grande { flex-grow: 2; } /* Cresce o dobro dos outros */
```

#### `flex-shrink` -- Quanto o item encolhe

```css
.item { flex-shrink: 1; }    /* Encolhe normalmente (padrao) */
.item { flex-shrink: 0; }    /* Nunca encolhe */
```

#### `flex-basis` -- Tamanho base

```css
.item { flex-basis: 200px; }  /* Tamanho base de 200px antes de crescer/encolher */
.item { flex-basis: auto; }   /* Tamanho definido pelo conteudo (padrao) */
```

#### `flex` -- Shorthand (RECOMENDADO)

```css
.item { flex: 1; }            /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
.item { flex: 0 0 200px; }    /* Nao cresce, nao encolhe, base de 200px */
.item { flex: 2 1 auto; }     /* Cresce 2x, encolhe normal, tamanho auto */
```

#### `order` -- Ordem visual

```css
.item-1 { order: 3; }   /* Aparece por ultimo */
.item-2 { order: 1; }   /* Aparece primeiro */
.item-3 { order: 2; }   /* Aparece no meio */
```

### Centralizar com Flexbox (o truque mais util!)

A forma mais simples de centralizar algo vertical e horizontalmente:

```css
.container {
    display: flex;
    justify-content: center;  /* Centraliza horizontalmente */
    align-items: center;      /* Centraliza verticalmente */
    height: 100vh;            /* Precisa de uma altura definida */
}
```

### Exemplos praticos de Flexbox

#### Barra de navegacao

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #2c3e50;
}

.navbar .menu {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

#### Layout com cards

```css
.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 250px;
}
```

#### Footer no final da pagina

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;   /* Ocupa todo o espaco disponivel, empurrando o footer para baixo */
}
```

> **Nota:** Veja o arquivo `exemplos/03-flexbox.html` para ver todos esses exemplos de Flexbox em acao!

---

## 3.11 CSS Grid

**CSS Grid** e um modelo de layout **bidimensional** que permite criar layouts complexos com **linhas e colunas** simultaneamente.

### Flexbox vs Grid

| Aspecto | Flexbox | Grid |
|---------|---------|------|
| Dimensoes | **Unidimensional** (linha OU coluna) | **Bidimensional** (linhas E colunas) |
| Ideal para | Componentes (navbar, cards, lista) | Layouts de pagina (estrutura geral) |
| Fluxo | Conteudo determina o layout | Layout determina onde o conteudo vai |

**Regra pratica:** use **Flexbox** para componentes e alinhamento simples, use **Grid** para layouts de pagina completos. Eles podem (e devem) ser usados **juntos**.

### Conceitos basicos

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;  /* 3 colunas */
    grid-template-rows: 60px 1fr 50px;        /* 3 linhas */
    gap: 20px;                                 /* Espaco entre celulas */
}
```

### `grid-template-columns` -- Definindo colunas

```css
/* Colunas com tamanho fixo */
.grid { grid-template-columns: 200px 300px 200px; }

/* Colunas com fracao (fr) -- divide o espaco proporcionalmente */
.grid { grid-template-columns: 1fr 2fr 1fr; }  /* 1:2:1 */

/* Misturando unidades */
.grid { grid-template-columns: 250px 1fr; }  /* Sidebar fixa + conteudo flexivel */

/* repeat() -- atalho para repetir */
.grid { grid-template-columns: repeat(4, 1fr); }  /* 4 colunas iguais */
.grid { grid-template-columns: repeat(3, 200px); } /* 3 colunas de 200px */
```

### A unidade `fr` (fracao)

A unidade `fr` divide o espaco **disponivel** proporcionalmente:

```css
grid-template-columns: 1fr 1fr 1fr;    /* 3 colunas iguais (33% cada) */
grid-template-columns: 1fr 2fr;        /* 2 colunas: 33% e 66% */
grid-template-columns: 200px 1fr;      /* Sidebar de 200px + restante */
```

### `grid-template-rows` -- Definindo linhas

```css
.grid {
    grid-template-rows: 80px 1fr 60px;  /* Header 80px, conteudo flexivel, footer 60px */
}
```

### `gap` -- Espaco entre celulas

```css
.grid {
    gap: 20px;              /* Mesmo espaco em linhas e colunas */
    row-gap: 15px;          /* Espaco entre linhas */
    column-gap: 25px;       /* Espaco entre colunas */
}
```

### Grid responsivo com `auto-fit` e `minmax()`

A combinacao mais poderosa para grids responsivos **sem media queries**:

```css
.grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

Isso cria colunas que:
- Tem no **minimo** 250px de largura
- Crescem ate **1fr** (distribuicao igual do espaco)
- **Reorganizam** automaticamente conforme o tamanho da tela

```
Tela grande (3 colunas):
+--------+  +--------+  +--------+
|   1    |  |   2    |  |   3    |
+--------+  +--------+  +--------+

Tela media (2 colunas):
+-----------+  +-----------+
|     1     |  |     2     |
+-----------+  +-----------+
+-----------+
|     3     |
+-----------+

Tela pequena (1 coluna):
+------------------------+
|          1             |
+------------------------+
+------------------------+
|          2             |
+------------------------+
+------------------------+
|          3             |
+------------------------+
```

### `grid-column` e `grid-row` -- Posicionando itens

Faz um item ocupar **varias celulas**:

```css
/* Ocupa 2 colunas */
.item-destaque {
    grid-column: span 2;
}

/* Ocupa 2 linhas */
.item-alto {
    grid-row: span 2;
}

/* Posicao exata: da coluna 1 ate a coluna 3 */
.header {
    grid-column: 1 / 3;
}

/* Ocupa a linha inteira */
.footer {
    grid-column: 1 / -1;  /* -1 = ultima linha do grid */
}
```

### `grid-template-areas` -- Layout visual

A forma mais intuitiva de criar layouts. Voce "desenha" o layout com nomes:

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: 60px 1fr 50px;
    grid-template-areas:
        "header  header  header"
        "sidebar content aside"
        "footer  footer  footer";
    gap: 10px;
    min-height: 100vh;
}

.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-content { grid-area: content; }
.site-aside   { grid-area: aside; }
.site-footer  { grid-area: footer; }
```

Isso cria exatamente este layout:

```
+------------------------------------+
|             header                 |
+--------+----------------+----------+
|        |                |          |
|sidebar |    content     |  aside   |
|        |                |          |
+--------+----------------+----------+
|             footer                 |
+------------------------------------+
```

> **Nota:** Veja o arquivo `exemplos/04-grid.html` para ver Grid com areas, auto-fit, galeria e dashboard em acao!

---

## 3.12 Responsividade e Media Queries

**Design responsivo** significa criar paginas que se adaptam automaticamente a **qualquer tamanho de tela** -- desktop, tablet, celular.

### Por que responsividade e essencial

- Mais de **60% do trafego** web vem de dispositivos moveis
- O Google prioriza sites **mobile-friendly** nos resultados de busca
- Uma boa experiencia em todas as telas aumenta o **engajamento**

### Mobile-first vs Desktop-first

Existem duas abordagens para desenvolver responsivamente:

**Mobile-first (RECOMENDADO):**
1. Comece estilizando para **celular** (tela menor)
2. Adicione media queries para telas **maiores**

**Desktop-first:**
1. Comece estilizando para **desktop** (tela maior)
2. Adicione media queries para telas **menores**

```css
/* Mobile-first: estilo base e para celular */
.container {
    padding: 15px;
}

/* A partir de 768px (tablet) */
@media (min-width: 768px) {
    .container {
        padding: 30px;
        max-width: 720px;
    }
}

/* A partir de 1024px (desktop) */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}
```

### `@media` -- Media Queries

Media queries permitem aplicar CSS **condicionalmente** com base nas caracteristicas do dispositivo:

```css
@media (condicao) {
    /* CSS que so se aplica quando a condicao e verdadeira */
}
```

#### Media queries por largura

```css
/* Telas de ate 480px (celulares) */
@media (max-width: 480px) {
    h1 { font-size: 1.5rem; }
}

/* Telas a partir de 768px (tablets) */
@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Telas a partir de 1024px (desktops) */
@media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Intervalo especifico */
@media (min-width: 768px) and (max-width: 1023px) {
    /* Apenas tablets */
}
```

### Breakpoints comuns

| Breakpoint | Dispositivo | Uso |
|:----------:|-------------|-----|
| 480px | Celulares (pequenos) | `max-width: 480px` |
| 768px | Tablets | `min-width: 768px` |
| 1024px | Desktops (pequenos) | `min-width: 1024px` |
| 1200px | Desktops (grandes) | `min-width: 1200px` |

### Exemplo completo de layout responsivo

```css
/* Mobile-first: layout de coluna unica */
.site {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 15px;
}

.sidebar {
    order: 2;  /* Sidebar vai para baixo no mobile */
}

/* Tablet: 2 colunas */
@media (min-width: 768px) {
    .site {
        grid-template-columns: 250px 1fr;
        padding: 20px;
    }

    .sidebar {
        order: 0;  /* Sidebar volta para o lado */
    }
}

/* Desktop: 3 colunas */
@media (min-width: 1024px) {
    .site {
        grid-template-columns: 250px 1fr 200px;
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### Imagens responsivas com CSS

```css
img {
    max-width: 100%;    /* Nunca ultrapassa o container */
    height: auto;       /* Mantem proporcao */
    display: block;     /* Remove espaco extra abaixo */
}
```

### Tipografia responsiva

```css
/* Abordagem com clamp() (moderno) */
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
    /* Minimo: 1.5rem | Ideal: 4vw | Maximo: 3rem */
}

p {
    font-size: clamp(1rem, 2vw, 1.25rem);
}
```

> **Dica:** A funcao `clamp(min, ideal, max)` e a forma mais elegante de criar tipografia responsiva. Ela define um valor minimo, ideal e maximo em uma unica linha.

### Meta viewport (essencial!)

Lembre-se de incluir no HTML (ja vimos no Modulo 2):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Sem essa meta tag, as media queries **nao funcionam** em dispositivos moveis.

---

## 3.13 Variaveis CSS

**Variaveis CSS** (tambem chamadas de Custom Properties) permitem definir valores reutilizaveis que podem ser referenciados em todo o CSS.

### Definindo variaveis

Variaveis sao definidas com o prefixo `--` e geralmente colocadas no `:root` (para serem globais):

```css
:root {
    /* Cores */
    --cor-primaria: #3498db;
    --cor-secundaria: #2ecc71;
    --cor-perigo: #e74c3c;
    --cor-texto: #333333;
    --cor-fundo: #f4f4f4;

    /* Tipografia */
    --fonte-principal: 'Inter', sans-serif;
    --fonte-titulo: 'Georgia', serif;

    /* Espacamento */
    --espaco-pequeno: 8px;
    --espaco-medio: 16px;
    --espaco-grande: 32px;

    /* Bordas */
    --raio-borda: 8px;
    --sombra-card: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Usando variaveis

Use a funcao `var()` para referenciar uma variavel:

```css
body {
    font-family: var(--fonte-principal);
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}

h1, h2, h3 {
    font-family: var(--fonte-titulo);
    color: var(--cor-primaria);
}

.botao {
    background-color: var(--cor-primaria);
    padding: var(--espaco-pequeno) var(--espaco-medio);
    border-radius: var(--raio-borda);
    color: white;
    border: none;
}

.botao-perigo {
    background-color: var(--cor-perigo);
}

.card {
    padding: var(--espaco-medio);
    border-radius: var(--raio-borda);
    box-shadow: var(--sombra-card);
}
```

### Valor padrao (fallback)

```css
color: var(--cor-inexistente, #333);  /* Se a variavel nao existir, usa #333 */
```

### Vantagens de usar variaveis

1. **Consistencia:** mudar uma cor em um lugar atualiza todo o site
2. **Manutencao:** facil de encontrar e ajustar valores
3. **Tema:** facilita criar temas (claro/escuro)
4. **Legibilidade:** `var(--cor-primaria)` e mais descritivo que `#3498db`

### Exemplo: Tema escuro com variaveis

```css
:root {
    --cor-fundo: #ffffff;
    --cor-texto: #333333;
    --cor-card: #ffffff;
}

/* Tema escuro */
@media (prefers-color-scheme: dark) {
    :root {
        --cor-fundo: #1a1a2e;
        --cor-texto: #e0e0e0;
        --cor-card: #16213e;
    }
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
}

.card {
    background-color: var(--cor-card);
}
```

---

## 3.14 Transicoes e Animacoes

Transicoes e animacoes dao **vida** as suas paginas, criando movimentos suaves e interacoes visuais atraentes.

### `transition` -- Transicoes suaves

Transicoes criam mudancas suaves entre dois estados de um elemento (geralmente ativadas por `:hover`):

```css
.botao {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    /* Transicao: propriedade  duracao  funcao  atraso */
    transition: background-color 0.3s ease;
}

.botao:hover {
    background-color: #2980b9;
}
```

**Sintaxe da transicao:**

```css
transition: propriedade duracao funcao-tempo atraso;

/* Exemplos */
transition: all 0.3s ease;                   /* Todas as propriedades */
transition: background-color 0.3s ease;       /* Apenas background */
transition: transform 0.5s ease-in-out;       /* Apenas transform */
transition: color 0.2s, background 0.3s;      /* Multiplas propriedades */
```

**Funcoes de tempo:**

| Funcao | Comportamento |
|--------|---------------|
| `ease` | Comeca devagar, acelera, desacelera (padrao) |
| `linear` | Velocidade constante |
| `ease-in` | Comeca devagar, depois acelera |
| `ease-out` | Comeca rapido, depois desacelera |
| `ease-in-out` | Comeca e termina devagar |

### `transform` -- Transformacoes

Transformacoes alteram a **forma** e **posicao** visual de um elemento sem afetar o layout:

```css
/* Mover */
div { transform: translateX(50px); }        /* Move 50px para a direita */
div { transform: translateY(-20px); }       /* Move 20px para cima */
div { transform: translate(50px, -20px); }  /* Move X e Y */

/* Rotacionar */
div { transform: rotate(45deg); }           /* Gira 45 graus */
div { transform: rotate(-90deg); }          /* Gira 90 graus anti-horario */

/* Escalar */
div { transform: scale(1.5); }              /* Aumenta 50% */
div { transform: scale(0.8); }              /* Diminui 20% */
div { transform: scaleX(2); }               /* Estica horizontalmente */

/* Inclinar */
div { transform: skewX(10deg); }            /* Inclina horizontalmente */
div { transform: skewY(5deg); }             /* Inclina verticalmente */

/* Combinando */
div { transform: translateY(-5px) scale(1.05); }
```

### Transicao + Transform (combinacao poderosa)

```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

### `@keyframes` -- Animacoes completas

Para animacoes mais complexas (nao dependem de hover), use `@keyframes`:

```css
/* Definir a animacao */
@keyframes pulsar {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Aplicar a animacao */
.botao-pulsante {
    animation: pulsar 2s ease-in-out infinite;
}
```

**Sintaxe da animacao:**

```css
animation: nome duracao funcao-tempo atraso repeticao direcao;

/* Exemplos */
animation: pulsar 2s ease-in-out infinite;
animation: slide-in 0.5s ease-out;
animation: girar 1s linear infinite;
```

**Valores de repeticao:**
- `1` -- executa uma vez (padrao)
- `3` -- executa 3 vezes
- `infinite` -- repete infinitamente

### Exemplo: Animacao de entrada (slide-in)

```css
@keyframes slide-in {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.card {
    animation: slide-in 0.5s ease-out;
}
```

### Exemplo: Loading spinner

```css
@keyframes girar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #ecf0f1;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: girar 1s linear infinite;
}
```

> **Dica:** Use animacoes com **moderacao**. Animacoes sutis melhoram a experiencia; animacoes excessivas distraem e irritam. Sempre respeite a preferencia do usuario:

```css
/* Desativa animacoes se o usuario preferir */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## 3.15 Reset e Normalize CSS

Cada navegador aplica **estilos padrao** diferentes aos elementos HTML. Isso pode causar inconsistencias visuais entre navegadores.

### O problema

O Chrome pode ter margens diferentes do Firefox para `<h1>`. O Safari pode ter um padding diferente para `<ul>`. Essas pequenas diferencas se acumulam e causam problemas.

### CSS Reset (abordagem radical)

Remove **todos** os estilos padrao do navegador:

```css
/* Reset basico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Reset mais completo (recomendado para este curso):**

```css
/* Reset moderno */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    min-height: 100vh;
}

img, video {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

ul, ol {
    list-style: none;
}

button, input, textarea, select {
    font: inherit;
}
```

### Template CSS inicial

Aqui esta um template completo para comecar seus projetos:

```css
/* ===== RESET ===== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== VARIAVEIS ===== */
:root {
    --cor-primaria: #3498db;
    --cor-secundaria: #2ecc71;
    --cor-texto: #333333;
    --cor-fundo: #f4f4f4;
    --cor-branco: #ffffff;
    --fonte-principal: 'Inter', Arial, sans-serif;
    --raio-borda: 8px;
    --sombra: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* ===== BASE ===== */
html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--fonte-principal);
    line-height: 1.6;
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: var(--cor-primaria);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

> **Dica:** Salve esse template e use como ponto de partida para todos os seus projetos!

---

## 3.16 Frameworks CSS

Ate agora, voce aprendeu a escrever **CSS puro** (tambem chamado de *vanilla CSS*). Isso e fundamental -- voce precisa entender como o CSS funciona antes de usar qualquer ferramenta. Porem, no mercado de trabalho, existem **frameworks CSS** que aceleram muito o desenvolvimento.

### O que e um Framework CSS?

Um framework CSS e uma **biblioteca de estilos prontos** que voce pode usar no seu projeto. Em vez de escrever todo o CSS do zero, voce utiliza classes pre-definidas que ja possuem estilos aplicados.

```
CSS Puro                          Framework CSS
───────────                       ──────────────
Voce escreve tudo                 Classes prontas
.botao {                          <button class="btn btn-primary">
    background: #3498db;            Clique aqui
    color: white;                 </button>
    padding: 10px 20px;
    border: none;                 O framework ja define como
    border-radius: 4px;           "btn btn-primary" deve aparecer
    cursor: pointer;
}
```

### Analogia: CSS Puro vs Framework

Imagine construir moveis:

- **CSS Puro** = Marcenaria artesanal -- voce projeta e constroi cada peca do zero. Controle total, mas mais lento
- **Framework CSS** = Moveis modulares (tipo IKEA) -- pecas prontas que voce monta rapidamente. Mais rapido, mas segue padroes pre-definidos

> **Importante:** Frameworks CSS **nao substituem** o conhecimento de CSS puro. Eles sao ferramentas que aceleram o trabalho, mas voce precisa entender a base para personalizar e resolver problemas.

### Principais Frameworks CSS

| Framework | Descricao | Abordagem | Site |
|-----------|-----------|-----------|------|
| **Bootstrap** | O mais antigo e popular. Componentes prontos (botoes, cards, modais, navbar) | Baseado em componentes | [getbootstrap.com](https://getbootstrap.com/) |
| **Tailwind CSS** | Framework utilitario moderno. Classes pequenas que voce compoe | Utility-first | [tailwindcss.com](https://tailwindcss.com/) |
| **Bulma** | Leve e moderno, baseado em Flexbox, sem JavaScript | Baseado em componentes | [bulma.io](https://bulma.io/) |
| **Foundation** | Robusto e profissional, focado em acessibilidade | Baseado em componentes | [get.foundation](https://get.foundation/) |

### 3.16.1 Bootstrap -- O Classico

O **Bootstrap** foi criado pelo Twitter em 2011 e foi o primeiro framework CSS realmente popular. Ele oferece **componentes prontos** como botoes, formularios, cards, navegacao, modais, carrosseis e muito mais.

#### Como usar o Bootstrap

A forma mais simples e adicionar via CDN no seu HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Bootstrap</title>
    <!-- CSS do Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <!-- Navbar pronta do Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Meu Site</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Container com grid de 12 colunas -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8">
                <h1>Bem-vindo ao Bootstrap</h1>
                <p class="lead">Bootstrap usa um sistema de grid de 12 colunas.</p>
                <button class="btn btn-primary">Botao Primario</button>
                <button class="btn btn-success">Botao Sucesso</button>
                <button class="btn btn-danger">Botao Perigo</button>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card do Bootstrap</h5>
                        <p class="card-text">Componente pronto com estilos aplicados.</p>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript do Bootstrap (necessario para componentes interativos) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

#### Conceitos-chave do Bootstrap

- **Grid de 12 colunas:** o layout e dividido em 12 partes usando classes como `col-md-6` (metade da tela em telas medias)
- **Breakpoints responsivos:** `col-sm-`, `col-md-`, `col-lg-`, `col-xl-` para diferentes tamanhos de tela
- **Componentes prontos:** `btn`, `card`, `navbar`, `modal`, `alert`, `badge`, `form-control`
- **Utilitarios:** `mt-3` (margin-top), `p-4` (padding), `text-center`, `d-flex`, `bg-primary`

#### Vantagens e desvantagens do Bootstrap

| Vantagens | Desvantagens |
|-----------|-------------|
| Muitos componentes prontos | Sites podem ficar "parecidos" |
| Documentacao excelente | Arquivo CSS grande (~200KB) |
| Grande comunidade | Pode ser dificil personalizar |
| Responsivo por padrao | Mistura classes de estilo no HTML |

### 3.16.2 Bulma -- Leve e Moderno

O **Bulma** e um framework mais leve que o Bootstrap, baseado 100% em Flexbox e **sem JavaScript**. Ele oferece uma sintaxe limpa e intuitiva.

#### Como usar o Bulma

```html
<!-- Adicione apenas o CSS - Bulma nao requer JavaScript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
```

#### Exemplo rapido com Bulma

```html
<!-- Hero section -->
<section class="hero is-primary is-medium">
    <div class="hero-body">
        <p class="title">Bulma Framework</p>
        <p class="subtitle">Moderno, leve e baseado em Flexbox</p>
    </div>
</section>

<!-- Colunas -->
<div class="container mt-5">
    <div class="columns">
        <div class="column is-one-third">
            <div class="box">
                <h3 class="title is-4">Card 1</h3>
                <p>Conteudo do card</p>
                <button class="button is-link">Saiba mais</button>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="box">
                <h3 class="title is-4">Card 2</h3>
                <p>Conteudo do card</p>
                <button class="button is-success">Saiba mais</button>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="box">
                <h3 class="title is-4">Card 3</h3>
                <p>Conteudo do card</p>
                <button class="button is-danger">Saiba mais</button>
            </div>
        </div>
    </div>
</div>
```

O Bulma usa prefixos descritivos como `is-primary`, `is-large`, `is-one-third`, o que torna o codigo bastante legivel.

### 3.16.3 Tailwind CSS -- O Framework Utilitario

O **Tailwind CSS** e o framework mais popular da atualidade e representa uma abordagem completamente diferente. Em vez de oferecer componentes prontos (como botoes e cards), ele oferece **classes utilitarias** pequenas que voce combina para criar qualquer design.

#### A filosofia "Utility-First"

A ideia central do Tailwind e: em vez de criar classes CSS com nomes semanticos e depois escrever o estilo, voce aplica **pequenas classes utilitarias** diretamente no HTML.

```
Abordagem Tradicional (CSS Puro)       Abordagem Tailwind (Utility-First)
────────────────────────────────       ───────────────────────────────────

CSS:                                    HTML (sem arquivo CSS separado!):
.card {                                 <div class="bg-white rounded-lg
    background: white;                       shadow-md p-6 max-w-sm">
    border-radius: 8px;                   <h2 class="text-xl font-bold
    box-shadow: 0 2px 10px ...;                text-gray-800 mb-2">
    padding: 24px;                          Titulo
    max-width: 24rem;                     </h2>
}                                         <p class="text-gray-600">
.card-titulo {                              Descricao do card
    font-size: 1.25rem;                   </p>
    font-weight: bold;                  </div>
    color: #1f2937;
    margin-bottom: 8px;
}
.card-texto {
    color: #4b5563;
}

HTML:
<div class="card">
    <h2 class="card-titulo">Titulo</h2>
    <p class="card-texto">Descricao</p>
</div>
```

> **Curiosidade:** No inicio, muitos desenvolvedores acharam o Tailwind "feio" por colocar tantas classes no HTML. Mas com o tempo, a produtividade que ele proporciona convenceu a comunidade. Hoje, ele e o framework CSS mais usado em novos projetos.

#### Como usar o Tailwind CSS

A forma mais simples para aprender e testar e usando o **CDN** (nao recomendado para producao, mas perfeito para estudos):

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Tailwind CSS</title>
    <!-- Tailwind CSS via CDN (para estudos) -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Seu conteudo aqui -->
</body>
</html>
```

> **Nota:** Em projetos reais, o Tailwind e instalado via npm e configurado com um processo de build que remove classes nao utilizadas, resultando em um arquivo CSS muito pequeno.

#### Entendendo as Classes do Tailwind

As classes do Tailwind seguem um padrao logico e previsivel:

```
Categoria      Classe Tailwind        CSS equivalente
─────────      ───────────────        ───────────────
Cores          text-blue-500          color: #3b82f6
               bg-red-600             background-color: #dc2626
               border-green-400       border-color: #4ade80

Espacamento    p-4                    padding: 1rem (16px)
               px-6                   padding-left: 1.5rem; padding-right: 1.5rem
               mt-8                   margin-top: 2rem (32px)
               mb-2                   margin-bottom: 0.5rem (8px)
               gap-4                  gap: 1rem

Tamanho        w-full                 width: 100%
               h-screen               height: 100vh
               max-w-lg               max-width: 32rem
               text-xl                font-size: 1.25rem

Layout         flex                   display: flex
               grid                   display: grid
               grid-cols-3            grid-template-columns: repeat(3, 1fr)
               justify-center         justify-content: center
               items-center           align-items: center

Bordas         rounded-lg             border-radius: 0.5rem
               border-2               border-width: 2px
               shadow-md              box-shadow: ...

Tipografia     font-bold              font-weight: 700
               text-center            text-align: center
               uppercase              text-transform: uppercase
               leading-relaxed        line-height: 1.625

Responsivo     md:flex                @media (min-width: 768px) { display: flex }
               lg:grid-cols-3         @media (min-width: 1024px) { grid-template-columns: ... }

Estados        hover:bg-blue-700      .classe:hover { background-color: ... }
               focus:ring-2           .classe:focus { box-shadow: ... }
```

#### Escala de cores do Tailwind

O Tailwind oferece uma paleta de cores completa com 10 tonalidades (50 a 950) para cada cor:

```
Cor        50    100   200   300   400   500   600   700   800   900   950
───        ──    ───   ───   ───   ───   ───   ───   ───   ───   ───   ───
blue       mais ─────────────────────────────────────────────────── mais
           claro                     base                          escuro

Exemplo:   bg-blue-50   bg-blue-300   bg-blue-500   bg-blue-700   bg-blue-950
           (quase       (claro)       (padrao)      (escuro)      (muito
            branco)                                                escuro)
```

Cores disponiveis: `slate`, `gray`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

#### Escala de espacamento

O Tailwind usa uma escala numerica para espacamentos (1 unidade = 0.25rem = 4px):

```
Classe    Valor
──────    ─────
p-0       0px
p-1       4px   (0.25rem)
p-2       8px   (0.5rem)
p-3       12px  (0.75rem)
p-4       16px  (1rem)
p-5       20px  (1.25rem)
p-6       24px  (1.5rem)
p-8       32px  (2rem)
p-10      40px  (2.5rem)
p-12      48px  (3rem)
p-16      64px  (4rem)
p-20      80px  (5rem)
```

Prefixos de direcao: `p` (todos), `px` (horizontal), `py` (vertical), `pt` (top), `pr` (right), `pb` (bottom), `pl` (left). O mesmo vale para `m` (margin).

#### Exemplo Completo: Landing Page com Tailwind

Este exemplo demonstra como construir uma pagina completa usando apenas classes Tailwind:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Landing Page - Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

    <!-- ===== NAVEGACAO ===== -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="text-xl font-bold text-blue-600">MeuSite</a>

            <!-- Menu -->
            <ul class="hidden md:flex gap-6">
                <li><a href="#" class="text-gray-600 hover:text-blue-600 transition">Home</a></li>
                <li><a href="#sobre" class="text-gray-600 hover:text-blue-600 transition">Sobre</a></li>
                <li><a href="#servicos" class="text-gray-600 hover:text-blue-600 transition">Servicos</a></li>
                <li><a href="#contato" class="text-gray-600 hover:text-blue-600 transition">Contato</a></li>
            </ul>

            <!-- Botao CTA -->
            <a href="#contato" class="bg-blue-600 text-white px-4 py-2 rounded-lg
                                      hover:bg-blue-700 transition hidden md:block">
                Fale Conosco
            </a>
        </div>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div class="max-w-4xl mx-auto text-center px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Construa Sites Incriveis
            </h1>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Aprenda desenvolvimento web com as melhores ferramentas
                e tecnologias do mercado.
            </p>
            <div class="flex gap-4 justify-center flex-wrap">
                <a href="#servicos" class="bg-white text-blue-700 font-bold
                                          px-6 py-3 rounded-lg hover:bg-blue-50
                                          transition">
                    Ver Servicos
                </a>
                <a href="#contato" class="border-2 border-white text-white
                                         font-bold px-6 py-3 rounded-lg
                                         hover:bg-white hover:text-blue-700
                                         transition">
                    Entrar em Contato
                </a>
            </div>
        </div>
    </section>

    <!-- ===== SOBRE ===== -->
    <section id="sobre" class="py-16">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-2">Sobre Nos</h2>
            <p class="text-gray-500 text-center mb-10 max-w-xl mx-auto">
                Somos apaixonados por tecnologia e educacao.
            </p>

            <div class="grid md:grid-cols-2 gap-10 items-center">
                <!-- Imagem placeholder -->
                <div class="bg-gradient-to-br from-blue-400 to-purple-500
                            rounded-xl h-64 md:h-80 flex items-center
                            justify-center text-white text-lg font-bold">
                    Sua Imagem Aqui
                </div>
                <!-- Texto -->
                <div>
                    <h3 class="text-2xl font-bold mb-4">Nossa Missao</h3>
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        Democratizar o ensino de desenvolvimento web,
                        tornando a tecnologia acessivel para todos.
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        Acreditamos que qualquer pessoa pode aprender
                        a programar com os recursos e orientacao certos.
                    </p>
                    <ul class="mt-4 space-y-2">
                        <li class="flex items-center gap-2">
                            <span class="text-green-500 font-bold">✓</span>
                            Conteudo pratico e atualizado
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-green-500 font-bold">✓</span>
                            Projetos reais do mercado
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-green-500 font-bold">✓</span>
                            Suporte personalizado
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== SERVICOS (CARDS) ===== -->
    <section id="servicos" class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-2">Nossos Servicos</h2>
            <p class="text-gray-500 text-center mb-10">
                Solucoes completas para sua presenca digital.
            </p>

            <!-- Grid de cards responsivo -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg
                            transition-shadow border border-gray-100">
                    <div class="text-4xl mb-4">🌐</div>
                    <h3 class="text-xl font-bold mb-2">Sites Responsivos</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Sites que funcionam perfeitamente em qualquer
                        dispositivo, do celular ao desktop.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg
                            transition-shadow border border-gray-100">
                    <div class="text-4xl mb-4">🎨</div>
                    <h3 class="text-xl font-bold mb-2">Design Moderno</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Interfaces bonitas e intuitivas que encantam
                        seus usuarios e fortalecem sua marca.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg
                            transition-shadow border border-gray-100">
                    <div class="text-4xl mb-4">⚡</div>
                    <h3 class="text-xl font-bold mb-2">Performance</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Sites rapidos e otimizados para oferecer a melhor
                        experiencia ao usuario.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FORMULARIO DE CONTATO ===== -->
    <section id="contato" class="py-16">
        <div class="max-w-xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-2">Fale Conosco</h2>
            <p class="text-gray-500 text-center mb-10">
                Preencha o formulario e entraremos em contato.
            </p>

            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-semibold mb-1" for="nome">
                        Nome
                    </label>
                    <input type="text" id="nome" placeholder="Seu nome"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                  focus:outline-none focus:ring-2 focus:ring-blue-500
                                  focus:border-transparent transition">
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-1" for="email">
                        E-mail
                    </label>
                    <input type="email" id="email" placeholder="seu@email.com"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                  focus:outline-none focus:ring-2 focus:ring-blue-500
                                  focus:border-transparent transition">
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-1" for="mensagem">
                        Mensagem
                    </label>
                    <textarea id="mensagem" rows="4" placeholder="Sua mensagem..."
                              class="w-full px-4 py-2 border border-gray-300 rounded-lg
                                     focus:outline-none focus:ring-2 focus:ring-blue-500
                                     focus:border-transparent transition resize-y">
                    </textarea>
                </div>

                <button type="submit"
                        class="w-full bg-blue-600 text-white font-bold py-3
                               rounded-lg hover:bg-blue-700 transition
                               focus:outline-none focus:ring-2 focus:ring-blue-500
                               focus:ring-offset-2">
                    Enviar Mensagem
                </button>
            </form>
        </div>
    </section>

    <!-- ===== RODAPE ===== -->
    <footer class="bg-gray-800 text-gray-400 py-8">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <p class="text-white font-bold text-lg mb-2">MeuSite</p>
            <p class="text-sm">
                &copy; 2025 MeuSite. Feito com Tailwind CSS.
            </p>
        </div>
    </footer>

</body>
</html>
```

#### Responsividade no Tailwind

O Tailwind usa a abordagem **mobile-first** com prefixos de breakpoint:

```
Prefixo    Largura minima    Dispositivo
───────    ──────────────    ───────────
(nenhum)   0px               Mobile (padrao)
sm:        640px             Celulares grandes
md:        768px             Tablets
lg:        1024px            Notebooks
xl:        1280px            Desktops
2xl:       1536px            Telas grandes
```

Exemplo pratico -- um grid que muda de 1 para 2 e depois 3 colunas:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
</div>
```

Leitura: "1 coluna no mobile, 2 colunas a partir de 768px, 3 colunas a partir de 1024px."

#### Estados interativos no Tailwind

```html
<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
    Passe o mouse
</button>

<!-- Focus (acessibilidade) -->
<input class="border focus:ring-2 focus:ring-blue-500 focus:border-transparent
              outline-none px-4 py-2 rounded">

<!-- Active (ao clicar) -->
<button class="bg-green-500 active:bg-green-700 text-white px-4 py-2 rounded">
    Clique aqui
</button>

<!-- Group hover (hover no pai afeta o filho) -->
<div class="group bg-white p-4 rounded-lg hover:bg-blue-50 cursor-pointer">
    <h3 class="group-hover:text-blue-600 transition">Titulo</h3>
    <p class="group-hover:text-blue-400 transition">Descricao</p>
</div>
```

#### Dark Mode no Tailwind

O Tailwind facilita a implementacao de tema escuro com o prefixo `dark:`:

```html
<div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <h2 class="text-xl font-bold">Este card muda com o tema!</h2>
    <p class="text-gray-600 dark:text-gray-300">O texto se adapta automaticamente.</p>
</div>
```

### 3.16.4 Comparacao: CSS Puro vs Bootstrap vs Tailwind

Veja o mesmo botao criado nas tres abordagens:

**CSS Puro:**
```html
<style>
    .meu-botao {
        background-color: #3498db;
        color: white;
        padding: 10px 24px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .meu-botao:hover {
        background-color: #2980b9;
    }
</style>
<button class="meu-botao">Clique Aqui</button>
```

**Bootstrap:**
```html
<button class="btn btn-primary btn-lg">Clique Aqui</button>
```

**Tailwind CSS:**
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2
               rounded-md text-base cursor-pointer transition">
    Clique Aqui
</button>
```

### Qual framework escolher?

| Criterio | CSS Puro | Bootstrap | Tailwind CSS |
|----------|----------|-----------|-------------|
| **Controle total** | ✅ Total | ⚠️ Parcial | ✅ Total |
| **Velocidade de desenvolvimento** | 🐢 Lento | 🐇 Rapido | 🐇 Rapido |
| **Curva de aprendizado** | 📈 Media | 📉 Baixa | 📈 Media |
| **Customizacao** | ✅ Ilimitada | ⚠️ Limitada | ✅ Ilimitada |
| **Tamanho do CSS final** | ✅ Minimo | ❌ Grande | ✅ Pequeno (com build) |
| **Popularidade (2025)** | Sempre relevante | Muito popular | Mais popular |
| **Ideal para** | Aprender CSS | Prototipos rapidos | Projetos modernos |

> **Conselho para iniciantes:** Primeiro, domine o CSS puro (o que voce esta fazendo neste curso!). Depois, experimente o Tailwind CSS para ganhar produtividade. O Bootstrap e otimo para prototipos rapidos, mas o Tailwind oferece mais flexibilidade a longo prazo.

> **Atencao:** Frameworks CSS sao **ferramentas**, nao substitutos para o conhecimento. Um desenvolvedor que domina CSS puro consegue usar qualquer framework com facilidade. O contrario nao e verdade -- quem so conhece Bootstrap tera dificuldade em resolver problemas que exigem CSS customizado.

---

## 3.17 Atividades Praticas -- Dia 4

As atividades do Dia 4 focam nos fundamentos de CSS: seletores, cores, tipografia, box model e posicionamento.

---

### Atividade 3.1 -- Estilizando a Pagina do Modulo 2

**Objetivo:** Aplicar CSS a pagina HTML que voce criou no Modulo 2 (blog pessoal), transformando-a em uma pagina visualmente atraente.

**Tempo estimado:** 50 minutos

#### Passo 1: Criar o arquivo CSS

1. Na pasta do seu projeto, crie uma pasta `css/`
2. Dentro dela, crie o arquivo `estilo.css`
3. Conecte ao seu `blog.html` (ou `index.html`) do Modulo 2:

```html
<link rel="stylesheet" href="css/estilo.css">
```

#### Passo 2: Reset e variaveis

Comece o CSS com o reset e as variaveis:

```css
/* Reset */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Variaveis */
:root {
    --cor-primaria: #3498db;    /* Escolha sua cor! */
    --cor-secundaria: #2ecc71;
    --cor-texto: #333;
    --cor-fundo: #f4f4f4;
    --cor-branco: #fff;
    --fonte-principal: Arial, sans-serif;
    --raio-borda: 8px;
    --sombra: 0 2px 10px rgba(0,0,0,0.1);
}
```

#### Passo 3: Estilizar a base

```css
html { scroll-behavior: smooth; }

body {
    font-family: var(--fonte-principal);
    line-height: 1.6;
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}

img { max-width: 100%; height: auto; display: block; }
a { color: var(--cor-primaria); text-decoration: none; }
a:hover { text-decoration: underline; }
```

#### Passo 4: Estilizar cada secao

Estilize todas as secoes semanticas do seu blog:

- **header:** fundo colorido, texto branco, padding generoso
- **nav:** fundo escuro, links em flex com gap, hover com cor de destaque
- **main:** max-width de 900px, margin auto para centralizar
- **article:** fundo branco, padding, borda arredondada, sombra
- **aside:** fundo suave, padding, borda arredondada
- **footer:** fundo escuro, texto branco, centralizado

#### Passo 5: Toques finais

Adicione:
- Google Fonts (escolha uma fonte que goste)
- Transicoes nos links e botoes (transition: 0.3s)
- Sombras nos cards
- Hover effects nos artigos

> **Checklist de conclusao:**
> - [ ] Arquivo CSS externo criado e conectado
> - [ ] Reset e variaveis CSS definidas
> - [ ] Todas as secoes semanticas estilizadas
> - [ ] Google Fonts adicionada
> - [ ] Pelo menos 3 pseudo-classes usadas (hover, focus, etc.)
> - [ ] Box model aplicado (margin, padding, border)
> - [ ] Transicoes suaves em elementos interativos

---

### Atividade 3.2 -- Galeria de Cards com Flexbox

**Objetivo:** Criar uma galeria de cards responsiva usando Flexbox.

**Tempo estimado:** 40 minutos

#### Passo 1: Criar o HTML

Crie um arquivo `galeria.html` com pelo menos **6 cards**:

```html
<main>
    <h1>Tecnologias Web</h1>
    <div class="cards-container">
        <div class="card">
            <img src="https://via.placeholder.com/400x200/3498db/fff?text=HTML"
                 alt="HTML">
            <div class="card-body">
                <h3>HTML</h3>
                <p>Linguagem de marcacao para estruturar paginas web.</p>
                <a href="#" class="botao">Saiba mais</a>
            </div>
        </div>
        <!-- Crie mais 5 cards (CSS, JavaScript, Git, React, Node.js) -->
    </div>
</main>
```

#### Passo 2: Estilizar com Flexbox

```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    flex: 1 1 300px;       /* Cresce, encolhe, base de 300px */
    max-width: 380px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

#### Passo 3: Estilizar os detalhes

Complete o CSS para: imagem do card, titulo, texto, botao com hover, e cores variadas para cada card.

> **Checklist de conclusao:**
> - [ ] Pelo menos 6 cards criados
> - [ ] Flexbox usado no container (flex-wrap, gap)
> - [ ] Cards com sombra e border-radius
> - [ ] Hover effect com transform e box-shadow
> - [ ] Botao estilizado com transicao
> - [ ] Layout se adapta ao redimensionar a janela

---

### Atividade 3.3 -- Box Model Explorer

**Objetivo:** Experimentar com o Box Model usando o DevTools para entender visualmente como margin, padding, border e content funcionam.

**Tempo estimado:** 20 minutos

#### Passo 1: Abrir o exemplo

Abra o arquivo `exemplos/02-box-model.html` no navegador com o Live Server.

#### Passo 2: Inspecionar no DevTools

1. Pressione **F12** para abrir o DevTools
2. Selecione diferentes elementos
3. Na aba **Computed**, observe o diagrama do Box Model
4. Passe o mouse sobre margin, padding, border e content no diagrama

#### Passo 3: Experimentar ao vivo

No DevTools:
1. Selecione um elemento
2. No painel **Styles**, modifique valores de margin, padding, border
3. Observe as mudancas em tempo real
4. Experimente trocar entre `content-box` e `border-box`

#### Passo 4: Documentar

Faca um screenshot do Box Model de 3 elementos diferentes mostrando as 4 camadas.

> **Checklist de conclusao:**
> - [ ] DevTools aberto e Box Model visualizado
> - [ ] Margin, padding, border e content identificados
> - [ ] Valores modificados ao vivo no DevTools
> - [ ] Diferenca entre content-box e border-box compreendida
> - [ ] 3 screenshots documentando o Box Model

---

## 3.18 Atividades Praticas -- Dia 5

As atividades do Dia 5 focam em Grid, responsividade e no projeto integrador que combina tudo do modulo.

---

### Atividade 3.4 -- Layout de Pagina com CSS Grid

**Objetivo:** Criar um layout completo de pagina usando CSS Grid com areas nomeadas.

**Tempo estimado:** 40 minutos

#### Passo 1: Criar a estrutura HTML

Crie um arquivo `layout-grid.html`:

```html
<body>
    <header class="site-header">
        <h1>Meu Site</h1>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Sobre</a>
            <a href="#">Servicos</a>
            <a href="#">Contato</a>
        </nav>
    </header>

    <aside class="site-sidebar">
        <h3>Menu</h3>
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Configuracoes</a></li>
        </ul>
    </aside>

    <main class="site-content">
        <h2>Conteudo Principal</h2>
        <p>Conteudo da pagina aqui...</p>
        <!-- Adicione conteudo real -->
    </main>

    <aside class="site-aside">
        <h3>Informacoes</h3>
        <p>Conteudo complementar...</p>
    </aside>

    <footer class="site-footer">
        <p>&copy; 2025 Meu Site</p>
    </footer>
</body>
```

#### Passo 2: Criar o layout com Grid Areas

```css
body {
    display: grid;
    grid-template-areas:
        "header  header  header"
        "sidebar content aside"
        "footer  footer  footer";
    grid-template-columns: 220px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 0;
}

.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-content { grid-area: content; }
.site-aside   { grid-area: aside; }
.site-footer  { grid-area: footer; }
```

#### Passo 3: Tornar responsivo

Adicione media queries para adaptar o layout:

```css
/* Mobile: coluna unica */
@media (max-width: 768px) {
    body {
        grid-template-areas:
            "header"
            "content"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}
```

#### Passo 4: Estilizar cada area

Adicione cores, padding, tipografia e detalhes visuais a cada area do grid.

> **Checklist de conclusao:**
> - [ ] Layout criado com grid-template-areas
> - [ ] 5 areas definidas (header, sidebar, content, aside, footer)
> - [ ] Responsivo com media query para mobile
> - [ ] Cada area estilizada com cores e padding
> - [ ] Minimo 100vh de altura

---

### Atividade 3.5 -- Site Responsivo Completo (Projeto Integrador)

**Objetivo:** Criar um site completo de **uma pagina** (landing page) que combine todos os conceitos de CSS aprendidos no modulo.

**Tempo estimado:** 60 minutos

#### Requisitos do site

Crie um site (landing page) sobre um tema de sua escolha (portfolio pessoal, produto ficticio, restaurante, banda, ONG, etc.) com as seguintes secoes:

**1. Header/Hero**
- Nome/logo do site
- Menu de navegacao com Flexbox
- Secao hero (area de destaque) com altura de 100vh
- Titulo grande e subtitulo
- Botao de call-to-action

**2. Secao "Sobre"**
- Texto com tipografia bem definida
- Imagem ao lado do texto (Flexbox ou Grid)

**3. Secao "Servicos/Cards"**
- Grid ou Flexbox de cards (minimo 3 cards)
- Cada card com imagem, titulo, texto e botao
- Hover effects nos cards

**4. Secao "Contato"**
- Formulario estilizado (do Modulo 2)
- Campos com focus effects

**5. Footer**
- Links, copyright, redes sociais

#### Requisitos tecnicos

| Requisito | Detalhes |
|-----------|----------|
| CSS Externo | Arquivo `.css` separado |
| Variaveis CSS | Pelo menos 5 variaveis no `:root` |
| Google Fonts | Pelo menos 1 fonte externa |
| Flexbox | Usado em pelo menos 2 secoes |
| Grid | Usado em pelo menos 1 secao |
| Media Queries | Pelo menos 2 breakpoints (responsivo) |
| Transicoes | Em botoes, links e cards |
| Box Model | Uso consciente de margin, padding, border |
| Seletores | Classes, pseudo-classes (:hover, :focus) |
| Cores | Paleta consistente com variaveis |

#### Passo a passo

1. Crie a estrutura HTML semantica completa
2. Crie o arquivo CSS com reset e variaveis
3. Estilize mobile-first (comece pelo celular)
4. Adicione media queries para tablet e desktop
5. Adicione transicoes e efeitos hover
6. Teste em diferentes tamanhos de tela (use o DevTools: `Ctrl + Shift + M`)
7. Valide o HTML e confira o CSS
8. Faca commit no Git

```bash
git add .
git commit -m "Adicionar landing page responsiva do Modulo 3"
git push
```

> **Checklist de conclusao:**
> - [ ] HTML semantico completo (header, nav, main, sections, footer)
> - [ ] CSS externo com reset e variaveis
> - [ ] Google Fonts integrada
> - [ ] Flexbox usado em pelo menos 2 secoes
> - [ ] Grid usado em pelo menos 1 secao
> - [ ] Responsivo com pelo menos 2 media queries
> - [ ] Transicoes e hover effects
> - [ ] Formulario estilizado com focus effects
> - [ ] Paleta de cores consistente
> - [ ] Testado em mobile, tablet e desktop
> - [ ] Commit feito no Git

---

## Resumo do Modulo 3

Parabens por completar o Modulo 3! Em dois dias intensos, voce dominou o CSS:

| Topico | O que aprendeu |
|--------|---------------|
| O que e CSS | Sintaxe, regras, declaracoes, anatomia de uma regra |
| Como adicionar CSS | Inline, interno e externo (recomendado) |
| Seletores | Elemento, classe, ID, atributo, combinadores, pseudo-classes, pseudo-elementos |
| Especificidade | Cascata, calculo de especificidade, heranca, !important |
| Cores | Nomes, hexadecimal, RGB/RGBA, HSL/HSLA, gradientes, opacidade |
| Tipografia | font-family, font-size, font-weight, line-height, Google Fonts, text-align |
| Unidades | px, em, rem, %, vw, vh, quando usar cada uma |
| Box Model | Content, padding, border, margin, border-box, border-radius, box-shadow |
| Display e posicao | block, inline, inline-block, none, static, relative, absolute, fixed, sticky |
| Flexbox | Container, items, eixos, justify-content, align-items, gap, flex-grow, order |
| Grid | Template columns/rows, fr, repeat, auto-fit, minmax, areas, span |
| Responsividade | Mobile-first, media queries, breakpoints, clamp(), viewport units |
| Variaveis CSS | Custom properties, :root, var(), temas |
| Transicoes e animacoes | transition, transform, @keyframes, animation |
| Reset CSS | Reset moderno, template inicial |
| Frameworks CSS | Bootstrap (componentes), Tailwind CSS (utilitario), Bulma (leve) |

### O que vem a seguir

No **Modulo 4**, vamos aprender **JavaScript** e adicionar interatividade as suas paginas:
- Variaveis, tipos de dados e operadores
- Condicionais e loops
- Funcoes e arrays
- Manipulacao do DOM
- Eventos e interatividade
- Formularios com validacao dinamica
- E muito mais!

Suas paginas ja tem estrutura (HTML) e estilo (CSS). No proximo modulo, elas vao ganhar **vida**!

> **Dica final:** CSS e uma linguagem que se aprende praticando. Tente recriar layouts de sites que voce admira, experimente propriedades no DevTools e nao tenha medo de errar. Cada erro e uma oportunidade de aprendizado!

---

> **Nota do instrutor:** Este material faz parte do curso de Fundamentos de Desenvolvimento Web. A reproducao parcial ou total para fins educacionais e permitida com os devidos creditos.
