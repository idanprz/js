// class Account {
//     id: number = 0
//     balance: number = 0

//     constructor(id: number, balance: number) {
//         if (id < 1 || balance < 1) {
//             console.log('Please enter a number ID and positive balance')

//             return
//         }

//         this.id = id
//         this.balance = balance
//     }


//     Withdraw(sum: number) {
//         const newBalance: number = this.balance - sum

//         if (newBalance < 1) {
//             console.log('No money!')

//             return
//         }

//         this.balance = newBalance
//     }

//     Deposit(sum: number) {
//         const newBalance: number = this.balance + sum

//         if (newBalance > 1000) {
//             console.log('Too much money!')

//             return
//         }

//         this.balance = newBalance
//     }

//     AccountInfo() {
//         document.body.innerHTML += `id: ${this.id} balance" ${this.balance}<hr>`
//         console.log()
//     }
// }

// class Bank {
//     accs: Account[] = []

//     AddAccount(id: number, balance: number) {
//         this.accs.push(new Account(id, balance))
//     }

//     AllAccountInfo() {
//         this.accs.forEach(acc => acc.AccountInfo())
//     }
// }

// let acc1: Account = new Account(1, 333)
// acc1.AccountInfo()
// acc1.Deposit(333)
// acc1.AccountInfo()
// acc1.Withdraw(333)
// acc1.AccountInfo()

// // should log wrong input
// let badAcc1: Account = new Account(2, -3)
// let badAcc2: Account = new Account(-3, 2)
// acc1.Withdraw(9000)
// acc1.Deposit(9000)

// let bank: Bank = InitBank()
// bank.AllAccountInfo()

// function InitBank(): Bank {
//     let bank: Bank = new Bank()

//     for (let i = 0; i < 5; i++) {
//         bank.AddAccount(i + 1, (i + 1) * 100)
//     }

//     return bank
// }

