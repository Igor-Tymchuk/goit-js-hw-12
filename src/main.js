import { backEndData } from "./js/pixabay-api.js";
import { markupCard } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.searchImg');

const iziWarning = () => iziToast.show({
    message: "Input is empty!",
    position: "topRight",
    icon: 'ico-warning',
    backgroundColor: "orangered",
    messageSize: "16",
    messageColor: "#fff",
    theme: "dark",
    maxWidth: "432px",
});
const iziError = () => iziToast.show({
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
    backgroundColor: "#EF4040",
    messageSize: "16",
    messageColor: "#fff",
    theme: "dark",
    maxWidth: "350px",
    icon: "ico-error",
});

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

const loader = () => document.querySelector("span").classList.toggle("loader");

const handleForm = (event) => {

    event.preventDefault();
    const searchText = event.currentTarget.elements.searchText.value.toLowerCase().trim();
    if (!searchText) return iziWarning();
    gallery.innerHTML = "";
    loader();
    backEndData(searchText)
        .then(json => {
            if (!json.hits.length) return iziError();
            gallery.insertAdjacentHTML("beforeend", markupCard(json.hits).join(""));
            lightbox.refresh();
        })
        .catch(e => console.log(e))
        .finally(() => loader());
    form.reset();
}

form.addEventListener('submit', handleForm);