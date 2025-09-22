import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, TrendingUp, Award, ChevronRight } from 'lucide-react'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  season: string
  episode: string
  description: string
  achievements: string[]
  metrics: string[]
  tags: string[]
  plotTwist?: string
}

export default function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<string>('current')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // todo: remove mock functionality
  const experiences: Experience[] = [
    {
      id: 'current',
      title: 'Research Assistant / Teaching Assistant',
      company: 'University of South Florida',
      location: 'Tampa, FL',
      period: 'Aug 2024 – Present',
      season: 'Season 4',
      episode: 'The Academic Arc',
      description: 'The unexpected pivot: from industry veteran to academic researcher. Building climate-conflict risk models while mentoring the next generation.',
      achievements: [
        'Built climate–conflict risk models achieving 87% precision',
        'Greenlit an ambitious feature-engineering sprint that briefly tanked precision to 72%; paused the rollout, installed automated cross-validation, and recovered performance within two weeks',
        'ROC-AUC of 0.91 enabling risk forecasts for policy briefs',
        'Mentored 20+ undergraduates, improved course ratings by 30%'
      ],
      metrics: ['87% Precision', '0.91 ROC-AUC', '30% Rating Improvement'],
      tags: ['Climate Data', 'Machine Learning', 'Teaching', 'Python', 'SQL'],
      plotTwist: 'Discovered that academic research could drive real-world policy changes'
    },
    {
      id: 'dxc',
      title: 'Analyst II, Software Engineering',
      company: 'DXC Technology',
      location: 'India',
      period: 'Feb 2022 – Jul 2024',
      season: 'Season 3',
      episode: 'The Enterprise Transformation',
      description: 'The corporate challenge: migrating legacy systems to the cloud while maintaining zero downtime. A high-stakes transformation with $2.5M annually at risk.',
      achievements: [
        'Migrated 600+ SAS programs to AWS Redshift',
        'Reduced infrastructure costs by 40% ($2.5M annually)',
        'Approved an aggressive cutover weekend that spiked latency by 18%; executed contingency rollback, introduced canary deploys, and regained stakeholder trust to finish on schedule',
        'Led A/B test framework increasing executive adoption by 15%'
      ],
      metrics: ['$2.5M Saved', '40% Cost Reduction', '15% Adoption Increase'],
      tags: ['AWS', 'SAS', 'Migration', 'Cost Optimization', 'Leadership'],
      plotTwist: 'The risky cloud migration actually improved system reliability by 30%'
    },
    {
      id: 'healthcare',
      title: 'Research Assistant — Healthcare Data',
      company: 'University of South Florida',
      location: 'Tampa, FL',
      period: 'Aug 2024 – Aug 2025',
      season: 'Season 4B',
      episode: 'The Healthcare Revolution',
      description: 'The parallel storyline: while building climate models, simultaneously engineering healthcare solutions for 10M+ patient records.',
      achievements: [
        'Engineered ETL pipelines for 10M+ clinical records',
        'Cut processing time by 45%, enabled daily vs weekly refreshes',
        'Agreed to compress HIPAA compliance reviews to meet go-live, caught a late-stage audit gap, and built automated access logging to pass scrutiny without slipping launch',
        'Applied ML for early patient risk detection'
      ],
      metrics: ['10M+ Records', '45% Faster Processing', '10% Readmission Reduction'],
      tags: ['Healthcare', 'ETL', 'HIPAA', 'Machine Learning', 'Patient Care']
    }
  ]

  const additionalExperiences = [
    {
      id: 'kpmg',
      title: 'Data Analyst Intern (Virtual Experience)',
      company: 'KPMG International Limited · Forage Simulation',
      period: 'Dec 2021 – Feb 2022',
      beats: [
        {
          label: 'Conflict',
          text: 'Audit rehearsal exposed clashing revenue metrics across siloed exports, threatening to derail the executive review.'
        },
        {
          label: 'Bold Move',
          text: 'Volunteered to rebuild the Snowflake staging model overnight, wiring SQL stress tests and Tableau storyboards to interrogate every assumption.'
        },
        {
          label: 'Resolution/Twist',
          text: 'The revamped storyline boosted stakeholder engagement 20% and the "intern" QA playbook became the new onboarding artifact.'
        }
      ]
    },
    {
      id: 'standard-bank',
      title: 'Data Analyst Intern (Virtual Experience)',
      company: 'Standard Bank · Forage Simulation',
      period: 'Aug 2021 – Nov 2021',
      beats: [
        {
          label: 'Conflict',
          text: 'Regulators demanded audit-ready financial dashboards while manual reporting queues piled up.'
        },
        {
          label: 'Bold Move',
          text: 'Scripted Python automations to reconcile ledgers and built compliance-first Tableau scenes that surfaced anomalies before the reviewers did.'
        },
        {
          label: 'Resolution/Twist',
          text: 'Cycle times collapsed, governance checks passed without edits, and the bank reused the dashboards as its go-to control evidence.'
        }
      ]
    }
  ]

  const selectExperience = (id: string) => {
    console.log(`Selecting experience: ${id}`) //todo: remove mock functionality
    setSelectedExperience(id)
  }

  const viewProject = (company: string) => {
    console.log(`Viewing project details for ${company}`) //todo: remove mock functionality
  }

  return (
    <section ref={ref} id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            THE CAREER <span className="text-primary">EPISODES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each role a season, every project an episode.
            Every cliffhanger begs the question: what arsenal keeps the protagonist ready for the next act?
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {experiences.map((exp) => (
            <Button
              key={exp.id}
              variant={selectedExperience === exp.id ? "default" : "outline"}
              onClick={() => selectExperience(exp.id)}
              className="px-6 py-3"
              data-testid={`button-experience-${exp.id}`}
            >
              {exp.season}
            </Button>
          ))}
        </div>

        {/* Selected Experience Details */}
        {experiences.map((exp) => (
          selectedExperience === exp.id && (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card border-card-border hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                        {exp.episode}
                      </Badge>
                      <Badge variant="secondary">{exp.season}</Badge>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.company}, {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.plotTwist && (
                      <div className="bg-primary/10 border border-primary/20 rounded-md p-4 mb-6">
                        <h4 className="font-semibold text-primary mb-2">Plot Twist:</h4>
                        <p className="text-foreground/80">{exp.plotTwist}</p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics & Tags Sidebar */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Impact Metrics
                      </h4>
                      <div className="space-y-3">
                        {exp.metrics.map((metric, index) => (
                          <div key={index} className="bg-primary/5 border border-primary/20 rounded-md p-3 text-center">
                            <span className="text-xl font-bold text-primary">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      onClick={() => viewProject(exp.company)}
                      data-testid={`button-view-project-${exp.id}`}
                    >
                      View Project Details
                    </Button>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          )
        ))}

        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-foreground">SIDE QUESTS: ADDITIONAL EXPERIENCE</h3>
            <Badge variant="outline" className="uppercase tracking-wide text-xs">Mid-season Interlude</Badge>
          </div>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Between major arcs, these short missions kept the tension high and sharpened the instincts you’ll see unleashed in the skills reel next.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalExperiences.map((extra) => (
              <Card key={extra.id} className="bg-card border-card-border hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{extra.title}</h4>
                    <div className="text-sm text-muted-foreground">{extra.company}</div>
                    <div className="text-xs text-muted-foreground/70 uppercase tracking-widest">
                      {extra.period}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {extra.beats.map((beat) => (
                      <li key={beat.label} className="flex items-start gap-3">
                        <Badge variant="secondary" className="text-[10px] uppercase tracking-wide mt-1">
                          {beat.label}
                        </Badge>
                        <span className="text-foreground/80 text-sm leading-relaxed">{beat.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}