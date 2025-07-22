import { c as create_ssr_component, b as add_attribute } from "../../chunks/index2.js";
import "vanilla-tilt-svelte";
const app = "";
const prism = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let waveSrc = "wave.png";
  return `<img src="wave2.png" alt="" style="display:none">

<div class="flex flex-col min-h-screen w-full items-center justify-center overflow-x-hidden">
  <nav class="fixed top-6 mx-auto z-50 bg-glassomorphism rounded-2xl shadow-xl px-8 py-3 flex items-center gap-6 max-w-2xl md:w-2/3"><div class="flex w-full items-center justify-between text-[#deeedf] cursor-pointer text-shadow-xl/20"><a href="/" class="font-mastery text-sm font-thin tracking-wide flex-shrink-0 saturate-[.45] -ml-4"><img${add_attribute("src", waveSrc, 0)} class="h-8" alt="haha emoji"></a>
      <div class="flex gap-6 overflow-x-auto whitespace-nowrap pl-5 font-mastery text-sm font-thin underline"><a href="/" class="flex-shrink-0">hobo</a>
        <a href="https://a0.ax/" class="flex-shrink-0 ">projects</a>
        </div></div></nav>
  <div class="overflow-x-hidden">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
