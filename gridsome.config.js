module.exports = {
  siteName: 'MattLaw.dev',
  siteUrl: 'https://www.mattlaw.dev',
  plugins: [],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/img');
  },
};
