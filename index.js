<<<<<<< HEAD
function openCLosePopup(obj) {
    obj.classList.toggle('popup_opened');
}

function createPicturePopup(obj) {
  const popupPicture = document.querySelector('.popup.picture');
  const descriptionInput = popupPicture.querySelector('.popup__picture-description');
  descriptionInput.textContent = obj.closest('li').querySelector('.cards__title').textContent;
  const pictureImage = popupPicture.querySelector('.popup__picture');
  pictureImage.setAttribute('src', `${obj.src}`);
  pictureImage.setAttribute('alt', `${descriptionInput.textContent}`);
  const closePopupPictureButton = popupPicture.querySelector('.popup__button-close');
  closePopupPictureButton.addEventListener('click', function() { openCLosePopup(popupPicture) });
  return popupPicture;
}

function createCard(imageTitle, imageLink){
  const cardTemplate = document.querySelector('#card-element').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__image').src = imageLink;
  cardElement.querySelector('.cards__image').alt = imageTitle;
  cardElement.querySelector('.cards__title').textContent = imageTitle;
  cardElement.querySelector('.cards__button-like').addEventListener('click', function(event){
    event.target.classList.toggle('cards__button-like_active');
  })
  cardElement.querySelector('.cards__button-delete').addEventListener('click', function(event) {
    event.target.closest('li').remove();
  })
  cardElement.querySelector('.cards__image').addEventListener('click', function(event) { 
    openCLosePopup(createPicturePopup(event.target));
=======
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
  /////
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
>>>>>>> hotfixes
  })
  return cardElement;
}
function addCardLast(imageTitle, imageLink) {
<<<<<<< HEAD
  const cardsContainer = document.querySelector('.cards__list');
  cardsContainer.append(createCard(imageTitle, imageLink));
}
function addCardFirst(imageTitle, imageLink) {
  const cardsContainer = document.querySelector('.cards__list');
=======
  cardsContainer.append(createCard(imageTitle, imageLink));
}
function addCardFirst(imageTitle, imageLink) {
>>>>>>> hotfixes
  cardsContainer.prepend(createCard(imageTitle, imageLink));
}

//тут все про Popup-profile
<<<<<<< HEAD
const editButton = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');
editButton.addEventListener('click', function() {openCLosePopup(popupProfile)});
closeButton.addEventListener('click', function() {openCLosePopup(popupProfile)});
const nameInput = popupProfile.querySelector('fieldset.form-popup__input input[name=name]');
const jobInput = popupProfile.querySelector('fieldset.form-popup__input input[name=role]');
nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__role').textContent;
//изменение данных профиля
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  const newName = nameInput.value;
  const newRole = jobInput.value;
  const profileName = document.querySelector('.profile__name');
  const profileRole = document.querySelector('.profile__role');
  profileName.textContent = newName;
  profileRole.textContent = newRole;
  openCLosePopup(popupProfile);
}
popupProfile.addEventListener('submit', formSubmitHandler);

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
=======
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
>>>>>>> hotfixes
}
cardsList(initialCards);

//тут про Popup-new-Place
<<<<<<< HEAD
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupPlaceForm = document.querySelector('.popup.place');
const closePopupPlaceButton = popupPlaceForm.querySelector('.popup__button-close');
addPlaceButton.addEventListener('click', function() {openCLosePopup(popupPlaceForm)});
closePopupPlaceButton.addEventListener('click', function() {openCLosePopup(popupPlaceForm)});
//добавление новой карточки
const namePlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-name]');
const linkPlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-link]');
function placeSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const namePlace = namePlaceInput.value;
  const linkPlace = linkPlaceInput.value;
  addCardFirst(namePlace, linkPlace);
  openCLosePopup(popupPlaceForm);
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
}
popupPlaceForm.addEventListener('submit', placeSubmitHandler);
=======
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
>>>>>>> hotfixes
