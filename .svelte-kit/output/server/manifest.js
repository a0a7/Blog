export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["elk.jpg","favicon.ico","font/AffiliateMasteryItalic.otf","font/AffiliateMasteryRegular.otf","font/michael.otf","font/VarelaRound.ttf","img/bild.png","img/floor.jpg","img/helmet.png","img/interstate.JPEG","img/jeff.jpg","img/mic.jpg","img/pump.jpg","img/snow.jpg","img/stcloud.JPEG","img/wob.JPEG","krabs.mp3","robots.txt","wave.png","wave2.png","waving-hand.png"]),
	mimeTypes: {".jpg":"image/jpeg",".otf":"font/otf",".ttf":"font/ttf",".png":"image/png",".JPEG":"image/jpeg",".mp3":"audio/mpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3ad35857.js","app":"_app/immutable/entry/app.8abbfbe4.js","imports":["_app/immutable/entry/start.3ad35857.js","_app/immutable/chunks/index.2b17dbc7.js","_app/immutable/chunks/singletons.6d0dec90.js","_app/immutable/chunks/paths.15660d0a.js","_app/immutable/entry/app.8abbfbe4.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.2b17dbc7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
