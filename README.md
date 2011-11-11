# jQuery NewsTicker 1.2
NewsTicker is a little plugin which allows you to create a scrolling news ticker.

http://jonathanwilsson.com/projects/jquery-newsticker/

## Features
* Scroll the content up- or downwards.
* Multiple tickers on one page.
* Small, 591 bytes minified and gzipped.

### Options
* direction (Deafult "down") string The direction to scroll in.
* interval (Default 5000) int Time in milliseconds before next item is shown.
* pauseOnHover (Default true) boolean Whether to pause the scrolling on hover.
* speed (Default 800) int Animation time in milliseconds. Setting this option to 0 will disable animation.

Minimum required jQuery version is 1.4.

## License
Free to use and abuse under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

## Changelog
### 1.2
* Rewrote the whole script.
* Added the "direction" option to control the slide direction.
* Added support for multiple tickers on one page.
* Stripped down the Copyright notice in the JavaScript file.

### 1.1.1
* Fixed a bug where the ticker would run even if there's only one item.
* Removed the ID dependency. You're now free to use any selector (with or without an ID).

### 1.1
* Improved accessibility when JavaScript is disabled.
* Added option to control the speed of the animation.
* Added option to pause the ticker on hover.
* Code improvements.

### 1.0.3
* Changed setInterval to setTimeout.

### 1.0.2
* Rewrote bits of the code to perform better.

### 1.0.1
* Added a option for the interval.
* Removed the hardcoding of marginTop when sliding. It now pulls the value from the height of the ticker.

### 1.0
* Initial release.

## Copyright
Copyright 2011 Jonathan Wilsson