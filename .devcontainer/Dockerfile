# Use Node.js base image for development
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:latest

# Install any additional dependencies you may need
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory to the workspace folder
WORKDIR /workspace
