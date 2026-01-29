import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';
import {
  Heading,
  Text,
  Row,
  Column,
  SmartLink,
  Media,
} from "@once-ui-system/core";

// Componentes customizados
const components: MDXComponents = {
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
      <Text variant="body-default-l" style={{ fontStyle: 'italic' }}>
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
  pre: ({ children, ...props }) => (
    <pre {...props}>
      {typeof children === 'string' ? <code>{children}</code> : children}
    </pre>
  ),
  code: ({ children, className, ...props }) => (
    <code className={className} {...props}>
      {children}
    </code>
  ),
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
};

// Interface corrigida - aceita string diretamente
interface CustomMDXProps {
  source: string; // ✅ CORRETO: string, não MDXRemoteSerializeResult
  components?: MDXComponents;
}

export function CustomMDX({ source, components: customComponents = {} }: CustomMDXProps) {
  return (
    <MDXRemote
      source={source}  // ✅ CORRETO: passa string diretamente
      components={{ ...components, ...customComponents }}
    />
  );
}