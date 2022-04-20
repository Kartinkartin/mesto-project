const page = document.querySelector('.page');

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form-popup__item_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form-popup__item-error_active');
}
  
function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form-popup__item_type_error');
    errorElement.classList.remove('form-popup__item-error_active');
    errorElement.textContent = '';
}
  
function checkInputValidity(formElement, inputElement) {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    if(inputElement.validity.valid) {
        hideInputError(formElement, inputElement);
    }
}
  
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}
  
function toggleButtonState(inputList, buttonElement) {
    if(hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', 'disabled');
      buttonElement.classList.add('form-popup__button_inactive');
    } else {
      buttonElement.classList.remove('form-popup__button_inactive');
      buttonElement.removeAttribute('disabled');
    }
}
  
function setEventListener(formElement, selectors) {
    const inputList = Array.from(formElement.querySelectorAll(selectors.input));
    const buttonElement = formElement.querySelector(selectors.button);
    debugger;
    toggleButtonState(inputList, buttonElement);
    inputList.forEach( (inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
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