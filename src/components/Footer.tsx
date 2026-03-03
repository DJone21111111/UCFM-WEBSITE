import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-gold/20 py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" className="h-12 w-12 object-contain" />
              <div>
                <p className="text-primary-foreground font-display font-bold text-sm">Universal Christian</p>
                <p className="text-gold font-display font-bold text-sm">Faith Ministry</p>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              A bible believing church where Jesus is making the zeros to heroes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact", "Give"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-display font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-primary-foreground/60 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Hettenheuvelweg 18, 1101BN, Amsterdam</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="tel:0622813149" className="hover:text-gold transition-colors">06 2281 3149</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="mailto:universalchristianfaithministr@gmail.com" className="hover:text-gold transition-colors break-all">
                  universalchristianfaithministr@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="https://www.facebook.com/ucfmAmsterdam" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  UCFM Amsterdam
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Universal Christian Faith Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
