import { lang } from '../config/main'
const _ = require("lodash");

const countdown = (start, stop) => {
    const times = _.range(start, stop, -1);
    const timeline = times.map((val) => {
        let timeFormat = new Date(1000 * val).toISOString().substr(11, 8)
        return { prompt: `<h1>${timeFormat}</h1>` };
    });

    
    return {
        type: 'html_keyboard_response',
        stimulus: `<h1 class='countdown'>${lang.countdown.message}</h1>`,
        response_ends_trial: false,
        trial_duration: 1000,
        timeline: timeline,
        on_finish: (data) => {
            data.countdown = true
        }
    }
}

export default countdown
