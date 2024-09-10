//monthly savings calculate

function calculateSavings(income){

	if (typeof income !== 'number'){
		return 'invalid input';
	}
	const houseRent = 5000;
	const mealCost = 3000;
	const personalExpense = 2000;

	const totalExpense = houseRent + mealCost + personalExpense;

	if (totalExpense > income){
		return 'earn more';
	}

	const savings = income - totalExpense;

	return savings;
}

console.log(calculateSavings(20000));
console.log(calculateSavings('20000'));
console.log(calculateSavings(8000));