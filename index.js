var num = 4;
var counter = 0;
for (var i = 1; i <= num; i++)
{
    var result = num % i;
    if(result==0)
    {
        counter = counter +1;
    }
}

if (counter==2)
{
    console.log('given number is a prime number');
}
else
{
    console.log('given number is not an prime');
}

console.log(counter);

//end of line