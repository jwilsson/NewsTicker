/**
 * jQuery NewsTicker 1.0.3
 * http://jonathanwilsson.com/projects/jquery-newsticker/
 *
 * Copyright 2011 Jonathan Wilsson
 *
 * Original code by Nicolas Gutierrez
 * http://www.yourinspirationweb.com/en/jquery-how-to-create-a-news-ticker-with-just-a-few-javascript-lines/
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

    $.fn.NewsTicker = function (options) {

	var defaults = {
	    interval: 5000
	};

	return this.each(function () {

	    var $this = $(this), id = '#' + $this.attr('id'), ticker_height = $this.height();

	    // If the user has supplied options let's merge them with the defaults
	    if (options) {
		$.extend(defaults, options);
	    }
			
	    // Change the text and the specified interval
	    function tick () {
		setTimeout(function () {
		    $(id + ' li:first').animate({marginTop: ticker_height}, 800, function () {
			$(this).detach().appendTo(id).removeAttr('style');
		    });
				
		    tick();
		}, defaults.interval);
	    }
			
	    tick();
	});
	    
    };

}(jQuery));