import { _ as __nuxt_component_0$1 } from "./nuxt-link-DGMX_DoV.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/HP/Desktop/Focusware/node_modules/hookable/dist/index.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/unctx/dist/index.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/HP/Desktop/Focusware/node_modules/radix3/dist/index.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/defu/dist/defu.mjs";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-200" }, _attrs))}><div class="max-w-6xl mx-auto px-4"><div class="flex items-center justify-between h-16">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-xl font-semibold text-gray-900"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Focusware`);
      } else {
        return [
          createTextVNode("Focusware")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="hidden md:flex items-center space-x-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-gray-700 hover:text-primary-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "text-gray-700 hover:text-primary-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resources",
    class: "text-gray-700 hover:text-primary-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resources`);
      } else {
        return [
          createTextVNode("Resources")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "text-gray-700 hover:text-primary-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "text-gray-700 hover:text-primary-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-gray-200 py-6 mt-12" }, _attrs))}><div class="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500"> © 2025 Focusware. All rights reserved. </div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavBar = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<main class="flex-1"><div class="max-w-6xl mx-auto px-4 py-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-9mwg-g6V.js.map
