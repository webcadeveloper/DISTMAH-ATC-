#!/bin/bash

# Script para arreglar lightningcss en WSL
echo "🔧 Fixing lightningcss for WSL..."

# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json

# Reinstalar dependencias
npm install

# Rebuild módulos nativos
npm rebuild lightningcss

echo "✅ Done! Now you can run: npm run dev"
