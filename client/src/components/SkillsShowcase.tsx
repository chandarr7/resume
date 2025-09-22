import { useState } from 'react'
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
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            CHARACTER <span className="text-primary">ABILITIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every great protagonist has a unique set of skills. 
            Here's what makes Chandar a formidable force in the data universe.
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
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <Card key={skill.id} className="bg-card border-card-border hover-elevate transition-all duration-300">
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
      </div>
    </section>
  )
}