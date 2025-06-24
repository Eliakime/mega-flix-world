
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Comment installer Cine + ?",
    answer: "L'installation est très simple ! Après votre achat, vous recevrez un lien de téléchargement et un guide pas-à-pas. Il suffit d'installer l'application, d'entrer votre code d'activation, et vous êtes prêt ! Tout le processus prend moins de 10 minutes."
  },
  {
    question: "Est-ce que ça marche sur ma télé ?",
    answer: "Oui ! Notre solution fonctionne sur tous les appareils : Smart TV (Samsung, LG, Sony...), TV Box Android, Amazon Fire Stick, smartphones Android et iOS, PC Windows/Mac, et même sur navigateur web. Si vous avez internet, ça marche !"
  },
  {
    question: "Est-ce légal ?",
    answer: "Absolument ! Nous respectons toutes les réglementations en vigueur. Notre service redistribue légalement les contenus selon les accords avec les diffuseurs. Vous pouvez utiliser notre service en toute tranquillité."
  },
  {
    question: "Y a-t-il des publicités ?",
    answer: "Non ! Contrairement aux services gratuits, notre pack premium n'inclut aucune publicité intrusive. Vous profitez de tous vos programmes sans interruption, exactement comme sur les plateformes premium."
  },
  {
    question: "Peut-on payer par Mobile Money ?",
    answer: "Oui ! Nous acceptons tous les moyens de paiement locaux : Orange Money, MTN Mobile Money, Moov Money, Wave, ainsi que les cartes bancaires et virements. Le paiement est 100% sécurisé."
  },
  {
    question: "Et si je ne suis pas satisfait ?",
    answer: "Nous offrons une garantie satisfait ou remboursé de 7 jours. Si le service ne répond pas à vos attentes, contactez notre support et nous vous remboursons intégralement, sans poser de questions."
  },
  {
    question: "Combien d'appareils puis-je utiliser ?",
    answer: "Votre pack peut être utilisé sur jusqu'à 3 appareils simultanément. Parfait pour toute la famille ! Vous pouvez regarder différents programmes sur votre télé, tablette et téléphone en même temps."
  },
  {
    question: "La qualité vidéo est-elle bonne ?",
    answer: "Excellente ! Nous proposons du contenu en Full HD (1080p) et même 4K pour les chaînes qui le supportent. La qualité s'adapte automatiquement à votre connexion internet pour éviter les coupures."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen py-32 hero-background overflow-hidden">
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Floating particles */}
      <div className="floating-particles" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cinema-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 md:mb-8 text-shadow text-center sm:text-left">
  <span className="text-white">Questions</span>
  <br />
  <span className="gradient-primary bg-clip-text text-transparent neon-glow">
    fréquentes
  </span>
</h2>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto text-shadow">
            Toutes les réponses aux questions que vous vous posez
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl hover:border-primary/50 transition-all duration-300">
                <button
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-black/60 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-xl font-bold text-white pr-4 text-shadow">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-primary neon-glow" />
                    ) : (
                      <Plus className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 border-t border-gray-700/50">
                    <p className="text-gray-200 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
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
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-primary/30 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-6 text-shadow cinema-font">
              Une autre question ?
            </h3>
            <p className="text-gray-200 mb-8 text-xl">
              Notre équipe support est disponible 24/7 pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/+2210168943491" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                💬 WhatsApp Support
              </a>
              <a 
                href="tel:+2210168943491" 
                className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg neon-glow"
              >
                📞 Appel gratuit
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
