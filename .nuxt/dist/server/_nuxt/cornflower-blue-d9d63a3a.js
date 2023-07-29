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
const TITLE = "#6E92EF";
const TEXT = `
Cornflower Blue (Hex code: 6E92EF) Thumbnail
The color name of hex code #6E92EF is Cornflower Blue. The RGB values are (110, 146, 239) which means it is composed of 22% red, 29% green and 48% blue. The CMYK color codes, used in printers, are C:54 M:39 Y:0 K:6. In the HSV/HSB scale, #6E92EF has a hue of 223°, 54% saturation and a brightness value of 94%.
. Also listed are the closest Pantone® (PMS) and RAL colors.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cornflower-blue",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageContent, mergeProps({
        title: TITLE,
        text: TEXT,
        class: "CornflowerBlue"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cornflower-blue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cornflower-blue-d9d63a3a.js.map
