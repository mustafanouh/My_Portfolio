import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: 'always' // يضيف /ar أو /en في الرابط دائماً
});

export const config = {
  // يطبق الـ middleware على كل المسارات ما عدا الملفات الثابتة
  matcher: ['/((?!_next|.*\\..*).*)']
};