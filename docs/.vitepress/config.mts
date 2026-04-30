import { defineConfig } from 'vitepress'

const jaNav = [
  { text: 'ホーム', link: '/' },
  { text: 'はじめる', link: '/getting-started/' },
  { text: 'ナレッジベース', link: '/kb/faq/' },
  { text: 'ラーニング', link: '/learn/skill-map' },
  { text: 'サポート', link: '/support/' },
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Getting Started', link: '/en/getting-started/' },
  { text: 'Knowledge Base', link: '/en/kb/faq/' },
  { text: 'Learning', link: '/en/learn/skill-map' },
  { text: 'Support', link: '/en/support/' },
]

const jaSidebar = {
  '/getting-started/': [
    {
      text: 'はじめる',
      items: [
        { text: '概要', link: '/getting-started/' },
        { text: 'インストール', link: '/getting-started/install' },
        { text: 'ライセンス設定', link: '/getting-started/license' },
        { text: 'クイックスタート', link: '/getting-started/quick-start' },
        { text: 'トレーニング準備', link: '/getting-started/training-prep' },
      ],
    },
  ],
}

const enSidebar = {
  '/en/getting-started/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Overview', link: '/en/getting-started/' },
        { text: 'Install', link: '/en/getting-started/install' },
        { text: 'License Setup', link: '/en/getting-started/license' },
        { text: 'Quick Start', link: '/en/getting-started/quick-start' },
        { text: 'Training Prep', link: '/en/getting-started/training-prep' },
      ],
    },
  ],
}

export default defineConfig({
  base: '/carsim-learning-portal/',
  title: 'CarSim Learning Portal',
  description: 'CarSim learning resources for users in Japan',

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
      },
    },
    // ko: {
    //   label: '한국어',
    //   lang: 'ko',
    //   link: '/ko/',
    // },
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '検索',
            buttonAriaLabel: 'ドキュメントを検索',
          },
          modal: {
            noResultsText: '該当する結果が見つかりません',
            resetButtonTitle: 'クリア',
            footer: {
              selectText: '選択',
              navigateText: '移動',
              closeText: '閉じる',
            },
          },
        },
      },
    },

    footer: {
      message: 'CarSim Learning Portal — Applied Intuition (Japan)',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/takahiko-otake-ai/carsim-learning-portal' },
    ],
  },
})
