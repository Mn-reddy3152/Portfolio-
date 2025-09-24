import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy } from 'lucide-react'

const achievements = [
  {
    title: 'Secured top 10 positions in coding contests and hackathons',
    category: 'Competitions'
  },
  {
    title: 'Built and deployed multiple full‑stack apps with MERN/Java stack',
    category: 'Projects'
  },
  {
    title: 'Presented technical projects at college tech fest; recognized for innovation',
    category: 'Leadership'
  }
]

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Highlights from academics, projects, and community involvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="glass-card hover-glow h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-primary/10">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base leading-relaxed font-medium">
                    {item.title}
                  </CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


