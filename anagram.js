function makeAnagram(str1, str2) {
  var obj = {};

 //this will display the number of times each character appears for str1
  for (var i = 0; i < str1.length; i++) {
    var character = str1[i];
    if (obj[character]) {
      obj[character]++;
    } else {
      obj[character] = 1;
    }
  }

 //this will display the number of times each character appears
  for (var i = 0; i < str2.length; i++) {
    var character = str2[i];
    if (obj[character]) {
      obj[character]++;
    } else {
      obj[character] = 1;
    }
  }

  return obj;
}

console.log(makeAnagram("cde", "dcf"));
console.log(makeAnagram("cde", "abc")); 


