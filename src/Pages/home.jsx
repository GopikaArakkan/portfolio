// src/Pages/home.jsx
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import CustomCursor from "../components/CustomCursor"
import AboutSection from "../components/AboutSection"
import SkillsAbout from "../components/SkillsSection"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import ProgressBar from "../components/ProgressBar"

export default function Home() {
  const navigate = useNavigate()

  const onContactClick = () => {
    navigate("/contact")
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <SkillsAbout />
      <ProjectSection />
      <ContactSection onContactClick={onContactClick} />
      <Footer />
      <ProgressBar />
    </>
  )
}
