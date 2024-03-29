// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
    // assets: "/<rootDir>/assets"
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxt/content', ['@nuxtjs/eslint-module', { lintOnStart: false }]],
  // modules: ["@nuxt/content",],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
  // },
  // ssr: false
})
