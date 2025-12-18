import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Digital to Embodied Intelligence',
  favicon: 'img/Booklogo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ibrahim-Tayyab', // Usually your GitHub org/user name.
  projectName: 'physical-ai-robotics', // Usually your repo name.

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      ur: {
        label: 'اردو',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Booklogo.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // i18n Configuration
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ur'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
        },
        ur: {
          label: 'اردو',
          direction: 'rtl',
        },
      },
    },
    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/Booklogo.png',
      },
      items: [
        {
          to: '/docs/Introduction/vision',
          label: 'Textbook',
          position: 'left',
        },
        {
          to: '/',
          label: 'Modules',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/Ibrahim-Tayyab?tab=repositories',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            {
              label: 'Introduction',
              to: '/docs/Introduction/vision',
            },
            {
              label: 'Modules',
              to: '/',
            },
          ],
        },
        {
          title: 'Popular Models',
          items: [
            {
              label: 'ROS 2 Nodes',
              to: '/docs/Module-1-ROS2/nodes-topics',
            },
            {
              label: 'Gazebo Sim',
              to: '/docs/Module-2-Simulation/gazebo-physics',
            },
            {
              label: 'VLA Brain',
              to: '/docs/Module-4-VLA/voice-to-action',
            },
            {
              label: 'RL Control',
              to: '/docs/Module-6-Advanced-Control/reinforcement-learning',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'YouTube Channel',
              href: 'https://youtube.com/@itboyvlogs?si=DADXXNLqHje-fHY6',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Ibrahim-Tayyab',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} M Ibrahim Memon - Physical AI & Humanoid Robotics. Built by M Ibrahim Memon.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'python', 'yaml', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;