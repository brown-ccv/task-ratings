import { lang } from '../config/main'
import { baseStimulus } from '../lib/markup/stimuli'

const enterRating = () => {

    const ratingOptions = [0,1,2,3,4,5,6,7,8,9,10]

    return {
        type: 'survey_multi_choice',
        preamble: baseStimulus(`<h1>${lang.instructions.enter_rating}</h1>`, true),
        questions: [{ prompt: 'Enter rating', name: 'rating', options: ratingOptions, required: true, horizontal: true}],
        on_finish: (data) => {
            data.submit_time = Date.now()
        }
      }
}

export default enterRating