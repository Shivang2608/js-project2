const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please provide a valid weight.";
    } else {
        const BMI = (weight / (height * height / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${BMI}</span>`;
    }
});
