// Restate the goal- print out only strings in the array that inclue "ing"
// Data types - array of strings
// Clarifying questions– Am I running a loop here to evaluate all elements in the array and checking ""if" they include certain characters? Thus, do I need an if statement? What methods do I need to know? 
//  Break it down – Create a variable with an array of strings, use a for statement to create a loop that runs an array of strings, use an if statement evaluating the positions of the array to check if the string includes "ing" while embedding the .includes method to test 
// Research – identified .includes strings method in order to evaluate whether the string includes "ing" in its characters
// Start coding- 

var activities = ["biking", "surfing", "jogging", "chess", "backgammon"];

for (var i =0; i<activities.length; i++) {
    if (activities[i].includes("ing")) {
        console.log(activities[i])
    }
}

// Stuck?- good to go!
// Re-factor–  good to go!