import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Database, Brain, BarChart3, Cloud, Code, Users, Zap } from 'lucide-react'

interface Skill {
  id: string
  name: string
  category: string
  level: number
  description: string
  icon: any
  experience: string
  projects: string[]
}

export default function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // todo: remove mock functionality
  const skills: Skill[] = [
    {
      id: 'sql',
      name: 'SQL & Databases',
      category: 'technical',
      level: 95,
      description: 'Expert in complex queries, optimization, and database design across PostgreSQL, MySQL, BigQuery',
      icon: Database,
      experience: '4+ years',
      projects: ['SAS Migration', 'Healthcare ETL', 'Climate Data Processing']
    },
    {
      id: 'python',
      name: 'Python & Analytics',
      category: 'technical',
      level: 90,
      description: 'Advanced proficiency in data analysis, machine learning, and automation',
      icon: Code,
      experience: '4+ years',
      projects: ['Risk Models', 'Anomaly Detection', 'Pipeline Automation']
    },
    {
      id: 'bi',
      name: 'Business Intelligence',
      category: 'technical',
      level: 88,
      description: 'Power BI, Tableau, Looker expertise with DAX, M Query, and advanced visualizations',
      icon: BarChart3,
      experience: '3+ years',
      projects: ['Executive Dashboards', 'KPI Standardization', 'Real-time Reporting']
    },
    {
      id: 'cloud',
      name: 'Cloud & Big Data',
      category: 'technical',
      level: 85,
      description: 'AWS Redshift, Google Cloud, Azure with focus on data warehousing and performance',
      icon: Cloud,
      experience: '3+ years',
      projects: ['AWS Migration', 'Cloud Cost Optimization', 'Scalable ETL']
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      category: 'technical',
      level: 82,
      description: 'Regression, classification, time series forecasting, and model validation',
      icon: Brain,
      experience: '2+ years',
      projects: ['Climate Risk Models', 'Patient Risk Detection', 'Predictive Analytics']
    },
    {
      id: 'leadership',
      name: 'Team Leadership',
      category: 'soft',
      level: 85,
      description: 'Led cross-functional teams, mentored junior analysts, managed stakeholder relationships',
      icon: Users,
      experience: '2+ years',
      projects: ['Team Migration', 'Academic Mentoring', 'Executive Presentations']
    },
    {
      id: 'innovation',
      name: 'Innovation & Strategy',
      category: 'soft',
      level: 80,
      description: 'Identified opportunities, implemented new technologies, drove organizational change',
      icon: Zap,
      experience: '4+ years',
      projects: ['SAS to AWS Migration', 'Dashboard Framework', 'Process Optimization']
    }
  ]

  const certificationMontage = {
    hook: "Sharpened the protagonist's toolkit during a frantic upskilling montage—Stanford's Machine Learning, DeepLearning.AI's Deep Learning Specialization, IBM's Data Science program, plus advanced SQL, MySQL, and Python credentials forged between 2021 and 2025.",
    badges: [
      'Stanford Online · Machine Learning (Mar 2025)',
      'DeepLearning.AI · Deep Learning Specialization (Aug 2023)',
      'IBM Data Science Professional Certificate (Nov 2021)',
      'Advanced SQL for Data Scientists (Jan 2023)',
      'SQL for Data Science Certificate (Jan 2022)',
      'MySQL Database Mastery (Oct 2021)',
      'Python from Basic to Advanced (Sep 2021)'
    ]
  }

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'technical', name: 'Technical Mastery' },
    { id: 'soft', name: 'Leadership & Strategy' }
  ]

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const selectCategory = (categoryId: string) => {
    console.log(`Selecting skill category: ${categoryId}`) //todo: remove mock functionality
    setSelectedCategory(categoryId)
  }

  return (
    <section ref={ref} id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            CHARACTER <span className="text-primary">ABILITIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The mid-season recap: after each career cliffhanger, this is the gear reloaded before the next mission—linger here, because the upcoming projects section drops you straight into the heists these abilities pulled off.
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-card-border hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {skill.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Skill Level Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-foreground/80 text-sm mb-4">
                    {skill.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Featured In:</h4>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((project) => (
                        <Badge key={project} variant="secondary" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 inline-block px-8 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Core Skills</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2.5M</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">87%</div>
                <div className="text-sm text-muted-foreground">Model Precision</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <Card className="bg-card border-card-border hover-elevate transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-foreground">Training Montage</h3>
                <Badge variant="outline" className="uppercase tracking-wide text-xs">Certifications</Badge>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {certificationMontage.hook} Consider it the teaser reel before the project capers.
              </p>
              <div className="flex flex-wrap gap-2">
                {certificationMontage.badges.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}