var input = 14;

var numberOfSteps = function(num) {
    let stepCount = 0;
    let currentValue = num;
    while (currentValue > 0) {
        if (currentValue % 2 == 0) {
            currentValue = currentValue / 2;
            stepCount++;
        } else {
            currentValue--;
            stepCount++;
        }
        ;
    }
    return stepCount;
};

console.log("hello");
console.log(numberOfSteps(input));