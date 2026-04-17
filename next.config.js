module.exports = {
  basePath: '/docs',
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}
