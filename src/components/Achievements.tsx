import { motion } from "motion/react";
import { Trophy, Activity, Zap } from "lucide-react";

export function Achievements({ data }: { data: any[] }) {
  const icons = [Trophy, Activity, Zap];

  return (
    <section id="achievements" className="relative z-10 mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20 flex flex-col items-center text-center"
      >
        <h2 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-6xl">
          Key Impact
        </h2>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {data.map((achievement, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-colors group-hover:bg-emerald-500/20" />
              
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-4 font-mono text-xl font-medium text-white">
                {achievement.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {achievement.context}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
