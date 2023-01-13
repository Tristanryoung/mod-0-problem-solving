// Restate the goal- print out words that only begin with the letter t-- 
// Data types - array of strings
// Clarifying questions– what methods do I need to know? Do I need an if statement?
//  Break it down – create a variable with array of strings, use a for statement to create a loop that runs an array of strings, use an if statement evaluating the positions of the array to check if the string starts with the letter t. 
// Research – identified .startsWith strings method in order to evaluate first letter of each string
// Start coding- 
// Stuck?- good to go!
// Re-factor–  good to go!

var words = ["typing", "jelly", "surfing", "tennis"];

for (var i =0; i<words.length; i++) {
    if (words[i].startsWith("t")) {
        console.log(words[i])
    }
}