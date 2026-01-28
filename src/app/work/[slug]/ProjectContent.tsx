'use client';

import {
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
} from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProjectContentProps {
  post: {
    slug: string;
    metadata: {
      title: string;
      summary: string;
      publishedAt?: string;
      images: string[];
      team?: Array<{
        name: string;
        avatar: string;
        linkedIn: string;
      }>;
    };
  };
}

export function ProjectContent({ post }: ProjectContentProps) {
  const { t } = useLanguage();

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <>
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">{t('nav.work')}</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      
      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {post.metadata.team?.map((member, idx) => (
              <span key={member.name}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>
      
      {post.metadata.images.length > 0 && (
        <Media 
          priority 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="image" 
          src={post.metadata.images[0]} 
        />
      )}
    </>
  );
}