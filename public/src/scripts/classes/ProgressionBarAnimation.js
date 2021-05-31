import $ from 'jquery';
import 'jquery-circle-progress';

export class ProgressionBarAnimation {
    constructor(container, counter) {
        this.container = container;
        this.counter = counter;
        this.options = {
            startAngle: -1.55,
            size: 50,
            value: 0.74,
            fill: {color: '#fa4299'}
        }

        this.initAnimation();
    }

    initAnimation() {
        this.container.circleProgress(this.options).on('circle-animation-progress', (event, progress, stepValue) => {
            this.counter.text(String(stepValue.toFixed(2).substr(2)) + '%');
        })
    }
}