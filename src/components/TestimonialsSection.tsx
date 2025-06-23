
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Amadou Diallo",
    location: "Dakar, Sénégal",
    rating: 5,
    text: "Incroyable ! J'ai économisé plus de 30,000 FCFA par mois en annulant tous mes abonnements. La qualité est parfaite et j'ai accès à tout ce que je veux regarder.",
    type: "text",
    avatar: "👨🏾‍💼"
  },
  {
    name: "Fatou Traoré",
    location: "Bamako, Mali",
    rating: 5,
    text: "Mes enfants regardent leurs dessins animés préférés et moi je suis tous les matchs du PSG en direct. Tout fonctionne parfaitement sur notre Smart TV !",
    type: "text",
    avatar: "👩🏾"
  },
  {
    name: "Ibrahim Kone",
    location: "Abidjan, Côte d'Ivoire",
    rating: 5,
    text: "Service client au top ! Installation faite en 10 minutes, et depuis 6 mois aucun problème. Je recommande à 100%.",
    type: "audio",
    avatar: "👨🏾",
    audioUrl: "#"
  },
  {
    name: "Aisha Ouattara",
    location: "Ouagadougou, Burkina Faso",
    rating: 5,
    text: "Enfin une solution qui marche vraiment ! Plus besoin de chercher des liens douteux, tout est là et en très bonne qualité.",
    type: "video",
    avatar: "👩🏾‍🦱",
    videoUrl: "#"
  },
  {
    name: "Moussa Camara",
    location: "Conakry, Guinée",
    rating: 5,
    text: "J'étais sceptique au début, mais après 3 mois d'utilisation, je peux dire que c'est le meilleur investissement que j'ai fait pour ma famille.",
    type: "text",
    avatar: "👨🏾‍🔧"
  },
  {
    name: "Mariam Sidibe",
    location: "Lomé, Togo",
    rating: 5,
    text: "La diversité des chaînes est impressionnante. Je regarde mes novelas, mon mari suit le sport, et les enfants ont leurs dessins animés. Parfait !",
    type: "text",
    avatar: "👩🏾‍⚕️"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
            <span className="text-white">Ce que disent</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              nos utilisateurs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Plus de 10,000 familles nous font confiance à travers l'Afrique de l'Ouest
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
              
              {testimonials[currentTestimonial].type === 'audio' && (
                <button className="bg-primary hover:bg-primary/90 text-black p-3 rounded-full transition-colors">
                  <Play className="h-5 w-5" />
                </button>
              )}
              
              {testimonials[currentTestimonial].type === 'video' && (
                <button className="bg-secondary hover:bg-secondary/90 text-white p-3 rounded-full transition-colors">
                  <Play className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial 
                  ? 'border-primary bg-gray-800/80' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.location}
                  </div>
                </div>
                
                {testimonial.type === 'audio' && (
                  <div className="ml-auto">
                    <div className="bg-primary/20 text-primary p-1 rounded">
                      <Play className="h-3 w-3" />
                    </div>
                  </div>
                )}
                
                {testimonial.type === 'video' && (
                  <div className="ml-auto">
                    <div className="bg-secondary/20 text-secondary p-1 rounded">
                      <Play className="h-3 w-3" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm line-clamp-3">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 border border-primary/20">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs">👨🏾</div>
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs">👩🏾</div>
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs">👨🏾</div>
              <div className="w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-black">+</div>
            </div>
            <span className="text-white font-semibold">
              Rejoignez plus de 10,000 utilisateurs satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
