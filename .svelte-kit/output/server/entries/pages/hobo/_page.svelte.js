import { c as create_ssr_component, e as escape, b as add_attribute, f as each } from "../../../chunks/index2.js";
import { a as assets } from "../../../chunks/paths.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-image:radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),\r\n      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);background-size:50px 50px}",
  map: null
};
const verticalSpacing = 100;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imageFiles = ["bild.png", "stcloud.JPEG", "wob.JPEG", "interstate.JPEG"];
  let container;
  let images = [];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-zs2w4p_START -->${$$result.title = `<title>Scrapbook</title>`, ""}<!-- HEAD_svelte-zs2w4p_END -->`, ""}



<div class="w-screen mx-auto relative pb-32" style="${"cursor: " + escape("default", true) + "; min-height: " + escape(Math.max(1e3, images.length * verticalSpacing + 600), true) + "px;"}"${add_attribute("this", container, 0)}>${each(images, (image, i) => {
    return `
    <div class="absolute select-none" style="${"left: " + escape(image.x, true) + "px; top: " + escape(image.y, true) + "px; transform: rotate(" + escape(image.rotation, true) + "deg) scale(" + escape(image.scale, true) + "); transform-origin: 50% 50%; cursor: " + escape("grab", true) + "; z-index: " + escape(1, true) + "; will-change: transform;"}"><div class="bg-white p-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"><img src="${escape(assets, true) + "/img/" + escape(imageFiles[i], true)}" alt="${"Scrapbook memory " + escape(i + 1, true)}" class="w-64 h-auto object-contain pointer-events-none block" loading="lazy" draggable="false"></div>
    </div>`;
  })}
</div>`;
});
export {
  Page as default
};
