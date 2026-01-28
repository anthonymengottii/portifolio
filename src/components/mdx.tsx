import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';
import {
  Heading,
  Text,
  Row,
  Column,
  Badge,
  SmartLink,
  Media,
} from "@once-ui-system/core";

// Tipos precisos para evitar 'any'
type MDXChild = React.ReactNode;
type MDXChildren = MDXChild | MDXChild[];

// Componentes customizados para MDX
const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <Heading as="h1" variant="display-strong-l" {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }) => (
    <Heading as="h2" variant="display-strong-m" marginTop="xl" marginBottom="m" {...props}>
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }) => (
    <Heading as="h3" variant="heading-strong-l" marginTop="l" marginBottom="s" {...props}>
      {children}
    </Heading>
  ),
  p: ({ children, ...props }) => (
    <Text variant="body-default-l" marginBottom="m" {...props}>
      {children}
    </Text>
  ),
  blockquote: ({ children, ...props }) => (
    <Row
      as="blockquote"
      background="neutral-weak"
      padding="l"
      radius="m"
      marginY="xl"
      {...props}
    >
      <Text
        variant="body-default-l"
        style={{ fontStyle: 'italic' }} // italic via style (não tem prop 'italic')
      >
        {children}
      </Text>
    </Row>
  ),
  a: ({ href, children, ...props }) => (
    <SmartLink href={href as string} variant="primary" {...props}>
      {children}
    </SmartLink>
  ),
  img: ({ src, alt, ...props }) => (
    <Media
      src={src as string}
      alt={alt as string}
      radius="m"
      enlarge
      {...props}
    />
  ),
  pre: ({ children, ...props }) => {
    // Suporte a children string ou elemento
    if (typeof children === 'string') {
      return (
        <pre {...props}>
          <code>{children}</code>
        </pre>
      );
    }

    return (
      <pre {...props}>
        {children}
      </pre>
    );
  },
  code: ({ children, className, ...props }) => {
    const language = className?.replace('language-', '') || '';
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  ul: ({ children, ...props }) => (
    <Column as="ul" gap="s" marginBottom="m" {...props}>
      {children}
    </Column>
  ),
  li: ({ children, ...props }) => (
    <Text as="li" variant="body-default-m" {...props}>
      {children}
    </Text>
  ),
  // Adicione mais conforme necessário (ol, hr, table, etc.)
};

// Props tipadas
interface CustomMDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  components?: MDXComponents;
}

export function CustomMDX({ source, components = {} }: CustomMDXProps) {
  return (
    <MDXRemote
      source={source}  // ← corrigido: 'source' é obrigatório
      components={{ ...mdxComponents, ...components }}
    />
  );
}