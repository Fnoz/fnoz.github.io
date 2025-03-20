#!/bin/bash

echo "🚀 Setting up INII.tech static website..."

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p static-site/public/fonts/Ubuntu
mkdir -p static-site/public/avatar

# Copy HTML, CSS, and JS files
echo "📄 Copying website files..."
cp index.html static-site/
cp styles.css static-site/
cp script.js static-site/
cp README.md static-site/

# Copy favicon if it exists
if [ -f "src/app/favicon.ico" ]; then
  cp src/app/favicon.ico static-site/public/
  echo "  ✅ Copied favicon.ico"
fi

# Copy fonts if they exist
if [ -d "public/fonts/Ubuntu" ]; then
  cp public/fonts/Ubuntu/*.ttf static-site/public/fonts/Ubuntu/
  echo "  ✅ Copied Ubuntu fonts"
fi

# Copy images
for img in colorcard.png iframe.png logo.png menuai.png progress.png file.svg globe.svg next.svg window.svg; do
  if [ -f "public/$img" ]; then
    cp "public/$img" static-site/public/
    echo "  ✅ Copied $img"
  fi
done

# Copy avatar images if they exist
if [ -d "public/avatar" ]; then
  for avatar in public/avatar/*.jpg; do
    if [ -f "$avatar" ]; then
      cp "$avatar" static-site/public/avatar/
      echo "  ✅ Copied $(basename $avatar)"
    fi
  done
fi

# Copy manifest.json if it exists
if [ -f "public/manifest.json" ]; then
  cp public/manifest.json static-site/public/
  echo "  ✅ Copied manifest.json"
fi

echo "🎉 Setup complete! Your static website is ready in the 'static-site' directory."
echo "   Open static-site/index.html in your browser to view it."
echo ""
echo "   💡 Note: If you see any color issues, make sure your browser supports the CSS variable notation"
echo "      or use the fallback color classes that have been added in the latest version." 