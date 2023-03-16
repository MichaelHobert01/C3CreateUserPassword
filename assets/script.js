var checkbox = document.querySelector("#checkbox")
var genpas = document.querySelector("#genpas")
var passwordgenbutton = document.querySelector("passwordgenbutton")
var generate = document.getElementById("generate")
var p2 = document.getElementById("password")


var Password = '';

var charsLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsBothCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charsLowerNumCase = "abcdefghijklmnopqrtuvwxyz0123456789";
var charsUpperNumCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var charsLowerUpperNumCase = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charsNum = "0123456789";
var charsSpecial = "!@#$%^&*";
var charsNumSpecial = "0123456789!@#$%^&*";
var charsLowerCaseSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
var charsUpperCaseSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
var charsLowerCaseNumSpecial = "0123456789!@#$%^&*abcdefghijklmnopqrstuvwxyz";
var charsAllCase = "0123456789!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var charsUpperCaseNumSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*0123456789";
var password = "";

// these are the prompts for input

var criteria = window.prompt("Please enter your password criteria: lowercase, uppercase, bothcase, allcase, numcase, specialcase, lowernumbercase, uppernumbercase, ");

var length = window.prompt("What is the length?");

// generatePassword function  
function generatePassword(criteria, length) {
    // if statement to determine criteria
    if (criteria.toLowerCase() === "lowercase") {
      charset = charsLowerCase;
    } else if (criteria.toLowerCase() === "uppercase") {
      charset = charsUpperCase;
    } else if (criteria.toLowerCase() === "bothcase") {
      charset = charsBothCase;
    } else if (criteria.toLowerCase() === "allcase") {
      charset = charsAllCase;
    } else if (criteria.toLowerCase() === "numcase") {
      charset = charsNum;
    } else if (criteria.toLowerCase() === "specialcase") {
      charset = charsSpecial;
    } else if (criteria.toLowerCase() === "lowernumbercase") {
      charset = charsLowerNumCase;
    } else if (criteria.toLowerCase() === "uppernumbercase") {
      charset = charsUpperNumCase;
    } else {
      console.error();
    }
  
    // if statement to determine whether length will suffice
    if (length >= 8 && length <= 64) {
      // actual function
      for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return password;
    }
  }



generate.addEventListener("click", function () {
    p2.innerText = generatePassword(criteria, length);
  });

