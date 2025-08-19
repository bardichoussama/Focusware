import { defineComponent, useSSRContext } from 'file://C:/Users/HP/Desktop/Focusware/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/HP/Desktop/Focusware/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "resources",
  __ssrInlineRender: true,
  setup(__props) {
    const articles = [
      {
        title: "Designing for Focus: Minimal UI Principles",
        excerpt: "Key principles to reduce cognitive load and help users stay in flow.",
        link: "#"
      },
      {
        title: "Rapid Launch Checklist",
        excerpt: "A simple checklist to go from idea to shipped in days, not months.",
        link: "#"
      },
      {
        title: "Tools I Use Daily as an Indie Hacker",
        excerpt: "A curated list of tools to keep your workflow fast and distraction-free.",
        link: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold text-gray-900 text-center">Resources</h1><p class="mt-2 text-center text-gray-600">Articles and guides to help you focus and ship. (Coming soon)</p><div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(articles, (item) => {
        _push(`<article class="border border-gray-200 rounded-lg p-6"><h3 class="text-lg font-semibold text-gray-900">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-gray-600">${ssrInterpolate(item.excerpt)}</p><a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener" class="mt-4 inline-block text-primary-600 hover:text-primary-700">Read more</a></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=resources-YcbC1-Dn.mjs.map
