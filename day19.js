// Activity 1 Basic Regular Expressions

//Task1 Write a regular expression to match a single pattern (eg. match all occuerences of the word "Javascript" in a string).Log the matches.
const text="Javascript is a popular programming language.Many developers love Javascript.";
const pattern = /Javascript/g;
const matches=text.match(pattern);
console.log(matches);
// [ 'Javascript', 'Javascript' ]

//Task2 Write a regular expression to match all digits in a string. Log the matches.

const s="Hello Hi 98 Good 10 Morning";
const pattern2=/\d+/g;
const matches2=s.match(pattern2);
console.log(matches2);
// [ '98', '10' ]

// Activity 2 Character classes and Quantifiers

//Task3 Write a regular expression to match all in a string that start with a capital letter. log the matches.
const ss="Hello hi 98 good 10 Morning";
const pattern3=/[A-Z][a-z]*/g;
const matches3=ss.match(pattern3);
console.log(matches3);
//[ 'Hello', 'Morning' ]

//Task4 Write a regular expression to match all sequences of one or more digits. log the matches.
const sss="Hello hi 98 good 10 Morning";
const pattern4=/[0-9]+/g;
const matches4=sss.match(pattern4);
console.log(matches4);
// [ '98', '10' ]

// Activity 3 Grouping and Capturing

//Task5 Write a regular expression to capture the area code, central office code, and line number from a US phone number format (eg (123)456-7890). Log the captures.

const phone="(123)456-7890";
const pattern5=/\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})/;
const matches5=phone.match(pattern5);
console.log("Area code",matches5[1]);
console.log("Central Office code",matches5[2]);
console.log("Line number",matches5[3]);
// Area code 123
// Central Office code 456
// Line number 7890

//Task6 Write a regular expression to capture the username and domain from an email address. Log the captures.
const email="123@nitkkr.ac.in";
const pattern6=/([0-9]{3})(@)(nitkkr)(\.)(ac)(\.)(in)/;
const matches6=email.match(pattern6);
console.log("Username",matches6[1]);
console.log("Domain",matches6[3]+matches6[4]+matches6[5]+matches6[6]+matches6[7]);
// Username 123
// Domain nitkkr.ac.in

// Activity 4 Assertions and Boundaries

//Task7 Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const text2="Many developers love Javascript.";
const pattern7 = /^Javascript/;
const matches7=text2.match(pattern7);
console.log(matches7);
// null

//Task8 Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text3="Many developers love.";
const pattern8 = /Javascript\.$/;
const matches8=text3.match(pattern8);
console.log(text2.match(pattern8));
console.log(matches8);
// [
//     'Javascript.',
//     index: 21,
//     input: 'Many developers love Javascript.',
//     groups: undefined
//   ]
//   null

// Activity 5 Practical Applications

//Task9 Write a regular expression to validate a simple password(must include at least one uppercase letter, one lowercase letter, one digit and one special character). Log whether the password is valid.

function validatePassword(password) {
    const hasUppercase=/[A-Z]/.test(password);
    const hasLowercase=/[a-z]/.test(password);
    const hasDigit=/\d/.test(password);
    const hasSpecialChar=/[!@#$%^&*]/.test(password);

    if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) 
    {
        console.log("Password is valid.");
    } 
    else 
    {
        console.log("Password is invalid.");
    }
}

validatePassword("Password1!");
validatePassword("pass");
// Password is valid.
// Password is invalid.

//Task10 Write a regular expression to validate a URL. Log whether the url is valid or not.
const urlvalid=/^(https:\/\/)([a-zA-Z0-9-]+\.)/;

function validateURL(url) {
    if (urlvalid.test(url)) 
    {
        console.log("URL is valid.");
    } else 
    {
        console.log("URL is invalid.");
    }
}

validateURL("https://www.example.com");
validateURL("ftp://example.com");

// URL is valid.
// URL is invalid.