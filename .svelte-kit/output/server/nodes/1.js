

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.774ec175.js","_app/immutable/chunks/index.2b17dbc7.js","_app/immutable/chunks/singletons.6d0dec90.js","_app/immutable/chunks/paths.15660d0a.js"];
export const stylesheets = [];
export const fonts = [];
