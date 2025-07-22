import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.18f3fbf8.js","_app/immutable/chunks/index.97c0832a.js","_app/immutable/chunks/paths.9a1bafbb.js"];
export const stylesheets = ["_app/immutable/assets/0.e657eed6.css"];
export const fonts = [];
