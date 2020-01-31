console.log('Add validation!');
let form1 = document.querySelector('#parking-form')

form1.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameInput = document.querySelector("#name")
    let name = nameInput.value
    let nameParent = nameInput.parentNode
    let nameRequired = document.querySelector(".name-required")

    if (name !== "") {
        nameParent.classList.remove("input-invalid")
        nameParent.classList.add("input-valid")
    } else {
        nameParent.classList.remove("input-valid")
        nameParent.classList.add("input-invalid")
        nameRequired.innerText = "Name is required."
    }

    let carYearInput = document.querySelector("#car-year")
    let carMakeInput = document.querySelector("#car-make")
    let carModelInput = document.querySelector("#car-model")
    let carRequired = document.querySelector(".car-required")

    let carYear = carYearInput.value
    let carMake = carMakeInput.value
    let carModel = carModelInput.value

    let carParent = carYearInput.parentNode
    let carGramps = carParent.parentNode

    if ((carYear > 1900 && carYear < 2020) && carMake !== "" && carModel !== "") {
        carParent.classList.remove("input-invalid")
        carParent.classList.add("input-valid")
        carGramps.classList.remove("input-invalid")
        carGramps.classList.add("input-valid")
    } else {
        carParent.classList.add("input-invalid")
        carParent.classList.remove("input-valid")
        carGramps.classList.add("input-invalid")
        carGramps.classList.remove("input-valid")
        carRequired.innerText = "Car Year/Make/Model is required."
    }

    let startDateInput = document.querySelector("#start-date")
    let startDate = startDateInput.value
    let startDateParent = startDateInput.parentNode
    let dateRequired = document.querySelector(".date-required")

    if (startDate !== "") {
        startDateParent.classList.remove("input-invalid")
        startDateParent.classList.add("input-valid")
    } else {
        startDateParent.classList.add("input-invalid")
        startDateParent.classList.remove("input-valid")
        dateRequired.innerText = "Start Date is required."
    }

    let daysInput = document.querySelector("#days");
    let days = daysInput.value;
    let daysParent = document.querySelector("#days-field");
    let daysRequired = document.querySelector(".days-required")

    if (days > 0 && days < 30) {
        daysParent.classList.remove("input-invalid")
        daysParent.classList.add("input-valid")
    } else {
        daysParent.classList.add("input-invalid")
        daysParent.classList.remove("input-valid")
        daysRequired.innerText = "Number of days parking is required."
    }

    let creditCardInput = document.querySelector("#credit-card")
    let creditCard = creditCardInput.value
    let creditCardParent = creditCardInput.parentNode
    let creditRequired = document.querySelector(".credit-required")

    if (creditCard !== "") {
        creditCardParent.classList.remove("input-invalid")
        creditCardParent.classList.add("input-valid")
    } else {
        creditCardParent.classList.add("input-invalid")
        creditCardParent.classList.remove("input-valid")
        creditRequired.innerText = "Credit Card Number is required."
    }

    let cvvInput = document.querySelector("#cvv")
    let cvv = cvvInput.value
    let cvvParent = cvvInput.parentNode
    let cvvRequired = document.querySelector(".cvv-required")

    if (cvv !== "") {
        cvvParent.classList.remove("input-invalid")
        cvvParent.classList.add("input-valid")
    } else {
        cvvParent.classList.add("input-invalid")
        cvvParent.classList.remove("input-valid")
        cvvRequired.innerText = "CVV is required."
    }

    let expInput = document.querySelector("#expiration")
    let exp = expInput.value
    let expParent = expInput.parentNode
    let expRequired = document.querySelector(".exp-required")

    if (exp !== "") {
        expParent.classList.remove("input-invalid")
        expParent.classList.add("input-valid")
    } else {
        expParent.classList.add("input-invalid")
        expParent.classList.remove("input-valid")
        expRequired.innerText = "Expiration Date is required."
    }
})