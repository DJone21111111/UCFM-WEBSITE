import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Universal Christian Faith Ministry"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gold font-body font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Welcome to
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Universal Christian
            <br />
            <span className="text-gradient-gold">Faith Ministry</span>
          </h1>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6 rounded-full" />
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are a bible believing church where Jesus is making the zeros to heroes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-gold-gradient text-navy-dark font-bold px-8 py-4 rounded-md text-lg uppercase tracking-wider hover:shadow-gold transition-all"
            >
              Join Us This Sunday
            </a>
            <a
              href="#about"
              className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-md text-lg uppercase tracking-wider hover:bg-gold/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
