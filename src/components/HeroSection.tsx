import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MapPin, Clock, Facebook } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import congregation from "@/assets/congregation.jpeg";
import worship from "@/assets/worship.jpeg";
import womensDay from "@/assets/womens-day.jpeg";

interface Slide {
  bg: string;
  title: string;
  subtitle?: string;
  details: string[];
  highlight?: string;
  cta?: { label: string; href: string };
}

const slides: Slide[] = [
  {
    bg: heroBg,
    title: "VICTORY\nSERVICE",
    subtitle: "JOIN US EVERY SUNDAY FOR\nPRAISE, WORSHIP & THE WORD",
    details: ["SUNDAYS • 14:30 – 17:30"],
    highlight: "Hettenheuvelweg 18, 1101BN, Amsterdam",
    cta: { label: "Join Us This Sunday", href: "#services" },
  },
  {
    bg: congregation,
    title: "FRIDAY\nSERVICE",
    subtitle: "GROW DEEPER IN THE WORD\nAND IN PRAYER WITH US",
    details: ["FRIDAY • 20:00 – 22:00"],
    highlight: "Where Jesus is making the zeros to heroes",
    cta: { label: "Learn More", href: "#about" },
  },
  {
    bg: worship,
    title: "ABSOLUTE\nWORSHIP",
    subtitle: "A NIGHT OF POWERFUL\nWORSHIP & PRAISE",
    details: ["EVERY 1ST FRIDAY • 20:00 – 22:00"],
    highlight: "Come as you are, leave transformed",
    cta: { label: "Contact Us", href: "#contact" },
  },
  {
    bg: womensDay,
    title: "CONNECT\nWITH\nUS",
    subtitle: "REACH OUT AND BECOME\nPART OF OUR FAMILY",
    details: [
      "PHONE: 06 2281 3149",
      "WHATSAPP: 06 2281 3149",
      "EMAIL: universalchristianfaithministr@gmail.com",
    ],
    highlight: "Facebook: UCFM Amsterdam",
    cta: { label: "Give Online", href: "#give" },
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Universal Christian Faith Ministry"
      aria-roledescription="carousel"
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.bg}
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Slide content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Title */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6 whitespace-pre-line uppercase">
              {slide.title}
            </h1>

            {/* Subtitle */}
            {slide.subtitle && (
              <p className="font-body text-primary-foreground/80 text-base sm:text-lg md:text-xl uppercase tracking-wide mb-6 whitespace-pre-line leading-relaxed">
                {slide.subtitle}
              </p>
            )}

            {/* Details */}
            <div className="space-y-2 mb-6">
              {slide.details.map((detail, i) => (
                <p
                  key={i}
                  className="font-display text-gold font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider"
                >
                  {detail}
                </p>
              ))}
            </div>

            {/* Highlight */}
            {slide.highlight && (
              <p className="font-body text-primary-foreground/70 text-base md:text-lg mb-8 flex items-center gap-2">
                {current === 0 && <MapPin className="h-5 w-5 text-gold shrink-0" />}
                {current === 3 && <Facebook className="h-5 w-5 text-gold shrink-0" />}
                {current !== 0 && current !== 3 && <Clock className="h-5 w-5 text-gold shrink-0" />}
                {slide.highlight}
              </p>
            )}

            {/* CTA */}
            {slide.cta && (
              <a
                href={slide.cta.href}
                className="inline-block bg-gold-gradient text-navy-dark font-bold px-8 py-4 rounded-md text-lg uppercase tracking-wider hover:shadow-gold transition-all"
              >
                {slide.cta.label}
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm rounded-full p-3 text-primary-foreground transition-colors focus-visible:outline-gold"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm rounded-full p-3 text-primary-foreground transition-colors focus-visible:outline-gold"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current ? "w-10 bg-gold" : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
