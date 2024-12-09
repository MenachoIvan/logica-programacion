/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    let max = 0
    let fixedLinesLength = 0

    // Determinación nombre más largo
    for(let i in names){
        max = Math.max(max, names[i].length)
    }
    
    // Calculo y definición del ancho del marco
    fixedLinesLength = max + 4
    let border = '*'.repeat(fixedLinesLength)

    // Definición lineas interiores
    let nameLines = names.map(name =>{
        let spaces = max - name.length
        return `* ${name}${' '.repeat(spaces)} *`
    })

    // Retorno combinado
    return [border, ...nameLines, border].join('\n')
  }

  console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

/*
// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

console.log(createFrame(['midu']))

/*
// Resultado esperado:
********
* midu *
********
*/

console.log(createFrame(['a', 'bb', 'ccc']))

/*
// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
*/

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))