
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  "5000+ chaînes TV en direct",
  "Tous les sports en live (beIN, RMC, Eurosport...)",
  "Films et séries récents (Netflix, Prime, Canal+...)",
  "Dessins animés pour enfants",
  "Compatible tous appareils (TV, mobile, PC...)",
  "Aucun abonnement mensuel",
  "Aucune inscription requise",
  "Pas de publicités intrusives",
  "Mises à jour automatiques",
  "Support technique inclus"
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Un seul prix.</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Tout inclus.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fini les abonnements multiples qui coûtent une fortune chaque mois
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border-2 border-primary/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full flex items-center space-x-2">
                <Star className="h-4 w-4 text-black" />
                <span className="text-black font-bold text-sm">OFFRE POPULAIRE</span>
                <Star className="h-4 w-4 text-black" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Pack IPTV Complet</h3>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <span className="text-gray-400 line-through text-2xl">25,000 FCFA/mois</span>
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                    ÉCONOMISEZ 95%
                  </span>
                </div>
                
                <div className="text-6xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  5,000
                </div>
                <div className="text-2xl text-white font-semibold">FCFA</div>
                <div className="text-gray-400 text-lg">Paiement unique - À vie</div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-8">
                <p className="text-green-400 font-semibold">
                  ✅ Pas de paiement mensuel • Pas d'inscription • Pas de publicités
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-black font-bold" />
                  </div>
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Acheter maintenant - 5,000 FCFA
              </Button>
              
              <p className="text-gray-400 text-sm mt-4">
                Paiement sécurisé • Mobile Money accepté • Support 24/7
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-bold text-white mb-2">Économies garanties</h4>
              <p className="text-gray-400 text-sm">Remplace 5+ abonnements streaming</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-white mb-2">Installation rapide</h4>
              <p className="text-gray-400 text-sm">Prêt en 5 minutes sur tous vos appareils</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold text-white mb-2">100% sécurisé</h4>
              <p className="text-gray-400 text-sm">Paiement protégé et données chiffrées</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
