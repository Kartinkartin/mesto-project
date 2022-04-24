const page = document.querySelector('.page');
const popupPicture = document.querySelector('.popup.picture');
const descriptionPicture = popupPicture.querySelector('.popup__picture-description');
const imagePicture = popupPicture.querySelector('.popup__picture');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    page.addEventListener('keydown', closePopupByEsc);
    //page.addEventListener('mousedown', closePopupByOverlay);
}

function closePopup(popup) {
    page.removeEventListener('keydown', closePopupByEsc);
    //page.removeEventListener('mousedown', closePopupByOverlay);
    popup.classList.remove('popup_opened');
}

// function closePopupByOverlay(evt) {
//     if(evt.target.classList.contains('popup')) {
//         closePopup(evt.target);
//     }
// }


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