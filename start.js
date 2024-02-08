// це спеціальний режим виконання коду, який дає змогу переводити скрипт у режим повної відповідності сучасному стандарту
'use strict';









// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(String(totalPrice));
// console.log(message.length);

// const userName = 'dmitriy'
// const age = 27

// console.log(String(age).length);
// console.log('dmitriy'.length);

// const username = "Poly";
// // задав нову змінну та надав їй значення імя+довжина рядка
// const userName = username.length; 
// //                                 нова змінна з довжиною рядка
// const message = `Username ${username} is ${userName} characters long`;
// console.log(message);


// const userName = 'Dmitriy Lysenko'

// const usernamelength = userName.length -1;

// const firstElement = userName[14]
// const lastElement = userName.length 

// console.log(userName[usernamelength]);
// console.log(usernamelength);
// console.log(firstElement);
// console.log(lastElement);

// const age = 16;
// const isAdult = age >= 18;

// console.log(isAdult);


// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";

// const isValid = correctPassword == userPassword;

// console.log(isValid);


// console.log(Number.parseInt(5));
// console.log(Number.parseInt(26.21454));
// console.log(Number.parseInt(3/4));
// console.log(Number.parseInt('sdada'));
// console.log(Number.parseInt("12.46qwe79"));

// console.log(Number.parseFloat(5.2));
// console.log(Number.parseFloat('12.2 cv'));

// const value = "24.5px";

// const numerical = (Number.parseFloat(value));

// console.log(numerical);

// const cost = 15.5;
// const value = (Number.parseFloat(cost));

// console.log(value);

// console.log(Math.floor(1.9));
// console.log(Math.floor(3.1));

// console.log(Math.ceil(1.2));

// console.log((15).toFixed(2));
// console.log((0.4 + 0.9).toFixed(3));

// const value = '3.14 uah';
// const pieses = 5;

// const valuelPrice = (Number.parseFloat(value));

// const totalPrice = (valuelPrice.toFixed(1)) * 5;

// console.log(totalPrice);

// function doStuff () {
// // tilo
//     console.log('dima molodec');
// }
// doStuff();


// function toSel() {
    
//     console.log('you must sel product');
    
    
// }

// toSel();


// function add(a, b, c) {
     
//     console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10)
// add(10, 20, 30)
// add(5, 10, 15)

// function toAdd(x, y, z) {
//     const all = x + y + z;
//     return all;
// }

// const result = toAdd(1, 2, 4)
// console.log(result);

// function add(a, b, c) {
// return a + b + c
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function foo() {
//     let value = ' i am a boss'
//     console.log(value);

     


// }
// foo()

// function makeMessage (name, price) {

// let productname = name
// let productprice = price
//     return `"You picked ${productname}, price per item is ${productprice} credits"`
// };

// makeMessage('Radar', 6150);
// console.log(makeMessage('Radar', 6150));
// makeMessage('Scanner', 3500);
// console.log(makeMessage('Scanner', 3500));
// makeMessage('Reactor', 8000);
// console.log(makeMessage('Reactor', 8000));
// makeMessage('Engine', 4070);
// console.log(makeMessage('Engine', 4070));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {

//     const totalOrder = orderedQuantity * pricePerItem
//     return totalOrder

// }

// calculateTotalPrice(5, 100)
// console.log(calculateTotalPrice(5, 100));
// calculateTotalPrice(8, 60)
// console.log(calculateTotalPrice(8, 60));
// calculateTotalPrice(3, 400)
// console.log(calculateTotalPrice(3, 400));
// calculateTotalPrice(1, 3500)
// console.log(calculateTotalPrice(1, 3500));
// calculateTotalPrice(12, 70)
// console.log(calculateTotalPrice(12, 70));


// function makeTransaction(quantity, pricePerDroid) {

// const totalPrice = quantity * pricePerDroid

//     return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`



// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


// function getShippingMessage(country, price, deliveryFee) {

//     const totalPrice = price + deliveryFee

//     return `"Shipping to ${country} will cost ${totalPrice} credits"`



// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"



// function getElementWidth(content, padding, border) {

//     const newContent = Number.parseInt(content);
//     const newPadding = Number.parseInt(padding);
//     const newBorder = Number.parseInt(border);

//     const allSize = newContent + newPadding * 2 + newBorder * 2
//     return allSize





// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
