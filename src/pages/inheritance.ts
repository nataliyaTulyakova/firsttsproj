//Task 1
class Worker {
    constructor(public name: string) {
    }
    work(): string {
        return `${this.name} працює`
    }
}

class Developer extends Worker {
    constructor(name: string, public programmingLanguage: string) {
        super(name);
    }
    override work(): string {
        let mess: string = super.work();
        return `${mess}, ${this.name} пише код на ${this.programmingLanguage} `
    }
}

const worker = new Worker("Tom Cat");
console.log(worker.work());
const developer: Worker = new Developer("Tom Cat", "Type Script");
console.log(developer.work());

//Task 2
class Rectangle {
    constructor(protected _width: number, protected _height: number) {
    }
    get height(): number {
        return this._height;
    }
    get width(): number {
        return this._width;
    }
    getArea(): number {
        return this._height * this._width;
    }
}

class Square extends Rectangle {
    protected _side;
    constructor(side: number) {
        super(side, side);
        this._side = side;
    }
    get side(): number {
        return this._side;
    }
    describe(): string {
        return `Квадрат зі стороною ${this._side} має площу ${this.getArea()}`
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
    protected balance: number;
    constructor() {
        this.balance = 0;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    addInterest(rate: number): void {
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




