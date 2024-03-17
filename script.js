let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {

  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}


window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');


}

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
  0: {
    slidesPerView: 1,

  },
  768: {
    slidesPerView: 2,

  },
  1020: {
    slidesPerView: 3,

  },
},
  });


  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
      delay: 1500,
      disableOnInteraction: false,
    },
  
    breakpoints: {
    0: {
      slidesPerView: 1,
  
    },
    768: {
      slidesPerView: 2,
  
    },
    1020: {
      slidesPerView: 3,
  
    },
  },
    });

   


document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
    const deleteButtons = document.querySelectorAll('.shopping-cart .box .fa-trash');
    const totalPriceElement = document.querySelector('.shopping-cart .total');

    let totalPrice = calculateTotalPrice();

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const item = event.target.closest('.box');
            const itemName = item.querySelector('h1').innerText;
            const itemPrice = parseFloat(item.querySelector('.price').innerText.replace('$', ''));

            // Add item to the cart (for example, display in console)
            console.log('Added to cart:', itemName, 'Price:', itemPrice);

            // You can add the item to the cart logic here
            // For now, let's assume we're just logging it

            // Update the total price
            totalPrice += itemPrice;
            totalPriceElement.innerText = `Total : $${totalPrice.toFixed(2)}/-`;
        });
    });

    // Add event listeners to "Delete" buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const item = event.target.closest('.box');
            const itemPrice = parseFloat(item.querySelector('.price').innerText.replace('$', ''));

            // Remove item from the cart (for example, remove from the UI)
            item.remove();

            // Update the total price
            totalPrice -= itemPrice;
            totalPriceElement.innerText = `Total : $${totalPrice.toFixed(2)}/-`;
        });
    });

    // Function to calculate the total price of items in the cart
    function calculateTotalPrice() {
        let total = 0;
        const cartItems = document.querySelectorAll('.shopping-cart .box');
        cartItems.forEach(item => {
            const itemPrice = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
            total += itemPrice;
        });
        return total;
    }
});
