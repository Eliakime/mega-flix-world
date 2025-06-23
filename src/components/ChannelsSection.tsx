
import { motion } from 'framer-motion';

const channelCategories = [
  {
    title: "Canal+ & Premium",
    channels: ["Canal+", "Canal+ Sport", "Canal+ Cinéma", "Canal+ Décalé", "Canal+ Family", "Canal+ Series"],
    color: "bg-gradient-to-r from-red-600 to-red-800",
    icon: "🎬"
  },
  {
    title: "Sport",
    channels: ["beIN Sports 1-3", "RMC Sport", "Eurosport", "ESPN", "NBA TV", "L'Équipe"],
    color: "bg-gradient-to-r from-green-600 to-green-800",
    icon: "⚽"
  },
  {
    title: "Cinéma & Séries",
    channels: ["Ciné+ Premier", "Paramount Channel", "Action", "Polar+", "Zimagic", "Thriller"],
    color: "bg-gradient-to-r from-purple-600 to-purple-800",
    icon: "🎭"
  },
  {
    title: "Divertissement",
    channels: ["TF1", "France 2-5", "M6", "C8", "NRJ12", "TMC", "W9", "Chérie 25"],
    color: "bg-gradient-to-r from-blue-600 to-blue-800",
    icon: "📺"
  },
  {
    title: "Jeunesse",
    channels: ["Disney Channel", "Nickelodeon", "Piwi+", "Tiji", "Gulli", "Boomerang", "Cartoon Network"],
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    icon: "🧒"
  },
  {
    title: "Infos & Documentaires",
    channels: ["France 24", "BFM TV", "CNews", "National Geographic", "Planète+", "Discovery", "Histoire TV"],
    color: "bg-gradient-to-r from-gray-600 to-gray-800",
    icon: "📰"
  },
  {
    title: "Chaînes Africaines",
    channels: ["A+", "Novelas TV", "RTI", "ORTM", "Trace", "Africa 24", "Canal+ Afrique"],
    color: "bg-gradient-to-r from-emerald-600 to-emerald-800",
    icon: "🌍"
  },
  {
    title: "International",
    channels: ["BBC", "CNN", "Al Jazeera", "RT", "DW", "TV5 Monde", "Arte"],
    color: "bg-gradient-to-r from-indigo-600 to-indigo-800",
    icon: "🌐"
  }
];

const ChannelsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Plus de </span>
            <span className="gradient-primary bg-clip-text text-transparent">5000 chaînes</span>
            <br />
            <span className="text-white">dans toutes les langues</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre sélection complète de chaînes organisées par catégories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channelCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${category.color} p-6 h-full relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.channels.map((channel, channelIndex) => (
                      <motion.div
                        key={channelIndex}
                        className="text-white/90 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 inline-block mr-2 mb-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {channel}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-white/80 text-sm">
                    + {Math.floor(Math.random() * 50) + 20} autres chaînes
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Et ce n'est que le début !
            </h3>
            <p className="text-gray-300 text-lg">
              Nouvelles chaînes ajoutées chaque semaine. Mises à jour automatiques incluses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelsSection;
