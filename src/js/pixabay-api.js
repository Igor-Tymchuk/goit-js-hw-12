import axios from 'axios';
const API_KEY = '45921559-66c2b9b15ee0f1bc0f2b1e46c';
const Url = 'https://pixabay.com/api/';

export const backEndData = async (text, perPage, page) => {
    const options = new URLSearchParams({
        key: API_KEY,
        q: text,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: page,
    });
    return await axios.get(`${Url}?${options}`).then(response => response.data);
};
