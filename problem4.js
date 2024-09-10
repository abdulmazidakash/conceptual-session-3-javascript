//count boolean from a array

const x = [3, 2, true, 'hello', false, 34, {name: 'akash'}];

function countBoolean(array){

	if (!Array.isArray(array)){
		return 'please provide valid array';
	}

	let count = 0;
	for(let item of array){
		if (typeof item === 'boolean'){
				count++;
		}
	}

	return count;
}

const result1 = countBoolean(x);
console.log(result1);