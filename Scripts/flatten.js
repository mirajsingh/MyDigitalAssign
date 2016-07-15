//flatten object
var obj = [5, [22], [[14]], [[4]],[5,6]];
var arr=[];

function flatten(obj,arr)
{
  for (var i=0;i<obj.length;i++)
  {
    if(typeof obj[i]=='number')
    {
        arr.push(obj[i]);
    }
    else
    {
        flatten(obj[i],arr);
    }
  }
}
flatten(obj,arr);
console.log(arr);
