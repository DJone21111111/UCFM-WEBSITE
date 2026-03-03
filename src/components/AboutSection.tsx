import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Heart, Users, Globe } from "lucide-react";
import generalOverseer from "@/assets/general-overseer.jpeg";

const values = [
  { icon: BookOpen, title: "Bible-Based Teaching", description: "Our foundation is built on the Word of God, teaching sound biblical principles." },
  { icon: Heart, title: "Love & Compassion", description: "We welcome all with open arms, showing the love of Christ to everyone." },
  { icon: Users, title: "Community", description: "Building strong families and a vibrant church community in Amsterdam." },
  { icon: Globe, title: "Global Mission", description: "Reaching nations with the gospel of Jesus Christ and transforming lives." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-semibold uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
          <h2 id="about-heading" className="font-display text-3xl md:text-5xl font-bold text-navy-dark mb-6">
            Where Zeros Become Heroes
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Universal Christian Faith Ministry is a vibrant, bible-believing church in the heart of Amsterdam. 
            Under the leadership of Rev. King Prosper, our General Overseer, we are committed to spreading the 
            gospel and transforming lives through the power of Jesus Christ.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-navy"
          >
            <img
              src={generalOverseer}
              alt="Rev. King Prosper, General Overseer of UCFM Amsterdam, preaching"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <item.icon className="h-6 w-6 text-gold group-hover:text-navy-dark transition-colors" />
                </div>
                <h3 className="font-display font-bold text-navy-dark text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
