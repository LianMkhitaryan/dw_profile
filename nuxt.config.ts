// https://nuxt.com/docs/api/configuration/nuxt-config

import legacy from '@vitejs/plugin-legacy';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Dwelly Profile',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },

  css: ['@/assets/styles/app.scss'],

  vite: {
    plugins: [legacy({
      targets: ['> 1%', 'last 2 versions', 'not dead', 'iOS >= 10'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/variables.scss" as *;
            @use "@/assets/styles/media.scss" as *;
          `
        }
      }
    }
  },

  postcss: {
    plugins: {
      'postcss-inset': {},
      '@csstools/postcss-media-minmax': {},
      'postcss-gap-properties': {},
      'postcss-place': {},
      'postcss-selector-not': {}
    }
  },

  modules: ['nuxt-svgo-loader']
})