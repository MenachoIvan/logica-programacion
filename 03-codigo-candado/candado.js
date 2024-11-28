function desbloquear(combinacion, movimientos) {
    let candado = combinacion.split("").map(Number);
    let posicion = 0;

    for (let movimiento of movimientos) {
        switch (movimiento) {
            case "R": // Mover a la derecha
                posicion = (posicion + 1) % candado.length;
                break;
            case "L": // Mover a la izquierda
                posicion = (posicion - 1 + candado.length) % candado.length;
                break;
            case "U": // Incrementar el dígito
                candado[posicion] = (candado[posicion] + 1) % 10;
                break;
            case "D": // Decrementar el dígito
                candado[posicion] = (candado[posicion] - 1 + 10) % 10;
                break;
        }
    }

    return candado.join("");
}

console.log(desbloquear("000", "URURD")); // Output: 119
console.log(desbloquear("1111", "UUURUUU")); // Output: 4411
console.log(desbloquear("9999", "LULULULD")); // Output: 8000


