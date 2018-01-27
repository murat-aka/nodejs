 //////////////////////////////////////////////
 /*  module for exercise 6  NODE MODULES     */
 //////////////////////////////////////////////

 module.exports = function findFiles(dir,ext,callback) {  
     
    var fs = require('fs'); // load file system module     
    var pa = require('path'); // load path module
    
    fs.readdir(dir, function doneReading(err, arrList) { // readFile is asycronous so a call back function is passed.

       if(!err){
         
            arrList = arrList.filter(function (item){ // loop through filenames
            
                //return (pa.extname(item) === '.' + ext);
         
                if (pa.extname(item) === '.' + ext) { // check if the filename extension is same as the passed in extension.
                 
                  return true;
                 
                }else{
                    
                  return false;
                  
                }
          
            });
          
            return callback(err,arrList);
         
       }else{
           
            return callback(err); // early return
          
       }
   
    });
   
 };

 