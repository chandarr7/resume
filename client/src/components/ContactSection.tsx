import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Calendar, Clock, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        })
        // Reset form
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        toast({
          title: "Error sending message",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chandarrathala7@gmail.com',
      action: 'mailto:chandarrathala7@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (813) 418-9804',
      action: 'tel:+18134189804'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tampa, FL',
      action: null
    }
  ]

  const availability = [
    { type: 'Full-time', status: 'Available', color: 'bg-green-500' },
    { type: 'Contract', status: 'Available', color: 'bg-green-500' },
    { type: 'Consulting', status: 'Available', color: 'bg-green-500' }
  ]

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            LET'S <span className="text-primary">COLLABORATE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Post-credit scene unlocked: choose the next mission and we'll weaponize your data arc before the credits stop rolling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get In Touch</CardTitle>
                <p className="text-muted-foreground">
                  Whether you're looking for a data analyst, researcher, or technical consultant,
                  drop the mission details and we'll map the sequel together.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.action ? (
                          <a 
                            href={contact.action}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                            data-testid={`link-${contact.label.toLowerCase()}`}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Current Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availability.map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{item.type}</span>
                    <Badge className={`${item.color} text-white`}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
                <div className="pt-4 border-t border-border/20">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Typically responds within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-card-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Have a project in mind? Set the scene here and we'll storyboard the response in record time.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Company / Organization
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, challenges, or how we might work together..."
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-primary/5 border-primary/20 inline-block px-8 py-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Data Strategy?
              </h3>
              <p className="text-foreground/80 mb-6">
                Join the growing list of organizations that have leveraged data analytics 
                to drive significant cost savings, improve decision-making, and achieve strategic goals.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-start-conversation"
              >
                Start the Conversation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}