
import { motion } from 'framer-motion';

const channelCategories = [
  {
    title: "Cinéma Premium",
    channels: ["Canal+", "Canal+ Cinéma", "OCS", "Paramount", "Ciné+ Premier"],
    color: "bg-gradient-to-br from-red-600 to-red-800",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1489599904327-c7c7c5d2efca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sport Live",
    channels: ["beIN Sports", "RMC Sport", "Eurosport", "ESPN", "L'Équipe"],
    color: "bg-gradient-to-br from-green-600 to-green-800",
    icon: "⚽",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Manga & Animés",
    channels: ["Mangas TV", "J-One", "Game One", "Anime Digital", "Crunchyroll"],
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    icon: "🎌",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Divertissement",
    channels: ["TF1", "France 2-5", "M6", "C8", "NRJ12", "TMC"],
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    icon: "📺",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Jeunesse",
    channels: ["Disney Channel", "Nickelodeon", "Gulli", "Tiji", "Boomerang"],
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    icon: "🧒",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Documentaires",
    channels: ["National Geographic", "Discovery", "Histoire TV", "Planète+"],
    color: "bg-gradient-to-br from-emerald-600 to-teal-700",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ChannelsSection = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Plus de </span>
            <span className="gradient-primary bg-clip-text text-transparent">5000 chaînes</span>
            <br />
            <span className="text-white">organisées par univers</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Découvrez notre collection premium organisée par thématiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channelCategories.map((category, index) => (
            <motion.div
              key={index}
              className="channel-card group cursor-pointer h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Overlay gradients */}
              <div className={`absolute inset-0 ${category.color} opacity-80 rounded-2xl`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div>
                  <div className="space-y-2 mb-4">
                    {category.channels.slice(0, 3).map((channel, channelIndex) => (
                      <motion.div
                        key={channelIndex}
                        className="text-white/90 text-sm bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block mr-2 mb-2"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                      >
                        {channel}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-primary font-bold text-sm">
                    + {Math.floor(Math.random() * 30) + 20} autres chaînes premium
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              🚀 Contenu mis à jour en permanence
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              Nouvelles chaînes et contenus ajoutés chaque semaine.<br />
              Mises à jour automatiques incluses dans votre achat unique.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelsSection;
