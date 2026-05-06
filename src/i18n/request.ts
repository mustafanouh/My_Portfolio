import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const locales = ['ar', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  // استخدام requestLocale بدلاً من locale (مطلوب في next-intl v4+)
  const locale = await requestLocale;

  if (!hasLocale(locales, locale)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});