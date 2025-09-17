import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Globe, Database, Settings, Users } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL'],
    color: 'text-blue-500'
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js'],
    color: 'text-green-500'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL'],
    color: 'text-purple-500'
  },
  {
    title: 'Tools & Technologies',
    icon: Settings,
    skills: ['Git', 'GitHub', 'VS Code', 'REST APIs'],
    color: 'text-orange-500'
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Teamwork', 'Problem Solving', 'Communication', 'Adaptability'],
    color: 'text-pink-500'
  }
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I've developed through 
            education, internships, and hands-on projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="glass-card hover-glow h-full transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.2 + skillIndex * 0.1, 
                          duration: 0.4,
                          type: "spring"
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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