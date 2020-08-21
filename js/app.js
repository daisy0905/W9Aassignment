var age = [14, 17, 18, 20, 24, 30];
var is_subscribed= [false, true, true, false, false, true];
var arrayLength = age.length;

for(var counter = 0; counter < age.length; counter++) {
    if(age[counter] < 18 && !is_subscribed[counter]) {
        console.log("No." + [counter+1])
        console.log("age:" + age[counter]);
        console.log("subscription status:" + is_subscribed[counter]);
        console.log("The user is younger than 18 and is not subscribed");
    } else if(age[counter] >= 18 && !is_subscribed[counter]) {
        console.log("No." + [counter+1])
        console.log("age:" + age[counter]);
        console.log("subscription status:" + is_subscribed[counter]);
        console.log("The user is 18 and older and is not subscribed");
    } else if(age[counter] < 18 && is_subscribed[counter]) {
        console.log("No." + [counter+1])
        console.log("age:" + age[counter]);
        console.log("subscription status:" + is_subscribed[counter]);
        console.log("The user is younger than 18 and is subscribed");
    } else if(age[counter] >= 18 && is_subscribed[counter]) {
        console.log("No." + [counter+1])
        console.log("age:" + age[counter]);
        console.log("subscription status:" + is_subscribed[counter]);
        console.log("The user is 18 and older and is subscribed");
    } else {
        console.log("Error!");
    }
}
