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