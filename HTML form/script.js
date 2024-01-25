function submitForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var sex = document.querySelector('input[name="sex"]:checked') ? document.querySelector('input[name="sex"]:checked').value : '';
    var foodOptions = document.querySelectorAll('input[name="food"]:checked');
    var chosenFoods = [];
    foodOptions.forEach(function (food) {
        chosenFoods.push(food.value);
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    // Display result
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Sex: ${sex}</p>
        <p>Choice of Food: ${chosenFoods.join(', ')}</p>
        <p>State: ${state}</p>
        <p>Country: ${country}</p>
    `;
}
