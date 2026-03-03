import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Facebook } from "lucide-react";
import heroWorship from "@/assets/hero-worship.jpg";
import heroBible from "@/assets/hero-bible.jpg";
import heroPrayer from "@/assets/hero-prayer.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

interface Slide {
  bg: string;
  tagline: string;
  title: string;
  subtitle: string;
  details: { icon: typeof Clock; text: string }[];
  cta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    bg: heroWorship,
    tagline: "Join Us Every Sunday",
    title: "SUNDAY WORSHIP SERVICE",
    subtitle: "Experience the presence of God through praise, worship, and the preaching of His Word.",
    details: [
      { icon: Clock, text: "Sundays • 10:00 AM – 1:00 PM" },
      { icon: MapPin, text: "Hettenheuvelweg 18, 1101BN, Amsterdam" },
    ],
    cta: { label: "Plan Your Visit", href: "#contact" },
  },
  {
    bg: heroBible,
    tagline: "Grow Deeper In The Word",
    title: "BIBLE STUDY & PRAYER",
    subtitle: "A midweek encounter to strengthen your faith and deepen your understanding of Scripture.",
    details: [
      { icon: Clock, text: "Wednesdays • 7:00 PM – 9:00 PM" },
      { icon: MapPin, text: "Hettenheuvelweg 18, 1101BN, Amsterdam" },
    ],
    cta: { label: "Learn More", href: "#services" },
  },
  {
    bg: heroPrayer,
    tagline: "A Night Of Breakthrough",
    title: "FRIDAY PRAYER NIGHT",
    subtitle: "Powerful intercession and spiritual warfare. Come expectant, leave transformed.",
    details: [
      { icon: Clock, text: "Fridays • 8:00 PM – 10:00 PM" },
      { icon: MapPin, text: "Hettenheuvelweg 18, 1101BN, Amsterdam" },
    ],
    cta: { label: "Join Us In Prayer", href: "#contact" },
  },
  {
    bg: heroCommunity,
    tagline: "Become Part Of Our Family",
    title: "CONNECT WITH UCFM",
    subtitle: "We are a bible believing church where Jesus is making the zeros to heroes.",
    details: [
      { icon: Phone, text: "06 2281 3149" },
      { icon: Facebook, text: "UCFM Amsterdam" },
    ],
    cta: { label: "Give Online", href: "#give" },
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Universal Christian Faith Ministry"
      aria-roledescription="carousel"
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={slide.bg} alt="" role="presentation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-dark/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-navy-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold font-body font-semibold text-sm md:text-base uppercase tracking-[0.25em] mb-4"
            >
              {slide.tagline}
            </motion.p>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1] mb-5">
              {slide.title}
            </h1>

            {/* Gold accent line */}
            <div className="w-24 h-1.5 bg-gold-gradient rounded-full mb-6" />

            {/* Subtitle */}
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {slide.subtitle}
            </p>

            {/* Details */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {slide.details.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm border border-gold/20 rounded-lg px-5 py-3"
                >
                  <detail.icon className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                  <span className="text-primary-foreground/90 font-body font-medium text-sm">
                    {detail.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={slide.cta.href}
              className="inline-block bg-gold-gradient text-navy-dark font-bold px-10 py-4 rounded-lg text-base uppercase tracking-wider hover:shadow-gold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {slide.cta.label}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-gold/20 backdrop-blur-md rounded-full p-3 md:p-4 text-primary-foreground hover:text-gold transition-all border border-primary-foreground/10 hover:border-gold/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-gold/20 backdrop-blur-md rounded-full p-3 md:p-4 text-primary-foreground hover:text-gold transition-all border border-primary-foreground/10 hover:border-gold/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots + slide counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4" role="tablist" aria-label="Slide indicators">
        <span className="text-primary-foreground/50 text-xs font-mono tracking-wider">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-gold"
                  : "w-2.5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
        <span className="text-primary-foreground/50 text-xs font-mono tracking-wider">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
