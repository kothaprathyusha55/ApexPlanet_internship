function placeOrder() {
    const items = document.querySelectorAll('.item');
    let total = 0;
  
    items.forEach(item => {
      if (item.checked) {
        total += parseFloat(item.value);
      }
    });
  
    if (total > 0) {
        Swal.fire({
            title: 'Order Placed!',
            text: `Your total is ₹${total}. Thank you for your order!`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
          
    } else {
      Swal.fire({
        title: 'No Items Selected',
        text: 'Please select at least one item to order.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
  