const page = document.querySelector('.page');
const popupPicture = document.querySelector('.popup.picture');
const descriptionPicture = popupPicture.querySelector('.popup__picture-description');
const imagePicture = popupPicture.querySelector('.popup__picture');

function openPopup(obj) {
    obj.classList.add('popup_opened');
    document.querySelector('.popup_opened').addEventListener('click', closePopupByOverlay);
    page.addEventListener('keydown', closePopupByEsc);
}

function closePopup(obj) {
    page.removeEventListener('keydown', closePopupByEsc);
    document.querySelector('.popup_opened').removeEventListener('click', closePopupByOverlay);
    obj.classList.remove('popup_opened');
}

function closePopupByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

function closePopupByEsc(evt) {
    if(evt.key === 'Escape' && page.querySelector('.popup_opened')) {
        let openedPopup = evt.currentTarget.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function createPicturePopup(obj) {
    descriptionPicture.textContent = obj.closest('li').querySelector('.cards__title').textContent;
    imagePicture.setAttribute('src', `${obj.src}`);
    imagePicture.setAttribute('alt', `${descriptionPicture.textContent}`);
    openPopup(popupPicture);
}

export { openPopup, closePopup, closePopupByOverlay, createPicturePopup }