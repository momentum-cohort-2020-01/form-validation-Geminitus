console.log('Add validation!')
const form1 = document.querySelector('#parking-form')
const currentTime = moment()

form1.addEventListener('submit', function (e) {
  e.preventDefault()
  const nameInput = document.querySelector('#name')
  const name = nameInput.value
  const nameParent = nameInput.parentNode
  const nameRequired = document.querySelector('.name-required')
  if (name !== '') {
    nameParent.classList.remove('input-invalid')
    nameParent.classList.add('input-valid')
  } else {
    nameParent.classList.remove('input-valid')
    nameParent.classList.add('input-invalid')
    nameParent.classList.add('text-danger')
    nameRequired.innerText = 'Name is required.'
  }
  const carYearInput = document.querySelector('#car-year')
  const carMakeInput = document.querySelector('#car-make')
  const carModelInput = document.querySelector('#car-model')
  const carRequired = document.querySelector('.car-required')
  const carYear = carYearInput.value
  const carMake = carMakeInput.value
  const carModel = carModelInput.value
  const carParent = carYearInput.parentNode
  const carGramps = carParent.parentNode

  if ((carYear > 1900 && moment(carYear).isBefore(currentTime)) && carMake !== '' && carModel !== '') {
    carParent.classList.remove('input-invalid')
    carParent.classList.add('input-valid')
    carGramps.classList.remove('input-invalid')
    carGramps.classList.add('input-valid')
  } else {
    carParent.classList.add('input-invalid')
    carParent.classList.remove('input-valid')
    carGramps.classList.add('input-invalid')
    carGramps.classList.remove('input-valid')
    carGramps.classList.add('text-danger')
    carRequired.innerText = 'Car Year/Make/Model is required.'
  }
  const startDateInput = document.querySelector('#start-date')
  const startDate = startDateInput.value
  const startDateParent = startDateInput.parentNode
  const dateRequired = document.querySelector('.date-required')

  if (moment(startDate).isAfter(currentTime)) {
    startDateParent.classList.remove('input-invalid')
    startDateParent.classList.add('input-valid')
  } else {
    startDateParent.classList.add('input-invalid')
    startDateParent.classList.remove('input-valid')
    startDateParent.classList.add('text-danger')
    dateRequired.innerText = 'Start Date is required.'
  }
  const daysInput = document.querySelector('#days')
  const days = daysInput.value
  const daysParent = document.querySelector('#days-field')
  const daysRequired = document.querySelector('.days-required')
  if (days > 0 && days < 30) {
    daysParent.classList.remove('input-invalid')
    daysParent.classList.add('input-valid')
  } else {
    daysParent.classList.add('input-invalid')
    daysParent.classList.remove('input-valid')
    daysParent.classList.add('text-danger')
    daysRequired.innerText = 'Number of days parking is required.'
  }
  const creditCardInput = document.querySelector('#credit-card')
  const creditCard = creditCardInput.value
  const creditCardParent = creditCardInput.parentNode
  const creditRequired = document.querySelector('.credit-required')

  if (validateCardNumber(creditCard) == true) {
    creditCardParent.classList.remove('input-invalid')
    creditCardParent.classList.add('input-valid')
  } else {
    creditCardParent.classList.add('input-invalid')
    creditCardParent.classList.remove('input-valid')
    creditCardParent.classList.add('text-danger')
    creditRequired.innerText = 'Credit Card Number is required.'
  }
  const cvvInput = document.querySelector('#cvv')
  const cvv = cvvInput.value
  const cvvParent = cvvInput.parentNode
  const cvvRequired = document.querySelector('.cvv-required')
  if (cvv.length === 3) {
    cvvParent.classList.remove('input-invalid')
    cvvParent.classList.add('input-valid')
  } else {
    cvvParent.classList.add('input-invalid')
    cvvParent.classList.remove('input-valid')
    cvvParent.classList.add('text-danger')
    cvvRequired.innerText = 'CVV is required.'
  }
  const expInput = document.querySelector('#expiration')
  const exp = expInput.value
  const expParent = expInput.parentNode
  const expRequired = document.querySelector('.exp-required')
  const month = exp.slice(0, 2)
  const year = exp.slice(2)
  const expDate = '20' + year + '-' + month + '-01'

  if (moment(expDate).isAfter(currentTime)) {
    expParent.classList.remove('input-invalid')
    expParent.classList.add('input-valid')
  } else {
    expParent.classList.add('input-invalid')
    expParent.classList.remove('input-valid')
    expParent.classList.add('text-danger')
    expRequired.innerText = 'Expiration Date is required.'
  }
  const inputFields = document.querySelectorAll('.input-field')
  const total = document.querySelector('#total')
  const cost = calcCost(startDate, days)
  function calcCost (date, days) {
    let dur = moment(date)
    let sum = 0
    while (days > 0) {
      if (dur.weekday() == 0 || dur.weekday() == 6) {
        sum += 7
        days -= 1
        dur = dur.add('days', 1)
      } else {
        sum += 5
        days -= 1
        dur = dur.add('days', 1)
      }
    }
    return sum
  }
  function validateCardNumber (number) {
    var regex = new RegExp('^[0-9]{16}$')
    if (!regex.test(number)) { return false }

    return luhnCheck(number)
  }
  function luhnCheck (val) {
    var sum = 0
    for (var i = 0; i < val.length; i++) {
      var intVal = parseInt(val.substr(i, 1))
      if (i % 2 == 0) {
        intVal *= 2
        if (intVal > 9) {
          intVal = 1 + (intVal % 10)
        }
      }
      sum += intVal
    }
    return (sum % 10) == 0
  }
  for (const all of inputFields) {
    const inputParentClasses = all.className
    if (inputParentClasses !== 'input-field input-invalid text-danger') {
      total.innerHTML = '$ ' + cost
    } else {
      total.innerHTML = ''
      return
    }
  }
})
