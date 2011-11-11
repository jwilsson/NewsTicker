// jQuery NewsTicker 1.2 | Copyright 2011 Jonathan Wilsson
(function ($) {
	var Newsticker = function (elem, options) {
		var $ticker = $(elem),
			$items = $ticker.children(),
			numItems = $items.length,
			height = $ticker.height(),
			next = 0,
			itemPos = 1,
			$inner,
			timer = null,
			defaults = {
				direction: "down",
				interval: 5000,
				pauseOnHover: true,
				speed: 400
			};

		// The main animation function
		function tick() {
			timer = setTimeout(function () {
				if (defaults.direction === "up") {
					next = itemPos - 1;
				} else {
					next = itemPos + 1;
				}

				$inner.stop().animate({"top": -next * height}, defaults.speed, function () {
					if (next === 0) {
						itemPos = numItems - 2;
						$inner.css("top", -itemPos * height);
					} else if (next === numItems - 1) {
						itemPos = 1;
						$inner.css("top", -height);
					} else {
						itemPos = next;
					}
				});

				tick();
			}, defaults.interval);
		}

		// If the user has supplied options let's merge them with the defaults
		if (options) {
			$.extend(defaults, options);
		}

		// Setup the items
		$items.eq(0).clone().addClass("clone").appendTo($ticker);
		$items.eq(numItems - 1).clone().addClass("clone").prependTo($ticker);

		$items = $ticker.children();
		numItems = $items.length;

		$ticker.css("overflow", "hidden");

		$items.wrapAll('<div class="ticker-inner"></div>').css({
			"display": "inline",
			"float": "left",
			"height": height,
			"position": "relative"
		});

		$inner = $ticker.children(".ticker-inner").css({
			"float": "left",
			"height": numItems * height,
			"position": "relative",
			"top": -height
		});

		// Prevent scrolling when there's only one item
		if (numItems > 1) {
			tick();
		}

		// See if the user whishes to pause the autoplay on hover
		if (defaults.pauseOnHover) {
			$ticker.bind("mouseover", function () {
				clearTimeout(timer);
			}).bind("mouseout", function () {
				tick();
			});
		}
	};

	$.fn.NewsTicker = function (options) {

		return this.each(function () {
			var $ticker = $(this),
				newsticker;

			// Bail if we already have a plugin instance for this element
			if ($ticker.data("newsticker")) {
				return $ticker.data("newsticker");
			}

			// Create a new Newsticker object
			newsticker = new Newsticker(this, options);

			// Store the NewsTicker object
			$ticker.data("newsticker", newsticker);
		});
	};
}(jQuery));