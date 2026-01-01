import { Button } from "@/components/ui/button";
import { Recycle, Check, Calendar, Bell, ArrowRight } from "lucide-react";
import SubscriptionDialog from "./SubscriptionDialog";
const wastePlans = [
  {
    name: "Hebdomadaire",
    price: "8,000",
    frequency: "/mois",
    features: ["1 passage par semaine", "Sacs fournis", "Rappel SMS"],
    icon: Calendar,
  },
  {
    name: "Bi-hebdomadaire",
    price: "15,000",
    frequency: "/mois",
    features: ["2 passages par semaine", "Sacs fournis", "Rappel SMS", "Tri sélectif inclus"],
    icon: Recycle,
    popular: true,
  },
  {
    name: "Premium",
    price: "25,000",
    frequency: "/mois",
    features: ["Passages illimités", "Sacs premium", "Notification temps réel", "Tri sélectif", "Support prioritaire"],
    icon: Bell,
  },
];

const WasteSection = () => {
  return (
    <section id="dechets" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-eco flex items-center justify-center shadow-soft">
                <Recycle className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-semibold text-eco uppercase tracking-wider">Module Déchets</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Abonnez-vous à la <span className="text-gradient-eco">collecte de déchets</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Un service régulier et fiable pour garder votre quartier propre et contribuer à un Gabon plus vert.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {wastePlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-2xl bg-card border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-eco shadow-elevated scale-105 md:scale-110"
                  : "border-border/50 shadow-card hover:shadow-elevated"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-eco text-secondary-foreground text-sm font-semibold rounded-full shadow-soft">
                  Recommandé
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-eco-light flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-eco" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-gradient-eco">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">FCFA{plan.frequency}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-eco-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-eco" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <SubscriptionDialog
                plan={{ name: plan.name, price: plan.price, frequency: plan.frequency }}
                trigger={
                  <Button
                    variant={plan.popular ? "eco" : "outline"}
                    className="w-full group"
                    size="lg"
                  >
                    S'abonner
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-eco-light/50 border border-eco/20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">Comment ça fonctionne ?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inscrivez-vous", desc: "Créez votre compte en 2 minutes" },
              { step: "2", title: "Choisissez", desc: "Sélectionnez votre formule" },
              { step: "3", title: "Programmez", desc: "Définissez vos jours de passage" },
              { step: "4", title: "Relaxez", desc: "On s'occupe de tout !" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-eco text-secondary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteSection;
