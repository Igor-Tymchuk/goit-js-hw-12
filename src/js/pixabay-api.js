const API_KEY = '45921559-66c2b9b15ee0f1bc0f2b1e46c';
const Url = 'https://pixabay.com/api/';

export const backEndData = text => {
    const options = new URLSearchParams({
        key: API_KEY,
        q: text,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${Url}?${options}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};
