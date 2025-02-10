function fixPackages(packages){
    let stack = [];
    let result = '';
    for (let i = 0; i < packages.length; i++) {
        if (packages[i] === '(') {
        stack.push(result);
        result = '';
        } else if (packages[i] === ')') {
        result = stack.pop() + result.split('').reverse().join('');
        } else {
        result += packages[i];
        }
    }
    return result;
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"