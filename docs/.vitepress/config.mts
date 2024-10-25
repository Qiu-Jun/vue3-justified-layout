/*
 * @Author: June
 * @Description:
 * @Date: 2024-10-25 21:39:31
 * @LastEditors: June
 * @LastEditTime: 2024-10-25 22:14:41
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue3-justified-layout',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }]
  }
})
