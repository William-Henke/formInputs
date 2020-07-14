let text = document.getElementById('outputText');
let number = document.getElementById('outputNumber');
let password = document.getElementById('outputPassword');
let date = document.getElementById('outputDate');

let input = document.getElementById('form');
input.addEventListener('submit', printInformation);

function printInformation() {
    event.preventDefault();
    outputText.innerHTML = event.target.text.value;
    outputNumber.innerHTML = event.target.number.value;
    outputPassword.innerHTML = event.target.password.value;
    outputDate.innerHTML = event.target.date.value;
    document.getElementById('confirmation').style.display = "block";
    document.getElementById('congrats').style.display = "block";
    document.getElementById('image').style.display = "block";
}

// event.target.input.value;