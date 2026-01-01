import { Button } from "@/components/ui/button";
import { Droplets, Check, ArrowRight } from "lucide-react";

const waterOptions = [
  {
    name: "Bidon 20L",
    price: "1,500",
    unit: "FCFA",
    features: ["Eau potable certifiée", "Livraison sous 2h", "Bidon recyclable"],
    popular: false,
  },
  {
    name: "Pack 5 Bidons",
    price: "6,500",
    unit: "FCFA",
    features: ["5 bidons de 20L", "Économisez 500 FCFA", "Livraison gratuite", "Service prioritaire"],
    popular: true,
  },
  {
    name: "Citerne 1000L",
    price: "45,000",
    unit: "FCFA",
    features: ["1000 litres d'eau", "Idéal pour entreprises", "Livraison programmée", "Support dédié"],
    popular: false,
  },
];

const WaterSection = () => {
  return (
    <section id="eau" className="py-20 md:py-32 bg-water-light/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center shadow-soft">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-water uppercase tracking-wider">Module Eau</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Commandez votre eau en <span className="text-gradient-water">quelques clics</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Eau potable de qualité, livrée rapidement à votre domicile ou votre entreprise.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {waterOptions.map((option, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-2xl bg-card border-2 transition-all duration-300 hover:-translate-y-2 ${
                option.popular
                  ? "border-water shadow-elevated scale-105 md:scale-110"
                  : "border-border/50 shadow-card hover:shadow-elevated"
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-water text-primary-foreground text-sm font-semibold rounded-full shadow-soft">
                  Le plus populaire
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{option.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-gradient-water">{option.price}</span>
                  <span className="text-muted-foreground font-medium">{option.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-water-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-water" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={option.popular ? "water" : "outline"}
                className="w-full group"
                size="lg"
              >
                Commander
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterSection;
