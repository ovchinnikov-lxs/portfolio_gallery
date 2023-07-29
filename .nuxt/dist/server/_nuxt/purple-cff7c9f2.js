import { _ as __nuxt_component_0 } from "./PageContent-d025b60b.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const TITLE = "#9174DB";
const TEXT = `
The color name of hex code #9174DB is Medium Purple. The RGB values are (145, 116, 219) which means it is composed of 30% red, 24% green and 46% blue. The CMYK color codes, used in printers, are C:34 M:47 Y:0 K:14. In the HSV/HSB scale, #9174DB has a hue of 257°, 47% saturation and a brightness value of 86%.
. Also listed are the closest Pantone® (PMS) and RAL colors.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "purple",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageContent, mergeProps({
        title: TITLE,
        text: TEXT,
        class: "PurplePage"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/purple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=purple-cff7c9f2.js.map
