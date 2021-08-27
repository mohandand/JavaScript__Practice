function findMultiples(integer, limit) {
    var arr= [];
    var int = integer;
    for(var i=integer;i<=limit;i++)
      {
        if(i%integer==0)
          {
           arr.push(i);
          }
      }
    return arr;
    }
   console.log(findMultiples(5,25));