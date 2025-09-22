import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Play, Info } from 'lucide-react'
import heroImage from '@assets/generated_images/Dark_cinematic_tech_workspace_9012d7e7.png'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNextSection = () => {
    console.log('Scrolling to experience section') //todo: remove mock functionality
    const nextSection = document.getElementById('experience')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const watchTrailer = () => {
    console.log('Playing career highlight reel') //todo: remove mock functionality
  }

  const moreInfo = () => {
    console.log('Showing detailed information') //todo: remove mock functionality
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Netflix-style gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="max-w-2xl">
            {/* Netflix-style title treatment */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
                CHANDAR
                <span className="block text-primary">RATHALA</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
                Senior Data Analyst • The protagonist who transforms raw data into strategic insights
              </p>
              
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl">
                4+ years across healthcare, finance, and climate security. 
                Expert in SQL, Python, BI, and cloud warehousing. 
                Proven track record: 40% cost reduction, 55% pipeline optimization.
              </p>
            </div>

            {/* Netflix-style action buttons */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/80 font-semibold px-8 py-3 text-lg"
                onClick={watchTrailer}
                data-testid="button-watch-trailer"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Career Highlights
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 px-8 py-3 text-lg"
                onClick={moreInfo}
                data-testid="button-more-info"
              >
                <Info className="w-5 h-5 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNextSection}
          className="animate-bounce text-white/60 hover:text-white transition-colors"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}