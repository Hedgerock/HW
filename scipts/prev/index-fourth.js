let food = [
    ['Sausage', 50], 
    ['Cheese', 40], 
    ['Pork', 140],
];

function sum () {
    let totalAmount = 0;
    for (let i = 0; i < food.length; i++) {
        let product = food[i][0];
        let price = food[i][1];
        totalAmount += food[i][1];
        if (price === 40 ) {
            console.log((i + 1), product, price, `:)` );
        } else if (price === 140) {
            console.log((i + 1), product, price, `:(` );
        } else {
            console.log((i + 1), product, price, `*___*`);
        }
    }
    console.log(totalAmount);
    return sum;
}
sum();