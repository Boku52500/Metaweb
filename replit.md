# replit.md

## Overview

This is a full-stack web application for a Georgian web development company called Metaweb. The application is built as a marketing website showcasing web development services, portfolio, team, and contact information. It features a modern React frontend with a Node.js/Express backend, designed to attract potential clients for website development services in Georgia.

**Current Status:** SEO optimization phase completed with comprehensive Georgian keyword targeting, schema markup, sitemap, and FAQ section for voice search optimization. Project is now optimized for achieving #1 ranking in Georgian search results for "საიტის დამზადება" and related terms. Added subdomain support for online.metaweb.ge with welcome page and SSL redirect handling.

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
1. **Navigation**: Fixed header with smooth scrolling navigation (updated with FAQ section)
2. **Hero Section**: Main landing area with call-to-action buttons and counters
3. **Advantages**: Company benefits and unique selling points
4. **Services**: Web development service offerings
5. **Portfolio**: Showcase of completed projects
6. **Team**: Company team member profiles
7. **FAQ Section**: Comprehensive Q&A targeting Georgian voice search queries and long-tail keywords
8. **Contact**: Contact form with phone integration
9. **Footer**: Site navigation and company information

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
- **Georgian Localization**: Full Georgian language support with appropriate fonts
- **SEO Optimization**: Meta tags, Open Graph, and JSON-LD structured data
- **Mobile Responsive**: Tailwind CSS responsive design system
- **Performance**: Optimized builds with tree-shaking and code splitting

The application follows a monorepo structure with clear separation between client, server, and shared code, making it maintainable and scalable for a growing web development business.