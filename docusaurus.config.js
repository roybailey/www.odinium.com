// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const baseUrl = process.env.IS_LOCAL ? '/Users/roybailey/Coding/github/www.odinium.com/build/' : '/';

const scripts = process.env.IS_LOCAL ? [
  "/Users/roybailey/Downloads/ASSETS/jquery/3.7.1/jquery.min.js",
  "/Users/roybailey/Downloads/ASSETS/bootstrap/5.3.3/js/bootstrap.min.js",
  "/Users/roybailey/Downloads/ASSETS/react-bootstrap@next/dist/react-bootstrap.min.js",
  "/Users/roybailey/Downloads/ASSETS/semantic-ui-react/dist/umd/semantic-ui-react.min.js",
] : [
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js",
  "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js",
  "https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js",
]

const stylesheets = process.env.IS_LOCAL ? [
  "https://fonts.cdnfonts.com/css/titillium",
  "/Users/roybailey/Downloads/ASSETS/font-awesome/4.6.3/css/font-awesome.min.css",
  "/Users/roybailey/Downloads/ASSETS/semantic-ui@2/dist/semantic.min.css",
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css',
  // "/Users/roybailey/Downloads/ASSETS/bootstrap/5.3.3/css/bootstrap.min.css",
    ] : [
  'https://fonts.cdnfonts.com/css/titillium',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
  'https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css',
]

console.log("------------------------------------------------------------")
console.log("baseUrl="+baseUrl)
console.log("scripts="+scripts)
console.log("------------------------------------------------------------")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Odinium Ltd',
  tagline: 'Website Design & Hosting',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://roybailey.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'roybailey', // Usually your GitHub org/user name.
  projectName: 'www.odinium.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  scripts: scripts,
  stylesheets: stylesheets,

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        // Replace with your project's social card
        image: 'img/rb-profile-2021.png',
        navbar: {
          style: 'dark',
          title: 'Roy Bailey - Software Engineering Leadership',
          items: [],
        },
        footer: {
          style: 'dark',
          links: [],
          copyright: `Copyright © ${new Date().getFullYear()} Roy Bailey`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),

  plugins: ['docusaurus-plugin-sass'],
};

export default config;
