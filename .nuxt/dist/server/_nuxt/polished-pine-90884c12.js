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
const TITLE = "#6DA88F";
const TEXT = `
The color name of hex code #6DA88F is Polished Pine. The RGB values are (109, 168, 143) which means it is composed of 26% red, 40% green and 34% blue. The CMYK color codes, used in printers, are C:35 M:0 Y:15 K:34. In the HSV/HSB scale, #6DA88F has a hue of 155°, 35% saturation and a brightness value of 66%.
. Also listed are the closest Pantone® (PMS) and RAL colors.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "polished-pine",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageContent, mergeProps({
        title: TITLE,
        text: TEXT,
        class: "PolishedPinePage"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/polished-pine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=polished-pine-90884c12.js.map
