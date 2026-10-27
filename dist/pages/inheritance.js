//Task 1
class Worker {
    name;
    constructor(name) {
        this.name = name;
    }
    work() {
        return `${this.name} працює`;
    }
}
class Developer extends Worker {
    programmingLanguage;
    constructor(name, programmingLanguage) {
        super(name);
        this.programmingLanguage = programmingLanguage;
    }
    work() {
        let mess = super.work();
        return `${mess}, ${this.name} пише код на ${this.programmingLanguage} `;
    }
}
const worker = new Worker("Tom Cat");
console.log(worker.work());
const developer = new Developer("Tom Cat", "Type Script");
console.log(developer.work());
//Task 2
class Rectangle {
    _width;
    _height;
    constructor(_width, _height) {
        this._width = _width;
        this._height = _height;
    }
    get height() {
        return this._height;
    }
    get width() {
        return this._width;
    }
    getArea() {
        return this._height * this._width;
    }
}
class Square extends Rectangle {
    _side;
    constructor(side) {
        super(side, side);
        this._side = side;
    }
    get side() {
        return this._side;
    }
    describe() {
        return `Квадрат зі стороною ${this._side} має площу ${this.getArea()}`;
    }
}
const rect = new Rectangle(3, 2);
console.log(`Створено прямокутник з висотою ${rect.height}, шириною ${rect.width}`);
console.log(`Площа прямокутника: ${rect.getArea()}`);
const square = new Square(2);
console.log(`Створено квадрат зі стороною ${square.side}`);
console.log(`Висота квадрата: ${square.height} дорівнює його ширині: ${square.width}`);
console.log(square.describe());
//Task 3
class BankAccount {
    balance;
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    addInterest(rate) {
        if (rate > 0) {
            this.balance += this.balance * (rate / 100);
        }
    }
}
const bankAccount = new BankAccount();
bankAccount.deposit(100);
console.log(`Баланс: ${bankAccount.getBalance()}`);
const savingsAccount = new SavingsAccount();
savingsAccount.deposit(200);
savingsAccount.addInterest(3);
console.log(`Баланс: ${savingsAccount.getBalance()}`);
export {};
//# sourceMappingURL=inheritance.js.map