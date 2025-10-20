enum DayOfWeek {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}
enum OrderStatus {
    Pending, Processing, Shipped, Delivered, Cancelled
}
interface Order {
    id: number;
    customerName: string;
    status: OrderStatus;
    orderDate: Date;
}
function getStatusMessage(status: OrderStatus): string {
    return `The current status of the order is: ${OrderStatus[status]}`;
}

function canCancelOrder(order: Order): boolean {
    if (order.status === OrderStatus.Processing || order.status === OrderStatus.Pending) {
        return true;
    }
    return false;
}

function getNextStatus(currentStatus: OrderStatus): OrderStatus | null {
    if (currentStatus === OrderStatus.Delivered || currentStatus === OrderStatus.Cancelled) {
        return null;
    }
    return currentStatus + 1;
}
// Test your code
const order: Order = {
    id: 1,
    customerName: "Charlie",
    status: OrderStatus.Pending,
    orderDate: new Date()
};
console.log(getStatusMessage(order.status));
console.log(canCancelOrder(order));