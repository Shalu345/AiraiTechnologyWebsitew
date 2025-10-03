// import React from "react";
// import { ArrowRight, HelpCircle, ShieldCheck, Zap, Star, Workflow, Rocket, Cpu, Smartphone, MousePointerClick } from "lucide-react";
// import { motion } from "framer-motion";

// /**
//  * PIXEL-STYLE CLONE (single-column like screenshot)
//  * - Uses a fixed content width (360px) to match the tall, narrow mockup you shared
//  * - Neon magenta strip, dark background, soft glows, tiny typography
//  * - Replace /public/images/* with your real assets for a truly identical look
//  *
//  * HOW TO USE
//  * 1) Put this file as src/pages/Home.jsx (or any component)
//  * 2) Ensure Tailwind is set up
//  * 3) Add images in /public/images (logo.svg, hero.jpg, chart.png, team.jpg, game1.jpg, game2.jpg, app1.jpg)
//  * 4) Import and render <Home />
//  */

// const Glow = ({ className = "" }) => (
//   <div className={`pointer-events-none absolute blur-3xl opacity-30 ${className}`} />
// );

// const Metric = ({ value, label }) => (
//   <div className="text-center px-2 py-1">
//     <div className="text-white font-extrabold text-sm leading-none">{value}</div>
//     <div className="text-[9px] uppercase tracking-widest text-white/80 mt-1">{label}</div>
//   </div>
// );

// const Eyebrow = ({ children }) => (
//   <span className="inline-block text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
//     {children}
//   </span>
// );

// const Feature = ({ icon: Icon, title, desc }) => (
//   <div className="group relative rounded-2xl p-4 bg-[radial-gradient(80%_120%_at_50%_-20%,rgba(255,0,167,0.15),transparent)] border border-white/10 hover:border-pink-500/40 transition-colors">
//     <div className="absolute inset-0 rounded-2xl bg-pink-500/0 group-hover:bg-pink-500/5 transition-colors" />
//     <div className="relative">
//       <div className="w-9 h-9 rounded-full grid place-items-center bg-pink-600 text-white shadow-[0_0_20px_rgba(255,0,167,0.6)]">
//         <Icon size={16} />
//       </div>
//       <h4 className="mt-2 text-white font-semibold text-[13px]">{title}</h4>
//       <p className="mt-1 text-[11px] leading-5 text-neutral-300">{desc}</p>
//     </div>
//   </div>
// );

// const Step = ({ n, title, desc }) => (
//   <div className="flex items-start gap-3">
//     <div className="mt-0.5 w-6 h-6 rounded-full grid place-items-center text-[10px] font-bold bg-pink-500 text-white shadow-[0_0_20px_rgba(255,0,167,0.6)]">{n}</div>
//     <div>
//       <div className="text-white text-[13px] font-semibold">{title}</div>
//       <p className="text-[11px] text-neutral-300 mt-0.5 leading-5">{desc}</p>
//     </div>
//   </div>
// );

// export default function Home() {
//   return (
//     <div className="min-h-screen w-full bg-[#0B0B0F] text-neutral-200 overflow-x-hidden">
//       {/* Global glows */}
//       <Glow className="-top-28 -left-10 h-72 w-72 bg-pink-500" />
//       <Glow className="top-64 -right-24 h-96 w-96 bg-fuchsia-600" />

//       {/* Constrain to narrow column like screenshot */}
//       <div className="mx-auto max-w-[360px]">
//         {/* TOP BAR + NAV */}
//         <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
//           <div className="px-3">
//             <div className="flex items-center justify-between h-12">
//               <div className="flex items-center gap-2">
//                 <img src="/images/logo.svg" alt="logo" className="h-5 w-auto" />
//                 <span className="text-white text-sm font-semibold tracking-wide">AIRAI</span>
//               </div>
//               <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-[11px] font-semibold shadow-[0_10px_30px_rgba(255,0,167,0.35)]">
//                 Get Started <ArrowRight size={14} />
//               </button>
//             </div>
//           </div>
//           {/* neon strip */}
//           <div className="bg-pink-600">
//             <div className="px-2 py-1 grid grid-cols-4">
//               <Metric value="50+" label="Projects" />
//               <Metric value="10+" label="Experts" />
//               <Metric value="5★" label="Reviews" />
//               <Metric value="24/7" label="Support" />
//             </div>
//           </div>
//         </header>

