function isCookieEnabled(callback) {
	chrome.cookies.get({ name: name, url: url }, callback);
}

function toggle() {
	isCookieEnabled(
		function (isEnabled) {
			if (isEnabled) {
				chrome.cookies.remove({ name: name, url: url }, updateIcon);
			} else {
				chrome.cookies.set({ name: name, url: url, value: "1" }, updateIcon);
			}
		}
	);
}

function updateIcon() {
	isCookieEnabled(
		function (isEnabled) {
			var icon = isEnabled ? "icon-16.png" : "icon-16-disabled.png";
			chrome.browserAction.setIcon({ path: icon });
		}
	);
}

var name = "ytprEnabled";
var url = "https://www.youtube.com";
chrome.browserAction.onClicked.addListener(toggle);
updateIcon();
