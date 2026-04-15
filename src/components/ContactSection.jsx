import { useRef, useEffect, useState } from "react" 

import { gsap } from "gsap"
 import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = ({ onContactClick }) => {
      


     //Main refs
    const circleRef = useRef(null)
    const sectionRef = useRef(null)
     const initialTextRef = useRef(null)
             const finalTextRef = useRef(null)

              //  toogle the menu open close
                 const [isOpen, setIsOpen] = useState(false);
                 const toggleMenu = () => setIsOpen(!isOpen);
             
                 // state to track if the contect form is open
                 const openContactForm = () => {
               window.open(
                 "https://docs.google.com/forms/d/e/1FAIpQLSdfQEvyy1Pj2ZkSZ7Trk78tbvoUX0aKBCkRaKgxtYDY4RBwpg/viewform",
                 "_blank"
               );
             };


useEffect(() => {
   // register Gsap plugins
    gsap.registerPlugin(ScrollTrigger)
    // make sure all trigger instances are properly killed

    const cleanup = () => {
        ScrollTrigger.getAll().forEach((st) => {
            if(st.vars.trigger === sectionRef.current) {
                st.kill(true)
                           }
         })
     }

// // clean up any existing scrolltrigger
 cleanup()

 // set initial states
 gsap.set(circleRef.current, { scale: 1, backgroundColor: "white"})
 gsap.set(initialTextRef.current, { opacity: 1})
 gsap.set(finalTextRef.current, { opacity: 0})



 // create the main timeline
 const tl = gsap.timeline({
         scrollTrigger: {
         trigger: sectionRef.current,
         start: "top top",
         end: "+=200%",
         pin: true,
         scrub: 0.5,
         anticipatePin: 1,
         fastScrollEnd: true,
         preventOverlaps: true,
         invalidateOnRefresh: true,
         },
   
 })


 // initial state to mid-zoom (0-50%)
 tl.to(
     circleRef.current,
     {
         scale: 5,
         backgroundColor: "9333EA",
         ease: "power1.inOut",
         duration: 0.5,
     },
     0,
 )


 // Fade out initial text during first half
 tl.to(
     initialTextRef.current,
     {
       opacity: 0,
         ease: "power1.out",
        duration: 0.2,
    },
    0.1,
)


 // Mid-Zoom to final state( 50%-100% )
 tl.to(
    circleRef.current,
    {
        scale: 17,
        backgroundColor: "#E9D5FF",
boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3",
        ease: "Power2.inOut",
         duration: 0.5,
     },
     0.5,
 )

 // fade in final text during deconf half
 tl.to(
    finalTextRef.current,
     {
         opacity: 1,
        ease: "power2.in",
         duration: 0.2,
     },
     0.7,
 )

// return cleanup function
 return cleanup
 }, [])


   return (
    <section id="contact"
    ref={sectionRef}
    className='flex items-center justify-center bg-black relative'
     style={{ overscrollBehaviour: "none" }}
     >


     {/* simple circle with minimal nesting */}
    <div
     ref={circleRef} className='w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow
    duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100'
    >

 {/* initial text */}
  <p
    ref={initialTextRef}
      className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center" >
 Scroll Down </p>


 {/* final text */}
  <div 
 ref={finalTextRef}
 className="text-center relative flex flex-col items-center justify-center opacity"
 >
 <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
 Step Into the Future with me
 </h1>

 <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.68]">
   I’m a passionate Full Stack (MERN) Developer and a fresher eager to create scalable and user-friendly web applications. I have completed my internship along with 
   my course, where I gained real-world experience in building full-stack projects. I focus on clean code, performance, and continuous improvement.
    </p>
 
 <button
//   onClick={onContactClick}
   onClick={() => {
            toggleMenu()
            openContactForm()
           }}
  className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all scale-[0.1] duration-500 absolute sm:mt-9 mt-7 text-nowrap"
>
  Contact Me
</button>   


 </div>
    </div>
   </section>
  )
}

export default ContactSection





// import { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import emailjs from '@emailjs/browser'; 
// import ReCAPTCHA from "react-google-recaptcha";

// const ContactSection = () => {
//     const circleRef = useRef(null)
//     const sectionRef = useRef(null)
//     const initialTextRef = useRef(null)
//     const finalTextRef = useRef(null)
//     const form = useRef(); 
//     const [captcha, setCaptcha] = useState(null);

