import { useSSRContext, reactive, shallowRef, defineComponent, ref, computed, watch, unref, withCtx, createTextVNode, toDisplayString, mergeProps, renderSlot, createSlots, onUnmounted, createVNode, resolveDynamicComponent } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue/index.mjs';
import { _ as _export_sfc, a as useRoute, b as useNuxtApp, u as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-26e5a74c.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/vue/server-renderer/index.mjs';
import { UiButton, UiImage } from 'file:///Users/alexander/projects/me/portfolio_gallery/node_modules/@ovchinnikov-lxs-frontend/ui-kit/dist/ui-kit.es.js';
import _sfc_main$9 from './svg-icon-8b1d6f4a.mjs';
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

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const Title = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const DEFAULT_DIFF = -30;
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DefaultAside",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    ref(null);
    const baseShape = reactive({
      radius: 0,
      centerX: 0,
      centerY: 0
    });
    const diff = ref(DEFAULT_DIFF);
    const itemStyleList = computed(() => (index2) => {
      const angle = 60 / props.list.length * index2 + diff.value;
      const x = baseShape.centerX + baseShape.radius / 1.1 * Math.cos(angle * Math.PI / 180);
      const y = baseShape.centerY + baseShape.radius * Math.sin(angle * Math.PI / 180);
      return {
        left: `${x}px`,
        top: `${y}px`,
        transform: `rotate(${angle}deg) translate(${baseShape.radius / 2}px) rotate(${-angle}deg)`
      };
    });
    const blackShape2 = ref(null);
    function startBlackShapeAnimate() {
      if (!blackShape2.value) {
        return false;
      }
      const newspaperSpinning = [
        { transform: "rotate(0)" },
        { transform: "rotate(360deg)" }
      ];
      blackShape2.value.animate(newspaperSpinning, {
        duration: 1600,
        iterations: 1,
        easing: "cubic-bezier(0.88, 0, 0.16, 1)"
      });
    }
    const route = useRoute();
    watch(() => route.path, (val) => {
      startBlackShapeAnimate();
      diff.value = DEFAULT_DIFF + props.list.findIndex((i) => i.path === val) * -4;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<aside${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(_ctx.$style.wrapper)}"><div class="${ssrRenderClass(_ctx.$style.shape)}"><div class="${ssrRenderClass(_ctx.$style.blackShape)}"></div><!--[-->`);
      ssrRenderList(__props.list, (item2, index2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item2.path,
          to: item2.path,
          style: unref(itemStyleList)(index2),
          class: _ctx.$style.item
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item2.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item2.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></aside>`);
    };
  }
});
const wrapper$4 = "_wrapper_o9mh9_4";
const shape = "_shape_o9mh9_12";
const blackShape = "_blackShape_o9mh9_37";
const item$1 = "_item_o9mh9_50";
const style0$5 = {
  wrapper: wrapper$4,
  shape,
  blackShape,
  item: item$1
};
const cssModules$5 = {
  "$style": style0$5
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Default/Aside/DefaultAside.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$5]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "UiButton",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "black-20"
    },
    size: {
      type: String,
      default: "medium"
    },
    rounded: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(UiButton), mergeProps(_ctx.$attrs, {
        color: __props.color,
        rounded: __props.rounded,
        icon: __props.icon,
        size: __props.size
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Button/UiButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "UiIcon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "medium",
      validator: (v) => [
        "medium",
        "custom"
      ].includes(v)
    }
  },
  setup(__props) {
    const props = __props;
    const classList = computed(() => [
      [`--${props.size}-size`]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["UiIcon", unref(classList)]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SvgIcon, {
        name: __props.name,
        class: "UiIcon__el"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Icon/UiIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UiImage",
  __ssrInlineRender: true,
  props: {
    hasPreview: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const imageAttrs = computed(() => ({
      origin: props.src
      // preview: props.src, todo: imgproxy blured
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(UiImage), mergeProps({ ..._ctx.$attrs, ...unref(imageAttrs) }, _attrs), createSlots({ _: 2 }, [
        __props.hasPreview ? {
          name: "preview",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2)
              ;
            else {
              return [];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Image/UiImage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const leadingZero = (num) => num < 10 ? `0${num}` : num;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DefaultTapeItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiImage = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "DefaultTapeItem" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.wrapper)}"><div class="${ssrRenderClass(_ctx.$style.top)}">`);
      if (__props.title || __props.text) {
        _push(`<div>`);
        if (__props.title) {
          _push(`<h5 class="${ssrRenderClass(_ctx.$style.title)}">${ssrInterpolate(__props.title)}</h5>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.text) {
          _push(`<div class="${ssrRenderClass(_ctx.$style.text)}">${ssrInterpolate(__props.text)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(_ctx.$style.index)}">${ssrInterpolate(unref(leadingZero)(__props.index + 1))}</div></div><div class="${ssrRenderClass(_ctx.$style.imageWrapper)}">`);
      _push(ssrRenderComponent(_component_UiImage, {
        src: __props.src,
        class: _ctx.$style.image
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const wrapper$3 = "_wrapper_99jq1_4";
const top = "_top_99jq1_12";
const title = "_title_99jq1_20";
const text = "_text_99jq1_28";
const index = "_index_99jq1_34";
const imageWrapper = "_imageWrapper_99jq1_42";
const image = "_image_99jq1_42";
const style0$4 = {
  wrapper: wrapper$3,
  top,
  title,
  text,
  index,
  imageWrapper,
  image
};
const cssModules$4 = {
  "$style": style0$4
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Default/Tape/DefaultTapeItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DefaultTape",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    ref();
    const itemRefs = ref([]);
    const itemOffset = ref(0);
    function onSlideTo(path) {
      const activeItem = itemRefs.value.find((i) => i.dataset.id === path);
      if (!activeItem) {
        return false;
      }
      itemOffset.value = activeItem.offsetTop * -1;
    }
    watch(() => props.value, (val) => {
      onSlideTo(val);
    });
    const containerStyleList = computed(() => [{
      transform: `translateY(calc(${itemOffset.value}px + var(--container-padding)))`
    }]);
    onUnmounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultTapeItem = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "DefaultTape" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.wrapper)}"><div style="${ssrRenderStyle(unref(containerStyleList))}" class="${ssrRenderClass(_ctx.$style.container)}"><!--[-->`);
      ssrRenderList(__props.slides, (item2, index2) => {
        _push(`<div${ssrRenderAttr("data-id", item2.path)} class="${ssrRenderClass(_ctx.$style.item)}">`);
        _push(ssrRenderComponent(_component_DefaultTapeItem, {
          index: index2,
          title: item2.title,
          text: item2.text,
          src: item2.src
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
});
const wrapper$2 = "_wrapper_oi7vx_4";
const container = "_container_oi7vx_27";
const item = "_item_oi7vx_32";
const style0$3 = {
  wrapper: wrapper$2,
  container,
  item
};
const cssModules$3 = {
  "$style": style0$3
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Default/Tape/DefaultTape.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const useModal = reactive({
  key: 0,
  data: null,
  open(component) {
    this.key++;
    this.data = shallowRef(component);
  },
  close() {
    this.data = null;
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DefaultMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "DefaultMenu" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.wrapper)}"><div class="${ssrRenderClass(_ctx.$style.ham)}"><span></span><span></span><span></span></div></div></section>`);
    };
  }
});
const wrapper$1 = "_wrapper_1p4wf_4";
const ham = "_ham_1p4wf_10";
const style0$2 = {
  wrapper: wrapper$1,
  ham
};
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Default/Menu/DefaultMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DefaultModal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "DefaultModal" }, _attrs))}>`);
      if (unref(useModal).data) {
        _push(`<div class="${ssrRenderClass(_ctx.$style.wrapper)}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(useModal).data), {
          onClose: unref(useModal).close
        }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const wrapper = "_wrapper_mbg9d_4";
const style0$1 = {
  wrapper
};
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Default/Modal/DefaultModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DefaultModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const styleList = computed(() => [{
      "--default-background": `var(--ui-${String(route.name)}-color)`
    }]);
    const { $routes } = useNuxtApp();
    const list = [
      {
        name: "Purple",
        title: "Dreamy Flowers",
        text: "Behance: Omar Aqil",
        src: "/slides/slide_1-min.png",
        path: $routes.purple
      },
      {
        name: "Iceberg",
        title: "LUMI",
        text: "Lumi by Roli",
        src: "/slides/slide_2-min.png",
        path: $routes.iceberg
      },
      {
        name: "Polished Pine",
        title: "LUMI",
        text: "Lumi by Roli",
        src: "/slides/slide_3-min.png",
        path: $routes.polishedPine
      },
      {
        name: "Spanish Gray",
        title: "Type Balance",
        text: "Antian Lmeri",
        src: "/slides/slide_4-min.png",
        path: $routes.spanishGray
      },
      {
        name: "Antique Brass",
        title: "Type 2021 Edition",
        text: "Get it Studio",
        src: "/slides/slide_5-min.png",
        path: $routes.antiqueBrass
      },
      {
        name: "Cornflower Blue",
        title: "Compositions III",
        text: "Phillip Luck",
        src: "/slides/slide_6-min.png",
        path: $routes.cornflowerBlue
      }
    ];
    const activePage = computed(() => list.find((p) => p.path === route.path));
    const nextPath = computed(() => {
      const route2 = useRoute();
      const currentIndex = list.findIndex((i) => i.path === route2.path);
      if (currentIndex === list.length - 1) {
        return list[0].path;
      }
      return list[currentIndex + 1].path;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_DefaultAside = __nuxt_component_2;
      const _component_UiButton = _sfc_main$7;
      const _component_UiIcon = _sfc_main$6;
      const _component_DefaultTape = __nuxt_component_5;
      const _component_DefaultMenu = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(styleList),
        class: _ctx.$style.DefaultLayout
      }, _attrs))}>`);
      if (unref(activePage) && unref(activePage).name) {
        _push(ssrRenderComponent(_component_Head, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Color ${ssrInterpolate(unref(activePage).name)} | Gallery `);
                  } else {
                    return [
                      createTextVNode(" Color " + toDisplayString(unref(activePage).name) + " | Gallery ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Title, null, {
                  default: withCtx(() => [
                    createTextVNode(" Color " + toDisplayString(unref(activePage).name) + " | Gallery ", 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(DefaultModal, {
        class: _ctx.$style.modal
      }, null, _parent));
      _push(ssrRenderComponent(_component_DefaultAside, {
        list,
        class: _ctx.$style.aside
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(_ctx.$style.page)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<footer class="${ssrRenderClass(_ctx.$style.footer)}"> Designed by <br> Insta: Basit.designs `);
      _push(ssrRenderComponent(_component_UiButton, {
        to: unref(nextPath),
        class: _ctx.$style.button
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiIcon, { name: "ui/arrow" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiIcon, { name: "ui/arrow" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer></div>`);
      if (unref(activePage) && unref(activePage).path && list) {
        _push(ssrRenderComponent(_component_DefaultTape, {
          value: unref(activePage).path,
          slides: list,
          class: _ctx.$style.tape
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_DefaultMenu, {
        class: _ctx.$style.menu
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const DefaultLayout = "_DefaultLayout_11es6_4";
const modal = "_modal_11es6_14";
const aside = "_aside_11es6_24";
const page = "_page_11es6_32";
const footer = "_footer_11es6_41";
const button = "_button_11es6_49";
const tape = "_tape_11es6_53";
const menu = "_menu_11es6_58";
const style0 = {
  DefaultLayout,
  modal,
  aside,
  page,
  footer,
  button,
  tape,
  menu
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);

export { _default as default };
//# sourceMappingURL=default-10e50421.mjs.map
