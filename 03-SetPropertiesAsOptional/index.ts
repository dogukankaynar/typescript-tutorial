type GetNameTypes = {
    first:string;
    last?:string;
}

export const getName = (params:GetNameTypes) => {
    if (params.last) {
      return `${params.first} ${params.last}`;
    }
    return params.first;
  };

const dogukan = getName({first:'Doğukan'})
const atilay = getName({first:'Atilay',last:'Köşker'})

console.log(dogukan);
console.log(atilay);
