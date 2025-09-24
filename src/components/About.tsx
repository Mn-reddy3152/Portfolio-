import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Calendar } from 'lucide-react'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Aditya College of Engineering and Technology',
    period: '2024 – Present',
    status: 'current'
  },
  {
    degree: 'Bachelor of Science (B.Sc)',
    institution: 'S.V.K.P & Dr. K.S. Raju Arts and Science College',
    period: '2021 – 2024',
    status: 'completed'
  },
  // {
  //   degree: 'Intermediate (MPC)',
  //   institution: 'Vasavi Vignan Jr. College',
  //   period: '2019 – 2021',
  //   status: 'completed'
  // },
  // {
  //   degree: 'Secondary School Certificate (SSC)',
  //   institution: 'ZPP High School',
  //   period: '2018 – 2019',
  //   status: 'completed'
  // }
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate and dedicated student pursuing Master of Computer Applications with a strong foundation in 
            software development. I specialize in full-stack web development and have hands-on experience through 
            multiple internships and projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8 flex items-center gap-2"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            Education Timeline
          </motion.h3>

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className={`glass-card hover-glow transition-all duration-300 ${
                  item.status === 'current' ? 'border-primary/50 shadow-glow' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {item.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">{item.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {item.period}
                        </div>
                      </div>
                      {item.status === 'current' && (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                          <span className="text-sm font-medium text-primary">Current</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}