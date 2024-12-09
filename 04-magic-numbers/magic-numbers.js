/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    let sinRepetidos = new Set()
    let result = []

    if(gifts.length > 0){
        for(let i in gifts){
            sinRepetidos.add(gifts[i])
        }
       // ahora aux no tiene duplicados
        result.push(...sinRepetidos)
       return result.sort((a, b) => a - b) // array function to sort numbers
    }
    return result
}


const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]


const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía, no gifts, void list.

const gifts4 = [100, 1000, 100, 500, 200, 500, 200]
const preparedGifts4 = prepareGifts(gifts4)
console.log(preparedGifts4) // [100, 200, 500, 1000] 


  