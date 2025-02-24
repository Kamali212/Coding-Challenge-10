// Task 1 Creating a Product Class

class Product { // Create class
    constructor(name, id, price, stock) { // Properties for Product Class
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}` // Method to return string of details
    };
    updateStock(quantity) { // Method to reduce stock quantity
        this.stock -= quantity;
    };
}

const prod1 = new Product("Laptop", 101, 1200, 10); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 10
console.log(prod1.getDetails()); 
prod1.updateStock(3); // Update stock by -3
console.log(prod1.getDetails()); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 7

// Task 2 Creating an Order Class

class Order { // Create Order class // Properties for order class
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity
        this.totalPrice = product.price * quantity; // Calculate total price
        this.product.updateStock(quantity); // Update stock quantity when creating a order 
    };
    getOrderDetails() {
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}` // Method to return string of details 
    };
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5 

// Task 3 Creating an Inventory Class 

class Inventory { // Create inventory class
    constructor() {
        this.products = []
    };
    addProduct(products) { // Method to add new product to array
        this.products.push(products)
    };
    listProducts() { // Method to log all product details
        this.products.forEach(product => {
            console.log(product.getDetails()) 
            
        });
    }
}

const inventory = new Inventory();
inventory.addProduct(prod1); // Add product to inventory 
inventory.listProducts(); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 5

