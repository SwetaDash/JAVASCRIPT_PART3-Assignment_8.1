var n, i, flag;

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            flag = 1;
            break;
        }
    }
    if (n === 1) {
        console.log("isPrime(" + n + ") is False");
    }
    else {
        if (flag === 1)
            console.log("isPrime(" + n + ") is False");
        else
            console.log("isPrime(" + n + ") is True");
    }
}
isPrime(23);