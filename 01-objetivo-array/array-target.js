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