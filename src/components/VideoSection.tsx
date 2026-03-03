import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Radio, PlayCircle } from "lucide-react";

const WatchLiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showLatest, setShowLatest] = useState(false);

  const liveStreamUrl =
    "https://www.youtube.com/embed/live_stream?channel=PGf8ENeO4j7Wglu-i4PDWg";
  const latestVideosUrl =
    "https://www.youtube.com/embed/gm3T_ddIxeg";
  const channelUrl =
    "https://www.youtube.com/@UniversalChristianFaithMinistry";

  return (
    <section id="watch-live" className="py-24 bg-[#800000]" aria-labelledby="live-heading">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Toggle buttons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setShowLatest(false)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-colors ${
                !showLatest
                  ? "bg-[#D4AF37] text-[#800000]"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 ${!showLatest ? "animate-ping" : ""}`} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
              </span>
              Watch Live
            </button>
            <button
              onClick={() => setShowLatest(true)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-colors ${
                showLatest
                  ? "bg-[#D4AF37] text-[#800000]"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <PlayCircle className="h-4 w-4" />
              Latest Service
            </button>
          </div>

          <h2
            id="live-heading"
            className="font-display text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4"
          >
            {showLatest ? "Watch Our Latest Service" : "Join Our Live Service"}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            {showLatest
              ? "Missed the live service? Catch up on our most recent broadcast."
              : "Worship with us from anywhere in the world. Tune in every Sunday at 10:00 AM."}
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
              {!showLatest ? (
                <iframe
                  key="live"
                  src={liveStreamUrl}
                  title="UCFM Live Stream"
                  width="100%"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  key="latest"
                  src={latestVideosUrl}
                  title="UCFM Latest Service"
                  width="100%"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {!showLatest && (
            <p className="text-center text-white/50 text-sm mt-4">
              Not seeing a live stream? Switch to{" "}
              <button
                onClick={() => setShowLatest(true)}
                className="text-[#D4AF37] underline hover:text-[#e8c84a]"
              >
                Latest Service
              </button>{" "}
              to watch our most recent broadcast.
            </p>
          )}

          <div className="text-center mt-8">
            <a
              href={channelUrl}
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
