import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Code, Users, Lightbulb } from 'lucide-react'

const activities = [
  {
    title: 'Coding Contests',
    icon: Code,
    description: 'Active participation in online coding competitions and programming challenges to sharpen problem-solving skills.',
    highlights: [
      'Regular participation in HackerRank challenges',
      'Competitive programming on platforms like CodeChef',
      'Algorithm optimization contests',
      'Data structure problem solving'
    ],
    skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Time Management']
  },
  {
    title: 'Hackathons',
    icon: Lightbulb,
    description: 'Participating in hackathons to build innovative solutions within time constraints and collaborate with diverse teams.',
    highlights: [
      'Team collaboration under pressure',
      'Rapid prototyping and development',
      'Creative problem-solving approaches',
      'Technology stack integration'
    ],
    skills: ['Innovation', 'Team Collaboration', 'Rapid Development', 'Presentation']
  },
  {
    title: 'Open Source Contributions',
    icon: Users,
    description: 'Contributing to open-source projects to give back to the developer community and gain real-world coding experience.',
    highlights: [
      'Bug fixes and feature enhancements',
      'Documentation improvements',
      'Code review participation',
      'Community engagement'
    ],
    skills: ['Version Control', 'Code Review', 'Documentation', 'Community Collaboration']
  },
  {
    title: 'Technical Workshops',
    icon: Trophy,
    description: 'Attending and organizing technical workshops to stay updated with latest technologies and share knowledge.',
    highlights: [
      'Technology trend awareness',
      'Hands-on learning sessions',
      'Knowledge sharing with peers',
      'Industry best practices'
    ],
    skills: ['Continuous Learning', 'Knowledge Sharing', 'Networking', 'Leadership']
  }
]

export function ExtraCurricular() {
  return (
    <section id="extracurricular" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Extra-<span className="gradient-text">Curricular</span> Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond academics and internships, I actively engage in coding contests, hackathons, 
            and open-source contributions to enhance my skills and contribute to the tech community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="glass-card hover-glow h-full transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                      <activity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
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