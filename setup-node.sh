#!/bin/bash

# Install nvm if not already installed
if [ ! -d "$HOME/.nvm" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
fi

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node.js 18.17.0
nvm install 18.17.0
nvm use 18.17.0

# Verify Node.js version
node --version 