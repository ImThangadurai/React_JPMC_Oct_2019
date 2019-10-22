var numbers = [1,2,3];

var copy = [...numbers];

console.log(numbers);
console.log(copy);

numbers.push(4);

console.log(numbers);
console.log(copy);

var names = ["a", "b", "c"];

var merge = [...numbers, ...names, 10, "tests"];
console.log(merge);

var user = {
    id: 10, name: "Anil"
}

var userCopy = {...user, loc: "Mumbai", name: "Joseph"};
user.id = 100;
console.log(user);
console.log(userCopy);

