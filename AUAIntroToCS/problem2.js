/*Create a function that takes two numbers as its arguments and returns an
array that contains all the prime numbers between them inclusively. This
function must call your function from question 1 to check each number.*/
const prompt = require('prompt-sync')();
const n=prompt('number 1: ')
const k=prompt('number 2: ')
function array(f,l)
{
    let array=[]
    let i;
    let count=0;
    for(i=f; i<=l; i++)
    {   
        if(primeOrNot(i))
        {
        array[count]=i;
        count++;
        }
    }
    return array
}
function primeOrNot(m)
{
    if(m<2)
    {
     return false
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
console.log (array(n,k))