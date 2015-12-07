// Использование объекта arguments (псевдо-массив), который ведет себя как массив, для получения всех переданных в функцию аргументов.
var plus = function(num1, num2, num3) {
	console.log(arguments);
	return num1 + num2 + num3;
}

console.log(plus(5, 8, 18, 22));