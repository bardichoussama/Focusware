import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      {
        title: "Deep Work for Makers",
        description: "A concise guide to reclaiming attention and producing high-quality work.",
        link: "https://gumroad.com/l/deep-work-makers"
      },
      {
        title: "Launch in 7 Days",
        description: "A practical, step-by-step playbook for shipping your next product in a week.",
        link: "https://gumroad.com/l/launch-in-7-days"
      },
      {
        title: "The Minimal Marketing Handbook",
        description: "Simple, effective marketing strategies for indie builders without the fluff.",
        link: "https://gumroad.com/l/minimal-marketing"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold text-gray-900 text-center">Products</h1><p class="mt-2 text-center text-gray-600">Books and tools to help you focus and ship.</p><div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<div class="border border-gray-200 rounded-lg p-6 flex flex-col"><h3 class="text-xl font-semibold text-gray-900">${ssrInterpolate(product.title)}</h3><p class="mt-2 text-gray-600 flex-1">${ssrInterpolate(product.description)}</p><a${ssrRenderAttr("href", product.link)} target="_blank" rel="noopener" class="mt-4 inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-white font-medium hover:bg-primary-700 transition"> Buy on Gumroad </a></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-enDzEgTp.js.map
