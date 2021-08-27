findSmallestInt(args) 
{
    var len = args.length;
    var smallest = args[0];
    for(var i = 0 ;i < len ; i++)
      {
        if(args[i]<=smallest)
          {
          smallest = args[i];
          }
      }
      return smallest;
}
  console.log(findSmallestInt([4,2,6,1]));