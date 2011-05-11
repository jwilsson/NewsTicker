/**
 * jQuery NewsTicker 1.1
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
	
        var vars = { // Internal vars. Please don't touch
	    id: "",
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
	function tick () {
	    vars.timeout = setTimeout(function () {
		$(vars.id + " li:first").animate({marginTop: vars.height}, defaults.speed, function () {
		    $(this).detach().appendTo(vars.id).removeAttr("style");
		});
				
		tick();
	    }, defaults.interval);
	}
	
	return this.each(function () {

	    var $this = $(this);
	    
	    $this.css("overflow", "hidden");
	    
	    vars.id = "#" + $this.attr("id");
	    vars.height = $this.height()
	    
	    tick();
	    
	    if (defaults.pauseOnHover) {
		$this.bind("mouseover", function () {
		   clearTimeout(vars.timeout); 
		}).bind("mouseout", function () {
		    tick();
		});
	    }
	});
	    
    };

}(jQuery));