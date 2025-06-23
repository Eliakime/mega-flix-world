
import { motion } from 'framer-motion';
import { Smartphone, Users, CreditCard, Tv, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "Multi-plateforme",
    description: "Compatible avec tous vos appareils : Android, iOS, Smart TV, PC, tablette. Une seule app, partout.",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Users,
    title: "Pour tout public",
    description: "Cinéma pour les adultes, dessins animés pour les enfants, sport pour toute la famille.",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: CreditCard,
    title: "Paiement unique",
    description: "5000 FCFA une seule fois. Fini les abonnements mensuels qui s'accumulent.",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Tv,
    title: "Contenu premium",
    description: "Films récents, sport en direct, mangas exclusifs et 5000+ chaînes TV du monde entier.",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Zap,
    title: "Installation rapide",
    description: "Téléchargez, installez et profitez en moins de 5 minutes. Aucune configuration complexe.",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Shield,
    title: "100% sécurisé",
    description: "Paiement sécurisé, données protégées. Application légale et fiable depuis 2021.",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
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
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="gradient-primary bg-clip-text text-transparent">
              Pourquoi choisir
            </span>
            <br />
            <span className="text-white">Cine + ?</span>
          </motion.h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            La solution qui remplace tous vos abonnements de streaming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-${feature.color.split('-')[1]}/50 transition-all duration-500 group overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-900 mb-6 group-hover:bg-gray-800 transition-all duration-300 ${feature.color}`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-10 py-6 border border-primary/30 backdrop-blur-sm">
            <span className="text-xl font-bold text-white">
              Rejoignez plus de <span className="text-primary">8,000</span> utilisateurs satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
