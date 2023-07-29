import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "svg-sprite"
declare module "/Users/alexander/projects/me/portfolio_gallery/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}