import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ExternalLink, Github, Play, Star, Calendar, Users } from 'lucide-react'
import dashboardImage from '@assets/generated_images/Data_analytics_dashboard_mockup_51efc5cc.png'
import healthcareImage from '@assets/generated_images/Healthcare_dashboard_interface_955f0f9f.png'
import climateImage from '@assets/generated_images/Climate_risk_visualization_dashboard_b2ef73d0.png'

interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  achievements: string[]
  metrics: string[]
  year: string
  teamSize: string
  rating: number
  featured?: boolean
}

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // todo: remove mock functionality
  const projects: Project[] = [
    {
      id: 'business360',
      title: 'Business 360: E-commerce Analytics',
      category: 'analytics',
      description: 'Revenue and customer signals were contradicting each other; rewired the chaos into a Power BI universe that exposed growth levers.',
      longDescription: 'When leadership faced dueling reports across marketing, finance, and supply chain, I treated the mission like a data heist—mapping every source, scripting M Query scrubs, and layering DAX what-if models until the truth surfaced. The dashboard became the suspense-resolving control center for every pricing and retention decision.',
      image: dashboardImage,
      technologies: ['Power BI', 'SQL', 'DAX', 'M Query', 'Excel'],
      achievements: [
        'Conflict — Six disconnected revenue silos stalled pricing calls and eroded trust in the analytics team.',
        'Bold Move — Orchestrated a Power BI rebuild that stitched SQL warehouses and Excel exports together, automating sanity checks with DAX and M Query.',
        'Resolution/Twist — Reporting sped up 3×, uncovered a hidden high-margin cohort, and reframed the growth strategy overnight.'
      ],
      metrics: ['3x Faster Reporting', '95% Data Accuracy', '200+ Daily Users'],
      year: '2025',
      teamSize: 'Solo Project',
      rating: 4.9,
      featured: true
    },
    {
      id: 'healthcare',
      title: 'Healthcare Data Revolution',
      category: 'healthcare',
      description: 'Hospitals were stuck with sluggish weekly refreshes; engineered a compliance-tight pipeline that pushed life-saving insights daily.',
      longDescription: 'Ten million patient records were trapped inside brittle ETL scripts, forcing care teams to wait a week for updates. I rebuilt the pipeline with modular Python and SQL stages, inserted HIPAA-safe validation gates, and layered ML models for early risk detection. The backlog became the heartbeat of clinical decision-making.',
      image: healthcareImage,
      technologies: ['Python', 'SQL', 'Machine Learning', 'HIPAA', 'ETL'],
      achievements: [
        'Conflict — Legacy jobs choked on 10M+ clinical records, leaving bedside teams blind between weekly refreshes.',
        'Bold Move — Reengineered the ETL stack with Python, SQL, and automated QA traps while embedding HIPAA guardrails and ML anomaly scans.',
        'Resolution/Twist — Processing time fell 45%, the model reached 0.86 F1, and early-warning dashboards cut readmissions by 10%.'
      ],
      metrics: ['10M+ Records', '45% Faster Processing', '10% Readmission Reduction'],
      year: '2024-2025',
      teamSize: '3 Researchers',
      rating: 4.8,
      featured: true
    },
    {
      id: 'climate',
      title: 'Climate-Conflict Risk Models',
      category: 'research',
      description: 'Policy leaders lacked credible climate-conflict forecasts; built models that turned atmospheric chaos into actionable alerts.',
      longDescription: 'The Army research unit needed proof that climate volatility mapped to security flashpoints, yet their spreadsheets read like disconnected episodes. I fused time-series weather data, geospatial intelligence, and socio-political signals into machine learning pipelines, pressure-testing every feature until the predictions held up in the war room.',
      image: climateImage,
      technologies: ['Python', 'Machine Learning', 'Time Series', 'GIS', 'Policy Analysis'],
      achievements: [
        'Conflict — Defense strategists were navigating climate threats with guesswork and outdated spreadsheets.',
        'Bold Move — Engineered machine learning pipelines blending satellite data, conflict registries, and temporal trends with rigorous validation.',
        'Resolution/Twist — Achieved 87% precision and 0.91 ROC-AUC, landing in two policy briefs that redirected climate-security strategy across three regions.'
      ],
      metrics: ['87% Precision', '0.91 ROC-AUC', '2 Policy Briefs'],
      year: '2024',
      teamSize: 'Research Team',
      rating: 4.9,
      featured: true
    },
    {
      id: 'parking',
      title: 'USF Smart Parking System',
      category: 'fullstack',
      description: 'Campus drivers circled for ages without intel; deployed a real-time parking tracker that turned chaos into guided arrivals.',
      longDescription: 'USF commuters were burning time hunting for spots while operations lacked usage analytics. Our team built a full-stack solution—React front end, Node/Express APIs, PostgreSQL backbone, and Leaflet maps—to stream availability in real time and log every decision point for operations.',
      image: dashboardImage,
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Leaflet', 'Azure'],
      achievements: [
        'Conflict — Morning gridlock and zero visibility into parking inventory drained productivity across campus.',
        'Bold Move — Architected a full-stack system with sensor integrations, PostgreSQL telemetry, and Leaflet-powered geospatial storytelling.',
        'Resolution/Twist — Delivered real-time availability with 100% uptime, generated usage analytics that informed new routing plans, and won executive sponsorship for expansion.'
      ],
      metrics: ['Real-time Updates', '100% Uptime', 'Campus-wide Coverage'],
      year: '2024',
      teamSize: 'Team of 4',
      rating: 4.7
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'research', name: 'Research' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const selectCategory = (categoryId: string) => {
    console.log(`Selecting project category: ${categoryId}`) //todo: remove mock functionality
    setSelectedCategory(categoryId)
  }

  const openProject = (projectId: string) => {
    // Open project links based on project ID
    const projectLinks: Record<string, string> = {
      'business360': 'https://github.com/chandarr7/business-360-analytics',
      'healthcare': 'https://github.com/chandarr7/healthcare-data-pipeline',
      'climate': 'https://github.com/chandarr7/climate-risk-models',
      'parking': 'https://github.com/chandarr7/usf-parking-tracker'
    }
    
    const link = projectLinks[projectId]
    if (link) {
      window.open(link, '_blank')
    }
  }

  const viewCode = (projectId: string) => {
    // Same as openProject for now - GitHub links
    openProject(projectId)
  }

  return (
    <section ref={ref} id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each case file opens on a crisis, escalates with a bold experiment, and lands on a twist that kept stakeholders binge-watching. Stick around for the post-credit scene where we script the sequel together.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => selectCategory(category.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all hover-elevate ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground border border-card-border'
              }`}
              data-testid={`button-category-${category.id}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-card border-card-border hover-elevate transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-white text-black hover:bg-white/80">
                        <Play className="w-5 h-5 mr-2 fill-current" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-md"
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-2">
                            <p className="text-foreground/80 mb-6">{project.longDescription}</p>
                            
                            <div className="space-y-4">
                              <h4 className="font-semibold text-foreground">Key Achievements</h4>
                              <ul className="space-y-2">
                                {project.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-foreground/80 text-sm">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Impact Metrics</h4>
                              <div className="space-y-2">
                                {project.metrics.map((metric, index) => (
                                  <div key={index} className="bg-primary/10 border border-primary/20 rounded-md p-2 text-center">
                                    <span className="text-sm font-medium text-primary">{metric}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <Button 
                                className="w-full"
                                onClick={() => openProject(project.id)}
                                data-testid={`button-open-project-${project.id}`}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Open Project
                              </Button>
                              <Button 
                                variant="outline" 
                                className="w-full"
                                onClick={() => viewCode(project.id)}
                                data-testid={`button-view-code-${project.id}`}
                              >
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    ★ {project.rating}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.teamSize}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
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