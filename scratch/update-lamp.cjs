const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Add import for LampContainer and motion if not present
if (!content.includes('import { LampContainer }')) {
  content = content.replace(
    /import AchievementsMarquee from '\.\.\/components\/AchievementsMarquee';/,
    `import AchievementsMarquee from '../components/AchievementsMarquee';\nimport { LampContainer } from '../components/ui/lamp';\nimport { motion } from 'framer-motion';`
  );
}

// 2. Replace the Achievements section
const newSection = `      {/* --- AWARDS & ACHIEVEMENTS --- */}
      <section className="ambigo-section bg-slate-950" style={{ paddingInline: 0, overflowX: 'clip', overflowY: 'visible' }}>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-orange-300 to-orange-600 py-4 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent md:text-6xl mb-4"
          >
            Prestigious Awards <br /> & Achievements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-slate-400 text-lg text-center max-w-3xl mb-16"
          >
            Recognized by the most esteemed organizations for our outstanding contribution to the healthcare sector.
          </motion.p>

          {/* Wide Award Card - Light Theme with Glow */}
          <div className="relative mb-20 max-w-5xl mx-auto group w-full">
            {/* Glow Effect Background */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 rounded-[44px] blur-xl opacity-20 group-hover:opacity-50 transition duration-700"></div>
            
            <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border border-slate-700 z-10 w-full">
              {/* Decorative background cutouts */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

              <div className="flex-1 relative z-10 text-left">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl inline-flex items-center justify-center p-3 mb-6 shadow-sm">
                  <img src="/apdts26.png" alt="Logo" className="h-10 object-contain brightness-200" />
                </div>
                <p className="text-slate-400 text-sm mb-3 font-semibold uppercase tracking-wider">We are honored to be a</p>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">Student Innovator /<br />Campus Startup Award</h3>
                <p className="text-orange-400 font-bold tracking-wide">#techpioneers25</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
                <img src="/summit_ap.png" alt="Award 1" className="h-36 md:h-44 w-auto object-cover rounded-[16px] ambigo-glow-image shadow-xl shadow-black/50" />
                <img src="/summit_ap2.png" alt="Award 2" className="h-36 md:h-44 w-auto object-cover rounded-[16px] ambigo-glow-image shadow-xl shadow-black/50" />
              </div>
            </div>
          </div>

          {/* Scrolling Gallery of Cards - Full Width */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 group/gallery pb-12">
            <AchievementsMarquee />
          </div>
        </LampContainer>
      </section>    </div>`;

// Replace the existing section
content = content.replace(/\{\/\* --- AWARDS & ACHIEVEMENTS --- \*\/\}[\s\S]*?<\/section>\s*<\/div>/, newSection);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Successfully updated Home.tsx with Lamp effect!');
