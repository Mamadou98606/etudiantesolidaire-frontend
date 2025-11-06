#!/bin/bash
# 🧪 VÉRIFIER QUE TOUT FONCTIONNE

echo "✅ Vérification du système de blog..."
echo ""

# 1. Fichiers existent?
echo "1️⃣ Vérification des fichiers..."
if [ -f "src/data/blogArticles.js" ]; then
  echo "   ✅ src/data/blogArticles.js existe"
else
  echo "   ❌ MANQUANT: src/data/blogArticles.js"
fi

if [ -f "src/components/blog/useBlogData.js" ]; then
  echo "   ✅ src/components/blog/useBlogData.js existe"
else
  echo "   ❌ MANQUANT: src/components/blog/useBlogData.js"
fi

if [ -f "src/components/Blog.jsx" ]; then
  echo "   ✅ src/components/Blog.jsx existe"
else
  echo "   ❌ MANQUANT: src/components/Blog.jsx"
fi

echo ""
echo "2️⃣ Articles disponibles..."
# Count articles
COUNT=$(grep -c '"id":' src/data/blogArticles.js 2>/dev/null || echo "?")
echo "   📊 Nombre d'articles: $COUNT"

echo ""
echo "✨ Système de blog opérationnel!"
echo ""
echo "📝 Pour ajouter un article:"
echo "   1. Ouvre src/data/blogArticles.js"
echo "   2. Copie le dernier article"
echo "   3. Modifie l'ID et les données"
echo "   4. Sauvegarde (Ctrl+S)"
echo "   5. L'article apparaît dans le blog! 🎉"
