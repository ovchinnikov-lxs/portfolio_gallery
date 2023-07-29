import { _ as _export_sfc, e as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/hookable/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/unctx/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/h3/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/ufo/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/unhead/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/destr/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/scule/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/klona/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/ohash/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("virtual:nuxt:/Users/alexander/projects/me/portfolio_gallery/.nuxt/svg-sprite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const svgSprite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { svgSprite as default };
//# sourceMappingURL=svg-sprite-eb781834.mjs.map
