import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

type Language = 'pt' | 'en';

// Função que retorna o conteúdo baseado no idioma
export function getContent(lang: Language = 'pt') {
  const person: Person = {
    firstName: "Anthony",
    lastName: "Mengotti de Oliveira",
    name: "Anthony Mengotti de Oliveira",
    role: "Software Engineer @ Upay",
    avatar: "/images/avatar.png",
    email: "anthonymengottii@gmail.com",
    location: "America/Sao_Paulo",
    locationLabel: "Florianópolis, SC",
    languages: ["Português", "Inglês"],
  };

  const newsletter: Newsletter = {
    display: false,
    title: <>Inscreva-se na Newsletter de {person.firstName}</>,
    description: <>Newsletter sobre fintech, arquitetura de software e inovação em pagamentos</>,
  };

  const social: Social = [
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/anthonymengottii",
      essential: true,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/anthony-mengotti-50026424a",
      essential: true,
    },
    {
      name: "X (Twitter)",
      icon: "x",
      link: "https://x.com/AnthonyM78841",
      essential: true,
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/ux.mengotti/",
      essential: false,
    },
    {
      name: "Email",
      icon: "email",
      link: `mailto:${person.email}`,
      essential: true,
    },
  ];

  const translations = {
    pt: {
      portfolio: {
        title: "Portfolio de",
        description: "Portfolio de",
        description2: "Infraestrutura de pagamentos, gateways e sistemas financeiros em produção",
      },
      home: {
        label: "Início",
        headline: "Arquiteto de software focado em fintech",
        featuredTitle: "Projeto em destaque",
        subline: "Software Engineer da Upay, arquitetando sistemas financeiros de alta performance e infraestruturas de pagamento escaláveis.",
        availability: "Disponível para projetos freelance",
        stats: [
          { value: "R$ 504M+", label: "volume processado" },
          { value: "8+", label: "projetos em produção" },
          { value: "2+", label: "anos em fintech" },
        ],
      },
      about: {
        label: "Sobre",
        titlePrefix: "Sobre –",
        description: "Conheça",
        rolePrefix: "Arquiteto de software focado em fintech",
        intro: {
          title: "Introdução",
          description1: "Arquiteto de software e Co-founder com foco em fintech e pagamentos. Na Upay, lidero a construção da infraestrutura de gateway de pagamentos (PIX, cartão, boleto), APIs para parceiros e ferramentas de gestão em produção. Antes, co-fundei a PagueSafe, onde arquitetei o gateway do zero e a plataforma atingiu R$ 504 milhões em volume processado em um ano.",
          description2: "Especializado em sistemas de pagamento escaláveis, orquestração de múltiplos gateways, APIs para desenvolvedores e plataformas white-label. Trabalho com TypeScript/Node.js, Next.js e arquiteturas que priorizam simplicidade de integração e confiabilidade em ambiente de produção.",
        },
        work: {
          title: "Experiência Profissional",
          timeframe: "Out 2025 - Atual",
            paguesafeTimeframe: "Fev 2024 - Set 2025",
          achievements: {
            upay1: "Liderar o desenvolvimento e a operação do gateway: API REST, PIX/cartão/boleto, documentação e onboarding de parceiros.",
            upay2: "Desenvolver e manter os SDKs oficiais (Node, Python, PHP) e o middleware Hopy Split para facilitar a integração dos parceiros.",
            upay3: "Construir e manter o dashboard administrativo, webhooks e ferramentas internas para operação e suporte.",
            paguesafe1: "Liderança técnica e estratégica na construção de um gateway de pagamentos do zero, focando em integrações com parceiros comerciais e adquirentes.",
            paguesafe2: "Desenvolvimento e implementação de novas tecnologias para processamento de pagamentos e integração com múltiplos provedores.",
            paguesafe3: "Alcançou R$ 504 milhões em faturamento processado em um único ano, demonstrando escalabilidade e confiabilidade da plataforma.",
          },
        },
        studies: {
          title: "Formação",
          unisul: "Bacharelado em Ciência da Computação - 4º Semestre\nGraduação em andamento.",
        },
        technical: {
          title: "Habilidades Técnicas",
          projectsLabel: "Projetos",
          projectNames: {
            upayGateway: "Upay Gateway",
            paguestream: "PagueStream",
            paguesafe: "PagueSafe Landing",
            alpa: "Alpa",
            igaming: "iGaming Platform",
            hopyMiddleware: "Hopy Middleware",
            upaySdks: "Upay SDKs",
            silvapencil: "Silva Pencil",
            voraxAi: "Vorax.ai",
          },
          skills: {
            architecture: {
              title: "Arquitetura de Software & Fintech",
              description: "Especializado em arquitetar sistemas financeiros de alta performance, gateways de pagamento e infraestruturas bancárias digitais escaláveis.",
            },
            payments: {
              title: "Infraestrutura de Pagamentos",
              description: "Desenvolvimento de sistemas de pagamento, orquestração de gateways, processamento de transações e integração com múltiplos provedores.",
            },
            fullstack: {
              title: "Desenvolvimento Full Stack",
              description: "Desenvolvimento full stack com foco em performance, escalabilidade e experiência do usuário.",
            },
            backend: {
              title: "Backend & APIs",
              description: "APIs REST, middlewares, SDKs e serviços em Node.js, TypeScript e PHP. Foco em integração com gateways, webhooks e processamento assíncrono.",
            },
            frontend: {
              title: "Frontend & UI",
              description: "Interfaces responsivas e acessíveis com React, Next.js, Vue e Tailwind. Landing pages, dashboards e aplicações com foco em conversão e performance.",
            },
            ai: {
              title: "IA & Automação",
              description: "Integração de LLMs (Groq/Llama 3) em produtos reais, automação via WhatsApp e construção de SaaS multi-tenant orientado a IA.",
            },
          },
        },
      },
      blog: {
        label: "Blog",
        title: "Artigos sobre fintech, arquitetura e tecnologia",
        description: "Leia os artigos de",
      },
      work: {
        label: "Projetos",
        title: "Projetos",
        description: "Sistemas em produção, gateways de pagamento e produtos digitais desenvolvidos por",
      },
      gallery: {
        label: "Galeria",
        description: "Galeria de imagens por",
      },
    },
    en: {
      portfolio: {
        title: "Portfolio of",
        description: "Portfolio of",
        description2: "Payment infrastructure, gateways and financial systems in production",
      },
      home: {
        label: "Home",
        headline: "Software architect focused on fintech",
        featuredTitle: "Featured Project",
        subline: "Software Engineer at Upay, architecting high-performance financial systems and scalable payment infrastructures.",
        availability: "Available for freelance projects",
        stats: [
          { value: "R$ 504M+", label: "processed volume" },
          { value: "8+", label: "projects in production" },
          { value: "2+", label: "years in fintech" },
        ],
      },
      about: {
        label: "About",
        titlePrefix: "About –",
        description: "Meet",
        rolePrefix: "Software architect focused on fintech",
        intro: {
          title: "Introduction",
          description1: "Software architect and Co-founder focused on fintech and payments. At Upay, I lead the build of the payment gateway infrastructure (PIX, card, boleto), partner APIs, and management tools—all in production. Previously, I co-founded PagueSafe, where I architected the gateway from scratch and the platform reached R$ 504 million in processed volume in one year.",
          description2: "Specialized in scalable payment systems, multi-gateway orchestration, developer-friendly APIs, and white-label platforms. I work with TypeScript/Node.js, Next.js, and architectures that prioritize integration simplicity and reliability in production.",
        },
        work: {
          title: "Work Experience",
          timeframe: "Oct 2025 - Present",
          paguesafeTimeframe: "Feb 2024 - Sep 2025",
          achievements: {
            upay1: "Lead the development and operation of the gateway: REST API, PIX/card/boleto, documentation and partner onboarding.",
            upay2: "Develop and maintain official SDKs (Node, Python, PHP) and the Hopy Split middleware to simplify partner integration.",
            upay3: "Build and maintain the admin dashboard, webhooks and internal tools for operations and support.",
            paguesafe1: "Technical and strategic leadership in building a payment gateway from scratch, focusing on integrations with commercial partners and acquirers.",
            paguesafe2: "Development and implementation of new technologies for payment processing and integration with multiple providers.",
            paguesafe3: "Achieved R$ 504 million in processed revenue in a single year, demonstrating platform scalability and reliability.",
          },
        },
        studies: {
          title: "Education",
          unisul: "Bachelor's Degree in Computer Science - 4th Semester\nUndergraduate in progress.",
        },
        technical: {
          title: "Technical Skills",
          projectsLabel: "Projects",
          projectNames: {
            upayGateway: "Upay Gateway",
            paguestream: "PagueStream",
            paguesafe: "PagueSafe Landing",
            alpa: "Alpa",
            igaming: "iGaming Platform",
            hopyMiddleware: "Hopy Middleware",
            upaySdks: "Upay SDKs",
            silvapencil: "Silva Pencil",
            voraxAi: "Vorax.ai",
          },
          skills: {
            architecture: {
              title: "Software Architecture & Fintech",
              description: "Specialized in architecting high-performance financial systems, payment gateways and scalable digital banking infrastructures.",
            },
            payments: {
              title: "Payment Infrastructure",
              description: "Development of payment systems, gateway orchestration, transaction processing and integration with multiple providers.",
            },
            fullstack: {
              title: "Full Stack Development",
              description: "Full stack development with focus on performance, scalability and user experience.",
            },
            backend: {
              title: "Backend & APIs",
              description: "REST APIs, middlewares, SDKs and services in Node.js, TypeScript and PHP. Focus on gateway integration, webhooks and async processing.",
            },
            frontend: {
              title: "Frontend & UI",
              description: "Responsive and accessible interfaces with React, Next.js, Vue and Tailwind. Landing pages, dashboards and apps focused on conversion and performance.",
            },
            ai: {
              title: "AI & Automation",
              description: "LLM integration (Groq/Llama 3) in real products, WhatsApp automation and multi-tenant AI-driven SaaS development.",
            },
          },
        },
      },
      blog: {
        label: "Blog",
        title: "Articles about fintech, architecture and technology",
        description: "Read articles by",
      },
      work: {
        label: "Projects",
        title: "Projects",
        description: "Systems in production, payment gateways and digital products built by",
      },
      gallery: {
        label: "Gallery",
        description: "Image gallery by",
      },
    },
  };

  const t = translations[lang];

  const home: Home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: t.home.label,
    title: `${t.portfolio.title} ${person.name}`,
    description: `${t.portfolio.description} ${person.name}, ${person.role} - ${t.home.subline}`,
    headline: t.home.headline,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">Upay</strong>
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            {t.home.featuredTitle}
          </Text>
        </Row>
      ),
      href: "/work/upay-payment-gateway",
    },
    subline: t.home.subline,
    availability: {
      display: true,
      label: t.home.availability,
    },
    stats: t.home.stats,
  };

  const about: About = {
    path: "/about",
    label: t.about.label,
    title: `${t.about.titlePrefix} ${person.name}`,
    description: `${t.about.description} ${person.name}, ${person.role} - ${t.about.rolePrefix}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: false,
      link: "https://cal.com/seu-perfil",
    },
    intro: {
      display: true,
      title: t.about.intro.title,
      description: (
        <>
          {t.about.intro.description1}
          <br />
          <br />
          {t.about.intro.description2}
        </>
      ),
    },
    work: {
      display: true,
      title: t.about.work.title,
      experiences: [
        {
          company: "Upay LTDA",
          timeframe: t.about.work.timeframe,
          role: "Co-founder",
          achievements: [
            t.about.work.achievements.upay1,
            t.about.work.achievements.upay2,
            t.about.work.achievements.upay3,
          ],
          images: [],
        },
        {
          company: "PagueSafe",
          timeframe: t.about.work.paguesafeTimeframe,
          role: "Co-Founder & CTO",
          achievements: [
            t.about.work.achievements.paguesafe1,
            t.about.work.achievements.paguesafe2,
            t.about.work.achievements.paguesafe3,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: t.about.studies.title,
      institutions: [
        {
          name: "Unisul",
          description: (
            <>
              {t.about.studies.unisul.split('\n')[0]}
              <br />
              {t.about.studies.unisul.split('\n')[1]}
            </>
          ),
        },
      ],
    },
    technical: {
      display: true,
      title: t.about.technical.title,
      projectsLabel: (t.about.technical as { projectsLabel?: string }).projectsLabel,
      skills: (() => {
        const pn = (t.about.technical as { projectNames: Record<string, string> }).projectNames;
        return [
          {
            title: t.about.technical.skills.architecture.title,
            description: <>{t.about.technical.skills.architecture.description}</>,
            tags: [
              { name: "TypeScript", icon: "typescript" },
              { name: "Node.js", icon: "nodejs" },
              { name: "Next.js", icon: "nextjs" },
            ],
            projects: [
              { name: pn.upayGateway, href: "/work/upay-payment-gateway" },
              { name: pn.igaming, href: "/work/igaming-platform" },
              { name: pn.hopyMiddleware, href: "/work/upay-hopy-middleware" },
            ],
            images: [
              {
                src: "/images/projects/upay/hero.png",
                alt: "Upay Gateway Dashboard",
                width: 16,
                height: 8,
                href: "/work/upay-payment-gateway",
              },
            ],
          },
          {
            title: t.about.technical.skills.payments.title,
            description: <>{t.about.technical.skills.payments.description}</>,
            tags: [
              { name: "Payment Gateway", icon: "rocket" },
              { name: "API Design", icon: "document" },
              { name: "PIX", icon: "rocket" },
            ],
            projects: [
              { name: pn.upayGateway, href: "/work/upay-payment-gateway" },
              { name: pn.paguesafe, href: "/work/paguesafe-landingpage" },
              { name: pn.hopyMiddleware, href: "/work/upay-hopy-middleware" },
              { name: pn.upaySdks, href: "/work/upay-sdks" },
            ],
            images: [
              {
                src: "/images/projects/upay/hero.png",
                alt: "Upay Gateway Dashboard",
                width: 16,
                height: 8,
                href: "/work/upay-payment-gateway",
              },
              {
                src: "/images/projects/paguestream/landingpage.png",
                alt: "PagueStream Landing Page",
                width: 16,
                height: 8,
                href: "/work/paguestream",
              },
            ],
          },
          {
            title: t.about.technical.skills.fullstack.title,
            description: <>{t.about.technical.skills.fullstack.description}</>,
            tags: [
              { name: "React", icon: "react" },
              { name: "Vue.js", icon: "vue" },
              { name: "Laravel", icon: "laravel" },
            ],
            projects: [
              { name: pn.paguestream, href: "/work/paguestream" },
              { name: pn.paguesafe, href: "/work/paguesafe-landingpage" },
              { name: pn.alpa, href: "/work/alpa" },
              { name: pn.igaming, href: "/work/igaming-platform" },
            ],
            images: [
              {
                src: "/images/projects/paguestream/landingpage.png",
                alt: "PagueStream Landing Page",
                width: 16,
                height: 8,
                href: "/work/paguestream",
              },
              {
                src: "/images/projects/paguesafe/landingpage.png",
                alt: "PagueSafe Landing Page",
                width: 16,
                height: 8,
                href: "/work/paguesafe-landingpage",
              },
            ],
          },
          {
            title: t.about.technical.skills.backend.title,
            description: <>{t.about.technical.skills.backend.description}</>,
            tags: [
              { name: "TypeScript", icon: "typescript" },
              { name: "Node.js", icon: "nodejs" },
              { name: "Express", icon: "express" },
              { name: "PHP", icon: "php" },
            ],
            projects: [
              { name: pn.upayGateway, href: "/work/upay-payment-gateway" },
              { name: pn.upaySdks, href: "/work/upay-sdks" },
              { name: pn.hopyMiddleware, href: "/work/upay-hopy-middleware" },
              { name: pn.igaming, href: "/work/igaming-platform" },
              { name: pn.voraxAi, href: "/work/vorax-ai" },
            ],
          },
          {
            title: t.about.technical.skills.frontend.title,
            description: <>{t.about.technical.skills.frontend.description}</>,
            tags: [
              { name: "React", icon: "react" },
              { name: "Next.js", icon: "nextjs" },
              { name: "Vue", icon: "vue" },
              { name: "Tailwind", icon: "tailwind" },
            ],
            projects: [
              { name: pn.alpa, href: "/work/alpa" },
              { name: pn.paguesafe, href: "/work/paguesafe-landingpage" },
              { name: pn.paguestream, href: "/work/paguestream" },
              { name: pn.igaming, href: "/work/igaming-platform" },
              { name: pn.silvapencil, href: "/work/silvapencil-portfolio" },
            ],
          },
          {
            title: t.about.technical.skills.ai.title,
            description: <>{t.about.technical.skills.ai.description}</>,
            tags: [
              { name: "Groq / Llama 3", icon: "rocket" },
              { name: "Node.js", icon: "nodejs" },
              { name: "TypeScript", icon: "typescript" },
            ],
            projects: [
              { name: pn.voraxAi, href: "/work/vorax-ai" },
            ],
          },
        ];
      })(),
    },
  };

  const blog: Blog = {
    path: "/blog",
    label: t.blog.label,
    title: t.blog.title,
    description: `${t.blog.description} ${person.name}`,
  };

  const work: Work = {
    path: "/work",
    label: t.work.label,
    title: `${t.work.title} – ${person.name}`,
    description: `${t.work.description} ${person.name}`,
  };

  const gallery: Gallery = {
    path: "/gallery",
    label: t.gallery.label,
    title: `${t.gallery.label} – ${person.name}`,
    description: `${t.gallery.description} ${person.name}`,
    images: [],
  };

  return { person, social, newsletter, home, about, blog, work, gallery };
}

// Exportações padrão (português) - SEM REDECLARAÇÃO
export const { person, social, newsletter, home, about, blog, work, gallery } = getContent('pt');