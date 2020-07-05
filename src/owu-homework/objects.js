let user1 = {fName: "Vova", lname: "Bodnar", age: 30, married: true };
console.log(user1.fName, user1.lname);
console.log(user1["married"]);
user1.wife = {fname: "Svitlana", lName: "Bodnar", age: 31, married: true};
console.log(user1.wife.age);
console.log(user1);
user1.wife.age;

delete user1.wife.age; // видалити обєкт чи його дані
console.log(user1.wife);

let genkeys1 = Object.keys(user1);
console.log(genkeys1);

let wifeKeys = Object.keys(user1.wife); // Object.keys() - показати структуру обєкту
console.log(wifeKeys);

for (const filledIn in user1.wife) {    // ітерована структура обєкту (в стовпчик)
    console.log(filledIn);              // всі значення обєкту
    // console.log(user1.wife[filledIn]);
}

let user2 = {name: "Svieta"};
user1.wife.fname= user2.name; // значення правого призначаємо лівому
console.log(user1.wife);
console.log(user2.name);

