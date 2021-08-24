const str = 'madam';
var n = str.length ;
//console.log(`${str.length}`);
console.log(n);
//Checking odd or not.

var result = n%2;
var ran = n-1;
var end = ran/2; 

if(result==0)
{
console.log('not an palindrome');
}
else{

    for(i=0 ;i<=end;i++){
        if (str[i] == str[n-i]) { continue; }
    }
}

if (i==end)
{
    console.log("given number is palindrome number")
}
else{
    console.log("given number is not palindrome number")
}
