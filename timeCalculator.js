const calculateMiddleWorkTime = (func, args = null, isArrayArgument = false) => {

    let sumOfSeconds = 0;
    for (let i = 0; i < 10; i++) {
        const before = Date.now();
        let res;
        if (isArrayArgument) res = func(...args);
        else res = func(args);
        const after = Date.now();
        const eachFuncSeconds = (after - before) / 1000;
        sumOfSeconds += eachFuncSeconds;
    }
    //get the average time in seconds!
    return sumOfSeconds / 10;
}

module.exports = calculateMiddleWorkTime;