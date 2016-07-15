var fs = require('fs');
var obj;
var age;
var len;
var occupation=[];
var occ=0;
fs.readFile('myObj.json', 'utf8', function (err, data) {
if (err) throw err;
obj = JSON.parse(data);

//console.log(obj.length
len=obj.length;
console.log(obj);
console.log();
console.log("---- Display all objects with occupation as 'Programmer'----");
console.log();

for(var i=0,n=len; i<n; i++)
  if(obj[i].occupation=='Programmer')
  console.log(obj[i]);
console.log();
console.log("----Sort the object basis the age key in the descending order------");
console.log();

for (var i = 0; i < len; i++)
{
  for (var j = 0; j < (len - i - 1); j++)
  {
    if(obj[j].age > obj[j+1].age)
    {
      var tmp = obj[j];
      obj[j] = obj[j+1];
      obj[j+1] = tmp;
    }

  }
   console.log(obj[j]);
}
console.log();
console.log("----Changing Format------");
console.log();

for(var i = 0; i < len; i++)
{
  //console.log("''"+obj[i].occupation+"' : [{'Name': '"+obj[i].name+"', 'Age':"+obj[i].age+"}]");
  //console.log(obj[i]);
  var flag=0;
  for(var j=0;j<occupation.length;j++)
  {
    if(occupation[j]==obj[i].occupation)
    {
      flag=1;
    }
 }
 if(flag==0)
 {
   occupation[occ]=obj[i].occupation;
   occ++
 }
 // console.log(occupation);
}
console.log(occupation);
console.log();
});
