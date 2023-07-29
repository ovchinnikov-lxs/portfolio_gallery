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

const TITLE = "#61B5D4";
const TEXT = `
The color name of hex code #61B5D4 is Iceberg. The RGB values are (97, 181, 212) which means it is composed of 20% red, 37% green and 43% blue. The CMYK color codes, used in printers, are C:54 M:15 Y:0 K:17. In the HSV/HSB scale, #61B5D4 has a hue of 196\xB0, 54% saturation and a brightness value of 83%.
. Also listed are the closest Pantone\xAE (PMS) and RAL colors.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "iceberg",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageContent, mergeProps({
        title: TITLE,
        text: TEXT,
        class: "IcebergPage"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iceberg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=iceberg-e7966f23.mjs.map
