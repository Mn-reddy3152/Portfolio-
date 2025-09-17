import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, ExternalLink, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const certifications = [
  {
    title: 'Java Full Stack Development',
    issuer: 'Triaright Technologies',
    description: 'Comprehensive certification covering Java backend development, Spring Boot framework, database integration, and full-stack application development.',
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JPA/Hibernate'],
    category: 'Backend Development',
    file: '/certificates/java-fullstack.pdf'
  },
  {
    title: 'Python + AI/ML Certification',
    issuer: 'Triaright Technologies',
    description: 'Advanced certification in Python programming with focus on artificial intelligence and machine learning concepts, algorithms, and practical implementation.',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn', 'Pandas'],
    category: 'AI/ML',
    file: '/certificates/python-aiml.pdf'
  },
  {
    title: 'Full Stack Development Program',
    issuer: 'Technical Hub',
    description: 'Complete full-stack development program covering modern web technologies, React.js frontend development, Node.js backend, and database management.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
    category: 'Full Stack',
    file: '/certificates/fullstack-program.pdf'
  },
  {
    title: 'AI + Machine Learning',
    issuer: 'Skill Dzire',
    description: 'Specialized certification focusing on artificial intelligence concepts, machine learning algorithms, and practical applications in real-world scenarios.',
    skills: ['AI Concepts', 'ML Algorithms', 'Data Science', 'Python', 'Statistics'],
    category: 'AI/ML',
    file: '/certificates/ai-ml.pdf'
  }
]

const categoryColors = {
  'Backend Development': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'AI/ML': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'Full Stack': 'bg-green-500/10 text-green-500 border-green-500/20'
}

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and training programs that validate my expertise 
            and commitment to continuous learning in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="glass-card hover-glow h-full transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      <Badge 
                        variant="outline" 
                        className={categoryColors[cert.category as keyof typeof categoryColors]}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-primary font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button asChild variant="outline" size="sm" className="hover-glow w-full">
                      <a href={cert.file} target="_blank" rel="noreferrer noopener">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                    {/* <Button asChild size="sm" className="hover-glow w-full">
                      <a href={cert.file} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}