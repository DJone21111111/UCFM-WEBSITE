import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Give", href: "#give" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-gold/20"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3" aria-label="UCFM Home">
          <img src={logo} alt="Universal Christian Faith Ministry logo" className="h-14 w-14 object-contain" />
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-display text-sm font-bold leading-tight">
              Universal Christian
            </p>
            <p className="text-gold font-display text-sm font-bold leading-tight">
              Faith Ministry
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-body font-semibold uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors rounded-md focus-visible:outline-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0622813149"
            className="flex items-center gap-2 text-gold text-sm font-semibold"
            aria-label="Call us at 06 2281 3149"
          >
            <Phone className="h-4 w-4" />
            <span>06 2281 3149</span>
          </a>
          <a
            href="#give"
            className="bg-gold-gradient text-navy-dark font-bold text-sm px-6 py-2.5 rounded-md hover:shadow-gold transition-shadow uppercase tracking-wider"
          >
            Give
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark border-t border-gold/20"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-primary-foreground/80 hover:text-gold hover:bg-navy/50 rounded-md font-semibold uppercase tracking-wider text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#give"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-gold-gradient text-navy-dark font-bold text-sm px-6 py-3 rounded-md uppercase tracking-wider"
                >
                  Give
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
