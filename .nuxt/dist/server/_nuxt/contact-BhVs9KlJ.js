import { defineComponent, reactive, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({ name: "", email: "", message: "" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold text-gray-900 text-center">Contact</h1><p class="mt-2 text-center text-gray-600">Have a question or just want to say hi? Send a message.</p><form class="mt-8 max-w-xl mx-auto space-y-4"><div><label class="block text-sm font-medium text-gray-700">Name</label><input${ssrRenderAttr("value", form.name)} type="text" required class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"></div><div><label class="block text-sm font-medium text-gray-700">Email</label><input${ssrRenderAttr("value", form.email)} type="email" required class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"></div><div><label class="block text-sm font-medium text-gray-700">Message</label><textarea rows="5" required class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">${ssrInterpolate(form.message)}</textarea></div><button type="submit" class="w-full rounded-md bg-primary-600 px-5 py-3 text-white font-medium hover:bg-primary-700 transition">Send Message</button></form></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-BhVs9KlJ.js.map
