/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  let arrayLength = box.length;
  let thereIsPresent = false;
  let presentCounter = 0

  let firstLine = box[0];
  let lastLine = box[arrayLength - 1];

  // There is any present in the array?
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < box[i].length; j++) {
      if (box[i].charAt(j) === "*") {
        thereIsPresent = true
        presentCounter++
      }
    }
  }

  // If there's not any present, exit with false
  if(!thereIsPresent || presentCounter !== 1){
    return false
  }

  // Is 1st line correct?
  for (let i = 0; i < firstLine.length; i++) {
    if (firstLine.charAt(i) !== "#") {
      return false;
    }
  }

  // Is last line correct?
  for (let i = 0; i < lastLine.length; i++) {
    if (lastLine.charAt(i) !== "#") {
      return false;
    }
  }

  // Are inside lines ok? (1st and last char are '#')
  for(let i = 1; i < arrayLength-1; i++){
    //console.log("Comprobando linea: "+box[i])
    if(box[i].charAt(0) !== '#' || box[i].charAt(box[i].length-1) !== '#'){
      return false
    }
  }

  return true;
}

const test1 = [
  "###", 
  "#*#", 
  "###"
] //-> true

const test2 = [
  "#####", 
  "#   #", 
  "#  #*", 
  "#####"
] // -> false

const test3 = [
  "#####", 
  "#   #", 
  "#   #", 
  "*#  #", 
  "#####" 
] // -> false

console.log(inBox(test1))
console.log(inBox(test2))
console.log(inBox(test3))
