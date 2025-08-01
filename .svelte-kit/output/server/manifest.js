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
		client: {"start":"_app/immutable/entry/start.98ab16ee.js","app":"_app/immutable/entry/app.b05115c9.js","imports":["_app/immutable/entry/start.98ab16ee.js","_app/immutable/chunks/index.97c0832a.js","_app/immutable/chunks/singletons.063ef672.js","_app/immutable/chunks/paths.8259f57f.js","_app/immutable/entry/app.b05115c9.js","_app/immutable/chunks/index.97c0832a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
