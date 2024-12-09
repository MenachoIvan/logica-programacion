/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  let result = {};

  inventory.forEach((item) => {
    const { category, name, quantity } = item;

    // Verificar si la categoría ya existe en el objeto `result`
    if (!result[category]) {
      result[category] = {}; // Si no existe, la inicializamos como un objeto vacío
    }

    // Verificar si el nombre del juguete ya existe dentro de esa categoría
    if (!result[category][name]) {
      result[category][name] = 0; // Si no existe, inicializamos la cantidad en 0
    }

    // Sumar la cantidad actual a la cantidad existente
    result[category][name] += quantity;
  });

  return result; // Devuelve el objeto final
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory(inventory));

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
