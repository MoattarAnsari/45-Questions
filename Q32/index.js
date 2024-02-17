// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// let current_users: string[] = ["john", "alice", "bob", "eve", "charlie"];
// let new_users: string[] = ["sam", "Alice", "JOHN", "MIKE", "bob"];
// // Convert current_users to lowercase for case-insensitive comparison
// let current_users_lower: string[] = current_users.map(user => user.toLowerCase());
// // Loop through the new_users list to check for unique usernames
// for (let user of new_users) {
//     if (current_users_lower.includes(user.toLowerCase())) {
//         console.log(`The username '${user}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`The username '${user}' is available.`);
//     }
// }
var currentUsers = ["Alice", "Bob", "Charlie", "David", "Eve"];
var newUsers = ["Bob", "Frank", "John", "Mallory", "Alice"];
function isUsernameTaken(username) {
    return currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (isUsernameTaken(newUser)) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
}
