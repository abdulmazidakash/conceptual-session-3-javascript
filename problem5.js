/**
 * bus = 50;
 * micro = 15;
 * rickshaw = 20 taka;
 * 
 * solution:
 * borjatri = 234;
 * bus(4) = 200; remaining = 34;
 * micro(2) = 30; remaining = 4;
 * rickshaw(4) = 20 *4 = 80 taka;
 * 
 */

function rickshawVara(peoples){
	const perBusPeoples = 50;
	const perMicroPeoples = 15;
	const rickshawCost = 20;

	const remainingAfterBus = peoples % perBusPeoples;

	const remainingAfterMicro  = remainingAfterBus % perMicroPeoples;

	return remainingAfterMicro * rickshawCost;


}

console.log(rickshawVara(234));