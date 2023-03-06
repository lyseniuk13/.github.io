function convert() {
    let euro = document.getElementById("euro").value;
    let gc = document.getElementById("gc").value;
    let resultElement = document.getElementById("result");
    let rate = 0.0001;
    let result;
    
    if (euro !== "") {
      result = euro * rate;
      resultElement.innerHTML = `Результат: ${result} GC`;
    } else if (gc !== "") {
      result = gc / rate;
      resultElement.innerHTML = `Результат: ${result.toFixed(2)} EURO`;
    } else {
      resultElement.innerHTML = "Будь ласка, введіть значення для конвертації.";
    }
  }
  