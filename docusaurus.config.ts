import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {links as footerLinks} from './footer_links';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IoT & Robótica',
  tagline: 'Robótica e Internet de las cosas, IA on Edge',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
    hooks: {
      // Downgrade to warnings so your staging preview or local build won't fail
      onBrokenMarkdownImages: 'warn', 
    },
    remarkRehypeOptions: {
      footnoteLabel: 'Notas al pie',
      footnoteBackLabel: 'Volver a referencia',
    },
  },
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://patricioaraneda.cl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/iot-robotica/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'patricioaraneda', // Usually your GitHub org/user name.
  projectName: 'iot-robotica', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-3V2QKLCVQR',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
        {name: 'description', content: 'Manual de IoT y Robótica. Aprende sobre Internet de las cosas y robótica con ejemplos prácticos y ejercicios.'},
        {name: 'keywords', content: 'iot, robótica, internet de las cosas, manual, ejemplos prácticos, ejercicios'},
        {name: 'author', content: 'Patricio Araneda'},
        {property: 'og:type', content: 'website' },
        {property: 'og:image', content: 'https://patricioaraneda.cl/iot-robotica/img/sql-manual.jpg' },
      ],
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IoT & Robótica',
      logo: {
        alt: 'IoT y Robótica',
        src: 'img/ODC-isotipo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },
        {
          href: 'https://github.com/paranedagarcia/iot-robotica',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: footerLinks,
      copyright: `Copyright © ${new Date().getFullYear()} Patricio Araneda G. | IoT & Robótica, Built with <a href="https://docusaurus.io/">Docusaurus</a>. <br /><img src="img/cc-by-nc-sa.png" alt="CC-BY-SA 4.0" width="120" />`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'javascript', 'bash', 'cpp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
