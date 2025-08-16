import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Calendar, User, Eye, MessageSquare, Share2, Heart } from 'lucide-react'

export default function BlogPost({ post, onBack }) {
  const [expanded, setExpanded] = useState(false)

  if (!post) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Button>
          <Card className="text-center py-12">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Article non trouvé</h2>
              <p className="text-muted-foreground">
                L'article que vous recherchez n'existe pas ou a été supprimé.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const hasSections = Array.isArray(post.sections) && post.sections.length > 0
  const sectionsToShow = hasSections
    ? (expanded ? post.sections : post.sections.slice(0, 2))
    : []

  // Fallback si pas de sections: on “plie” le contenu long par paragraphes
  const paragraphs = !hasSections
    ? String(post.content || '').split(/\n{2,}/)
    : []
  const showFoldButton = !hasSections && paragraphs.length > 3
  const paragraphsToShow = expanded ? paragraphs : paragraphs.slice(0, 3)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="outline" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au blog
        </Button>

        <article className="space-y-6">
          <header className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {(post.readTime || '—')} de lecture
              </span>
            </div>

            <h1 className="text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between py-4 border-y">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{post.author || 'Équipe etudiantesolidaire'}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date
                        ? new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
                        : '—'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                {typeof post.views === 'number' && (
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views}
                  </span>
                )}
                {typeof post.comments === 'number' && (
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {post.comments}
                  </span>
                )}
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Partager
                </Button>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {hasSections ? (
              <div className="space-y-8">
                {sectionsToShow.map((sec, i) => (
                  <section key={i} className="space-y-3">
                    {sec.heading && <h2 className="text-2xl font-bold">{sec.heading}</h2>}
                    {Array.isArray(sec.paragraphs) && sec.paragraphs.map((p, j) => (
                      <p key={j} className="leading-relaxed whitespace-pre-wrap">{p}</p>
                    ))}
                    {Array.isArray(sec.bullets) && sec.bullets.length > 0 && (
                      <ul className="list-disc pl-6">
                        {sec.bullets.map((li, k) => <li key={k}>{li}</li>)}
                      </ul>
                    )}
                  </section>
                ))}

                {!expanded && post.sections.length > 2 && (
                  <div className="pt-2">
                    <Button onClick={() => setExpanded(true)}>
                      Lire la suite
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {paragraphsToShow.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed whitespace-pre-wrap">{para}</p>
                ))}
                {!expanded && showFoldButton && (
                  <Button onClick={() => setExpanded(true)}>
                    Lire la suite
                  </Button>
                )}
              </div>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 py-6">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between py-6 border-t">
            <Button variant="outline" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>J'aime cet article</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Partager
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
