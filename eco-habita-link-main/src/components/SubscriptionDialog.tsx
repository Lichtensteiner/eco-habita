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
import { Recycle, MapPin, Phone, User, Loader2, LogIn, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import LoginDialog from "./LoginDialog";

interface SubscriptionDialogProps {
  trigger?: React.ReactNode;
  plan: { name: string; price: string; frequency: string };
}

const SubscriptionDialog = ({ trigger, plan }: SubscriptionDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, profile } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const priceNumber = parseFloat(plan.price.replace(/,/g, ''));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    try {
      await supabase.from('waste_subscriptions').insert({
        user_id: user.id,
        subscription_type: plan.name,
        frequency: plan.frequency,
        price: priceNumber,
        address: formData.address,
        phone: formData.phone,
        status: 'active',
      });

      await supabase.from('notifications').insert({
        user_id: user.id,
        title: 'Abonnement activé!',
        message: `Votre abonnement ${plan.name} a été activé avec succès.`,
        type: 'success',
      });

      toast({ title: "Abonnement activé!", description: `Formule ${plan.name} souscrite.` });
      setIsOpen(false);
    } catch {
      toast({ title: "Erreur", description: "Impossible de souscrire.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-eco flex items-center justify-center">
                <LogIn className="w-5 h-5 text-secondary-foreground" />
              </div>
              Connexion requise
            </DialogTitle>
            <DialogDescription>Connectez-vous pour souscrire à un abonnement.</DialogDescription>
          </DialogHeader>
          <LoginDialog trigger={<Button variant="hero" className="w-full gap-2"><LogIn className="w-4 h-4" />Se connecter</Button>} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (open && profile) {
        setFormData({ name: profile.full_name || '', phone: profile.phone || '', address: profile.address || '' });
      }
    }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-eco flex items-center justify-center">
              <Recycle className="w-5 h-5 text-secondary-foreground" />
            </div>
            Abonnement {plan.name}
          </DialogTitle>
          <DialogDescription>{plan.price} FCFA{plan.frequency}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2"><User className="w-4 h-4 text-muted-foreground" />Nom</Label>
            <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-11" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2"><Phone className="w-4 h-4 text-muted-foreground" />Téléphone</Label>
            <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-11" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2"><MapPin className="w-4 h-4 text-muted-foreground" />Adresse</Label>
            <Input value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required className="h-11" />
          </div>
          <Button type="submit" variant="eco" className="w-full h-11" disabled={isLoading}>
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4" />Confirmer</>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionDialog;
