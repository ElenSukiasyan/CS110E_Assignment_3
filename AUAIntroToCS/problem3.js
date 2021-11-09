/*Create a function that returns the reverse number of a given number.
Example: input = 123 -> returns: 321*/
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
console.log(reverse(n))