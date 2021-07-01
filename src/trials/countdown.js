const _ = require("lodash");
const blank = require("../assets/images/blank.png")

const countdown = (start, stop) => {
    const times = _.range(start, stop, -1);
    const timeline = times.map((val) => {
        let timeFormat = new Date(1000 * val).toISOString().substr(11, 8)
        return { prompt: `<h1>${timeFormat}</h1>` };
    });

    
    return {
        type: 'image_keyboard_response',
        stimulus: blank,
        response_ends_trial: false,
        trial_duration: 1000,
        timeline: timeline,
    }
}

export default countdown
