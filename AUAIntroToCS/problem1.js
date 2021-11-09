/*Create a function that takes a number as its argument and returns true if a
number is a prime number and false otherwise. Hint: A number is a prime
number when it is divisible only by one and itself. If a number is not divisible
to any number starting 2 to the SQRT of itself, then that number is a prime
number. */
const prompt = require('prompt-sync')();
const n=prompt('number: ');
function primeOrNot(m)
{
    if(m<2)
    {
        false
    }
    let count=0;
    let i;
    for(i=2; i<=Math.sqrt(m); i++)
    {
        if(m%i===0)
        count++;
    }
    if(count===0)
    return(true)
    else return (false)
}
if(primeOrNot(n))
console.log("the number is prime")
else console.log("the number is not prime")