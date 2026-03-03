import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check, X, HandCoins } from "lucide-react";

type GiveType = "tithe" | "offering" | "donation";

const giveOptions: { type: GiveType; label: string; description: string }[] = [
  { type: "tithe", label: "Tithe", description: "Give your faithful tithe unto the Lord" },
  { type: "offering", label: "Offering", description: "Sow a seed offering into God's Kingdom" },
  { type: "donation", label: "Donation", description: "Support the ministry with a generous gift" },
];

const GiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState<GiveType>("tithe");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyIban = () => {
    navigator.clipboard.writeText("NL77INGB0008207647");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSubmitted(false);
    setName("");
    setAmount("");
    setSelectedType("tithe");
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

          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 bg-gold-gradient text-navy-dark font-bold px-10 py-5 rounded-md text-lg uppercase tracking-wider hover:shadow-gold transition-all"
          >
            <HandCoins className="h-6 w-6" />
            Give Online
          </button>

          <p className="mt-8 text-primary-foreground/50 text-sm italic">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under
            compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
        </motion.div>
      </div>

      {/* Give Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Online Tithes Form"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-navy-dark border border-gold/30 rounded-2xl shadow-navy overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gold-gradient p-6 text-center">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-navy-dark/70 hover:text-navy-dark transition-colors"
                  aria-label="Close form"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-dark">
                  Online Tithes
                </h3>
                <p className="text-navy-dark/70 font-semibold text-sm mt-1 uppercase tracking-wider">
                  Universal Christian Faith Ministry
                </p>
              </div>

              {!submitted ? (
                <div className="p-6 md:p-8 space-y-6">
                  {/* Blessing quote */}
                  <p className="text-center text-gold font-display font-bold text-base md:text-lg italic leading-relaxed">
                    "God will surely bless the fruits of your labour in Jesus' Name"
                  </p>

                  <div className="w-16 h-0.5 bg-gold/30 mx-auto" />

                  {/* Give Type Selection */}
                  <div>
                    <label className="block text-gold/80 text-xs uppercase tracking-widest font-semibold mb-3">
                      I want to give my
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {giveOptions.map((opt) => (
                        <button
                          key={opt.type}
                          onClick={() => setSelectedType(opt.type)}
                          className={`py-3 px-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all border ${
                            selectedType === opt.type
                              ? "bg-gold/20 border-gold text-gold"
                              : "border-primary-foreground/10 text-primary-foreground/60 hover:border-gold/40 hover:text-primary-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-primary-foreground/50 text-xs mt-2 text-center">
                      {giveOptions.find((o) => o.type === selectedType)?.description}
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="give-name" className="block text-gold/80 text-xs uppercase tracking-widest font-semibold mb-2">
                      Your Name (optional)
                    </label>
                    <input
                      id="give-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value.slice(0, 100))}
                      placeholder="Enter your name"
                      className="w-full bg-primary-foreground/5 border border-gold/20 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Amount */}
                  <div>
                    <label htmlFor="give-amount" className="block text-gold/80 text-xs uppercase tracking-widest font-semibold mb-2">
                      Amount (€)
                    </label>
                    <input
                      id="give-amount"
                      type="number"
                      min="0"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value.slice(0, 10))}
                      placeholder="0.00"
                      className="w-full bg-primary-foreground/5 border border-gold/20 rounded-lg px-4 py-3 text-primary-foreground text-xl font-mono placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors"
                    />
                    {/* Quick amounts */}
                    <div className="flex gap-2 mt-2">
                      {["10", "25", "50", "100"].map((val) => (
                        <button
                          key={val}
                          onClick={() => setAmount(val)}
                          className="flex-1 py-2 text-sm font-bold rounded-md border border-gold/20 text-gold/70 hover:bg-gold/10 hover:border-gold/40 transition-all"
                        >
                          €{val}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="bg-primary-foreground/5 border border-gold/20 rounded-xl p-5 space-y-3">
                    <p className="text-gold font-display font-bold text-sm uppercase tracking-wider text-center mb-3">
                      Transfer to
                    </p>
                    <div className="text-center space-y-2">
                      <p>
                        <span className="text-gold/60 text-xs uppercase tracking-wider">Account Name</span>
                        <br />
                        <span className="font-semibold text-primary-foreground text-sm">
                          UNIVERSAL CHRISTIAN FAITH MINISTRY
                        </span>
                      </p>
                      <p>
                        <span className="text-gold/60 text-xs uppercase tracking-wider">IBAN</span>
                        <br />
                        <span className="font-semibold text-primary-foreground font-mono tracking-wider">
                          NL77 INGB 0008 2076 47
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={copyIban}
                      className="mx-auto flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-gold font-semibold px-4 py-2 rounded-md transition-all text-sm"
                      aria-label={copied ? "IBAN copied" : "Copy IBAN to clipboard"}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied!" : "Copy IBAN"}
                    </button>
                  </div>

                  {/* Reference note */}
                  <p className="text-primary-foreground/50 text-xs text-center leading-relaxed">
                    Please use{" "}
                    <span className="text-gold/70 font-semibold">
                      {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
                      {name ? ` - ${name}` : ""}
                    </span>{" "}
                    as your payment reference.
                  </p>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gold-gradient text-navy-dark font-bold py-4 rounded-lg text-lg uppercase tracking-wider hover:shadow-gold transition-all"
                  >
                    I Have Made My Transfer
                  </button>
                </div>
              ) : (
                /* Thank You Screen */
                <div className="p-8 md:p-10 text-center space-y-5">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-gold" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-primary-foreground">
                    God Bless You!
                  </h4>
                  <p className="text-gold font-display font-bold text-lg italic">
                    "God will surely bless the fruits of your labour in Jesus' Name"
                  </p>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    Thank you for your generous {selectedType}
                    {name ? `, ${name}` : ""}. Your seed is sown into good soil and will produce an abundant harvest.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-gold-gradient text-navy-dark font-bold px-8 py-3 rounded-md uppercase tracking-wider hover:shadow-gold transition-all text-sm"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GiveSection;
