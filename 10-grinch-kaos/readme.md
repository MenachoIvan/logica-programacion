English below

Reto de @midudev
Nivel: Medium


¡El grinch 👹 ha pasado por el taller de Papá Noel! Y vaya desastre que ha montado. Ha cambiado el orden de algunos paquetes, por lo que no se pueden realizar los envíos.

Por suerte, el elfo Pheralb ha detectado el patrón que seguía el grinch para desordenarlos. Ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones son las siguientes:

Recibirás una cadena que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes invertir el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve la cadena resultante con los paréntesis eliminados, pero con el contenido correctamente invertido.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.

Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:

You will receive a string containing letters and parentheses.
Every time you find a pair of parentheses, you need to reverse the content within them.
If there are nested parentheses, solve the innermost ones first.
Return the resulting string with parentheses removed, but with the content correctly reversed.

He left us some examples:

fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"



