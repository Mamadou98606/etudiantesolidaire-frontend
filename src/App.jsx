import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import {
  Menu,
  X,
  GraduationCap,
  FileText,
  BookOpen,
  Briefcase,
  Home,
  Calendar,
  User,
  ChevronDown,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight
} from 'lucide-react'
import heroImage from './assets/hero-illustration.png'
import orientationIcon from './assets/orientation-icon.png'
import demarchesIcon from './assets/demarches-icon.png'
import vieEtudianteIcon from './assets/vie-etudiante-icon.png'
import emploiIcon from './assets/emploi-icon.png'
import './App.css'

// Importez TOUS vos composants de page ici
import HomePage from './components/HomePage';
import QuiSommesNous from './components/QuiSommesNous'; // Assurez-vous que ce composant existe
import Orientation from './components/Orientation';
import Demarches from './components/Demarches';
import Etudes from './components/Etudes';
import Travailler from './components/Travailler';
import VivreFrance from './components/VivreFrance';
import UserDashboard from './components/UserDashboard';
import AuthModal from './components/AuthModal';
import Blog from './components/Blog';
import Temoignages from './components/Temoignages';
import PriseRDV from './components/PriseRDV';

// --- Composants d'icônes (gardés pour la structure) ---
function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
// --- Fin des composants d'icônes ---


// --- Le composant principal de l'application ---
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Liens de navigation principaux
  const navigationItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
    { name: 'Orientation', href: '/orientation' },
    { name: 'Démarches', href: '/demarches' },
    { name: 'Études', href: '/etudes' },
    { name: 'Travailler', href: '/travailler' },
    { name: 'Vivre en France', href: '/vivre-en-france' },
    { name: 'Blog', href: '/blog' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'Prendre RDV', href: '/prendre-rdv' },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Etudiant Solidaire</span>
          </Link>

          {/* Navigation pour les grands écrans */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.slice(1, 7).map((item) => (
              <NavLink key={item.name} to={item.href} className={({ isActive }) => isActive ? "text-secondary font-bold" : "hover:text-secondary"}>
                {item.name}
              </NavLink>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Plus ▼</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navigationItems.slice(7).map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem><Link to="/espace-perso">Mon Espace</Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>Déconnexion</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Connexion</Button>
              </Link>
            )}

            {/* Menu pour les petits écrans (mobile) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-6">
                  {navigationItems.map((item) => (
                    <Link key={item.name} to={item.href} className="font-medium hover:text-primary">{item.name}</Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* --- Zone de contenu principal où les pages sont affichées --- */}
        <main className="flex-1">
          <Routes>
            {/* L'attribut "element" prend le composant à afficher */}
            <Route path="/" element={<HomePage />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/orientation" element={<Orientation />} />
            <Route path="/demarches" element={<Demarches />} />
            <Route path="/etudes" element={<Etudes />} />
            <Route path="/travailler" element={<Travailler />} />
            <Route path="/vivre-en-france" element={<VivreFrance />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/espace-perso" element={<UserDashboard />} />
            <Route path="/login" element={<AuthModal setAuth={setIsAuthenticated} />} />


            {/* Nouvelles routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />

            {/* Vous pouvez ajouter une page 404 ici si vous le souhaitez */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        {/* --- Fin de la zone de contenu --- */}

      </div>
    </Router>
  );
}
