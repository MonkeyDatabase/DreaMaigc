import { defineConfig } from 'vitepress'
import sidebar from  './theme/sidebar'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitepress.dev/reference/site-config

const config = defineConfig({
  title: "DreaMagic",
  description: "Magical is the realm where AI's enchantment dwells, Amidst the wonders of Blockchina's mystical spells. In the realm of Data Science, secrets come alive, Glimpses of knowledge, our humble blog strives to derive. Crafting a fusion where dreams and wisdom entwine.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/posts' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MonkeyDatabase?tab=repositories' }
    ],

    sidebar,

    lastUpdated: {
      text: '上次更新时间'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2016-present Monkey'
    },

  },

  vite: {
    build: {
      rollupOptions: {
      }
    }
  }
})

export default config
