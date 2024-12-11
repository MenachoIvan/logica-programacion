/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = ""
    const width = 2 * height - 1

    //Triangulo
    for(let i = 1; i <= height; i++){
      const spaces = "_".repeat(height-i)
      const decoration = ornament.repeat(2*i-1)
      tree += spaces + decoration + spaces + "\n"
    }

    //Tronco
    const trunkSpaces = "_".repeat(height - 1)
    const trunk = trunkSpaces + "#" + trunkSpaces + "\n" + trunkSpaces + "#" + trunkSpaces
    tree += trunk

    return tree
  }

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
