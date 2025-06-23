
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Prêt à transformer</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              votre expérience TV ?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Rejoignez des milliers de familles qui ont déjà dit adieu aux abonnements multiples
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Tout le divertissement du monde pour seulement 
                  <span className="gradient-primary bg-clip-text text-transparent"> 5,000 FCFA</span>
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-gray-300">Installation en 5 minutes</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">Garantie satisfait ou remboursé 7 jours</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-gray-300">Support technique 24/7 inclus</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={scrollToPricing}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-8 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Download className="mr-2 h-6 w-6" />
                    Profiter de l'offre maintenant
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-8 py-6 text-lg rounded-2xl transition-all duration-300"
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
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl">📺</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-bold"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    5000+ chaînes
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold"
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

        {/* Bottom stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <div className="text-gray-400">Clients satisfaits</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              5000+
            </div>
            <div className="text-gray-400">Chaînes TV</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-400">Support</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </motion.div>

        {/* Final urgency message */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-500/30 rounded-full px-6 py-3">
            <span className="animate-pulse text-red-400">🔥</span>
            <span className="text-red-400 font-semibold">
              Offre limitée - Rejoignez-nous avant qu'il ne soit trop tard !
            </span>
            <span className="animate-pulse text-red-400">🔥</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
