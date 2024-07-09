class Calculator {
    constructor() {
        this.prices = {
            redSet: 50,
            greenSet: 40,
            blueSet: 30,
            yellowSet: 50,
            pinkSet: 80,
            purpleSet: 90,
            orangeSet: 120
        };
    }

    calculateTotal(order, hasMemberCard = false) {
        let total = 0;

        // Calculate total price without discounts
        for (const item in order) {
            if (order.hasOwnProperty(item)) {
                total += this.prices[item] * order[item];
            }
        }

        // Apply discounts for Orange, Pink, and Green sets
        const discountItems = ['orangeSet', 'pinkSet', 'greenSet'];
        for (const item of discountItems) {
            if (order[item] && order[item] >= 2) {

                let bundles = Math.floor(order[item] / 2);
                let discountAmount = bundles * this.prices[item] * 0.05;
                total -= discountAmount;
            }
        }

        // Apply member card discount
        if (hasMemberCard) {
            
            // 100% - 10% = 90%
            total *= 0.90;
        }

        return total;
    }
}

// Example usage
const calculator = new Calculator();
const order1 = {
    redSet: 1,
    greenSet: 1
};
console.log(calculator.calculateTotal(order1, true));

const order2 = {
    orangeSet: 5,
    pinkSet: 4,
    blueSet: 2
};
console.log(calculator.calculateTotal(order2, false));
