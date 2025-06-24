
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen py-32 hero-background overflow-hidden">
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      
      {/* Floating particles */}
      <div className="floating-particles" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cinema-font text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-shadow">
            <span className="text-white">Prêt à transformer</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent neon-glow">
              votre expérience TV ?
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-8 text-shadow">
            Rejoignez des milliers de familles qui ont déjà dit adieu aux abonnements multiples
          </p>
        </motion.div>

        {/* Main CTA Card avec style cinématique */}
        <motion.div 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-primary/30 shadow-2xl overflow-hidden relative">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-2000" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 text-shadow cinema-font">
                  Tout le divertissement du monde pour seulement 
                  <span className="gradient-primary bg-clip-text text-transparent neon-glow"> 5,000 FCFA</span>
                </h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center neon-glow">
                      <Zap className="h-6 w-6 text-black" />
                    </div>
                    <span className="text-gray-200 text-xl">Installation en 5 minutes</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-200 text-xl">Garantie satisfait ou remboursé 7 jours</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center neon-glow">
                      <Heart className="h-6 w-6 text-black" />
                    </div>
                    <span className="text-gray-200 text-xl">Support technique 24/7 inclus</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg"
                    onClick={scrollToPricing}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-black px-12 py-8 text-2xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl neon-glow cinema-font"
                  >
                    <Download className="mr-3 h-8 w-8" />
                    Profiter de l'offre maintenant
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-12 py-8 text-xl rounded-2xl transition-all duration-300 backdrop-blur-sm bg-black/20 font-bold"
                  >
                    Voir la démo gratuite
                  </Button>
                </div>
              </div>

              <div className="relative">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-8xl animate-pulse">📺</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-600/50 rounded w-3/4 backdrop-blur-sm"></div>
                      <div className="h-4 bg-gray-600/50 rounded w-1/2 backdrop-blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements with enhanced styling */}
                  <motion.div 
                    className="absolute -top-6 -right-6 bg-primary text-black px-6 py-3 rounded-full text-lg font-black neon-glow shadow-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    5000+ chaînes
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-secondary text-white px-6 py-3 rounded-full text-lg font-black shadow-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    HD/4K
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom stats avec style cinématique */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "10,000+", label: "Clients satisfaits" },
            { number: "5000+", label: "Chaînes TV" },
            { number: "24/7", label: "Support" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl font-black gradient-primary bg-clip-text text-transparent mb-3 neon-glow cinema-font">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final urgency message avec style cinématique */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 bg-red-600/20 border border-red-500/50 rounded-full px-10 py-4 backdrop-blur-xl shadow-2xl">
            <span className="animate-pulse text-red-400 text-2xl">🔥</span>
            <span className="text-red-400 font-black text-xl cinema-font">
              Offre limitée - Rejoignez-nous avant qu'il ne soit trop tard !
            </span>
            <span className="animate-pulse text-red-400 text-2xl">🔥</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
