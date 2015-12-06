// Function declaration statement или инструкция объявления функции
function greet(name) {
	return "Hello " + name;
}

// Если функция ничего не возвращает, то она возвращает undefined

// В данном случае ничего не будет выведено, так как интерпретатор вычисляет значение и сразу же его забывает.
// Точка вызова функции
greet("Serge");

// Функция возвращает строку, поэтому можно на ходу вызывать методы объекта string
console.log(greet("Igor").toUpperCase());

// Function definition expression или выражение определения функции. Здесь можно опускать название функции - анонимная функция.
// В JavaScript функции являются объектами, поэтому такой способ более логичен.
var multiply = function(num1, num2) {
	return num1 * num2;
};

console.log(multiply(2,5));
console.log(multiply(2,6,10));
console.log(multiply());
console.log(greet());

// Использование объекта arguments, который ведет себя как массив, для получения всех переданных в функцию аргументов.
var plus = function(num1, num2, num3) {
	console.log(arguments);
	return num1 + num2 + num3;
}

console.log(plus(5, 8, 18, 22));

// Так как функции это объекты, можно передавать функцию в функцию и возвращать функцию из функции.
var func = function(callback) {
	var name = "Serge";
	callback(name);
};

func(function(n) {
	console.log("Hello " + n);
});

// Пример возвращаемой функции
var reFunc = function() {
	return function(name) {
		console.log("Hi " + name);
	}
};

reFunc()("Max");

// Функция может быть вызвана сразу после определения в том случае, если мы используем выражение определения. Такая функция называется self-invoking anonymous function (анонимная самовызывающася функция)
var greeting = function(name) {
	return "Hello " + name;
}("Sibdeveloper");

console.log(greeting);