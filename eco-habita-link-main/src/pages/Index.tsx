import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WaterSection from "@/components/WaterSection";
import WasteSection from "@/components/WasteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eco-H2O Gabon | Eau Potable & Collecte de Déchets à Libreville</title>
        <meta name="description" content="Commandez de l'eau potable et abonnez-vous à notre service de collecte de déchets au Gabon. Livraison rapide à Libreville et Port-Gentil. Paiement Mobile Money." />
        <meta name="keywords" content="eau potable gabon, livraison eau libreville, collecte déchets gabon, eco h2o, bidon eau gabon" />
      </Helmet>

      <div className="min-h-screen bg-background"> 
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WaterSection />
          <WasteSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
