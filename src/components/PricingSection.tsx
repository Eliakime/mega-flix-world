import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Smartphone, Crown, Gift, Clock } from 'lucide-react';
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
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Background decoration - Responsive */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 lg:w-96 h-32 sm:h-48 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-white">Un prix révolutionnaire.</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Tout inclus à vie.
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
            Fini les abonnements multiples qui vident votre portefeuille chaque mois
          </p>
        </motion.div>

        {/* Comparaison des coûts - Améliorée et responsive */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Avant - Design amélioré */}
          <div className="relative bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-red-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-500/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 flex items-center space-x-2">
                  <span className="text-red-400 text-xl">❌</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400">Avant Cine +</h3>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "Netflix", price: "8,000 FCFA/mois" },
                  { name: "Canal+", price: "15,000 FCFA/mois" },
                  { name: "beIN Sports", price: "12,000 FCFA/mois" },
                  { name: "Prime Video", price: "5,000 FCFA/mois" }
                ].map((service, index) => (
                  <motion.div 
                    key={service.name}
                    className="flex justify-between items-center text-white bg-red-900/10 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm sm:text-base">{service.name}</span>
                    <span className="text-red-400 font-bold text-sm sm:text-base">{service.price}</span>
                  </motion.div>
                ))}
                
                <div className="border-t border-red-500/30 pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
                    <span className="text-white">Total par mois :</span>
                    <span className="text-red-400">40,000 FCFA</span>
                  </div>
                  <div className="text-center text-red-300 text-sm sm:text-base mt-2 bg-red-900/20 rounded-lg p-2">
                    <span className="text-xl sm:text-2xl">😱</span> 480,000 FCFA par an
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Après - Design amélioré */}
          <div className="relative bg-gradient-to-br from-green-900/20 via-green-800/15 to-green-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-500/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2 flex items-center space-x-2">
                  <span className="text-green-400 text-xl">✅</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">Avec Cine +</h3>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "5000+ chaînes TV", status: "Inclus" },
                  { name: "Films & Séries", status: "Inclus" },
                  { name: "Sport en direct", status: "Inclus" },
                  { name: "Mangas & Animés", status: "Inclus" }
                ].map((service, index) => (
                  <motion.div 
                    key={service.name}
                    className="flex justify-between items-center text-white bg-green-900/10 rounded-lg p-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm sm:text-base">{service.name}</span>
                    <span className="text-green-400 font-bold text-sm sm:text-base">{service.status}</span>
                  </motion.div>
                ))}
                
                <div className="border-t border-green-500/30 pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
                    <span className="text-white">Paiement unique :</span>
                    <span className="text-green-400">5,000 FCFA</span>
                  </div>
                  <div className="text-center text-green-300 text-sm sm:text-base mt-2 bg-green-900/20 rounded-lg p-2">
                    <span className="text-xl sm:text-2xl">🎉</span> Économisez 475,000 FCFA par an !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Offre principale - Design entièrement repensé */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-12 border-2 border-primary/50 shadow-2xl overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Effets de fond animés */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            
            {/* Badge populaire amélioré */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
              <motion.div 
                className="bg-gradient-to-r from-primary to-secondary px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full flex items-center space-x-2 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(255,215,0,0.3)", "0 0 40px rgba(255,215,0,0.6)", "0 0 20px rgba(255,215,0,0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                <span className="text-black font-bold text-xs sm:text-sm lg:text-base">OFFRE LIMITÉE</span>
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              </motion.div>
            </div>

            <div className="relative z-10 pt-8 sm:pt-10">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-4 sm:px-6 py-2 border border-primary/30">
                    <h3 className="cinema-font text-2xl sm:text-3xl lg:text-4xl font-bold text-white flex items-center space-x-2">
                      <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      <span>Cine + Premium</span>
                    </h3>
                  </div>
                </div>
                
                <div className="mb-6 sm:mb-8">
                  {/* Prix barré et économie */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
                    <span className="text-gray-400 line-through text-xl sm:text-2xl lg:text-3xl">480,000 FCFA/an</span>
                    <motion.span 
                      className="bg-gradient-to-r from-secondary to-primary text-white px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base lg:text-lg font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ÉCONOMISEZ 99%
                    </motion.span>
                  </div>
                  
                  {/* Prix principal */}
                  <motion.div 
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-primary bg-clip-text text-transparent mb-2 sm:mb-4"
                    animate={{ 
                      textShadow: ["0 0 30px rgba(255,215,0,0.5)", "0 0 60px rgba(255,215,0,0.8)", "0 0 30px rgba(255,215,0,0.5)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    5,000
                  </motion.div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2">FCFA</div>
                  <div className="text-gray-400 text-base sm:text-lg lg:text-xl">Paiement unique • À vie • Sans limite</div>
                </div>

                {/* Garanties - Design amélioré et responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
                  {[
                    { icon: Shield, text: "Paiement sécurisé", color: "green" },
                    { icon: Clock, text: "Installation 5min", color: "red" },
                    { icon: Smartphone, text: "Multi-appareils", color: "white" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-center space-x-2 sm:space-x-3 bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-xl p-3 sm:p-4 hover:bg-${item.color}-500/20 transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <item.icon className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-${item.color}-400`} />
                      <span className={`text-${item.color}-400 font-semibold text-xs sm:text-sm lg:text-base`}>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Avantages - Design amélioré et responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4 bg-white/5 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black font-bold" />
                    </div>
                    <span className="text-white text-sm sm:text-base lg:text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section - Améliorée */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://www.pay.moneyfusion.net/abonnement-chaines-sportives-et-de-divertissement-_1750202328077/" target="_blank" rel="noopener noreferrer">
  <Button 
    size="lg"
    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-6 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-base sm:text-xl lg:text-2xl rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl w-full sm:w-auto"
  >
    <span className="flex items-center space-x-2">
      <span>🚀</span>
      <span className="hidden sm:inline">Obtenir Cine + maintenant - 5,000 FCFA</span>
      <span className="sm:hidden">Obtenir Cine + 5,000 FCFA</span>
    </span>
  </Button>
</a>
                </motion.div>
                
                <div className="text-gray-400 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 space-y-2">
                  <p>💳 Mobile Money • Orange Money • Wave • Moov Money</p>
                  <p>🔒 Paiement 100% sécurisé • Support 24/7</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;