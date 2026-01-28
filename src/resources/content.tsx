import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

type Language = 'pt' | 'en';

// Função que retorna o conteúdo baseado no idioma
export function getContent(lang: Language = 'pt') {
  const person: Person = {
    firstName: "Anthony",
    lastName: "Mengotti de Oliveira",
    name: "Anthony Mengotti de Oliveira",
    role: "CTO @ Upay",
    avatar: "/images/avatar.png",
    email: "anthonymengottii@gmail.com",
    location: "America/Sao_Paulo",
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
        description2: "Construindo a próxima geração de infraestrutura fintech",
      },
      home: {
        label: "Início",
        headline: "Arquiteto de software focado em fintech",
        featuredTitle: "Projeto em destaque",
        subline: "CTO da Upay, arquitetando sistemas financeiros de alta performance e infraestruturas de pagamento escaláveis.",
      },
      about: {
        label: "Sobre",
        titlePrefix: "Sobre –",
        description: "Conheça",
        rolePrefix: "Arquiteto de software focado em fintech",
        intro: {
          title: "Introdução",
          description1: "Arquiteto de software e estrategista de produto com foco em fintechs. Atualmente CTO da Upay, liderando o desenvolvimento de sistemas financeiros de alta performance, gateways de pagamento e infraestruturas bancárias digitais.",
          description2: "Especializado em arquitetar plataformas financeiras escaláveis, com experiência comprovada em sistemas críticos e de alto risco, orquestração de pagamentos e inteligência de risco em tempo real.",
        },
        work: {
          title: "Experiência Profissional",
          timeframe: "Atual",
          achievements: {
            upay1: "Liderando o desenvolvimento de infraestrutura moderna de pagamentos com foco em performance, segurança e flexibilidade.",
            upay2: "Arquitetando sistemas de gateway de pagamentos e infraestrutura bancária digital de próxima geração.",
            upay3: "Desenvolvendo plataformas financeiras de alta performance com foco em banco digital, orquestração de pagamentos e inteligência de risco em tempo real.",
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
        description: "Projetos de desenvolvimento e arquitetura por",
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
        description2: "Building the next generation of fintech infrastructure",
      },
      home: {
        label: "Home",
        headline: "Software architect focused on fintech",
        featuredTitle: "Featured Project",
        subline: "CTO at Upay, architecting high-performance financial systems and scalable payment infrastructures.",
      },
      about: {
        label: "About",
        titlePrefix: "About –",
        description: "Meet",
        rolePrefix: "Software architect focused on fintech",
        intro: {
          title: "Introduction",
          description1: "Software architect and product strategist focused on fintechs. Currently CTO at Upay, leading the development of high-performance financial systems, payment gateways and digital banking infrastructures.",
          description2: "Specialized in architecting scalable financial platforms, with proven experience in critical and high-risk systems, payment orchestration and real-time risk intelligence.",
        },
        work: {
          title: "Work Experience",
          timeframe: "Current",
          achievements: {
            upay1: "Leading the development of modern payment infrastructure with focus on performance, security and flexibility.",
            upay2: "Architecting next-generation payment gateway systems and digital banking infrastructure.",
            upay3: "Developing high-performance financial platforms focused on digital banking, payment orchestration and real-time risk intelligence.",
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
        description: "Development and architecture projects by",
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
          role: "CTO (Chief Technology Officer)",
          achievements: [
            t.about.work.achievements.upay1,
            t.about.work.achievements.upay2,
            t.about.work.achievements.upay3,
          ],
          images: [],
        },
        {
          company: "PagueSafe",
          timeframe: "Fev 2024 - Set 2025",
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
      skills: [
        {
          title: t.about.technical.skills.architecture.title,
          description: <>{t.about.technical.skills.architecture.description}</>,
          tags: [
            { name: "TypeScript", icon: "javascript" },
            { name: "Node.js", icon: "javascript" },
            { name: "Next.js", icon: "nextjs" },
          ],
          images: [
            {
              src: "/images/projects/upay/og-image.png",
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
          ],
          images: [
            {
              src: "/images/projects/upay/og-image.png",
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
            { name: "React", icon: "javascript" },
            { name: "Vue.js", icon: "javascript" },
            { name: "Laravel", icon: "javascript" },
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
      ],
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