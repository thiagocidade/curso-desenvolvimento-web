# Fundamentos de Desenvolvimento Web

Bem-vindo ao curso de **Fundamentos de Desenvolvimento Web**! Este repositório contém todo o material de apoio, exemplos de código, atividades práticas e a apostila completa do curso.

## Sobre o Curso

Este curso de **32 horas** foi desenvolvido para iniciantes que desejam dar os primeiros passos no mundo do desenvolvimento web. Ao final, você terá uma base sólida em HTML, CSS e JavaScript, e será capaz de criar páginas web interativas e responsivas.

## Estrutura do Curso

| Módulo | Tema | Carga Horária | Status |
|--------|------|:-------------:|:------:|
| [Módulo 1](./modulo-01-introducao/) | Introdução ao Desenvolvimento Web | 4h | `Dia 1` |
| [Módulo 2](./modulo-02-html/) | HTML - Estruturando a Web | 8h | `Dias 2 e 3` |
| [Módulo 3](./modulo-03-css/) | CSS - Estilizando a Web | 8h | `Dias 4 e 5` |
| [Módulo 4](./modulo-04-javascript/) | JavaScript - Interatividade na Web | 8h | `Dias 6 e 7` |
| [Módulo 5](./modulo-05-projeto-final/) | Prática de Desenvolvimento Web | 4h | `Dia 8` |

## Como Usar Este Repositório

### Para Alunos

1. **Faça um Fork** deste repositório para sua conta do GitHub
2. **Clone** o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/fundamentos-web.git
   ```
3. **Acompanhe as aulas** seguindo o material de cada módulo
4. **Realize as atividades** propostas em cada módulo
5. **Faça commits** das suas atividades e atualizações
6. **Participe** das [Discussions](../../discussions) e [Issues](../../issues) seguindo o padrão de turma e nome (veja abaixo)

### Para o Projeto Final

O projeto será desenvolvido de forma incremental ao longo do curso:

- **Módulo 2 (HTML):** Estrutura base do projeto
- **Módulo 3 (CSS):** Estilização e responsividade
- **Módulo 4 (JavaScript):** Interatividade e funcionalidades
- **Módulo 5:** Finalização, ajustes e apresentação

O template do projeto está disponível em [`modulo-05-projeto-final/projeto-base/`](./modulo-05-projeto-final/projeto-base/).

## Apostila Completa

A apostila completa do curso está disponível em:

- **Markdown:** [`apostila-fundamentos-web.md`](./apostila-fundamentos-web.md)
- **Word (DOCX):** Veja as [instruções de conversão](./CONVERSAO-WORD.md) para gerar o arquivo Word com marca d'água

## Interação e Participação

- **Discussions:** Use a aba [Discussions](../../discussions) para se apresentar, tirar dúvidas e compartilhar descobertas
- **Issues:** Use [Issues](../../issues) para reportar problemas no material ou sugerir melhorias
- **Pull Requests:** Contribua com correções e melhorias no material

### Dia 1 (obrigatório para todas as turmas)

No primeiro dia, todos devem:

1. Fazer **1 comentário de apresentação** na Discussion fixada da turma
2. Abrir uma **Issue de check-in** da aula

Use sempre o padrão com **Turma + Nome** para facilitar organização entre as duas turmas.

#### Padrão para Discussions (apresentação)

- **Onde fazer:** na Discussion fixada de apresentação (não criar nova Discussion)
- **Conteúdo mínimo do comentário:**
  - Nome
  - Turma (`Tarde` ou `Noite`)
  - Objetivo no curso (1 frase)

#### Padrão para Issues (check-in)

- **Título:** `Check-in Dia 1 - Turma Tarde - Nome Sobrenome`  
  ou `Check-in Dia 1 - Turma Noite - Nome Sobrenome`
- **Conteúdo mínimo:**
  - Módulo atual: `Módulo 1`
  - Status: `Presente`
  - Dúvida inicial (opcional)

#### Configuração pronta no repositório

- **Labels do curso (arquivo):** `.github/course-labels.csv`
- **Script para criar/atualizar labels:** `scripts/setup-course-labels.sh`
- **Script opcional para limpar labels antigas:** `scripts/prune-course-labels.sh`
- **Templates de Issue:** `.github/ISSUE_TEMPLATE/`
- **Modelo de Discussion do Dia 1:** `docs/discussion-dia1-template.md`

Para configurar labels com GitHub CLI:

```bash
bash scripts/setup-course-labels.sh
```

Se quiser manter somente o conjunto simplificado (tipo, turma e status), rode também:

```bash
bash scripts/prune-course-labels.sh
```

Consulte o [Guia de Contribuição](./CONTRIBUTING.md) para mais detalhes.

## Ferramentas Necessárias

- [Visual Studio Code](https://code.visualstudio.com/) — Editor de código
- [Git](https://git-scm.com/) — Controle de versão
- [Google Chrome](https://www.google.com/chrome/) ou [Firefox](https://www.mozilla.org/firefox/) — Navegador com DevTools
- [Node.js](https://nodejs.org/) — Runtime JavaScript (opcional)
- Conta no [GitHub](https://github.com/) — Repositório e colaboração

## Uso de IA no Curso

Neste curso, incentivamos o uso responsável de ferramentas de IA como apoio ao aprendizado:

- **Claude** (Anthropic) — Assistente de IA para dúvidas e explicações
- **ChatGPT** (OpenAI) — Assistente de IA para geração de código e ideias
- **GitHub Copilot** — Autocompletar inteligente no VS Code

> **Importante:** A IA é uma ferramenta de apoio, não de substituição. Primeiro entenda os conceitos, depois use IA para acelerar seu desenvolvimento.

## Bibliografia

A bibliografia completa está disponível em [`bibliografia.md`](./bibliografia.md).

## Licença

Este material é disponibilizado para fins educacionais.

---

**Bons estudos e bom código!**
