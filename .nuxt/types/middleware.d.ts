import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/alexander/projects/me/portfolio_gallery/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}