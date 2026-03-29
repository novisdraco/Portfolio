import { motion } from "motion/react";
import { User, Briefcase, Trophy, FolderGit2, Cpu, GraduationCap } from "lucide-react";

export function Navigation() {
  const links = [
    { name: "About", href: "#", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Impact", href: "#achievements", icon: Trophy },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Education", href: "#education", icon: GraduationCap },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-xl">
        {links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a
              key={idx}
              href={link.href}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white sm:h-12 sm:w-12"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-10 scale-0 rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-md transition-all group-hover:scale-100">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
