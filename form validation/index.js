const str = "uday solanki";
function countLetters(str) {
  const counts = {}; 
  for (let char of str) {
    char = char.toLowerCase();
    if (char.match(/[a-z]/)) { 
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  return counts; 
}

 

console.log(countLetters("BHARAT"));
