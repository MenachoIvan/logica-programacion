/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {

    let counts = {}
    let pairs = []

    shoes.forEach((shoe) => {
        const { type, size } = shoe;

        if(!counts[size]){
            counts[size] = {}
        }

        if(!counts[size][type]){
            counts[size][type] = 0
        }
        
        counts[size][type]++


      });

      Object.keys(counts).forEach((size) => {
        const LEFT_COUNT = counts[size].I || 0
        const RIGHT_COUNT = counts[size].R || 0
        const NUM_PAIRS = Math.min(LEFT_COUNT, RIGHT_COUNT)

        for (let i = 0; i < NUM_PAIRS; i++) {
            pairs.push(parseInt(size))
        }
    });

    return pairs
  }

  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  console.log(organizeShoes(shoes))
  // [38, 42]

  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  
  console.log(organizeShoes(shoes2))
  // [38, 38]