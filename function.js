for (let i = 0; i < 5; i++) {
    console.log('akash');
}

let akash = 'akash';
let count = 0;

for (let char of akash) {
    if (count === 5) break;
    console.log(akash);
    count++;
}

/**
 * function syntax
 * 
 * function function_name(function parameter){
 * }
 * 
 * function_name(function argument)
 */

// function add(x, y){
// 	const total = x + y;
// 	console.log(total);
// }
// add(4, 5)


// function giveName(){
// 	const x = 'akash'
// 	return x;
// }

// const myName = giveName();
// console.log(myName);

/**
 * type of function 4
 * 
 */

//1. no parameters no return
function show(){
	console.log('hello');
}

//2. parameters with no return
function add (x, y){
	console.log(x + y);
}

//3. no parameters but return
function giveName(){
	const x = 'akash';
	return x;
}

//4. parameters with return
function valueReturn(x){
	return x * 2;
}
