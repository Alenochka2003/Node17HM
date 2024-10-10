// Задание 1

function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    const totalWithoutDiscount = price * quantity;
    const totalWithDiscount = totalWithoutDiscount - (totalWithoutDiscount * discount / 100);
    return totalWithDiscount;
}

// Пример использования:
console.log(calculateTotal(100, 2, 10)); // 180 (с учётом 10% скидки)
console.log(calculateTotal(50, 4));      // 200 (без скидки)



//Задание 2
type Id = string | number;

function displayId(id: Id): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id * 10);
    }
}

// Задание 3
type Order = {
    orderId: string;
    amount: number;
    status: 'pending' | 'shipped' | 'delivered';
};

function filterOrdersByStatus(orders: Order[], status: string): Order[] {
    return orders.filter(order => order.status === status);
}


// Задание 4

type ProductInfo = [string, number, number];

function updateStock(inventory: { [key: string]: number }, productInfo: ProductInfo): { [key: string]: number } {
    const [name, , quantity] = productInfo;
    inventory[name] = (inventory[name] || 0) + quantity;
    return inventory;
}




