/*Create a function that sums two binary numbers. This function should put
every digit of both binary numbers into two separate arrays, one for each
argument, and make the length of those two arrays equal by adding zeros to
the left of the shorter one (using the unshift method). Add those digits with
the same index. Don’t forget to use the carry bit variable.*/
const bin1="10010";
const bin2="1";
function sum(b1,b2)
{
    let array1=[];
    let array2=[];
    let i=0;
    let carryBit=0;
    console.log(b1);
    console.log(b2);
    for(i=0; i<b1.length; i++)
    {
        array1[i]=b1[i];
    }
    for(i=0; i<b2.length; i++)
    {
        array2[i]=b2[i];
    }
    let l1=array1.length;
    let l2=array2.length;
    if(l1>l2)
    {
        for(i=0; i<(l1-l2); i++)
        {
            array2.unshift("0")
        }
    }
    else
    { 
        for(i=0; i<(l2-l1); i++)
        {
            array1.unshift("0")
        }
    }
    for(i=array1.length-1; i>=0; i--)
    {
        array1[i] = carryBit + parseInt(array1[i]) + parseInt(array2[i]);
        
        carryBit=0;
        if(array1[i]>1)
        {
            carryBit=1;
            if(array1[i]===2)
            {
                array1[i]=0;
            }
            else 
            {
                array1[i]=1;
            }
        }
    }
    if(carryBit===1)
    {
        array1.unshift(1);
    }
    return array1.join("");
}
console.log(sum(bin1,bin2))


