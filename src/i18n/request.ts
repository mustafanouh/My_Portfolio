import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const locales = ['ar', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!hasLocale(locales, locale)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});