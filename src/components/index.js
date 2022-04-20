const popupSelectors = {
  form: '.form-popup',
  fieldset: '.form-popup__input',
  input: '.form-popup__item',
  button: '.form-popup__button',
}
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const popupProfile = document.querySelector('.popup.profile');
const nameInput = popupProfile.querySelector('fieldset.form-popup__input input[name=name]');
const jobInput = popupProfile.querySelector('fieldset.form-popup__input input[name=role]');
const editButton = document.querySelector('.profile__button-edit');
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupPlaceForm = document.querySelector('.popup.place');
const closePopupPlaceButton = popupPlaceForm.querySelector('.popup__button-close');
const closeButton = popupProfile.querySelector('.popup__button-close');
const popupPicture = document.querySelector('.popup.picture');
const closePopupPictureButton = popupPicture.querySelector('.popup__button-close');

 
import {openPopup, closePopup} from './modal.js';
import {createCardsList, submitNewPlace} from './card.js';
import {enableValidation} from './validate.js';


//тут про Popup-profile
editButton.addEventListener('click', function() {
                                      openPopup(popupProfile);
                                      nameInput.value = profileName.textContent;
                                      jobInput.value = profileRole.textContent;
                                    });
closeButton.addEventListener('click', function() {closePopup(popupProfile)});

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
addPlaceButton.addEventListener('click', function() {openPopup(popupPlaceForm)});
closePopupPlaceButton.addEventListener('click', function() {closePopup(popupPlaceForm)});
popupPlaceForm.addEventListener('submit', submitNewPlace);

//закрытие Popup с фотографией
closePopupPictureButton.addEventListener('click', function() { closePopup(popupPicture) });

//валидация форм
enableValidation(popupSelectors);