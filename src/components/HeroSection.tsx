
import { motion } from 'framer-motion';
import { Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-background">
      {/* Video overlay effect */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-primary bg-clip-text text-transparent">
              Deux applis.
            </span>
            <br />
            <span className="text-white">Une seule offre.</span>
            <br />
            <span className="text-white">Tout le divertissement</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              du monde.
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-primary font-bold text-3xl">5000 FCFA.</span>
            <br />
            Aucun abonnement. Aucun compte.
            <br />
            <span className="text-secondary">Télécharge et regarde.</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Profiter de l'offre
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger maintenant
            </Button>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-gray-300">Chaînes TV</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-gray-300">Sport Live</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">0€</div>
              <div className="text-gray-300">Abonnement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-gray-300">Disponible</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
