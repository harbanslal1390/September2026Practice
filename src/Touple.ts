var array:[string,number,boolean]
array=['harry',200,true]
console.log(array)
var num=100
if(num>10)
{
    console.log("This is my first statement")
}
else if(num<10)
{
    console.log("value is below avrage")
}

num==100 ? console.log("Yes value is 100"):console.log("No value is not 100")

var size=11
if(size<10)
{
    console.log("The value of size is small")
}
else if(size<=20)
{
console.log("Size is medium")
}
else
{
    console.log("Size is large")
}

size<=10?console.log("The size is very small"):size<=20?console.log("size is medium"):size>20? console.log("size is large"):console.log("Size is not valid")

switch(size){
    case 10:
        {
            console.log("This is new")
            break
        }
        case 20:
            {
                console.log("This is medium")
            }
            case 30:{
                console.log("This is high")
            }
            default:
                console.log("This is my default case")
}