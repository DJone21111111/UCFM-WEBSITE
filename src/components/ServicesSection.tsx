import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Calendar } from "lucide-react";

const services = [
  { day: "Sunday", name: "Sunday Worship Service", time: "10:00 AM – 1:00 PM", icon: Calendar },
  { day: "Wednesday", name: "Bible Study & Prayer", time: "7:00 PM – 9:00 PM", icon: Clock },
  { day: "Friday", name: "Prayer Night", time: "8:00 PM – 10:00 PM", icon: Clock },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-navy-gradient" aria-labelledby="services-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-3">Worship With Us</p>
          <h2 id="services-heading" className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Service Schedule
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-gold/20 rounded-xl p-8 text-center hover:border-gold/50 transition-all group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display text-gold text-xl font-bold mb-2">{service.day}</h3>
              <p className="text-primary-foreground font-semibold mb-2">{service.name}</p>
              <p className="text-primary-foreground/60 text-sm">{service.time}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center flex items-center justify-center gap-2 text-primary-foreground/70"
        >
          <MapPin className="h-5 w-5 text-gold" />
          <p className="font-body">Hettenheuvelweg 18, 1101BN, Amsterdam</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
