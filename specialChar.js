//  array
var specialChar = ["H@llo1234", "#ibro", "Test1234", "Someone", "#S@monline"];

for (let index = 0; index < specialChar.length; index++) {
  const element = specialChar[index];
  var specialChar1 = element.indexOf("@");
  var specialChar2 = element.indexOf("#");
  if (specialChar1 !== -1 || specialChar2 !== -1) {
    console.log("Your password is strong");
  } else {
    console.log("Your password isn't strong enough");
  }
}
/*
function isValid(str) {
    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    for (var i = 0; i < str.length; i++) {
       if (iChars.indexOf(str.charAt(i)) != -1) {
           alert ("File name has special characters ~`!#$%^&*+=-[]\\\';,/{}|\":<>? \nThese are not allowed\n");
           return false;
       }
    }
    return true;
}
*/