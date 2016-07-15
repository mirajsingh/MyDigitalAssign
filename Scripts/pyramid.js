var row=5;
var str="*"
var counter=0;
for( var i=0;i<=row;i++)
{
    if(i==0)
    {
      for(var j=1;j<(row-i);j++)
      {
        process.stdout.write(" ");
      }
        process.stdout.write(str);
        console.log();
    }
    if(i>1 && i%2==0 && counter==0)
    {
      counter=1;
      i=i-1;
      for(var j=1;j<(row-i);j++)
      {
        process.stdout.write(" ");
      }

      if(i%2!=0)
      {
          for(var k=1;k<=i+2;k++)
          {
              process.stdout.write(str);
          }
      }
      console.log();
    }
    else if(counter==1)
    {
        counter=0;
        row=row+1;
        continue;
    }
}
