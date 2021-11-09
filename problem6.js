/*Create a function that inverses and returns a given binary number. Example:
1101 -> 0010*/
const binaryNum="01101011";
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
console.log (inverse(binaryNum))

