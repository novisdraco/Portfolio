import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Splash({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="font-mono text-4xl font-light tracking-widest text-white">
            TJ
          </span>
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-white/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="flex w-48 flex-col gap-2">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-white/80"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/50">
            <span>Initializing</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
