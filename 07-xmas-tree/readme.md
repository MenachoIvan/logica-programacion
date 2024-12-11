English below

Reto de @midudev
Nivel: Medio


¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

It's time to put up the Christmas tree at home! 🎄 But this year we want to make it special. We're going to create a function that takes the height of the tree (a positive integer between 1 and 100) and a special character to decorate it with.

The function should return a string representing the Christmas tree, constructed as follows:

The tree is made up of triangles of special characters.
Blank spaces on the sides of the tree are represented by underscores _.
All trees have a two-line trunk, represented by the character #.
The tree should always be the same length on each side.
You should make sure the tree is the right shape by using line breaks \n for each line.

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

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/