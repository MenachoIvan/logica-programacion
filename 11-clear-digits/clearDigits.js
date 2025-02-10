/**
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== ' ') {
      result = result.slice(0, -1) // Elimina el último caracter agregado
    } else {
      result += s[i]
    }
  }
  return result
}

console.log(clearDigits('ab2c3')) // a
