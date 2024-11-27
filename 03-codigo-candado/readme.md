English below

Reto de @midudev
Nivel: Fácil

Este ejercicio simula el funcionamiento de un candado de combinación numérica. 
Se tiene una lista de combinaciones iniciales y cadenas de movimientos que modifican esas combinaciones.

Cada combinación inicial es un número.
Los movimientos son cadenas de texto con las siguientes instrucciones:
R (Right): Mover al siguiente dígito. Si estamos en el último dígito, volvemos al primero.
L (Left): Mover al dígito anterior. Si estamos en el primero, pasamos al último.
U (Up): Incrementar el dígito actual. Si el dígito es 9, pasa a 0.
D (Down): Decrementar el dígito actual. Si el dígito es 0, pasa a 9.
La tarea consiste en aplicar las cadenas de movimientos a las combinaciones iniciales para obtener el número final.

Ejemplo de candado de combinación:

Imagina un candado con la combinación inicial 000 y una lista de movimientos URURD. Cada movimiento modifica el candado así:

U: Incrementa el primer dígito. La combinación pasa a 100.
R: Mueve el foco al segundo dígito. La combinación sigue siendo 100.
U: Incrementa el segundo dígito. La combinación pasa a 110.
R: Mueve el foco al tercer dígito. La combinación sigue siendo 110.
D: Decrementa el tercer dígito. La combinación pasa a 119.

Por lo tanto, el resultado final es 119.

Más ejemplos:

Entrada: 000 URURD
Salida: 119

Entrada: 1111 UUURUUU
Salida: 4411

Entrada: 9999 LULULULD
Salida: 8000

--------------------------------------------------------------------------------------------------------------------------------------------------

Challenge by @midudev
Level: Easy

This exercise simulates the operation of a numerical combination lock.
You are given a list of initial combinations and movement sequences that modify those combinations.

Each initial combination is a number.
The movements are strings of text with the following instructions:

R (Right): Move to the next digit. If you are at the last digit, go back to the first.
L (Left): Move to the previous digit. If you are at the first digit, go to the last.
U (Up): Increment the current digit. If the digit is 9, it becomes 0.
D (Down): Decrement the current digit. If the digit is 0, it becomes 9.
The task is to apply the movement sequences to the initial combinations to obtain the final number.

Example of a combination lock:

Imagine a lock with the initial combination 000 and a movement sequence URURD. Each movement modifies the lock as follows:

U: Increments the first digit. The combination becomes 100.
R: Moves the focus to the second digit. The combination remains 100.
U: Increments the second digit. The combination becomes 110.
R: Moves the focus to the third digit. The combination remains 110.
D: Decrements the third digit. The combination becomes 119.

Therefore, the final result is 119.

More examples:

Input: 000 URURD
Output: 119

Input: 1111 UUURUUU
Output: 4411

Input: 9999 LULULULD
Output: 8000