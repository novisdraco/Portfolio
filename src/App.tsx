/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Splash } from "./components/Splash";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Navigation } from "./components/Navigation";
import { resumeData } from "./data";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white selection:bg-emerald-500/30">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <>
          <AnimatedBackground />
          <Navigation />
          
          <main className="relative z-10 flex flex-col gap-24 pb-32">
            <Hero data={resumeData.basics} />
            <Experience data={resumeData.experience} />
            <Achievements data={resumeData.achievements} />
            <Projects data={resumeData.projects} />
            <Skills data={resumeData.skills} />
            <Education data={resumeData.education} certs={resumeData.certifications} />
          </main>
        </>
      )}
    </div>
  );
}

