# Modulo 5: Pratica de Desenvolvimento Web

> **Dia 8 (ultimo dia!) | Duracao: 4 horas**
>
> Parabens por chegar ate aqui! Este e o ultimo modulo do curso de Fundamentos de Desenvolvimento Web. Hoje vamos revisar tudo o que aprendemos, conhecer boas praticas, publicar seu site na internet, explorar como a IA pode ajudar no desenvolvimento e, claro, finalizar e apresentar seu projeto final!

---

## Sumario

- [5.1 Revisao Geral do Curso](#51-revisao-geral-do-curso)
- [5.2 Boas Praticas de Desenvolvimento Web](#52-boas-praticas-de-desenvolvimento-web)
- [5.3 Deploy - Publicando seu Site na Internet](#53-deploy---publicando-seu-site-na-internet)
- [5.4 Usando IA no Desenvolvimento Web](#54-usando-ia-no-desenvolvimento-web)
- [5.5 Projeto Final - Requisitos e Especificacoes](#55-projeto-final---requisitos-e-especificacoes)
- [5.6 Checklist do Projeto Final](#56-checklist-do-projeto-final)
- [5.7 Apresentacao do Projeto](#57-apresentacao-do-projeto)
- [5.8 Proximos Passos na Carreira](#58-proximos-passos-na-carreira)
- [5.9 Atividades do Ultimo Dia](#59-atividades-do-ultimo-dia)

---

## 5.1 Revisao Geral do Curso

Antes de mergulharmos no projeto final, vamos fazer uma recapitulacao rapida de tudo o que voce aprendeu ao longo deste curso. Foram 7 dias intensos de muito aprendizado!

### Recapitulacao dos Conceitos

#### HTML - A Estrutura da Web (Modulo 2)

HTML (HyperText Markup Language) e a linguagem que define a **estrutura** e o **conteudo** das paginas web. Voce aprendeu:

- **Tags e elementos**: `<h1>`, `<p>`, `<a>`, `<img>`, `<div>`, `<span>`
- **HTML semantico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Formularios**: `<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`
- **Tabelas**: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- **Listas**: `<ul>`, `<ol>`, `<li>`
- **Midia**: `<img>`, `<video>`, `<audio>`

```html
<!-- Exemplo de estrutura HTML semantica -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
</head>
<body>
    <header>
        <nav><!-- Navegacao --></nav>
    </header>
    <main>
        <section><!-- Conteudo principal --></section>
    </main>
    <footer><!-- Rodape --></footer>
</body>
</html>
```

#### CSS - A Estilizacao da Web (Modulo 3)

CSS (Cascading Style Sheets) e a linguagem que define a **aparencia** e o **layout** das paginas. Voce aprendeu:

- **Seletores**: elemento, classe, ID, pseudo-classes, pseudo-elementos
- **Box Model**: margin, border, padding, content
- **Flexbox**: alinhamento e distribuicao de elementos em uma dimensao
- **Grid**: layouts em duas dimensoes
- **Responsividade**: media queries, unidades relativas, mobile-first
- **Variaveis CSS**: `--cor-primaria`, `var(--cor-primaria)`
- **Transicoes e animacoes**

```css
/* Exemplo de CSS moderno */
:root {
    --cor-primaria: #2563eb;
    --cor-texto: #1f2937;
    --espacamento: 1rem;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--cor-texto);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--espacamento);
}

@media (max-width: 768px) {
    .container {
        padding: 0 calc(var(--espacamento) / 2);
    }
}
```

#### JavaScript - A Interatividade da Web (Modulo 4)

JavaScript e a linguagem de programacao que adiciona **comportamento** e **interatividade** as paginas. Voce aprendeu:

- **Variaveis**: `let`, `const` (e por que evitar `var`)
- **Tipos de dados**: string, number, boolean, array, object
- **Funcoes**: declaracao, arrow functions, parametros, retorno
- **Controle de fluxo**: `if/else`, `switch`, `for`, `while`
- **Manipulacao do DOM**: `querySelector`, `addEventListener`, `classList`
- **Eventos**: click, submit, input, keydown, scroll
- **Armazenamento local**: `localStorage`

```javascript
// Exemplo de JavaScript no DOM
const botao = document.querySelector('#meu-botao');
const mensagem = document.querySelector('#mensagem');

botao.addEventListener('click', () => {
    mensagem.textContent = 'Voce clicou no botao!';
    mensagem.classList.add('visivel');
});

// Salvar preferencia no localStorage
function salvarTema(tema) {
    localStorage.setItem('tema', tema);
    document.body.className = tema;
}
```

#### Git e GitHub - Versionamento e Colaboracao (Modulo 1)

Git e o sistema de controle de versao que rastreia mudancas no seu codigo, e GitHub e a plataforma para hospedar e colaborar em projetos. Voce aprendeu:

- **Comandos basicos**: `git init`, `git add`, `git commit`, `git push`, `git pull`
- **Branches**: `git branch`, `git checkout`, `git merge`
- **Colaboracao**: Fork, Pull Request, Issues, Discussions
- **Boas praticas**: mensagens de commit claras, commits frequentes

```bash
# Fluxo basico do Git
git add .
git commit -m "Adiciona secao de contato ao site"
git push origin main
```

### Como Tudo se Conecta

Pense no desenvolvimento web como construir uma casa:

| Tecnologia | Analogia | Funcao |
|-----------|----------|--------|
| **HTML** | Estrutura (paredes, teto, chao) | Define **o que** aparece na pagina |
| **CSS** | Decoracao (pintura, moveis, cortinas) | Define **como** as coisas aparecem |
| **JavaScript** | Eletrica e hidraulica (interruptores, torneiras) | Define **o que acontece** quando o usuario interage |
| **Git** | Planta da casa (historico de versoes) | Rastreia **todas as mudancas** feitas |
| **GitHub** | Cartorio (registro oficial) | **Armazena e compartilha** o projeto |

> **Dica:** Um bom desenvolvedor web domina as tres tecnologias (HTML, CSS e JS) e sabe usar Git para versionar seu trabalho. E exatamente isso que voce esta aprendendo!

---

## 5.2 Boas Praticas de Desenvolvimento Web

Agora que voce conhece as tecnologias fundamentais, vamos aprender as boas praticas que diferenciam um codigo amador de um codigo profissional.

### 5.2.1 Organizacao de Arquivos e Pastas

#### Estrutura Recomendada para Projetos Web

Uma boa organizacao de arquivos facilita a manutencao do projeto e a colaboracao com outros desenvolvedores.

```
meu-projeto/
├── index.html              # Pagina principal
├── sobre.html              # Pagina Sobre
├── contato.html            # Pagina Contato
├── css/
│   ├── style.css           # Estilos principais
│   ├── reset.css           # Reset CSS
│   └── responsive.css      # Media queries (opcional)
├── js/
│   ├── main.js             # JavaScript principal
│   ├── form-validation.js  # Validacao de formularios
│   └── menu.js             # Menu de navegacao
├── img/
│   ├── logo.webp           # Logo do site
│   ├── hero-banner.webp    # Banner principal
│   └── perfil.webp         # Foto de perfil
├── fonts/                  # Fontes customizadas (se houver)
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Documentacao do projeto
```

#### Nomenclatura de Arquivos e Pastas

Siga estas regras para nomear arquivos e pastas:

- **Use letras minusculas**: `sobre.html` (nao `Sobre.html`)
- **Separe palavras com hifen**: `meu-projeto` (nao `meu_projeto` ou `meuProjeto`)
- **Seja descritivo**: `form-validation.js` (nao `fv.js`)
- **Use extensoes corretas**: `.html`, `.css`, `.js`, `.webp`, `.png`
- **Evite espacos**: `minha-pagina.html` (nao `minha pagina.html`)
- **Evite caracteres especiais**: nada de acentos, cedilha ou caracteres especiais em nomes de arquivo

> **Aviso:** Nomes de arquivos com espacos ou caracteres especiais podem causar problemas em servidores web e no Git. Sempre use hifen para separar palavras.

### 5.2.2 Performance Basica

Um site rapido proporciona uma melhor experiencia para o usuario e tambem e melhor ranqueado pelo Google. Aqui estao algumas praticas essenciais:

#### Otimizacao de Imagens

Imagens sao geralmente os arquivos mais pesados de um site. Otimiza-las pode reduzir drasticamente o tempo de carregamento.

**Formato WebP:**

O formato WebP oferece compressao superior ao JPEG e PNG, com qualidade visual equivalente. A maioria dos navegadores modernos ja suporta WebP.

- Use ferramentas online como [Squoosh](https://squoosh.app/) ou [TinyPNG](https://tinypng.com/) para converter e comprimir imagens
- Prefira WebP para fotos e imagens complexas
- Use SVG para icones e ilustracoes simples
- Defina largura e altura nas tags `<img>` para evitar "layout shift"

```html
<!-- Usando WebP com fallback -->
<picture>
    <source srcset="img/foto.webp" type="image/webp">
    <source srcset="img/foto.jpg" type="image/jpeg">
    <img src="img/foto.jpg" alt="Descricao da imagem" width="800" height="600">
</picture>
```

#### Minificacao de CSS e JS

Minificar significa remover espacos, quebras de linha e comentarios dos arquivos para reduzir seu tamanho. Em projetos profissionais, ferramentas fazem isso automaticamente. Por enquanto, saiba que isso existe:

- Ferramentas online: [CSS Minifier](https://cssminifier.com/), [JS Minifier](https://jscompress.com/)
- Ferramentas de build (para o futuro): Vite, Webpack, Parcel

> **Nota:** Para projetos de estudo, nao se preocupe em minificar. Mantenha seu codigo legivel! A minificacao e mais importante em projetos em producao.

#### Carregamento de Scripts

A forma como voce carrega seus scripts JavaScript pode impactar a velocidade do site:

```html
<!-- RUIM: bloqueia o carregamento da pagina -->
<head>
    <script src="js/main.js"></script>
</head>

<!-- BOM: carrega o script apos o HTML ser parseado -->
<head>
    <script src="js/main.js" defer></script>
</head>

<!-- BOM: carrega o script em paralelo, executa quando pronto -->
<head>
    <script src="js/main.js" async></script>
</head>

<!-- TAMBEM BOM: script no final do body -->
<body>
    <!-- ... conteudo ... -->
    <script src="js/main.js"></script>
</body>
```

| Atributo | Quando usar |
|----------|-------------|
| `defer` | Para scripts que manipulam o DOM (mais comum) |
| `async` | Para scripts independentes (analytics, ads) |
| Sem atributo (no final do body) | Alternativa simples ao `defer` |

#### Lazy Loading de Imagens

Lazy loading faz com que imagens so sejam carregadas quando estao proximas de aparecer na tela do usuario, economizando banda e acelerando o carregamento inicial:

```html
<!-- Lazy loading nativo do navegador -->
<img src="img/foto-grande.webp"
     alt="Descricao da imagem"
     loading="lazy"
     width="800"
     height="600">
```

> **Dica:** Use `loading="lazy"` em todas as imagens que nao estao visiveis na primeira tela (above the fold). Para a imagem principal da pagina, nao use lazy loading.

### 5.2.3 SEO Basico

SEO (Search Engine Optimization) e o conjunto de praticas para melhorar o posicionamento do seu site nos motores de busca como o Google.

#### Meta Tags Essenciais

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Titulo da pagina (aparece na aba do navegador e nos resultados do Google) -->
    <title>Joao Silva - Desenvolvedor Web | Portfolio</title>

    <!-- Descricao (aparece nos resultados do Google) -->
    <meta name="description" content="Portfolio de Joao Silva, desenvolvedor web
    especializado em HTML, CSS e JavaScript. Confira meus projetos e entre em contato.">

    <!-- Palavras-chave (menos relevante hoje, mas ainda usado) -->
    <meta name="keywords" content="desenvolvedor web, portfolio, HTML, CSS, JavaScript">

    <!-- Autor -->
    <meta name="author" content="Joao Silva">
</head>
```

#### Open Graph para Redes Sociais

As meta tags Open Graph controlam como seu site aparece quando compartilhado em redes sociais (Facebook, LinkedIn, WhatsApp, etc.):

```html
<head>
    <!-- Open Graph -->
    <meta property="og:title" content="Joao Silva - Desenvolvedor Web">
    <meta property="og:description" content="Confira meu portfolio de desenvolvimento web.">
    <meta property="og:image" content="https://meusite.com/img/og-image.jpg">
    <meta property="og:url" content="https://meusite.com">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Joao Silva - Desenvolvedor Web">
    <meta name="twitter:description" content="Confira meu portfolio de desenvolvimento web.">
    <meta name="twitter:image" content="https://meusite.com/img/og-image.jpg">
</head>
```

> **Dica:** A imagem do Open Graph deve ter pelo menos 1200x630 pixels para boa visualizacao em todas as plataformas.

#### Estrutura de Headings Correta

Os headings (titulos) devem seguir uma hierarquia logica, como um sumario de livro:

```html
<!-- CORRETO: hierarquia logica -->
<h1>Joao Silva - Desenvolvedor Web</h1>          <!-- So 1 por pagina -->
    <h2>Sobre Mim</h2>
        <h3>Minha Formacao</h3>
        <h3>Minhas Habilidades</h3>
    <h2>Projetos</h2>
        <h3>Projeto 1 - Calculadora</h3>
        <h3>Projeto 2 - To-Do List</h3>
    <h2>Contato</h2>

<!-- ERRADO: pular niveis -->
<h1>Titulo</h1>
<h3>Subtitulo</h3>      <!-- Pulou o h2! -->
<h5>Outro subtitulo</h5> <!-- Pulou h3 e h4! -->
```

#### URLs Amigaveis

- Use: `meusite.com/sobre` ou `meusite.com/sobre.html`
- Evite: `meusite.com/pagina?id=2&tipo=sobre`
- Nomes descritivos: `portfolio.html` em vez de `p2.html`

#### Alt Text em Imagens

O atributo `alt` e essencial para SEO e acessibilidade:

```html
<!-- BOM: descritivo e util -->
<img src="foto-perfil.webp" alt="Joao Silva sorrindo, vestindo camisa azul">

<!-- RUIM: generico -->
<img src="foto-perfil.webp" alt="foto">

<!-- RUIM: ausente -->
<img src="foto-perfil.webp">

<!-- Para imagens decorativas, use alt vazio -->
<img src="enfeite.webp" alt="" role="presentation">
```

### 5.2.4 Acessibilidade (Revisao e Aprofundamento)

Acessibilidade web significa garantir que todas as pessoas, incluindo aquelas com deficiencias, possam usar seu site. Isso nao e apenas uma boa pratica, em muitos casos e uma obrigacao legal.

#### Checklist de Acessibilidade

Antes de publicar seu site, verifique os seguintes itens:

**Estrutura e Semantica:**

- [ ] Todas as imagens tem atributo `alt` descritivo
- [ ] Os headings seguem hierarquia correta (h1 > h2 > h3)
- [ ] O HTML usa tags semanticas (`<nav>`, `<main>`, `<header>`, `<footer>`)
- [ ] Os formularios tem `<label>` associado a cada campo
- [ ] Os links tem texto descritivo (nao "clique aqui")

**Visual e Interacao:**

- [ ] O contraste de cores e suficiente (razao minima 4.5:1)
- [ ] O site e navegavel apenas com teclado (Tab, Enter, Esc)
- [ ] O foco e visivel ao navegar com teclado
- [ ] O texto pode ser ampliado ate 200% sem perda de funcionalidade
- [ ] Nenhuma informacao depende apenas de cor

**Multimidia:**

- [ ] Videos tem legendas
- [ ] Conteudo em movimento pode ser pausado
- [ ] Nao ha conteudo piscando mais de 3 vezes por segundo

#### Testando com Leitor de Tela

Leitores de tela sao programas usados por pessoas com deficiencia visual. Voce pode testar seu site com:

- **NVDA** (Windows, gratuito): [nvaccess.org](https://www.nvaccess.org/)
- **VoiceOver** (macOS/iOS, nativo): Ative em Configuracoes > Acessibilidade
- **Narrador** (Windows, nativo): Pressione `Windows + Ctrl + Enter`

**Como testar rapidamente:**

1. Abra seu site no navegador
2. Ative o leitor de tela
3. Feche os olhos e tente navegar apenas com teclado
4. As informacoes fazem sentido apenas ouvindo?

#### Lighthouse Audit

O Lighthouse e uma ferramenta do Google Chrome que audita seu site em varias categorias:

1. Abra seu site no Google Chrome
2. Pressione `F12` para abrir o DevTools
3. Va para a aba **Lighthouse**
4. Clique em **Analyze page load**
5. Analise os resultados em Performance, Accessibility, Best Practices e SEO

> **Meta:** Tente atingir pelo menos **90** em todas as categorias do Lighthouse no seu projeto final!

---

## 5.3 Deploy - Publicando seu Site na Internet

Ate agora, voce visualizou seu site apenas localmente no seu computador. Agora vamos aprende a **publica-lo na internet** para que qualquer pessoa no mundo possa acessa-lo!

### O que e Deploy?

**Deploy** (ou "implantacao") e o processo de disponibilizar seu site ou aplicacao em um servidor na internet. E o passo que transforma seu projeto local em um site acessivel por qualquer pessoa com uma conexao a internet.

### Opcoes Gratuitas de Hospedagem

Existem varias plataformas que permitem hospedar sites estaticos (HTML, CSS e JS) **gratuitamente**. Vamos conhecer as principais:

### GitHub Pages (Passo a Passo Detalhado)

O **GitHub Pages** e a forma mais simples de publicar seu site, ja que voce ja tem seu codigo no GitHub!

#### Passo 1: Preparar o Repositorio

Certifique-se de que seu repositorio tem um arquivo `index.html` na raiz (pasta principal) do projeto.

```
meu-portfolio/
├── index.html      <-- OBRIGATORIO na raiz!
├── sobre.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    └── ...
```

#### Passo 2: Fazer Push do Codigo

```bash
git add .
git commit -m "Prepara projeto para deploy"
git push origin main
```

#### Passo 3: Ativar o GitHub Pages

1. Acesse seu repositorio no GitHub
2. Clique em **Settings** (Configuracoes)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Em **Branch**, selecione **main** e **/ (root)**
6. Clique em **Save**

#### Passo 4: Aguardar o Deploy

- O GitHub Pages leva de 1 a 5 minutos para publicar
- Seu site estara disponivel em: `https://seu-usuario.github.io/nome-do-repositorio/`
- Exemplo: `https://joaosilva.github.io/meu-portfolio/`

#### Passo 5: Verificar

- Acesse a URL do seu site
- Teste em diferentes dispositivos (celular, tablet)
- Verifique se todos os links e imagens estao funcionando

> **Dica:** Sempre que voce fizer `git push`, o GitHub Pages atualiza automaticamente seu site!

#### Dominio Personalizado (Mencao)

E possivel usar um dominio proprio (como `joaosilva.com.br`) com o GitHub Pages. Para isso, voce precisaria:

1. Comprar um dominio em um registrador (Registro.br, GoDaddy, Namecheap)
2. Configurar os registros DNS apontando para o GitHub Pages
3. Adicionar o dominio nas configuracoes do GitHub Pages

Isso e um topico mais avancado, mas saiba que e possivel!

### Netlify (Passo a Passo)

O [Netlify](https://www.netlify.com/) e uma plataforma excelente para hospedagem de sites estaticos, com deploy automatico.

#### Passo 1: Criar Conta

1. Acesse [netlify.com](https://www.netlify.com/)
2. Clique em **Sign up**
3. Escolha **Sign up with GitHub** (mais facil!)

#### Passo 2: Conectar Repositorio

1. No painel do Netlify, clique em **Add new site** > **Import an existing project**
2. Selecione **GitHub**
3. Autorize o Netlify a acessar seus repositorios
4. Selecione o repositorio do seu projeto

#### Passo 3: Configurar Deploy

1. Em **Branch to deploy**, selecione `main`
2. Deixe os outros campos em branco (para sites estaticos, nao precisa de configuracao extra)
3. Clique em **Deploy site**

#### Passo 4: Acessar seu Site

- O Netlify gera uma URL automatica como: `https://nome-aleatorio.netlify.app`
- Voce pode personalizar o subdominio em **Site settings** > **Change site name**
- Exemplo: `https://joaosilva-portfolio.netlify.app`

#### Deploy Automatico

A grande vantagem do Netlify e o **deploy automatico**: sempre que voce fizer `git push` para o repositorio conectado, o Netlify automaticamente republica seu site com as alteracoes!

### Vercel (Mencao)

O [Vercel](https://vercel.com/) e outra plataforma popular, especialmente para projetos com frameworks como Next.js e React. O processo e similar ao Netlify:

1. Crie uma conta em [vercel.com](https://vercel.com/) (pode usar GitHub)
2. Importe seu repositorio
3. O deploy e automatico

> **Nota:** Para sites estaticos simples (HTML, CSS, JS), tanto o GitHub Pages quanto o Netlify sao otimas opcoes e mais que suficientes.

### Dominios e DNS (Visao Geral)

- **Dominio**: e o "endereco" do seu site (ex: `google.com`, `meusite.com.br`)
- **DNS** (Domain Name System): e o "sistema de telefonia" da internet -- traduz nomes de dominio em enderecos IP
- Dominios `.com.br` podem ser registrados no [Registro.br](https://registro.br/) (a partir de R$ 40/ano)
- Dominios `.com` podem ser registrados em servicos como [Namecheap](https://www.namecheap.com/) ou [GoDaddy](https://www.godaddy.com/)

### HTTPS e Seguranca

- **HTTPS** e a versao segura do HTTP, que criptografa os dados entre o navegador e o servidor
- O cadeado verde na barra de endereco indica que o site usa HTTPS
- **GitHub Pages**, **Netlify** e **Vercel** fornecem HTTPS gratuitamente e automaticamente
- Sites sem HTTPS sao marcados como "Nao Seguro" pelo navegador
- O Google prioriza sites com HTTPS nos resultados de busca

> **Importante:** Nunca publique um site que coleta dados de usuarios (formularios, login) sem HTTPS!

---

## 5.4 Usando IA no Desenvolvimento Web

A Inteligencia Artificial esta transformando a forma como desenvolvemos software. Saber usar ferramentas de IA de forma inteligente e uma habilidade valiosa para qualquer desenvolvedor.

### 5.4.1 Ferramentas de IA para Desenvolvedores

#### Claude (Anthropic)

O [Claude](https://claude.ai/) e um assistente de IA da Anthropic, excelente para:

- **Explicar conceitos**: peca para explicar qualquer conceito de programacao
- **Debugging**: cole seu codigo com erro e peca ajuda para encontrar o problema
- **Revisao de codigo**: peca sugestoes de melhoria para seu codigo
- **Aprender**: peca explicacoes detalhadas com exemplos

O Claude tem um plano gratuito e se destaca pela qualidade das explicacoes e pela capacidade de entender contextos complexos.

#### ChatGPT (OpenAI)

O [ChatGPT](https://chat.openai.com/) e um dos assistentes de IA mais populares, util para:

- **Gerar codigo**: descreva o que precisa e receba codigo pronto
- **Brainstorming**: peca ideias para projetos, layouts, funcionalidades
- **Prototipagem rapida**: gere rapidamente estruturas HTML, estilos CSS
- **Traduzir codigo**: converta logica de uma linguagem para outra

#### GitHub Copilot

O [GitHub Copilot](https://github.com/features/copilot) e uma extensao para o VS Code que sugere codigo enquanto voce digita:

**Como instalar:**

1. Abra o VS Code
2. Va para a aba de Extensoes (`Ctrl + Shift + X`)
3. Pesquise "GitHub Copilot"
4. Clique em **Install**
5. Faca login com sua conta do GitHub
6. O Copilot tem um plano gratuito para estudantes e projetos open source

**Como usar:**

- Comece a digitar e o Copilot sugere o restante automaticamente
- Pressione `Tab` para aceitar a sugestao
- Pressione `Esc` para rejeitar
- Escreva comentarios descrevendo o que quer, e o Copilot gera o codigo

```javascript
// Funcao que valida um email
// O Copilot sugere automaticamente a implementacao:
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```

#### v0.dev

O [v0.dev](https://v0.dev/) e uma ferramenta da Vercel que gera interfaces (UI) a partir de descricoes em texto:

- Descreva a interface que voce quer: "Um card de perfil com foto, nome e redes sociais"
- A IA gera o HTML e CSS (ou React) para voce
- Voce pode iterar e refinar o resultado
- Otimo para inspiracao e prototipagem rapida

#### Cursor

O [Cursor](https://cursor.com/) e um editor de codigo (baseado no VS Code) com IA profundamente integrada:

- Tem um chat de IA dentro do editor
- Pode editar multiplos arquivos de uma vez
- Entende o contexto do seu projeto inteiro
- Otimo para refatoracao e geracao de codigo
- Possui plano gratuito com funcionalidades limitadas

### 5.4.2 Como Escrever Bons Prompts para IA

A qualidade da resposta da IA depende diretamente da qualidade do seu prompt (a pergunta ou instrucao que voce envia). Aqui estao as melhores praticas:

#### Seja Especifico e Contextual

```
RUIM:
"Me ajuda com CSS"

BOM:
"Estou criando um site portfolio e preciso centralizar um card
vertical e horizontalmente na tela usando Flexbox. O card tem
300px de largura e deve ficar no centro exato da viewport."
```

#### Forneca Exemplos

```
RUIM:
"Faca um menu de navegacao"

BOM:
"Crie um menu de navegacao horizontal para um site portfolio
com os seguintes links: Home, Sobre, Projetos, Contato.
O menu deve ser responsivo: em telas menores que 768px,
deve ter um botao hamburger que abre um menu vertical.
Use HTML semantico e CSS Flexbox."
```

#### Peca Explicacoes, Nao Apenas Codigo

```
RUIM:
"Escreve um codigo de validacao de formulario"

BOM:
"Preciso validar um formulario de contato com campos nome,
email e mensagem usando JavaScript. Por favor:
1. Escreva o codigo
2. Explique cada parte passo a passo
3. Explique por que escolheu essa abordagem
4. Mostre como exibir mensagens de erro para o usuario"
```

#### Itere e Refine

Nao espere a resposta perfeita logo de primeira. Trate a conversa com a IA como um dialogo:

1. Faca a pergunta inicial
2. Analise a resposta
3. Peca ajustes: "Pode adaptar esse codigo para ser mobile-first?"
4. Peca melhorias: "Como posso melhorar a acessibilidade desse componente?"
5. Peca alternativas: "Existe uma forma mais simples de fazer isso?"

#### Exemplos de Bons Prompts

**Para HTML:**
```
"Crie a estrutura HTML semantica para uma pagina 'Sobre Mim' de um
portfolio de desenvolvedor web. Deve incluir: uma secao com foto e
biografia, uma secao com habilidades tecnicas em formato de lista,
e uma secao de formacao academica. Use tags semanticas como <section>,
<article>, <figure>. Adicione atributos de acessibilidade."
```

**Para CSS:**
```
"Tenho uma grade de cards de projetos. Preciso de um layout CSS Grid
que mostre 3 colunas em desktop (acima de 1024px), 2 colunas em tablet
(768px-1024px) e 1 coluna em mobile (abaixo de 768px). Cada card deve
ter sombra suave, border-radius de 8px e um efeito de hover que eleva
o card. Use variaveis CSS e abordagem mobile-first."
```

**Para JavaScript:**
```
"Preciso de um script JavaScript que implemente um modo claro/escuro
no meu site. Requisitos:
- Um botao de toggle no header
- Salvar a preferencia do usuario no localStorage
- Respeitar a preferencia do sistema operacional (prefers-color-scheme)
- Transicao suave entre os temas
Explique cada parte do codigo com comentarios."
```

### 5.4.3 Quando Usar e Quando NAO Usar IA

#### Use IA Para:

- **Debugging**: "Meu codigo da esse erro: [erro]. O codigo e: [codigo]. O que esta errado?"
- **Aprender conceitos**: "Explique Flexbox como se eu tivesse 10 anos de idade"
- **Gerar boilerplate**: "Gere a estrutura basica de uma pagina HTML5 com meta tags de SEO"
- **Traduzir codigo**: "Converta esse forEach para um for...of"
- **Explorar alternativas**: "Quais sao 3 formas diferentes de fazer esse layout?"
- **Entender codigo de terceiros**: "O que esse trecho de codigo faz?"
- **Criar regex**: "Crie uma expressao regular para validar telefone brasileiro"
- **Escrever testes**: "Escreva casos de teste para essa funcao de validacao"

#### NAO Use IA Para:

- **Substituir aprendizado**: copiar codigo sem entender e uma armadilha perigosa. Voce nao vai aprender de verdade e nao vai conseguir resolver problemas sozinho
- **Copiar sem entender**: sempre leia e entenda o codigo gerado antes de usa-lo
- **Codigo de producao sem revisar**: a IA pode gerar codigo com bugs, vulnerabilidades de seguranca ou praticas desatualizadas
- **Responder exercicios sem tentar primeiro**: tente resolver sozinho antes de pedir ajuda
- **Confiar cegamente**: a IA pode (e vai) errar. Verifique sempre as informacoes e teste o codigo

> **Regra de ouro:** Use IA como uma **ferramenta de apoio**, nao como uma **muleta**. Primeiro tente fazer sozinho, depois use IA para melhorar, tirar duvidas ou aprender abordagens alternativas.

### 5.4.4 IA como Ferramenta de Estudo

A IA pode ser uma incrivel parceira de estudo. Aqui estao formas de usa-la para aprender mais:

#### Pedir para Explicar Codigo

```
"Explique linha por linha o que este codigo JavaScript faz:

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        header.classList.toggle('open');
    });
});
"
```

#### Pedir Exercicios Praticos

```
"Me de 5 exercicios praticos de CSS Flexbox, do mais facil ao
mais dificil. Para cada exercicio, descreva o layout desejado
e me de o HTML base. Nao me de a resposta CSS ainda,
deixe eu tentar primeiro."
```

#### Pedir Revisao de Codigo

```
"Revise este codigo CSS e me de sugestoes de melhoria em
termos de: organizacao, performance, acessibilidade e
boas praticas. [cole seu codigo]"
```

#### Simular Entrevistas Tecnicas

```
"Simule uma entrevista tecnica para uma vaga de desenvolvedor
web junior. Me faca 5 perguntas sobre HTML, CSS e JavaScript,
uma de cada vez. Espere minha resposta antes de fazer a proxima
pergunta. Ao final, me de feedback sobre minhas respostas."
```

---

## 5.5 Projeto Final - Requisitos e Especificacoes

Chegou a hora de colocar tudo em pratica! O projeto final consiste em criar um **site pessoal ou portfolio** completo, usando todas as tecnologias que aprendemos no curso.

### Descricao do Projeto

Voce vai criar um site pessoal/portfolio que apresente quem voce e, suas habilidades e seus projetos. Este site sera sua primeira presenca profissional na internet e pode ser o comeco do seu portfolio como desenvolvedor!

### Requisitos Obrigatorios

Seu projeto **deve** atender a todos os requisitos abaixo para ser aprovado:

#### 1. Minimo de 3 Paginas

| Pagina | Descricao |
|--------|-----------|
| **Home** (`index.html`) | Pagina principal com apresentacao pessoal e destaques |
| **Sobre** (`sobre.html`) | Informacoes detalhadas sobre voce, habilidades e formacao |
| **Contato** (`contato.html`) | Formulario de contato e informacoes para contato |

Voce pode criar paginas adicionais como `projetos.html`, `blog.html`, etc.

#### 2. HTML Semantico e Valido

- Use tags semanticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Valide seu HTML em [validator.w3.org](https://validator.w3.org/)
- Todas as imagens devem ter atributo `alt`
- Todos os campos de formulario devem ter `<label>`

#### 3. CSS Responsivo (Mobile, Tablet, Desktop)

Seu site deve funcionar bem em pelo menos 3 tamanhos de tela:

- **Mobile**: ate 767px
- **Tablet**: 768px a 1023px
- **Desktop**: 1024px ou mais

```css
/* Abordagem Mobile-First */

/* Mobile (padrao) */
.container {
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}
```

#### 4. Pelo Menos 3 Interacoes com JavaScript

Escolha pelo menos **3** das seguintes interacoes (ou crie as suas):

- Menu hamburger (menu responsivo)
- Validacao de formulario de contato
- Modo claro/escuro (dark mode)
- Scroll suave para secoes da pagina
- Botao "voltar ao topo"
- Animacao ao rolar a pagina (scroll reveal)
- Galeria de imagens com modal
- Contador animado de estatisticas
- Filtro de projetos por categoria
- Accordion (secoes expansiveis)

#### 5. Formulario de Contato Funcional

O formulario deve ter validacao com JavaScript:

```html
<form id="form-contato">
    <label for="nome">Nome completo*</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">Email*</label>
    <input type="email" id="email" name="email" required>

    <label for="assunto">Assunto</label>
    <select id="assunto" name="assunto">
        <option value="">Selecione...</option>
        <option value="trabalho">Proposta de trabalho</option>
        <option value="duvida">Duvida</option>
        <option value="outro">Outro</option>
    </select>

    <label for="mensagem">Mensagem*</label>
    <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

    <button type="submit">Enviar</button>
</form>
```

```javascript
// Validacao basica do formulario
const form = document.querySelector('#form-contato');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensagem = document.querySelector('#mensagem').value.trim();

    if (nome.length < 3) {
        exibirErro('nome', 'O nome deve ter pelo menos 3 caracteres.');
        return;
    }

    if (!validarEmail(email)) {
        exibirErro('email', 'Por favor, insira um email valido.');
        return;
    }

    if (mensagem.length < 10) {
        exibirErro('mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
        return;
    }

    // Formulario valido!
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    form.reset();
});

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function exibirErro(campoId, mensagem) {
    const campo = document.querySelector(`#${campoId}`);
    campo.classList.add('erro');
    // Exibir mensagem de erro ao lado do campo
    let spanErro = campo.parentElement.querySelector('.mensagem-erro');
    if (!spanErro) {
        spanErro = document.createElement('span');
        spanErro.classList.add('mensagem-erro');
        campo.parentElement.appendChild(spanErro);
    }
    spanErro.textContent = mensagem;
}
```

#### 6. Menu de Navegacao Funcional

O menu deve estar presente em todas as paginas e destacar a pagina ativa:

```html
<nav>
    <ul class="menu">
        <li><a href="index.html" class="ativo">Home</a></li>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="contato.html">Contato</a></li>
    </ul>
    <button class="menu-toggle" aria-label="Abrir menu">
        &#9776;
    </button>
</nav>
```

#### 7. Deploy no GitHub Pages

Seu site deve estar publicado e acessivel online via GitHub Pages (veja a secao 5.3 para o passo a passo).

#### 8. Codigo Versionado com Git (Minimo 10 Commits)

Seu repositorio deve ter **pelo menos 10 commits** com mensagens claras e descritivas:

```bash
# Exemplos de boas mensagens de commit
git commit -m "Cria estrutura HTML da pagina inicial"
git commit -m "Adiciona estilos base e variaveis CSS"
git commit -m "Implementa layout responsivo com Flexbox"
git commit -m "Adiciona validacao JavaScript ao formulario de contato"
git commit -m "Implementa menu hamburger para mobile"
git commit -m "Adiciona modo escuro com toggle"
git commit -m "Otimiza imagens para formato WebP"
git commit -m "Corrige bug de alinhamento no footer"
git commit -m "Adiciona meta tags de SEO e Open Graph"
git commit -m "Finaliza pagina Sobre com secao de habilidades"
```

### Requisitos Desejaveis (Bonus)

Estes requisitos nao sao obrigatorios, mas demonstram um nivel extra de dedicacao e habilidade:

#### Modo Claro/Escuro

```javascript
const toggleTema = document.querySelector('#toggle-tema');

toggleTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');

    // Salvar preferencia
    const temaAtual = document.body.classList.contains('tema-escuro')
        ? 'escuro'
        : 'claro';
    localStorage.setItem('tema', temaAtual);
});

// Carregar preferencia salva
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    document.body.classList.add('tema-escuro');
}
```

#### Animacoes CSS

```css
/* Animacao de entrada suave */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card {
    animation: fadeInUp 0.6s ease-out;
}

/* Efeito hover em cards */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}
```

#### Consumo de API Externa

```javascript
// Exemplo: buscar repositorios do GitHub
async function buscarRepositorios(usuario) {
    try {
        const resposta = await fetch(`https://api.github.com/users/${usuario}/repos?sort=updated`);
        const repos = await resposta.json();

        const lista = document.querySelector('#lista-repos');
        repos.slice(0, 6).forEach(repo => {
            const item = document.createElement('div');
            item.classList.add('card-repo');
            item.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sem descricao'}</p>
                <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
            `;
            lista.appendChild(item);
        });
    } catch (erro) {
        console.error('Erro ao buscar repositorios:', erro);
    }
}

buscarRepositorios('seu-usuario-github');
```

#### Galeria de Projetos

Uma pagina ou secao dedicada a exibir seus projetos com screenshots, descricao e links.

#### Pagina 404 Customizada

Crie um arquivo `404.html` personalizado para quando o usuario acessar uma pagina que nao existe. O GitHub Pages usa automaticamente o arquivo `404.html` na raiz do repositorio.

### Criterios de Avaliacao

Seu projeto sera avaliado nos seguintes criterios:

| Criterio | Peso | Descricao |
|----------|:----:|-----------|
| **HTML semantico e valido** | 20% | Uso correto de tags semanticas, HTML valido, acessibilidade basica |
| **CSS organizado e responsivo** | 25% | Layout responsivo, codigo CSS organizado, bom uso de Flexbox/Grid |
| **JavaScript funcional e limpo** | 25% | Interacoes funcionando, codigo limpo e sem erros no console |
| **Uso correto do Git** | 10% | Minimo 10 commits, mensagens claras, repositorio organizado |
| **Criatividade e design** | 10% | Visual agradavel, boa experiencia do usuario, originalidade |
| **Acessibilidade** | 10% | Alt text, contraste, navegacao por teclado, labels em formularios |

---

## 5.6 Checklist do Projeto Final

Use este checklist para verificar se seu projeto esta completo antes da entrega. Marque cada item conforme for concluindo:

### HTML

- [ ] Arquivo `index.html` na raiz do projeto
- [ ] Minimo de 3 paginas (Home, Sobre, Contato)
- [ ] `<!DOCTYPE html>` em todos os arquivos HTML
- [ ] `<html lang="pt-BR">` para idioma correto
- [ ] `<meta charset="UTF-8">` para caracteres especiais
- [ ] `<meta name="viewport" ...>` para responsividade
- [ ] `<title>` descritivo em cada pagina
- [ ] Tags semanticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] Todas as imagens com `alt` descritivo
- [ ] Formulario de contato com `<label>` em cada campo
- [ ] Links de navegacao funcionando entre as paginas
- [ ] HTML validado em [validator.w3.org](https://validator.w3.org/)

### CSS

- [ ] Arquivo CSS separado (nao inline)
- [ ] Layout responsivo (mobile, tablet, desktop)
- [ ] Testado em celular (ou no DevTools com modo responsivo)
- [ ] Contraste de cores adequado (texto legivel)
- [ ] Fonte legivel (tamanho minimo 16px para corpo de texto)
- [ ] Espacamento consistente
- [ ] Nenhum overflow horizontal (conteudo nao "vaza" da tela)
- [ ] Links e botoes com estados `:hover` e `:focus`
- [ ] Imagens responsivas (nao estouram o layout)

### JavaScript

- [ ] Pelo menos 3 interacoes com JavaScript
- [ ] Validacao do formulario de contato
- [ ] Menu de navegacao funcional
- [ ] Nenhum erro no console do navegador (F12 > Console)
- [ ] Codigo comentado nos trechos mais importantes
- [ ] Variaveis com nomes descritivos

### Git

- [ ] Minimo de 10 commits
- [ ] Mensagens de commit claras e descritivas
- [ ] Arquivo `.gitignore` configurado
- [ ] Arquivo `README.md` no repositorio
- [ ] Nenhum arquivo desnecessario no repositorio (node_modules, .DS_Store)

### Deploy

- [ ] Site publicado no GitHub Pages
- [ ] URL do site funcionando
- [ ] Todas as paginas carregando corretamente
- [ ] Imagens e estilos carregando corretamente
- [ ] Links internos funcionando no site publicado

### Acessibilidade

- [ ] Todas as imagens com `alt`
- [ ] Contraste de cores adequado
- [ ] Navegavel por teclado (Tab, Enter)
- [ ] `<label>` em todos os campos de formulario
- [ ] Headings em ordem hierarquica correta
- [ ] Lighthouse Accessibility acima de 80

---

## 5.7 Apresentacao do Projeto

No final do dia, cada aluno tera a oportunidade de apresentar seu projeto para a turma. Esta e sua chance de mostrar tudo o que voce construiu!

### Como Apresentar (5 Minutos por Aluno)

Estruture sua apresentacao em 5 topicos:

1. **Apresentacao (30s):** Seu nome e o nome do projeto
2. **Motivacao (1min):** Por que voce escolheu esse tema/design? O que te inspirou?
3. **Demonstracao ao vivo (2min):** Mostre o site funcionando, navegando pelas paginas e demonstrando as interacoes JavaScript
4. **Desafios e solucoes (1min):** Qual foi a parte mais dificil? Como voce resolveu?
5. **Aprendizados (30s):** O que voce aprendeu de mais importante neste curso?

### Dicas para uma Boa Apresentacao

- **Prepare-se**: pratique antes, saiba o que vai falar
- **Mostre entusiasmo**: voce construiu algo do zero, isso e incrivel!
- **Seja honesto**: se algo nao ficou perfeito, tudo bem! Fale sobre o que faria diferente
- **Demonstracao ao vivo**: tenha seu site aberto no navegador e prontos para mostrar
- **Agradeca**: agradeca a turma e o instrutor

### Demonstracao ao Vivo

Durante a demonstracao, mostre:

- A pagina inicial e a navegacao entre paginas
- O layout responsivo (redimensione a janela ou use o DevTools)
- As interacoes JavaScript (formulario, menu, toggle de tema, etc.)
- O repositorio no GitHub (commits, organizacao)
- O site publicado no GitHub Pages

> **Dica:** Tenha tanto o site local quanto o publicado no GitHub Pages abertos no navegador, caso um deles apresente algum problema.

---

## 5.8 Proximos Passos na Carreira

Parabens! Voce concluiu o curso de Fundamentos de Desenvolvimento Web. Mas este e apenas o comeco da sua jornada! Aqui esta um mapa para continuar evoluindo.

### Aprofundar HTML, CSS e JavaScript

Antes de aprender frameworks e ferramentas novas, aprofunde-se nas tecnologias base:

- **HTML avancado**: formularios complexos, Web Components, APIs do navegador
- **CSS avancado**: animacoes complexas, CSS Grid avancado, Container Queries, subgrid
- **JavaScript avancado**: Promises e async/await, manipulacao avancada do DOM, Fetch API, modulos ES6, classes, closures, programacao funcional

> **Dica:** Nao pule etapas! Dominar bem HTML, CSS e JavaScript puro vai fazer toda a diferenca quando voce comecar a aprender frameworks.

### Frameworks e Bibliotecas

Quando se sentir confortavel com as bases, explore estas tecnologias:

#### Front-end

| Tecnologia | Descricao | Link |
|-----------|-----------|------|
| **React** | Biblioteca mais popular para construcao de interfaces | [react.dev](https://react.dev/) |
| **Vue.js** | Framework progressivo, mais facil de aprender | [vuejs.org](https://vuejs.org/) |
| **Angular** | Framework completo do Google, mais usado em empresas grandes | [angular.dev](https://angular.dev/) |

#### Back-end

| Tecnologia | Descricao | Link |
|-----------|-----------|------|
| **Node.js** | JavaScript no servidor | [nodejs.org](https://nodejs.org/) |
| **Express** | Framework minimalista para Node.js | [expressjs.com](https://expressjs.com/) |

#### CSS Frameworks

| Tecnologia | Descricao | Link |
|-----------|-----------|------|
| **Tailwind CSS** | Framework CSS utilitario, muito popular | [tailwindcss.com](https://tailwindcss.com/) |
| **Bootstrap** | Framework CSS classico com componentes prontos | [getbootstrap.com](https://getbootstrap.com/) |

### Outras Tecnologias

A medida que voce evolui, conheca tambem:

- **TypeScript**: JavaScript com tipagem estatica -- reduz bugs e melhora a experiencia de desenvolvimento. Referencia: [typescriptlang.org](https://www.typescriptlang.org/)
- **Sass/SCSS**: pre-processador CSS que adiciona variaveis, nesting, mixins e mais. Referencia: [sass-lang.com](https://sass-lang.com/)
- **APIs REST e GraphQL**: formas de comunicacao entre front-end e back-end
  - REST: [restfulapi.net](https://restfulapi.net/)
  - GraphQL: [graphql.org](https://graphql.org/)
- **Banco de Dados**: onde os dados sao armazenados
  - SQL (PostgreSQL, MySQL): bancos relacionais
  - NoSQL (MongoDB, Firebase): bancos nao-relacionais
- **Testes Automatizados**: garanta que seu codigo funciona corretamente
  - Jest: [jestjs.io](https://jestjs.io/)
  - Cypress: [cypress.io](https://www.cypress.io/)
  - Playwright: [playwright.dev](https://playwright.dev/)

### Recursos de Aprendizado

#### Sites e Plataformas

| Recurso | Descricao | Link |
|---------|-----------|------|
| **MDN Web Docs** | Documentacao oficial da web (referencia #1) | [developer.mozilla.org](https://developer.mozilla.org/pt-BR/) |
| **freeCodeCamp** | Curso gratuito e completo com certificacoes | [freecodecamp.org](https://www.freecodecamp.org/) |
| **W3Schools** | Tutoriais e referencias rapidas | [w3schools.com](https://www.w3schools.com/) |
| **CSS-Tricks** | Artigos e guias sobre CSS | [css-tricks.com](https://css-tricks.com/) |
| **Alura** | Plataforma brasileira de cursos de tecnologia | [alura.com.br](https://www.alura.com.br/) |
| **Rocketseat** | Plataforma brasileira focada em dev web | [rocketseat.com.br](https://www.rocketseat.com.br/) |

#### Canais do YouTube

| Canal | Foco | Link |
|-------|------|------|
| **Curso em Video** | Cursos completos para iniciantes (PT-BR) | [youtube.com/@CursoemVideo](https://www.youtube.com/@CursoemVideo) |
| **Filipe Deschamps** | Noticias e conceitos de tech (PT-BR) | [youtube.com/@FilipeDeschamps](https://www.youtube.com/@FilipeDeschamps) |
| **Rafaella Ballerini** | Tutoriais de programacao (PT-BR) | [youtube.com/@rafaballerini](https://www.youtube.com/@rafaballerini) |
| **Kevin Powell** | CSS avancado e dicas (EN) | [youtube.com/@KevinPowell](https://www.youtube.com/@KevinPowell) |

#### Pratica e Desafios

| Plataforma | Tipo | Link |
|-----------|------|------|
| **Frontend Mentor** | Desafios de front-end com design pronto | [frontendmentor.io](https://www.frontendmentor.io/) |
| **Exercism** | Exercicios de programacao com mentoria | [exercism.org](https://exercism.org/) |
| **HackerRank** | Desafios de logica e algoritmos | [hackerrank.com](https://www.hackerrank.com/) |
| **Codewars** | Katas (exercicios) de programacao por nivel | [codewars.com](https://www.codewars.com/) |

#### Comunidades

| Comunidade | Descricao | Link |
|-----------|-----------|------|
| **Dev.to** | Blog e comunidade de desenvolvedores | [dev.to](https://dev.to/) |
| **Stack Overflow (PT)** | Perguntas e respostas sobre programacao | [pt.stackoverflow.com](https://pt.stackoverflow.com/) |
| **Discord** | Servidores de comunidades dev (Rocketseat, He4rt, etc.) | Pesquise no Discord |
| **Meetups** | Eventos presenciais de tecnologia | [meetup.com](https://www.meetup.com/) |

### Construindo um Portfolio

Seu portfolio e seu cartao de visitas como desenvolvedor. Dicas:

1. **Comece com o projeto deste curso** -- voce ja tem um portfolio!
2. **Adicione projetos progressivamente** -- cada coisa nova que voce aprender, crie um projeto
3. **Qualidade > Quantidade** -- e melhor ter 5 projetos bem feitos do que 20 mal acabados
4. **Documente seus projetos** -- README com descricao, screenshot e link do deploy
5. **Varie os tipos de projeto** -- landing page, dashboard, e-commerce, aplicativo, etc.

### GitHub como seu Curriculo

Recrutadores acessam perfis do GitHub! Mantenha seu perfil atrativo:

- **README do perfil**: crie um repositorio com seu nome de usuario e adicione um README.md
- **Commits regulares**: mantenha o grafico de contribuicoes ativo
- **Repositorios organizados**: descricoes claras, READMEs informativos, codigo limpo
- **Projetos pinados**: destaque seus melhores projetos no perfil
- **Contribuicoes open source**: contribua para projetos de outros desenvolvedores

```markdown
<!-- Exemplo de README de perfil do GitHub -->
# Ola! Eu sou o Joao Silva 👋

Desenvolvedor web em formacao, apaixonado por criar interfaces bonitas e acessiveis.

## Habilidades
- HTML5 | CSS3 | JavaScript
- Git | GitHub
- Responsividade | Acessibilidade

## Projetos em Destaque
- [Meu Portfolio](https://joaosilva.github.io/portfolio) - Meu site pessoal
- [To-Do App](https://joaosilva.github.io/todo-app) - Aplicativo de tarefas
- [Weather App](https://joaosilva.github.io/weather-app) - App de clima com API

## Contato
- LinkedIn: [joaosilva](https://linkedin.com/in/joaosilva)
- Email: joao@email.com
```

### Dicas para Conseguir o Primeiro Emprego ou Freela

1. **Mantenha seu portfolio atualizado** e com projetos de qualidade
2. **Crie um perfil no LinkedIn** e conecte-se com profissionais da area
3. **Participe de comunidades** -- responda perguntas, ajude outros, contribua
4. **Candidate-se para vagas junior** -- nao espere "estar pronto", voce nunca vai se sentir 100% pronto
5. **Faca projetos freela pequenos** -- amigos, familiares, comercio local, ONGs
6. **Estude continuamente** -- a area de tecnologia evolui rapidamente
7. **Prepare-se para entrevistas** -- pratique exercicios de logica e revise conceitos
8. **Nao desanime com rejeicoes** -- faz parte do processo. Cada "nao" te aproxima do proximo "sim"

> **Lembre-se:** Voce ja deu o primeiro e mais importante passo: aprender os fundamentos. Muitos desenvolvedores de sucesso comecaram exatamente de onde voce esta agora. Continue aprendendo, continue construindo, e os resultados virao!

---

## 5.9 Atividades do Ultimo Dia

### Atividade 5.1 - Finalizar o Projeto

**Objetivo:** Completar todos os requisitos obrigatorios do projeto final.

**Duracacao estimada:** 1h30min

**Instrucoes:**

1. **Revise o checklist** da secao 5.6 e verifique quais itens ainda faltam
2. **Complete os requisitos pendentes:**
   - Certifique-se de que tem pelo menos 3 paginas
   - Verifique se o HTML e semantico
   - Teste a responsividade em diferentes tamanhos de tela
   - Confirme que tem pelo menos 3 interacoes JavaScript
   - Teste a validacao do formulario de contato
3. **Valide seu HTML** acessando [validator.w3.org](https://validator.w3.org/) e corrigindo eventuais erros
4. **Teste a responsividade:**
   - No Chrome, pressione `F12` para abrir o DevTools
   - Clique no icone de dispositivo movel (ou `Ctrl + Shift + M`)
   - Teste com diferentes tamanhos: 375px (mobile), 768px (tablet), 1440px (desktop)
5. **Teste a acessibilidade com o Lighthouse:**
   - No DevTools, va para a aba Lighthouse
   - Marque "Accessibility" e clique em "Analyze page load"
   - Corrija os problemas indicados
6. **Faca commits** das suas alteracoes com mensagens descritivas

```bash
git add .
git commit -m "Finaliza requisitos obrigatorios do projeto"
git push origin main
```

---

### Atividade 5.2 - Deploy no GitHub Pages

**Objetivo:** Publicar seu site na internet usando GitHub Pages.

**Duracao estimada:** 30min

**Instrucoes:**

1. **Certifique-se de que todo o codigo esta no GitHub:**

```bash
git status
# Se houver alteracoes nao commitadas:
git add .
git commit -m "Prepara projeto para deploy no GitHub Pages"
git push origin main
```

2. **Ative o GitHub Pages:**
   - Acesse seu repositorio no GitHub
   - Va em **Settings** > **Pages**
   - Em Source, selecione **Deploy from a branch**
   - Em Branch, selecione **main** e **/ (root)**
   - Clique em **Save**

3. **Aguarde o deploy** (1-5 minutos)

4. **Acesse seu site** na URL: `https://seu-usuario.github.io/nome-do-repositorio/`

5. **Verifique se tudo esta funcionando:**
   - Navegacao entre paginas
   - Imagens carregando
   - Estilos aplicados
   - JavaScript funcionando
   - Layout responsivo

6. **Compartilhe o link na Discussion do curso:**
   - Acesse a aba Discussions do repositorio do curso
   - Crie um novo post na categoria apropriada
   - Compartilhe: nome, link do site publicado e link do repositorio
   - De uma olhada nos projetos dos colegas e deixe comentarios positivos!

> **Problema comum:** Se imagens nao carregarem no GitHub Pages, verifique se os caminhos estao corretos. Use caminhos relativos (ex: `img/foto.webp`) e nao absolutos (ex: `/img/foto.webp`).

---

### Atividade 5.3 - Code Review em Dupla

**Objetivo:** Praticar revisao de codigo e dar/receber feedback construtivo.

**Duracao estimada:** 30min

**Instrucoes:**

1. **Forme uma dupla** com um colega de turma
2. **Troque os links dos repositorios** no GitHub
3. **Analise o repositorio do colega:**
   - Navegue pelo codigo HTML, CSS e JavaScript
   - Teste o site publicado no GitHub Pages
   - Verifique a responsividade
   - Procure possibilidades de melhoria
4. **Abra pelo menos 2 Issues** no repositorio do colega com sugestoes de melhoria:

```markdown
# Titulo da Issue: Sugestao - Melhorar contraste do texto no footer

## Descricao
Ao verificar o site, notei que o texto do footer tem pouco
contraste com o fundo. O texto cinza claro (#999) sobre
fundo branco (#fff) tem razao de contraste de apenas 2.8:1.

## Sugestao
Trocar a cor do texto para #666 ou mais escuro para atingir
a razao minima de 4.5:1 recomendada pela WCAG.

## Referencia
- WCAG Contrast Guidelines: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
```

5. **Responda as Issues recebidas** no seu repositorio:
   - Agradeca o feedback
   - Se concordar, faca a correcao e cite a Issue no commit
   - Se discordar, explique educadamente o motivo

```bash
git commit -m "Corrige contraste do footer - resolve #1"
```

> **Dica:** Seja construtivo e educado no feedback. Code review e sobre melhorar o codigo, nao criticar a pessoa. Sempre comece com algo positivo antes de sugerir melhorias.

---

### Atividade 5.4 - Apresentacao

**Objetivo:** Apresentar seu projeto para a turma.

**Duracao estimada:** 5 minutos por aluno

**Instrucoes:**

1. **Prepare sua apresentacao** seguindo a estrutura da secao 5.7:
   - Seu nome e o nome do projeto (30s)
   - Motivacao e inspiracao (1min)
   - Demonstracao ao vivo (2min)
   - Desafios e solucoes (1min)
   - Aprendizados (30s)

2. **Tenha pronto no navegador:**
   - Seu site publicado no GitHub Pages
   - Seu repositorio no GitHub
   - O DevTools aberto para demonstrar responsividade

3. **Apresente para a turma!**

4. **Assista as apresentacoes dos colegas** e diga algo positivo sobre cada projeto

> **Nao tenha medo!** Todos estao aprendendo. Nao importa se seu projeto e simples ou se algo nao ficou perfeito. O que importa e que voce construiu algo do zero e aprendeu no processo. Isso ja e incrivel!

---

### Atividade 5.5 - Feedback do Curso

**Objetivo:** Compartilhar sua experiencia e ajudar a melhorar o curso para turmas futuras.

**Duracao estimada:** 15min

**Instrucoes:**

1. Acesse o repositorio do curso no GitHub
2. Va para a aba **Issues**
3. Clique em **New Issue**
4. Use o seguinte modelo:

```markdown
# Feedback do Curso - [Seu Nome]

## O que eu mais gostei
- [Liste pelo menos 2 coisas que voce gostou no curso]

## O que eu melhoraria
- [Liste pelo menos 2 sugestoes de melhoria]

## Nivel de dificuldade
- [ ] Muito facil
- [ ] Adequado
- [ ] Um pouco dificil
- [ ] Muito dificil

## Topico favorito
[Qual modulo ou assunto voce mais gostou? Por que?]

## Sugestoes de topicos adicionais
[Tem algo que voce gostaria que tivesse sido abordado no curso?]

## Nota geral (1-10)
[Sua nota para o curso]

## Comentarios adicionais
[Qualquer outra coisa que queira compartilhar]
```

5. Publique a Issue

> **Seu feedback e muito importante!** Ele ajuda a melhorar o curso para as proximas turmas. Seja honesto e construtivo.

---

## Conclusao

Parabens por concluir o curso de **Fundamentos de Desenvolvimento Web**!

Ao longo destes 8 dias e 32 horas, voce saiu do zero e aprendeu a:

- Estruturar paginas web com **HTML** semantico
- Estilizar e criar layouts responsivos com **CSS**
- Adicionar interatividade com **JavaScript**
- Versionar codigo com **Git** e colaborar no **GitHub**
- Publicar um site na internet com **GitHub Pages**
- Usar **Inteligencia Artificial** como ferramenta de apoio

Voce nao e mais um iniciante. Voce e um **desenvolvedor web em formacao**, com uma base solida para continuar evoluindo.

O mercado de tecnologia esta cheio de oportunidades, e voce agora tem as ferramentas fundamentais para aproveitá-las. Continue praticando, continue construindo projetos, continue aprendendo. Cada linha de codigo que voce escreve te torna um desenvolvedor melhor.

**Sua jornada esta apenas comecando. Bons codigos e sucesso na carreira!**

---

> **"Todo especialista ja foi um iniciante."** -- Helen Hayes

---

*Material do curso Fundamentos de Desenvolvimento Web | Modulo 5 - Pratica de Desenvolvimento Web*
