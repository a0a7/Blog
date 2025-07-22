import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.39eaf5a1.js","_app/immutable/chunks/index.97c0832a.js","_app/immutable/chunks/paths.8259f57f.js"];
export const stylesheets = ["_app/immutable/assets/0.e657eed6.css"];
export const fonts = [];
