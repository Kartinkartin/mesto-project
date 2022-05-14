import Api from '../components/api copy.js';

export const popupSelectors = {
    form: '.form-popup',
    fieldset: '.form-popup__input',
    input: '.form-popup__item',
    button: '.form-popup__button',
    buttonDisabledClass: 'form-popup__button_inactive',
    inputErrorClass: 'form-popup__item_type_error',
    errorMessageClass: 'form-popup__item-error_active',
}
export const popups = document.querySelectorAll('.popup');
export const profileName = document.querySelector('.profile__name');
export const profileRole = document.querySelector('.profile__role');
export const profileImage = document.querySelector('.profile__photo');
export const profileImageShield = document.querySelector('.profile__photo.profile__photo-shield');
export const popupProfile = document.querySelector('.popup.profile');
export const nameInput = popupProfile.querySelector('fieldset.form-popup__input input[name=name]');
export const jobInput = popupProfile.querySelector('fieldset.form-popup__input input[name=role]');
export const popupAvatar = document.querySelector('.popup.avatar');
export const avatarInput = popupAvatar.querySelector('fieldset.form-popup__input input[name=avatar-link]');
export const editButton = document.querySelector('.profile__button-edit');
export const addPlaceButton = document.querySelector('.profile__button-plus');
export const popupPlaceForm = document.querySelector('.popup.place');
export const allFetches = new Api();