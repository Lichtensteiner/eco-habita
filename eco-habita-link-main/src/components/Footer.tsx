import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Eco-H2O</span>
                <span className="text-xs opacity-70 font-medium">Gabon</span>
              </div>
            </Link>
            <p className="text-sm opacity-70 mb-6">
              Votre partenaire pour l'eau potable et la gestion des déchets au Gabon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#eau" className="hover:opacity-100 transition-opacity">Livraison d'eau</a></li>
              <li><a href="#dechets" className="hover:opacity-100 transition-opacity">Collecte de déchets</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Abonnements</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Entreprises</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Centre d'aide</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 opacity-70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+241 077-022-306 / 062-641-120</span>
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@ecoh2o-gabon.com</span>
              </li>
              <li className="flex items-start gap-3 opacity-70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Libreville, Gabon<br />Quartier Nzeng-Ayong</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bouton */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© 2024 Eco-H2O Gabon. Tous droits réservés.</p>
          <p>Développé par <span className="font-semibold">Ludo_Dev Lichtensteiner</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
