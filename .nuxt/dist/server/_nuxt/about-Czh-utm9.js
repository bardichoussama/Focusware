import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/HP/Desktop/Focusware/node_modules/hookable/dist/index.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/unctx/dist/index.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/HP/Desktop/Focusware/node_modules/radix3/dist/index.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/defu/dist/defu.mjs";
import "C:/Users/HP/Desktop/Focusware/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "prose prose-slate max-w-none" }, _attrs))}><h1 class="text-3xl font-bold text-gray-900">About Focusware</h1><p class="text-gray-700">Focusware was born from a simple belief: creators do their best work when the noise is reduced and the path is clear.</p><p class="text-gray-700">I started Focusware to build tools and resources that embrace minimalism without sacrificing momentum. The mission is to help indie builders and small teams ship faster, more confidently, and with purpose.</p><h2 class="text-2xl font-semibold text-gray-900 mt-8">Mission</h2><p class="text-gray-700">Make high‑quality tools that encourage clarity, reduce friction, and keep you in flow.</p></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-Czh-utm9.js.map
