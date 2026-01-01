import { Button } from "@/components/ui/button";
import { Droplets, Recycle, ArrowRight, MapPin } from "lucide-react";
import OrderDialog from "./OrderDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-water-light via-background to-eco-light opacity-60" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-water/10 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 right-20 w-14 h-14 rounded-full bg-eco/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-earth/10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50 mb-8 animate-slide-up">
            <MapPin className="w-4 h-4 text-earth" />
            <span className="text-sm font-medium text-muted-foreground">Disponible à Libreville & Port-Gentil</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">L'eau potable et la </span>
            <span className="text-gradient-hero">collecte de déchets</span>
            <span className="text-foreground"> à portée de main</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Commandez vos bidons d'eau, réservez une citerne ou abonnez-vous à notre service de ramassage de déchets. Simple, rapide et écologique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <OrderDialog 
              trigger={
                <Button variant="hero" size="xl" className="group">
                  <Droplets className="w-5 h-5" />
                  Commander de l'eau
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
            <Button variant="glass" size="xl" className="group">
              <Recycle className="w-5 h-5 text-eco" />
              Abonnement déchets
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "2,500+", label: "Clients satisfaits" },
              { value: "15,000", label: "Litres livrés/jour" },
              { value: "98%", label: "Livraisons à temps" },
              { value: "24/7", label: "Service disponible" },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-2xl bg-card shadow-soft border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-gradient-hero">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
