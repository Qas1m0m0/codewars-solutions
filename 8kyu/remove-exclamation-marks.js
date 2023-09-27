//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My solution below;

function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
  }
  
  console.log(removeExclamationMarks("Hello World!"))