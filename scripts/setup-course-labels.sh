#!/usr/bin/env bash
set -euo pipefail

# Cria/atualiza labels do curso no repositório atual usando GitHub CLI.
# Requisitos:
# 1) gh instalado
# 2) gh auth login
# 3) executar na raiz do repositório

if ! command -v gh >/dev/null 2>&1; then
  echo "Erro: GitHub CLI (gh) nao encontrado." >&2
  exit 1
fi

if [[ ! -f ".github/course-labels.csv" ]]; then
  echo "Erro: arquivo .github/course-labels.csv nao encontrado." >&2
  exit 1
fi

repo_full_name=$(gh repo view --json nameWithOwner -q .nameWithOwner)

echo "Configurando labels em: $repo_full_name"

tail -n +2 .github/course-labels.csv | while IFS=',' read -r raw_name raw_color raw_description; do
  name="${raw_name%\"}"
  name="${name#\"}"

  color="${raw_color%\"}"
  color="${color#\"}"

  description="${raw_description%\"}"
  description="${description#\"}"

  if gh label view "$name" >/dev/null 2>&1; then
    gh label edit "$name" --color "$color" --description "$description" >/dev/null
    echo "Atualizada: $name"
  else
    gh label create "$name" --color "$color" --description "$description" >/dev/null
    echo "Criada: $name"
  fi
done

echo "Labels do curso prontas."
