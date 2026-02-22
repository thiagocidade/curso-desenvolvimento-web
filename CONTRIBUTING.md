# Guia de Contribuição e Participação

Bem-vindo! Este guia explica como participar ativamente do curso usando o GitHub.

## Primeiros Passos

### 1. Faça um Fork do Repositório

1. Acesse o repositório do curso no GitHub
2. Clique no botão **Fork** (canto superior direito)
3. Escolha sua conta pessoal como destino
4. Pronto! Você terá uma cópia do repositório na sua conta

### 2. Clone para sua Máquina

```bash
git clone https://github.com/seu-usuario/fundamentos-web.git
cd fundamentos-web
```

### 3. Configure o Repositório Original como Upstream

```bash
git remote add upstream https://github.com/professor/fundamentos-web.git
```

## Como Participar

### Discussions (Discussões)

As Discussions são o espaço para interação da turma:

- **Apresentações:** No primeiro dia, crie um post na categoria "Apresentações" se apresentando para a turma
- **Dúvidas:** Use a categoria "Q&A" para perguntas sobre o conteúdo
- **Compartilhar:** Use "Show and Tell" para compartilhar projetos e descobertas
- **Geral:** Discussões livres sobre desenvolvimento web

**Como criar uma Discussion:**
1. Vá até a aba **Discussions** do repositório original
2. Clique em **New Discussion**
3. Escolha a categoria apropriada
4. Escreva seu post com título descritivo
5. Clique em **Start Discussion**

### Issues (Problemas)

Use Issues para:

- Reportar erros no material ou nos exemplos de código
- Sugerir melhorias ou novos conteúdos
- Pedir esclarecimentos sobre atividades

**Como criar uma Issue:**
1. Vá até a aba **Issues** do repositório original
2. Clique em **New Issue**
3. Descreva o problema ou sugestão claramente
4. Adicione labels se disponíveis (bug, melhoria, dúvida)
5. Clique em **Submit New Issue**

### Pull Requests (Contribuições)

Contribua com correções ou melhorias:

1. Faça as alterações no seu fork
2. Crie um commit com mensagem descritiva
3. Faça push para seu fork
4. Abra um Pull Request para o repositório original

## Fluxo de Trabalho com Git

### Atividades Diárias

```bash
# Antes de começar, atualize seu repositório
git pull upstream main

# Crie uma branch para a atividade
git checkout -b atividade-modulo02-01

# Faça suas alterações...

# Adicione os arquivos modificados
git add .

# Faça o commit
git commit -m "feat: completa atividade 01 do módulo 02 - primeira página HTML"

# Envie para seu repositório
git push origin atividade-modulo02-01
```

### Convenção de Commits

Sugerimos usar mensagens de commit descritivas:

- `feat:` para novas funcionalidades ou atividades
- `fix:` para correções
- `docs:` para alterações em documentação
- `style:` para alterações de formatação

**Exemplos:**
```
feat: cria estrutura HTML do projeto final
fix: corrige link quebrado na página de contato
style: ajusta espaçamento do menu de navegação
docs: adiciona comentários no código JavaScript
```

## Estrutura de Entrega

Para cada atividade, siga esta estrutura:

```
seu-repositorio/
├── atividades/
│   ├── modulo-02/
│   │   ├── atividade-01/
│   │   │   └── index.html
│   │   └── atividade-02/
│   │       ├── index.html
│   │       └── img/
│   ├── modulo-03/
│   │   └── ...
│   └── modulo-04/
│       └── ...
└── projeto-final/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── img/
```

## Dúvidas?

Se tiver dúvidas sobre como usar o GitHub ou sobre o material, não hesite em:

1. Perguntar nas **Discussions**
2. Abrir uma **Issue**
3. Perguntar diretamente ao professor durante a aula

**Lembre-se:** Não existe pergunta boba! Estamos todos aqui para aprender.
