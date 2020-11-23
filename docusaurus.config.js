module.exports = {
  title: `You don't know js unoffical`,
  tagline:
    "Reading from github is boring. So created unofficial site to read that book",
  url: "https://ydkjs.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Shubham Verma", // Usually your GitHub org/user name.
  projectName: "ydkjs-documentation", // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: "javascript",
    },
    navbar: {
      title: "YDKJS",
      logo: {
        alt: "YDKJS Logo",
        src: "img/js.svg",
        srcDark: "img/js.svg", // Default to `logo.src`.
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/shubhamV123/ydkjs-documentation.git",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `<div>Created by <a
      href="https://shubhamverma.dev"
      target="_blank"
      rel="noopener noreferrer">
      Shubham
    </a><br/> Built with <a href="https://v2.docusaurus.io/" target="_blank"
    rel="noopener noreferrer">Docusaurus</a>. Icons by <a href="https://icons8.com/" target="_blank"
    rel="noopener noreferrer">Icon8</a></div>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/shubhamV123/ydkjs-documentation/edit/master/",
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/android-js-192x192.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};
