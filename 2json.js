var fs = require('fs');

fs.readFile('./public/primer_dataset.json', function(err, data){
   if(err) throw err;
   var obj = JSON.parse(data);
   console.log(obj.length); 
});