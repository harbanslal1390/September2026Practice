function functionaname(a:number,b:number):number
{
    console.log(a+b)
    return a+b
}
functionaname(10,20)

function browsername(browser?:string)
{
if(browser==undefined)
{
    console.log("browser is chrome")
}
else{
    console.log(browser)
}
}

function objectpass()
{
    return [{
        name1:"harry",
        classname1:"First"
    },
    {
        name:"harry",
        classname:"First"
    }
]
}
console.log(objectpass()[0].name1) 

function browsernamearray(browser:string[]):string[]
{
return browser
}
console.log(browsernamearray(['chrome','firefox'])[0])