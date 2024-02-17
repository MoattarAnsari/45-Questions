//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList: string[] = ["Madiha", "Komal", "Tasbiha"];

console.log(`Dear ${guestList[0]}, you are invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);

let unableToAttend = guestList[1];
console.log(`${unableToAttend} can't make it to the dinner.`);

guestList[1] = "Khazina";

console.log(`Dear ${guestList[0]}, you are invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);
