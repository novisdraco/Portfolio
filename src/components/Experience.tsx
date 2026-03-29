import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience({ data }: { data: any[] }) {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-5xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20 flex flex-col items-center text-center"
      >
        <h2 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-6xl">
          Professional Experience
        </h2>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
      </motion.div>

      <div className="relative border-l border-white/10 pl-8 md:pl-12">
        {data.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2 }}
            className="group relative mb-16 last:mb-0"
          >
            <div className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#0a0a0f] bg-blue-500 md:-left-[57px]" />
            
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-medium text-white">{job.role}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-sm text-white/50">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Briefcase className="h-4 w-4" />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {job.dates}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors group-hover:bg-white/[0.04]">
              <ul className="flex flex-col gap-4">
                {job.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
