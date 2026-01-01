import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Droplets, 
  MapPin, 
  Phone, 
  User, 
  ShoppingCart, 
  Loader2,
  Package,
  Truck,
  LogIn
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import LoginDialog from "./LoginDialog";

interface OrderDialogProps {
  trigger?: React.ReactNode;
}

const products = [
  { id: "bidon-20l", name: "Bidon 20L", price: 1500, icon: "💧" },
  { id: "bidon-10l", name: "Bidon 10L", price: 800, icon: "💧" },
  { id: "pack-6", name: "Pack 6 bouteilles 1.5L", price: 2000, icon: "📦" },
  { id: "citerne-1000l", name: "Citerne 1000L", price: 25000, icon: "🚛" },
  { id: "citerne-5000l", name: "Citerne 5000L", price: 100000, icon: "🚛" },
];

const OrderDialog = ({ trigger }: OrderDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, profile } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    product: "",
    quantity: "1",
    notes: "",
  });

  // Pre-fill form when user has profile data
  const getInitialData = () => {
    if (profile) {
      setFormData((prev) => ({
        ...prev,
        name: profile.full_name || prev.name,
        phone: profile.phone || prev.phone,
        address: profile.address || prev.address,
      }));
    }
  };

  const selectedProduct = products.find((p) => p.id === formData.product);
  const total = selectedProduct 
    ? selectedProduct.price * parseInt(formData.quantity || "1") 
    : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour passer une commande",
        variant: "destructive",
      });
      return;
    }

    if (!selectedProduct) return;

    setIsLoading(true);

    try {
      const { error } = await supabase.from('water_orders').insert({
        user_id: user.id,
        product: selectedProduct.name,
        quantity: parseInt(formData.quantity),
        unit_price: selectedProduct.price,
        total_price: total,
        delivery_address: formData.address,
        phone: formData.phone,
        notes: formData.notes || null,
        status: 'pending',
      });

      if (error) throw error;

      // Create notification for user
      await supabase.from('notifications').insert({
        user_id: user.id,
        title: 'Commande confirmée!',
        message: `Votre commande de ${selectedProduct.name} x${formData.quantity} a été enregistrée. Livraison sous 24h.`,
        type: 'success',
      });

      toast({
        title: "Commande envoyée! 🎉",
        description: `Votre commande de ${selectedProduct.name} sera livrée sous 24h`,
      });
      setIsOpen(false);
      setFormData({ name: "", phone: "", address: "", product: "", quantity: "1", notes: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de passer la commande. Réessayez.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // If user is not logged in, show login prompt
  if (!user) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {trigger || (
            <Button variant="hero" size="sm" className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              Commander
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center">
                <LogIn className="w-5 h-5 text-primary-foreground" />
              </div>
              Connexion requise
            </DialogTitle>
            <DialogDescription>
              Connectez-vous ou créez un compte pour passer une commande et suivre vos livraisons en temps réel.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <LoginDialog 
              trigger={
                <Button variant="hero" className="w-full gap-2">
                  <LogIn className="w-4 h-4" />
                  Se connecter / S'inscrire
                </Button>
              }
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (open) getInitialData();
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Commander
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            Commander de l'eau
          </DialogTitle>
          <DialogDescription>
            Remplissez le formulaire pour passer votre commande. Livraison en 24h.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="order-name" className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                Nom complet
              </Label>
              <Input
                id="order-name"
                type="text"
                placeholder="Jean Dupont"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                Téléphone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+241 XX XX XX XX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              Adresse de livraison
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="Quartier, Rue, Repère..."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              className="h-11"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Package className="w-4 h-4 text-muted-foreground" />
                Produit
              </Label>
              <Select
                value={formData.product}
                onValueChange={(value) => setFormData({ ...formData, product: value })}
                required
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Choisir un produit" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      <span className="flex items-center gap-2">
                        <span>{product.icon}</span>
                        <span>{product.name}</span>
                        <span className="text-muted-foreground">
                          - {product.price.toLocaleString()} FCFA
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity" className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-muted-foreground" />
                Quantité
              </Label>
              <Select
                value={formData.quantity}
                onValueChange={(value) => setFormData({ ...formData, quantity: value })}
              >
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 10, 20].map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty} {qty === 1 ? "unité" : "unités"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedProduct && (
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total à payer:</span>
                <span className="text-2xl font-bold text-gradient-hero">
                  {total.toLocaleString()} FCFA
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Paiement à la livraison (Espèces, Mobile Money, Airtel Money)
              </p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12" 
            variant="hero"
            disabled={isLoading || !formData.product}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                Confirmer la commande
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
