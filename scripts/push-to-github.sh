#!/bin/bash
# Push Skill Forge to GitHub (primary remote).
#
# Prerequisites:
#   gh auth login
#   or: export GITHUB_TOKEN=ghp_...
#
# Usage:
#   ./scripts/push-to-github.sh

set -euo pipefail

GITHUB_OWNER="${GITHUB_OWNER:-FORGE-PPF-WRAPS}"
GITHUB_REPO="${GITHUB_REPO:-core-workbooks}"
BRANCH="${BRANCH:-cursor-design-system}"

cd "$(dirname "$0")/.."

if [ -n "${GITHUB_TOKEN:-}" ]; then
  echo "$GITHUB_TOKEN" | gh auth login --with-token
elif ! gh auth status >/dev/null 2>&1; then
  echo "Error: Not logged in to GitHub. Run: gh auth login"
  exit 1
fi

if git remote get-url origin | grep -q github.com; then
  REMOTE=origin
else
  if git remote get-url github >/dev/null 2>&1; then
    REMOTE=github
  else
    git remote add origin "https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}.git"
    REMOTE=origin
  fi
fi

CURRENT=$(git branch --show-current)
if [ "$CURRENT" != "$BRANCH" ]; then
  echo "Warning: current branch is '$CURRENT' but pushing '$BRANCH'."
fi

echo "Pushing to github.com/${GITHUB_OWNER}/${GITHUB_REPO} (branch: ${BRANCH})..."
git push -u "$REMOTE" "${BRANCH}"

echo "Done: https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/tree/${BRANCH}"
echo "Manuals (after Pages deploy): https://forge-ppf-wraps.github.io/core-workbooks/"
