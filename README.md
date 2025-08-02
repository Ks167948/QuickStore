# Qstore - Modern Cloud Storage Solution

<div align="center">
  <img src="public/assets/icons/logo-full-brand.svg" alt="Qstore Logo" width="300" />
  
  <p><strong>A comprehensive cloud storage and file management platform built with modern web technologies</strong></p>
  
  <div>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Appwrite-Backend-FD366E?style=for-the-badge&logo=appwrite" alt="Appwrite" />
  </div>
</div>

---

## 🎯 Project Overview

Qstore is a modern, full-stack cloud storage solution that provides users with a seamless file management experience. Built with cutting-edge technologies, it offers enterprise-grade features wrapped in an intuitive, responsive interface.

### Key Features

- **🔐 Secure Authentication** - Complete user registration and login system with OTP verification
- **📁 File Management** - Upload, organize, and manage files with drag-and-drop support
- **🔍 Advanced Search** - Global search functionality across all files and shared content
- **📊 Analytics Dashboard** - Real-time storage analytics with visual charts and usage insights
- **🌙 Dark Mode** - Beautiful theme switching with persistent user preferences
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🔄 File Sharing** - Share files with other users through email invitations
- **📈 Storage Analytics** - Detailed breakdown of storage usage by file type
- **⚡ Real-time Updates** - Instant file synchronization and status updates

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router and Server Components
- **React 19** - Latest React features with concurrent rendering
- **TypeScript** - Type-safe development with strict configuration
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **ShadCN/ui** - Modern component library with Radix UI primitives

### Backend & Services
- **Appwrite** - Backend-as-a-Service for authentication, storage, and database
- **Node.js** - Server-side JavaScript runtime
- **Zod** - Schema validation and type safety

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **Prettier** - Code formatting and consistency
- **PostCSS** - CSS processing and optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Appwrite account and project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd qstore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
   NEXT_PUBLIC_APPWRITE_PROJECT="your-project-id"
   NEXT_PUBLIC_APPWRITE_DATABASE="your-database-id"
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="users"
   NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="files"
   NEXT_PUBLIC_APPWRITE_BUCKET="your-storage-bucket"
   NEXT_APPWRITE_KEY="your-api-key"
   ```

4. **Appwrite Setup**
   
   In your Appwrite console:
   - Create a new project
   - Set up a database with `users` and `files` collections
   - Create a storage bucket for file uploads
   - Configure authentication methods
   - Generate API keys with appropriate permissions

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
qstore/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── layout.tsx           # Auth layout with theme toggle
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/                   # Main application pages
│   │   ├── layout.tsx           # Root layout with navigation
│   │   ├── page.tsx             # Dashboard page
│   │   └── [type]/              # Dynamic file type pages
│   ├── globals.css              # Global styles with dark mode
│   └── layout.tsx               # Root layout with theme provider
├── components/                    # Reusable UI components
│   ├── ui/                      # ShadCN/ui components
│   ├── AuthForm.tsx             # Authentication forms
│   ├── Header.tsx               # Desktop header with theme toggle
│   ├── MobileNavigation.tsx     # Mobile navigation
│   ├── Sidebar.tsx              # Desktop sidebar
│   ├── ThemeToggle.tsx          # Dark mode toggle component
│   ├── FileUploader.tsx         # Drag-and-drop file upload
│   ├── Search.tsx               # Global search functionality
│   └── ...                      # Other UI components
├── lib/                          # Utility functions and configurations
│   ├── actions/                  # Server actions
│   │   ├── file.actions.ts      # File management operations
│   │   └── user.actions.ts      # User authentication operations
│   ├── appwrite/                 # Appwrite configuration
│   ├── theme-provider.tsx       # Dark mode context and provider
│   └── utils.ts                 # Utility functions
├── constants/                    # Application constants
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── public/                       # Static assets
│   └── assets/
│       ├── icons/               # SVG icons and logos
│       └── images/              # Image assets
└── tailwind.config.ts           # Tailwind CSS configuration
```

## 🎨 Design Decisions & Customizations

### Dark Mode Implementation
- **Custom Theme Provider**: Built a comprehensive theme management system with localStorage persistence
- **CSS Variables**: Leveraged CSS custom properties for seamless theme switching
- **Smooth Transitions**: Added elegant animations for theme changes
- **System Preference**: Automatic detection and adaptation to OS theme preferences

### Brand Identity
- **Custom Logo Design**: Created "Qstore" branding with consistent visual identity
- **Color Palette**: Developed a cohesive color scheme with proper contrast ratios
- **Typography**: Implemented Poppins font family for modern, readable typography

### User Experience
- **Responsive Navigation**: Separate mobile and desktop navigation patterns
- **File Type Organization**: Intelligent categorization of documents, images, media, and other files
- **Real-time Feedback**: Loading states, progress indicators, and success notifications
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Performance Optimizations
- **Image Optimization**: Next.js Image component for optimized asset delivery
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Efficient loading of components and assets
- **Caching Strategy**: Intelligent caching for improved performance

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌟 Key Features Deep Dive

### File Management System
- **Multi-file Upload**: Drag-and-drop interface with progress tracking
- **File Organization**: Automatic categorization by file type
- **Search & Filter**: Advanced search with real-time results
- **File Actions**: Rename, download, share, and delete operations

### Analytics Dashboard
- **Storage Overview**: Visual representation of storage usage
- **File Type Breakdown**: Pie chart showing file distribution
- **Recent Activity**: Timeline of recent file operations
- **Usage Statistics**: Detailed storage analytics

### Security Features
- **OTP Verification**: Two-factor authentication for account security
- **File Permissions**: Granular access control for shared files
- **Secure Storage**: Encrypted file storage with Appwrite
- **Session Management**: Secure user session handling

## 🤝 Contributing

This is a personal portfolio project showcasing modern web development skills. The codebase demonstrates:

- **Modern React Patterns**: Hooks, context, and server components
- **TypeScript Best Practices**: Strict typing and type safety
- **Component Architecture**: Reusable, maintainable component design
- **State Management**: Efficient state handling with React hooks
- **API Integration**: Clean integration with external services

## 📄 License

This project is created as a portfolio piece to demonstrate web development skills and modern application architecture.

---

## 👨‍💻 About the Author

**Kisho** - Full-Stack Web Developer

I'm a passionate web developer focused on creating modern, user-centric applications. This Qstore project represents my expertise in:

- **Frontend Development**: React, Next.js, TypeScript, and modern CSS
- **Backend Integration**: API design and third-party service integration
- **UI/UX Design**: Creating intuitive, accessible user interfaces
- **Performance Optimization**: Building fast, scalable applications
- **Modern Architecture**: Clean code practices and maintainable solutions

Qstore showcases my ability to build production-ready applications with enterprise-grade features, beautiful design, and excellent user experience. The project demonstrates my understanding of modern web development practices, from authentication systems to real-time file management.

*Connect with me to discuss web development, collaborate on projects, or explore new opportunities.*