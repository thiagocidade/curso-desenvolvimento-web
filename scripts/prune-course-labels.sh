#!/usr/bin/env bash
set -euo pipefail

# Remove labels antigas para manter o conjunto de labels do curso simples.
# Requisitos:
# 1) gh instalado
# 2) gh auth login
# 3) executar na raiz do repositório

if ! command -v gh >/dev/null 2>&1; then
  echo "Erro: GitHub CLI (gh) nao encontrado." >&2
  exit 1
fi

patterns=(
  "modulo:*"
  "prioridade:*"
  "status:em-andamento"
)

echo "Buscando labels para limpeza..."

for pattern in "${patterns[@]}"; do
  gh label list --limit 200 --json name -q '.[].name' | while IFS= read -r name; do
    case "$name" in
      $pattern)
        gh label delete "$name" --yes >/dev/null 2>&1 || true
        echo "Removida: $name"
        ;;
    esac
  done
done

echo "Limpeza concluida."
