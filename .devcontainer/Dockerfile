# Use an official Node.js runtime as a parent image
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Verify installation
RUN node --version && npm --version
