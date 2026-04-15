// // import { useEffect } from "react"
// // import { gsap } from "gsap"
// // import { ScrollTrigger } from "gsap/ScrollTrigger"

// // import AboutSection from "./components/AboutSection"
// // import CustomCursor from "./components/CustomCursor"
// // import Header from "./components/Header"
// // import HeroSection from "./components/HeroSection"
// // import ProjectSection from "./components/ProjectSection"
// // import ContactSection from "./components/ContactSection"
// // import Footer from "./components/Footer"
// // import ProgressBar from "./components/ProgressBar"
// // import SkillsSection from "./components/SkillsSection"


// // export default function App() {

// //   useEffect(() => {
// //     //register scrollTrigger plungin
// //     gsap.registerPlugin(ScrollTrigger)

// //     //refresh scrollTrigger when the page is fully loaded
// //     ScrollTrigger.refresh()

// //     //clean up scrolltrigger on component unmount
// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
// //     }
// //   }, [])


// //   return (
// //     <>
// //     <Header />
// //    <HeroSection />
// //    <CustomCursor />
// //    <AboutSection />
// //    <SkillsSection />
// //    <ProjectSection/>  
// //     <ContactSection />
// //    <Footer />
// //    <ProgressBar />

// //     </>
// //   )
  

// // }



// import { useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// import AboutSection from "./components/AboutSection"
// import CustomCursor from "./components/CustomCursor"
// import Header from "./components/Header"
// import HeroSection from "./components/HeroSection"
// import ProjectSection from "./components/ProjectSection"
// import ContactSection from "./components/ContactSection"
// import Footer from "./components/Footer"
// import ProgressBar from "./components/ProgressBar"
// import SkillsAbout from "./components/SkillsSection"


// export default function App() {

//   useEffect(() => {
//     //register scrollTrigger plungin
//     gsap.registerPlugin(ScrollTrigger)

//     //refresh scrollTrigger when the page is fully loaded
//     ScrollTrigger.refresh()

//     //clean up scrolltrigger on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
//     }
//   }, [])


//   return (
//     <>
//     <Header />
//    <HeroSection />
//    <CustomCursor />
//    <AboutSection />
//    <SkillsAbout />
//    <ProjectSection/>  
//     <ContactSection />
//    <Footer />
//    <ProgressBar />

//     </>
//   )
  

// }




// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/home"
import ContactForm from "./Pages/ContactForm"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  )
}
