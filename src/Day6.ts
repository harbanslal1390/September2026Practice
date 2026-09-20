var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
days.forEach( day=>{
console.log(day)
})

outer:for(var i=0;i<=3;i++)
{
    inner:for(var j=0;j<=3;j++)
    {
        if(j==3)
        {
            break outer ;
        }
        console.log("i-->"+i+"j--"+j)
    }
   
}