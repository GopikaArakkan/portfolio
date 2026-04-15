// import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger' 
// import { SlShareAlt } from "react-icons/sl";


// const ProjectSection = () => {
//     const sectionRef = useRef(null)
//     const titleRef = useRef(null)
//      const titleLineRef = useRef(null)
//      const triggerRef = useRef(null)
//      const horizontalRef = useRef(null)

//     //  project images data
//      const projectImages = [
//         {
//             id:1,
//             title: "3D Gaming Website",
//             imageSrc: "/images/project-1.png",
//         },

//         {
//              id:2,
//             title: "Startup App",
//             imageSrc: "/images/project-2.png",
//         },

//         {
//              id:3,
//             title: "Portfolio Website",
//             imageSrc: "/images/project-3.png",
//         },

//         {
//              id:4,
//             title: "Award Winning Web",
//             imageSrc: "/images/project-4.png",
//         }
//      ]

// useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     // title reveal animation
//     gsap.fromTo(
//         titleRef.current,
//         {
//             y: 100,
//             opacity:0
//         },
//         {
//             y:0,
//             opacity: 1,
//             duration: 1.2,
//             ease:"power3.out",
//             scrollTrigger:{
//                 trigger:sectionRef.current,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             }
//         }
//     )

//     // title line animation
//     gsap.fromTo(
//         titleLineRef.current,
//         {
//             width:"0%",
//             opacity: 0,
//         },
//         {
//             width:"100%",
//             opacity:1,
//             duration:1.5,
//             ease:"power3.inOut",
//             delay:0.3,
//             scrollTrigger: {
//                 trigger:sectionRef.current,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             }
//         }
//     )
//     // section entrance effect
//         gsap.fromTo(
//             triggerRef.current,
//             {
//                 y :100,
//                 rotationX : 20,
//                 opacity : 0,
//             },

//             {
//                 y :100,
//                 rotationX : 20,
//                 opacity : 1,
//                  duration:1.5,
//             ease:"power2.out",
//             delay:0.2,
//             scrollTrigger: {
//                 trigger:sectionRef.current,
//                 start: "top 70%",
//                 toggleActions: "play none none reverse",

//             }
//          }

//     )

//     // parallax effect for the entire section
//     gsap.fromTo(
//         sectionRef.current,
//         {
//             backgroundPosition: "50% 0%"
//         },
//         {
//             backgroundPosition: "50% 100%",
//             ease:"none",
//             scrollTrigger: {
//                  trigger:sectionRef.current,
//                  start: "top bottom",
//                  end: "bottom top",
//                  scrub: true,

//             }
//         }
//     )
//     // horizontal scrolling
//     // create the horizontal scrolling animation
//     const horizontalScroll = gsap.to(".panel", {
//         xPercent: -100 * (projectImages.length - 1), ease:"none",
//             scrollTrigger: {
//                  trigger:sectionRef.current,
//                   start: "top top",
//                  end: () => `+=${horizontalRef.current.offsetWidth}`,
//                  pin: true,
//                  scrub: 1,
//                  snap: {
//                     spanTo: 1 / (projectImages.length - 1),
//                     duration: { main: 0.2, max: 0.3 },
//                     delay: 0.1,
//                  },
//                  invalidateOnRefresh:true,

//              }
//     })


//         // image animation
//         // Animate each image panel
//         const panels = gsap.utils.toArray(".panel")
//         panels.forEach((panel, i) => {
//             const image = panel.querySelector(".project-image")
//              const imageTitle = panel.querySelector(".project-title")


//     // create a timeline for each panel
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: panel,
//             containerAnimation: horizontalScroll,
//             start: "left right",
//             end: "right left",
//             scrub: true,

//         }
//     })

//     // image scale and opacity animation
//     tl.fromTo(image, { scale: 0, rotate: -20, }, { scale: 1,
//         rotate: 1, duration: 0.5
//     })

//     // title animation if it exist
//     if(imageTitle) {
//         tl.fromTo(imageTitle, { y: 30, }, { y: -100, duration: 0.3, }, 0.2)
//     }

//         })

// }, [projectImages.length])

//   return (
//     <section 
//     ref={sectionRef}
//     id="horizontal-section"
//     className='relative py-20 overflow-hidden'
//     >

