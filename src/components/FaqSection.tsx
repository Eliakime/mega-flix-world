
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Comment installer le pack IPTV ?",
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
            <span className="text-white">Questions</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Toutes les réponses aux questions que vous vous posez
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
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
                  <div className="p-6 pt-0 border-t border-gray-800">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
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
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Une autre question ?
            </h3>
            <p className="text-gray-300 mb-6">
              Notre équipe support est disponible 24/7 pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/+221123456789" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                💬 WhatsApp Support
              </a>
              <a 
                href="tel:+221123456789" 
                className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
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
