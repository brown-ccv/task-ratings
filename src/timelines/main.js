import preamble from "./preamble";
import countdown from "../trials/countdown";
import beepScreen from "../trials/beepScreen";
import enterRating from "../trials/enterRating"
import { cameraStart, cameraEnd } from "../trials/camera"
import { lang, config } from "../config/main";
import { showMessage } from "@brown-ccv/behavioral-task-trials";


let primaryTimeline = [
  preamble,
  showMessage(config, {
    responseType: "html_button_response",
    message: lang.instructions.main_instructions,
    responseEndsTrial: true,
    buttons: [lang.prompt.continue.button],
  }),
];
// Countdown for 6 blocks. 1st block 30 min -> 25 min, 2nd 25 min -> 20 min, ..., 6th 5 min -> 0
for (let i = 5; i >= 0; i--) {
  // countdown takes in start and end in seconds
  primaryTimeline.push(countdown(300*(i+1), 300*i));
  primaryTimeline.push(beepScreen());
  primaryTimeline.push(enterRating())
}

if (config.USE_CAMERA) {
  primaryTimeline.splice(1,0,cameraStart())
  primaryTimeline.push(cameraEnd(5000))
}

primaryTimeline.push(showMessage(config, {
  duration: 5000,
  message: lang.task.end,
}))


export const tl = primaryTimeline;
