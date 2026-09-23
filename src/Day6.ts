var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
days.forEach( day=>{
console.log(day)
})

outer:for(let outerIndex=0;outerIndex<=3;outerIndex++)
{
    inner:for(let j=0;j<=3;j++)
    {
        if(j==3)
        {
            break outer ;
        }
        console.log("i-->"+outerIndex+"j--"+j)
    }
   
}