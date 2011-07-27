/**
 * jQuery NewsTicker 1.1.1
 * http://jonathanwilsson.com/projects/jquery-newsticker/
 *
 * Copyright 2011 Jonathan Wilsson
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

    $.fn.NewsTicker = function (options) {
	
        var vars = { // Internal vars. Please don't touch
	    height: 0,
	    timeout: null
	},
	defaults = {
	    interval: 5000,
	    speed: 800,
	    pauseOnHover: true
	};
	
	// If the user has supplied options let's merge them with the defaults
	if (options) {
	    $.extend(defaults, options);
	}
	
	// Change the text and the specified interval
	function tick (elem) {
	    vars.timeout = setTimeout(function () {
		$(elem).find("li:first").animate({marginTop: vars.height}, defaults.speed, function () {
		    $(this).detach().appendTo(elem).removeAttr("style");
		});
				
		tick(elem);
	    }, defaults.interval);
	}
	
	return this.each(function () {

	    var $this = $(this),
		items = $this.children().length;
	    
	    $this.css("overflow", "hidden");
	    
	    vars.height = $this.height();
	    
	    // Prevent scrolling when there's only one item
	    if (items > 1) {
		tick($this);
	    }
	    
	    if (defaults.pauseOnHover) {
		$this.bind("mouseover", function () {
		   clearTimeout(vars.timeout); 
		}).bind("mouseout", function () {
		    if (items > 1) {
			tick($this);
		    }
		});
	    }
	});
	    
    };

}(jQuery));