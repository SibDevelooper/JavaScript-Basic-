// Function declaration statement или инструкция объявления функции
function greet(name) {
	return "Hello " + name;
}

// Если функция ничего не возвращает, то она возвращает undefined

// В данном случае ничего не будет выведено, так как интерпретатор 
// вычисляет значение и сразу же его забывает.
// Точка вызова функции
greet("Serge");

// Функция возвращает строку, поэтому можно на ходу 
// вызывать методы объекта string
console.log(greet("Igor").toUpperCase());

// Function definition expression или выражение определения функции. 
// Здесь можно опускать название функции - анонимная функция.
// В JavaScript функции являются объектами, поэтому такой способ более логичен.
var multiply = function(num1, num2) {
	return num1 * num2;
};

console.log(multiply(2,5));
console.log(multiply(2,6,10));
console.log(multiply());
console.log(greet());