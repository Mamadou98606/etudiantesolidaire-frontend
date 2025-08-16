import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Upload, 
  Bold, 
  Italic, 
  List, 
  Link,
  Image,
  Send
} from 'lucide-react'

function BlogEditor({ onBack, onSave, editingPost = null }) {
  const [formData, setFormData] = useState({
    title: editingPost?.title || '',
    excerpt: editingPost?.excerpt || '',
    content: editingPost?.content || '',
    category: editingPost?.category || 'Orientation',
    tags: editingPost?.tags?.join(', ') || '',
    image: editingPost?.image || '📝'
  })

  const [isPreview, setIsPreview] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const categories = [
    'Orientation',
    'Démarches',
    'Vie étudiante',
    'Emploi',
    'Financement',
    'Culture'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Le titre et le contenu sont obligatoires')
      return
    }

    setIsSaving(true)
    
    try {
      const articleData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: 'Équipe etudiantesolidaire',
        date: editingPost?.date || new Date().toISOString().split('T')[0],
        views: editingPost?.views || 0,
        comments: editingPost?.comments || 0,
        readTime: Math.ceil(formData.content.length / 1000) + ' min'
      }

      // Simulation de sauvegarde (à remplacer par un appel API)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (onSave) {
        onSave(articleData)
      }
      
      alert('Article sauvegardé avec succès !')
      
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
      alert('Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublish = async () => {
    await handleSave()
    // Logique de publication
    alert('Article publié avec succès !')
  }

  if (isPreview) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={() => setIsPreview(false)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'édition
            </Button>
            <Badge variant="secondary">Aperçu</Badge>
          </div>

          <article className="space-y-6">
            <header className="space-y-4">
              <Badge variant="secondary">{formData.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                {formData.title || 'Titre de l\'article'}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {formData.excerpt || 'Extrait de l\'article...'}
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="text-lg leading-relaxed whitespace-pre-wrap">
                {formData.content || 'Contenu de l\'article...'}
              </div>
            </div>

            {formData.tags && (
              <div className="flex flex-wrap gap-2">
                {formData.tags.split(',').map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            )}
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Button>
            <h1 className="text-2xl font-bold">
              {editingPost ? 'Modifier l\'article' : 'Nouvel article'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => setIsPreview(true)}>
              <Eye className="h-4 w-4 mr-2" />
              Aperçu
            </Button>
            <Button variant="outline" onClick={handleSave} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
            <Button onClick={handlePublish} disabled={isSaving}>
              <Send className="h-4 w-4 mr-2" />
              Publier
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Éditeur principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Titre */}
            <Card>
              <CardHeader>
                <CardTitle>Titre de l'article</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Saisissez le titre de votre article..."
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="text-lg"
                />
              </CardContent>
            </Card>

            {/* Extrait */}
            <Card>
              <CardHeader>
                <CardTitle>Extrait</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Rédigez un court extrait qui donnera envie de lire votre article..."
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Barre d'outils */}
            <Card>
              <CardContent className="py-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contenu */}
            <Card>
              <CardHeader>
                <CardTitle>Contenu de l'article</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Rédigez le contenu de votre article ici..."
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  rows={20}
                  className="font-mono"
                />
                <div className="mt-2 text-sm text-muted-foreground">
                  {formData.content.length} caractères • ~{Math.ceil(formData.content.length / 1000)} min de lecture
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Paramètres de publication */}
            <Card>
              <CardHeader>
                <CardTitle>Publication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Statut</label>
                  <Badge variant="secondary">Brouillon</Badge>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Visibilité</label>
                  <select className="w-full p-2 border rounded">
                    <option>Public</option>
                    <option>Privé</option>
                    <option>Protégé par mot de passe</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Date de publication</label>
                  <Input type="datetime-local" />
                </div>
              </CardContent>
            </Card>

            {/* Catégorie */}
            <Card>
              <CardHeader>
                <CardTitle>Catégorie</CardTitle>
              </CardHeader>
              <CardContent>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Mots-clés</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Séparez les mots-clés par des virgules"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                />
                <div className="mt-2 text-sm text-muted-foreground">
                  Exemple : orientation, parcoursup, études
                </div>
              </CardContent>
            </Card>

            {/* Image de couverture */}
            <Card>
              <CardHeader>
                <CardTitle>Image de couverture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl mb-4">{formData.image}</div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Changer l'emoji
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SEO */}
            <Card>
              <CardHeader>
                <CardTitle>Référencement (SEO)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Meta description</label>
                  <Textarea 
                    placeholder="Description pour les moteurs de recherche..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Mots-clés SEO</label>
                  <Input placeholder="mots-clés, séparés, par, virgules" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogEditor

