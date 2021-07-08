import { lang } from '../config/main'
import { beep } from '../lib/taskUtils'
import { sleep } from '../lib/utils'
import { baseStimulus } from '../lib/markup/stimuli'

const beepScreen = () => {
    const stimulus = baseStimulus(`
    <div class='instructions'>
    <h1>${lang.countdown.finish}</h1>
    </div>
    `, true)
    
    return {
        type: 'html_keyboard_response',
        stimulus: stimulus,
        response_ends_trial: false,
        trial_duration: 6000,
        on_load: async () => {
            beep()
            await sleep(2500)
            beep()
        }
    }
}

export default beepScreen