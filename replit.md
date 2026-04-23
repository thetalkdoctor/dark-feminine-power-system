# Dark Feminine Power System

## Overview

This is a landing page and sales funnel for the "Dark Feminine Power System" - a digital product bundle focused on personal empowerment and self-development. The application is a single-page marketing site with additional legal pages (Privacy Policy, Terms of Service, Contact), designed with a dark, elegant aesthetic featuring deep purples, magentas, and gold accents.

The site sells a $20 digital bundle containing ebooks, guides, workbooks, and audio courses, with payment processing through Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.
Never produce video content without explicit user request - applies to all projects.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **State Management**: TanStack React Query for server state (though currently minimal API usage)

### Design System
The project follows strict design guidelines documented in `design_guidelines.md`:
- Dark backgrounds (#04020A, #070413) with purple gradients
- Magenta (#C72E8F) and gold (#E9B35A) accent colors
- Serif fonts (Playfair Display/Cormorant Garamond) for headings, sans-serif (Inter/Poppins) for body
- 1200px max-width container with responsive padding
- 18px border radius, deep shadows, and subtle glow effects

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **Build**: esbuild for server bundling, Vite for client
- **Static Serving**: Express serves the built client from `dist/public`

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Currently minimal - just a users table in `shared/schema.ts`
- **Storage**: MemStorage class for in-memory data (production would use PostgreSQL)
- **Migrations**: Drizzle Kit for database migrations (`drizzle-kit push`)

### Payment Integration
- **Provider**: Stripe hosted checkout
- **Implementation**: Direct links to Stripe Buy Button URLs (no server-side Stripe SDK integration currently)

## External Dependencies

### Third-Party Services
- **Stripe**: Payment processing via hosted checkout links
- **Google Fonts**: Typography (Playfair Display, DM Sans, Geist Mono, etc.)

### Key NPM Packages
- **UI**: @radix-ui/* components, class-variance-authority, clsx, tailwind-merge
- **Animation**: framer-motion
- **Forms**: react-hook-form with @hookform/resolvers, zod for validation
- **Database**: drizzle-orm, drizzle-zod, pg (PostgreSQL client)
- **Server**: express, express-session, connect-pg-simple

### Development Tools
- **Replit Plugins**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer
- **Build**: esbuild, vite, tsx
- **Type Checking**: TypeScript with strict mode