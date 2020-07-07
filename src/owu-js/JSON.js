let obj1 = {name: "Vova", age: 30, married: true};

let string1 = JSON.stringify(obj1); // JSON.stringify() - перетворення обєкту в String за допомогою методу бібліотеки JSON
console.log(string1);

let parse = JSON.parse(string1);    // JSON.parse() - перетворення String в обєкт
console.log(parse);








