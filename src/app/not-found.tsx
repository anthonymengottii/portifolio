import { Column, Heading, Text } from "@once-ui-system/core";

export default async function NotFound() {

  const language =
    'pt';
  const content =
    language === "pt"
      ? {
          title: "Página não encontrada",
          message: "A página que você tentou acessar não existe ou foi removida.",
        }
      : {
          title: "Page not found",
          message: "The page you are trying to access does not exist or was removed.",
        };

  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        {content.title}
      </Heading>
      <Text onBackground="neutral-weak">{content.message}</Text>
    </Column>
  );
}
