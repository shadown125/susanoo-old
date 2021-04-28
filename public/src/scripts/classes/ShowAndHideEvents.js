
export class ShowAndHideEvents {

    #buttonMenu

    #dropdown

    constructor(buttonMenu, dropdownMenu) {
        this.#buttonMenu = buttonMenu;
        this.#dropdown = dropdownMenu;

        this.#buttonMenu.addEventListener('click', this.#showAndHideDropDown.bind(this));
    }

    #showAndHideDropDown() {
        if(this.#dropdown.classList.contains('is-active')) {
            this.#dropdown.classList.remove('is-active');
            return;
        }
        this.#dropdown.classList.add('is-active');
    }
}