fs = require('fs')
console.log("ami");
fs.readFile('datafile.csv', 'utf8', function (err,data) {
 if (err) {
   return console.log(err);
 }
 data1=csvJSON(data);
 console.log(data1);
 var wstream = fs.createWriteStream('g20.json');
 wstream.write(data1);
 wstream.end();
});
function csvJSON(csv){
 var lines=csv.split("\n");
 var rows = [];
 var n=0;

 var col1=[];
 var col2=[];
 var col3=[];
 var col4=[];
 var col5=[];

 var m=0;
var country=[];
var count;
var population=[];
 var headers=lines[0].split(",");
 for(var i=0; i<lines.length; i++)
 {
   rows[n]=lines[i].split(',');
   col1.push(rows[n][0]);
   col2.push(rows[n][2]);
   col3.push(rows[n][3]);
   col4.push(rows[n][4]);
   col5.push(rows[n][5]);
   n++;
 }
 //console.log(rows);
for(var i=0;i<col1.length-1;i++)
{
      count=0;
      for(var k=0;k<=rows.length;k++)
      {
          if(rows[k]==col1[i])
            count=1;
          else if(count==0)
          {
            if(k==0)
              country.push(col1[i]);
            else if(k==1)
              country.push(col2[i]);
            else if(k==2)
              country.push(col3[i]);
            else if(k==3)
              country.push(col4[i]);
            else if(k==4)
              country.push(col5[i]);
          }
      }

}

function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];
        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[2]) {
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            // We found a non-quoted value.
            var strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    console.log(arrData);
    return (arrData);
}

var output=CSVToArray(country, ",")
json=JSON.stringify(output);
str= json.replace(/},/g, "},\r\n");
return str;
}
