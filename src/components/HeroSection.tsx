
import { motion } from 'framer-motion';
import { Play, Download, Sparkles, Film, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-background overflow-hidden">
      {/* Animated particles background */}
      <div className="floating-particles" />
      
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      
      {/* Floating icons for cinema, sport, manga */}
      <motion.div
        className="absolute top-20 left-10 text-primary/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Film className="h-16 w-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 text-secondary/30"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Gamepad2 className="h-12 w-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-primary/20"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Sparkles className="h-14 w-14" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="cinema-font text-6xl md:text-8xl lg:text-9xl font-black mb-4 text-shadow">
              <span className="gradient-primary bg-clip-text text-transparent neon-glow">
                CINE +
              </span>
            </h1>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-shadow leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">L'univers du</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Cinéma, Sport & Manga
            </span>
            <br />
            <span className="text-white">dans une seule app</span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-3xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="text-primary font-bold text-4xl md:text-5xl block mb-2">5,000 FCFA</span>
            <span className="text-secondary font-semibold">Un seul paiement • Aucun abonnement</span>
            <br />
            <span className="text-gray-300">5000+ chaînes • Films • Sport live • Mangas</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-10 py-6 text-xl transition-all duration-300 transform hover:scale-110 neon-glow rounded-full"
            >
              <Play className="mr-3 h-6 w-6" />
              Commencer maintenant
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-6 text-xl transition-all duration-300 transform hover:scale-110 rounded-full backdrop-blur-sm"
            >
              <Download className="mr-3 h-6 w-6" />
              Télécharger l'app
            </Button>
          </motion.div>

          {/* Stats avec animations */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-300 font-medium">Chaînes TV</div>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-gray-300 font-medium">Sport Live</div>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-4xl font-bold text-primary mb-2">0€</div>
              <div className="text-gray-300 font-medium">Abonnement</div>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Disponible</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator amélioré */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToPricing}
      >
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center relative">
          <motion.div 
            className="w-2 h-4 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="text-primary text-sm mt-2 font-medium">Découvrir</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
