
import { motion } from 'framer-motion';
import { Tv, Film, Youtube } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: "Toutes les chaînes TV",
    description: "Canal+, TF1, France TV, beIN Sports, RMC Sport, Novelas TV et bien plus encore",
    color: "text-primary"
  },
  {
    icon: Youtube,
    title: "Sport en direct",
    description: "Football, NBA, tennis, F1... Tous les matchs et événements sportifs en temps réel",
    color: "text-secondary"
  },
  {
    icon: Film,
    title: "Films & Séries récents",
    description: "Netflix, Prime Video, Canal+ Series, Disney+... Toute la bibliothèque mondiale",
    color: "text-primary"
  },
  {
    icon: Tv,
    title: "Dessins animés",
    description: "Tiji, Piwi+, Boomerang, Disney Channel... Pour petits et grands",
    color: "text-secondary"
  },
  {
    icon: Youtube,
    title: "Multi-plateformes",
    description: "Android, iOS, PC, Smart TV, TV Box... Compatible avec tous vos appareils",
    color: "text-primary"
  },
  {
    icon: Film,
    title: "Aucun abonnement",
    description: "Un seul paiement de 5000 FCFA. Pas d'inscription. Pas de compte à créer",
    color: "text-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Pourquoi choisir
            </span>
            <br />
            <span className="text-white">notre pack IPTV ?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une solution complète qui remplace tous vos abonnements de streaming et TV
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-6 group-hover:bg-gray-700 transition-colors ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-8 py-4 border border-primary/30">
            <span className="text-lg font-semibold text-white">
              + de <span className="text-primary font-bold">10,000</span> utilisateurs satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
