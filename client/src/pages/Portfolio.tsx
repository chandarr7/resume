import HeroSection from '@/components/HeroSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import SkillsShowcase from '@/components/SkillsShowcase'
import ProjectsGallery from '@/components/ProjectsGallery'
import ContactSection from '@/components/ContactSection'
import NetflixNavigation from '@/components/NetflixNavigation'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <NetflixNavigation />
      
      <main>
        <HeroSection />
        <ExperienceTimeline />
        <SkillsShowcase />
        <ProjectsGallery />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/20 py-8">
        <div className="container mx-auto px-8 max-w-7xl text-center">
          <div className="text-muted-foreground">
            © 2025 Chandar Rathala. Crafted with precision, designed for impact.
          </div>
          <div className="text-sm text-muted-foreground/60 mt-2">
            Inspired by Netflix's storytelling approach to showcase a data analyst's journey.
          </div>
        </div>
      </footer>
    </div>
  )
}