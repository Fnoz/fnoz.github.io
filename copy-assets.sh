#!/bin/bash

# Create necessary directories
mkdir -p public/fonts/Ubuntu
mkdir -p public/avatar

# Check if src/app/favicon.ico exists and copy it
if [ -f "src/app/favicon.ico" ]; then
  cp src/app/favicon.ico public/
  echo "✅ Copied favicon.ico"
fi

# Check for Ubuntu fonts and copy them if they exist
if [ -d "public/fonts/Ubuntu" ]; then
  # Copy Ubuntu fonts directly
  cp -r public/fonts/Ubuntu/*.ttf public/fonts/Ubuntu/
  echo "✅ Copied Ubuntu fonts"
fi

# Check for images and copy them
for img in colorcard.png iframe.png logo.png menuai.png progress.png file.svg globe.svg next.svg window.svg; do
  if [ -f "public/$img" ]; then
    cp "public/$img" public/
    echo "✅ Copied $img"
  fi
done

# Check for avatar images and copy them
if [ -d "public/avatar" ]; then
  cp -r public/avatar/*.jpg public/avatar/
  echo "✅ Copied avatar images"
fi

# Check for manifest.json and copy it
if [ -f "public/manifest.json" ]; then
  cp public/manifest.json public/
  echo "✅ Copied manifest.json"
fi

echo "🎉 All assets have been copied successfully!"
echo "You can now open index.html in your browser to view the static website" 