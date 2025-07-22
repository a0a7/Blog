import * as universal from '../entries/pages/post/_slug_/_page.js';
import * as server from '../entries/pages/post/_slug_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/post/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/post/[slug]/+page.js";
export { server };
export const server_id = "src/routes/post/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.dc0203f2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.2b17dbc7.js","_app/immutable/chunks/SSVT.11e5a3ed.js","_app/immutable/chunks/singletons.6d0dec90.js","_app/immutable/chunks/paths.15660d0a.js"];
export const stylesheets = ["_app/immutable/assets/4.2df468f2.css"];
export const fonts = [];
