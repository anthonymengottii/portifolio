# 💼 Anthony Mengotti - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> CTO @ Upay | Software Architect | Fintech Specialist

Professional portfolio showcasing my work in fintech, payment systems, and software architecture. Built with Next.js 16, featuring bilingual support (PT/EN), MDX-powered content, and a modern, responsive design.

🌐 **Live Demo:** [[https://portfolio-anthonymengottiis-projects.vercel.app/](https://portfolio-anthonymengottiis-projects.vercel.app/)]

---

## ✨ Features

### 🌍 **Internationalization (i18n)**
- **Bilingual Support:** Portuguese (PT-BR) and English (EN)
- **Smart Language Detection:** Automatically detects browser language
- **Smooth Transitions:** Animated language switching with fade effects
- **Persistent Preferences:** Language choice saved in cookies and localStorage
- **SSR Compatible:** Server-side rendering with proper language initialization

### 📝 **MDX-Powered Content**
- **Dynamic Projects:** Each project has separate PT/EN MDX files
- **Blog System:** Markdown-based blog with full formatting support
- **Syntax Highlighting:** Code blocks with proper highlighting
- **Custom Components:** Enhanced MDX components for rich content

### 🎨 **Design & UX**
- **Once UI System:** Built with Once UI for consistent, beautiful design
- **Responsive:** Fully responsive from mobile to desktop
- **Dark Mode:** System-aware theme switching
- **Smooth Animations:** Page transitions and micro-interactions
- **Accessible:** WCAG compliant with proper ARIA labels

### 🚀 **Performance**
- **Next.js 16:** Latest features including App Router and Server Components
- **Static Generation:** Pre-rendered pages for instant loading
- **Optimized Images:** Next/Image for automatic optimization
- **Type-Safe:** Full TypeScript support for robust code

### 📱 **Mobile-First**
- Responsive navigation with mobile menu
- Touch-friendly interactions
- Optimized for all screen sizes

---

## 🛠️ Tech Stack

### Core
- **Framework:** [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling:** [Once UI System](https://once-ui.com/)
- **Content:** [MDX](https://mdxjs.com/) with next-mdx-remote

### Tools & Libraries
- **Linting:** Biome
- **Deployment:** Vercel
- **Icons:** Lucide Icons
- **Fonts:** Geist Sans & Mono

---

## 📦 Project Structure

```
portifolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── work/              # Projects section
│   │   │   └── projects/      # MDX project files
│   │   │       └── [project]/ # Each project folder
│   │   │           ├── pt.mdx # Portuguese content
│   │   │           └── en.mdx # English content
│   │   ├── blog/              # Blog section
│   │   │   └── posts/         # Blog posts (MDX)
│   │   └── about/             # About page
│   ├── components/            # React components
│   ├── i18n/                  # Internationalization
│   │   ├── LanguageContext.tsx
│   │   └── types.ts
│   ├── resources/             # Static content & config
│   │   ├── content.tsx        # Content configuration
│   │   └── custom.css         # Custom styles
│   └── utils/                 # Utility functions
├── public/                    # Static assets
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** v18.17 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anthonymengottii/portifolio.git
   cd portifolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Content Management

### Adding a New Project

1. **Create a project folder**
   ```bash
   mkdir src/app/work/projects/my-new-project
   ```

2. **Create MDX files**
   ```bash
   # Portuguese version
   touch src/app/work/projects/my-new-project/pt.mdx
   
   # English version
   touch src/app/work/projects/my-new-project/en.mdx
   ```

3. **Add frontmatter and content**
   ```mdx
   ---
   title: "My New Project"
   publishedAt: "2024-01-15"
   summary: "A brief description of the project"
   images: ["/images/projects/my-project/cover.jpg"]
   team: [
     {
       name: "Your Name",
       role: "Developer",
       avatar: "/images/avatar.png",
       linkedIn: "https://linkedin.com/in/yourprofile"
     }
   ]
   ---

   ## Project Overview
   Your content here...
   ```

### Adding a Blog Post

1. **Create a new MDX file**
   ```bash
   touch src/app/blog/posts/my-post.mdx
   ```

2. **Add content with frontmatter**
   ```mdx
   ---
   title: "My Blog Post"
   publishedAt: "2024-01-15"
   summary: "Post description"
   image: "/images/blog/post-cover.jpg"
   ---

   Your content here...
   ```

---

## 🌍 Internationalization Guide

### How Language Switching Works

1. **User selects language** → Stored in cookie + localStorage
2. **Page refreshes** → Server reads cookie
3. **Content loads** → Correct language MDX file is fetched
4. **UI updates** → All text uses selected language

### Adding New Translations

Edit `src/i18n/LanguageContext.tsx`:

```typescript
const translations: Record<Language, TranslationKeys> = {
  pt: {
    'new.key': 'Texto em português',
  },
  en: {
    'new.key': 'Text in English',
  },
};
```

Usage in components:
```typescript
const { t } = useLanguage();
return <h1>{t('new.key')}</h1>;
```

---

## 🎨 Customization

### Theme Colors

Edit `src/resources/once-ui.config.js`:

```javascript
export const config = {
  brand: 'blue',
  accent: 'teal',
  neutral: 'gray',
  // ... more options
};
```

### Custom Styles

Add custom CSS in `src/resources/custom.css`:

```css
/* Your custom styles */
.my-custom-class {
  color: var(--neutral-on-background-strong);
}
```

### Animation Timing

Adjust language transition in `src/i18n/LanguageContext.tsx`:

```typescript
setTimeout(() => {
  // ...
}, 300); // Change this value (in milliseconds)
```

---

## 📊 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** Optimized with tree-shaking

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy!

### Environment Variables

No environment variables required for basic deployment.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Anthony Mengotti de Oliveira**
- 🌐 Website: [magic-portfolio-for-next-js-three-tan-84.vercel.app](https://magic-portfolio-for-next-js-three-tan-84.vercel.app)
- 💼 LinkedIn: [anthony-mengotti](https://www.linkedin.com/in/anthony-mengotti-50026424a)
- 🐙 GitHub: [@anthonymengottii](https://github.com/anthonymengottii)
- 𝕏 Twitter: [@AnthonyM78841](https://x.com/AnthonyM78841)
- 📧 Email: anthonymengottii@gmail.com

---

## 🙏 Acknowledgments

- **[Once UI](https://once-ui.com/)** - Beautiful design system
- **[Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)** - Portfolio template base
- **[Next.js](https://nextjs.org/)** - The React Framework
- **[Vercel](https://vercel.com/)** - Deployment platform

