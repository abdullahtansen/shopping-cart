function caseInputField(isIncrease){
    const caseInputField = document.getElementById('case-number');
    const caseInputString = caseInputField.value;
    const caseInput = parseInt(caseInputString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = caseInput + 1;
    }
    else{
        newCaseNumber = caseInput - 1;
    }
    caseInputField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber =  caseInputField(true);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
  
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber = caseInputField(false);
 updateCaseTotalPrice(newCaseNumber);
 calculateSubTotal();
})