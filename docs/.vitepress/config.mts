import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja',
  title: 'CarSim Learning Portal',
  description: 'CarSim 日本顧客向け学習ポータル',
  base: '/carsim-learning-portal/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Knowledge Base', link: '/kb/faq/' },
      { text: 'Learning', link: '/learn/skill-map' },
      { text: 'Support', link: '/support/' },
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'はじめに', link: '/getting-started/' },
            { text: 'インストール', link: '/getting-started/install' },
            { text: 'ライセンス設定', link: '/getting-started/license' },
            { text: 'クイックスタート', link: '/getting-started/quick-start' },
            { text: 'トレーニング準備', link: '/getting-started/training-prep' },
          ],
        },
      ],
    },

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
      message: 'CarSim Learning Portal — Applied (Japan)',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/takahiko-otake-ai/carsim-learning-portal' },
    ],
  },
})
