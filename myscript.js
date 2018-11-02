slowMath.add(6, 2)
.then((result) => {
    console.log(result);
    return resultA = slowMath.multiply(result, 2);
}).then((resultA) => {
    console.log(resultA);
    return resultB = slowMath.divide(resultA, 4)
}).then((resultB) => {
    console.log(resultB);
    return resultC = slowMath.subtract(resultB, 3)
}).then((resultC) => {
    console.log(resultC);
    return resultD = slowMath.add(resultC, 98)
}).then((resultD) => {
    console.log(resultD);
    return resultE = slowMath.remainder(resultD, 2)
}).then((resultE) => {
    console.log(resultE);
    return resultF = slowMath.multiply(resultE, 50)
}).then((resultF) => {
    console.log(resultF);
    return resultG = slowMath.remainder(resultF, 40)
}).then((resultG) => {
    console.log(resultG);
    return resultH = slowMath.add(resultG, 32)
}).then((resultH) => {
    console.log(`The final result is ${resultH}`)
}).catch((err) => {
    console.log(`Something went wrong!`)
    console.log(err)
});

