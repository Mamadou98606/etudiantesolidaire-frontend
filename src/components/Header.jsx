import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

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

export default function Header({ navigationItems, isAuthenticated, setIsAuthenticated }) {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Etudiant Solidaire</span>
      </Link>

      {/* Navigation pour les grands écrans */}
      <nav className="hidden md:flex items-center gap-6">
        {navigationItems.slice(1, navigationItems.length - 1).map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              isActive ? "text-secondary font-bold" : "hover:text-secondary"
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Bouton Prendre RDV bien visible */}
        {navigationItems.length > 0 && (
          <NavLink to={navigationItems[navigationItems.length - 1].href}>
            <Button variant="secondary" className="ml-4">
              {navigationItems[navigationItems.length - 1].name}
            </Button>
          </NavLink>
        )}
      </nav>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/espace-perso">Mon Espace</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>
                Déconnexion
              </DropdownMenuItem>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-medium hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
