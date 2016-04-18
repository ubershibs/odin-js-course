#Where's Waldo

Complete as part of the Odin Project's course on JavaScript and jQuery. The goal of the assignment was to integrate a JS front-end with a Rails backend. More details on [their site](http://www.theodinproject.com/javascript-and-jquery/where-s-waldo-a-photo-tagging-app).

What the app does:
- Loads the user's selected puzzle image, as well as a list of characters contained in the image.
- On click, pops ups a list of characters who have yet to be found, using jQuery.
- Sends an AJAX call to Rails to verify whether or not the coordinates are valid for that character.
- If they are, the character is crossed off the Find list.
- Once the last character is crossed off, the use is notified of the time it took to solve the puzzle.
- If that time was faster than any other previous time, the user is asked to leave their name, for the High Score.

You can play in your browser [here](https://damp-plateau-96949.herokuapp.com)
