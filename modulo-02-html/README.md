# Modulo 2: HTML -- Estruturando a Web

> **Duracao:** 8 horas (Dias 2 e 3)
> **Pre-requisitos:** Modulo 1 -- Introducao ao Desenvolvimento Web
> **Objetivo:** Dominar HTML para criar paginas web bem estruturadas, semanticas e acessiveis.

---

## Sumario

- [2.1 O que e HTML](#21-o-que-e-html)
- [2.2 Estrutura de um Documento HTML](#22-estrutura-de-um-documento-html)
- [2.3 A Tag Head: Configuracoes da Pagina](#23-a-tag-head-configuracoes-da-pagina)
- [2.4 Tags de Texto](#24-tags-de-texto)
- [2.5 Links e Navegacao](#25-links-e-navegacao)
- [2.6 Listas](#26-listas)
- [2.7 Imagens e Multimidia](#27-imagens-e-multimidia)
- [2.8 Tabelas](#28-tabelas)
- [2.9 Formularios](#29-formularios)
- [2.10 HTML Semantico](#210-html-semantico)
- [2.11 Elementos Inline vs Block](#211-elementos-inline-vs-block)
- [2.12 Entidades HTML e Caracteres Especiais](#212-entidades-html-e-caracteres-especiais)
- [2.13 Acessibilidade em HTML](#213-acessibilidade-em-html)
- [2.14 Validacao HTML](#214-validacao-html)
- [2.15 Atividades Praticas -- Dia 2](#215-atividades-praticas----dia-2)
- [2.16 Atividades Praticas -- Dia 3](#216-atividades-praticas----dia-3)

---

## 2.1 O que e HTML

No Modulo 1, voce aprendeu que HTML e uma das tres linguagens fundamentais da web. Agora, vamos mergulhar de cabeca nessa linguagem e aprender tudo o que voce precisa para criar paginas web completas e bem estruturadas.

### Relembrando: HTML na analogia da casa

Lembra da analogia da casa que usamos no Modulo 1?

- **HTML** = Estrutura (tijolos, paredes, telhado, portas, janelas)
- **CSS** = Aparencia (pintura, decoracao, cores, moveis)
- **JavaScript** = Funcionalidade (eletricidade, automacao, alarme)

O HTML e a **base de tudo**. Sem ele, nao existe pagina web. Voce pode ter uma pagina so com HTML (sem CSS e sem JavaScript), mas nunca tera uma pagina so com CSS ou so com JavaScript.

### O que significa HTML

**HTML** e a sigla de *HyperText Markup Language*, que em portugues significa **Linguagem de Marcacao de Hipertexto**.

Vamos entender cada parte:

- **HyperText (Hipertexto):** texto que contem links para outros textos ou paginas. E o que torna a web uma "teia" -- voce clica em um link e vai para outro lugar.
- **Markup (Marcacao):** e um sistema de "etiquetas" (tags) que voce coloca ao redor do conteudo para dizer ao navegador o que cada coisa e. "Isso e um titulo", "isso e um paragrafo", "isso e uma imagem".
- **Language (Linguagem):** e um conjunto de regras que o navegador entende.

> **Atencao:** HTML **nao** e uma linguagem de programacao! E uma linguagem de **marcacao**. A diferenca e que linguagens de programacao (como JavaScript) tem logica, condicionais e loops. HTML apenas define a estrutura e o conteudo.

### Como o HTML funciona

Quando voce abre uma pagina web no navegador, o seguinte acontece:

```
1. Navegador recebe o arquivo HTML do servidor
                    |
                    v
2. Navegador le o HTML de cima para baixo
                    |
                    v
3. Navegador interpreta as tags e cria a arvore DOM
   (Document Object Model -- a estrutura da pagina)
                    |
                    v
4. Navegador renderiza (desenha) a pagina na tela
```

O navegador e como um **interprete** que le suas instrucoes HTML e transforma em algo visual. Cada tag HTML e uma instrucao que diz ao navegador: "coloque um titulo aqui", "insira uma imagem ali", "crie um link para aquele endereco".

### Tags: a base do HTML

O conceito mais fundamental do HTML sao as **tags** (etiquetas). Uma tag e uma instrucao entre sinais de menor `<` e maior `>`.

A maioria das tags vem em **pares** -- uma tag de abertura e uma tag de fechamento:

```html
<tag>conteudo</tag>
```

```
+------+----------+-------+
| <tag>| conteudo | </tag>|
+------+----------+-------+
  Tag      O que      Tag
  de       aparece    de
  abertura na tela    fechamento
                      (tem a barra /)
```

**Exemplos:**

```html
<h1>Isso e um titulo</h1>
<p>Isso e um paragrafo</p>
<strong>Isso fica em negrito</strong>
```

Algumas tags nao precisam de fechamento -- sao chamadas de **tags vazias** ou **auto-fechantes** (self-closing):

```html
<br>        <!-- Quebra de linha -->
<hr>        <!-- Linha horizontal -->
<img src="foto.jpg" alt="Foto">   <!-- Imagem -->
```

### Atributos: informacoes extras nas tags

As tags podem ter **atributos** que fornecem informacoes adicionais. Os atributos ficam dentro da tag de abertura:

```html
<tag atributo="valor">conteudo</tag>
```

**Exemplos:**

```html
<!-- O atributo href diz para onde o link leva -->
<a href="https://google.com">Ir para o Google</a>

<!-- Os atributos src e alt informam a imagem e sua descricao -->
<img src="foto.jpg" alt="Minha foto de perfil">

<!-- O atributo id identifica o elemento de forma unica -->
<h1 id="titulo-principal">Bem-vindo!</h1>
```

**Regras dos atributos:**
- Sempre ficam na tag de **abertura** (nunca na de fechamento)
- O formato e `nome="valor"` (com aspas duplas)
- Uma tag pode ter **varios** atributos
- Alguns atributos sao **obrigatorios** (como `src` e `alt` em `<img>`)
- Alguns atributos sao **opcionais** (como `id` e `class`)

### Elementos, tags e conteudo

E importante entender a terminologia correta:

```
       Elemento HTML completo
|----------------------------------|
<p class="destaque">Ola, mundo!</p>
|__|                |___________|__|
 Tag                  Conteudo   Tag
 de                              de
 abertura                        fechamento
     |____________|
       Atributo
```

- **Tag:** a marcacao em si (`<p>`, `</p>`)
- **Atributo:** informacao extra na tag (`class="destaque"`)
- **Conteudo:** o que aparece entre as tags (`Ola, mundo!`)
- **Elemento:** o conjunto completo (tag de abertura + atributos + conteudo + tag de fechamento)

### Aninhamento: elementos dentro de elementos

Elementos HTML podem conter outros elementos dentro deles. Isso se chama **aninhamento**:

```html
<div>
    <h1>Titulo</h1>
    <p>Este paragrafo esta <strong>dentro</strong> de uma div.</p>
</div>
```

**Regra de ouro do aninhamento:** as tags devem ser fechadas na ordem inversa em que foram abertas. Pense nelas como caixas dentro de caixas -- a ultima caixa que voce abriu e a primeira que voce fecha.

```html
<!-- CORRETO: fechamento na ordem inversa -->
<p>Texto <strong>em <em>negrito e italico</em></strong></p>

<!-- ERRADO: tags se cruzam -->
<p>Texto <strong>em <em>negrito e italico</strong></em></p>
```

> **Dica:** A indentacao (espacamento a esquerda) ajuda a visualizar o aninhamento. Use 4 espacos ou 1 tab para cada nivel de profundidade. O VS Code faz isso automaticamente!

### Comentarios em HTML

Comentarios sao trechos de texto que o navegador **ignora completamente**. Eles servem para voce e outros desenvolvedores entenderem o codigo:

```html
<!-- Isso e um comentario. Nao aparece na pagina. -->

<!--
    Comentarios podem ter
    varias linhas tambem!
-->

<h1>Titulo visivel</h1>
<!-- <p>Este paragrafo esta comentado e nao aparece</p> -->
<p>Este paragrafo aparece normalmente</p>
```

**Atalho no VS Code:** selecione o texto e pressione `Ctrl + /` (Windows/Linux) ou `Cmd + /` (macOS) para comentar/descomentar rapidamente.

> **Dica:** Use comentarios para organizar secoes do seu HTML, explicar trechos complexos ou temporariamente "desligar" partes do codigo sem apagar.

---

## 2.2 Estrutura de um Documento HTML

Todo documento HTML segue uma estrutura basica obrigatoria. E como a planta de uma casa -- existem elementos que toda casa precisa ter (fundacao, paredes, telhado), e no HTML e a mesma coisa.

### A estrutura minima

Aqui esta a estrutura minima que todo arquivo HTML deve ter:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titulo da Pagina</title>
</head>
<body>
    <!-- Todo o conteudo visivel vai aqui -->
</body>
</html>
```

Vamos entender cada parte:

```
+--------------------------------------------------+
|  <!DOCTYPE html>                                  |  Declaracao: "Este e um documento HTML5"
+--------------------------------------------------+
|  <html lang="pt-BR">                             |  Raiz: contem TUDO
|  +--------------------------------------------+  |
|  |  <head>                                    |  |  Cabeca: configuracoes
|  |    <meta charset="UTF-8">                  |  |  (nao visivel na pagina)
|  |    <meta name="viewport" ...>              |  |
|  |    <title>Titulo</title>                   |  |
|  |  </head>                                   |  |
|  +--------------------------------------------+  |
|  +--------------------------------------------+  |
|  |  <body>                                    |  |  Corpo: conteudo visivel
|  |    <h1>Ola!</h1>                           |  |  (tudo que o usuario ve)
|  |    <p>Minha pagina</p>                     |  |
|  |  </body>                                   |  |
|  +--------------------------------------------+  |
|  </html>                                         |
+--------------------------------------------------+
```

### `<!DOCTYPE html>` -- A declaracao do tipo

A primeira linha de todo documento HTML deve ser o **DOCTYPE**. Essa declaracao informa ao navegador que este e um documento HTML5 (a versao atual do HTML).

```html
<!DOCTYPE html>
```

- Nao e uma tag HTML -- e uma **instrucao** para o navegador
- Deve ser a **primeira linha** do arquivo (antes de qualquer outra coisa)
- Em HTML5, a declaracao e simples. Em versoes antigas, era muito mais complicada
- Se voce esquecer o DOCTYPE, o navegador pode renderizar a pagina em "modo de compatibilidade" (quirks mode), causando comportamentos inesperados

> **Curiosidade:** No HTML 4, o DOCTYPE era assim: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`. Felizmente, em HTML5 so precisamos de `<!DOCTYPE html>`.

### `<html>` -- O elemento raiz

A tag `<html>` e o **elemento raiz** que contem absolutamente tudo na pagina (exceto o DOCTYPE):

```html
<html lang="pt-BR">
    <!-- Tudo fica aqui dentro -->
</html>
```

O atributo `lang="pt-BR"` e muito importante:
- Informa ao navegador que o conteudo esta em **portugues brasileiro**
- Ajuda **leitores de tela** a pronunciar o texto corretamente
- Ajuda o **Google** a indexar a pagina no idioma correto
- Ajuda ferramentas de **traducao automatica** a funcionar melhor

Outros exemplos de idiomas:
- `lang="en"` -- ingles
- `lang="es"` -- espanhol
- `lang="fr"` -- frances
- `lang="ja"` -- japones

### `<head>` -- A cabeca do documento

O `<head>` contem **metadados** -- informacoes sobre a pagina que **nao aparecem diretamente** no conteudo visivel. E como os bastidores de um show: o publico nao ve, mas e essencial para que tudo funcione.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Pagina</title>
</head>
```

Vamos detalhar o `<head>` na proxima secao (2.3).

### `<body>` -- O corpo do documento

O `<body>` contem **todo o conteudo visivel** da pagina -- tudo o que o usuario ve e interage:

```html
<body>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este e o conteudo que aparece na tela.</p>
    <img src="foto.jpg" alt="Uma foto bonita">
</body>
```

**Tudo** que voce quer que apareca na pagina deve estar dentro do `<body>`:
- Textos (titulos, paragrafos)
- Imagens e videos
- Links
- Formularios
- Tabelas
- Menus de navegacao
- E qualquer outro conteudo

### Criando seu primeiro arquivo HTML

Vamos criar um arquivo HTML do zero:

1. Abra o **VS Code**
2. Crie um novo arquivo (`Ctrl + N`)
3. Salve-o como `index.html` (`Ctrl + S`)
4. Digite `!` e pressione `Tab` ou `Enter`

O VS Code vai gerar automaticamente a estrutura basica:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

> **Dica:** Mude `lang="en"` para `lang="pt-BR"` e o titulo `<title>Document</title>` para algo descritivo. Esse atalho do VS Code (chamado **Emmet**) economiza muito tempo!

### Visualizando sua pagina no navegador

Para ver sua pagina HTML no navegador, voce tem duas opcoes:

**Opcao 1: Abrir o arquivo diretamente**
1. Localize o arquivo `.html` no explorador de arquivos
2. De um duplo clique nele (vai abrir no navegador padrao)
3. Ou clique com o botao direito e escolha "Abrir com" > seu navegador

**Opcao 2: Usar a extensao Live Server (recomendado)**
1. No VS Code, clique com o botao direito no arquivo HTML
2. Selecione **"Open with Live Server"**
3. O navegador abre automaticamente
4. **Melhor parte:** toda vez que voce salvar o arquivo, a pagina atualiza sozinha!

> **Dica:** A extensao Live Server e indispensavel para desenvolvimento web. Se voce ainda nao instalou, va em Extensoes (`Ctrl + Shift + X`), busque "Live Server" e instale.

> **Nota:** Veja o arquivo de exemplo `exemplos/01-estrutura-basica.html` para ver uma pagina HTML basica completa em acao!

---

## 2.3 A Tag Head: Configuracoes da Pagina

A tag `<head>` e como a **sala de controle** da sua pagina. Ela contem informacoes que o navegador, os mecanismos de busca e as redes sociais usam para entender e exibir sua pagina corretamente.

### Meta charset -- Codificacao de caracteres

```html
<meta charset="UTF-8">
```

Essa meta tag define qual **codificacao de caracteres** a pagina usa. **UTF-8** e o padrao universal que suporta praticamente todos os caracteres do mundo:
- Acentos em portugues (a, e, i, o, u, c)
- Caracteres especiais (€, £, ¥)
- Emojis (😀, 🎉, 🚀)
- Caracteres de outros idiomas (中文, العربية, 日本語)

> **Atencao:** Sempre use `UTF-8`. Se voce esquecer essa meta tag, caracteres acentuados podem aparecer como simbolos estranhos (ex: "introducao" em vez de "introducao").

### Meta viewport -- Responsividade

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Essa meta tag e **essencial** para que sua pagina funcione bem em dispositivos moveis (celulares e tablets):

- `width=device-width` -- a largura da pagina deve ser igual a largura da tela do dispositivo
- `initial-scale=1.0` -- o nivel de zoom inicial e 100% (sem zoom)

Sem essa tag, sua pagina em um celular apareceria como se fosse a versao desktop, so que minuscula e impossivel de ler.

```
Sem viewport:                    Com viewport:
+------------------+             +------------------+
|  +------------+  |             |                  |
|  |Todo o site |  |             | Titulo grande    |
|  |aparece     |  |             |                  |
|  |minusculo   |  |             | Texto legivel    |
|  |impossivel  |  |             | que se adapta    |
|  |de ler      |  |             | a tela do        |
|  +------------+  |             | celular          |
|                  |             |                  |
+------------------+             +------------------+
```

### Title -- O titulo da pagina

```html
<title>Fundamentos de Desenvolvimento Web</title>
```

O `<title>` define o titulo que aparece:
- Na **aba** do navegador
- Nos **resultados de busca** do Google
- Nos **favoritos/bookmarks** quando o usuario salva a pagina
- Quando voce compartilha o link em **redes sociais**

**Boas praticas para o titulo:**
- Seja descritivo e conciso (50-60 caracteres)
- Inclua o nome da pagina e do site
- Cada pagina deve ter um titulo **unico**

```html
<!-- Bons titulos -->
<title>Contato - Meu Portfolio</title>
<title>Sobre Nos | Empresa XYZ</title>
<title>Fundamentos de HTML - Curso de Desenvolvimento Web</title>

<!-- Titulos ruins -->
<title>Pagina</title>          <!-- Vago demais -->
<title>index</title>           <!-- Sem sentido -->
<title>asdfgh</title>          <!-- Sem sentido nenhum -->
```

### Meta description -- Descricao para buscadores

```html
<meta name="description" content="Aprenda os fundamentos de desenvolvimento web com HTML, CSS e JavaScript neste curso pratico para iniciantes.">
```

A meta description e o texto que aparece abaixo do titulo nos resultados de busca do Google:

```
Resultados da busca:
+---------------------------------------------------+
| Fundamentos de Desenvolvimento Web                 |  <-- <title>
| www.meusite.com.br/curso                          |  <-- URL
| Aprenda os fundamentos de desenvolvimento web     |  <-- <meta description>
| com HTML, CSS e JavaScript neste curso pratico...  |
+---------------------------------------------------+
```

**Boas praticas:**
- Entre 150 e 160 caracteres
- Descreva o conteudo da pagina de forma atraente
- Cada pagina deve ter uma descricao unica
- Inclua palavras-chave relevantes

### Meta author -- Autor da pagina

```html
<meta name="author" content="Seu Nome">
```

Identifica o autor do conteudo da pagina.

### Favicon -- O icone da aba

O **favicon** e o pequeno icone que aparece na aba do navegador, ao lado do titulo:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" href="favicon.png">
```

### Link para CSS externo

```html
<link rel="stylesheet" href="estilo.css">
```

Conecta um arquivo CSS externo a pagina. Vamos aprofundar isso no Modulo 3.

### Script JavaScript

```html
<script src="script.js"></script>
```

Conecta um arquivo JavaScript externo. Vamos aprofundar no Modulo 4.

> **Nota:** Embora a tag `<script>` possa ir no `<head>`, a pratica recomendada e coloca-la no **final do `<body>`** (logo antes de `</body>`), para que a pagina carregue mais rapido.

### Exemplo completo de `<head>`

```html
<head>
    <!-- Codificacao de caracteres -->
    <meta charset="UTF-8">

    <!-- Responsividade -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Descricao para SEO (Google) -->
    <meta name="description" content="Portfolio de desenvolvimento web de Ana Silva">

    <!-- Autor -->
    <meta name="author" content="Ana Silva">

    <!-- Titulo da pagina (aparece na aba do navegador) -->
    <title>Portfolio - Ana Silva | Desenvolvedora Web</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">

    <!-- CSS externo -->
    <link rel="stylesheet" href="css/estilo.css">
</head>
```

> **Dica:** O `<head>` nao e visivel na pagina, mas e fundamental para SEO (aparecer bem no Google), acessibilidade e funcionamento correto da pagina.

---

## 2.4 Tags de Texto

Textos sao o conteudo mais comum em paginas web. O HTML oferece diversas tags para estruturar e formatar textos de diferentes formas.

### Titulos: `<h1>` a `<h6>`

Os titulos criam uma **hierarquia** de informacao na pagina, do mais importante (`<h1>`) ao menos importante (`<h6>`):

```html
<h1>Titulo Principal (h1)</h1>
<h2>Subtitulo (h2)</h2>
<h3>Sub-subtitulo (h3)</h3>
<h4>Titulo nivel 4 (h4)</h4>
<h5>Titulo nivel 5 (h5)</h5>
<h6>Titulo nivel 6 (h6)</h6>
```

**Regras importantes dos titulos:**

1. **Use apenas um `<h1>` por pagina** -- ele representa o tema principal
2. **Nao pule niveis** -- depois de `<h2>`, use `<h3>` (nao pule para `<h5>`)
3. **Nao use titulos para deixar o texto grande** -- use CSS para controlar tamanho
4. **Titulos sao hierarquicos** -- como os capitulos e subcapitulos de um livro

```
Hierarquia correta (como um livro):

h1: Desenvolvimento Web          <-- Titulo do livro
  h2: HTML                       <-- Capitulo
    h3: Tags de Texto            <-- Secao
      h4: Titulos                <-- Sub-secao
    h3: Links                    <-- Outra secao
  h2: CSS                        <-- Outro capitulo
    h3: Cores                    <-- Secao do capitulo
```

> **Dica:** Os titulos sao muito importantes para **SEO** (aparecer no Google) e **acessibilidade** (leitores de tela usam titulos para navegar pela pagina).

### Paragrafos: `<p>`

A tag `<p>` cria um paragrafo de texto. O navegador automaticamente adiciona um espaco antes e depois de cada paragrafo:

```html
<p>Este e o primeiro paragrafo. Ele pode ter varias frases
e o navegador ajusta automaticamente as quebras de linha
conforme o tamanho da tela.</p>

<p>Este e o segundo paragrafo. Note que ha um espaco
automatico entre os paragrafos.</p>
```

> **Atencao:** Nao use `<p>` para criar espacamento. Se precisar de mais espaco entre elementos, use CSS (margin/padding). Paragrafos vazios `<p></p>` nao sao uma boa pratica.

### Quebra de linha: `<br>`

A tag `<br>` forca uma **quebra de linha** sem criar um novo paragrafo:

```html
<p>
    Rua das Flores, 123<br>
    Bairro Jardim<br>
    Sao Paulo - SP<br>
    CEP: 01234-567
</p>
```

O `<br>` e util para:
- Enderecos
- Poemas e letras de musica
- Situacoes onde a quebra de linha faz parte do conteudo

> **Atencao:** Nao use `<br>` repetidamente para criar espaco vertical. Use CSS para isso.

### Linha horizontal: `<hr>`

A tag `<hr>` cria uma **linha horizontal** que funciona como um separador tematico:

```html
<h2>Secao 1</h2>
<p>Conteudo da secao 1...</p>

<hr>

<h2>Secao 2</h2>
<p>Conteudo da secao 2...</p>
```

### Formatacao de texto

O HTML oferece diversas tags para formatar texto com **significado semantico**:

```html
<!-- Negrito (importancia/destaque forte) -->
<p>Este e um texto com <strong>parte em negrito</strong>.</p>

<!-- Italico (enfase) -->
<p>Este e um texto com <em>parte em italico</em>.</p>

<!-- Texto destacado (marcado/realcado) -->
<p>O <mark>HTML semantico</mark> e muito importante.</p>

<!-- Texto deletado (riscado) -->
<p>O preco era <del>R$ 99,90</del> agora e R$ 59,90.</p>

<!-- Texto inserido (sublinhado para indicar adição) -->
<p>Nova funcionalidade: <ins>modo escuro</ins>.</p>

<!-- Texto pequeno (letras miudas, avisos legais) -->
<p><small>Todos os direitos reservados.</small></p>

<!-- Subscrito (formulas quimicas) -->
<p>A formula da agua e H<sub>2</sub>O.</p>

<!-- Sobrescrito (potencias, notas) -->
<p>A area e 25m<sup>2</sup>.</p>
```

#### `<strong>` vs `<b>` e `<em>` vs `<i>`

Existe uma diferenca importante:

| Tag | Visual | Significado |
|-----|--------|-------------|
| `<strong>` | **Negrito** | Importancia forte (semantico) |
| `<b>` | **Negrito** | Apenas visual, sem importancia especial |
| `<em>` | *Italico* | Enfase (semantico) |
| `<i>` | *Italico* | Apenas visual, sem enfase especial |

**Prefira `<strong>` e `<em>`** -- eles transmitem significado e sao melhores para acessibilidade. Leitores de tela podem mudar a entonacao ao encontrar essas tags.

```html
<!-- Bom: tem significado semantico -->
<p><strong>Atencao:</strong> este prazo e <em>improrrogavel</em>.</p>

<!-- Aceitavel: usado para estilo sem significado especial -->
<p>O genero do filme e <i>thriller</i> psicologico.</p>
```

### Citacoes

#### Citacao em bloco: `<blockquote>`

Para citacoes longas que ocupam um bloco separado:

```html
<blockquote cite="https://www.mozilla.org">
    <p>"A web e para todos, e coletivamente temos o poder
    de muda-la para melhor."</p>
    <cite>-- Tim Berners-Lee</cite>
</blockquote>
```

#### Citacao inline: `<q>`

Para citacoes curtas dentro de um paragrafo:

```html
<p>Como disse Tim Berners-Lee: <q>A web e para todos.</q></p>
```

O navegador automaticamente adiciona aspas ao redor do texto.

### Codigo e texto pre-formatado

#### `<code>` -- Codigo inline

Para mencionar codigo dentro de um paragrafo:

```html
<p>Para criar um paragrafo, use a tag <code>&lt;p&gt;</code>.</p>
```

#### `<pre>` -- Texto pre-formatado

Preserva espacos, tabulacoes e quebras de linha exatamente como escritos:

```html
<pre>
    Primeira linha
    Segunda linha
        Terceira com indentacao
</pre>
```

#### `<pre>` + `<code>` -- Bloco de codigo

A combinacao mais comum para exibir blocos de codigo:

```html
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Exemplo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;Ola, Mundo!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
```

### `<span>` -- Container inline generico

A tag `<span>` e um container **inline** generico sem significado semantico. Ela e usada para aplicar estilos ou identificar trechos de texto:

```html
<p>O total da compra e <span style="color: green;">R$ 150,00</span>.</p>
<p>Seu status: <span class="status-ativo">Ativo</span></p>
```

> **Nota:** O `<span>` ganha mais utilidade quando combinado com CSS (Modulo 3). Por enquanto, basta saber que ele existe.

### Abreviacoes: `<abbr>`

A tag `<abbr>` indica que o texto e uma abreviacao ou sigla. O atributo `title` mostra o significado completo quando o usuario passa o mouse sobre a palavra:

```html
<p>Estamos aprendendo <abbr title="HyperText Markup Language">HTML</abbr>
e <abbr title="Cascading Style Sheets">CSS</abbr>.</p>
```

### Endereco de contato: `<address>`

Para informacoes de contato:

```html
<address>
    <p>Desenvolvido por Ana Silva</p>
    <p>Email: <a href="mailto:ana@exemplo.com">ana@exemplo.com</a></p>
    <p>GitHub: <a href="https://github.com/anasilva">@anasilva</a></p>
</address>
```

> **Nota:** Veja o arquivo `exemplos/02-textos-e-links.html` para ver todas essas tags de texto em acao!

---

## 2.5 Links e Navegacao

Links sao a essencia da web -- sao eles que criam a "teia" (web) de conexoes entre paginas. Sem links, cada pagina seria uma ilha isolada.

### A tag `<a>` -- Ancora (Anchor)

A tag `<a>` cria um **hiperlink** (link clicavel):

```html
<a href="https://www.google.com">Ir para o Google</a>
```

O atributo mais importante e o `href` (Hypertext REFerence), que define para onde o link leva.

### Tipos de links

#### Links externos (para outros sites)

```html
<a href="https://www.google.com">Google</a>
<a href="https://github.com">GitHub</a>
<a href="https://developer.mozilla.org">MDN Web Docs</a>
```

#### Links internos (para outras paginas do seu site)

```html
<!-- Mesma pasta -->
<a href="sobre.html">Sobre Nos</a>
<a href="contato.html">Contato</a>

<!-- Subpasta -->
<a href="paginas/portfolio.html">Portfolio</a>

<!-- Pasta acima -->
<a href="../index.html">Voltar ao Inicio</a>
```

**Caminhos relativos vs absolutos:**

```html
<!-- Caminho absoluto (URL completa) -->
<a href="https://www.meusite.com/sobre.html">Sobre</a>

<!-- Caminho relativo (a partir da pagina atual) -->
<a href="sobre.html">Sobre</a>
<a href="./sobre.html">Sobre</a>       <!-- ./ = pasta atual -->
<a href="../index.html">Inicio</a>     <!-- ../ = pasta acima -->
```

> **Dica:** Para links dentro do seu proprio site, prefira **caminhos relativos**. Assim, se voce mudar o dominio, os links continuam funcionando.

#### Links ancora (para secoes na mesma pagina)

Voce pode criar links que levam para uma secao especifica da mesma pagina usando IDs:

```html
<!-- Links no topo da pagina (menu) -->
<nav>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Servicos</a>
    <a href="#contato">Contato</a>
</nav>

<!-- Secoes com os IDs correspondentes -->
<section id="sobre">
    <h2>Sobre Nos</h2>
    <p>Conteudo sobre a empresa...</p>
</section>

<section id="servicos">
    <h2>Nossos Servicos</h2>
    <p>Conteudo sobre servicos...</p>
</section>

<section id="contato">
    <h2>Contato</h2>
    <p>Formulario de contato...</p>
</section>
```

O `#` seguido do nome do ID faz a pagina rolar ate o elemento com aquele `id`.

#### Links para e-mail e telefone

```html
<!-- Abre o programa de email com o destinatario preenchido -->
<a href="mailto:contato@exemplo.com">Enviar e-mail</a>

<!-- Abre o programa de email com assunto preenchido -->
<a href="mailto:contato@exemplo.com?subject=Duvida sobre o curso">
    Enviar e-mail com assunto
</a>

<!-- Em celulares, abre o discador com o numero -->
<a href="tel:+5511999999999">Ligar: (11) 99999-9999</a>
```

### O atributo `target`

O atributo `target` define **onde** o link sera aberto:

```html
<!-- Abre na mesma aba (padrao) -->
<a href="sobre.html">Sobre</a>
<a href="sobre.html" target="_self">Sobre</a>  <!-- mesmo efeito -->

<!-- Abre em uma nova aba -->
<a href="https://google.com" target="_blank">Google</a>
```

| Valor | Comportamento |
|-------|---------------|
| `_self` | Abre na mesma aba (padrao) |
| `_blank` | Abre em uma nova aba |

**Regra pratica:**
- Links **internos** (para paginas do seu site): abrir na **mesma aba** (`_self`)
- Links **externos** (para outros sites): abrir em **nova aba** (`_blank`)

### Seguranca com `rel="noopener noreferrer"`

Quando usar `target="_blank"`, e uma boa pratica adicionar o atributo `rel`:

```html
<a href="https://site-externo.com" target="_blank" rel="noopener noreferrer">
    Site Externo
</a>
```

- `noopener` -- impede que a nova pagina tenha acesso a pagina que a abriu (seguranca)
- `noreferrer` -- nao envia informacao sobre de onde o usuario veio (privacidade)

> **Atencao:** Sempre use `rel="noopener noreferrer"` com `target="_blank"` em links externos. Isso protege seu site de vulnerabilidades de seguranca.

### Link para download

```html
<a href="documento.pdf" download>Baixar PDF</a>

<!-- Com nome personalizado para o arquivo baixado -->
<a href="relatorio-2025-01.pdf" download="relatorio-janeiro.pdf">
    Baixar Relatorio de Janeiro
</a>
```

O atributo `download` faz o navegador baixar o arquivo em vez de abri-lo.

### Boas praticas para links

```html
<!-- BOM: texto descritivo -->
<a href="guia.html">Leia o guia completo de HTML</a>

<!-- RUIM: texto generico -->
<a href="guia.html">Clique aqui</a>
<a href="guia.html">Leia mais</a>
<a href="guia.html">Link</a>
```

O texto do link deve descrever para onde ele leva. Isso e importante para:
- **Acessibilidade:** leitores de tela listam os links da pagina, e "clique aqui" nao faz sentido fora de contexto
- **SEO:** o Google usa o texto do link para entender o conteudo da pagina de destino

> **Nota:** Veja o arquivo `exemplos/02-textos-e-links.html` para exemplos completos de todos os tipos de links!

---

## 2.6 Listas

Listas sao usadas para agrupar itens relacionados. O HTML oferece tres tipos de listas.

### Lista nao ordenada: `<ul>`

A lista nao ordenada (*unordered list*) cria uma lista com **marcadores** (bolinhas). Use quando a **ordem dos itens nao importa**:

```html
<h3>Tecnologias do curso:</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Git</li>
</ul>
```

Resultado visual:
- HTML
- CSS
- JavaScript
- Git

### Lista ordenada: `<ol>`

A lista ordenada (*ordered list*) cria uma lista com **numeros**. Use quando a **ordem dos itens importa**:

```html
<h3>Passos para criar uma pagina web:</h3>
<ol>
    <li>Criar o arquivo HTML</li>
    <li>Escrever a estrutura basica</li>
    <li>Adicionar conteudo</li>
    <li>Estilizar com CSS</li>
    <li>Testar no navegador</li>
</ol>
```

Resultado visual:
1. Criar o arquivo HTML
2. Escrever a estrutura basica
3. Adicionar conteudo
4. Estilizar com CSS
5. Testar no navegador

**Atributos uteis da lista ordenada:**

```html
<!-- Comecando de um numero diferente -->
<ol start="5">
    <li>Quinto item</li>
    <li>Sexto item</li>
</ol>

<!-- Ordem reversa -->
<ol reversed>
    <li>Terceiro lugar</li>
    <li>Segundo lugar</li>
    <li>Primeiro lugar</li>
</ol>

<!-- Usando letras ou algarismos romanos -->
<ol type="A">     <!-- A, B, C, D... -->
<ol type="a">     <!-- a, b, c, d... -->
<ol type="I">     <!-- I, II, III, IV... -->
<ol type="i">     <!-- i, ii, iii, iv... -->
```

### Listas aninhadas (lista dentro de lista)

Voce pode colocar listas dentro de listas para criar subitens:

```html
<ul>
    <li>Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Back-end
        <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
        </ul>
    </li>
    <li>Banco de Dados
        <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
        </ul>
    </li>
</ul>
```

### Lista de definicao: `<dl>`

A lista de definicao e usada para pares **termo + definicao**, como um dicionario ou glossario:

```html
<h3>Glossario de Desenvolvimento Web:</h3>
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcacao para estruturar paginas web.</dd>

    <dt>CSS</dt>
    <dd>Linguagem de estilo para definir a aparencia visual.</dd>

    <dt>JavaScript</dt>
    <dd>Linguagem de programacao para adicionar interatividade.</dd>

    <dt>DOM</dt>
    <dd>Document Object Model -- representacao da pagina em forma de arvore de objetos.</dd>
</dl>
```

- `<dl>` -- *definition list* (a lista em si)
- `<dt>` -- *definition term* (o termo)
- `<dd>` -- *definition description* (a definicao)

### Quando usar cada tipo de lista

| Tipo | Quando usar | Exemplo |
|------|-------------|---------|
| `<ul>` | Ordem nao importa | Lista de compras, ingredientes, habilidades |
| `<ol>` | Ordem importa | Passos de uma receita, ranking, instrucoes |
| `<dl>` | Pares termo/definicao | Glossario, FAQ, especificacoes |

> **Dica:** Listas sao muito mais do que apenas listas de texto! No Modulo 3, voce vai aprender a estilizar listas com CSS para criar **menus de navegacao**, **galerias de cards** e muito mais.

---

## 2.7 Imagens e Multimidia

Imagens e outros elementos de midia tornam as paginas web mais atrativas e informativas. Vamos aprender a inseri-los corretamente.

### A tag `<img>` -- Inserindo imagens

A tag `<img>` e uma tag **auto-fechante** (nao precisa de `</img>`):

```html
<img src="foto.jpg" alt="Descricao da imagem">
```

**Atributos essenciais:**

| Atributo | Funcao | Obrigatorio? |
|----------|--------|:------------:|
| `src` | Caminho ou URL da imagem | Sim |
| `alt` | Texto alternativo (descricao da imagem) | Sim |
| `width` | Largura em pixels | Recomendado |
| `height` | Altura em pixels | Recomendado |

```html
<!-- Imagem local (na mesma pasta) -->
<img src="foto.jpg" alt="Foto do meu cachorro" width="400" height="300">

<!-- Imagem em subpasta -->
<img src="img/logo.png" alt="Logo da empresa" width="200" height="80">

<!-- Imagem da internet (URL completa) -->
<img src="https://via.placeholder.com/600x400" alt="Imagem de exemplo" width="600" height="400">
```

### O atributo `alt` -- Texto alternativo

O `alt` e um dos atributos **mais importantes** do HTML. Ele fornece uma descricao textual da imagem que e usada quando:

- A imagem **nao carrega** (internet lenta, erro no caminho)
- Um **leitor de tela** esta lendo a pagina (acessibilidade para deficientes visuais)
- Um **mecanismo de busca** (Google) esta indexando a pagina

```html
<!-- BOM: descricao clara e util -->
<img src="equipe.jpg" alt="Equipe de desenvolvedores reunida no escritorio">

<!-- BOM: para imagens decorativas, alt vazio -->
<img src="decoracao.png" alt="">

<!-- RUIM: sem descricao real -->
<img src="equipe.jpg" alt="imagem">
<img src="equipe.jpg" alt="foto">

<!-- PESSIMO: sem alt (erro de acessibilidade) -->
<img src="equipe.jpg">
```

**Dicas para um bom texto alt:**
- Descreva o que a imagem **mostra** (nao o que ela "e")
- Seja conciso (125 caracteres ou menos)
- Nao comece com "Imagem de..." -- o leitor de tela ja sabe que e uma imagem
- Para imagens **decorativas** (que nao transmitem informacao), use `alt=""`
- Para **logos**, use o nome da empresa: `alt="Logo da Empresa XYZ"`

### Formatos de imagem para web

| Formato | Extensao | Ideal para | Transparencia |
|---------|----------|------------|:-------------:|
| **JPEG** | `.jpg` / `.jpeg` | Fotos e imagens com muitas cores | Nao |
| **PNG** | `.png` | Graficos, logos, imagens com transparencia | Sim |
| **GIF** | `.gif` | Animacoes simples | Sim (limitada) |
| **SVG** | `.svg` | Icones, logos, graficos vetoriais | Sim |
| **WebP** | `.webp` | Substituto moderno de JPEG e PNG (menor tamanho) | Sim |

> **Dica:** Para fotos, use **JPEG** ou **WebP**. Para logos e icones, use **PNG** ou **SVG**. WebP e o formato mais moderno e gera arquivos menores.

### `<figure>` e `<figcaption>` -- Imagem com legenda

Para associar uma legenda a uma imagem, use `<figure>` e `<figcaption>`:

```html
<figure>
    <img
        src="grafico-vendas.png"
        alt="Grafico de barras mostrando vendas crescentes de janeiro a dezembro"
        width="600"
        height="400"
    >
    <figcaption>Figura 1: Evolucao das vendas em 2024.</figcaption>
</figure>
```

A tag `<figure>` pode conter qualquer conteudo ilustrativo (imagens, diagramas, trechos de codigo), e `<figcaption>` e sua legenda.

### `<picture>` -- Imagens responsivas

A tag `<picture>` permite servir **imagens diferentes** dependendo do tamanho da tela:

```html
<picture>
    <!-- Tela pequena (celular): imagem menor -->
    <source media="(max-width: 480px)" srcset="foto-pequena.jpg">

    <!-- Tela media (tablet): imagem media -->
    <source media="(max-width: 768px)" srcset="foto-media.jpg">

    <!-- Tela grande (desktop): imagem grande (padrao) -->
    <img src="foto-grande.jpg" alt="Paisagem de montanha ao por do sol">
</picture>
```

O navegador automaticamente escolhe a imagem mais adequada para o dispositivo.

### `<video>` -- Inserindo video

```html
<video width="640" height="360" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <p>Seu navegador nao suporta o elemento de video.
       <a href="video.mp4">Baixe o video aqui</a>.</p>
</video>
```

**Atributos do `<video>`:**

| Atributo | Funcao |
|----------|--------|
| `controls` | Exibe os controles de play, pause, volume |
| `autoplay` | Inicia automaticamente (nao recomendado) |
| `muted` | Inicia sem som (necessario para autoplay funcionar) |
| `loop` | Repete o video automaticamente |
| `poster` | Imagem exibida antes do video iniciar |
| `width` / `height` | Dimensoes do player |

### `<audio>` -- Inserindo audio

```html
<audio controls>
    <source src="musica.mp3" type="audio/mpeg">
    <source src="musica.ogg" type="audio/ogg">
    <p>Seu navegador nao suporta o elemento de audio.</p>
</audio>
```

### `<iframe>` -- Incorporando conteudo externo

O `<iframe>` permite incorporar conteudo de outros sites, como videos do YouTube ou mapas do Google:

```html
<!-- Video do YouTube -->
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ID_DO_VIDEO"
    title="Titulo do video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

<!-- Google Maps -->
<iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    title="Localizacao no mapa"
></iframe>
```

> **Dica:** Para incorporar um video do YouTube, clique em "Compartilhar" > "Incorporar" abaixo do video e copie o codigo do iframe fornecido.

### Lazy loading -- Carregamento sob demanda

O atributo `loading="lazy"` faz com que imagens e iframes so sejam carregados quando estiverem **proximos de aparecer na tela**. Isso melhora a performance da pagina:

```html
<!-- A imagem so carrega quando o usuario rolar ate ela -->
<img
    src="foto-pesada.jpg"
    alt="Foto de alta resolucao"
    width="1200"
    height="800"
    loading="lazy"
>
```

> **Dica:** Use `loading="lazy"` em imagens que nao aparecem na primeira tela (as que ficam "abaixo da dobra"). Nao use em imagens no topo da pagina, pois elas devem carregar imediatamente.

> **Nota:** Veja o arquivo `exemplos/03-imagens-e-midia.html` para ver todos esses elementos de midia em acao!

---

## 2.8 Tabelas

Tabelas HTML sao usadas para exibir dados organizados em **linhas e colunas**. Elas sao ideais para dados tabulares como horarios, precos, comparacoes e estatisticas.

> **Atencao:** Tabelas devem ser usadas **apenas para dados tabulares**, nunca para criar o layout da pagina. Para layout, use CSS (Flexbox e Grid, que veremos no Modulo 3).

### Estrutura basica de uma tabela

```html
<table>
    <tr>             <!-- tr = table row (linha) -->
        <th>Nome</th>     <!-- th = table header (cabecalho) -->
        <th>Idade</th>
        <th>Cidade</th>
    </tr>
    <tr>
        <td>Ana</td>      <!-- td = table data (dado) -->
        <td>25</td>
        <td>Sao Paulo</td>
    </tr>
    <tr>
        <td>Carlos</td>
        <td>30</td>
        <td>Rio de Janeiro</td>
    </tr>
</table>
```

**Tags fundamentais:**

| Tag | Significado | Funcao |
|-----|-------------|--------|
| `<table>` | Table | Container da tabela |
| `<tr>` | Table Row | Uma linha da tabela |
| `<th>` | Table Header | Celula de cabecalho (negrito, centralizado) |
| `<td>` | Table Data | Celula de dados |

### Estrutura semantica completa

Uma tabela bem estruturada deve ter cabecalho, corpo e rodape:

```html
<table>
    <!-- Titulo da tabela -->
    <caption>Lista de Alunos do Curso</caption>

    <!-- Cabecalho -->
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>

    <!-- Corpo (dados) -->
    <tbody>
        <tr>
            <td>Ana Silva</td>
            <td>25</td>
            <td>Sao Paulo</td>
        </tr>
        <tr>
            <td>Carlos Souza</td>
            <td>30</td>
            <td>Rio de Janeiro</td>
        </tr>
        <tr>
            <td>Maria Santos</td>
            <td>22</td>
            <td>Belo Horizonte</td>
        </tr>
    </tbody>

    <!-- Rodape -->
    <tfoot>
        <tr>
            <td colspan="3">Total: 3 alunos</td>
        </tr>
    </tfoot>
</table>
```

**Tags de estrutura:**

| Tag | Significado | Funcao |
|-----|-------------|--------|
| `<caption>` | Legenda | Titulo descritivo da tabela |
| `<thead>` | Table Head | Agrupa linhas de cabecalho |
| `<tbody>` | Table Body | Agrupa linhas de dados |
| `<tfoot>` | Table Foot | Agrupa linhas de rodape (totais, resumos) |

> **Dica:** Usar `<thead>`, `<tbody>` e `<tfoot>` nao muda a aparencia visual, mas melhora a **semantica**, a **acessibilidade** e facilita a **estilizacao com CSS**.

### `colspan` e `rowspan` -- Mesclando celulas

#### `colspan` -- Mesclar colunas (horizontal)

```html
<tr>
    <td colspan="3">Esta celula ocupa 3 colunas</td>
</tr>
```

```
Sem colspan:          Com colspan="3":
+---+---+---+        +---------------+
| A | B | C |        | Celula unica  |
+---+---+---+        +---------------+
```

#### `rowspan` -- Mesclar linhas (vertical)

```html
<tr>
    <td rowspan="2">Esta celula ocupa 2 linhas</td>
    <td>Dado 1</td>
</tr>
<tr>
    <td>Dado 2</td>
</tr>
```

```
Sem rowspan:          Com rowspan="2":
+---+---+             +---+---+
| A | 1 |             |   | 1 |
+---+---+             | A +---+
| B | 2 |             |   | 2 |
+---+---+             +---+---+
```

### O atributo `scope` -- Acessibilidade em tabelas

O atributo `scope` em `<th>` ajuda leitores de tela a entender a relacao entre cabecalhos e dados:

```html
<thead>
    <tr>
        <th scope="col">Aluno</th>     <!-- Cabecalho de coluna -->
        <th scope="col">Nota</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">Ana</th>       <!-- Cabecalho de linha -->
        <td>9.5</td>
    </tr>
</tbody>
```

> **Nota:** Veja o arquivo `exemplos/04-tabelas.html` para ver tabelas completas com colspan, rowspan, e tabelas com estilos!

---

## 2.9 Formularios

Formularios sao a principal forma de **coletar informacoes** dos usuarios na web. Cadastros, logins, buscas, comentarios, pagamentos -- tudo usa formularios.

### A tag `<form>` -- Container do formulario

Todo formulario comeca com a tag `<form>`:

```html
<form action="/processar" method="POST">
    <!-- Campos do formulario vao aqui -->
</form>
```

**Atributos do `<form>`:**

| Atributo | Funcao |
|----------|--------|
| `action` | URL para onde os dados serao enviados |
| `method` | Metodo HTTP: `GET` (dados na URL) ou `POST` (dados no corpo) |

- **GET:** dados aparecem na URL. Usado para buscas e filtros
- **POST:** dados ficam ocultos. Usado para cadastros, logins e dados sensiveis

```html
<!-- Formulario de busca (GET -- dados na URL) -->
<form action="/buscar" method="GET">
    <input type="search" name="q" placeholder="Buscar...">
    <button type="submit">Buscar</button>
</form>
<!-- Resultado: /buscar?q=html -->

<!-- Formulario de login (POST -- dados ocultos) -->
<form action="/login" method="POST">
    <input type="email" name="email">
    <input type="password" name="senha">
    <button type="submit">Entrar</button>
</form>
```

### `<label>` -- Rotulo dos campos

A tag `<label>` associa um texto a um campo de formulario. Quando o usuario clica no label, o campo correspondente recebe foco:

```html
<!-- Metodo 1: usando o atributo "for" que aponta para o "id" do campo -->
<label for="nome">Nome completo:</label>
<input type="text" id="nome" name="nome">

<!-- Metodo 2: envolvendo o campo dentro do label -->
<label>
    E-mail:
    <input type="email" name="email">
</label>
```

> **Atencao:** Sempre use `<label>` nos seus campos! Isso e essencial para **acessibilidade** (leitores de tela) e melhora a **usabilidade** (area clicavel maior, especialmente em celulares).

### `<input>` -- O campo mais versutil

A tag `<input>` e a mais utilizada em formularios. O atributo `type` define que **tipo de campo** sera exibido:

#### Campos de texto

```html
<!-- Texto simples -->
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" placeholder="Digite seu nome">

<!-- E-mail (valida formato automaticamente) -->
<label for="email">E-mail:</label>
<input type="email" id="email" name="email" placeholder="exemplo@email.com">

<!-- Senha (caracteres ocultos) -->
<label for="senha">Senha:</label>
<input type="password" id="senha" name="senha" placeholder="Sua senha">

<!-- Telefone -->
<label for="telefone">Telefone:</label>
<input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999">

<!-- URL -->
<label for="site">Site:</label>
<input type="url" id="site" name="site" placeholder="https://www.exemplo.com">

<!-- Busca -->
<label for="busca">Buscar:</label>
<input type="search" id="busca" name="busca" placeholder="Pesquisar...">
```

#### Campos numericos e de data

```html
<!-- Numero -->
<label for="idade">Idade:</label>
<input type="number" id="idade" name="idade" min="0" max="150" step="1">

<!-- Data -->
<label for="nascimento">Data de Nascimento:</label>
<input type="date" id="nascimento" name="nascimento">

<!-- Mes -->
<label for="mes">Mes:</label>
<input type="month" id="mes" name="mes">

<!-- Hora -->
<label for="hora">Horario:</label>
<input type="time" id="hora" name="hora">

<!-- Intervalo (slider) -->
<label for="experiencia">Nivel de experiencia (0-10):</label>
<input type="range" id="experiencia" name="experiencia" min="0" max="10" value="5">
```

#### Campos de selecao

```html
<!-- Checkbox (selecao multipla) -->
<label><input type="checkbox" name="interesses" value="html"> HTML</label>
<label><input type="checkbox" name="interesses" value="css"> CSS</label>
<label><input type="checkbox" name="interesses" value="js"> JavaScript</label>

<!-- Radio (selecao unica) -->
<label><input type="radio" name="nivel" value="iniciante"> Iniciante</label>
<label><input type="radio" name="nivel" value="intermediario"> Intermediario</label>
<label><input type="radio" name="nivel" value="avancado"> Avancado</label>
```

**Diferenca entre checkbox e radio:**
- **Checkbox:** permite selecionar **varios** itens (cada um tem `name` igual ou diferente)
- **Radio:** permite selecionar **apenas um** item do grupo (todos devem ter o mesmo `name`)

#### Outros tipos de input

```html
<!-- Cor -->
<label for="cor">Cor favorita:</label>
<input type="color" id="cor" name="cor" value="#3498db">

<!-- Arquivo -->
<label for="arquivo">Enviar curriculo:</label>
<input type="file" id="arquivo" name="arquivo" accept=".pdf,.doc,.docx">

<!-- Campo oculto (nao visivel ao usuario) -->
<input type="hidden" name="formulario_id" value="contato-v2">
```

### Atributos importantes dos inputs

```html
<input
    type="text"
    id="nome"
    name="nome"
    placeholder="Digite seu nome"    <!-- Texto fantasma (dica) -->
    required                         <!-- Campo obrigatorio -->
    minlength="3"                    <!-- Minimo de 3 caracteres -->
    maxlength="100"                  <!-- Maximo de 100 caracteres -->
    autofocus                        <!-- Recebe foco ao carregar a pagina -->
    readonly                         <!-- Somente leitura (nao editavel) -->
    disabled                         <!-- Desabilitado (nao editavel, nao enviado) -->
    value="Valor padrao"             <!-- Valor pre-preenchido -->
    pattern="[A-Za-z]{3,}"           <!-- Expressao regular para validacao -->
    title="Minimo 3 letras"          <!-- Mensagem de validacao -->
>
```

### `<textarea>` -- Area de texto multilinha

Para textos longos (mensagens, comentarios, descricoes):

```html
<label for="mensagem">Mensagem:</label>
<textarea
    id="mensagem"
    name="mensagem"
    rows="6"
    cols="50"
    placeholder="Escreva sua mensagem aqui..."
    required
    minlength="10"
    maxlength="1000"
></textarea>
```

### `<select>` -- Lista suspensa (dropdown)

```html
<label for="estado">Estado:</label>
<select id="estado" name="estado" required>
    <option value="">Selecione um estado...</option>
    <option value="SP">Sao Paulo</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="MG">Minas Gerais</option>
    <option value="RS">Rio Grande do Sul</option>
</select>
```

**Agrupando opcoes com `<optgroup>`:**

```html
<select name="curso">
    <option value="">Selecione um curso...</option>
    <optgroup label="Front-end">
        <option value="html">HTML e CSS</option>
        <option value="js">JavaScript</option>
        <option value="react">React</option>
    </optgroup>
    <optgroup label="Back-end">
        <option value="node">Node.js</option>
        <option value="python">Python</option>
    </optgroup>
</select>
```

### `<datalist>` -- Sugestoes de autocompletar

Combina a liberdade de um campo de texto com sugestoes de uma lista:

```html
<label for="linguagem">Linguagem favorita:</label>
<input type="text" id="linguagem" name="linguagem" list="linguagens">
<datalist id="linguagens">
    <option value="JavaScript">
    <option value="Python">
    <option value="Java">
    <option value="TypeScript">
    <option value="C#">
    <option value="PHP">
</datalist>
```

O usuario pode digitar livremente ou selecionar uma das sugestoes.

### `<fieldset>` e `<legend>` -- Agrupando campos

Use `<fieldset>` para agrupar campos relacionados e `<legend>` para dar um titulo ao grupo:

```html
<form action="/cadastro" method="POST">
    <fieldset>
        <legend>Dados Pessoais</legend>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
    </fieldset>

    <fieldset>
        <legend>Endereco</legend>
        <label for="rua">Rua:</label>
        <input type="text" id="rua" name="rua">
        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade">
    </fieldset>

    <button type="submit">Cadastrar</button>
</form>
```

### Botoes

```html
<!-- Botao de envio (submete o formulario) -->
<button type="submit">Enviar</button>
<input type="submit" value="Enviar">

<!-- Botao de reset (limpa todos os campos) -->
<button type="reset">Limpar</button>
<input type="reset" value="Limpar">

<!-- Botao generico (sem acao padrao, controlado por JavaScript) -->
<button type="button">Clique Aqui</button>
```

> **Dica:** Prefira `<button>` em vez de `<input type="submit">`. A tag `<button>` e mais flexivel -- permite conteudo HTML dentro dela (como icones e texto formatado).

### Validacao HTML5

O HTML5 oferece validacao nativa de formularios, sem precisar de JavaScript:

```html
<form action="/cadastro" method="POST">
    <!-- Campo obrigatorio -->
    <input type="text" name="nome" required>

    <!-- E-mail valido -->
    <input type="email" name="email" required>

    <!-- Minimo e maximo de caracteres -->
    <input type="text" name="usuario" minlength="3" maxlength="20" required>

    <!-- Valor numerico com limites -->
    <input type="number" name="idade" min="18" max="100" required>

    <!-- Padrao personalizado (regex) -->
    <input type="text" name="cep" pattern="[0-9]{5}-[0-9]{3}"
           title="Formato: 12345-678" required>

    <button type="submit">Cadastrar</button>
</form>
```

Quando o usuario tenta enviar o formulario sem preencher corretamente, o navegador exibe mensagens de erro automaticamente.

> **Nota:** Veja o arquivo `exemplos/05-formularios.html` para ver um formulario completo e funcional com todos esses elementos!

---

## 2.10 HTML Semantico

HTML semantico e uma das coisas mais importantes que voce vai aprender neste curso. Ele muda a forma como voce pensa sobre estruturar paginas web.

### O que e HTML semantico

**HTML semantico** significa usar tags que tem **significado proprio** -- que descrevem o **tipo de conteudo** que contem, em vez de apenas como o conteudo parece visualmente.

**Analogia:** Imagine que voce esta organizando uma biblioteca. Voce pode colocar todos os livros em caixas identicas e genéricas, ou pode usar prateleiras organizadas por categoria (ficcao, ciencia, historia). As duas formas guardam os livros, mas a segunda torna muito mais facil encontrar o que voce procura.

```html
<!-- NAO semantico: tudo e div (caixa generica) -->
<div id="cabecalho">
    <div class="logo">Blog Tech</div>
    <div class="menu">
        <div><a href="#">Inicio</a></div>
        <div><a href="#">Sobre</a></div>
    </div>
</div>
<div id="conteudo">
    <div class="post">
        <div class="titulo">Meu Artigo</div>
        <div class="texto">Conteudo do artigo...</div>
    </div>
</div>
<div id="rodape">
    <div>© 2025 Blog Tech</div>
</div>

<!-- SEMANTICO: cada tag descreve o que contem -->
<header>
    <h1>Blog Tech</h1>
    <nav>
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
    </nav>
</header>
<main>
    <article>
        <h2>Meu Artigo</h2>
        <p>Conteudo do artigo...</p>
    </article>
</main>
<footer>
    <p>&copy; 2025 Blog Tech</p>
</footer>
```

### Por que usar HTML semantico

1. **Acessibilidade:** leitores de tela entendem a estrutura da pagina e podem navegar por secoes (ex: "ir para a navegacao", "ir para o conteudo principal")
2. **SEO:** o Google entende melhor o conteudo e pode posicionar sua pagina melhor nos resultados de busca
3. **Manutencao:** o codigo fica mais legivel e facil de entender
4. **Consistencia:** cria um padrao universal que todos os desenvolvedores entendem

### Tags semanticas de estrutura

Aqui esta como uma pagina tipica e organizada com HTML semantico:

```
+--------------------------------------------------+
|                  <header>                         |
|  Logo, titulo do site                            |
+--------------------------------------------------+
|                   <nav>                           |
|  Menu de navegacao                               |
+--------------------------------------------------+
|  +------------------------------+  +-----------+ |
|  |          <main>              |  |  <aside>  | |
|  |  +------------------------+ |  |           | |
|  |  |      <section>         | |  | Conteudo  | |
|  |  |  +------------------+  | |  | lateral   | |
|  |  |  |    <article>     |  | |  | (sidebar) | |
|  |  |  |   Post/artigo    |  | |  |           | |
|  |  |  +------------------+  | |  |           | |
|  |  |  +------------------+  | |  |           | |
|  |  |  |    <article>     |  | |  |           | |
|  |  |  |   Post/artigo    |  | |  |           | |
|  |  |  +------------------+  | |  |           | |
|  |  +------------------------+ |  |           | |
|  +------------------------------+  +-----------+ |
+--------------------------------------------------+
|                  <footer>                         |
|  Rodape, copyright, links                        |
+--------------------------------------------------+
```

#### `<header>` -- Cabecalho

Representa o cabecalho de uma pagina ou de uma secao:

```html
<!-- Cabecalho do site -->
<header>
    <h1>Meu Site</h1>
    <p>Bem-vindo ao meu site pessoal</p>
</header>

<!-- Cabecalho de um artigo -->
<article>
    <header>
        <h2>Titulo do Artigo</h2>
        <p>Por Ana Silva | 15 de Janeiro de 2025</p>
    </header>
    <p>Conteudo do artigo...</p>
</article>
```

#### `<nav>` -- Navegacao

Contem links de navegacao:

```html
<nav aria-label="Navegacao principal">
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/servicos">Servicos</a></li>
        <li><a href="/contato">Contato</a></li>
    </ul>
</nav>
```

> **Nota:** Nao e necessario colocar todos os links em `<nav>`. Use `<nav>` apenas para blocos de navegacao **principais** (menu do site, paginacao, breadcrumbs).

#### `<main>` -- Conteudo principal

Contem o conteudo principal da pagina. Deve ser **unico** por pagina:

```html
<main>
    <h1>Artigos sobre Desenvolvimento Web</h1>
    <article>...</article>
    <article>...</article>
</main>
```

> **Atencao:** Use apenas **um** `<main>` por pagina. Ele nao deve estar dentro de `<header>`, `<nav>`, `<aside>` ou `<footer>`.

#### `<section>` -- Secao tematica

Agrupa conteudo com um **tema em comum**. Cada secao geralmente tem seu proprio titulo:

```html
<main>
    <section>
        <h2>Artigos Recentes</h2>
        <article>...</article>
        <article>...</article>
    </section>

    <section>
        <h2>Tutoriais Populares</h2>
        <article>...</article>
        <article>...</article>
    </section>
</main>
```

#### `<article>` -- Conteudo independente

Representa um conteudo **independente** e **auto-contido** que faz sentido sozinho:

```html
<article>
    <header>
        <h2>Como Aprender HTML em 2025</h2>
        <time datetime="2025-01-15">15 de Janeiro de 2025</time>
    </header>
    <p>HTML e a base de toda pagina web...</p>
    <footer>
        <p>Autor: Ana Silva | Tags: HTML, Tutorial</p>
    </footer>
</article>
```

Exemplos de conteudo `<article>`:
- Post de blog
- Noticia
- Comentario
- Card de produto
- Post de rede social

#### `<aside>` -- Conteudo lateral/complementar

Contem conteudo **relacionado mas nao essencial** ao conteudo principal:

```html
<aside>
    <h3>Sobre o Autor</h3>
    <p>Ana Silva e desenvolvedora web ha 5 anos.</p>

    <h3>Artigos Relacionados</h3>
    <ul>
        <li><a href="#">Introducao ao CSS</a></li>
        <li><a href="#">JavaScript Basico</a></li>
    </ul>
</aside>
```

Exemplos de conteudo `<aside>`:
- Barra lateral (sidebar)
- Informacoes complementares
- Links relacionados
- Publicidade
- Biografia do autor

#### `<footer>` -- Rodape

Representa o rodape da pagina ou de uma secao:

```html
<!-- Rodape do site -->
<footer>
    <p>&copy; 2025 Meu Site. Todos os direitos reservados.</p>
    <nav>
        <a href="/privacidade">Politica de Privacidade</a>
        <a href="/termos">Termos de Uso</a>
    </nav>
    <address>
        Contato: <a href="mailto:contato@meusite.com">contato@meusite.com</a>
    </address>
</footer>
```

### Outras tags semanticas importantes

#### `<time>` -- Data e hora

```html
<p>Publicado em <time datetime="2025-01-15">15 de Janeiro de 2025</time>.</p>
<p>O evento comeca as <time datetime="14:30">14h30</time>.</p>
```

O atributo `datetime` fornece a data em formato padrao (legivel por maquinas), enquanto o conteudo da tag e para humanos.

#### `<details>` e `<summary>` -- Conteudo expansivel

Cria um elemento de "acordeao" que o usuario pode expandir/recolher:

```html
<details>
    <summary>Clique para ver mais informacoes</summary>
    <p>Este conteudo fica oculto ate o usuario clicar no summary.</p>
    <p>Funciona nativamente no HTML, sem JavaScript!</p>
</details>

<!-- Aberto por padrao -->
<details open>
    <summary>FAQ: O que e HTML?</summary>
    <p>HTML e a linguagem de marcacao para criar paginas web.</p>
</details>
```

#### `<figure>` e `<figcaption>` -- Figura com legenda

Ja vimos na secao de imagens, mas serve para qualquer conteudo ilustrativo:

```html
<figure>
    <pre><code>&lt;p&gt;Exemplo de codigo&lt;/p&gt;</code></pre>
    <figcaption>Exemplo de paragrafo HTML</figcaption>
</figure>
```

### `<div>` e `<span>` -- Tags genericas (nao semanticas)

Quando nenhuma tag semantica se encaixa, voce pode usar:

- `<div>` -- container generico **em bloco** (block)
- `<span>` -- container generico **inline** (em linha)

```html
<!-- div: para agrupar elementos em bloco -->
<div class="card">
    <h3>Titulo do Card</h3>
    <p>Conteudo do card...</p>
</div>

<!-- span: para marcar trechos de texto -->
<p>O total e <span class="preco">R$ 99,90</span>.</p>
```

> **Dica:** Use `<div>` e `<span>` como **ultimo recurso**. Sempre verifique se existe uma tag semantica que se encaixa melhor.

### Resumo: `<div>` vs tags semanticas

| Em vez de... | Use... | Quando... |
|--------------|--------|-----------|
| `<div id="header">` | `<header>` | Cabecalho da pagina/secao |
| `<div id="nav">` | `<nav>` | Menu de navegacao |
| `<div id="main">` | `<main>` | Conteudo principal |
| `<div class="sidebar">` | `<aside>` | Conteudo lateral |
| `<div class="post">` | `<article>` | Conteudo independente |
| `<div class="section">` | `<section>` | Secao tematica |
| `<div id="footer">` | `<footer>` | Rodape |

> **Nota:** Veja o arquivo `exemplos/06-semantico.html` para ver uma pagina completa construida com HTML semantico. E um exemplo de blog que usa todas as tags que aprendemos!

---

## 2.11 Elementos Inline vs Block

Entender a diferenca entre elementos **inline** e **block** e fundamental para compreender como o HTML organiza o conteudo na pagina.

### Elementos Block (Bloco)

Elementos de bloco:
- Ocupam **toda a largura disponivel** (100% do container pai)
- Sempre comecam em uma **nova linha**
- Podem conter outros elementos block e inline

```
+----------------------------------------+
|            <h1>Titulo</h1>             |  <-- Ocupa toda a largura
+----------------------------------------+
+----------------------------------------+
|         <p>Paragrafo</p>               |  <-- Ocupa toda a largura
+----------------------------------------+
+----------------------------------------+
|            <div>Div</div>              |  <-- Ocupa toda a largura
+----------------------------------------+
```

**Exemplos de elementos block:**
- `<h1>` a `<h6>` -- titulos
- `<p>` -- paragrafo
- `<div>` -- divisao generica
- `<ul>`, `<ol>`, `<li>` -- listas
- `<table>` -- tabela
- `<form>` -- formulario
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` -- semanticos
- `<blockquote>` -- citacao em bloco
- `<hr>` -- linha horizontal
- `<pre>` -- texto pre-formatado

### Elementos Inline (Em Linha)

Elementos inline:
- Ocupam **apenas o espaco necessario** para seu conteudo
- **Nao** comecam em uma nova linha (ficam na mesma linha que o conteudo ao redor)
- **Nao** podem conter elementos block (apenas outros inline)

```
+----------------------------------------+
| Texto com <strong>negrito</strong> e    |  <-- Tudo na mesma linha
| <em>italico</em> e <a>link</a>.        |
+----------------------------------------+
```

**Exemplos de elementos inline:**
- `<a>` -- link
- `<strong>`, `<em>`, `<mark>`, `<del>`, `<ins>` -- formatacao de texto
- `<span>` -- container generico inline
- `<img>` -- imagem (inline-block, tecnicamente)
- `<code>` -- codigo
- `<abbr>` -- abreviacao
- `<br>` -- quebra de linha
- `<input>`, `<button>`, `<select>`, `<textarea>` -- campos de formulario
- `<label>` -- rotulo
- `<sub>`, `<sup>` -- subscrito e sobrescrito
- `<small>` -- texto pequeno
- `<time>` -- data/hora
- `<q>` -- citacao inline

### Diferenca visual

```html
<!-- Elementos BLOCK: cada um em sua propria linha -->
<p>Primeiro paragrafo</p>
<p>Segundo paragrafo</p>
<p>Terceiro paragrafo</p>

<!-- Resultado: -->
<!-- Primeiro paragrafo  -->
<!-- Segundo paragrafo   -->
<!-- Terceiro paragrafo  -->

<!-- Elementos INLINE: todos na mesma linha -->
<span>Primeiro</span>
<span>Segundo</span>
<span>Terceiro</span>

<!-- Resultado: -->
<!-- Primeiro Segundo Terceiro -->
```

### Regra de aninhamento

Uma regra importante:

- **Block pode conter** block e inline
- **Inline pode conter** apenas inline (com excecoes)

```html
<!-- CORRETO: block contendo inline -->
<p>Texto com <strong>negrito</strong> e <a href="#">link</a>.</p>

<!-- CORRETO: block contendo block -->
<div>
    <p>Paragrafo dentro de div.</p>
    <ul>
        <li>Item dentro de div.</li>
    </ul>
</div>

<!-- ERRADO: inline contendo block -->
<span>
    <p>Paragrafo dentro de span -- nao faca isso!</p>
</span>

<!-- EXCECAO: <a> pode conter block em HTML5 -->
<a href="/produto">
    <div class="card">
        <h3>Nome do Produto</h3>
        <p>Descricao do produto</p>
    </div>
</a>
```

> **Dica:** No Modulo 3 (CSS), voce aprendera a mudar o comportamento de block/inline com a propriedade `display`. Por enquanto, apenas entenda a diferenca natural de cada elemento.

---

## 2.12 Entidades HTML e Caracteres Especiais

Alguns caracteres tem significado especial no HTML (como `<` e `>`), por isso nao podem ser digitados diretamente. Para exibi-los, usamos **entidades HTML**.

### Por que entidades sao necessarias

Se voce escrever `<p>` dentro de um paragrafo, o navegador vai interpretar como uma tag, nao como texto:

```html
<!-- O navegador interpreta <p> como uma tag! -->
<p>Para criar um paragrafo, use a tag <p>.</p>

<!-- Correto: usando entidades -->
<p>Para criar um paragrafo, use a tag &lt;p&gt;.</p>
```

### Entidades mais usadas

| Caractere | Entidade (nome) | Entidade (numero) | Descricao |
|:---------:|-----------------|--------------------|-----------|
| `<` | `&lt;` | `&#60;` | Menor que (less than) |
| `>` | `&gt;` | `&#62;` | Maior que (greater than) |
| `&` | `&amp;` | `&#38;` | E comercial (ampersand) |
| `"` | `&quot;` | `&#34;` | Aspas duplas |
| `'` | `&apos;` | `&#39;` | Aspas simples (apostrofo) |
| (espaco) | `&nbsp;` | `&#160;` | Espaco que nao quebra linha |
| `©` | `&copy;` | `&#169;` | Copyright |
| `®` | `&reg;` | `&#174;` | Marca registrada |
| `™` | `&trade;` | `&#8482;` | Trademark |
| `€` | `&euro;` | `&#8364;` | Euro |
| `—` | `&mdash;` | `&#8212;` | Travessao (em dash) |
| `–` | `&ndash;` | `&#8211;` | Meia-risca (en dash) |
| `♥` | `&hearts;` | `&#9829;` | Coracao |

### Uso pratico

```html
<!-- Mostrar codigo HTML como texto -->
<p>A tag &lt;strong&gt; deixa o texto em negrito.</p>

<!-- Copyright no rodape -->
<footer>
    <p>&copy; 2025 Meu Site. Todos os direitos reservados.</p>
</footer>

<!-- Espacos que nao quebram linha -->
<p>Preco:&nbsp;R$&nbsp;99,90</p>
<!-- O preco e o "R$" nunca ficam em linhas separadas -->
```

> **Dica:** Voce nao precisa decorar todas as entidades! As mais importantes sao `&lt;`, `&gt;`, `&amp;`, `&nbsp;` e `&copy;`. Para as outras, consulte uma tabela de referencia quando precisar.

---

## 2.13 Acessibilidade em HTML

**Acessibilidade web** (frequentemente abreviada como **a11y**) significa criar paginas que **todas as pessoas** possam usar, incluindo pessoas com deficiencias visuais, auditivas, motoras ou cognitivas.

### Por que acessibilidade e importante

- Cerca de **15% da populacao mundial** tem algum tipo de deficiencia
- Acessibilidade e uma questao de **inclusao e direitos humanos**
- Em muitos paises, e uma **exigencia legal**
- Sites acessiveis tambem sao **melhores para todos** (melhor SEO, melhor usabilidade)
- Melhora a experiencia em **situacoes temporarias** (ex: tela com brilho no sol, bracos ocupados, ambiente barulhento)

### Praticas essenciais de acessibilidade em HTML

#### 1. Sempre use texto alternativo em imagens

```html
<!-- BOM -->
<img src="grafico.png" alt="Grafico mostrando aumento de 30% nas vendas">

<!-- BOM: imagem decorativa -->
<img src="enfeite.png" alt="">

<!-- RUIM -->
<img src="grafico.png">
<img src="grafico.png" alt="imagem">
```

#### 2. Use hierarquia correta de titulos

```html
<!-- BOM: hierarquia logica -->
<h1>Titulo da Pagina</h1>
    <h2>Secao 1</h2>
        <h3>Sub-secao 1.1</h3>
        <h3>Sub-secao 1.2</h3>
    <h2>Secao 2</h2>

<!-- RUIM: pulou niveis -->
<h1>Titulo</h1>
    <h4>Secao</h4>   <!-- Pulou h2 e h3 -->
```

#### 3. Use HTML semantico

Tags semanticas ajudam leitores de tela a navegar pela pagina:

```html
<!-- Leitores de tela podem pular direto para o conteudo principal -->
<main>...</main>

<!-- Leitores de tela identificam o menu de navegacao -->
<nav aria-label="Menu principal">...</nav>
```

#### 4. Associe labels a campos de formulario

```html
<!-- BOM: label associado ao campo -->
<label for="email">E-mail:</label>
<input type="email" id="email" name="email">

<!-- RUIM: campo sem label -->
<input type="email" placeholder="E-mail">
```

#### 5. Use o atributo `lang`

```html
<html lang="pt-BR">

<!-- Para trechos em outro idioma dentro da pagina -->
<p>A expressao <span lang="en">responsive design</span> significa design responsivo.</p>
```

#### 6. Garanta contraste de cores

Embora isso seja mais relacionado a CSS, e bom saber que o texto deve ter contraste suficiente com o fundo para ser legivel.

### Atributos ARIA basicos

**ARIA** (Accessible Rich Internet Applications) sao atributos especiais que melhoram a acessibilidade:

```html
<!-- aria-label: descricao para leitores de tela -->
<button aria-label="Fechar menu">X</button>

<!-- aria-label para distinguir navegacoes -->
<nav aria-label="Navegacao principal">...</nav>
<nav aria-label="Navegacao do rodape">...</nav>

<!-- aria-hidden: esconde do leitor de tela (elemento decorativo) -->
<span aria-hidden="true">★</span> 4.5 estrelas

<!-- role: define o papel do elemento -->
<div role="alert">Erro: preencha todos os campos obrigatorios.</div>
```

> **Atencao:** ARIA deve ser o **ultimo recurso**. Sempre prefira tags HTML semanticas nativas. A primeira regra de ARIA e: "Se voce pode usar um elemento HTML nativo, use-o em vez de ARIA."

### Dicas praticas de acessibilidade

1. **Navegacao por teclado:** garanta que todos os elementos interativos podem ser acessados com a tecla Tab
2. **Links descritivos:** "Leia o guia completo" em vez de "Clique aqui"
3. **Formularios claros:** use labels, placeholders e mensagens de erro descritivas
4. **Tabelas com cabecalhos:** use `<th>` e `scope` para identificar cabecalhos
5. **Idioma da pagina:** sempre defina `lang` no `<html>`
6. **Estrutura logica:** use titulos em ordem hierarquica

> **Dica:** Teste seu site com o **leitor de tela** do seu sistema operacional (Narrator no Windows, VoiceOver no macOS, Orca no Linux) para sentir como pessoas com deficiencia visual experimentam sua pagina.

---

## 2.14 Validacao HTML

Validar seu HTML significa verificar se o codigo segue as **regras e padroes** oficiais do HTML. E como passar o texto por um corretor ortografico, mas para codigo.

### Por que validar

- **Encontrar erros:** tags nao fechadas, atributos errados, aninhamento incorreto
- **Garantir compatibilidade:** codigo valido funciona melhor em diferentes navegadores
- **Melhorar acessibilidade:** muitos problemas de acessibilidade sao detectados
- **Melhorar SEO:** codigo limpo e melhor indexado pelo Google
- **Boas praticas:** demonstra profissionalismo e cuidado com o codigo

### W3C Markup Validation Service

O **W3C** (World Wide Web Consortium) oferece um validador gratuito online:

1. Acesse https://validator.w3.org
2. Escolha uma das opcoes:
   - **Validate by URI:** cole a URL de um site publicado
   - **Validate by File Upload:** envie seu arquivo HTML
   - **Validate by Direct Input:** cole o codigo HTML diretamente
3. Clique em **"Check"**
4. O validador mostra **erros** (vermelhos) e **avisos** (amarelos)

### Erros comuns que o validador encontra

```html
<!-- ERRO: tag nao fechada -->
<p>Paragrafo sem fechamento

<!-- ERRO: aninhamento incorreto -->
<p>Texto <strong>negrito e <em>italico</p></em></strong>

<!-- ERRO: atributo obrigatorio faltando -->
<img src="foto.jpg">   <!-- Falta o alt -->

<!-- ERRO: id duplicado -->
<div id="menu">...</div>
<div id="menu">...</div>  <!-- ID deve ser unico! -->

<!-- ERRO: elemento em local proibido -->
<ul>
    <p>Paragrafo dentro de ul sem li</p>  <!-- p nao pode ser filho direto de ul -->
</ul>
```

### Extensoes do VS Code para validacao

- **HTMLHint:** mostra erros de HTML diretamente no editor
- **W3C Web Validator:** integra o validador do W3C ao VS Code

> **Dica:** Acostume-se a validar seu HTML regularmente, especialmente antes de publicar o site. Com o tempo, voce vai cometer cada vez menos erros!

---

## 2.15 Atividades Praticas -- Dia 2

Agora e hora de praticar! As atividades do Dia 2 focam nos fundamentos do HTML: estrutura, textos, links, listas e imagens.

---

### Atividade 2.1 -- Minha Primeira Pagina Completa

**Objetivo:** Criar uma pagina HTML completa do zero, aplicando tudo o que aprendeu sobre estrutura, textos, links e listas.

**Tempo estimado:** 40 minutos

#### Passo 1: Criar a estrutura do projeto

No terminal do VS Code:

```bash
# Criar pasta do projeto
mkdir ~/projetos/minha-pagina
cd ~/projetos/minha-pagina

# Abrir no VS Code
code .
```

#### Passo 2: Criar o arquivo HTML

1. Crie um arquivo chamado `index.html`
2. Use o atalho `!` + `Tab` para gerar a estrutura basica
3. Mude o `lang` para `pt-BR` e o `<title>` para seu nome

#### Passo 3: Preencher o `<head>`

Adicione ao `<head>`:

```html
<meta name="description" content="Pagina pessoal de [Seu Nome] - Estudante de Desenvolvimento Web">
<meta name="author" content="[Seu Nome]">
```

#### Passo 4: Criar o conteudo no `<body>`

Crie o seguinte conteudo:

```html
<body>
    <h1>[Seu Nome]</h1>
    <p>Estudante de Desenvolvimento Web</p>

    <hr>

    <h2>Sobre Mim</h2>
    <p>Escreva um paragrafo sobre voce, usando <strong>negrito</strong>
    e <em>italico</em> para destacar partes importantes.</p>

    <h2>Minhas Habilidades</h2>
    <!-- Lista nao ordenada com pelo menos 5 itens -->
    <ul>
        <li>HTML</li>
        <li><!-- adicione mais --></li>
    </ul>

    <h2>Meus Objetivos no Curso</h2>
    <!-- Lista ordenada com pelo menos 3 objetivos -->
    <ol>
        <li><!-- seus objetivos --></li>
    </ol>

    <h2>Links Uteis</h2>
    <!-- Pelo menos 3 links externos abrindo em nova aba -->
    <ul>
        <li><a href="https://developer.mozilla.org" target="_blank"
               rel="noopener noreferrer">MDN Web Docs</a></li>
        <li><!-- adicione mais links --></li>
    </ul>

    <hr>

    <p><small>&copy; 2025 [Seu Nome]. Todos os direitos reservados.</small></p>
</body>
```

#### Passo 5: Personalizar e testar

1. Preencha todas as lacunas com suas informacoes pessoais
2. Adicione pelo menos mais **2 secoes** criativas (hobbies, contato, citacao favorita)
3. Abra a pagina com o **Live Server** e verifique o resultado
4. Abra o **DevTools** (F12) e verifique se nao ha erros no console

#### Passo 6: Validar o HTML

1. Acesse https://validator.w3.org
2. Clique em **"Validate by Direct Input"**
3. Cole seu codigo HTML e clique em **"Check"**
4. Corrija todos os erros encontrados

> **Checklist de conclusao:**
> - [ ] Arquivo index.html criado com estrutura completa
> - [ ] Head com charset, viewport, description e title
> - [ ] Pelo menos 3 niveis de titulo (h1, h2, h3)
> - [ ] Texto com formatacao (strong, em)
> - [ ] Lista ordenada e lista nao ordenada
> - [ ] Pelo menos 3 links externos com target="_blank"
> - [ ] Entidades HTML usadas (pelo menos &copy;)
> - [ ] HTML validado sem erros

---

### Atividade 2.2 -- Pagina com Imagens e Multimidia

**Objetivo:** Praticar a insercao de imagens, videos e conteudo multimimdia.

**Tempo estimado:** 30 minutos

#### Passo 1: Criar um novo arquivo

Na mesma pasta do projeto, crie um arquivo chamado `multimidia.html`.

#### Passo 2: Adicionar imagens

Adicione pelo menos:

1. Uma imagem com **placeholder** (usando https://via.placeholder.com/600x400):

```html
<figure>
    <img
        src="https://via.placeholder.com/600x400/3498db/ffffff?text=Minha+Imagem"
        alt="Descricao detalhada da imagem"
        width="600"
        height="400"
    >
    <figcaption>Legenda da imagem</figcaption>
</figure>
```

2. Uma imagem com **lazy loading**:

```html
<img src="https://via.placeholder.com/800x400" alt="Imagem com lazy loading"
     width="800" height="400" loading="lazy">
```

#### Passo 3: Incorporar um video do YouTube

1. Acesse qualquer video no YouTube
2. Clique em **Compartilhar** > **Incorporar**
3. Copie o codigo do iframe
4. Cole no seu HTML (lembre de adicionar um `title` ao iframe)

#### Passo 4: Adicionar um elemento audio

```html
<h2>Audio</h2>
<p>Exemplo de player de audio HTML5:</p>
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Seu navegador nao suporta audio HTML5.
</audio>
```

#### Passo 5: Criar link entre as paginas

No arquivo `index.html`, adicione um link para `multimidia.html`:

```html
<a href="multimidia.html">Ver pagina de multimidia</a>
```

No arquivo `multimidia.html`, adicione um link de volta:

```html
<a href="index.html">Voltar para a pagina inicial</a>
```

> **Checklist de conclusao:**
> - [ ] Pelo menos 2 imagens com alt descritivo
> - [ ] Pelo menos 1 figura com figcaption
> - [ ] Imagem com loading="lazy"
> - [ ] Video incorporado do YouTube com title no iframe
> - [ ] Elemento audio com controls
> - [ ] Links de navegacao entre as duas paginas

---

### Atividade 2.3 -- Tabela de Horarios

**Objetivo:** Criar uma tabela HTML completa com cabecalho, corpo, rodape, colspan e rowspan.

**Tempo estimado:** 30 minutos

#### Passo 1: Criar o arquivo

Crie um arquivo chamado `horarios.html`.

#### Passo 2: Criar a tabela

Crie uma tabela representando seu horario semanal (pode ser horario de aulas, trabalho ou atividades pessoais):

```html
<table>
    <caption>Meu Horario Semanal</caption>
    <thead>
        <tr>
            <th scope="col">Horario</th>
            <th scope="col">Segunda</th>
            <th scope="col">Terca</th>
            <th scope="col">Quarta</th>
            <th scope="col">Quinta</th>
            <th scope="col">Sexta</th>
        </tr>
    </thead>
    <tbody>
        <!-- Preencha com suas atividades -->
        <!-- Use colspan para intervalos -->
        <!-- Use rowspan para atividades que duram mais de 1 periodo -->
    </tbody>
    <tfoot>
        <tr>
            <td colspan="6">Total: X horas de atividades</td>
        </tr>
    </tfoot>
</table>
```

**Requisitos:**
- Pelo menos **5 linhas** de dados no `<tbody>`
- Usar `colspan` em pelo menos **1 celula** (ex: intervalo/almoco)
- Usar `rowspan` em pelo menos **1 celula** (ex: atividade que dura 2 periodos)
- Usar `scope` nos cabecalhos
- Incluir `<caption>`, `<thead>`, `<tbody>` e `<tfoot>`

> **Checklist de conclusao:**
> - [ ] Tabela com caption, thead, tbody e tfoot
> - [ ] Uso de th com scope para cabecalhos
> - [ ] Pelo menos 1 uso de colspan
> - [ ] Pelo menos 1 uso de rowspan
> - [ ] Dados reais e organizados

---

## 2.16 Atividades Praticas -- Dia 3

As atividades do Dia 3 focam em formularios, HTML semantico e no projeto integrador que combina tudo.

---

### Atividade 2.4 -- Formulario de Contato Completo

**Objetivo:** Criar um formulario de contato profissional com diversos tipos de campos e validacao HTML5.

**Tempo estimado:** 40 minutos

#### Passo 1: Criar o arquivo

Crie um arquivo chamado `contato.html`.

#### Passo 2: Estrutura do formulario

Crie um formulario com os seguintes grupos de campos:

**Grupo 1: Dados Pessoais**
- Nome completo (text, obrigatorio, minimo 3 caracteres)
- E-mail (email, obrigatorio)
- Telefone (tel, com pattern para formato brasileiro)
- Data de nascimento (date)

**Grupo 2: Detalhes do Contato**
- Assunto (select com pelo menos 5 opcoes)
- Mensagem (textarea, obrigatorio, minimo 10 caracteres)
- Prioridade (radio: Baixa, Media, Alta)

**Grupo 3: Preferencias**
- Interesses (checkbox: HTML, CSS, JavaScript, React)
- Nivel de experiencia (range de 0 a 10)
- Cor favorita (color)
- Enviar curriculo (file, aceitar .pdf e .doc)

**Grupo 4: Finalizacao**
- Checkbox de aceite dos termos (obrigatorio)
- Checkbox de newsletter (opcional)
- Botao de enviar
- Botao de limpar

#### Passo 3: Usar fieldset e legend

Envolva cada grupo em um `<fieldset>` com `<legend>`:

```html
<form action="#" method="POST">
    <fieldset>
        <legend>Dados Pessoais</legend>
        <!-- campos do grupo 1 -->
    </fieldset>

    <fieldset>
        <legend>Detalhes do Contato</legend>
        <!-- campos do grupo 2 -->
    </fieldset>

    <!-- continuar com os outros grupos -->
</form>
```

#### Passo 4: Adicionar validacao

Certifique-se de que todos os campos obrigatorios tem o atributo `required` e que os campos com formatos especificos tem `pattern` e `title`.

#### Passo 5: Testar a validacao

1. Tente enviar o formulario **vazio** -- deve mostrar mensagens de erro
2. Preencha com dados **invalidos** (e-mail sem @, telefone errado) -- deve rejeitar
3. Preencha **corretamente** -- deve aceitar o envio

> **Checklist de conclusao:**
> - [ ] Formulario com 4 fieldsets e legends
> - [ ] Pelo menos 10 campos diferentes
> - [ ] Todos os labels associados aos campos (for/id)
> - [ ] Campos obrigatorios com required
> - [ ] Pelo menos 1 campo com pattern
> - [ ] Checkbox e radio buttons funcionando
> - [ ] Botoes de submit e reset
> - [ ] Validacao HTML5 funcionando

---

### Atividade 2.5 -- Blog Pessoal com HTML Semantico

**Objetivo:** Criar uma pagina de blog completa usando exclusivamente tags semanticas, integrando todos os conceitos do modulo.

**Tempo estimado:** 50 minutos

#### Passo 1: Criar o arquivo

Crie um arquivo chamado `blog.html`.

#### Passo 2: Estrutura semantica

Siga esta estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Blog pessoal de [Seu Nome]">
    <meta name="author" content="[Seu Nome]">
    <title>Blog de [Seu Nome]</title>
</head>
<body>

    <!-- 1. HEADER: logo/titulo e descricao do blog -->
    <header>
        <h1>Blog de [Seu Nome]</h1>
        <p>Aprendendo desenvolvimento web, um post de cada vez.</p>
    </header>

    <!-- 2. NAV: menu com links ancora para secoes da pagina -->
    <nav aria-label="Navegacao principal">
        <ul>
            <li><a href="#posts">Posts</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>

    <!-- 3. MAIN: conteudo principal -->
    <main>

        <!-- Secao de posts -->
        <section id="posts">
            <h2>Posts Recentes</h2>

            <!-- Post 1 -->
            <article>
                <header>
                    <h3>Titulo do Post 1</h3>
                    <p>Por [Seu Nome] |
                       <time datetime="2025-01-15">15 de Janeiro de 2025</time>
                    </p>
                </header>
                <p>Conteudo do post... Use paragrafos, listas, links,
                   imagens e outros elementos HTML.</p>
                <!-- Adicione: pelo menos 1 imagem com figure/figcaption -->
                <!-- Adicione: pelo menos 1 lista -->
                <!-- Adicione: pelo menos 2 links -->
                <details>
                    <summary>Leia mais sobre este tema</summary>
                    <p>Conteudo expandido do post...</p>
                </details>
                <footer>
                    <p>Tags: <a href="#">HTML</a>, <a href="#">Tutorial</a></p>
                </footer>
            </article>

            <!-- Post 2: crie voce mesmo -->
            <article>
                <!-- Conteudo do segundo post -->
            </article>

            <!-- Post 3: crie voce mesmo -->
            <article>
                <!-- Conteudo do terceiro post -->
            </article>
        </section>

        <!-- Secao sobre -->
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <p>Apresentacao pessoal...</p>
        </section>

        <!-- Secao contato -->
        <section id="contato">
            <h2>Contato</h2>
            <!-- Formulario simples de contato -->
            <form action="#" method="POST">
                <label for="nome-contato">Nome:</label>
                <input type="text" id="nome-contato" name="nome" required>

                <label for="email-contato">E-mail:</label>
                <input type="email" id="email-contato" name="email" required>

                <label for="msg-contato">Mensagem:</label>
                <textarea id="msg-contato" name="mensagem" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>

    <!-- 4. ASIDE: conteudo lateral -->
    <aside>
        <h3>Categorias</h3>
        <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>

        <h3>Links Uteis</h3>
        <ul>
            <li><a href="https://developer.mozilla.org" target="_blank"
                   rel="noopener noreferrer">MDN Web Docs</a></li>
            <li><a href="https://www.w3schools.com" target="_blank"
                   rel="noopener noreferrer">W3Schools</a></li>
        </ul>
    </aside>

    <!-- 5. FOOTER: rodape -->
    <footer>
        <p>&copy; <time datetime="2025">2025</time> [Seu Nome].
           Todos os direitos reservados.</p>
        <address>
            Contato: <a href="mailto:seu@email.com">seu@email.com</a>
        </address>
    </footer>

</body>
</html>
```

#### Passo 3: Personalizar os posts

Cada post deve ter:
- Titulo com `<h3>`
- Autor e data com `<time>`
- Pelo menos 2 paragrafos de conteudo real (escreva sobre algo que voce aprendeu)
- Pelo menos 1 imagem com `<figure>` e `<figcaption>`
- Pelo menos 1 lista (ordenada ou nao ordenada)
- Links para recursos externos
- Um `<details>` com conteudo extra
- Tags no footer do artigo

#### Passo 4: Validar e testar

1. Valide o HTML no https://validator.w3.org
2. Verifique se os links ancora funcionam (clicar no menu rola ate a secao)
3. Verifique se o formulario valida campos obrigatorios
4. Inspecione a pagina no DevTools

#### Passo 5: Fazer commit no GitHub

```bash
cd ~/projetos/minha-pagina
git init
git add .
git commit -m "Adicionar paginas HTML do Modulo 2"
```

Se ja tiver um repositorio remoto:

```bash
git push
```

> **Checklist de conclusao:**
> - [ ] Estrutura semantica completa (header, nav, main, aside, footer)
> - [ ] Pelo menos 3 articles com conteudo real
> - [ ] Uso correto de section para agrupar conteudo
> - [ ] Links ancora no nav funcionando
> - [ ] Imagens com figure, figcaption e alt
> - [ ] Formulario de contato com validacao
> - [ ] Tags time com datetime
> - [ ] Uso de details/summary
> - [ ] HTML validado sem erros
> - [ ] Commit feito no Git

---

## Resumo do Modulo 2

Parabens por completar o Modulo 2! Nesses dois dias, voce aprendeu uma quantidade impressionante de conceitos sobre HTML:

| Topico | O que aprendeu |
|--------|---------------|
| O que e HTML | Tags, atributos, elementos, aninhamento, comentarios |
| Estrutura do documento | DOCTYPE, html, head, body |
| Tag head | charset, viewport, title, description, favicon, meta tags |
| Tags de texto | h1-h6, p, strong, em, mark, del, ins, sub, sup, br, hr |
| Links | a, href, target, rel, links externos, internos, ancora, email, telefone |
| Listas | ul, ol, li, dl, dt, dd, listas aninhadas |
| Imagens e midia | img, alt, figure, figcaption, picture, video, audio, iframe, lazy loading |
| Tabelas | table, tr, th, td, thead, tbody, tfoot, caption, colspan, rowspan, scope |
| Formularios | form, input (15+ tipos), textarea, select, label, fieldset, legend, validacao |
| HTML semantico | header, nav, main, section, article, aside, footer, time, details |
| Inline vs Block | Diferenca entre elementos e regras de aninhamento |
| Entidades HTML | &lt;, &gt;, &amp;, &nbsp;, &copy; e outros caracteres especiais |
| Acessibilidade | alt, lang, labels, hierarquia de titulos, ARIA basico |
| Validacao | W3C Validator, erros comuns, boas praticas |

### O que vem a seguir

No **Modulo 3**, vamos aprender **CSS** e transformar suas paginas HTML em sites visualmente atraentes:
- Cores, fontes e tipografia
- Box Model
- Flexbox e Grid
- Design responsivo
- Animacoes e transicoes
- E muito mais!

Suas paginas HTML ja tem uma boa estrutura. No proximo modulo, vamos dar vida visual a elas!

> **Dica final:** Revise este material e pratique bastante. Crie paginas sobre assuntos que voce gosta -- quanto mais praticar, mais natural o HTML vai se tornar. E lembre-se: ate os desenvolvedores mais experientes consultam a documentacao quando precisam. O MDN Web Docs (developer.mozilla.org) e seu melhor amigo!

---

> **Nota do instrutor:** Este material faz parte do curso de Fundamentos de Desenvolvimento Web. A reproducao parcial ou total para fins educacionais e permitida com os devidos creditos.
