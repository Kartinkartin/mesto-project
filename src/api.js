const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
    headers: {
        authorization: '48b44853-052f-4cb6-9199-05fafd5281f2',
        'Content-Type': 'application/json'
    }
}

export const getUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(error => {
            const errObj ={
                name: '',
                about: error
            };
            return errObj;
        })
}

export const getINitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export const patchUser = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about,
        }, ['name', 'about'])
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    })
    .catch(err => console.log(err));
}

export const patchAvatar = (avatarLink)=> {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarLink
        }, ['avatar'])
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    })
    .catch(err => console.log(err));
}

export const postCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link,
        }, ['name', 'link'])
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
    .catch(err => console.log(err))
}

export const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
    .catch(err => console.log(err))
}

export const putLikeOnCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    })
    .catch(err => console.log(err))
}

export const deleteLikeOnCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    })
    .then((res) => {
        if(!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
        return res.json();
    })
    .catch(err => console.log(err))
}