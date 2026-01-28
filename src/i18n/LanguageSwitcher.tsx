'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { ToggleButton } from '@once-ui-system/core';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <ToggleButton
      prefixIcon="globe"
      onClick={toggleLanguage}
      selected={false}
      aria-label={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
      label={language.toUpperCase()}
      variant="ghost"
    />
  );
}
