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
      description: 'A comprehensive Power BI dashboard integrating multi-source data for complete business intelligence.',
      longDescription: 'Built an enterprise-grade analytics platform that transformed how stakeholders view business performance. The dashboard integrates data from multiple sources, providing real-time insights into customer behavior, product performance, and growth opportunities.',
      image: dashboardImage,
      technologies: ['Power BI', 'SQL', 'DAX', 'M Query', 'Excel'],
      achievements: [
        'Integrated multiple data sources for unified reporting',
        'Enabled real-time customer and product segmentation',
        'Delivered actionable insights for pricing strategy'
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
      description: 'ML-powered patient risk detection system processing 10M+ clinical records with HIPAA compliance.',
      longDescription: 'Engineered a sophisticated healthcare data pipeline that revolutionized patient care through predictive analytics. The system processes massive clinical datasets while maintaining strict HIPAA compliance and providing real-time risk assessments.',
      image: healthcareImage,
      technologies: ['Python', 'SQL', 'Machine Learning', 'HIPAA', 'ETL'],
      achievements: [
        'Processed 10M+ patient records with zero compliance issues',
        'Reduced data processing time by 45%',
        'Achieved 86% F1-score for risk prediction'
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
      description: 'Advanced ML models predicting climate-security risks for U.S. Army policy development.',
      longDescription: 'Developed cutting-edge machine learning models that analyze the intersection of climate change and global security. The models achieved exceptional accuracy and are now being used to inform military strategy and policy decisions.',
      image: climateImage,
      technologies: ['Python', 'Machine Learning', 'Time Series', 'GIS', 'Policy Analysis'],
      achievements: [
        'Achieved 87% precision with 0.91 ROC-AUC',
        'Models adopted in 2 official policy briefs',
        'Influenced climate strategies across 3 regions'
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
      description: 'Real-time parking availability system with geospatial mapping and usage analytics.',
      longDescription: 'Architected a full-stack application solving a real campus problem. The system provides real-time parking availability, helping thousands of students and staff save time while optimizing campus resource utilization.',
      image: dashboardImage,
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Leaflet', 'Azure'],
      achievements: [
        'Real-time availability tracking across campus',
        'Integrated geospatial mapping with Leaflet',
        'Built comprehensive usage analytics'
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
            Like movie posters in a Netflix catalog, each project tells a unique story of innovation, challenge, and success.
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