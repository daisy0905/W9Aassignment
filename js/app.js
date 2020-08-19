var age = 18;
var is_subscribed = true;

if(age < 18 && !is_subscribed) {
    console.log("The user is younger than 18 and is not subscribed");
} else if(age >= 18 && !is_subscribed) {
    console.log("The user is 18 and older and is not subscribed");
} else if(age < 18 && is_subscribed) {
    console.log("The user is younger than 18 and is subscribed");
} else if(age >= 18 && is_subscribed) {
    console.log("The user is 18 and older and is subscribed");
} else {
    console.log("Error!");
}