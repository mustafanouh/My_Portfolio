import createNextIntlPlugin from 'next-intl/plugin';

// 1. إنشاء المكون الإضافي مع تحديد مسار ملف الإعداد
const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* يمكنك إضافة خيارات أخرى هنا */
};

// 2. تصدير الإعدادات مغلفة بـ withNextIntl
export default withNextIntl(nextConfig);