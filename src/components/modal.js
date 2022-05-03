const page = document.querySelector('.page');
const popupPicture = document.querySelector('.popup.picture');
const descriptionPicture = popupPicture.querySelector('.popup__picture-description');
const imagePicture = popupPicture.querySelector('.popup__picture');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    page.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
    page.removeEventListener('keydown', closePopupByEsc);
    popup.classList.remove('popup_opened');
    const submitButton = popup.querySelector('.form-popup__button');
    if (submitButton) {
        setTimeout(()=>{submitButton.classList.add('form-popup__button_inactive')}, 0)
    }
    
}

function closePopupByEsc(evt) {
    if(evt.key === 'Escape') {
        const openedPopup = page.querySelector('.popup_opened')
        if(openedPopup) {
            closePopup(openedPopup);
        }
    }
}

function openPicturePopup(title, link) {
    descriptionPicture.textContent = title;
    imagePicture.setAttribute('src', `${link}`);
    imagePicture.setAttribute('alt', `${title}`);
    openPopup(popupPicture);
}

export { openPopup, closePopup, openPicturePopup }