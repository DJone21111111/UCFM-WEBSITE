import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const WatchLiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="watch-live" className="py-24 bg-[#800000]" aria-labelledby="live-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Live indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
            </span>
            <span className="text-red-400 font-bold uppercase tracking-wider text-sm">Live</span>
          </div>
          <h2
            id="live-heading"
            className="font-display text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4"
          >
            Join Our Live Service
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Worship with us from anywhere in the world. Tune in every Sunday at 10:00 AM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=PGf8ENeO4j7Wglu-i4PDWg"
                title="UCFM Live Stream"
                width="100%"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@UniversalChristianFaithMinistry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#800000] font-bold px-8 py-4 rounded-md text-lg uppercase tracking-wider hover:bg-[#e8c84a] transition-colors"
            >
              Open in YouTube App
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WatchLiveSection;
