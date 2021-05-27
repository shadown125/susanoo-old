import $ from 'jquery';
import {ProgressionBarAnimation} from "./classes/ProgressionBarAnimation";
import {ShowAndHideEvents} from "./classes/ShowAndHideEvents";

export default class Application {
    constructor() {
        this.#initProgressionBarAnimation();
        this.#initShowAndHideEvents();
    }

    #initProgressionBarAnimation() {
        const progressionCircles = $('[data-circle-progression]');
        const percentageNumber = $('[data-counter-percentage]');

        new ProgressionBarAnimation(progressionCircles, percentageNumber);
    }

    #initShowAndHideEvents() {
        const buttonMenus = document.querySelectorAll('[data-button-menu]');
        const navigationButton = document.querySelector('[data-main-navigation-button]');
        const headNavigationButton = document.querySelectorAll('[data-head-navigation-button]');

        buttonMenus.forEach((buttonMenu) => {
            const dropdownMenu = buttonMenu.nextElementSibling.nextElementSibling;

            new ShowAndHideEvents(buttonMenu, dropdownMenu, navigationButton, headNavigationButton);
        })
    }
}