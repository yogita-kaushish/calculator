function appendToDisplay(value){
    document.getElementById("display").value+=value;
 }

 function deleteChar(){
    var display = document.getElementById("display")
    display.value = display.value.slice(0,-1);
 }

 function clearDisplay(){
    document.getElementById("display").value ='';
 }

 function calculate() {
    var display = document.getElementById("display")
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'];
    const key = event.key;
    if (allowedKeys.includes(key)) {
    if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '=') {
      appendToDisplay(key);
    }  else if (key === 'Backspace') {
      deleteChar();
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (key === 'Enter') {
      calculate();
    }
  }
  else{
    event.preventDefault();
  }
  });
