# Conversão da Apostila para Word (DOCX)

Instruções para converter os arquivos Markdown da apostila para o formato Microsoft Word (.docx).

---

## Método 1: Pandoc (Recomendado)

O [Pandoc](https://pandoc.org/) é a ferramenta mais completa para conversão entre formatos de documento.

### Instalação

```bash
# Ubuntu/Debian
sudo apt install pandoc

# macOS (com Homebrew)
brew install pandoc

# Windows (com Chocolatey)
choco install pandoc
```

### Converter um Módulo Individual

```bash
pandoc modulo-01-introducao/README.md -o modulo-01-introducao.docx
```

### Converter Todos os Módulos de Uma Vez

```bash
pandoc \
  modulo-01-introducao/README.md \
  modulo-02-html/README.md \
  modulo-03-css/README.md \
  modulo-04-javascript/README.md \
  modulo-05-projeto-final/README.md \
  -o apostila-fundamentos-web.docx \
  --toc \
  --toc-depth=2
```

**Opções úteis:**
- `--toc` — Gera sumário automaticamente
- `--toc-depth=2` — Nível de profundidade do sumário
- `--reference-doc=modelo.docx` — Usa um arquivo Word como modelo de estilo
- `--highlight-style=tango` — Estilo de destaque para blocos de código

### Usar um Modelo de Estilo Personalizado

1. Gere um modelo padrão:
   ```bash
   pandoc -o modelo-referencia.docx --print-default-data-file reference.docx
   ```

2. Abra `modelo-referencia.docx` no Word e personalize:
   - Fontes dos títulos (Heading 1, Heading 2, etc.)
   - Fonte do corpo do texto
   - Cores e espaçamentos
   - Cabeçalho e rodapé

3. Use o modelo na conversão:
   ```bash
   pandoc modulo-01-introducao/README.md \
     -o modulo-01.docx \
     --reference-doc=modelo-referencia.docx
   ```

---

## Método 2: Apostila Unificada

Se o arquivo `apostila-fundamentos-web.md` já estiver criado (compilação de todos os módulos):

```bash
pandoc apostila-fundamentos-web.md \
  -o apostila-completa.docx \
  --toc \
  --toc-depth=2 \
  --highlight-style=tango
```

---

## Método 3: VS Code + Extensão

1. Instale a extensão **Markdown All in One** ou **Markdown PDF** no VS Code
2. Abra o arquivo `.md`
3. Use a paleta de comandos (`Ctrl+Shift+P`)
4. Procure por "Markdown: Export" e selecione o formato desejado

> **Nota:** Este método pode ter limitações com tabelas e blocos de código complexos.

---

## Observações Importantes

### Blocos de Código
- Os blocos de código com syntax highlighting serão convertidos como texto formatado com fonte monospace
- Para melhor resultado visual, considere usar `--highlight-style=tango` ou `--highlight-style=zenburn`

### Imagens e Diagramas ASCII
- Os diagramas ASCII (usados nos módulos) serão mantidos como texto monospace
- Se necessário, converta-os em imagens antes da conversão

### Caracteres Especiais
- Os módulos usam texto sem acentos nos arquivos `.md`
- O Pandoc preserva o texto exatamente como está no arquivo original
- Se desejar adicionar acentos na versão Word, faça isso após a conversão

### Tabelas
- As tabelas Markdown serão convertidas para tabelas Word
- Pode ser necessário ajustar a largura das colunas manualmente no Word

---

## Script de Conversão Automatizada

Salve o script abaixo como `converter.sh` e execute com `bash converter.sh`:

```bash
#!/bin/bash

# Converte cada módulo individualmente
for modulo in modulo-*/README.md; do
    nome=$(dirname "$modulo" | sed 's/modulo-//')
    echo "Convertendo $modulo -> $nome.docx"
    pandoc "$modulo" -o "${nome}.docx" --highlight-style=tango
done

# Converte a apostila completa (todos os módulos juntos)
echo "Gerando apostila completa..."
pandoc \
    modulo-01-introducao/README.md \
    modulo-02-html/README.md \
    modulo-03-css/README.md \
    modulo-04-javascript/README.md \
    modulo-05-projeto-final/README.md \
    -o apostila-fundamentos-web.docx \
    --toc \
    --toc-depth=2 \
    --highlight-style=tango

echo "Conversão concluída!"
```

---

*Para mais informações sobre o Pandoc, consulte: [pandoc.org/MANUAL.html](https://pandoc.org/MANUAL.html)*
