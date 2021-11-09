/*Create a function that checks if a number is a palindrome by calling the
functions from question 3*/
const prompt = require('prompt-sync')();
const n=prompt('number: ')
function reverse(f)
{
    let m=0;
    while(f!=0)
    {
        let i;
        i=f%10;
        f=Math.floor(f/10);
        m=10*m+i;
    }
    return m;
}
function palindrome(k)
{
    if(k==reverse(k))
    return true;
    else return false;
}
console.log (`is palindrome:  ${palindrome(n)}`)