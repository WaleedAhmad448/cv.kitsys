var xlsx = require("xlsx");
var wb = xlsx.readFile("mosg.xlsx",{cellText:true});
var ws = wb.Sheets["sbmut"];
var data = xlsx.utils.sheet_to_json(ws);
var newData = data.map(function (record) {
   record.net= record.name - record.salery;
   delete record.name;
   delete record.salery;
   return record;
});

var newWB =xlsx.utils.book_new();
var newWS =xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB,newWS,"new data");
xlsx.writeFile(newWB,"new data file.xlsx");

console.log(newData);
