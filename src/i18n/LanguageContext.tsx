'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type React from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções com tipo definido
type TranslationKeys = {
  'nav.home': string;
  'nav.about': string;
  'nav.work': string;
  'nav.blog': string;
  'nav.gallery': string;
  'home.greeting': string;
  'home.role': string;
  'home.description': string;
  'home.cta': string;
  'about.title': string;
  'about.resume': string;
  'about.download': string;
  'work.title': string;
  'work.viewProject': string;
  'work.viewAll': string;
  'blog.title': string;
  'blog.readMore': string;
  'blog.readTime': string;
  'contact.title': string;
  'contact.email': string;
  'contact.social': string;
  'footer.rights': string;
};

const translations: Record<Language, TranslationKeys> = {
  pt: {
    // Navegação
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.work': 'Trabalhos',
    'nav.blog': 'Blog',
    'nav.gallery': 'Galeria',
    
    // Home
    'home.greeting': 'Olá, eu sou',
    'home.role': 'Desenvolvedor',
    'home.description': 'Bem-vindo ao meu portfólio',
    'home.cta': 'Ver projetos',
    
    // About
    'about.title': 'Sobre Mim',
    'about.resume': 'Currículo',
    'about.download': 'Baixar CV',
    
    // Work
    'work.title': 'Meus Projetos',
    'work.viewProject': 'Ver projeto',
    'work.viewAll': 'Ver todos',
    
    // Blog
    'blog.title': 'Blog',
    'blog.readMore': 'Ler mais',
    'blog.readTime': 'min de leitura',
    
    // Contact
    'contact.title': 'Contato',
    'contact.email': 'Email',
    'contact.social': 'Redes Sociais',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.blog': 'Blog',
    'nav.gallery': 'Gallery',
    
    // Home
    'home.greeting': 'Hi, I\'m',
    'home.role': 'Developer',
    'home.description': 'Welcome to my portfolio',
    'home.cta': 'View projects',
    
    // About
    'about.title': 'About Me',
    'about.resume': 'Resume',
    'about.download': 'Download CV',
    
    // Work
    'work.title': 'My Projects',
    'work.viewProject': 'View project',
    'work.viewAll': 'View all',
    
    // Blog
    'blog.title': 'Blog',
    'blog.readMore': 'Read more',
    'blog.readTime': 'min read',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.social': 'Social Media',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    // Carregar idioma salvo do localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Detectar idioma do navegador
      const browserLang = navigator.language.split('-')[0];
      const detectedLang = browserLang === 'pt' ? 'pt' : 'en';
      setLanguageState(detectedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    // Type-safe translation lookup with fallback
    const translation = translations[language][key as keyof TranslationKeys];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}