import { motion } from 'framer-motion'
import { ArrowDown, Download, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profilePhoto from '@/assets/one.png'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      </div>

      <div className="container-custom mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Nagi Reddy Munamulla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Nagi Reddy</span>
            <br />
            <span className="text-foreground">Munamulla</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            MCA student and aspiring{' '}
            <span className="gradient-text font-semibold">Full Stack Developer</span>{' '}
            skilled in Java, Python, Web Development, and Databases. Passionate about building impactful projects.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-glow group">
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}