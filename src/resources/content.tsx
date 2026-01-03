import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, SmartLink } from "@once-ui-system/core";

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

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio de ${person.name}, ${person.role} - Construindo a próxima geração de infraestrutura fintech`,
  headline: <>Arquiteto de software focado em fintech</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Upay</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projeto em destaque
        </Text>
      </Row>
    ),
    href: "/work/upay-payment-gateway",
  },
  subline: (
    <>
      CTO da <Text as="span" size="xl" weight="strong">Upay</Text>, arquitetando sistemas financeiros de alta performance e infraestruturas de pagamento escaláveis.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} - Arquiteto de software focado em fintech`,
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
    title: "Introdução",
    description: (
      <>
        Arquiteto de software e estrategista de produto com foco em fintechs. Atualmente CTO da Upay, liderando o desenvolvimento de sistemas financeiros de alta performance, gateways de pagamento e infraestruturas bancárias digitais.
        <br />
        <br />
        Especializado em arquitetar plataformas financeiras escaláveis, com experiência comprovada em sistemas críticos e de alto risco, orquestração de pagamentos e inteligência de risco em tempo real.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Upay LTDA",
        timeframe: "Atual",
        role: "CTO (Chief Technology Officer)",
        achievements: [
          "Liderando o desenvolvimento de infraestrutura moderna de pagamentos com foco em performance, segurança e flexibilidade.",
          "Arquitetando sistemas de gateway de pagamentos e infraestrutura bancária digital de próxima geração.",
          "Desenvolvendo plataformas financeiras de alta performance com foco em banco digital, orquestração de pagamentos e inteligência de risco em tempo real.",
        ],
        images: [],
      },
      {
        company: "PagueSafe",
        timeframe: "Fev 2024 - Set 2025",
        role: "Co-Founder & CTO",
        achievements: [
          "Liderança técnica e estratégica na construção de um gateway de pagamentos do zero, focando em integrações com parceiros comerciais e adquirentes.",
          "Desenvolvimento e implementação de novas tecnologias para processamento de pagamentos e integração com múltiplos provedores.",
          "Alcançou R$ 504 milhões em faturamento processado em um único ano, demonstrando escalabilidade e confiabilidade da plataforma.",
          "Arquiteto principal da infraestrutura técnica que suportou o crescimento exponencial do negócio.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação",
    institutions: [
      {
        name: "Unisul",
        description: (
          <>
            Bacharelado em Ciência da Computação - 4º Semestre
            <br />
            Graduação em andamento.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Arquitetura de Software & Fintech",
        description: (
          <>
            Especializado em arquitetar sistemas financeiros de alta performance, gateways de pagamento e infraestruturas bancárias digitais escaláveis.
          </>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "javascript",
          },
          {
            name: "Node.js",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
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
        title: "Infraestrutura de Pagamentos",
        description: (
          <>
            Desenvolvimento de sistemas de pagamento, orquestração de gateways, processamento de transações e integração com múltiplos provedores.
          </>
        ),
        tags: [
          {
            name: "Payment Gateway",
            icon: "rocket",
          },
          {
            name: "API Design",
            icon: "document",
          },
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
            src: "/images/projects/paguestream/dashboard.jpeg",
            alt: "PagueStream Dashboard",
            width: 16,
            height: 8,
            href: "/work/paguestream",
          },
        ],
      },
      {
        title: "Desenvolvimento Full Stack",
        description: (
          <>
            Desenvolvimento full stack com foco em performance, escalabilidade e experiência do usuário.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "javascript",
          },
          {
            name: "Vue.js",
            icon: "javascript",
          },
          {
            name: "Laravel",
            icon: "javascript",
          },
        ],
        images: [
          {
            src: "/images/projects/paguestream/dashboard.jpeg",
            alt: "PagueStream Dashboard",
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
  label: "Blog",
  title: "Artigos sobre fintech, arquitetura e tecnologia",
  description: `Leia os artigos de ${person.name} sobre fintech, arquitetura de software e inovação`,
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de desenvolvimento e arquitetura por ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria – ${person.name}`,
  description: `Galeria de imagens por ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };


