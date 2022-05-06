/* 
   object er property ke key bole. r value ke value.
   mane key: 'value', key: value, key: 'value'

   # For get all properties of object ----
   Object.keys(objectName) ==> object er property er name gulo array hishebe return korbe ei method er maddome.

   # For get all values of object ----
   Object.values(objectName) ==> object er property er value gulo array hishebe return korbe ei mothod er maddome. 

   # For get all key value pairs ----
   Object.entries(objectName) ==> we will two dimentional array.

   # For delete specific property ----
   delete objectName.propertyName ==> object er property and property er value 2taikei delete kore.

   # For don't delete ---- 
   Object.seal(objectName) ==> eta dile oi object er kono kono existing property delete kore jabe na, new property add kore jabe na. Kinto kono property er value change korte parbo.
   
   # For don't delete & change ----
   Object.freeze(objectName) ==> eta dile oi object er kono kono existing property delete kore jabe na, new property add kore jabe na. And kono property er value o change korte parbo na. 
*/
const bottle = {
    color: 'brown',
    hold: 'water',
    price: 150,
    isCleaned: true
};

// getting all properties (key) names
const bottleKeys = Object.keys(bottle)
console.log('bottleKeys -- ', bottleKeys)

// getting all values
const values = Object.values(bottle);
console.log('values -- ', values)

// get all key value pairs
const pairs = Object.entries(bottle);
console.log('pairs -- ', pairs)

// to set freeze
Object.freeze(bottle)
console.log(bottle)

// to set if no one can't delete.
Object.seal(bottle)
bottle.price = 200; // we can change value
console.log(bottle)

// delete one property
delete bottle.isCleaned;
console.log(bottle)


