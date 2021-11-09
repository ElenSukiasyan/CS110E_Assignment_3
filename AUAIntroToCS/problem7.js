/*Create a function that converts a given binary number into its two’scomplement negative number. This function must call the functions from
questions 5 and 6 (Inverse + 1)*/
const binary="0101";
function inverse (m)
{
    let result = "";
    for (let i=0; i<m.length; i++)
    {
        if(m[i] == "0") {
            result = result.concat("1");
        }
        else {
            result = result.concat("0");
        }
    }
    return result;
}
function sum(b1,b2)
{
    let array1=[];
    let array2=[];
    let i=0;
    let carryBit=0;
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
function convert(k)
{
    return sum("1",inverse(k))
}
console.log(convert(binary))
