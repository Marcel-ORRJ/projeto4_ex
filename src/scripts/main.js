document.addEventListener("DOMContentLoaded", function () {
    const filmsButtons = document.querySelectorAll('[data-film-button]');
    const kaijusTabs = document.querySelectorAll('[data-tab-button]');
    let videoTrailer = "film_godzilla_1_trailer_dub";

    for (let i = 0; i < filmsButtons.length; i++) {
        filmsButtons[i].addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(videoTrailer).pause();
            const film = document.querySelector(`[data-film-id=${e.target.dataset.filmButton}]`);
            hideAllFilms();
            film.classList.add('about-film--active');
            removeActiveFilm();
            e.target.classList.add('films__items__item--active');
            videoTrailer = `${e.target.dataset.filmButton}_trailer_dub`;
        })
    };

    for (let i = 0; i < kaijusTabs.length; i++) {
        kaijusTabs[i].addEventListener('click', function (e) {
            e.preventDefault();
            const tab = document.querySelector(`[data-tab-id=${e.target.dataset.tabButton}]`);
            hideAllTabs();
            tab.classList.add('kaijus__list--active');
            removeActiveTab();
            e.target.classList.add('kaijus__tabs__button--active');
        })
    };
})

function hideAllFilms() {
    const filmsContainer = document.querySelectorAll('[data-film-id]');

    for (let i = 0; i < filmsContainer.length; i++) {
        filmsContainer[i].classList.remove('about-film--active');
    };
}

function removeActiveFilm() {
    const filmButtons = document.querySelectorAll('[data-film-button]');

    for (let i = 0; i < filmButtons.length; i++) {
        filmButtons[i].classList.remove('films__items__item--active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('kaijus__list--active');
    };
}

function removeActiveTab() {
    const tabButtons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('kaijus__tabs__button--active');
    }
}