//         {/* {section title} */}
//         <div className='container mx-auto px-4 mb-16 relative z-10'>
//             <h2 ref={titleRef} className='text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 opacity-0'>
//                 Featured Projects
//             </h2>

//         <div ref={titleLineRef} className='w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0'>

//         </div>
//         </div>



//         {/* horizontal scroll section */}
//         <div ref={triggerRef} className='overflow-hidden opacity-0'>
           
//             <div ref={horizontalRef}className='horizontal-section flex md:w-[400%] w-[420%]'>

//         {projectImages.map((project) => (
//             <div loading="true" key={project.id} 
//             className='panel relative flex items-center justify-center'>
//                 <div className='relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12'>

//                     <img 
//                          className='project-image max-w-full rounded-2xl object-cover'
//                        src={project.imageSrc}
//                        alt="Project-img"
//                        />

//                        <h2 
//                        className='project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6
//                        z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
//                         {project.title} <SlShareAlt/>
//                        </h2>

//                  </div>
            
//             </div>
//         ))}

//             </div>
//         </div>
//     </section>
//   )
// }

// export default ProjectSection





 import React, { useEffect, useLayoutEffect, useRef } from "react";

 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 import l from "../assets/l.png";
import image from "../assets/image.png";
import a from "../assets/a.png";
 import t from "../assets/t.png";
import b from "../assets/b.png";
import d from "../assets/d.png";
 import s from "../assets/s.png";
