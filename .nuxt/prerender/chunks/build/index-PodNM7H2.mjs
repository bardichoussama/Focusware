import { defineComponent, ref, useSSRContext } from 'file://C:/Users/HP/Desktop/Focusware/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/HP/Desktop/Focusware/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="text-center"><h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Build Better, Focus Faster</h1><p class="mt-4 text-lg text-gray-600">Focusware helps creators and indie hackers launch faster with clean, minimal workflows.</p><form class="mt-8 max-w-md mx-auto flex gap-2"><input${ssrRenderAttr("value", email.value)} type="email" required placeholder="Enter your email" class="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"><button type="submit" class="rounded-md bg-primary-600 px-5 py-3 text-white font-medium hover:bg-primary-700 transition"> Join Waitlist </button></form><p class="mt-3 text-sm text-gray-500">No spam. Unsubscribe anytime.</p></div><div class="mt-16 grid md:grid-cols-3 gap-6"><div class="md:col-span-3 text-center"><h2 class="text-2xl font-semibold text-gray-900">What is Focusware?</h2><p class="mt-3 text-gray-600 max-w-2xl mx-auto"> Focusware is a lightweight toolkit of products and resources for makers. We champion simplicity, clarity, and momentum\u2014so you can ship more often with less friction. </p></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-PodNM7H2.mjs.map
