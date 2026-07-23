#!/bin/bash
# Push Skill Forge core workbooks to GitHub.
#
# Prerequisites:
#   1. Repo exists: https://github.com/FORGE-PPF-WRAPS/core-workbooks
#   2. Authenticate: gh auth login   (or set GITHUB_TOKEN)
#
# Usage:
#   ./scripts/push-to-github.sh
#   BRANCH=cursor-design-system ./scripts/push-to-github.sh

set -euo pipefail

GITHUB_OWNER="${GITHUB_OWNER:-FORGE-PPF-WRAPS}"
GITHUB_REPO="${GITHUB_REPO:-core-workbooks}"
BRANCH="${BRANCH:-cursor-design-system}"

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
  gh repo create "${GITHUB_OWNER}/${GITHUB_REPO}" --private --description "Skill Forge core workbooks, design system, SOPs, and operations manuals"
fi

# Add or update github remote
if git remote get-url github >/dev/null 2>&1; then
  git remote set-url github "https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}.git"
else
  git remote add github "https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}.git"
fi

CURRENT=$(git branch --show-current)
if [ "$CURRENT" != "$BRANCH" ]; then
  echo "Warning: current branch is '$CURRENT' but pushing '$BRANCH'."
  echo "Checkout $BRANCH first, or set BRANCH=$CURRENT"
fi

echo "Pushing to github.com/${GITHUB_OWNER}/${GITHUB_REPO} (branch: ${BRANCH})..."
git push -u github "${BRANCH}"

echo "Done: https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/tree/${BRANCH}"
