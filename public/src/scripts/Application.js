import $ from 'jquery';
import {ProgressionBarAnimation} from "./classes/ProgressionBarAnimation";

export default class Application {
    constructor() {
        this.#initProgressionBarAnimation();
    }

    #initProgressionBarAnimation() {
        const progressionCircles = $('[data-circle-progression]');
        const percentageNumber = $('[data-counter-percentage]');

        new ProgressionBarAnimation(progressionCircles, percentageNumber);
    }
}