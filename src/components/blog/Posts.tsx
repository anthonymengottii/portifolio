import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  posts?: ReturnType<typeof getPosts>;  // ← permite passar posts já carregados (com idioma correto)
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  language?: 'pt' | 'en';  // opcional: só usa se não passar posts
}

export function Posts({
  posts: externalPosts,
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
  language = 'pt',  // fallback para PT
}: PostsProps) {
  // Usa posts externos se passados (já no idioma correto)
  // Senão carrega internamente com o idioma informado
  let allBlogs = externalPosts ?? getPosts(["src", "app", "blog", "posts"], language);

  // Exclui por slug
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  // Ordena por data (mais recente primeiro)
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Aplica range
  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}