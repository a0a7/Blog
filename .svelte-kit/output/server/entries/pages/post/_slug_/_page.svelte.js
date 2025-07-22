import { c as create_ssr_component, v as validate_component, f as each, b as add_attribute, e as escape, h as spread, i as escape_object, j as is_void, m as missing_component } from "../../../../chunks/index2.js";
import { g as github, w as website, n as name, a as avatar, b as bio } from "../../../../chunks/info.js";
import "vanilla-tilt-svelte";
import { format, parseISO } from "date-fns";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-glassomorphism md:w-[30rem] flex-1 p-4 overflow-x-visible transition-transform border-2 border-dotted border-gray-300"><h2 class="text-l md:text-xl font-bold text-fuchsia-50 font-varela">${slots.title ? slots.title({}) : ``}</h2>
  <p class="text-sm text-fuchsia-50 font-varela opacity-85">${slots.date ? slots.date({}) : ``}</p></div>`;
});
const ToC_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".heading.svelte-cefzj6{padding-left:calc(var(--depth, 0) * 0.35rem)}.active.svelte-cefzj6{margin-left:-2px;border-left-width:2px;font-weight:500;--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity, 1))}.dark .active.svelte-cefzj6{--tw-text-opacity:1;color:rgb(241 245 249 / var(--tw-text-opacity, 1))}",
  map: null
};
const ToC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let headings = post.headings;
  let activeHeading = headings[0];
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `

${validate_component(Card, "Card").$$render($$result, {}, {}, {
    description: () => {
      return `${slots.default ? slots.default({ slot: "description" }) : `
    <ul class="flex flex-col gap-2">${each(headings, (heading) => {
        return `<li class="${[
          "pl-2 transition-colors border-teal-500 heading text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 svelte-cefzj6",
          activeHeading === heading ? "active" : ""
        ].join(" ").trim()}"${add_attribute(
          "style",
          `--depth: ${// consider h1 and h2 at the same depth, as h1 will only be used for page title
          Math.max(0, heading.depth - 1)}`,
          0
        )}><a${add_attribute("href", `#${heading.id}`, 0)}>${escape(heading.value)}</a>
        </li>`;
      })}</ul>
  `}`;
    }
  })}`;
});
const ArrowLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 20 20" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>`;
});
const SocialLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}

${``}

${`<a${add_attribute("href", `https://github.com/${github}`, 0)} class="group" aria-label="Follow on GitHub"><svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fillrule="evenodd" cliprule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg></a>`}

${``}`;
});
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const PostDate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { decorate } = $$props;
  let { post } = $$props;
  let { collapsed = false } = $$props;
  let { class: _class } = $$props;
  if ($$props.decorate === void 0 && $$bindings.decorate && decorate !== void 0)
    $$bindings.decorate(decorate);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  return `<div class="${[
    escape(
      [
        "relative z-10 order-first mb-3 flex text-zinc-500 dark:text-zinc-400",
        _class
      ].join(" "),
      true
    ),
    decorate ? "pl-3.5" : ""
  ].join(" ").trim()}">${decorate ? `<span class="absolute inset-y-0 left-0 flex items-center py-1" aria-hidden="true"><span class="h-full w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>` : ``}
  <div class="${["flex", !collapsed ? "flex-col" : ""].join(" ").trim()}"><time${add_attribute("datetime", post.date, 0)}>${escape(format(new Date(parseISO(post.date)), "MMMM d, yyyy"))}</time>
    ${collapsed ? `<span class="mx-1">•</span>` : ``}
    <span>${escape(post.readingTime)}</span></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".root.svelte-1eui11k{display:grid;grid-template-columns:1fr}@media(min-width: 1024px){.root.svelte-1eui11k{grid-template-columns:1fr 42rem 1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(data.post.title)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;
  const url = `${website}/${data.post.slug}`;
  let canGoBack = false;
  afterNavigate(({ from }) => {
    if (from && from.url.pathname.startsWith("/posts")) {
      canGoBack = true;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-7wmra1_START -->${$$result.title = `<title>${escape(data.post.title)} - ${escape(name)}</title>`, ""}<meta name="description"${add_attribute("content", data.post.preview.text, 0)}><meta name="author"${add_attribute("content", name, 0)}><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:type" content="website"><meta property="og:title"${add_attribute("content", data.post.title, 0)}><meta property="og:description"${add_attribute("content", data.post.preview.text, 0)}><meta property="og:image"${add_attribute("content", ogImage, 0)}><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${add_attribute("content", website, 0)}><meta property="twitter:url"${add_attribute("content", url, 0)}><meta name="twitter:title"${add_attribute("content", data.post.title, 0)}><meta name="twitter:description"${add_attribute("content", data.post.preview.text, 0)}><meta name="twitter:image"${add_attribute("content", ogImage, 0)}><!-- HEAD_svelte-7wmra1_END -->`, ""}

<div class="root max-w-2xl mx-auto lg:max-w-none svelte-1eui11k"><div class="hidden lg:block pt-8"><div class="sticky top-0 w-full flex justify-end pt-11 pr-8">${((tag) => {
    return tag ? `<${canGoBack ? "button" : "a"} class="items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"${add_attribute("href", canGoBack ? void 0 : "/posts", 0)} aria-label="Go back to posts">${is_void(tag) ? "" : `${validate_component(ArrowLeftIcon, "ArrowLeftIcon").$$render(
      $$result,
      {
        class: "w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
      },
      {},
      {}
    )}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(canGoBack ? "button" : "a")}</div></div>

  <div class="w-full mx-auto overflow-x-hidden"><article><header class="flex flex-col"><h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">${escape(data.post.title)}</h1>
        ${validate_component(PostDate, "PostDate").$$render(
    $$result,
    {
      class: "text-sm sm:text-base",
      post: data.post,
      decorate: true,
      collapsed: true
    },
    {},
    {}
  )}</header>

      
      <div class="prose dark:prose-invert ">${validate_component(data.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article>

    
    <hr>
    <div class="py-8"><div class="grid gap-8"><div class="flex justify-center order-1 col-span-2 gap-6 md:order-2">${validate_component(SocialLinks, "SocialLinks").$$render($$result, {}, {}, {})}</div>
        <div class="flex justify-center order-2 md:order-1 md:col-span-2"><a href="/" class="inline-block rounded-full"><img${add_attribute("src", avatar, 0)}${add_attribute("alt", name, 0)} class="w-24 h-24 mx-auto rounded-full md:w-28 md:h-28 ring-2 ring-zinc-200 dark:ring-zinc-700"></a></div>
        <p class="order-3 text-base text-zinc-600 dark:text-zinc-400">${escape(bio)}</p></div></div></div>

  
  <div class="hidden xl:block pt-10"><aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">${validate_component(ToC, "ToC").$$render($$result, { post: data.post }, {}, {})}</aside></div>
</div>`;
});
export {
  Page as default
};
