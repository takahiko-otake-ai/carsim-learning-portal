import { defineConfig } from 'vitepress'

const jaNav = [
  { text: 'ホーム', link: '/' },
  { text: 'はじめに', link: '/getting-started/' },
  { text: 'ナレッジベース', link: '/kb/faq/' },
  { text: 'ラーニング', link: '/learn/skill-map' },
  { text: 'サポート', link: '/support/' },
  { text: 'CarSim.com ↗', link: 'https://www.carsim.com/', target: '_blank', rel: 'noopener' },
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Getting Started', link: '/en/getting-started/' },
  { text: 'Knowledge Base', link: '/en/kb/faq/' },
  { text: 'Learning', link: '/en/learn/skill-map' },
  { text: 'Support', link: '/en/support/' },
  { text: 'CarSim.com ↗', link: 'https://www.carsim.com/', target: '_blank', rel: 'noopener' },
]

const jaSidebar = {
  '/getting-started/': [
    {
      text: 'はじめに',
      items: [
        { text: '概要', link: '/getting-started/' },
        { text: 'インストール', link: '/getting-started/install' },
        { text: 'ライセンス設定', link: '/getting-started/license' },
        { text: 'クイックスタート', link: '/getting-started/quick-start' },
        // トレーニング準備はステップからは除外。申し込み者向けに概要ページからリンク
        { text: 'トレーニング準備（申込者向け）', link: '/getting-started/training-prep' },
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
        { text: 'Training Preparation (Registered)', link: '/en/getting-started/training-prep' },
      ],
    },
  ],
}

export default defineConfig({
  base: '/carsim-learning-portal/',
  title: 'CarSim Learning Portal',
  description: 'CarSim learning resources for users in Japan',
  appearance: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/carsim-learning-portal/favicon.png' }],
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
  ],

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
        docFooter: {
          prev: '前のページ',
          next: '次のページ',
        },
        outline: {
          label: 'このページの内容',
        },
        lastUpdated: {
          text: '最終更新',
        },
        returnToTopLabel: 'トップへ戻る',
        sidebarMenuLabel: 'メニュー',
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
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
