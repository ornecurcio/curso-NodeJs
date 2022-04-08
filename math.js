const Math = {}; 

function add(x1,x2)
{
    return x1 + x2; 
}

function subtract(x1,x2)
{
    return x1 - x2;
}

function multiply(x1,x2)
{
    return x1 * x2; 
}

function divide(x1,x2)
{
    if(x2==0)
    {
        console.log("No se puede dividir por cero"); 
    }
    else
    {
        return x1 / x2; 
    }
}

Math.add = add; 
Math.subtract = subtract; 
Math.multiply = multiply; 
Math.divide = divide; 
// estoy exportando con module, el objeto o una funcion. 
module.exports = Math;