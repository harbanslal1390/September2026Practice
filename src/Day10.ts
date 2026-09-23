const add=(a:number,b:number)=>a+b
console.log(add(100,200))
function multiplication(a:number,b:number)
{
    return a*b

}

function calculation(a:number,b:number,c:(a:number,b:number)=>number)
{
return c(a,b)
}
console.log(calculation(10,20,multiplication))

//pass as a function
function add1(a:number,b:number):number
{
return a+b
}
function sub1(a:number,b:number):number
{
return a+b
}
function div1(a:number,b:number):number{
    return a/b
}

function callingfunction(a:number,b:number,c:(a:number,b:number)=>number):number
{
    return c(a,b)
}

console.log(callingfunction(10,20,add))