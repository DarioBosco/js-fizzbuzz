//Scrivi un programma che stampi i numeri da 1 a 100

var iterations = 100;

for (let i = 0; i < iterations; i++) {
	var element = i + 1;
	//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
	if (element % 3 == 0 && element % 5 == 0) {
		element = 'FizzBuzz';
		//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
	} else if (element % 3 == 0) {
		element = 'Fizz';
	} else if (element % 5 == 0) {
		element = 'Buzz';
	} else {
		console.log(element);
	}
}
