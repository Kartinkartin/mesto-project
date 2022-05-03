import './pages/index.css'; // добавьте импорт главного файла стилей

const popupSelectors = {
  form: '.form-popup',
  fieldset: '.form-popup__input',
  input: '.form-popup__item',
  button: '.form-popup__button',
  buttonDisabledClass: 'form-popup__button_inactive',
  inputErrorClass: 'form-popup__item_type_error',
  errorMessageClass: 'form-popup__item-error_active',
}
const popups = document.querySelectorAll('.popup');
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const profileImage = document.querySelector('.profile__photo');
const profileImageShield = document.querySelector('.profile__photo.profile__photo-shield');
const popupProfile = document.querySelector('.popup.profile');
const nameInput = popupProfile.querySelector('fieldset.form-popup__input input[name=name]');
const jobInput = popupProfile.querySelector('fieldset.form-popup__input input[name=role]');
const popupAvatar = document.querySelector('.popup.avatar');
const avatarInput = popupAvatar.querySelector('fieldset.form-popup__input input[name=avatar-link]');
const editButton = document.querySelector('.profile__button-edit');
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupPlaceForm = document.querySelector('.popup.place');
export const meUserProperties = {};
 
import {openPopup, closePopup} from './components/modal.js';
import {createCardsList, submitNewPlace} from './components/card.js';
import {enableValidation} from './components/validate.js';
import {getUser, getINitialCards, patchUser, patchAvatar} from './api.js' //fetch

function submitButtonOnLoading (popup) {
  const submitButton = popup.querySelector('.form-popup__button');
  if(popup.classList.contains('popup_opened')) {
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.textContent = 'Сохранение...';
    submitButton.classList.add('form-popup__button_inactive');
    return;
  }
  submitButton.classList.remove('form-popup__button_inactive');
  submitButton.textContent = 'Сохранить';
  submitButton.removeAttribute('disabled', 'disabled');
  return;
}

function submitInfoProfile(evt) {
  evt.preventDefault();
  const newName = nameInput.value;
  const newRole = jobInput.value;
  submitButtonOnLoading(popupProfile);
  patchUser(newName, newRole)
  .then(newUser => {
    profileName.textContent = newUser.name;
    profileRole.textContent = newUser.about;
    closePopup(popupProfile);
    return Promise.resolve(1000);
  })
  .then((time) => {
    setTimeout(() => {submitButtonOnLoading(popupProfile)}, time);
  })
}

function submitAvatar(evt) {
  evt.preventDefault();
  submitButtonOnLoading(popupAvatar);
  patchAvatar(avatarInput.value)
  .then(profileImage.src = avatarInput.value)
  .then(() => {
    closePopup(popupAvatar);
    return Promise.resolve(1000);
  })
  .then((time) => {
    setTimeout(() => {submitButtonOnLoading(popupAvatar)}, time);
  })
}

//получение данных пользователя
getUser()
  .then(user => {
    profileName.textContent = user.name;
    profileRole.textContent = user.about;
    profileImage.alt = user.name;
    profileImage.src = `${user.avatar}`;
    meUserProperties.id = user._id
  })
//тут про Popup-profile и изменение данных пользователя
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileRole.textContent;
  openPopup(popupProfile);
});
popupProfile.addEventListener('submit', submitInfoProfile);
profileImageShield.addEventListener('click', () => {openPopup(popupAvatar)});
popupAvatar.addEventListener('submit', submitAvatar)
//закрытие по всем крестикам по всем оверлеям
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
})})

//добавление карточек из массива с сервера
getINitialCards()
  .then((initialCardsArray) => { createCardsList(initialCardsArray) })
  .catch(err => { document.querySelector('.cards').textContent = err });

//тут про Popup-new-Place
addPlaceButton.addEventListener('click', () => {
  openPopup(popupPlaceForm);
});
popupPlaceForm.addEventListener('submit', submitNewPlace);

//валидация форм
enableValidation(popupSelectors);