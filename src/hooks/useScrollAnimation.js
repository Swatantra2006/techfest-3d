import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollAnimation() {
  useEffect(() => {
    // Animate each section on scroll
    const sections = document.querySelectorAll('[data-scroll-section]')

    sections.forEach((section) => {
      const children = section.querySelectorAll('[data-scroll-animate]')

      children.forEach((child, index) => {
        gsap.fromTo(
          child,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: child,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
