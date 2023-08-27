document.addEventListener('DOMContentLoaded', () => {
    const sectionLinks = document.querySelectorAll('.section-link');
    
    sectionLinks.forEach(section => {
        section.addEventListener('click', () => {
            const link = section.getAttribute('data-link');
            window.location.href = link;
        });
    });
});
// Sample product data
const products = [
    { name: 'Scientific Calculator', price: 20, seller: 'John Doe', image: 'calculator.jpg' },
    // Add more product data
];

// Function to display products
function displayProducts(products) {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="price">$${product.price}</p>
                <p class="seller">Sold by: ${product.seller}</p>
                <button class="buy-button">Buy Now</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

// Sample event listeners (filter and search)
document.addEventListener('DOMContentLoaded', () => {
    // Filtering
    const priceFilter = document.getElementById('price-filter');
    priceFilter.addEventListener('change', () => {
        const selectedValue = priceFilter.value;

        // Logic to filter products based on selected value
        // Modify the 'products' array accordingly

        displayProducts(products); // Display filtered products
    });

    // Searching
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const searchTerm = document.getElementById('item-search').value.toLowerCase();

        // Logic to search products based on searchTerm
        // Modify the 'products' array accordingly

        displayProducts(products); // Display search results
    });

    // Initial display
    displayProducts(products);
});
// ... Your existing code ...

// Sample user data (replace with actual user data)
const users = [
    { username: 'user1', password: 'password1', fullName: 'John Doe', dob: '1995-08-15', college: 'VIIT' },
    // Add more user data
];

// Function to check login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store user info in session storage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});

// Display user-specific content on index.html
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        const collegeDropdown = document.getElementById('college-dropdown');
        collegeDropdown.value = currentUser.college;
    }
});
//Signup
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const submitButton = document.querySelector("button[type='submit']");

    form.addEventListener("submit", function(event) {
        if (passwordField.value !== confirmPasswordField.value) {
            event.preventDefault();
            alert("Passwords do not match!");
        }
    });

    confirmPasswordField.addEventListener("input", function() {
        if (passwordField.value === confirmPasswordField.value) {
            confirmPasswordField.setCustomValidity("");
        } else {
            confirmPasswordField.setCustomValidity("Passwords do not match!");
        }
    });

    submitButton.addEventListener("click", function() {
        confirmPasswordField.reportValidity();
    });
});

//signup end
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    form.addEventListener("submit", function(event) {
        if (passwordField.value != confirmPasswordField.value) {
            event.preventDefault();
            alert("Passwords do not match!");
        }
    });
});
//login form google auth
function onGoogleSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    
    // Send the id_token to your server for further authentication and user registration
    // You can use AJAX or fetch to send the token to your backend
    sendGoogleTokenToServer(id_token);
}

function sendGoogleTokenToServer(token) {
    // Example using fetch to send the token to your server
    fetch('/google-auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_token: token })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from your server, e.g., redirect or display a message
    })
    .catch(error => {
        console.error('Error sending Google token to server:', error);
    });
}




