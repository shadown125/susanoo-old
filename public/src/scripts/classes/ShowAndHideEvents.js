
export class ShowAndHideEvents {

    #buttonMenu;

    #dropdown;

    #navigationButton;

    #navigationContainer;

    #headNavigationButton;

    #headNavigationContainer;

    constructor(buttonMenu, dropdownMenu, navigationButton, headNavigationButton) {
        this.#buttonMenu = buttonMenu;
        this.#dropdown = dropdownMenu;
        this.#navigationButton = navigationButton;
        this.#headNavigationButton = headNavigationButton;
        this.#navigationContainer = document.querySelector('[data-main-navigation-container]');
        this.#headNavigationContainer = document.querySelector('[data-head-navigation]')

        this.#buttonMenu.addEventListener('click', this.#showAndHideDropDown.bind(this));
        this.#navigationButton.addEventListener('click', this.#showAndHideNavigation.bind(this));
        this.#headNavigationButton.forEach((headButton) => {
            headButton.addEventListener('click', this.#showAndHideHeadNavigation.bind(this));
        })
    }

    #showAndHideDropDown() {
        if(this.#dropdown.classList.contains('is-active')) {
            this.#dropdown.classList.remove('is-active');
            return;
        }
        this.#dropdown.classList.add('is-active');
    }

    #showAndHideNavigation() {
        if(this.#navigationContainer.classList.contains('is-active')) {
            this.#navigationContainer.classList.remove('is-active');
            return;
        }
        this.#navigationContainer.classList.add('is-active');
    }

    #showAndHideHeadNavigation() {
        if(this.#headNavigationContainer.classList.contains('is-active')) {
            this.#headNavigationContainer.classList.remove('is-active');
            return;
        }
        this.#headNavigationContainer.classList.add('is-active');
    }
}