
import { motion } from 'framer-motion';

const channelCategories = [
  {
    title: "Cinéma Premium",
    channels: ["Canal+", "Canal+ Cinéma", "OCS", "Paramount", "Ciné+ Premier"],
    color: "bg-gradient-to-br from-red-600/80 to-red-800/80",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1489599904327-c7c7c5d2efca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sport Live",
    channels: ["beIN Sports", "RMC Sport", "Eurosport", "ESPN", "L'Équipe"],
    color: "bg-gradient-to-br from-green-600/80 to-green-800/80",
    icon: "⚽",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Manga & Animés",
    channels: ["Mangas TV", "J-One", "Game One", "Anime Digital", "Crunchyroll"],
    color: "bg-gradient-to-br from-purple-600/80 to-pink-600/80",
    icon: "🎌",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Divertissement",
    channels: ["TF1", "France 2-5", "M6", "C8", "NRJ12", "TMC"],
    color: "bg-gradient-to-br from-blue-600/80 to-blue-800/80",
    icon: "📺",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Jeunesse",
    channels: ["Disney Channel", "Nickelodeon", "Gulli", "Tiji", "Boomerang"],
    color: "bg-gradient-to-br from-yellow-500/80 to-orange-500/80",
    icon: "🧒",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Documentaires",
    channels: ["National Geographic", "Discovery", "Histoire TV", "Planète+"],
    color: "bg-gradient-to-br from-emerald-600/80 to-teal-700/80",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ChannelsSection = () => {
  return (
    <section className="relative min-h-screen py-32 hero-background overflow-hidden">
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Floating particles */}
      <div className="floating-particles" />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cinema-font text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-shadow">
            <span className="text-white">Plus de </span>
            <span className="gradient-primary bg-clip-text text-transparent neon-glow">5000 chaînes</span>
            <br />
            <span className="text-white">organisées par univers</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto text-shadow">
            Découvrez notre collection premium organisée par thématiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {channelCategories.map((category, index) => (
            <motion.div
              key={index}
              className="channel-card group cursor-pointer h-96 relative overflow-hidden rounded-3xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Background image with cinematic treatment */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Cinematic overlays */}
              <div className={`absolute inset-0 ${category.color} opacity-90 rounded-3xl`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 rounded-3xl" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-3xl font-black text-white mb-6 group-hover:text-primary transition-colors duration-300 text-shadow cinema-font">
                    {category.title}
                  </h3>
                </div>
                
                <div>
                  <div className="space-y-2 mb-6">
                    {category.channels.slice(0, 3).map((channel, channelIndex) => (
                      <motion.div
                        key={channelIndex}
                        className="text-white/90 text-sm bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 inline-block mr-2 mb-2 border border-white/20"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
                      >
                        {channel}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-primary font-bold text-lg neon-glow">
                    + {Math.floor(Math.random() * 30) + 20} autres chaînes premium
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-primary/30 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-8 text-shadow cinema-font">
              🚀 Contenu mis à jour en permanence
            </h3>
            <p className="text-gray-200 text-2xl leading-relaxed text-shadow">
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
