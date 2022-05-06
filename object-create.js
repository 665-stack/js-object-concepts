// 1. using object literal
const student = { name: 'Sakib al hasan', job: 'cricketer' }

// 2. object constructor
const person = new Object();
console.log('person -- ', person)

// 3. 
const human = Object.create(null)
const human2 = Object.create(student)
console.log('human -- ', human)
console.log('human2 -- ', human2.job)

// 4. class 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peo = new People('Rafik', 13);
console.log('peo -- ', peo)

// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('Kader');
console.log('man -- ', man)


