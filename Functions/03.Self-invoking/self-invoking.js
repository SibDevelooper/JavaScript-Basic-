// Функция может быть вызвана сразу после определения в том случае, если мы используем выражение определения. Такая функция называется self-invoking anonymous function (анонимная самовызывающася функция)
var greeting = function(name) {
	return "Hello " + name;
}("Sibdeveloper");

console.log(greeting);