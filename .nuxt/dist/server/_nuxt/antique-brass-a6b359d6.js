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
const TITLE = "#D79476";
const TEXT = `
Antique Brass (Hex code: D79476) Thumbnail
The color name of hex code #D79476 is Antique Brass. The RGB values are (215, 148, 118) which means it is composed of 45% red, 31% green and 25% blue. The CMYK color codes, used in printers, are C:0 M:31 Y:45 K:16. In the HSV/HSB scale, #D79476 has a hue of 19°, 45% saturation and a brightness value of 84%.
. Also listed are the closest Pantone® (PMS) and RAL colors.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "antique-brass",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageContent, mergeProps({
        title: TITLE,
        text: TEXT,
        class: "AntiqueBrassPage"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/antique-brass.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=antique-brass-a6b359d6.js.map
