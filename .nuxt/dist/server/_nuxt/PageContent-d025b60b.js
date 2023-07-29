import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageContent",
  __ssrInlineRender: true,
  props: {
    /**
     * The Required Title For Page Content
     */
    title: {
      type: String,
      required: true
    },
    /**
     * The Required Text For Page Content
     */
    text: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "PageContent" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.wrapper)}"><h1 class="${ssrRenderClass(_ctx.$style.title)}">${ssrInterpolate(__props.title)}</h1><div class="${ssrRenderClass(_ctx.$style.text)}">${ssrInterpolate(__props.text)}</div></div></main>`);
    };
  }
});
const wrapper = "_wrapper_wdu6d_4";
const title = "_title_wdu6d_10";
const text = "_text_wdu6d_22";
const fade = "_fade_wdu6d_1";
const style0 = {
  wrapper,
  title,
  text,
  fade
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/PageContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=PageContent-d025b60b.js.map
