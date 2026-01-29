'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type React from 'react';
import type { TranslationKeys } from './types';
type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: <K extends keyof TranslationKeys>(key: K) => TranslationKeys[K];
  }
  
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, TranslationKeys> = {
  pt: {
    // Buttons
    'button.submit': 'Enviar',

    // Login
    'login.title': 'Entrar',
    'login.description': 'Acesse sua conta para continuar',
    // Navegação
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.work': 'Projetos',
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
    'work.readCaseStudy': 'Ler estudo de caso',
    'work.projects': 'Projetos',
    'work.relatedProjects': 'Projetos relacionados',
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

    // HeadingLink
    'headingLink.copy': 'Copiar link',
    'headingLink.copied': 'Link copiado para a área de transferência',
    'headingLink.copyError': 'Falha ao copiar link',
    'headingLink.copySuccess': 'Link copiado para a área de transferência',

    // Mailchimp
    'mailchimp.error': 'Por favor, insira um endereço de email válido',
    'mailchimp.subscribe': 'Inscrever-se',

    // Login
    'login.passwordProtected': 'Esta página é protegida por senha',
    'login.password': 'Senha',
    'login.incorrectPassword': 'Senha incorreta',

    // Not Found
    'notFound.title': 'Página não encontrada',
    'notFound.message': 'A página que você está procurando não existe.',
    'home.headline': 'Arquiteto de software focado em fintech',
    'home.featured.title': 'Projeto em destaque',
    'about.work.title': 'Experiência Profissional',
    'about.intro.title': 'Introdução',
    'about.studies.title': 'Formação',
    'newsletter.description': 'Newsletter sobre fintech, arquitetura de software e inovação em pagamentos',
    'newsletter.title': 'Inscreva-se na Newsletter de',
    'about.title.prefix': 'Sobre',
    'about.description': 'Conheça',
    'about.role.prefix': 'Arquiteto de software focado em fintech',
    'about.intro.description': 'Arquiteto de software e estrategista de produto com foco em fintechs. Atualmente CTO da Upay, liderando o desenvolvimento de sistemas financeiros de alta performance, gateways de pagamento e infraestruturas bancárias digitais.',
    'about.intro.description.2': 'Especializado em arquitetar plataformas financeiras escaláveis, com experiência comprovada em sistemas críticos e de alto risco, orquestração de pagamentos e inteligência de risco em tempo real.',
    'about.work.timeframe': 'Atual',
    'about.work.achievement.1': 'Liderando o desenvolvimento de infraestrutura moderna de pagamentos com foco em performance, segurança e flexibilidade.',
    'about.work.achievement.2': 'Arquitetando sistemas de gateway de pagamentos e infraestrutura bancária digital de próxima geração.',
    'about.work.achievement.3': 'Desenvolvendo plataformas financeiras de alta performance com foco em banco digital, orquestração de pagamentos e inteligência de risco em tempo real.',
    'about.work.achievement.4': 'Liderança técnica e estratégica na construção de um gateway de pagamentos do zero, focando em integrações com parceiros comerciais e adquirentes.',
    'about.work.achievement.5': 'Desenvolvimento e implementação de novas tecnologias para processamento de pagamentos e integração com múltiplos provedores.',
    'about.work.achievement.6': 'Alcançou R$ 504 milhões em faturamento processado em um único ano, demonstrando escalabilidade e confiabilidade da plataforma.',
    'home.subline': 'CTO da Upay, arquitetando sistemas financeiros de alta performance e infraestruturas de pagamento escaláveis.',
    'about.studies.institution.description': 'Bacharelado em Ciência da Computação - 4º Semestre',
    'about.technical.title': 'Habilidades Técnicas',
    'about.studies.institution.description.2': 'Especializado em arquitetar sistemas financeiros de alta performance, gateways de pagamento e infraestruturas bancárias digitais escaláveis.',
    'about.technical.skill.title': 'Infraestrutura de Pagamentos',
    'about.technical.skill.description.1': 'Desenvolvimento de sistemas de pagamento, orquestração de gateways, processamento de transações e integração com múltiplos provedores.',
    'about.technical.skill.description.2': 'Desenvolvimento full stack com foco em performance, escalabilidade e experiência do usuário.',
    'about.technical.skill.title.2': 'Desenvolvimento Full Stack',
    'work.description': 'Projetos de desenvolvimento e arquitetura por',
    'blog.description.2': 'Leia os artigos de',
    'blog.description.3': 'sobre fintech, arquitetura de software e inovação',
    'gallery.description': 'Gallery of images by',
    'portfolio.title': 'Portfolio de',
    'portfolio.description': 'Portfolio de',
    'portfolio.description.2': 'Construindo a próxima geração de infraestrutura fintech',
    'about.technical.skill.title.1': 'Arquitetura de Software & Fintech',
  },    
  en: {
    'about.technical.skill.title.1': 'Software Architecture & Fintech',
    'portfolio.description': 'Portfolio of',
    'portfolio.description.2': 'Building the next generation of fintech infrastructure',
    'blog.description.2': 'Read the articles by',
    'blog.description.3': 'about fintech, software architecture and innovation in payments',
    'work.description': 'Development and architecture projects by',
    'about.studies.institution.description': 'Bachelor of Science in Computer Science - 4th semester',
    'gallery.description': 'Gallery of images by',
    // Buttons
    'button.submit': 'Submit',

    // Login
    'login.title': 'Login',
    'login.description': 'Access your account to continue',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Projects',
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
    'work.readCaseStudy': 'Read case study',
    'work.projects': 'Projects',
    'work.relatedProjects': 'Related projects',
    
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

    // HeadingLink
    'headingLink.copy': 'Copy link',
    'headingLink.copied': 'Link copied to clipboard',
    'headingLink.copyError': 'Failed to copy link',
    'headingLink.copySuccess': 'Link copied to clipboard',

    // Mailchimp
    'mailchimp.error': 'Please enter a valid email address',
    'mailchimp.subscribe': 'Subscribe',

    // Login
    'login.passwordProtected': 'This page is password protected',
    'login.password': 'Password',
    'login.incorrectPassword': 'Incorrect password',

    // Not Found
    'notFound.title': 'Page not found',
    'notFound.message': 'The page you are looking for does not exist.',
    'home.headline': 'Software architect focused on fintech',
    'home.featured.title': 'Featured project',
    'about.work.title': 'Professional Experience',
    'about.intro.title': 'Introduction',
    'about.studies.title': 'Education',
    'newsletter.description': 'Newsletter about fintech, software architecture and innovation in payments',
    'newsletter.title': 'Subscribe to the Newsletter of',
    'about.title.prefix': 'About',
    'about.description': 'Know',
    'about.role.prefix': 'Software architect focused on fintech',
    'about.intro.description': 'Software architect and product strategist focused on fintechs. Currently CTO at Upay, leading the development of high-performance financial systems, payment gateways and digital banking infrastructure.',
    'about.intro.description.2': 'Specialized in architecting scalable financial platforms, with proven experience in critical and high-risk systems, payment orchestration and real-time risk intelligence.',
    'about.work.timeframe': 'Current',
    'about.work.achievement.1': 'Leading the development of modern payment infrastructure with focus on performance, security and flexibility.',
    'about.work.achievement.2': 'Architecting payment gateway systems and next-generation digital banking infrastructure.',
    'about.work.achievement.3': 'Developing high-performance financial platforms with focus on digital banking, payment orchestration and real-time risk intelligence.',
    'about.work.achievement.4': 'Liderança técnica e estratégica na construção de um gateway de pagamentos do zero, focando em integrações com parceiros comerciais e adquirentes.',
    'about.work.achievement.5': 'Desenvolvimento e implementação de novas tecnologias para processamento de pagamentos e integração com múltiplos provedores.',
    'about.work.achievement.6': 'Alcançou R$ 504 milhões em faturamento processado em um único ano, demonstrando escalabilidade e confiabilidade da plataforma.',
    'home.subline': 'CTO at Upay, architecting high-performance financial systems and scalable payment infrastructure.',
    'about.technical.title': 'Technical Skills',
    'about.studies.institution.description.2': 'Specialized in architecting scalable financial systems, payment gateways and digital banking infrastructure.',
    'about.technical.skill.title': 'Payment Infrastructure',
    'about.technical.skill.description.1': 'Development of payment systems, gateway orchestration, transaction processing and integration with multiple providers.',
    'about.technical.skill.description.2': 'Full stack development with focus on performance, scalability and user experience.',
    'about.technical.skill.title.2': 'Full Stack Development',
    'portfolio.title': 'Portfolio of',
  },
};

// ✨ ADICIONAR: Interface com prop initialLanguage
interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  // ✨ MUDAR: Inicializa com initialLanguage se disponível
  const [language, setLanguageState] = useState<Language>(() => {
    if (initialLanguage) return initialLanguage;
    if (typeof window === 'undefined') return 'pt';
    
    // Tenta ler do cookie
    const cookieMatch = document.cookie.match(/language=(pt|en)/);
    if (cookieMatch) return cookieMatch[1] as Language;
    
    // Fallback: localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'pt' || saved === 'en')) return saved;
    
    // Fallback final: navegador
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' ? 'pt' : 'en';
  });

  const router = useRouter();

  // ✨ ADICIONAR: Sincroniza com cookie ao montar
  useEffect(() => {
    const cookieMatch = document.cookie.match(/language=(pt|en)/);
    const cookieLang = cookieMatch?.[1] as Language;
    
    if (cookieLang && cookieLang !== language) {
      setLanguageState(cookieLang);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.cookie = `language=${lang}; path=/; max-age=31536000`;
    router.refresh();
  };

  const t = <K extends keyof TranslationKeys>(key: K): TranslationKeys[K] => {
    return translations[language][key];
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