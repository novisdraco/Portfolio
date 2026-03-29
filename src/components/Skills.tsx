import { motion } from "motion/react";
import { Cpu } from "lucide-react";

export function Skills({ data }: { data: any[] }) {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20 flex flex-col items-center text-center"
      >
        <h2 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-6xl">
          Technical Arsenal
        </h2>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition-colors group-hover:bg-orange-500/20" />
            
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-400">
              <Cpu className="h-6 w-6" />
            </div>

            <h3 className="mb-4 font-mono text-xl font-medium text-white">
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item: string, i: number) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
