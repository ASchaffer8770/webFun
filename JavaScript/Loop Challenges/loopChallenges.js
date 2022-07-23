//print odds from 1 - 20

for (var i = 1; i <= 20; i += 2) {
    console.log(i)
}

//decreasing multiples of 3

for (var i = 0; i<= 100; i++) {
    if (i%3 == 0) {
    console.log(i)
    }
}

//print the sequence 4, 2.5, 1, -0.5, -2, -3.5

for (var i= 4; i >-4; i-=1.5) {
    console.log(i);
}

//sigma

var sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);

//Factorials

var product = 1;
for(var i =1; i < 13; i++) {
    product *= i;
}
console.log(product);