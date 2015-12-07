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

// Ничего не произойдет
reFunc(); 