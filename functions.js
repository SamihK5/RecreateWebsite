// Add products to cart
function addToCart(ProductName) {
    alert(productName + "has been added to your cart!");
}

// Toggles dark mode for the website
function toggleDarkMode() {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle(text-white);
}

// Keeps track of products and price in cart
let cart = [
    {title: "Spider-Man 2", price: 69.99},
    {title: "Doom", price: 69.99},
    {title: "The Last of US", price: 69.99}
];
showCartItemsWithTotal(cart);

// Shows total price of all products in cart
function showCartItemsWithTotal(cart) {
    let total = 0;

    cart.forEach(function(game) {
        console.log('Title: ${game.title} | price:$${game.price}');
        total += game.price;
    });

    console.log('Total: $$ {total.toFixed(2)}');
}

// Welcome Message
let welcomeMessage = "Welcome to the Playstation Store - Explore the best PS5 games, accessories, and moere!";

console.log(welcomeMessage);