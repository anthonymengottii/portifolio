import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { cookies } from "next/headers";
import { baseURL, about, person } from "@/resources";  // remova 'work' daqui
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";
import { getContent } from "@/resources/content";  // ← importe a função de conteúdo traduzido

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = (cookieStore.get("language")?.value as 'pt' | 'en') || 'pt';

  const content = getContent(language);
  const { work } = content;

  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  const cookieStore = await cookies();
  const language = (cookieStore.get("language")?.value as 'pt' | 'en') || 'pt';

  // Carrega projetos no idioma atual
  const projects = getPosts(["src", "app", "work", "projects"], language);

  // Carrega o conteúdo traduzido
  const content = getContent(language);
  const { work, person, about } = content;

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>

      <Projects projects={projects} />

    </Column>
  );
}