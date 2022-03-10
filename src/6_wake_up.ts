import { endAdventure, haveAdventures } from '..';
import { askQuestion, clear, print } from '../console';
import { goToGroceryShopping } from './7_go_to_grocery_shopping'

// This is a very unusual type setup. It's pobably not a great idea in the real world to nest so many properties
// with the exact same name. But in Wonderland, this sort of thing is normal, so we've just got to find a way through it...
interface WakeUp {
	wake?: WakeUpFromDream;
}
interface WakeUpFromDream {
	wake?: WakeUpFromREMSleep;
}

interface WakeUpFromREMSleep {
	wake?: WakeUpFromDeepSleep;
}
interface WakeUpFromDeepSleep {
	canWake?: string;
}

export function wakeUp(): void {
	clear(true);
	print('Wait... was this all a dream?');

	const awoken = tryToWakeUp();

	// optional parameters can be accessed safely with the ?. operator
	// this will only return if every parameter in the whole chain is properly set...
	if (awoken.wake?.wake?.wake?.canWake === 'Yes') {
		print('You have awoken in your bed 🛏 What a lovely dream.');
		print('Although...❓❓❓');
		print('Anyway, I am so hungry... Its time for Breakfast.. 🍲 ');

		return askQuestion('Press ENTER to continue ', goToGroceryShopping);

	} else {
		print('You are unable to wake up! 😱');
		return endAdventure();
	}
}

function tryToWakeUp(): WakeUp {
	// 👉 FIXED
	return {
		wake:{
			wake:{
				wake:{
					canWake: 'Yes'
				}
			}
		}
	};
}
