const cardTemplate = document.querySelector('#card-element').content;
const cardsContainer = document.querySelector('.cards__list');
const popupPlaceForm = document.querySelector('.popup.place');
const namePlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-name]');
const linkPlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-link]');

import {closePopup, openPicturePopup} from './modal.js';

function createCard(imageTitle, imageLink){
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.cards__image');
    const cardLikeButton = cardElement.querySelector('.cards__button-like');
    const cardDeleteButton = cardElement.querySelector('.cards__button-delete');
    cardImage.src = imageLink;
    cardImage.alt = imageTitle;
    cardElement.querySelector('.cards__title').textContent = imageTitle;
    cardImage.addEventListener('click', (evt) => { 
        openPicturePopup(imageTitle, imageLink);
        evt.stopPropagation();
    })
    cardLikeButton.addEventListener('click', () => {
        cardLikeButton.classList.toggle('cards__button-like_active');
    })
    cardDeleteButton.addEventListener('click', () => {
        cardDeleteButton.closest('li').remove();
    })
    return cardElement;
}
function addCardLast(imageTitle, imageLink) {
    cardsContainer.append(createCard(imageTitle, imageLink));
}
function addCardFirst(imageTitle, imageLink) {
    cardsContainer.prepend(createCard(imageTitle, imageLink));
}

function createCardsList(array) {
    array.forEach((item) => {
      addCardLast(item.name, item.link);
    });
}

function submitNewPlace (evt) {
    evt.preventDefault();
    const namePlace = namePlaceInput.value;
    const linkPlace = linkPlaceInput.value;
    const submitButton = evt.target.querySelector('.form-popup__button');
    addCardFirst(namePlace, linkPlace);
    closePopup(popupPlaceForm);
    evt.target.reset();
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.classList.add('form-popup__button_inactive');
}

export {createCardsList, submitNewPlace}