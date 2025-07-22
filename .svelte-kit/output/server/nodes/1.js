

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3214b34e.js","_app/immutable/chunks/index.97c0832a.js","_app/immutable/chunks/singletons.c9d6a475.js","_app/immutable/chunks/paths.9a1bafbb.js"];
export const stylesheets = [];
export const fonts = [];