//         {/* HERO */}
//         <section className="relative px-3 pt-4 pb-6">
//           <Eyebrow>Revolutionizing the Future of Games</Eyebrow>
//           <h1 className="mt-2 text-[22px] font-extrabold text-white leading-snug">
//             Build stunning gaming experiences with a world‑class team
//           </h1>
//           <p className="mt-2 text-[12px] text-neutral-300">
//             Scalable backends, elegant frontends and immersive game systems. Performance, security and polish.
//           </p>
//           <div className="mt-3 flex gap-2">
//             <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-[12px] font-semibold shadow-[0_10px_30px_rgba(255,0,167,0.35)]">
//               Talk to Us <ArrowRight size={14} />
//             </button>
//             <button className="px-3.5 py-1.5 rounded-full border border-white/15 text-white/90 text-[12px] hover:bg-white/5">Our Work</button>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="mt-4"
//           >
//             <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
//               <img src="/images/hero.jpg" alt="hero" className="w-full h-[180px] object-cover object-right" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//               <button className="absolute bottom-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-pink-600 text-white flex items-center gap-1">
//                 Explore <ArrowRight size={12} />
//               </button>
//             </div>
//           </motion.div>
//         </section>

//         {/* WHO WE ARE */}
//         <section className="relative px-3 py-6">
//           <div className="text-center">
//             <Eyebrow>Who We Are</Eyebrow>
//             <h2 className="mt-2 text-[18px] font-bold text-white">A tight‑knit studio delivering premium apps & games</h2>
//             <p className="mt-2 text-[12px] text-neutral-300">Small team, senior talent. We ship, iterate and scale with care.</p>
//           </div>
//           <div className="mt-4 space-y-3">
//             <div className="rounded-xl p-4 bg-white/5 border border-white/10">
//               <img src="/images/chart.png" alt="chart" className="w-full h-28 object-contain" />
//               <p className="text-[11px] text-neutral-300 mt-2">Laser‑focused on results: metrics that matter, stability that lasts.</p>
//             </div>
//             <div className="rounded-xl p-4 bg-white/5 border border-white/10">
//               <h4 className="text-white font-semibold text-[13px]">Mission</h4>
//               <p className="text-[11px] text-neutral-300 mt-1 leading-6">We build products people love—combining engineering discipline with game‑grade UX. On time, on budget.</p>
//             </div>
//             <div className="rounded-xl p-4 bg-white/5 border border-white/10">
//               <h4 className="text-white font-semibold text-[13px]">Values</h4>
//               <ul className="mt-1 space-y-1.5 text-[11px] text-neutral-300">
//                 <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-pink-400" /> Security‑first</li>
//                 <li className="flex items-center gap-2"><Zap size={14} className="text-pink-400" /> Performance obsessed</li>
//                 <li className="flex items-center gap-2"><Star size={14} className="text-pink-400" /> Player delight</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* OUR EXPERTISE */}
//         <section id="expertise" className="relative px-3 py-6">
//           <div className="text-center">
//             <Eyebrow>Our Expertise</Eyebrow>
//             <h2 className="mt-2 text-[18px] font-bold text-white">From backend to build pipeline</h2>
//           </div>
//           <div className="mt-3 grid grid-cols-2 gap-3">
//             <Feature icon={Cpu} title="Backend (Node.js)" desc="Microservices, websockets, queues." />
//             <Feature icon={Smartphone} title="Mobile & Web" desc="React, RN, Tailwind, perf UI." />
//             <Feature icon={Workflow} title="Pipelines & DevOps" desc="CI/CD, Docker, cloud infra." />
//             <Feature icon={MousePointerClick} title="Game Systems" desc="Auth, economy, leaderboards." />
//             <Feature icon={Rocket} title="Launch & Scale" desc="Stores, analytics, liveops." />
//             <Feature icon={ShieldCheck} title="Security & QA" desc="Pen‑tests, load tests, QA." />
//           </div>
//         </section>

//         {/* WORK PROCESS */}
//         <section id="process" className="relative px-3 py-6">
//           <div className="rounded-xl overflow-hidden border border-white/10">
//             <img src="/images/team.jpg" alt="team" className="w-full h-36 object-cover" />
//           </div>
//           <div className="mt-3 rounded-xl p-4 bg-white/5 border border-white/10">
//             <h3 className="text-white font-bold text-[16px]">Our Work Process</h3>
//             <div className="mt-4 space-y-4">
//               <Step n={1} title="Discover" desc="Goals, users, constraints." />
//               <Step n={2} title="Design" desc="Flows, UI kit, architecture." />
//               <Step n={3} title="Develop" desc="Sprints, demos, instrumentation." />
//               <Step n={4} title="Deliver" desc="Hardening, launch, docs." />
//             </div>
//             <button className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-600 text-white text-[11px] font-semibold">
//               See detailed flow <ArrowRight size={14} />
//             </button>
//           </div>
//         </section>

