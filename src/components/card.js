const cardTemplate = document.querySelector('#card-element').content;
const cardsContainer = document.querySelector('.cards__list');
const popupPlaceForm = document.querySelector('.popup.place');
const namePlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-name]');
const linkPlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-link]');

import {closePopup, createPicturePopup} from './modal.js';

function createCard(imageTitle, imageLink){
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.cards__image');
    cardImage.src = imageLink;
    cardImage.alt = imageTitle;
    cardElement.querySelector('.cards__title').textContent = imageTitle;
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

function createCardsList(array) {
    array.forEach(function(item) {
      addCardLast(item.name, item.link);
    });
}

function submitNewPlace (evt) {
    evt.preventDefault();
    const namePlace = namePlaceInput.value;
    const linkPlace = linkPlaceInput.value;
    addCardFirst(namePlace, linkPlace);
    closePopup(popupPlaceForm);
    namePlaceInput.value = '';
    linkPlaceInput.value = '';
}

cardsContainer.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('cards__button-like')){
        evt.target.classList.toggle('cards__button-like_active');
    }
    if(evt.target.classList.contains('cards__button-delete')){
        evt.target.parentElement.remove();
    }
})

export {createCardsList, submitNewPlace}