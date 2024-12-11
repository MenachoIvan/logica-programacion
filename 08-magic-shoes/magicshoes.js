/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {

    const counts = {}
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
        const leftCount = counts[size].I || 0
        const rightCount = counts[size].R || 0
        if (Math.min(leftCount, rightCount) > 0) {
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