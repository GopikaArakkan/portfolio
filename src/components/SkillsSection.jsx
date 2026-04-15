import React from "react";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
 {
  name: "Tailwind",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
},
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

export default function SkillsAbout() {
  return (
    
//      <section className="h-screen bg-gradient-to-b from-black via-violet-950 to-black flex items-center justify-center lg:px-24 px-10 relative overflow-hidden">

      
//       {/* Background Glow */}
     
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.06),transparent_60%)] blur-3xl" />

//       <div className="relative z-10 max-w-6xl mx-auto text-white">
//         <h2 className="text-5xl font-bold text-center mb-4">
//           Skills & Expertise
//         </h2>
//         <p className="text-center text-gray-300 mb-16">
//           Technologies and tools I use to bring ideas to life
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center gap-4 hover:scale-110 transition duration-300"
//             >
//               <img
//                 src={skill.logo}
//                 alt={skill.name}
//                 className="w-14 h-14 object-contain"
//               />
//               <span className="text-sm tracking-wide">
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

 <section id="skills" className="h-screen bg-gradient-to-b from-black via-violet-950 to-black flex items-center justify-center px-10 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.04),transparent_60%)] blur-3xl" />

      <div className="relative z-10 max-w-6xl w-full text-white">
        <h2 className="text-5xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-300 mb-16">
          Technologies and tools I use to bring ideas to life
        </p>

        {/* Invisible marquee container */}
        <div className="relative w-full overflow-hidden space-y-10 group">


          {/* Top row */}
          <div className="flex w-max gap-8 animate-marquee-left group-hover:[animation-play-state:paused]">

            {[...skills, ...skills].map((skill, i) => (
              <SkillCard key={`top-${i}`} skill={skill} />
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex w-max gap-8 animate-marquee-right group-hover:[animation-play-state:paused]">

            {[...skills, ...skills].map((skill, i) => (
              <SkillCard key={`bottom-${i}`} skill={skill} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[120px] hover:scale-110 transition">
      <img src={skill.logo} alt={skill.name} className="w-14 h-14 object-contain" />
      <span className="text-sm tracking-wide">{skill.name}</span>
    </div>
  );
}
