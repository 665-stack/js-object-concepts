// kibabe object kaj kore. object e property hishebe fucntion, array ashob kicu use kora jay.
const pen = {
    brand: 'metadore',
    price: 5,
    meterial: 'plastic',
    writePoem: function (story) {
        // console.log(story)
    }
}
pen.writePoem('Nothng')
//=======================
// object er property name gulo akta array er bitor kore return korbe.
const keys = Object.keys(pen);
// console.log(keys)
// object er property er man/value gulo akta array er bitor kore return korbe.
const values = Object.values(pen);
// console.log(values)
//=======================
// object er property gulo amra kibabe loop korte pari. array ba array like jinisher jonno loop korbo for of diye. Ar object er jonno loop korbo for in diye.
for (const property in pen) {
    // console.log(pen[property])
}
//==============================
// 2ta object compare
const a = { a: 1 };
const b = { a: 2 };
const c = a;

if (a === b) {
    console.log('same')
}
else {
    console.log('not same')
}
//===============================
const aBounded = pen.writePoem.bind(a);
aBounded();
//=========================
// this






