import { Droplets, Recycle, Truck, Clock, Shield, Smartphone } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Livraison d'eau",
    description: "Bidons de 20L et citernes livrés à domicile en moins de 2h.",
    color: "water",
    gradient: "bg-gradient-water",
  },
  {
    icon: Recycle,
    title: "Collecte déchets",
    description: "Abonnez-vous et on passe récupérer vos déchets chaque semaine.",
    color: "eco",
    gradient: "bg-gradient-eco",
  },
  {
    icon: Truck,
    title: "Suivi en temps réel",
    description: "Suivez votre livreur en direct sur la carte interactive.",
    color: "earth",
    gradient: "bg-earth",
  },
  {
    icon: Clock,
    title: "Service 24/7",
    description: "Commandez à tout moment, nous sommes toujours disponibles.",
    color: "water",
    gradient: "bg-gradient-water",
  },
  {
    icon: Shield,
    title: "Eau certifiée",
    description: "Eau potable analysée et certifiée conforme aux normes OMS.",
    color: "eco",
    gradient: "bg-gradient-eco",
  },
  {
    icon: Smartphone,
    title: "Paiement facile",
    description: "Payez par Airtel Money ou Moov Money en toute sécurité.",
    color: "earth",
    gradient: "bg-earth",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-water-light text-water text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tout ce dont vous avez besoin, <span className="text-gradient-hero">simplifié</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme complète pour gérer votre approvisionnement en eau et la gestion de vos déchets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
