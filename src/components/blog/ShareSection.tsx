"use client";

import { Row, Text, Button, useToast } from "@once-ui-system/core";
import { socialSharing } from "@/resources";
import { useLanguage } from "@/i18n/LanguageContext"; // ← importe seu hook de idioma (se não tiver, veja fallback abaixo)

interface ShareSectionProps {
  title: string;
  url: string;
}

interface SocialPlatform {
  name: string;
  icon: string;
  label: string;
  generateUrl: (title: string, url: string) => string;
}

const socialPlatforms: Record<string, SocialPlatform> = {
  x: {
    name: "x",
    icon: "twitter", // ou "x" se o icon set tiver atualizado
    label: "X",
    generateUrl: (title, url) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  linkedin: {
    name: "linkedin",
    icon: "linkedin",
    label: "LinkedIn",
    generateUrl: (title, url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    name: "facebook",
    icon: "facebook",
    label: "Facebook",
    generateUrl: (title, url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  pinterest: {
    name: "pinterest",
    icon: "pinterest",
    label: "Pinterest",
    generateUrl: (title, url) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  },
  whatsapp: {
    name: "whatsapp",
    icon: "whatsapp",
    label: "WhatsApp",
    generateUrl: (title, url) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  reddit: {
    name: "reddit",
    icon: "reddit",
    label: "Reddit",
    generateUrl: (title, url) =>
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  telegram: {
    name: "telegram",
    icon: "telegram",
    label: "Telegram",
    generateUrl: (title, url) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  email: {
    name: "email",
    icon: "email",
    label: "Email",
    generateUrl: (title, url) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this post: ${url}`)}`,
  },
};

export function ShareSection({ title, url }: ShareSectionProps) {
  const { addToast } = useToast();
  const { t, language } = useLanguage(); // ← seu contexto/hook de tradução (ajuste se o nome for diferente)

  // Fallback simples caso não tenha o contexto de idioma
  const shareText = language === 'en' ? "Share this post:" : "Compartilhar este post:";

  // Não renderiza se compartilhamento estiver desativado
  if (!socialSharing.display) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      addToast({
        variant: "success",
        message: language === 'en' ? "Link copied to clipboard" : "Link copiado para a área de transferência",
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      addToast({
        variant: "danger",
        message: language === 'en' ? "Failed to copy link" : "Falha ao copiar link",
      });
    }
  };

  // Plataformas ativadas + filtro de existência
  const enabledPlatforms = Object.entries(socialSharing.platforms)
    .filter(([key, enabled]) => enabled && key !== 'copyLink')
    .map(([key]) => socialPlatforms[key])
    .filter(Boolean); // remove undefined (plataformas não definidas)

  return (
    <Row fillWidth center gap="16" marginTop="32" marginBottom="16">
      <Text variant="label-default-m" onBackground="neutral-weak">
        {shareText}
      </Text>

      <Row
        data-border="rounded"
        gap="12"
        horizontal="center"
        wrap
        padding="8"
        background="neutral-weak-alpha-5" // opcional: fundo sutil para destacar
      >
        {enabledPlatforms.map((platform) => (
          <Button
            key={platform.name}
            variant="secondary"
            size="s"
            href={platform.generateUrl(title, url)}
            prefixIcon={platform.icon}
            aria-label={`Compartilhar no ${platform.label}`}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}

        {socialSharing.platforms.copyLink && (
          <Button
            variant="secondary"
            size="s"
            onClick={handleCopy}
            prefixIcon="link" // ou "openLink" se preferir
            aria-label={language === 'en' ? "Copy link" : "Copiar link"}
          />
        )}
      </Row>
    </Row>
  );
}