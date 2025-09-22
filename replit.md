# Netflix-Inspired Portfolio - Chandar Rathala

## Overview

This is a Netflix-inspired interactive portfolio showcasing Chandar Rathala's professional journey as a Senior Data Analyst. The application presents his career story in a cinematic format, drawing inspiration from Netflix's dramatic visual hierarchy and immersive user experience design patterns. Built as a full-stack web application, it features a React frontend with a Node.js/Express backend, designed to create an engaging narrative around data analytics expertise across healthcare, finance, and climate-security domains.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based architecture
- **Styling**: Tailwind CSS with Netflix-inspired dark theme design system
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **State Management**: TanStack React Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Framer Motion for cinematic transitions and scroll-based animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for end-to-end type safety
- **API Design**: RESTful architecture with focused endpoints for contact form submissions
- **Development Server**: Custom Vite integration for seamless full-stack development experience
- **Error Handling**: Centralized error middleware with proper HTTP status codes and JSON responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud-native scaling
- **Data Models**: User management and contact form submission tracking
- **Fallback Storage**: In-memory storage implementation for development and testing scenarios

### Authentication and Authorization
- **Current State**: Basic user schema defined but not actively implemented
- **Prepared Infrastructure**: Database tables and TypeScript interfaces ready for future authentication features
- **Security Considerations**: Contact form validation with Zod schema validation to prevent malicious submissions

### Design System and Theming
- **Color Palette**: Netflix-inspired dark theme with cinematic red accents (HSL color space)
- **Typography**: Hierarchical font system optimized for dramatic storytelling presentation
- **Component Variants**: Class Variance Authority for consistent component styling patterns
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints for cross-device compatibility
- **Visual Effects**: Elevation system with hover states and transparency overlays mimicking Netflix interface

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives for complex components like dialogs, dropdowns, and navigation menus
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent styling and TypeScript support
- **Framer Motion**: Animation library for smooth transitions, scroll-triggered animations, and cinematic effects
- **Embla Carousel**: Touch-friendly carousel component for project showcases and timeline navigation

### Development and Build Tools
- **Vite**: Modern build tool with hot module replacement and optimized production builds
- **TypeScript**: Static typing for enhanced developer experience and runtime error prevention
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with Netflix-inspired custom theme
- **PostCSS**: CSS processing pipeline with autoprefixer for cross-browser compatibility

### Data Management and Validation
- **TanStack React Query**: Powerful data fetching library with caching, background updates, and error handling
- **Drizzle ORM**: Lightweight TypeScript ORM with excellent PostgreSQL integration and type inference
- **Zod**: Runtime type validation for form inputs and API request/response validation
- **date-fns**: Modern date utility library for timestamp formatting and manipulation

### Database and Cloud Services
- **Neon Database**: Serverless PostgreSQL platform for scalable cloud database hosting
- **PostgreSQL**: Primary database system chosen for reliability and advanced querying capabilities

### Routing and Navigation
- **Wouter**: Minimalist React router optimized for single-page applications with hash-based routing support

### Development Experience
- **Replit Integration**: Custom Vite plugins for Replit development environment optimization
- **ESBuild**: Fast JavaScript bundler for production builds and server-side compilation
- **Hot Module Replacement**: Real-time code updates during development without losing application state