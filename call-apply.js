const Elon = {
    id: 101,
    name: 'Elon Musk',
    major: 'mathematics',
    balance: 5000,
    treatDey: function (expense, bokshis, tax) {
        this.balance = this.balance - expense - bokshis - tax;
        console.log(this)
        return this.balance;
    }
}
const Bezoj = {
    id: 102,
    name: 'Jef Bezoj',
    balance: 6000
}
const Mark = {
    id: 103,
    name: 'Mark Zukerburg',
    balance: 2000
}
// ager bar amra Elon object er treatDey function ta Bezoj o Mark object e use korar jonno Bind use kortam. But akhane amra call & apply use korbo.

//call
// akhaner 500 and 100 tk ta holo treatDey er expense & bokshis & tax . Mane treatDey er parameter.
Elon.treatDey.call(Bezoj, 500, 100, 50)
Elon.treatDey.call(Bezoj, 300, 50, 30)

//apply
// akhner apply pray 90% call er moto same. Just call e parameter coma(,) diye padate hoy. Ar apply e sheta array er bitor diye padate hoy.
Elon.treatDey.apply(Mark, [300, 50, 10])
Elon.treatDey.apply(Mark, [100, 10, 5])











