import { _ as __nuxt_component_0 } from './PageContent-d025b60b.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue/server-renderer/index.mjs';
import '../server.mjs';
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

const TITLE = "#93939B";
const TEXT = `
The color name of hex code #93939B is Spanish Gray. The RGB values are (147, 147, 155) which means it is composed of 33% red, 33% green and 35% blue. The CMYK color codes, used in printers, are C:5 M:5 Y:0 K:39. In the HSV/HSB scale, #93939B has a hue of 240\xB0, 5% saturation and a brightness value of 61%.
. Also listed are the closest Pantone\xAE (PMS) and RAL colors.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "spanish-gray",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageContent, mergeProps({
        title: TITLE,
        text: TEXT,
        class: "SpanishGrayPage"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spanish-gray.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=spanish-gray-6a858e96.mjs.map
