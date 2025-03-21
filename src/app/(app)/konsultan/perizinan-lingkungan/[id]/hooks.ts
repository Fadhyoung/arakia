'use client';

import { useTranslations } from 'next-intl';

export const useDetailUser = () => {

  const t = useTranslations('DetailUser');


  return {
    t,
  };
};
