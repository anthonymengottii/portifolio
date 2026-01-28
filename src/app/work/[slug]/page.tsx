import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import type { Metadata } from "next";

import {
  Meta,
  Schema,
  Column,
  Line,
} from "@once-ui-system/core";

import { getPosts, getPostBySlug } from "@/utils/utils";
import { baseURL, about, person, work } from "@/resources";
import {
  ScrollToHash,
  CustomMDX,
} from "@/components";

import { ProjectContent } from "./ProjectContent";
import { RelatedProjectsHeading } from "./Relatedprojectsheading";
import { Projects } from "@/components/work/Projects";

/* =========================
   STATIC PARAMS
========================= */
export async function generateStaticParams(): Promise<
  { slug: string }[]
> {
  const posts = getPosts(
    ["src", "app", "work", "projects"],
    "pt"
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/* =========================
   METADATA
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const slugPath = Array.isArray(slug)
    ? slug.join("/")
    : slug ?? "";

  const cookieStore = await cookies();
  const language =
    (cookieStore.get("language")?.value as "pt" | "en") || "pt";

  const post = getPostBySlug(
    ["src", "app", "work", "projects"],
    slugPath,
    language
  );

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image:
      post.metadata.image ||
      `/api/og/generate?title=${encodeURIComponent(
        post.metadata.title
      )}`,
    path: `${work.path}/${post.slug}`,
  });
}

/* =========================
   PAGE
========================= */
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { slug } = await params;

  const slugPath = Array.isArray(slug)
    ? slug.join("/")
    : slug ?? "";

  const cookieStore = await cookies();
  const language =
    (cookieStore.get("language")?.value as "pt" | "en") || "pt";

  const post = getPostBySlug(
    ["src", "app", "work", "projects"],
    slugPath,
    language
  );

  if (!post) notFound();

  const allProjects = getPosts(
    ["src", "app", "work", "projects"],
    language
  );

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(
            post.metadata.title
          )}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header / infos (Client) */}
      <ProjectContent post={post} />

      {/* Conteúdo MDX */}
      <Column as="article" maxWidth="xs" style={{ margin: "auto" }}>
        <CustomMDX source={post.content} />
      </Column>

      {/* Projetos relacionados */}
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <RelatedProjectsHeading />

        <Projects
          projects={allProjects}
          exclude={[post.slug]}
          range={[2]}
        />
      </Column>

      <ScrollToHash />
    </Column>
  );
}
