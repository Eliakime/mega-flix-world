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
      
      {/* Floating icons for cinema, sport, manga - Responsive positioning */}
      <motion.div
        className="absolute top-16 left-4 sm:top-20 sm:left-10 text-primary/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Film className="h-8 w-8 sm:h-12 md:h-16 sm:w-12 md:w-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-4 sm:top-32 sm:right-16 text-secondary/30"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Gamepad2 className="h-6 w-6 sm:h-8 md:h-12 sm:w-8 md:w-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 left-4 sm:bottom-32 sm:left-20 text-primary/20"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Sparkles className="h-8 w-8 sm:h-10 md:h-14 sm:w-10 md:w-14" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Logo/Brand - Responsive text sizes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="cinema-font text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 text-shadow">
              <span className="gradient-primary bg-clip-text text-transparent neon-glow">
                CINE +
              </span>
            </h1>
          </motion.div>

          {/* Main heading - Responsive with better line breaks */}
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 sm:mb-8 text-shadow leading-tight px-2"
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

          {/* Price and description - Responsive typography */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2">5,000 FCFA</span>
            <span className="text-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Un seul paiement • Aucun abonnement</span>
            <br />
            <span className="text-gray-300 text-sm sm:text-base md:text-lg">5000+ chaînes • Films • Sport live • Mangas</span>
          </motion.p>

          {/* CTA Buttons - Responsive sizing and stacking */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-110 neon-glow rounded-full"
            >
              <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 lg:h-6 sm:w-5 lg:w-6" />
              Acheter maintenant !
            </Button>
            
            <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-110 rounded-full backdrop-blur-sm"
          >
            <a href="https://ywsoqfbs.mychariow.com/prd_3ny4tw" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 lg:h-6 sm:w-5 lg:w-6" />
              Télécharger l'app
            </a>
          </Button>
          </motion.div>

          {/* Stats with responsive grid and typography */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-primary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">5000+</div>
              <div className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Chaînes TV</div>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-secondary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">100%</div>
              <div className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Sport Live</div>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-primary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">0€</div>
              <div className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Abonnement</div>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-secondary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">Disponible</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <motion.div 
        className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToPricing}
      >
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-primary rounded-full flex justify-center relative">
          <motion.div 
            className="w-1.5 h-3 sm:w-2 sm:h-4 bg-primary rounded-full mt-1.5 sm:mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="text-primary text-xs sm:text-sm mt-2 font-medium">Découvrir</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;