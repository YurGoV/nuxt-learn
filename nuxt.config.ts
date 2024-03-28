// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
    // assets: "/<rootDir>/assets"
  },
  css: ["~/assets/main.scss"],
  // modules: ["@nuxt/content", "@nuxtjs/eslint-module"],
  modules: ["@nuxt/content",],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
