
import { motion } from 'framer-motion';
import { Smartphone, Users, CreditCard, Tv, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "Multi-plateforme",
    description: "Compatible avec tous vos appareils : Android, iOS, Smart TV, PC, tablette. Une seule app, partout.",
    color: "text-primary",
    gradient: "from-primary/30 to-primary/10"
  },
  {
    icon: Users,
    title: "Pour tout public",
    description: "Cinéma pour les adultes, dessins animés pour les enfants, sport pour toute la famille.",
    color: "text-secondary",
    gradient: "from-secondary/30 to-secondary/10"
  },
  {
    icon: CreditCard,
    title: "Paiement unique",
    description: "5000 FCFA une seule fois. Fini les abonnements mensuels qui s'accumulent.",
    color: "text-primary",
    gradient: "from-primary/30 to-primary/10"
  },
  {
    icon: Tv,
    title: "Contenu premium",
    description: "Films récents, sport en direct, mangas exclusifs et 5000+ chaînes TV du monde entier.",
    color: "text-secondary",
    gradient: "from-secondary/30 to-secondary/10"
  },
  {
    icon: Zap,
    title: "Installation rapide",
    description: "Téléchargez, installez et profitez en moins de 5 minutes. Aucune configuration complexe.",
    color: "text-primary",
    gradient: "from-primary/30 to-primary/10"
  },
  {
    icon: Shield,
    title: "100% sécurisé",
    description: "Paiement sécurisé, données protégées. Application légale et fiable depuis 2021.",
    color: "text-secondary",
    gradient: "from-secondary/30 to-secondary/10"
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative min-h-screen py-32 hero-background overflow-hidden">
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Floating particles */}
      <div className="floating-particles" />
      
      {/* Background decoration with cinematic feel */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="cinema-font text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="gradient-primary bg-clip-text text-transparent neon-glow">
              Pourquoi choisir
            </span>
            <br />
            <span className="text-white text-shadow">Cine + ?</span>
          </motion.h2>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto text-shadow">
            La solution qui remplace tous vos abonnements de streaming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-800/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Cinematic glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-black/60 backdrop-blur-sm mb-6 group-hover:bg-black/80 transition-all duration-300 ${feature.color} border border-gray-700 group-hover:border-primary/50`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 text-shadow">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-full px-12 py-8 border border-primary/30 shadow-2xl">
            <span className="text-2xl font-bold text-white text-shadow">
              Rejoignez plus de <span className="text-primary neon-glow">8,000</span> utilisateurs satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
