// 2. Імплементуємо інтерфейс у класі User
class User {
    id;
    name;
    email;
    phoneNumber;
    createdAt;
    // Конструктор для ініціалізації властивостей
    constructor(id, name, email, phoneNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
        if (phoneNumber) {
            this.phoneNumber = phoneNumber;
        }
    }
}
const myUser = new User(1, "Tom Cat", "tomcat@email.com");
myUser.id = 2;
console.log(`User: ${myUser.name}, ID: ${myUser.id}`);
//myUser.createdAt = new Date(); 
const myUser2 = new User(3, "Jeck", "jeck@email.com", "00-00-00-00");
console.log(`User: ${myUser2.name}, ID: ${myUser2.id}, Phone: ${myUser2.phoneNumber}`);
let filterLength;
filterLength = function (arrayOfStrings, minLength) {
    const minLen = Number(minLength);
    return arrayOfStrings.filter(str => str.length > minLen);
};
const inputStrings = ["яблука", "груші", "кавун", "банани", "виноград", "персики", "диня", "малина"];
const outputStrings = filterLength(inputStrings, "5");
outputStrings.forEach(str => {
    console.log(str);
});
export {};
//# sourceMappingURL=interfaces.js.map