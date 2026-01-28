import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import type { getPosts } from "@/utils/utils";

type Project = ReturnType<typeof getPosts>[number];

type ProjectsProps = {
  range?: [number, number?];
  exclude?: string[];
  projects?: Project[]; // 👈 agora opcional
};

export function Projects({
  range,
  exclude,
  projects = [], // 👈 fallback seguro
}: ProjectsProps) {
  let allProjects = Array.isArray(projects) ? projects : [];

  if (exclude?.length) {
    allProjects = allProjects.filter(
      (post) => !exclude.includes(post.slug)
    );
  }

  const sortedProjects = allProjects
    .slice() // 👈 evita mutação
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  const displayedProjects = range
    ? sortedProjects.slice(
        range[0] - 1,
        range[1] ?? sortedProjects.length
      )
    : sortedProjects;

    
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          key={post.slug}
          priority={index < 2}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((m) => ({ src: m.avatar })) || []
          }
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
