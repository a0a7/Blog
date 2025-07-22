

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hobo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6459475c.js","_app/immutable/chunks/index.2b17dbc7.js","_app/immutable/chunks/paths.15660d0a.js"];
export const stylesheets = ["_app/immutable/assets/3.be9cecea.css"];
export const fonts = [];
