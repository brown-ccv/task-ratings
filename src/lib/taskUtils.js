// utilities specific to this app/task

import _ from 'lodash'

// initialize starting conditions for each trial within a block
const generateStartingOpts = (blockSettings) => {
	let startingOptions = blockSettings.conditions.map( (c) => {
		// Repeat each starting condition the same number of times
		return _.range(blockSettings.repeats_per_condition).map( () => c )
	})

	return _.shuffle(_.flatten(startingOptions))
}

const beep = () => {
	const context = new AudioContext()
	const o = context.createOscillator()
	const g = context.createGain()
	o.type = 'sine'
	o.connect(g)
	g.connect(context.destination)
	o.start()
	o.stop(context.currentTime + 1)
}

const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export {
	generateStartingOpts,
	beep,
	sleep
}
