import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the contact attempt and store it
      console.log('Contact form submission:', {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || 'Not specified',
        message: validatedData.message,
        timestamp: new Date().toISOString()
      });
      
      // Store the contact submission
      await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: 'Thank you for your message! Chandar will get back to you within 24 hours.' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Something went wrong. Please try again later.' 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
