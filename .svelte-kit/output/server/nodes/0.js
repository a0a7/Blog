import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.94562b00.js","_app/immutable/chunks/index.2b17dbc7.js","_app/immutable/chunks/paths.15660d0a.js","_app/immutable/chunks/SSVT.11e5a3ed.js"];
export const stylesheets = ["_app/immutable/assets/0.1a60053e.css"];
export const fonts = [];
