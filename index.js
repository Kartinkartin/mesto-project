const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const popupProfile = document.querySelector('.popup.profile');
const nameInput = popupProfile.querySelector('fieldset.form-popup__input input[name=name]');
const jobInput = popupProfile.querySelector('fieldset.form-popup__input input[name=role]');
const editButton = document.querySelector('.profile__button-edit');
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupPlaceForm = document.querySelector('.popup.place');
const closePopupPlaceButton = popupPlaceForm.querySelector('.popup__button-close');
const namePlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-name]');
const linkPlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-link]');
const closeButton = popupProfile.querySelector('.popup__button-close');
const popupPicture = document.querySelector('.popup.picture');
const closePopupPictureButton = popupPicture.querySelector('.popup__button-close');

const descriptionPicture = popupPicture.querySelector('.popup__picture-description');
const imagePicture = popupPicture.querySelector('.popup__picture');
const cardTemplate = document.querySelector('#card-element').content;
const cardsContainer = document.querySelector('.cards__list'); 

function openPopup(obj) {
  obj.classList.toggle('popup_opened');
}

function closePopup(obj) {
  obj.classList.toggle('popup_opened');
}

function createPicturePopup(obj) {
  descriptionPicture.textContent = obj.closest('li').querySelector('.cards__title').textContent;
  imagePicture.setAttribute('src', `${obj.src}`);
  imagePicture.setAttribute('alt', `${descriptionPicture.textContent}`);
  openPopup(popupPicture);
}

function createCard(imageTitle, imageLink){
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.cards__image');
  const cardLikeButton = cardElement.querySelector('.cards__button-like');
  const cardDeleteButton = cardElement.querySelector('.cards__button-delete');
  cardImage.src = imageLink;
  cardImage.alt = imageTitle;
  cardElement.querySelector('.cards__title').textContent = imageTitle;
  cardLikeButton.addEventListener('click', function(event){
    event.target.classList.toggle('cards__button-like_active');
  })
  cardDeleteButton.addEventListener('click', function(event) {
    event.target.closest('li').remove();
  })
  cardImage.addEventListener('click', function(event) { 
    createPicturePopup(event.target);
  })
  return cardElement;
}
function addCardLast(imageTitle, imageLink) {
  cardsContainer.append(createCard(imageTitle, imageLink));
}
function addCardFirst(imageTitle, imageLink) {
  cardsContainer.prepend(createCard(imageTitle, imageLink));
}

//тут все про Popup-profile
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
function cardsList(array) {
array.forEach(function(item) {
  addCardLast(item.name, item.link);
});
}
cardsList(initialCards);

//тут про Popup-new-Place
addPlaceButton.addEventListener('click', function() {openPopup(popupPlaceForm)});
closePopupPlaceButton.addEventListener('click', function() {closePopup(popupPlaceForm)});
//добавление новой карточки
function submitNewPlace (evt) {
evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
const namePlace = namePlaceInput.value;
const linkPlace = linkPlaceInput.value;
addCardFirst(namePlace, linkPlace);
closePopup(popupPlaceForm);
namePlaceInput.value = '';
linkPlaceInput.value = '';
}
popupPlaceForm.addEventListener('submit', submitNewPlace);

//закрытие Popup с фотографией
closePopupPictureButton.addEventListener('click', function() { closePopup(popupPicture) });