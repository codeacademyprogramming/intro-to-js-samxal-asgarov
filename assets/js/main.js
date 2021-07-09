// var, let, const

// console.log(firstname);

// var firstname = 'Something';

// console.log(firstname);

// var firstname = 'Another thing';

// console.log(firstname);

// let firstname = 'Samir';
// console.log(firstname);

// firstname = 'Aflatun';
// console.log(firstname);

// const num = 100;
// const str = "Agil";
// const bool = true;
// const user = {
//     firstname: 'Agil',
//     lastname: 'Atakishiyev'
// };
// let some;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof user);
// console.log(typeof typeof number);

// ==  - checks only the 'value' of the sides
// === - checks both 'value' and the 'type' of the sides
// if (5 === '5') {
//     console.log('yes it is baby Eltun');
// } else {
//     console.log('no it is not baby Anar');
// }

const user = {
    firstname: 'Turkan',
    lastname: 'Hashimova',
    age: 20
};

const result = user.age > 18 ? user.firstname + " " + 'you are allowed to enter' : 'you are not allowed';
// const userDetails = "hey my name is " + user.firstname + ", my lastname is " + user.lastname + " my age is " + user.age;
// Template literals
const userDetails = `hey my name is ${user.firstname} and my lastname is ${user.lastname} and my age is ${user.age}`;
// alert(userDetails);


const truthy = true;
const falsy = false;

// Truthy values - +Infinite, -Infinite, "something", " ", {}, [], function
// Falsy values - "", 0, undefined, null



// const number = 100;
// const str = "hello world";
// const und = undefined;

// console.log(number || 5); // 100
// console.log(100 > 50 && und); // undefined
// console.log(und || str || ''); // hello world
// console.log(str && number); // 100
// console.log(number < 200 && number < 50 && true); // true

// console.log(1 < 2 < 3);

console.log(0 && 1 && "foo"); // 0
console.log("" || "foo" || false); // foo
alert(null || 2 && 3 || 4); // 2
alert(alert(3) && alert(2)); //
alert(1 && null && 2);
alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));


function myFunc() {
    return undefined;
}

myFunc() //5