import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X, LogIn, ShoppingCart, User, Bell, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginDialog from "./LoginDialog";
import OrderDialog from "./OrderDialog";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'Utilisateur';
  const initials = displayName.charAt(0).toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-foreground">Eco-H2O</span>
              <span className="text-xs text-muted-foreground font-medium">Gabon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#eau" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Eau
            </a>
            <a href="#dechets" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Déchets
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <>
                    <OrderDialog 
                      trigger={
                        <Button variant="hero" size="sm" className="gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Commander
                        </Button>
                      }
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-2 pl-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-sm font-bold">
                            {initials}
                          </div>
                          <span className="max-w-[120px] truncate">{displayName}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem onClick={() => navigate('/profil')} className="gap-2 cursor-pointer">
                          <User className="w-4 h-4" />
                          Mon profil
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/profil')} className="gap-2 cursor-pointer">
                          <Bell className="w-4 h-4" />
                          Notifications
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleSignOut} className="gap-2 cursor-pointer text-destructive">
                          <LogOut className="w-4 h-4" />
                          Déconnexion
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    <LoginDialog 
                      trigger={
                        <Button variant="ghost" size="sm" className="gap-2">
                          <LogIn className="w-4 h-4" />
                          Connexion
                        </Button>
                      } 
                    />
                    <OrderDialog 
                      trigger={
                        <Button variant="hero" size="sm" className="gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Commander
                        </Button>
                      }
                    />
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-4">
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a 
                href="#eau" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Eau
              </a>
              <a 
                href="#dechets" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Déchets
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 px-2 py-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                        {initials}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{displayName}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full gap-2" 
                      onClick={() => { navigate('/profil'); setIsMenuOpen(false); }}
                    >
                      <User className="w-4 h-4" />
                      Mon profil
                    </Button>
                    <OrderDialog 
                      trigger={
                        <Button variant="hero" className="w-full gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Commander
                        </Button>
                      }
                    />
                    <Button 
                      variant="ghost" 
                      className="w-full gap-2 text-destructive" 
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4" />
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <LoginDialog 
                      trigger={
                        <Button variant="outline" className="w-full gap-2">
                          <LogIn className="w-4 h-4" />
                          Connexion
                        </Button>
                      }
                    />
                    <OrderDialog 
                      trigger={
                        <Button variant="hero" className="w-full gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Commander
                        </Button>
                      }
                    />
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
