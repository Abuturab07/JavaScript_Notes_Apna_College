// Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not.
let str = "good string"
if (str[0] === "a" && str.length > 3) {
    console.log("Good string")
} else {
    console.log("Not a good string")
}

// Qs. Predict the output of following code :
let num = 12;

if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}
