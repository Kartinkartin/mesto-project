const cardTemplate = document.querySelector('#card-element').content;
const cardsContainer = document.querySelector('.cards__list');
const popupPlaceForm = document.querySelector('.popup.place');
const namePlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-name]');
const linkPlaceInput = popupPlaceForm.querySelector('fieldset.form-popup__input input[name=new-place-link]');

import { meUserProperties } from '../index.js';
import { postCard, deleteCard, putLikeOnCard, deleteLikeOnCard } from '../api.js';
import {closePopup, openPicturePopup} from './modal.js';

function createCardDeleteButton(cardId){
    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.classList.add('cards__button-delete');
    cardDeleteButton.addEventListener('click', () => {
        deleteCard(cardId)
        .then(cardDeleteButton.closest('li').remove());
    })
    return cardDeleteButton;
}

function createCard(cardProperties){
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.cards__image');
    const cardLikeButton = cardElement.querySelector('.cards__button-like');
    const cardLikeCounter = cardElement.querySelector('.cards__likes-counter');
    if (meUserProperties.id == cardProperties.owner._id) {
        cardElement.append(createCardDeleteButton(cardProperties._id));
    }
    if(cardProperties.likes.length) cardLikeCounter.textContent = cardProperties.likes.length;
    if(cardProperties.likes.some((likeFromUser) => likeFromUser._id == meUserProperties.id)) {
        cardLikeButton.classList.add('cards__button-like_active');
    }
    cardImage.src = cardProperties.link;
    cardImage.alt = cardProperties.name;
    cardElement.querySelector('.cards__title').textContent = cardProperties.name;
    cardImage.addEventListener('click', () => { 
        openPicturePopup(cardProperties.name, cardProperties.link);
    })
    cardLikeButton.addEventListener('click', () => {
        if(!cardLikeButton.classList.contains('cards__button-like_active')){
            putLikeOnCard(cardProperties._id)
            .then((newCardProrerties) => {
                cardLikeButton.classList.add('cards__button-like_active');
                return cardLikeCounter.textContent = newCardProrerties.likes.length;
            })
            return;
        }
        if(cardLikeButton.classList.contains('cards__button-like_active')) {
            deleteLikeOnCard(cardProperties._id)
            .then((newCardProrerties) => {
                cardLikeButton.classList.remove('cards__button-like_active');
                return cardLikeCounter.textContent = newCardProrerties.likes.length;
            });
        }
    })
    return cardElement;
}
function addCardLast(cardProperties, userID) {
    cardsContainer.append(createCard(cardProperties, userID));
}
function addCardFirst(cardProperties) {
    cardsContainer.prepend(createCard(cardProperties));
}

function createCardsList(array) {
    array.forEach((cardProperties) => {
      addCardLast(cardProperties);
    });
}

function submitNewPlace (evt) {
    evt.preventDefault();
    const namePlace = namePlaceInput.value;
    const linkPlace = linkPlaceInput.value;
    const submitButton = evt.target.querySelector('.form-popup__button');
    postCard(namePlace, linkPlace)
    .then(addCardFirst(namePlace, linkPlace));
    closePopup(popupPlaceForm);
    evt.target.reset(); //сбрасываю форму
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.classList.add('form-popup__button_inactive');
}

export {createCardsList, submitNewPlace}