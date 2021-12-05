(function () {
	function refresh() {
		var cutOffTime = 1;
		var delayInterval = 5000;
		var updateInterval = cutOffTime * 1000 * 0.5;
		var video = document.querySelector("video");

		if (video) {
			let timeLeft = video.duration - video.currentTime;
			if (timeLeft < cutOffTime) {
				if (document.cookie.indexOf("ytprEnabled=1;") !== -1) {
					let char = "P";
					let keyCode = char.charCodeAt(0);
					let settings = { bubbles: true, cancelable: true, char: char, key: char, keyCode: keyCode, shiftKey: true };
					let keyEvent = new KeyboardEvent("keydown", settings);
					delete keyEvent.keyCode;
					Object.defineProperty(keyEvent, "keyCode", { "value": keyCode });
					video.dispatchEvent(keyEvent);
				}

				setTimeout(refresh, delayInterval);
			} else {
				setTimeout(refresh, updateInterval);
			}
		} else {
			setTimeout(refresh, delayInterval);
		}
	}

	refresh();
})();
