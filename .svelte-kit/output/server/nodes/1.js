

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8b0faec3.js","_app/immutable/chunks/index.97c0832a.js","_app/immutable/chunks/singletons.063ef672.js","_app/immutable/chunks/paths.8259f57f.js"];
export const stylesheets = [];
export const fonts = [];
