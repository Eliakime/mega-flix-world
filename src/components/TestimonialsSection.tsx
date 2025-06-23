
import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Amadou Diallo",
    location: "Dakar, Sénégal",
    profession: "Entrepreneur",
    rating: 5,
    text: "Cine + a révolutionné mon quotidien ! Fini les 35,000 FCFA par mois d'abonnements. Mes enfants regardent leurs dessins animés, ma femme suit ses novelas et moi je ne rate aucun match du PSG. Tout ça pour 5000 FCFA une seule fois !",
    type: "video",
    avatar: "👨🏾‍💼",
    videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    name: "Fatou Traoré",
    location: "Bamako, Mali",
    profession: "Professeure",
    rating: 5,
    text: "Incroyable ! L'installation a pris 5 minutes sur ma Smart TV. Depuis 8 mois, aucun problème technique. Le support client répond rapidement via WhatsApp. Je recommande à toutes mes collègues !",
    type: "video",
    avatar: "👩🏾‍🏫",
    videoThumbnail: "https://images.unsplash.com/photo-1494790108755-2616c5cbb436?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    name: "Ibrahim Koné",
    location: "Abidjan, Côte d'Ivoire",
    profession: "Ingénieur",
    rating: 5,
    text: "En tant qu'ingénieur, j'étais sceptique. Mais après 1 an d'utilisation, je peux confirmer : la qualité est au rendez-vous, l'app est stable et les mises à jour sont automatiques. Excellent investissement !",
    type: "text",
    avatar: "👨🏾‍💻"
  },
  {
    name: "Aïsha Ouattara",
    location: "Ouagadougou, Burkina Faso",
    profession: "Commerçante",
    rating: 5,
    text: "Mes trois enfants ont des goûts différents : mangas pour l'aîné, dessins animés pour le cadet, et films pour la cadette. Avec Cine +, tout le monde est satisfait ! Plus de disputes pour la télécommande 😄",
    type: "video",
    avatar: "👩🏾‍💼",
    videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    name: "Moussa Camara",
    location: "Conakry, Guinée",
    profession: "Chauffeur",
    rating: 5,
    text: "Je regarde pendant mes pauses de travail sur mon téléphone. La qualité est excellente même avec une connexion moyenne. Parfait pour suivre les matchs de foot africain !",
    type: "text",
    avatar: "🚗"
  },
  {
    name: "Mariam Sidibé",
    location: "Lomé, Togo",
    profession: "Infirmière",
    rating: 5,
    text: "Après mes gardes de nuit, je me détends avec les derniers films. L'interface est intuitive et la recherche fonctionne parfaitement. Meilleur achat de l'année !",
    type: "text",
    avatar: "👩🏾‍⚕️"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoUrl: string) => {
    setPlayingVideo(videoUrl);
  };

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
            <span className="text-white">Ils ont choisi</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Cine +
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Plus de 8,000 familles nous font confiance à travers l'Afrique de l'Ouest
          </p>
        </motion.div>

        {/* Témoignage principal */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16"
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl overflow-hidden relative">
            {/* Quote decoration */}
            <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/20" />
            
            <div className="flex items-center justify-center mb-8">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-primary fill-current" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl text-white text-center mb-12 leading-relaxed font-medium">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="text-6xl mr-6">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-2xl mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary font-semibold text-lg mb-1">
                  {testimonials[currentTestimonial].profession}
                </div>
                <div className="text-gray-400 text-lg">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grille de témoignages avec vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`relative bg-gray-800 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial 
                  ? 'border-primary bg-gray-800/80 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: index === currentTestimonial ? 1.05 : 1.02 }}
            >
              {testimonial.type === 'video' && testimonial.videoThumbnail ? (
                <div className="relative h-48 overflow-hidden">
                  {playingVideo === testimonial.videoUrl ? (
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      src={testimonial.videoUrl}
                    />
                  ) : (
                    <>
                      <img 
                        src={testimonial.videoThumbnail} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="video-testimonial absolute inset-0 flex items-center justify-center bg-black/40"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoPlay(testimonial.videoUrl || '');
                        }}
                      >
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                          <Play className="h-8 w-8 text-black ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl">{testimonial.avatar}</div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-primary text-sm font-medium">
                      {testimonial.profession}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                  
                  {testimonial.type === 'video' && (
                    <div className="ml-auto">
                      <div className="bg-secondary/20 text-secondary p-2 rounded-full">
                        <Play className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section de confiance */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 bg-gray-600 rounded-full border-4 border-white flex items-center justify-center text-lg">👨🏾</div>
                <div className="w-12 h-12 bg-gray-600 rounded-full border-4 border-white flex items-center justify-center text-lg">👩🏾</div>
                <div className="w-12 h-12 bg-gray-600 rounded-full border-4 border-white flex items-center justify-center text-lg">👨🏾</div>
                <div className="w-12 h-12 bg-primary rounded-full border-4 border-white flex items-center justify-center text-lg font-bold text-black">8K+</div>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Rejoignez plus de 8,000 utilisateurs satisfaits
            </h3>
            <p className="text-gray-300 text-xl">
              ⭐ Note moyenne : 4.9/5 • 🔥 98% de satisfaction • 💝 Recommandé par 9/10 utilisateurs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
