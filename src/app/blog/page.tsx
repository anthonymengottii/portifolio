import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { cookies } from "next/headers";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog as blogStatic, person, newsletter } from "@/resources";
import { getPosts } from "@/utils/utils";
import { getContent } from "@/resources/content";  // ajuste o path se necessário

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = (cookieStore.get("language")?.value as 'pt' | 'en') || 'pt';

  const content = getContent(language);
  const { blog } = content;

  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog() {
  const cookieStore = await cookies();
  const language = (cookieStore.get("language")?.value as 'pt' | 'en') || 'pt';

  // Carrega os posts do blog no idioma correto
  // Path confirmado pelo seu dir: src/app/blog/posts
  const blogPosts = getPosts(["src", "app", "blog", "posts"], language);

  const content = getContent(language);
  const { blog } = content;

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>

      {blogPosts.length === 0 && (
        <Text 
          align="center" 
          onBackground="neutral-weak" 
          marginY="xl"
        >
          {language === 'pt' 
            ? "Nenhum post encontrado. Verifique as pastas em src/app/blog/posts/" 
            : "No posts found. Check folders in src/app/blog/posts/"}
        </Text>
      )}

      <Column fillWidth flex={1} gap="40">
        {/* Destaque: primeiro post */}
        <Posts posts={blogPosts} range={[1, 1]} thumbnail />

        {/* Posts 2 e 3 em 2 colunas */}
        <Posts posts={blogPosts} range={[2, 3]} columns="2" thumbnail direction="column" />

        <Mailchimp marginBottom="l" />

        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          {language === 'pt' ? "Posts anteriores" : "Earlier posts"}
        </Heading>

        {/* Posts restantes */}
        <Posts posts={blogPosts} range={[4]} columns="2" />
      </Column>
    </Column>
  );
}