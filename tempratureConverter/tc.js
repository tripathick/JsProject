let celsius = document.getElementById('celsius');
let farenheit = document.getElementById('farenheit');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) *9) / 5 + 32;
    farenheit.value = parseFloat(output.toFixed(2));
}

farenheit.oninput = () => {
    let output = (parseFloat(farenheit.value) *5) / 9 - 32;
    celsius.value = parseFloat(output.toFixed(2));
}