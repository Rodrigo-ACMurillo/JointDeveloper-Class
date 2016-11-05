function eat(food) {
	if(typeof food==="string") {
		return food + ' tasted really good.';  
	} else {
		return "Solo se permiten cadenas de carácteres";
	}
}

console.log(eat(1));
