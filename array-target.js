/*
    Reto de @midudev
    Nivel: Fácil

    Dado un array de enteros nums y un entero target,
    devuelve los indices de los dos numeros que suman el
    valor de target.

    Puedes asumir que cada entrada tendra exactamente una
    solucion y no puedes usar el mismo elemento dos veces.

    Puedes devolver la respuesta en cualquier orden.

    Ejemplos:

    Entrada: nums = [2,7,11,15], target = 9
    Salida: [0,1]
    Explicacion: Dado que nums[0] + nums[1] == 9,
    devolvemos [0, 1].

    Entrada: nums = [3,2,4], target = 6
    Salida: [1,2] --> Si se comprueba el mismo numero puede ser [0,0]

    Entrada: nums = [3,3], target = 6
    Salida: [0,1] --> Si se comprueba el mismo numero puede ser [0,0]
*/ 

function reto(nums, target){
    for(i= 0; i < nums.length; i++){
        for(j = 0; j < nums.length; j++){
            sum = nums[i] + nums[j]
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
}

function retoSinRepes(nums, target){
    for(i= 0; i < nums.length; i++){
        for(j = 1; j < nums.length; j++){
            sum = nums[i] + nums[j]
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
}

entrada1 = [2,7,11,15]
tgt1 = 9

entrada2 = [3,2,4]
tgt2 = 6

entrada3 = [3,3]
tgt3 = 6

console.log("Permite repetidos")
console.log(reto(entrada1, tgt1))
console.log(reto(entrada2, tgt2))
console.log(reto(entrada3, tgt3))

console.log("Sin repetir índice")
console.log(retoSinRepes(entrada1, tgt1))
console.log(retoSinRepes(entrada2, tgt2))
console.log(retoSinRepes(entrada3, tgt3))