import g from "../assets/g.png";
import job from "../assets/job.png";


 gsap.registerPlugin(ScrollTrigger);

 const projects = [
   {
     id: 1,
    title: "Home Essentials Ecommerce Website",
     stack: "MERN Stack",
    image: l,
     github: "https://github.com/GopikaArakkan/Home-Essentials-Ecommerce-Website.git",
    //  live: "https://project1.onrender.com",
},
 {
    id: 2,
     title: "JobTracker-Application",
    stack: "MERN stack ",
         image: job,
    github: "https://github.com/GopikaArakkan/Jobtracker-Application.git",
    //live: "https://project1.onrender.com",
   },
   
   {
     id: 3,
     title: "Online Payment",
     stack: "MERN stack",
     image: a,
     github: "https://github.com/GopikaArakkan/paymentProject.git",
    // live: "https://project3.onrender.com",
   },
   {
     id: 4,
     title: "OTP verification",
     stack: "MERN stack",
     image: t,
     github: "https://github.com/GopikaArakkan/OTP-verification.git",
    // live: "https://project1.onrender.com",
   },
   
   {
     id: 5,
     title: "Bootstrap-Resort",
     stack: "HTML, CSS, Bootstrap",
     image: b,
    github: "https://github.com/GopikaArakkan/Resort-Bootstrap.git",
    // live: "https://project2.onrender.com",
   },
      {
     id: 6,
     title: "Dice Game",
          stack: "HTML / CSS / JS",
    image: d,
    github: "https://github.com/GopikaArakkan/Dice-Game.git",
   // live: "https://project3.onrender.com",
  },
  {
       id: 7,
     title: "Static Website",
         stack: "HTML / CSS / React",
     image: image,
     github: "https://github.com/GopikaArakkan/Static-Website.git",
    // live: "https://project2.onrender.com",
   },
  {
    id: 8,
     title: "Animals Sound Kit",
    stack: "HTML / CSS / JS",
      image: s,
    github: "https://github.com/GopikaArakkan/Animals-Sound-Kit.git",
    //live: "https://project1.onrender.com",
   },
   {
    id: 9,
     title: "Simon Game",
    stack: "HTML / CSS / JS",
         image: g,
    github: "https://github.com/GopikaArakkan/Simon-Game.git",
   // live: "https://project1.onrender.com",
   },
  
  
 ];

 const ProjectSection = () => {
  const sectionRef = useRef(null);
   const titleRef = useRef(null);
   const titleLineRef = useRef(null);
   const cardsRef = useRef([]);
   useEffect(() => {
     cardsRef.current = [];
   }, []);

    useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       const cards = cardsRef.current;

       gsap.fromTo(
        titleRef.current,
         { y: 80, opacity: 0 },
        {
           y: 0,
           opacity: 1,
           duration: 1.2,
           ease: "power3.out",
           scrollTrigger: {
             trigger: sectionRef.current,
             start: "top 80%",
           }
                   }
       );

      gsap.fromTo(
                 titleLineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "100%",        
             opacity: 1,
           duration: 1.4,
           ease: "power3.inOut",
           delay: 0.2,
           scrollTrigger: {
             trigger: sectionRef.current,
             start: "top 80%",
           },
         }
       );

       gsap.fromTo(
         cards,
         { y: 60, opacity: 0, scale: 0.95 },
         {
           y: 0,
           opacity: 1,
           scale: 1,
           duration: 0.8,
           stagger: 0.15,
           ease: "power3.out",
           scrollTrigger: {
             trigger: sectionRef.current,
             start: "top 70%",
           },
         }
       );
     }, sectionRef);

     return () => ctx.revert();
   }, []);

   return (
     <section 
       ref={sectionRef}
       id="horizontal-section"
      className="relative min-h-screen overflow-hidden scroll-mt-24 bg-gradient-to-b from-black to-[#9a74cf50] text-white"

     >
       <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Title */}
        <h2
          ref={titleRef}           className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 opacity-0"
         >
           Projects
        </h2>

         <div
           ref={titleLineRef}
           className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-14 opacity-0"
         />

         {/* Project Grid */}         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

           {projects.map((project, index) => (
             <div
   key={`${project.id}-${index}`}
   ref={(el) => {
     if (el) cardsRef.current.push(el);
   }}
   className="
   group
   relative
   rounded-xl
   bg-white/10
   backdrop-blur-md
   border border-white/20

   min-h-[420px]
   flex flex-col

   transition-all duration-300 ease-out

   before:absolute
   before:inset-0
   before:rounded-xl
   before:transition-all before:duration-300
   before:content-['']

   hover:before:-inset-[1px]
   hover:before:shadow-[0_0_12px_rgba(59,130,246,0.8),0_0_30px_rgba(59,130,246,0.6)]
   group-hover:text-[2.05em]

 "

 >

               {/* Image Card */}
              <div className="relative h-72"> {/* ⬅ was h-56 */}
                   <img
     src={project.image}
     alt={project.title}
     className="w-full h-full object-cover"
   />
 </div>


               {/* Buttons */}
               <div className="flex gap-4 p-4 mt-auto bg-transparent">

              {/* Bottom text — TRANSPARENT */}
   <div className="absolute bottom-12 left-0 w-full px-4 py-7 ">
     <h3 className="font-semibold transition-all duration-300 group-hover:text-[calc(1rem+1.5px)]">
       {project.title}
     </h3>
     <p className="text-sm text-white/70">
       {project.stack}
     </p>
   </div>
               
                  
                <a
   href={project.github}
   target="_blank"
   rel="noopener noreferrer"
   className="
   px-4 py-2
   rounded-md
   text-sm
   font-medium
   bg-blue-600
   text-white

   transition-all duration-300 ease-out
   transform

   hover:scale-110
   hover:text-black-400
   hover:bg-green-700
"

 >
   GitHub
 </a>
 <a
   href={project.live}
   target="_blank"
   rel="noopener noreferrer"
   className="px-4 py-2 rounded-md text-sm font-medium bg-purple-600 text-white
   transition-all duration-300 ease-out
   transform

   hover:scale-110
   hover:text-black-400
   hover:bg-green-700"
>
   Render
 </a>
               </div>             </div>
          ))}
         </div>
       </div>
     </section>
   );
 };

 export default ProjectSection;







// import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger' 
// import { SlShareAlt } from "react-icons/sl";


// const ProjectSection = () => {
//     const sectionRef = useRef(null)
//     const titleRef = useRef(null)
//      const titleLineRef = useRef(null)
//      const triggerRef = useRef(null)
//      const horizontalRef = useRef(null)

//     //  project images data
//      const projectImages = [
//         {
//             id:1,
//             title: "3D Gaming Website",
//             imageSrc: "/images/project-1.png",
//         },

//         {
//              id:2,
//             title: "Startup App",
//             imageSrc: "/images/project-2.png",
//         },

//         {
//              id:3,
//             title: "Portfolio Website",
//             imageSrc: "/images/project-3.png",
//         },

//         {
//              id:4,
//             title: "Award Winning Web",
//             imageSrc: "/images/project-4.png",
//         }
//      ]

// useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     // title reveal animation
//     gsap.fromTo(
//         titleRef.current,
//         {
//             y: 100,
//             opacity:0
//         },
//         {
//             y:0,
//             opacity: 1,
//             duration: 1.2,
//             ease:"power3.out",
//             scrollTrigger:{
//                 trigger:sectionRef.current,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             }
//         }
//     )

//     // title line animation
//     gsap.fromTo(
//         titleLineRef.current,
//         {
//             width:"0%",
//             opacity: 0,
//         },
//         {
//             width:"100%",
//             opacity:1,
//             duration:1.5,
//             ease:"power3.inOut",
//             delay:0.3,
//             scrollTrigger: {
//                 trigger:sectionRef.current,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             }
//         }
//     )
//     // section entrance effect
//         gsap.fromTo(
//             triggerRef.current,
//             {
//                 y :100,
//                 rotationX : 20,
//                 opacity : 0,
//             },

//             {
//                 y :100,
//                 rotationX : 20,
//                 opacity : 1,
//                  duration:1.5,
//             ease:"power2.out",
//             delay:0.2,
//             scrollTrigger: {
//                 trigger:sectionRef.current,
//                 start: "top 70%",
//                 toggleActions: "play none none reverse",

//             }
//          }

//     )

//     // parallax effect for the entire section
//     gsap.fromTo(
//         sectionRef.current,
//         {
//             backgroundPosition: "50% 0%"
//         },
//         {
//             backgroundPosition: "50% 100%",
//             ease:"none",
//             scrollTrigger: {
//                  trigger:sectionRef.current,
//                  start: "top bottom",
//                  end: "bottom top",
//                  scrub: true,

//             }
//         }
//     )
//     // horizontal scrolling
//     // create the horizontal scrolling animation
//     const horizontalScroll = gsap.to(".panel", {
//         xPercent: -100 * (projectImages.length - 1), ease:"none",
//             scrollTrigger: {
//                  trigger:sectionRef.current,
//                   start: "top top",
//                  end: () => `+=${horizontalRef.current.offsetWidth}`,
//                  pin: true,
//                  scrub: 1,
//                  snap: {
//                     spanTo: 1 / (projectImages.length - 1),
//                     duration: { main: 0.2, max: 0.3 },
//                     delay: 0.1,
//                  },
//                  invalidateOnRefresh:true,

//              }
//     })


//         // image animation
//         // Animate each image panel
//         const panels = gsap.utils.toArray(".panel")
//         panels.forEach((panel, i) => {
//             const image = panel.querySelector(".project-image")
//              const imageTitle = panel.querySelector(".project-title")


//     // create a timeline for each panel
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: panel,
//             containerAnimation: horizontalScroll,
//             start: "left right",
//             end: "right left",
//             scrub: true,

//         }
//     })

//     // image scale and opacity animation
//     tl.fromTo(image, { scale: 0, rotate: -20, }, { scale: 1,
//         rotate: 1, duration: 0.5
//     })

//     // title animation if it exist
//     if(imageTitle) {
//         tl.fromTo(imageTitle, { y: 30, }, { y: -100, duration: 0.3, }, 0.2)
//     }

//         })

// }, [projectImages.length])

//   return (
//     <section 
//     ref={sectionRef}
//     id="horizontal-section"
//     className='relative py-20 overflow-hidden'
//     >

//         {/* {section title} */}
//         <div className='container mx-auto px-4 mb-16 relative z-10'>
//             <h2 ref={titleRef} className='text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 opacity-0'>
//                 Featured Projects
//             </h2>

//         <div ref={titleLineRef} className='w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0'>

//         </div>
//         </div>



//         {/* horizontal scroll section */}
//         <div ref={triggerRef} className='overflow-hidden opacity-0'>
           
//             <div ref={horizontalRef}className='horizontal-section flex md:w-[400%] w-[420%]'>

//         {projectImages.map((project) => (
//             <div loading="true" key={project.id} 
//             className='panel relative flex items-center justify-center'>
//                 <div className='relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12'>

//                     <img 
//                          className='project-image max-w-full rounded-2xl object-cover'
//                        src={project.imageSrc}
//                        alt="Project-img"
//                        />

//                        <h2 
//                        className='project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6
//                        z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
//                         {project.title} <SlShareAlt/>
//                        </h2>

//                  </div>
            
//             </div>
//         ))}

//             </div>
//         </div>
//     </section>
//   )
// }

// export default ProjectSection
