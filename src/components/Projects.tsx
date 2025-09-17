import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Laptop } from 'lucide-react'

const projects = [
  {
    title: 'Aditya Sports Hub',
    description: 'A comprehensive full-stack web application for sports event and result management. Features include user authentication, event creation, result tracking, file uploads, and responsive design.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    features: [
      'Event management system',
      'Result tracking and display',
      'User authentication & authorization',
      'File upload functionality',
      'Responsive design',
      'RESTful API integration'
    ],
    category: 'Full Stack Web App',
    status: 'Completed'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio website showcasing skills, projects, and experience. Built with modern web technologies and featuring smooth animations and interactive elements.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Responsive design',
      'Interactive animations',
      'Contact form integration',
      'Project showcase',
      'Skills visualization',
      'Mobile-first approach'
    ],
    category: 'Frontend Web App',
    status: 'Completed'
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work, demonstrating practical application of 
            technologies and problem-solving skills across different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="glass-card hover-glow h-full transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Laptop className="h-6 w-6 text-primary" />
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-success' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="hover-glow">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
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