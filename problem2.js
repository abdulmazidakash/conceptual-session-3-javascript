const person1 = {
	name: 'akash',
	address: 'feni'
}

//output: akash@feni.com

function createEmail(info){
	if (typeof info !== 'object'){
		return 'invalid object';
	}
	const result = info.name + '@' + info.address + '.com';
	return result;
}

console.log(createEmail(person1));