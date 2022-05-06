const Elon = {
    id: 101,
    name: 'Elon Musk',
    major: 'mathematics',
    balance: 5000,
    treatDey: function (expense) {
        this.balance = this.balance - expense;
        console.log(this)
        return this.balance;
    }
}
//===================
// akhaner Elon object er treatDey function ta jodi Bezoj object e use kora lagte pare.
const Bezoj = {
    id: 102,
    name: 'Jef Bezoj',
    balance: 6000
}
// akhane Elon object er treatDey function ke Bezoj object er jonno bedthe fela hoyece.
const bezojTreatDey = Elon.treatDey.bind(Bezoj);


//==============
const Mark = {
    id: 103,
    name: 'Mark Zukerburg',
    balance: 2000
}
const markTreatDey = Elon.treatDey.bind(Mark);
Elon.treatDey(100)
bezojTreatDey(500);
bezojTreatDey(200)
Elon.treatDey(400)
markTreatDey(800)
