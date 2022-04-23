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
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const popupProfile = document.querySelector('.popup.profile');
const nameInput = popupProfile.querySelector('fieldset.form-popup__input input[name=name]');
const jobInput = popupProfile.querySelector('fieldset.form-popup__input input[name=role]');
const editButton = document.querySelector('.profile__button-edit');
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupPlaceForm = document.querySelector('.popup.place');
const closeButtons = document.querySelectorAll('.popup__button-close');

 
import {openPopup, closePopup, closePopupByOverlay} from './components/modal.js';
import {createCardsList, submitNewPlace} from './components/card.js';
import {enableValidation} from './components/validate.js';


//тут про Popup-profile
editButton.addEventListener('click', (evt) => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileRole.textContent;
  evt.stopPropagation();
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
document.addEventListener('click', (evt) => {closePopupByOverlay(evt)});

//изменение данных профиля
function submitInfoProfile (evt) {
  evt.preventDefault(); 
  const newName = nameInput.value;
  const newRole = jobInput.value;
  profileName.textContent = newName;
  profileRole.textContent = newRole;
  closePopup(popupProfile);
}
popupProfile.addEventListener('submit', submitInfoProfile);

//про добавление карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

createCardsList(initialCards);

//тут про Popup-new-Place
addPlaceButton.addEventListener('click', (evt) => {
  openPopup(popupPlaceForm);
  evt.stopPropagation();
});
popupPlaceForm.addEventListener('submit', submitNewPlace);

//валидация форм
enableValidation(popupSelectors);