//         {/* PORTFOLIO */}
//         <section id="portfolio" className="relative px-3 py-6">
//           <div className="text-center">
//             <Eyebrow>Our Portfolio</Eyebrow>
//             <h2 className="mt-2 text-[18px] font-bold text-white">Recent highlights</h2>
//           </div>
//           <div className="mt-3 grid grid-cols-3 gap-2.5">
//             {["game1.jpg","game2.jpg","app1.jpg"].map((img, i) => (
//               <div key={i} className="group relative border border-white/10 rounded-xl overflow-hidden">
//                 <img src={`/images/${img}`} alt="work" className="w-full h-24 object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
//                   <div>
//                     <div className="text-white text-[12px] font-semibold">Project {i+1}</div>
//                     <div className="text-[10px] text-white/80">Case study</div>
//                   </div>
//                   <button className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white text-[10px]">View</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* WHY CHOOSE US */}
//         <section className="relative px-3 py-6">
//           <div className="text-center">
//             <Eyebrow>Why Choose Us</Eyebrow>
//             <h2 className="mt-2 text-[18px] font-bold text-white">We ship. We support. We improve.</h2>
//           </div>
//           <div className="mt-3 grid grid-cols-5 gap-2 items-center">
//             {["Discovery","Design","Build","Launch","Scale"].map((t, i) => (
//               <div key={t} className="relative text-center">
//                 <div className="mx-auto w-7 h-7 rounded-full grid place-items-center bg-pink-600 text-white text-[11px] font-bold shadow-[0_0_20px_rgba(255,0,167,0.6)]">{i+1}</div>
//                 <div className="mt-1 text-[10px] text-white/80">{t}</div>
//                 {i < 4 && (
//                   <div className="absolute top-[14px] left-full w-full h-[2px] bg-gradient-to-r from-pink-600/40 to-fuchsia-600/40" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* FAQ */}
//         <section id="faq" className="relative px-3 py-6">
//           <div className="text-center">
//             <Eyebrow>Frequently Asked Questions</Eyebrow>
//             <h2 className="mt-2 text-[18px] font-bold text-white">Got questions?</h2>
//           </div>
//           <div className="mt-3 space-y-2.5">
//             {[
//               {q: "How long does a project take?", a: "MVPs ship in 4–8 weeks; larger scopes vary."},
//               {q: "Do you provide post‑launch support?", a: "Yes. We monitor, fix and iterate with SLAs."},
//               {q: "Which stacks do you use?", a: "Node.js, React/React Native, Postgres, Docker and more."},
//               {q: "Can you join our existing team?", a: "Absolutely—staff‑augmentation or feature squads."},
//               {q: "What about pricing?", a: "Fixed for well‑defined scopes; otherwise time & materials."},
//             ].map((item, i) => (
//               <details key={i} className="group rounded-lg border border-white/10 bg-white/5 p-3">
//                 <summary className="list-none cursor-pointer flex items-center justify-between gap-3">
//                   <div className="flex items-center gap-2 text-[13px] text-white"><HelpCircle size={14} className="text-pink-400" /> {item.q}</div>
//                   <div className="text-white/70 group-open:rotate-90 transition-transform"><ArrowRight size={14} /></div>
//                 </summary>
//                 <p className="mt-1.5 text-[11px] text-neutral-300 leading-6">{item.a}</p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* FOOTER */}
//         <footer className="mt-6 border-t border-white/10">
//           <div className="px-3 py-6 grid grid-cols-2 gap-4">
//             <div>
//               <div className="flex items-center gap-2">
//                 <img src="/images/logo.svg" alt="logo" className="h-5 w-auto" />
//                 <span className="text-white text-sm font-semibold tracking-wide">AIRAI</span>
//               </div>
//               <p className="text-[11px] text-neutral-400 mt-2">Premium apps & game engineering. Built in India, loved worldwide.</p>
//             </div>
//             <div>
//               <h5 className="text-white text-[13px] font-semibold">Company</h5>
//               <ul className="mt-2 space-y-1 text-[11px] text-neutral-300">
//                 <li>About</li>
//                 <li>Careers</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="text-white text-[13px] font-semibold">Services</h5>
//               <ul className="mt-2 space-y-1 text-[11px] text-neutral-300">
//                 <li>Backend</li>
//                 <li>Mobile</li>
//                 <li>DevOps</li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="text-white text-[13px] font-semibold">Legal</h5>
//               <ul className="mt-2 space-y-1 text-[11px] text-neutral-300">
//                 <li>Privacy</li>
//                 <li>Terms</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-white/10">
//             <div className="px-3 h-10 text-[10px] flex items-center justify-between text-neutral-400">
//               <div>© {new Date().getFullYear()} AIRAI. All rights reserved.</div>
//               <div className="flex items-center gap-3">
//                 <span>Twitter</span>
//                 <span>LinkedIn</span>
//                 <span>GitHub</span>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }
