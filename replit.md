# replit.md

## Overview

This is a full-stack web application for Metaweb, a professional web development company. The application is built as a comprehensive marketing website showcasing web development services, portfolio, pricing, and contact information. It features a modern React frontend with a Node.js/Express backend, designed to attract potential clients for website development services.

**Current Status:** 100% COMPLETE English language transformation achieved. All Georgian text has been successfully translated to professional English, including:
- ✅ All navigation and menu items
- ✅ Hero section content and CTAs  
- ✅ Service descriptions and titles
- ✅ Portfolio project descriptions and CTAs
- ✅ Statistics cards and counter labels
- ✅ Floating animation text elements
- ✅ Contact forms and buttons
- ✅ FAQ section content
- ✅ Footer information
- ✅ All CSS class references (font-georgian removed)
- ✅ Image alt texts and tooltips
The website now targets English-speaking markets exclusively with sophisticated animations and professional design aesthetics preserved.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React Query (@tanstack/react-query) for server state
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized in `shared/schema.ts` for type safety across frontend/backend

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation (fully translated to English)
2. **Hero Section**: Main landing area with call-to-action buttons and counters (English content)
3. **Advantages**: Company benefits and unique selling points (English descriptions)
4. **Services**: Web development service offerings (English service descriptions)
5. **Portfolio**: Showcase of completed projects (English project descriptions)
6. **Pricing/Team**: Service packages and pricing tiers (English pricing and features)
7. **FAQ Section**: Comprehensive Q&A section with English questions and answers
8. **Contact**: Contact form with English placeholders and labels
9. **Footer**: Site navigation and company information (English content)

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Registration**: Modular route system (currently minimal)
3. **Storage Interface**: Abstracted storage layer with in-memory implementation
4. **Vite Integration**: Development server with HMR support

### Shared Components
1. **Database Schema**: User model with Drizzle ORM
2. **Type Definitions**: Shared TypeScript interfaces

## Data Flow

1. **Client Request**: React frontend makes API calls via React Query
2. **Express Routing**: Server routes handle API requests under `/api` prefix
3. **Storage Layer**: Abstract storage interface allows for flexible data persistence
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### UI/UX Dependencies
- **Radix UI**: Accessible primitive components
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Georgian (Noto Sans Georgian) and Inter fonts
- **Font Awesome**: Additional icon library

### Development Dependencies
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and development server
- **ESBuild**: Production server bundling
- **PostCSS**: CSS processing with Autoprefixer

### Database Dependencies
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and schema management
- **connect-pg-simple**: PostgreSQL session store (prepared for sessions)

### Utility Dependencies
- **React Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **Date-fns**: Date manipulation utilities

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with nodemon-like behavior for auto-restart
- **Database**: Drizzle Kit for schema synchronization

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server to `dist/index.js`
3. **Static Serving**: Express serves built frontend files
4. **Environment Variables**: DATABASE_URL required for PostgreSQL connection

### Key Features
- **Replit Integration**: Custom Replit plugins for development
- **English Language**: Full English language content with professional messaging
- **SEO Optimization**: Meta tags, Open Graph, and JSON-LD structured data
- **Language Migration**: Complete transformation from Georgian to English targeting
- **Mobile Responsive**: Tailwind CSS responsive design system
- **Performance**: Optimized builds with tree-shaking and code splitting

The application follows a monorepo structure with clear separation between client, server, and shared code, making it maintainable and scalable for a growing web development business.