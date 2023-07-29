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
const TITLE = "#61B5D4";
const TEXT = `
The color name of hex code #61B5D4 is Iceberg. The RGB values are (97, 181, 212) which means it is composed of 20% red, 37% green and 43% blue. The CMYK color codes, used in printers, are C:54 M:15 Y:0 K:17. In the HSV/HSB scale, #61B5D4 has a hue of 196°, 54% saturation and a brightness value of 83%.
. Also listed are the closest Pantone® (PMS) and RAL colors.
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
export {
  _sfc_main as default
};
//# sourceMappingURL=iceberg-e7966f23.js.map
