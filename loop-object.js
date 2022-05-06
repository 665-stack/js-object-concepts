const bottle = {
    color: 'brown',
    hold: 'water',
    price: 150,
    isCleaned: true
};
/* 
Different type of For Loop --- 
1. for loop
for (let i = 0; i < 10; i++){}
2. for of 
for (const num of numbers){} // array
3. for in 
for (const  property in bottle ){} // object

Different type to get property value from object with for in   ---
=> objectName.property
=> objectName["property"]
=> objectName[expression]
*/
for (const prop in bottle) {
    // console.log(prop)
    // console.log(bottle[prop])
    // console.log(prop, bottle[prop])
}
// ============================
const keys = Object.keys(bottle);
console.log(keys)
for (const prop of keys) {
    console.log(prop, bottle[prop])
}
// // ==========================
const entries = Object.entries(bottle);
console.log(entries)
for (const [key, value] of entries) {
    console.log(key, value)
}
