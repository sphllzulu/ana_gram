//the objective is to firstly iterate through each character in the provided string
//2nd objective is to ensure that the 2 strings are indeed an anagram

function makeAnagram(str1, str2) {
  var obj = {};

  for (var i = 0; i < str1.length; i++) {
    var character = str1[i]; //assign the character at a certain index to the variable 'character'
    //checks if the character in a certain index already exists in the object 'obj', if it does then it is incremented by 1
    if (obj[character[i]]) {
      obj[character[i]]++;
    } else {
      //if the character in the specified index does not exist then the frequency in which the character appears will be =1
      obj[character[i]] = 1;
    }
  }

  for (var i = 0; i < str2.length; i++) {
    var character = str2[i];
    //again checks if the
    if (obj[character[i]]) {
      obj[character[i]]--;
    }
  }

  return obj;
}

console.log(makeAnagram("cde", "dcf"));
console.log(makeAnagram("cde", "abc"));
