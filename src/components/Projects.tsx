import { motion } from "motion/react";
import { FolderGit2, Layers } from "lucide-react";

export function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20 flex flex-col items-center text-center"
      >
        <h2 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-6xl">
          Projects
        </h2>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {data.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl transition-colors group-hover:bg-purple-500/20" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-purple-400">
                <FolderGit2 className="h-6 w-6" />
              </div>

              <h3 className="mb-4 text-2xl font-medium text-white">
                {project.title}
              </h3>
              
              <div className="mb-6 flex items-center gap-2 font-mono text-sm text-purple-300/70">
                <Layers className="h-4 w-4" />
                <span>{project.stack}</span>
              </div>

              <ul className="flex flex-col gap-3">
                {project.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/50" />
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
