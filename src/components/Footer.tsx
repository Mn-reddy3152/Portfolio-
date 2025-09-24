import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/nagireddy-munamulla', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Mn-reddy3152', icon: Github },
  { name: 'Email', href: 'mailto:nagireddymunamulla@gmail.com', icon: Mail },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom mx-auto px-6 py-12">
        <div className="text-center">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Nagi Reddy Munamulla</h3>
            <p className="text-muted-foreground">
              Full Stack Developer | MCA Student | Technology Enthusiast
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA + Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <a
              href="/Nagi_Reddy_Resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground hover:shadow-glow"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-t border-border pt-8"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              © {currentYear} Nagi Reddy Munamulla. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />{' '}
              using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}