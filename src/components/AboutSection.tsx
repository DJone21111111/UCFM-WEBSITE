import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Heart, Users, Globe, ChevronRight } from "lucide-react";
import aboutChurch from "@/assets/about-church.jpg";
import gallery4 from "@/assets/gallery-4.jpeg";

const values = [
  {
    icon: BookOpen,
    title: "Bible-Based Teaching",
    description: "Our foundation is built on the Word of God, teaching sound biblical principles for everyday living.",
  },
  {
    icon: Heart,
    title: "Love & Compassion",
    description: "We welcome everyone with open arms, showing the love of Christ to all who walk through our doors.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong families and a vibrant church community right here in the heart of Amsterdam.",
  },
  {
    icon: Globe,
    title: "Global Mission",
    description: "Reaching nations with the gospel of Jesus Christ and transforming lives across the world.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section id="about" className="py-24 bg-cream" aria-labelledby="about-heading">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            About Us
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl md:text-5xl font-bold text-navy-dark mb-6"
          >
            Where Zeros Become Heroes
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Universal Christian Faith Ministry is a vibrant, bible-believing church in Amsterdam.
            We are committed to spreading the gospel and transforming lives through the power of Jesus Christ.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: stacked images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-navy">
              <img
                src={gallery4}
                alt="Pastor's Appreciation Day celebration at UCFM Amsterdam"
                className="w-full h-[350px] object-cover"
              />
            </div>
            {/* Overlapping accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-8 -right-4 md:right-8 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-navy border-4 border-cream"
            >
              <img
                src={aboutChurch}
                alt="Beautiful church interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Motto badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-4 md:left-8 bg-navy-dark text-primary-foreground px-6 py-4 rounded-xl shadow-navy max-w-[240px]"
            >
              <p className="font-display text-gold text-xs font-bold uppercase tracking-wider mb-1">Our Motto</p>
              <p className="text-primary-foreground/80 text-xs leading-relaxed italic">
                "Where Jesus is making the zeros to heroes"
              </p>
            </motion.div>
          </motion.div>

          {/* Right: interactive values */}
          <div className="pt-4 lg:pt-0">
            <div className="space-y-3">
              {values.map((item, i) => (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  onClick={() => setActiveValue(i)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group flex items-start gap-4 ${
                    activeValue === i
                      ? "bg-navy-dark border-gold/40 shadow-navy"
                      : "bg-card border-border hover:border-gold/30 hover:shadow-sm"
                  }`}
                  aria-expanded={activeValue === i}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      activeValue === i
                        ? "bg-gold"
                        : "bg-navy group-hover:bg-gold"
                    }`}
                  >
                    <item.icon
                      className={`h-6 w-6 transition-colors ${
                        activeValue === i
                          ? "text-navy-dark"
                          : "text-gold group-hover:text-navy-dark"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-display font-bold text-lg transition-colors ${
                          activeValue === i ? "text-gold" : "text-navy-dark"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <ChevronRight
                        className={`h-5 w-5 transition-all ${
                          activeValue === i
                            ? "text-gold rotate-90"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeValue === i ? "auto" : 0,
                        opacity: activeValue === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`text-sm leading-relaxed mt-2 ${
                          activeValue === i
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
