import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Download, Mail, Linkedin, Github } from 'lucide-react'

export default function NetflixNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId}`) //todo: remove mock functionality
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const downloadResume = () => {
    console.log('Downloading resume') //todo: remove mock functionality
  }

  const contactAction = (platform: string) => {
    console.log(`Contacting via ${platform}`) //todo: remove mock functionality
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              data-testid="button-logo"
            >
              CR
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium"
                  data-testid={`button-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={downloadResume}
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => contactAction('email')}
                  data-testid="button-contact-email"
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => contactAction('linkedin')}
                  data-testid="button-contact-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => contactAction('github')}
                  data-testid="button-contact-github"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto px-8 pt-20">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-xl font-medium text-foreground hover:text-primary transition-colors py-2"
                  data-testid={`button-mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-6 border-t border-border/20">
                <Button 
                  variant="outline" 
                  className="w-full mb-4"
                  onClick={downloadResume}
                  data-testid="button-mobile-download-resume"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                
                <div className="flex justify-center space-x-4">
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => contactAction('email')}
                    data-testid="button-mobile-contact-email"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => contactAction('linkedin')}
                    data-testid="button-mobile-contact-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => contactAction('github')}
                    data-testid="button-mobile-contact-github"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}