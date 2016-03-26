function populationGrowth (simulationLength) {
	var adults = 0;
	var children = 1;
	for (var i = 0; i < simulationLength; i++) {
		var temp = children;
		children = adults;
		adults+=temp;
	}
	return adults + children;
}

console.assert(populationGrowth(0) === 1);
console.assert(populationGrowth(1) === 1);
console.assert(populationGrowth(2) === 2);
console.assert(populationGrowth(3) === 3);
console.assert(populationGrowth(4) === 5);