var fs = require("fs");

fs.readFile('pawan.txt', function (err, data) {
	console.log("pawan kumar");
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");
console.log("Going to write into existing file");
fs.appendFile('pawan.txt', 'Simply Easy Learning!',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('pawan.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
function name()
{
    console.log("pawan");
}
name();
function name1()
{
    console.log("pawan");
}
name1();
function name2()
{
    console.log("pawan");
}
name2();
function name3()
{
    console.log("pawan");
}
name3();
function name4()
{
    console.log("pawan");
}
name4();


function name5()
{
    console.log("pawan");
}
name5();
function name6()
{
    console.log("pawan");
}
name6();
raja babu test
pawan kumar
function name7()
{
    console.log("pawsan");
}
name7();


