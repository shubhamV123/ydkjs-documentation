module.exports = {
  title: `You don't know js`,
  tagline: 'Reading from github is boring. So created unofficial site to read that book',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Shubham Verma', // Usually your GitHub org/user name.
  projectName: 'ydkjs-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'YDJS',
      logo: {
        alt: 'YDJS Logo',
        src: 'img/js.svg',
        srcDark: 'img/js.svg', // Default to `logo.src`.
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/shubhamV123/ydkjs-documentation.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Shubham. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shubhamV123/ydkjs-documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
