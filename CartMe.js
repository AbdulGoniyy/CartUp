let cartQuantity = 0;
    
    function updatedQuantity(updatedValue) {
      console.log(`cartQuantity: ${cartQuantity += updatedValue}`);
    }

    function resetValues() {
      cartQuantity = 0;
      console.log('Cart was reset.');
    console.log(`Cart quantity: ${cartQuantity}`);
    }

    function fullCart(newCartValue) {
      if (cartQuantity + newCartValue > 10) {
    alert('The cart is full');
   }  else {
      updatedQuantity(1);
    }
   
    }