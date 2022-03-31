if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
   } else {
       ready()
   }

function ready(){
    var removeCartItems = document.getElementsByClassName('remove-btn')
console.log(removeCartItems)
for (var i = 0; i < removeCartItems.length; i++){
    var button = removeCartItems[i]
    button.addEventListener('click', removeCartItem)    
    }
    
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged) 
    }
    
var addToCartButtons = document.getElementsByClassName('btn')
for (var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked) 
    }
}



function removeCartItem(event){
    var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var input =event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('item-title')
    console.log(title)
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('item-price')[0]
        var priceElement = cartRow.getElementsByClassName('cart-subtotal')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('R', ''))
        var quantity = quantityElement.value
        console.log(price * quantity)
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) /100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total
}