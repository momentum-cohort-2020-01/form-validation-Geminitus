console.log('Add validation!');
let form1 = document.querySelector('#parking-form')

form1.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameInput = document.querySelector("#name")
    let name = nameInput.value
    let nameParent = nameInput.parentNode

    if (name !== "") {
        nameParent.classList.remove("input-invalid")
        nameParent.classList.add("input-valid")
    } else {
        nameParent.classList.remove("input-valid")
        nameParent.classList.add("input-invalid")
    }

    let carYearInput = document.querySelector("#car-year")
    let carMakeInput = document.querySelector("#car-make")
    let carModelInput = document.querySelector("#car-model")

    let carYear = carYearInput.value
    let carMake = carMakeInput.value
    let carModel = carModelInput.value

    let carParent = carYearInput.parentNode

    if (carYear !== "" || carMake !== "" || carModel !== "") {
        carParent.classList.remove("input-invalid")
        carParent.classList.add("input-valid")
    } else {
        carParent.classList.add("input-invalid")
        carParent.classList.remove("input-valid")
    }

    let startDateInput = document.querySelector("#start-date")
    let startDate = startDateInput.value
    let startDateParent = startDateInput.parentNode

    if (startDate !== "") {
        startDateParent.classList.remove("input-invalid")
        startDateParent.classList.add("input-valid")
    } else {
        startDateParent.classList.add("input-invalid")
        startDateParent.classList.remove("input-valid")
    }

    let daysInput = document.querySelector("#days");
    let days = daysInput.value;
    let daysParent = document.querySelector("#days-field");

    if (days !== "") {
        daysParent.classList.remove("input-invalid")
        daysParent.classList.add("input-valid")
    } else {
        daysParent.classList.add("input-invalid")
        daysParent.classList.remove("input-valid")
    }

    let creditCardInput = document.querySelector("#credit-card")
    let creditCard = creditCardInput.value
    let creditCardParent = creditCardInput.parentNode

    if (creditCard !== "") {
        creditCardParent.classList.remove("input-invalid")
        creditCardParent.classList.add("input-valid")
    } else {
        creditCardParent.classList.add("input-invalid")
        creditCardParent.classList.remove("input-valid")
    }

    let cvvInput = document.querySelector("#cvv")
    let cvv = cvvInput.value
    let cvvParent = cvvInput.parentNode

    if (cvv !== "") {
        cvvParent.classList.remove("input-invalid")
        cvvParent.classList.add("input-valid")
    } else {
        cvvParent.classList.add("input-invalid")
        cvvParent.classList.remove("input-valid")
    }

    let expInput = document.querySelector("#expiration")
    let exp = expInput.value
    let expParent = expInput.parentNode

    if (exp !== "") {
        expParent.classList.remove("input-invalid")
        expParent.classList.add("input-valid")
    } else {
        expParent.classList.add("input-invalid")
        expParent.classList.remove("input-valid")
    }
})