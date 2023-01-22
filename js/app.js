function $(id) {
	let el = "string" == typeof id ? document.getElementById(id) : id;

	el.on = function (event, fn) {
		if ("content loaded" == event) {
			event = window.attachEvent ? "load" : "DOMContentLoaded";
		}
		el.addEventListener
			? el.addEventListener(event, fn, false)
			: el.attachEvent("on" + event, fn);
	};

	el.all = function (selector) {
		return $(el.querySelectorAll(selector));
	};

	el.each = function (fn) {
		for (let i = 0, len = el.length; i < len; i++) {
			fn($(el[i]), i);
		}
	};

	el.getClasses = function () {
		return this.getAttribute("class").split(/\s+/);
	};

	el.addClass = function (name) {
		let classes = this.getAttribute("class");
		el.setAttribute("class", classes ? classes + " " + name : name);
	};

	el.removeClass = function (name) {
		let classes = this.getClasses().filter(function (curr) {
			return curr != name;
		});
		this.setAttribute("class", classes.join(" "));
	};

	return el;
}

function search() {
	let str = $("search").value.toLowerCase();
	let links = $("files").all("a");

	links.each(function (link) {
		let text = link.textContent.toLowerCase();

		if (".." == text) return;
		if (str.length && ~text.indexOf(str)) {
			link.addClass("highlight");
		} else {
			link.removeClass("highlight");
		}
	});
}
$(window).on("content loaded", function () {
	$("search").on("keyup", search);
});
