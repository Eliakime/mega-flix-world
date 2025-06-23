
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  "5000+ chaînes TV en direct",
  "Films et séries récents premium",
  "Sport en live (beIN, RMC, Eurosport...)",
  "Mangas et animés exclusifs",
  "Compatible tous appareils",
  "Aucun abonnement mensuel",
  "Aucune inscription requise",
  "Mises à jour automatiques",
  "Support technique 24/7",
  "Qualité HD/4K garantie"
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Un prix révolutionnaire.</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Tout inclus à vie.
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Fini les abonnements multiples qui vident votre portefeuille chaque mois
          </p>
        </motion.div>

        {/* Comparaison des coûts */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Avant */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-3xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">❌ Avant Cine +</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-white">
                <span>Netflix</span>
                <span className="text-red-400 font-bold">8,000 FCFA/mois</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>Canal+</span>
                <span className="text-red-400 font-bold">15,000 FCFA/mois</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>beIN Sports</span>
                <span className="text-red-400 font-bold">12,000 FCFA/mois</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>Prime Video</span>
                <span className="text-red-400 font-bold">5,000 FCFA/mois</span>
              </div>
              <hr className="border-red-500/30" />
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-white">Total par mois :</span>
                <span className="text-red-400">40,000 FCFA</span>
              </div>
              <div className="text-center text-red-300 text-sm">
                480,000 FCFA par an 😱
              </div>
            </div>
          </div>

          {/* Après */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-3xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">✅ Avec Cine +</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-white">
                <span>5000+ chaînes TV</span>
                <span className="text-green-400 font-bold">Inclus</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>Films & Séries</span>
                <span className="text-green-400 font-bold">Inclus</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>Sport en direct</span>
                <span className="text-green-400 font-bold">Inclus</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span>Mangas & Animés</span>
                <span className="text-green-400 font-bold">Inclus</span>
              </div>
              <hr className="border-green-500/30" />
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-white">Paiement unique :</span>
                <span className="text-green-400">5,000 FCFA</span>
              </div>
              <div className="text-center text-green-300 text-sm">
                Économisez 475,000 FCFA par an ! 🎉
              </div>
            </div>
          </div>
        </motion.div>

        {/* Offre principale */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border-2 border-primary/50 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full flex items-center space-x-2">
                <Star className="h-5 w-5 text-black" />
                <span className="text-black font-bold">OFFRE LIMITÉE</span>
                <Star className="h-5 w-5 text-black" />
              </div>
            </div>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="cinema-font text-4xl font-bold text-white mb-6">Cine + Premium</h3>
                
                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-6 mb-4">
                    <span className="text-gray-400 line-through text-3xl">480,000 FCFA/an</span>
                    <span className="bg-secondary text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">
                      ÉCONOMISEZ 99%
                    </span>
                  </div>
                  
                  <div className="text-7xl md:text-8xl font-black gradient-primary bg-clip-text text-transparent mb-4 neon-glow">
                    5,000
                  </div>
                  <div className="text-3xl text-white font-bold mb-2">FCFA</div>
                  <div className="text-gray-400 text-xl">Paiement unique • À vie • Sans limite</div>
                </div>

                {/* Garanties */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center justify-center space-x-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <Shield className="h-6 w-6 text-green-400" />
                    <span className="text-green-400 font-semibold">Paiement sécurisé</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <Zap className="h-6 w-6 text-blue-400" />
                    <span className="text-blue-400 font-semibold">Installation 5min</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                    <Smartphone className="h-6 w-6 text-purple-400" />
                    <span className="text-purple-400 font-semibold">Multi-appareils</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-black font-bold" />
                    </div>
                    <span className="text-white text-lg">{benefit}</span>
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
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-16 py-8 text-2xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl neon-glow"
                >
                  🚀 Obtenir Cine + maintenant - 5,000 FCFA
                </Button>
                
                <p className="text-gray-400 text-lg mt-6">
                  💳 Mobile Money • Orange Money • Wave • Moov Money<br />
                  🔒 Paiement 100% sécurisé • Support 24/7
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
