////Task 2
let receipt = [
    { name: "Banana", quantity: 3, price: 50 },
    { name: "Bread", quantity: 1, price: 20 },
    { name: "Butter", quantity: 2, price: 40 }
];

function printReceipt(){
    console.log("Чек:");
    receipt.forEach(item => {
        console.log(`${item.name}: ${item.quantity} x ${item.price} = ${item.quantity * item.price}`);
    });
}

function getSum(){
    let sum = 0
    receipt.forEach(item =>{
        sum += item.quantity * item.price
    })
    return sum
}

function getMostExpensiveProduct(){
    let maxPrice = 0
    let mostExpensiveItem = null
    receipt.forEach(item =>{
        const totalPrice = item.quantity * item.price
        if(totalPrice > maxPrice){
            maxPrice = totalPrice
            mostExpensiveItem = item
        }
    })
    return mostExpensiveItem
}

function getAveragePrice(){
    let totalItems = 0
    let totalPrice = 0
    receipt.forEach(item =>{
        totalItems += item.quantity
        totalPrice += item.quantity * item.price
    })
    return Math.round(totalPrice / totalItems)
}

printReceipt();
console.log("Общая сумма покупки:", getSum());
console.log("Самый дорогой продукт:", getMostExpensiveProduct().name);
console.log("Средняя цена продукта:", getAveragePrice());


////Task 3
let styles = [
    { name: "color", value: "red" },
    { name: "font-size", value: "14px" },
    { name: "font-weight", value: "bold" },
]

function displayStyledText(styles,text){
    let styleString = ''
    styles.forEach(style => {
        styleString += `${style.name}: ${style.value}; `
    })
    document.write(`<p style="${styleString}">${text}</p>`)
}
displayStyledText(styles, 'Hello world!')

