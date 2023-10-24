type Params = {
    first:number;
    second:number
}

export const addTwoNumbers = (params:Params) => {
    return params.first + params.second;
  };
  

console.log((addTwoNumbers({first:2,second:4})));
