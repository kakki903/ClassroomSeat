# School Seat Personality Test Application

## Overview

This is a full-stack Korean personality test application that determines what type of school desk seat a user would prefer based on their personality traits. The application presents users with 10 questions and analyzes their responses to categorize them into one of 9 different seat personality types, complete with detailed analysis and visual trait representation.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage for development)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Organized into screens (start, question, result) with reusable UI components
- **State Management**: Custom `useQuiz` hook manages quiz state and scoring logic
- **UI Framework**: shadcn/ui components with Radix primitives for accessibility
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Visualization**: Custom canvas-based radar chart for personality trait display

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Structure**: RESTful API with `/api` prefix (routes not yet implemented)
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Database Integration**: Drizzle ORM configured for PostgreSQL
- **Development**: Hot reload with Vite integration in development mode

### Data Model
- **Users Table**: Basic user authentication schema (id, username, password)
- **Quiz Logic**: 6 personality traits (focus, observation, immersion, sociability, leadership, freedom)
- **Seat Types**: 9 different personality-based seat categories with detailed descriptions

## Data Flow

1. **Quiz Flow**: Start screen → Question sequence → Result calculation → Result display
2. **Scoring System**: Each answer contributes points to specific personality traits
3. **Result Calculation**: Highest scoring traits determine the seat type category
4. **Visualization**: Trait scores displayed as interactive radar chart

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

The application is configured for Replit deployment with:

- **Development**: `npm run dev` - runs server with hot reload
- **Production Build**: `npm run build` - builds client and server bundles
- **Production Start**: `npm run start` - serves production build
- **Database**: PostgreSQL module enabled in Replit environment
- **Port Configuration**: Server runs on port 5000, exposed on port 80
- **Environment**: Supports both development and production modes

The deployment uses autoscale deployment target with automatic build and start commands configured in `.replit` file.

## Recent Changes

### June 27, 2025 - Major Feature Updates
- **Google AdSense Integration**: Added block ads on start, quiz (middle), and result screens
- **Vignette Ad Implementation**: Full-screen interstitial ad on start screen with 3-second delay
- **Kakao Talk Sharing**: Integrated Kakao SDK for Korean social media sharing
- **Enhanced Quiz Logic**: Fixed scoring calculation with weighted dominant traits
- **Improved Result Descriptions**: Added detailed personality analysis with longer, more engaging descriptions
- **Visual Enhancements**: Added trait progress bars and detailed scoring breakdown on result screen
- **Responsive Design**: Improved mobile layout for ads and sharing buttons

### Technical Improvements
- **Scoring Algorithm**: Implemented weighted trait matching for more accurate personality type detection
- **State Management**: Added answer history tracking for proper back navigation
- **Debug Logging**: Added console logging for quiz score calculation debugging
- **Ad Components**: Created reusable AdSense and Vignette ad components
- **Social Integration**: Kakao sharing with custom messages and app key configuration

## Changelog

```
Changelog:
- June 27, 2025. Initial setup with React, TypeScript, Tailwind CSS
- June 27, 2025. Added Korean psychology test with 10 questions, 9 seat types
- June 27, 2025. Integrated AdSense, Kakao sharing, enhanced results
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```