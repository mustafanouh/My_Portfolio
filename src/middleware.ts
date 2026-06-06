import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // localeDetection: false
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};