const person0 = {
	name: 'abul kashem',
	honors: 40,
	hsc: 30,
	isFFfamily: true
}

const person2 = {
	name: 'mober mia',
	honors: 45,
	hsc: 32,
	isFFfamily: false
}

function jobSelection(info){
	if (typeof info !== 'object'){
		return 'invalid object';
	}

	let totalMarks = info.honors + info.hsc;

	if (info.isFFfamily){
		totalMarks = totalMarks + (totalMarks * 0.2);
	}
	console.log(totalMarks);

	if (info.isFFfamily && totalMarks >= 80){
		return 'aho vatija aho... chakri to tomari...!';
	}else if(info.isFFfamily && totalMarks < 80){
		return 'bad luck vatija... next time...!';
	}else if(!info.isFFfamily && totalMarks >= 80){
		return 'you got the job...';
	}else if(!info.isFFfamily && totalMarks < 80){
		return 'Rajakaar rajakaar';
	}


	// if (totalMarks >= 80){
	// 	return 'you got the job'
	// }else{
	// 	return  'you  failed';
	// }
}

console.log(jobSelection(person0));
console.log(jobSelection(person2));