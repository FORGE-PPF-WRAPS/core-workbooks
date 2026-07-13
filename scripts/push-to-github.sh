#!/bin/bash
# Push Skill Forge core workbooks to GitHub.
#
# Prerequisites:
#   1. Create an empty repo: https://github.com/new → name it "core-workbooks"
#   2. Authenticate: gh auth login   (or set GITHUB_TOKEN)
#
# Usage:
#   ./scripts/push-to-github.sh

set -euo pipefail

GITHUB_OWNER="${GITHUB_OWNER:-veloxwrapco-group}"
GITHUB_REPO="${GITHUB_REPO:-core-workbooks}"
BRANCH="${BRANCH:-main}"

cd "$(dirname "$0")/.."

if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI (gh) is required."
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Error: Not logged in to GitHub. Run: gh auth login"
  exit 1
fi

# Create repo if it doesn't exist
if ! gh repo view "${GITHUB_OWNER}/${GITHUB_REPO}" >/dev/null 2>&1; then
  echo "Creating ${GITHUB_OWNER}/${GITHUB_REPO}..."
  gh repo create "${GITHUB_OWNER}/${GITHUB_REPO}" --private --description "Skill Forge core training workbooks — Tint, PPF, Vinyl Wrap"
fi

# Ensure main branch name
CURRENT=$(git branch --show-current)
if [ "$CURRENT" = "master" ]; then
  git branch -M "$BRANCH" 2>/dev/null || true
fi

# Add or update github remote
if git remote get-url github >/dev/null 2>&1; then
  git remote set-url github "https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}.git"
else
  git remote add github "https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}.git"
fi

echo "Pushing to github.com/${GITHUB_OWNER}/${GITHUB_REPO}..."
git push -u github "${BRANCH}"

echo "Done: https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}"
