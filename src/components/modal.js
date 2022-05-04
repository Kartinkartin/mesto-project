const page = document.querySelector('.page');
const popupPicture = document.querySelector('.popup.picture');
const descriptionPicture = popupPicture.querySelector('.popup__picture-description');
const imagePicture = popupPicture.querySelector('.popup__picture');

function submitButtonOnLoading (popup) {
    const submitButton = popup.querySelector('.form-popup__button');
    if(popup.classList.contains('popup_opened')) {
      submitButton.setAttribute('disabled', 'disabled');
      submitButton.textContent = 'Сохранение...';
      submitButton.classList.add('form-popup__button_inactive');
      return;
    }
    submitButton.classList.remove('form-popup__button_inactive');
    submitButton.textContent = 'Сохранить';
    submitButton.removeAttribute('disabled', 'disabled');
    return;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    page.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
    page.removeEventListener('keydown', closePopupByEsc);
    popup.classList.remove('popup_opened');    
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

export { openPopup, closePopup, openPicturePopup,submitButtonOnLoading }