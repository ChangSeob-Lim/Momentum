// var 는 예전 방식으로 const를 사용하고 싶은가 let을 사용하고 싶은지 알 수 없음
// const는 변경되지 않는 변수이고 let은 변경가능한 변수, var는 과거에 사용하던 변수
// undefined != null
console.log(true, false, undefined, null);
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

console.log(daysOfWeek);
console.log(daysOfWeek[4]);

daysOfWeek.push("mon");
console.log(daysOfWeek);
console.log(daysOfWeek[7]);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy.pop();
console.log(toBuy);

const playerName = "seobee";
const playerPoints = 100;
const playerNum = 7;

const player = {
    name:"seobee",
    points:10,
    num:7,
};

console.log(player);
console.log(player.name);

player.lastName = "lim";
player.points = 100;

console.log(player);
console.log(player["name"]);

function sayHello(a) {
    console.log("hello " + a + "!");
};

//alert('aaaaa');
sayHello("Seobee");

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
    return firstNumber + secondNumber;
};

function divide(a, b) {
    console.log(a / b);
}

const objSeob = {
    name: "Seob",
    Hello: function (otherName) {
        console.log(name + " " + otherName);
    },
}

// string - ""
// int - 1
// double - 1.5
// boolean - true
// array - [1, 2, 3]
// object - {
//     name: "aa",
//     age: 10,
// }
// const, let, var

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
}

const plusResult = calculator.add(1, 2);
const minusResult = calculator.minus(1, 2);
const multiplyResult = calculator.multiply(1, 2);
const divideResult = calculator.divide(1, 2);
const powerResult = calculator.power(2, 3);

const bondYear = 1995;
function calculateKrAge(bondYear) {
    const now = new Date();
    return now.getFullYear() - bondYear + 1;
};

const krAge = calculateKrAge(bondYear);
console.log(krAge);