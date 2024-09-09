//find array highest mark

// const numbers = [2, 4, 21, 5, 6, 23, 20,9];

/**
 * let biggest number = 2
 * biggest = 4
 * biggest = 21;
 * biggest = 21;
 * biggest = 21;
 * biggest = 23;
 * biggest = 23;
 * biggest = 23;
 * biggest = 23;
 */

// let biggest = numbers[0];
// console.log('before loop: ', biggest);

// for(let i = 1; i < numbers.length; i++){
// 	console.log('current number: ', numbers[i], 'biggest number: ', biggest);
// 	if(numbers[i] > biggest){
// 		biggest = numbers[i];
// 	}
// 	console.log('current biggest: ',  biggest);
// }

// console.log('after loop: ', biggest);

function giveBiggestNumber(array){

	if(!Array.isArray(array)){
		return 'this is not an array'
	}
	let biggest = array[0];
	for(let i = 1; i < array.length; i++){
		if(array[i] > biggest){
			biggest = array[i];
		}
	}
	return biggest;
}

// const numbers = [2, 4, 21, 5, 6, 23, 20,9];
const numbers = true;
console.log(giveBiggestNumber(numbers));

function showInfo(info){

	if(typeof info !== 'object'){
		return 'please provide a valid object...!'
	}
	// const result = 'amar nam ' + info.name+", amar basa " + info.address;
	const result = 'amar nam ' + person.name+", amar basa " + person.address;
	return result;
}

const person = {
	name: 'akash',
	address: 'feni'
}
// const x = person;
console.log(showInfo(person));
