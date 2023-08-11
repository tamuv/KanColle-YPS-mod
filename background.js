// "service worker (無効)" の回避策として try/catch で囲む.
// @see https://github.com/furyutei/twMediaDownloader/issues/89#issuecomment-1261621380
// @see https://groups.google.com/a/chromium.org/g/chromium-extensions/c/lLb3EJzjw0o
chrome.runtime.onMessage.addListener(function (req) {
	chrome.tabs.query({url:[
		'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/',
		'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854'
		]}, function (tab) {
		try {
			chrome.tabs.sendMessage(tab[0].id, req);
		} catch (e) {
			console.error('YPS background: ' + e);
		}
	});
});
