/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: "Cherry",
    price: 20,
    quantity:0,
    productId:123,
    image: "../images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 60,
    quantity:0,
    productId:124,
    image: "../images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 50,
    quantity:0,
    productId:125,
    image: "../images/strawberry.jpg"
  },
];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId){
  //Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.productId === productId);

  if (existingProduct) {
    
    // If the product is already in the cart, increase its quantity
    existingProduct.quantity+=1;
  }else {
    const productToAdd = products.find((product) => product.productId === productId);
    if(productToAdd){
      //clone the product object and set the quantity to 1
      const newProduct = {...productToAdd, quantity: 1};
      cart.push(newProduct); //Add the product to cart
    }else {
      console.log("Products not found.");
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  const quantityToAdd = cart.find((item) => item.productId === productId);
  if(quantityToAdd){
    quantityToAdd.quantity += 1;
  }else{
    console.log("Products not found.");
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  const quantityToReduce = cart.find((item) => item.productId === productId);
  if(quantityToReduce){
    quantityToReduce.quantity -= 1;
    
    if (quantityToReduce.quantity === 0){
      const index = products.indexOf(quantityToReduce);
      cart.splice(index, 1);
    }else {
      console.log("Products not found.");
    }
  }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  //find the product based on productId
  const productToRemove = cart.find((item) => item.productId === productId);
  
  if(productToRemove){
    //Set the product's quantity to 0
    productToRemove.quantity = 0;

    //Remove the product from the cart
    const index = cart.indexOf(productToRemove);
    cart.splice(index, 1);
  }
}
  
  /* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
  */

  function cartTotal(){
    let total = 0;
    for(const product of cart){
      total += product.price * product.quantity;
    }
    return total;
  }

  const total = cartTotal();
  console.log("Cart Total: ", total);

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(){
  cart.length = 0;
}


/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
  const total = cartTotal();
  const change = amount - total;
  return change;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
