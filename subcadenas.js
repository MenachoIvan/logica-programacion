/*
    Reto de @midudev
    Nivel: Fácil

    Dado un string 's', encuentra la longitud de la subcadena más larga que NO contenga carácteres repetidos.

    Ejemplo 1:
 
    Entrada: s= "abcabcbb"
    Salida: 3
    Explicación: La respuesta es "abc" con una longitud de 3
 
    Ejemplo 2:
  
    Entrada: s= "pwwkew"
    Salida: 3
    Explicación: La respuesta es "wke" con una longitud de 3
 
    Ten en cuenta que la respuesta debe ser una subcadena, no una subsecuencia, "pwke" es una subsecuencia, pero no es una subcadena
 */

function subcadenaMasLarga(texto){

    let inicio = 0
    let result = 0
    let letras = new Set() // Conjunto de carácteres únicos

    for(let fin = 0; fin < texto.length; fin++){
        // Si el carácter ya está en el conjunto, ajusta el inicio de la ventana
        while(letras.has(texto[fin])){
            letras.delete(texto[inicio])
            inicio++
        }
        // Añade todas las letras
        letras.add(texto[fin])
        
        // Solo deja el máximo
        result = Math.max(result, fin - inicio + 1)
    }

    return result;
}

console.log(subcadenaMasLarga("abcabcbb")); // Output: 3
console.log(subcadenaMasLarga("pwwkew"));   // Output: 3
console.log(subcadenaMasLarga(""));         // Output: 0
console.log(subcadenaMasLarga("a"));        // Output: 1