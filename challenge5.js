// Problem Solving CFU #5
// Restate the goal- print out all destinations from an array, but also in alphabetical order
// Data types - this problem is using arrays and strings describing different destinations
// Clarifying questions– this is going to be 3 parts... how am I going to alphabetize the destinations? Do I need to create another variable for that? What method will I use to alphabetize? Do I need a for statement to evaluate every string in the array?
// Break it down – I will first create an array with destinations LA NY Tahiti and Fiji. I then need to create another variable sorting those destinations. Then, using a for statement to evaluate all elements in the array, the first run evaluates position 0 which is occupied by Fiji, as f comes first in the alphabet... and so on
// Breakdown continued- I will then need to interpolate a sentence to say something about that destination in addition to interpolating the destinations variable sorted by alphabetical order to pring out every destination accordingly
// Research – use string method .sort() when creating new variable
// Start coding- 
var destinations = ["Los Angeles", "New York", "Tahiti", "Fiji"];
var destinationsSorted = destinations.sort();

for (var i=0; i<destinations.length; i++) {
    console.log(`The next place I want to surf is  ${destinationsSorted[i]}.`)
}
// Stuck?-- go back to pseudocode and rethink what you might be missing
// Re-factor– see if you can refine code
