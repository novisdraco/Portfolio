import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";

export function Hero({ data }: { data: any }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 flex max-w-4xl flex-col items-center gap-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-white/70">
            {data.location} • Available for Opportunities
          </span>
        </motion.div>

        <h1 className="font-sans text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-8xl">
          {data.name}
        </h1>
        
        <h2 className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text font-mono text-xl font-light tracking-widest text-transparent sm:text-2xl">
          {data.title}
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
          {data.summary}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-white/90"
          >
            <span>View Experience</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.print();
            }}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-8 justify-center rounded-full border-2 border-white/20 p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
