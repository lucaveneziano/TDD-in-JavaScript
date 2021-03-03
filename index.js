function add(input) {
    return operation(input, function (result, input) {
        return result + input;
    })
}
function subtract(input) {
    try {
        return operation(input, function (result, input) {
            return result - input;
        })
    } catch {
        return "cannot subtract two strings"
    }
}
function divide(input) {

    return operation(input, function (result, input) {
        console.log(result, input)
        if (!Number.isFinite(result / input || input === 'error not finite')) {
            return "error not finite";
        }
        return result / input;
    });

}

//Multiply numbers.  Check for Infinity and strings.
function multiply(input) {
    return operation(input, function (result, input) {
        console.log(result, input)
        if ((Number.isFinite(result * input) && (typeof(result*input)!= 'undefined'))) {
            return result * input;
        }
        return "Error - operands need to be numeric";        
    });
}
// exponent
function pow(input) {
    return operation(input, function (result, input) {
        console.log(result, input)
        if ((Number.isFinite(result ** input) && (typeof(result**input)!= 'undefined'))) {
            return result ** input;
        }
        return "Error - operands need to be numeric";        
    });
}


function operation(input, operator) {
    var result = input.shift();
    for (i = 0; i < input.length; i++) {
        result = operator(result, input[i]);
    }

    return result;
}


module.exports = { add, subtract, divide, multiply, pow, operation }