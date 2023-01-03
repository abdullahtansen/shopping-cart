function phoneInputField(isInCrease){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputFieldString = phoneInputField.value;
    const phoneInputValue = parseInt(phoneInputFieldString);

    let newPhoneNumber;
    if(isInCrease === true){
        newPhoneNumber = phoneInputValue + 1;
    }else{
        newPhoneNumber = phoneInputValue - 1;
    }
    phoneInputField.value = newPhoneNumber;
    return newPhoneNumber;

}
function updateTotalCost(newPhoneNumber){
    const totalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = totalPrice;
}

document.getElementById('phone-plus-btn').addEventListener('click',function(){
  const newPhoneNumber =   phoneInputField(true);
  updateTotalCost(newPhoneNumber);
  calculateSubTotal();
});
document.getElementById('phone-minus-btn').addEventListener('click',function(){
  const newPhoneNumber = phoneInputField(false);
  updateTotalCost(newPhoneNumber);
  calculateSubTotal();
});
