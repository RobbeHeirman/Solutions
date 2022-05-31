function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) {

        // NOTE: interesting way to loop from 1 to sqrt(x)
        for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }

    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }

    return null;
}

console.log(gap(2,100,110)  [101 - 103])
console.log(gap(4,100,110),  [103, 107])
console.log(gap(6,100,110), null)
console.log(gap(8,300,400), [359, 367])
console.log(gap(10,300,400), [337, 347])
