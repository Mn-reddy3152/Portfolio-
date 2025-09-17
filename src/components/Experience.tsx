import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Technical Hub',
    period: 'Jan 2024 – May 2024',
    location: 'Remote',
    description: 'Developed a comprehensive sports management web application with event management, result tracking, and user upload functionalities.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    achievements: [
      'Built responsive user interface with React.js and Tailwind CSS',
      'Implemented backend APIs using Node.js and Express.js',
      'Designed and managed MongoDB database schema',
      'Integrated file upload and management features'
    ]
  },
  {
    title: 'Java Full Stack Intern',
    company: 'Triaright Technologies',
    period: 'Jul 2023 – Sep 2023',
    location: 'Remote',
    description: 'Focused on Java-based full stack development, creating CRUD applications with Spring Boot framework and MySQL database integration.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JPA/Hibernate'],
    achievements: [
      'Developed multiple CRUD applications using Spring Boot',
      'Implemented database operations with JPA/Hibernate',
      'Created RESTful APIs for frontend-backend communication',
      'Learned enterprise-level Java development practices'
    ]
  },
  {
    title: 'Python + AI/ML Intern',
    company: 'Triaright Technologies',
    period: 'Oct 2023 – Feb 2024',
    location: 'Remote',
    description: 'Specialized in Python programming and machine learning, working on classification prediction projects with real-world datasets.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    achievements: [
      'Implemented machine learning classification algorithms',
      'Worked with real datasets for prediction modeling',
      'Performed data preprocessing and feature engineering',
      'Created data visualizations and analysis reports'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional internships that have shaped my development skills and provided 
            hands-on experience with modern technologies and industry practices.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="glass-card hover-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-primary mb-2">{exp.company}</h3>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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