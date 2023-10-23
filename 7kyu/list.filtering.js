// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// My solution below;

function filter_list(l) {
    let filteredList = [];
    for (let i = 0; i <l.length; i++) {
      if (typeof l[i] !== 'string') {
        filteredList.push(l[i]);
      }
    } return filteredList
  }