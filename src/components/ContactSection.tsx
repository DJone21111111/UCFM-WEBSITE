import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-semibold uppercase tracking-[0.2em] text-sm mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="font-display text-3xl md:text-5xl font-bold text-navy-dark mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-dark text-lg">Our Location</h3>
                <p className="text-muted-foreground">Hettenheuvelweg 18, 1101BN, Amsterdam</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-dark text-lg">Phone</h3>
                <a href="tel:0622813149" className="text-muted-foreground hover:text-gold transition-colors">
                  06 2281 3149
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-dark text-lg">Email</h3>
                <a
                  href="mailto:universalchristianfaithministr@gmail.com"
                  className="text-muted-foreground hover:text-gold transition-colors break-all"
                >
                  universalchristianfaithministr@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-dark text-lg">WhatsApp</h3>
                <a
                  href="https://wa.me/31622813149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  06 2281 3149
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <Facebook className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-dark text-lg">Facebook</h3>
                <a
                  href="https://www.facebook.com/ucfmAmsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  UCFM Amsterdam
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl overflow-hidden shadow-navy border border-border h-[400px]"
          >
            <iframe
              title="UCFM Amsterdam location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.0!2d4.96!3d52.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zHettenheuvelweg+18,+1101+BN+Amsterdam!5e0!3m2!1sen!2snl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
