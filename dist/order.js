export function calculateTotal(products) {
    let total;
    total = products.reduce((sum, item) => {
        return sum + item.price;
    }, 0);
    return Math.round(total * 100) / 100;
}
//# sourceMappingURL=order.js.map