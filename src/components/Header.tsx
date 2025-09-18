import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'
import { ArrowDown, Download, Send } from 'lucide-react'


const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/nagireddy-munamulla', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Mn-reddy3152', icon: Github },
  { name: 'Email', href: 'mailto:nagireddymunamulla@gmail.com', icon: Mail },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('#home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const current = doc.scrollTop
      // const pct = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0
      // setScrollProgress(pct)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fallback scroll-spy based on section positions for reliability
  useEffect(() => {
    const sectionIds = navItems
      .map((item) => (item.href.startsWith('#') ? item.href.slice(1) : ''))
      .filter(Boolean)

    const handle = () => {
      const referenceOffset = 120 // approx header + padding
      let bestId = activeSection
      let bestScore = Number.POSITIVE_INFINITY

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        // Prefer sections near the top but still on screen
        const score = Math.abs(rect.top - referenceOffset)
        const isOnScreen = rect.bottom > 120 && rect.top < window.innerHeight * 0.8
        if (isOnScreen && score < bestScore) {
          bestScore = score
          bestId = `#${id}`
        }
      })

      if (bestId !== activeSection) setActiveSection(bestId)
    }

    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [activeSection])

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => (item.href.startsWith('#') ? item.href.slice(1) : ''))
      .filter(Boolean)

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    let mostVisibleId = activeSection

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const top = visible[0]
          const id = `#${top.target.id}`
          if (id !== mostVisibleId) {
            mostVisibleId = id
            setActiveSection(id)
          }
        }
      },
      { root: null, rootMargin: '0px 0px -50% 0px', threshold: [0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))

    // Set initial active on mount
    const fromHash = window.location.hash
    if (fromHash && sectionIds.includes(fromHash.slice(1))) {
      setActiveSection(fromHash)
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-card shadow-custom-md backdrop-blur-md bg-background/60' 
          : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute left-0 top-0 h-1 bg-primary transition-[width] duration-200" style={{ width: `${scrollProgress}%` }} />
      <nav className="container-custom mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#home" className="text-2xl font-bold gradient-text">
              Nagi Reddy Munamulla
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`${
                  activeSection === item.href
                    ? 'text-primary relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary'
                    : 'text-foreground/80 hover:text-primary relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-[width] after:duration-300'
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * index }}
                className="hover-glow"
              >
                <Button variant="ghost" size="icon">
                  <link.icon className="h-5 w-5" />
                </Button>
              </motion.a>
            ))} */}
            <Button size="sm" asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              <a href="/Resume.pdf" download>
                <Download className="mr-1 h-5 w-5 group-hover:animate-bounce" />Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-card rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    activeSection === item.href
                      ? 'text-primary relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary'
                      : 'text-foreground/80 hover:text-primary relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-[width] after:duration-300'
                  } transition-colors duration-200 font-medium py-2`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                {/* {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow"
                  >
                    <Button variant="ghost" size="icon">
                      <link.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))} */}
              <Button size="sm" asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              <a href="/Resume.pdf" download>
                <Download className="mr-1 h-5 w-5 group-hover:animate-bounce" />
                Resume
              </a>
            </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
