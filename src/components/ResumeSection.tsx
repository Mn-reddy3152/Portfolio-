import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Maximize2, FileText } from 'lucide-react'
import { useState } from 'react'

export function ResumeSection() {
  const [open, setOpen] = useState(false)
  const imageUrl = '/resume.png'
  const pdfUrl = '/Nagi_Reddy_Resume.pdf'

  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            View a quick preview of my resume or download the PDF.
          </p>
        </motion.div>

        <Card className="glass-card">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-xl flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Resume Preview
            </CardTitle>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Preview
                </a>
              </Button>
              <Button asChild size="sm" className="bg-gradient-primary">
                <a href={pdfUrl} download>
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Inline PDF preview with fallback */}
            <div className="relative group space-y-4">
              <div className="w-full aspect-[612/792] bg-muted rounded-md border border-border overflow-hidden">
                <object data={pdfUrl} type="application/pdf" className="w-full h-full">
                  <img src={imageUrl} alt="Resume preview" className="w-full h-full object-cover" />
                </object>
              </div>
              <img src={imageUrl} alt="Resume preview" className="w-full rounded-md border border-border" />
              <button
                className="absolute bottom-4 right-4 p-2 rounded-md bg-background/80 backdrop-blur-sm border border-border hover:shadow-glow transition-all"
                onClick={() => setOpen(true)}
                aria-label="Open full-size resume"
              >
                <Maximize2 className="h-5 w-5" />
              </button>
            </div>
          </CardContent>
        </Card>

        {open && (
          <div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <img src={imageUrl} alt="Resume full" className="max-h-[90vh] rounded-lg border border-border shadow-xl" />
          </div>
        )}
      </div>
    </section>
  )
}


