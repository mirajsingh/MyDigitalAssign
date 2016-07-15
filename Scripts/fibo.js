var firstNo=0;
var secondNo=1;
console.log(firstNo);
console.log(secondNo);
var nthNo=9;
for(var i=2;i<9;i++)
{
    var sum=firstNo+secondNo
    console.log(sum);
    firstNo=secondNo;
    secondNo=sum;
}
