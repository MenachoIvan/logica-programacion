English below

Reto de @midudev
Nivel: Medium


Ya hemos envuelto cientos de regalos 🎁… pero un elfo olvidó comprobar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como "dentro de la caja" si:

Está completamente rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta que el * puede estar dentro, fuera o incluso no estar allí. Debemos devolver verdadero si el * está dentro de la caja y falso en caso contrario.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

The box has a present (*) and counts as "inside the box" if:

It is completely surrounded by # on the box's edges.
The * is not on the box's edges.
Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

Examples:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false

