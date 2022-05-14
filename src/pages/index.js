import './index.css'; // добавьте импорт главного файла стилей

import {
  popupSelectors,
  popups,
  profileName,
  profileRole,
  profileImage,
  profileImageShield,
  popupProfile,
  nameInput,
  jobInput,
  popupAvatar,
  avatarInput,
  editButton,
  addPlaceButton,
  popupPlaceForm,
  allFetches
} from '../utils/constants.js'
export const meUserProperties = {};
 
import {openPopup, closePopup, submitButtonOnLoading} from '../components/modal.js';
import {createCardsList, submitNewPlace} from '../components/card.js';
import {enableValidation} from '../components/validate.js';
import Api from '../components/api copy.js' //fetch


function submitInfoProfile(evt) {
  evt.preventDefault();
  const newName = nameInput.value;
  const newRole = jobInput.value;
  const submitButton = evt.target.querySelector('.form-popup__button');
  submitButtonOnLoading(popupProfile);
  allFetches.patchUser(newName, newRole)
    .then(newUser => {
      profileName.textContent = newUser.name;
      profileRole.textContent = newUser.about;
      closePopup(popupProfile);
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(setTimeout(() => {
        return submitButton.textContent = 'Сохранить'
      }, 1000)
    )
}

function submitAvatar(evt) {
  evt.preventDefault();
  const submitButton = evt.target.querySelector('.form-popup__button');
  submitButtonOnLoading(popupAvatar);
  allFetches.patchAvatar(avatarInput.value)
    .then(profileImage.src = avatarInput.value)
    .then(() => {
      closePopup(popupAvatar);
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(setTimeout(() => {
        return submitButton.textContent = 'Сохранить'
      }, 1000)
    )
}

//получение данных пользователя и карточек с сервера


Promise.all([allFetches.getUser(), allFetches.getINitialCards()])
  .then(([user, initialCardsArray]) => {
    profileName.textContent = user.name;
    profileRole.textContent = user.about;
    profileImage.alt = user.name;
    profileImage.src = `${user.avatar}`;
    meUserProperties.id = user._id;
    createCardsList(initialCardsArray);
  })
  .catch(err => console.log(`Ошибка: ${err}`));

//тут про Popup-profile и изменение данных пользователя
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileRole.textContent;
  openPopup(popupProfile);
});
popupProfile.addEventListener('submit', submitInfoProfile);
profileImageShield.addEventListener('click', () => {openPopup(popupAvatar)});
popupAvatar.addEventListener('submit', submitAvatar)
//закрытие по всем крестикам по всем оверлеям,
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
})})

//тут про Popup-new-Place,
addPlaceButton.addEventListener('click', () => {
  openPopup(popupPlaceForm);
});
popupPlaceForm.addEventListener('submit', submitNewPlace);

//валидация форм
enableValidation(popupSelectors);