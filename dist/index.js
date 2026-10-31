import { calculateTotal } from "./order.js";
let productItems = [{ id: 1, title: "яблука", price: 40 },
    { id: 2, title: "груші", price: 60.6 },
    { id: 3, title: "банани", price: 70.8 },
    { id: 4, title: "апельсини", price: 100.2 },
];
productItems.forEach(item => {
    console.log(`Продукт: ${item.title}, ціна за кг: ${item.price};`);
});
console.log(`Загальна вартість  ${calculateTotal(productItems)}`);
//# sourceMappingURL=index.js.map