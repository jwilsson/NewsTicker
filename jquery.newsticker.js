/**
 * jQuery NewsTicker 1.0.1
 * http://www.jonathanwilsson.com/projects/jquery-newsticker/
 *
 * Copyright 2010 Jonathan Wilsson
 *
 * Original code by Nicolas Gutierrez
 * http://www.yourinspirationweb.com/en/jquery-how-to-create-a-news-ticker-with-just-a-few-javascript-lines/
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
	$.NewsTicker = function (elem, options) {
		var base = this, $elem = $(elem), id = '#' + $elem.attr('id'), ticker_height = $elem.height();

		base.options = $.extend({}, $.NewsTicker.defaultOptions, options);

		setInterval(function () {
			$(id + ' li:first').animate( {marginTop: ticker_height}, 800, function () {
				$(this).detach().appendTo(id).removeAttr('style');
			});
		}, base.options.interval);
	};

	$.NewsTicker.defaultOptions = {
        interval: 5000
    };

	$.fn.NewsTicker = function (options) {
		return this.each(function () {
			new $.NewsTicker(this, options);
		});
	};

}(jQuery));