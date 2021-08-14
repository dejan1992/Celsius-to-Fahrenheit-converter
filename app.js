const inputC = document.getElementById('inputC');
const inputF = document.getElementById('inputF');
const btn = document.getElementById('btn');
const symbolC = document.getElementById('symbol-C');
const symbolF = document.getElementById('symbol-F');
const changeCalculationBtn = document.getElementById("change-calculation");

//Event listener
btn.addEventListener('click', calculate);
changeCalculationBtn.addEventListener('click', changeCalculation);

//Funcions
function changeCalculation() {
  if (symbolC.innerText[0] == 'C') {
    symbolC.innerHTML = '<span>F&deg;</span>';
    symbolF.innerHTML = '<span>C&deg;</span>';
    inputC.value = '';
    inputF.value = '';
  } else {
    symbolC.innerHTML = '<span>C&deg;</span>';
    symbolF.innerHTML = '<span>F&deg;</span>';
    inputC.value = '';
    inputF.value = '';
  }
}

function calculate() {
  if (inputC.value === '') {
    inputC.placeholder = 'You must input number'
    symbolC.style.backgroundColor = 'red';
    symbolC.style.color = 'white';
    setTimeout(alertF, 2000);

  } else {
    if (symbolC.innerText[0] == 'C') {
      let valueC = inputC.value;
      let valueF = ((valueC * 9 / 5) + 32).toFixed(1);
      inputF.value = valueF;
    }
    else {
      let valueC = inputC.value;
      let valueF = ((valueC - 32) * 5 / 9).toFixed(1);
      inputF.value = valueF;
    }

  }

  // //Return values after error
  function alertF() {
    symbolC.style.backgroundColor = '#e9ecef';
    symbolC.style.color = '#212529';
    inputC.placeholder = 'Input number'
  }
}








