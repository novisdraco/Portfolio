import { motion } from "motion/react";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

export function Education({ data, certs }: { data: any[]; certs: string[] }) {
  return (
    <section id="education" className="relative z-10 mx-auto max-w-5xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20 flex flex-col items-center text-center"
      >
        <h2 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-6xl">
          Education & Certifications
        </h2>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <h3 className="flex items-center gap-3 text-2xl font-medium text-white">
            <GraduationCap className="h-6 w-6 text-blue-400" />
            Academic Background
          </h3>
          
          <div className="relative border-l border-white/10 pl-8">
            {data.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2 }}
                className="group relative mb-12 last:mb-0"
              >
                <div className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#0a0a0f] bg-blue-500" />
                
                <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
                <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-sm text-white/50">
                  <span className="text-blue-400">{edu.institution}</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {edu.dates}
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors group-hover:bg-white/[0.04]">
                  <p className="text-white/70 leading-relaxed">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="flex items-center gap-3 text-2xl font-medium text-white">
            <Award className="h-6 w-6 text-indigo-400" />
            Certifications
          </h3>
          
          <div className="flex flex-col gap-4">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-colors group-hover:bg-indigo-500/20" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-indigo-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-white/90">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
