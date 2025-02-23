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