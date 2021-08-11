var Account = /** @class */ (function () {
    function Account(id, balance) {
        this.id = 0;
        this.balance = 0;
        if (id < 1 || balance < 1) {
            console.log('Please enter a number ID and positive balance');
            return;
        }
        this.id = id;
        this.balance = balance;
    }
    Account.prototype.Withdraw = function (sum) {
        var newBalance = this.balance - sum;
        if (newBalance < 1) {
            console.log('No money!');
            return;
        }
        this.balance = newBalance;
    };
    Account.prototype.Deposit = function (sum) {
        var newBalance = this.balance + sum;
        if (newBalance > 1000) {
            console.log('Too much money!');
            return;
        }
        this.balance = newBalance;
    };
    Account.prototype.AccountInfo = function () {
        document.body.innerHTML += "id: " + this.id + " balance\" " + this.balance + "<hr>";
        console.log();
    };
    return Account;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.accs = [];
    }
    Bank.prototype.AddAccount = function (id, balance) {
        this.accs.push(new Account(id, balance));
    };
    Bank.prototype.AllAccountInfo = function () {
        this.accs.forEach(function (acc) { return acc.AccountInfo(); });
    };
    return Bank;
}());
var acc1 = new Account(1, 333);
acc1.AccountInfo();
acc1.Deposit(333);
acc1.AccountInfo();
acc1.Withdraw(333);
acc1.AccountInfo();
// should log wrong input
var badAcc1 = new Account(2, -3);
var badAcc2 = new Account(-3, 2);
acc1.Withdraw(9000);
acc1.Deposit(9000);
var bank = InitBank();
bank.AllAccountInfo();
function InitBank() {
    var bank = new Bank();
    for (var i = 0; i < 5; i++) {
        bank.AddAccount(i + 1, (i + 1) * 100);
    }
    return bank;
}
