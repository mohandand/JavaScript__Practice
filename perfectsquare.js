function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    for(i=0;i<=sq;i++)
    {
      var result= i*i;
      if(result==sq)
        {
          var nextsq = (i+1) * (i+1);
          return nextsq;
        } 
    }
    return -1;
  }
 console.log(findNextSquare(145));
