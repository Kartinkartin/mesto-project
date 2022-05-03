const page = document.querySelector('.page');

function showInputError(formElement, inputElement, errorMessage, selectors) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorMessageClass);
}
  
function hideInputError(formElement, inputElement,selectors) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.classList.remove(selectors.errorMessageClass);
    errorElement.textContent = '';
}
  
function checkInputValidity(formElement, inputElement, selectors) {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
    }
    if(inputElement.validity.valid) {
        hideInputError(formElement, inputElement, selectors);
    }
}
  
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}
  
function toggleButtonState(inputList, buttonElement, selectors) {
    // buttonElement.textContent = 'Сохранить';
    if(hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', 'disabled');
      buttonElement.classList.add(selectors.buttonDisabledClass);
    } else {
      buttonElement.classList.remove(selectors.buttonDisabledClass);
      buttonElement.removeAttribute('disabled');
    }
}
  
function setEventListener(formElement, selectors) {
    const inputList = Array.from(formElement.querySelectorAll(selectors.input));
    const buttonElement = formElement.querySelector(selectors.button);
    toggleButtonState(inputList, buttonElement, selectors);
    inputList.forEach( (inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement, selectors);
            toggleButtonState(inputList, buttonElement, selectors);
        })
    })
}
  
function enableValidation(selectors) {
    const formList = Array.from(page.querySelectorAll(selectors.form));
    formList.forEach( (formElement) => {
      formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
      })
      const fieldsetList = Array.from(formElement.querySelectorAll(selectors.fieldset));
      fieldsetList.forEach( (fieldsetElement) => {
        setEventListener(fieldsetElement, selectors);
      })
    })
}

export {enableValidation}