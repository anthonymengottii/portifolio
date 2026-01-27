'use client';

import type React from 'react';
import { useLanguage } from './LanguageContext';
import { Icon, Button } from '@once-ui-system/core';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button
      type="button"
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        border: '1px solid var(--neutral-alpha-medium)',
        background: 'var(--neutral-alpha-weak)',
        color: 'var(--neutral-on-background-strong)',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.background = 'var(--neutral-alpha-medium)';
        e.currentTarget.style.borderColor = 'var(--neutral-alpha-strong)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.background = 'var(--neutral-alpha-weak)';
        e.currentTarget.style.borderColor = 'var(--neutral-alpha-medium)';
      }}
    >
      <Icon
        name="globe"
        size="s"
      />
      <span>{language === 'pt' ? 'PT' : 'EN'}</span>
    </Button>
  );
}

// Versão alternativa com bandeiras
export function LanguageSwitcherFlags() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.25rem',
        padding: '0.25rem',
        borderRadius: '0.5rem',
        background: 'var(--neutral-alpha-weak)',
      }}
    >
      <Button
        type="button"
        onClick={() => setLanguage('pt')}
        className={language === 'pt' ? 'active' : ''}
        style={{
          padding: '0.375rem 0.625rem',
          borderRadius: '0.375rem',
          border: 'none',
          background: language === 'pt' ? 'var(--accent-solid)' : 'transparent',
          color: language === 'pt' ? 'white' : 'var(--neutral-on-background-medium)',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        🇧🇷 PT
      </Button>
      <Button
        type="button"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
        style={{
          padding: '0.375rem 0.625rem',
          borderRadius: '0.375rem',
          border: 'none',
          background: language === 'en' ? 'var(--accent-solid)' : 'transparent',
          color: language === 'en' ? 'white' : 'var(--neutral-on-background-medium)',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        🇺🇸 EN
      </Button>
    </div>
  );
}