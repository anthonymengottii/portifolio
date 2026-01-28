'use client';

import { Heading } from "@once-ui-system/core";
import { useLanguage } from "@/i18n/LanguageContext";

export function RelatedProjectsHeading() {
  const { t } = useLanguage();
  
  return (
    <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
      {t('work.relatedProjects')}
    </Heading>
  );
}