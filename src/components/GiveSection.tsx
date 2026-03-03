import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

const GiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyIban = () => {
    navigator.clipboard.writeText("NL77INGB0008207647");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="give" className="py-24 bg-navy-gradient" aria-labelledby="give-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-3">Support Our Ministry</p>
          <h2 id="give-heading" className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Give Generously
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8 rounded-full" />
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Your tithes, offerings, and donations help us continue God's work in Amsterdam and beyond. 
            Every contribution makes a difference in advancing the Kingdom.
          </p>

          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-gold/30 rounded-xl p-8">
            <p className="text-gold font-display font-bold text-lg mb-4">Bank Transfer Details</p>
            <div className="space-y-3 text-primary-foreground/80">
              <p>
                <span className="text-gold/70 text-sm uppercase tracking-wider">Account Name</span>
                <br />
                <span className="font-semibold text-primary-foreground">UNIVERSAL CHRISTIAN FAITH MINISTRY</span>
              </p>
              <p>
                <span className="text-gold/70 text-sm uppercase tracking-wider">IBAN</span>
                <br />
                <span className="font-semibold text-primary-foreground font-mono tracking-wider">
                  NL77 INGB 0008 2076 47
                </span>
              </p>
            </div>
            <button
              onClick={copyIban}
              className="mt-6 inline-flex items-center gap-2 bg-gold-gradient text-navy-dark font-bold px-6 py-3 rounded-md hover:shadow-gold transition-all uppercase tracking-wider text-sm"
              aria-label={copied ? "IBAN copied" : "Copy IBAN to clipboard"}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy IBAN"}
            </button>
          </div>

          <p className="mt-8 text-primary-foreground/50 text-sm italic">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under 
            compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiveSection;
