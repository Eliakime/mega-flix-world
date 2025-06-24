import { motion } from 'framer-motion';
import { Star, Play, Quote, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Amadou Diallo",
    location: "Dakar, Sénégal",
    profession: "Entrepreneur",
    rating: 5,
    text: "Cine + a révolutionné mon quotidien ! Fini les 35,000 FCFA par mois d'abonnements. Mes enfants regardent leurs dessins animés, ma femme suit ses novelas et moi je ne rate aucun match du PSG. Tout ça pour 5000 FCFA une seule fois !",
    type: "video",
    videoThumbnail: "/images/1.jpg",
    videoUrl: "/videos/1.mov"
  },
  {
    name: "Fatou Traoré",
    location: "Bamako, Mali",
    profession: "Professeure",
    rating: 5,
    text: "Incroyable ! L'installation a pris 5 minutes sur ma Smart TV. Depuis 8 mois, aucun problème technique. Le support client répond rapidement via WhatsApp. Je recommande à toutes mes collègues !",
    type: "video",
    avatar: "👩🏾‍🏫",
    videoThumbnail: "/images/testimonials/fatou-thumb.jpg",
    videoUrl: "/videos/2.mov"
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
  const [autoplayStarted, setAutoplayStarted] = useState(false);

  // Auto-play première vidéo au chargement
  useEffect(() => {
    if (!autoplayStarted && testimonials[0].type === 'video') {
      const timer = setTimeout(() => {
        setPlayingVideo(testimonials[0].videoUrl || '');
        setAutoplayStarted(true);
      }, 1000); // Démarre après 1 seconde
      return () => clearTimeout(timer);
    }
  }, [autoplayStarted]);

  const handleVideoPlay = (videoUrl: string) => {
    setPlayingVideo(videoUrl);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative min-h-screen py-16 sm:py-20 lg:py-32 hero-background overflow-hidden">
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Background effects - Responsive */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre responsive */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cinema-font text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight text-shadow">
            <span className="text-white">Ils ont choisi</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent neon-glow">
              Cine +
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto text-shadow px-4">
            Plus de 8,000 familles nous font confiance à travers l'Afrique de l'Ouest
          </p>
        </motion.div>

        {/* Section vidéo principale mise en avant */}
        <motion.div 
          className="max-w-7xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary/40 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-4 py-2 border border-primary/30">
                <Video className="h-5 w-5 text-primary mr-2" />
                <span className="text-primary font-bold text-sm sm:text-base">TÉMOIGNAGES VIDÉO</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Première vidéo - Grande taille */}
              <div className="relative">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    {playingVideo === testimonials[0].videoUrl ? (
                      <video 
                        className="w-full h-full object-cover rounded-2xl"
                        controls
                        autoPlay
                        muted
                        src={testimonials[0].videoUrl}
                        onError={() => setPlayingVideo(null)}
                      />
                    ) : (
                      <>
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <div className="text-6xl sm:text-8xl">🎬</div>
                        </div>
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer group"
                          onClick={() => handleVideoPlay(testimonials[0].videoUrl || '')}
                        >
                          <div className="relative">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 neon-glow group-hover:scale-110">
                              <Play className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black ml-1" />
                            </div>
                            <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping"></div>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                          🔴 LIVE
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Info de la première vidéo */}
                  <div className="p-4 sm:p-6 bg-black/80">
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(testimonials[0].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-primary fill-current mr-1" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-black text-white text-lg sm:text-xl mb-2">
                      {testimonials[0].name}
                    </h3>
                    <p className="text-primary font-semibold text-sm sm:text-base mb-1">
                      {testimonials[0].profession}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {testimonials[0].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deuxième vidéo */}
              <div className="relative">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-secondary/30">
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    {playingVideo === testimonials[1].videoUrl ? (
                      <video 
                        className="w-full h-full object-cover rounded-2xl"
                        controls
                        autoPlay
                        muted
                        src={testimonials[1].videoUrl}
                        onError={() => setPlayingVideo(null)}
                      />
                    ) : (
                      <>
                        <div className="w-full h-full bg-gradient-to-br from-purple-800 to-pink-900 flex items-center justify-center">
                          <div className="text-6xl sm:text-8xl">👩🏾‍🏫</div>
                        </div>
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer group"
                          onClick={() => handleVideoPlay(testimonials[1].videoUrl || '')}
                        >
                          <div className="relative">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-all duration-300 neon-glow group-hover:scale-110">
                              <Play className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black ml-1" />
                            </div>
                            <div className="absolute -inset-2 bg-secondary/30 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Info de la deuxième vidéo */}
                  <div className="p-4 sm:p-6 bg-black/80">
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(testimonials[1].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-secondary fill-current mr-1" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-black text-white text-lg sm:text-xl mb-2">
                      {testimonials[1].name}
                    </h3>
                    <p className="text-secondary font-semibold text-sm sm:text-base mb-1">
                      {testimonials[1].profession}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {testimonials[1].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Témoignage principal en rotation */}
        <motion.div 
          className="max-w-6xl mx-auto mb-12 sm:mb-16"
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-primary/30 shadow-2xl overflow-hidden">
            {/* Quote decoration responsive */}
            <Quote className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 h-10 w-10 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary/30 neon-glow" />
            
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-primary/50 rounded-full p-2 sm:p-3 transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-primary/50 rounded-full p-2 sm:p-3 transition-all duration-300 z-10"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </button>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-2000" />
            
            {/* Étoiles responsive */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-10">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary fill-current neon-glow mx-1" />
              ))}
            </div>

            {/* Texte du témoignage responsive */}
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white text-center mb-8 sm:mb-12 lg:mb-16 leading-relaxed font-medium text-shadow cinema-font px-2 sm:px-4">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Profil responsive */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <div className="text-4xl sm:text-6xl lg:text-8xl group-hover:scale-110 transition-transform duration-300">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-center sm:text-left">
                <div className="font-black text-white text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-shadow">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 neon-glow">
                  {testimonials[currentTestimonial].profession}
                </div>
                <div className="text-gray-300 text-sm sm:text-base lg:text-xl">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grille de témoignages responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`relative bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-2xl ${
                index === currentTestimonial 
                  ? 'border-primary bg-black/60 scale-105 neon-glow' 
                  : 'border-gray-700/50 hover:border-primary/50'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: index === currentTestimonial ? 1.05 : 1.02, y: -5 }}
            >
              {/* Section média responsive avec meilleure visibilité */}
              {testimonial.type === 'video' && testimonial.videoThumbnail ? (
                <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                  {playingVideo === testimonial.videoUrl ? (
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      src={testimonial.videoUrl}
                      onError={() => setPlayingVideo(null)}
                    />
                  ) : (
                    <>
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-4xl sm:text-5xl lg:text-6xl">🎥</div>
                      </div>
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer group"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoPlay(testimonial.videoUrl || '');
                        }}
                      >
                        <div className="relative">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 neon-glow group-hover:scale-110">
                            <Play className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-black ml-1" />
                          </div>
                          <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        VIDEO
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl">{testimonial.avatar}</div>
                </div>
              )}
              
              {/* Contenu responsive */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start mb-4 sm:mb-6">
                  <div className="flex-1">
                    <div className="font-bold text-white text-base sm:text-lg lg:text-xl text-shadow mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-primary text-sm sm:text-base lg:text-lg font-semibold mb-1">
                      {testimonial.profession}
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base lg:text-lg">
                      {testimonial.location}
                    </div>
                  </div>
                  
                  {testimonial.type === 'video' && (
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <div className="bg-red-600/80 text-white p-2 sm:p-3 rounded-full border border-red-500 animate-pulse">
                        <Video className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Étoiles responsive */}
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary fill-current" />
                  ))}
                </div>
                
                {/* Texte tronqué responsive */}
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg line-clamp-3 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section de confiance responsive */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary/30 shadow-2xl max-w-4xl mx-auto">
            {/* Avatars responsive */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-6 sm:mb-8">
              <div className="flex -space-x-2 sm:-space-x-3 lg:-space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-600 rounded-full border-2 sm:border-4 border-primary flex items-center justify-center text-base sm:text-lg lg:text-2xl">👨🏾</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-600 rounded-full border-2 sm:border-4 border-primary flex items-center justify-center text-base sm:text-lg lg:text-2xl">👩🏾</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-600 rounded-full border-2 sm:border-4 border-primary flex items-center justify-center text-base sm:text-lg lg:text-2xl">👨🏾</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary rounded-full border-2 sm:border-4 border-white flex items-center justify-center text-xs sm:text-base lg:text-xl font-black text-black neon-glow">8K+</div>
              </div>
            </div>
            
            {/* Titre responsive */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 text-shadow cinema-font">
              Rejoignez plus de 8,000 utilisateurs satisfaits
            </h3>
            
            {/* Stats responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">⭐</div>
                <div className="text-primary font-bold text-lg sm:text-xl">4.9/5</div>
                <div className="text-gray-300 text-sm sm:text-base">Note moyenne</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">🔥</div>
                <div className="text-primary font-bold text-lg sm:text-xl">98%</div>
                <div className="text-gray-300 text-sm sm:text-base">Satisfaction</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">💝</div>
                <div className="text-primary font-bold text-lg sm:text-xl">9/10</div>
                <div className="text-gray-300 text-sm sm:text-base">Recommandent</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;