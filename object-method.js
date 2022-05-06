// Object e bibinno data type er onkgulo property akshathe thakte pare.
const student = {
    id: 101,
    name: 'Mahmodul Shahin',
    major: 'computer',
    isRich: false,
    balance: 5000,
    subjects: ['english', 'economisc', 'math 101', 'calculus'],
    bestFriend: {
        name: 'junayed',
        major: 'food'
    },
    // method; object er modde property hishebe function likhatake method bole.
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, bokshis) {
        this.balance = this.balance - expense - bokshis;
        return this.balance;
    }
}
//accessing object properties. structure -- objectName.methodName()
student.takeExam()
const remaining = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log('remaining -- ', remaining)
console.log('remaining2 -- ', remaining2)
