// Task1
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result = concatName("John", "Doe");
console.log(result);
const result2 = concatName("John");
console.log(result2);
// Task2
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
console.log(concatTwoStrings("Hello,", "World!"));
const modifyUser = (users, id, makeChange) => {
    return users.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
const users1 = modifyUser(users, "1", (user) => {
    return { ...user, name: "Waqas" };
});
users1.forEach((user) => {
    console.log(`Користувач: ${user.name}, ID: ${user.id}`);
});
console.log("Перевірка // @ts-expect-error:");
const users2 = modifyUser(users, "1", 
// @ts-expect-error
(user) => {
    return { ...user, name: 123 };
});
users2.forEach((user) => {
    console.log(`Користувач: ${user.name}, ID: ${user.id}`);
});
export {};
//# sourceMappingURL=func.js.map