import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";

const images = [
  { src: gallery1, alt: "Apostle General with church member" },
  { src: gallery2, alt: "Apostle General with young church members and flowers" },
  { src: gallery3, alt: "Church members welcoming Apostle General with flowers" },
  { src: gallery4, alt: "Pastor's Appreciation Day celebration at UCFM" },
  { src: gallery5, alt: "Member worshipping during a church service" },
  { src: gallery6, alt: "Congregation member in deep worship" },
  { src: gallery7, alt: "Congregation worshipping together at UCFM" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-cream" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-semibold uppercase tracking-[0.2em] text-sm mb-3">Our Moments</p>
          <h2 id="gallery-heading" className="font-display text-3xl md:text-5xl font-bold text-navy-dark mb-6">
            Life at UCFM
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden rounded-xl group cursor-pointer focus-visible:ring-2 focus-visible:ring-gold ${
                i === 0 || i === 6 ? "row-span-2" : ""
              }`}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/30 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
