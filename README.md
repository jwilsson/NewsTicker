# jQuery NewsTicker 1.1.1
NewsTicker is a little plugin which allows you to create a scrolling news ticker.

http://jonathanwilsson.com/projects/jquery-newsticker/

## Features

### Options
* interval (Default 5000) int Time in milliseconds before next item is shown
* speed (Default 800) int Animation time in milliseconds
* pauseOnHover (Default true) true/false Whether to pause the scrolling on hover

Requires at least jQuery 1.5.

## License
Free to use and abuse under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

## Acknowledgements
Orginal code by [Nicolas Gutierrez](http://www.yourinspirationweb.com/en/jquery-how-to-create-a-news-ticker-with-just-a-few-javascript-lines/).

## Changelog
### 1.1.1
* Fixed a bug where the ticker would run even if there's only one item
* Removed the ID dependency. You're now free to use any selector (with or without a ID)

### 1.1
* Improved accessibility when JavaScript is disabled
* Added option to control the speed of the animation
* Added option to pause the ticker on hover
* Code improvements

### 1.0.3
* Changed setInterval to setTimeout

### 1.0.2
* Rewrote bits of the code to perform better

### 1.0.1
* Added a option for the interval
* Removed the hardcoding of marginTop when sliding. It now pulls the value from the height of the ticker.

### 1.0
* Initial release

## Copyright
Copyright 2011 Jonathan Wilsson