//    const sendEmail = (e) => {
//   e.preventDefault();

//   if (!captcha) {
//     alert("Please verify you're not a robot");
//     return;
//   }

//   emailjs.sendForm(
//     'service_r6f6njc',
//     'template_epgzkli',
//     form.current,
//     'SkRzzaNo_4DAUGoFu'
//   )
//   .then((result) => {
//     console.log("SUCCESS!", result.text);
//     alert("Message Sent Successfully!");
//     e.target.reset();
//     setCaptcha(null);
//   })
//   .catch((error) => {
//     console.log("FAILED...", error.text);
//     alert("Failed to send: " + error.text);
//   });
// };


//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger)
        
//         const cleanup = () => {
//             ScrollTrigger.getAll().forEach((st) => {
//                 if(st.vars.trigger === sectionRef.current) {
//                     st.kill(true)
//                 }
//             })
//         }
//         cleanup()

//         gsap.set(circleRef.current, { scale: 1, backgroundColor: "white"})
//         gsap.set(initialTextRef.current, { opacity: 1})
//         gsap.set(finalTextRef.current, { opacity: 0})

//         const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top top",
//                     end: "+=200%",
//                     pin: true,
//                     scrub: 0.5,
//                     anticipatePin: 1,
//                     fastScrollEnd: true,
//                     preventOverlaps: true,
//                     invalidateOnRefresh: true,
//                 },
//         })

//         tl.to(circleRef.current, {
//                 scale: 5,
//                 backgroundColor: "#9333EA", 
//                 ease: "power1.inOut",
//                 duration: 0.5,
//             }, 0)

//         tl.to(initialTextRef.current, {
//                 opacity: 0,
//                 ease: "power1.out",
//                 duration: 0.2,
//             }, 0.1)

//         tl.to(circleRef.current, {
//                 scale: 17,
//                 backgroundColor: "#E9D5FF",
//                 boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
//                 ease: "power2.inOut",
//                 duration: 0.5,
//             }, 0.5)

//         tl.to(finalTextRef.current, {
//                 opacity: 1,
//                 ease: "power2.in",
//                 duration: 0.2,
//             }, 0.7)

//         return cleanup
//     }, [])

//   return (
//    <section 
//      id="contact" 
//      ref={sectionRef} 
//      className='flex items-center justify-center bg-black relative min-h-screen overflow-hidden' 
//      style={{ overscrollBehavior: "none" }}
//     >
    
//     <div 
//       ref={circleRef} 
//       className='w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100'
//     >

//         {/* Text shown before scrolling */}
//         <p ref={initialTextRef} className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center justify-center text-center">
//             Scroll Down
//         </p>

//         {/* Content revealed after zoom animation */}
//         <div ref={finalTextRef} className="text-center relative flex flex-col items-center justify-center">
//             <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-2">
//                 Step Into the Future with MiladiCode
//             </h1>

//             <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-1 lg:scale-[0.3] sm:scale-[0.2] scale-[0.05] origin-center mt-[-20px]">
//                 <input 
//                   type="text" 
//                   name="name" 
//                   placeholder="Name" 
//                   required 
//                   className="p-4 rounded-lg bg-white/50 border border-purple-300 outline-none text-black text-2xl" 
//                 />
//                 <input 
//                   type="email" 
//                   name="email" 
//                   placeholder="Email" 
//                   required 
//                   className="p-4 rounded-lg bg-white/50 border border-purple-300 outline-none text-black text-2xl" 
//                 />
//                 <textarea 
//                   name="message" 
//                   placeholder="Message" 
//                   required 
//                   className="p-4 rounded-lg bg-white/50 border border-purple-300 outline-none text-black text-2xl h-32" 
//                 />
                
//                 {/* ReCAPTCHA placed correctly ABOVE the button */}
//                <div className="flex justify-center my-2">
//   {typeof window !== "undefined" && (
//     <ReCAPTCHA
//       sitekey="6LcoyT8sAAAAAJd56nmMfENaCAxSQvgmxI-WOTq4"
//       onChange={(value) => setCaptcha(value)}
//     />
//   )}
// </div>

//                 <button 
//                   type="submit" 
//                   className="px-10 py-4 rounded-xl bg-black text-white hover:bg-purple-900 transition-all duration-500 text-3xl font-bold mt-4"
//                 >
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     </div>
//    </section>
//   )
// }

// export default ContactSection