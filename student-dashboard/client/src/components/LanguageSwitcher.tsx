import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <ButtonGroup size="small" aria-label="language switcher">
      <Button
        onClick={() => changeLanguage('en')}
        variant={i18n.language === 'en' ? 'contained' : 'outlined'}
      >
        EN
      </Button>
      <Button
        onClick={() => changeLanguage('ar')}
        variant={i18n.language === 'ar' ? 'contained' : 'outlined'}
      >
        عربي
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;