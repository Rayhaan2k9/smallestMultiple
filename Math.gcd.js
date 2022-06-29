function MathGcd(num1, num2) {

    //As long as num 2 is greater than 0
    while(num2) {
    // saving current value of num2    
    let num3 = num2
    //reassigning num2 to the remainder of num1 / num2
    num2 = num1 % num2
    //reassign num1 to current value of num3.
    num1 = num3   
    }
    
    
    // If num2 is 0, loop ends and returns result
    return num1
}

module.exports = MathGcd