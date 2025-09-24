import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Certifications } from '@/components/Certifications'
import { Achievements } from '@/components/Achievements'
// import { ResumeSection } from '@/components/ResumeSection'
import { ExtraCurricular } from '@/components/ExtraCurricular'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        {/* <ResumeSection /> */}
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
