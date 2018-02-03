
//////////////////////////////////////////
/* this program contains exercises from */
/* freecodecamps nodejs tutorials       */
//////////////////////////////////////////


         //////////////////
         ///// START  /////
         //////////////////


 /*////////////////////////////////*/
 /* function baby steps exercise 2 */
 /*////////////////////////////////*/
 
 function getSum(){
 
   var sum = 0;

   for(var i=2;i<process.argv.length;i++){ // loop through arguments and add them up
   
       sum+= Number(process.argv[i]); // arguments start from index 2
   }
   
   console.log(sum);
 
 }
 
 //getSum();
 
 
/////////////////////////////////////////
/*  function exercise 3  MY FIRST I/O  */
/////////////////////////////////////////

function syncIO(){
   
   var fs = require('fs'); // load file system module
   var fFile = process.argv[2]; // read file path from args
   var bufferObject = fs.readFileSync(fFile); // read file contents to the buffer
   var strString = bufferObject.toString(); // convert file contents or the buffer object to string
   var arrArray = strString.split('\n'); // divide new lines to array elements
   var count = arrArray.length - 1; // count number of lines, note the last line doesnt end with new line i.e '\n'
   
   console.log(count);

}


  //syncIO();
  
  
  
////////////////////////////////////////////////
/*  function exercise 4  MY FIRST ASYNC I/O!  */
////////////////////////////////////////////////

function asyncIO(){
   
   var fs = require('fs'); // load file system module
   var fFile = process.argv[2]; // read file path from args

   fs.readFile(fFile, function doneReading(err, fileContents) { // readFile is asycronous so a call back function is passed.
    
    if(!err){
     
      var strString = fileContents.toString(); // convert file contents or the buffer object to string
      var arrArray = strString.split('\n'); // divide new lines to array elements
      var count = arrArray.length - 1; // count number of lines, note the last line doesnt end with new line i.e '\n' 
      console.log(count);     
     
    }

   });

}


  //asyncIO();
  
  

//////////////////////////////////////////////
/*  function exercise 5  FILTERED LS        */
//////////////////////////////////////////////

function filterLS(){
   
   var fs = require('fs'); // load file system module
   var pa = require('path'); // load path module
   var ex = process.argv[3]; // filename extension
   
   var fPath = process.argv[2]; // read file path from args

   fs.readdir(fPath, function doneReading(err, arrList) { // readFile is asycronous so a call back function is passed.
    
       if(!err){
         
          arrList.forEach(function (item){ // loop through filenames
         
            if (pa.extname(item) === '.' + ex) { // check if the filename extension is same as the passed in extension.
             
              console.log(item); // Print the filename.
             
            }
          
          });
         
       }
   
   });

}


  //filterLS();
  
  
  
//////////////////////////////////////////////
/*  function exercise 6  NODE MODULES       */
//////////////////////////////////////////////

function nodeModule(){
 
   var mymodule = require('./findFiles.js');
   var ex = process.argv[3]; // filename extension
   var fPath = process.argv[2]; // read file path from args
   
   mymodule(fPath,ex,function (err, arrList) {  
    
      if (err)  
         return console.error('There was an error:', err);  
        
      arrList.forEach(function (item){ // loop through filenames
       
        console.log(item); // Print the filename.
        
      });  
      
   });

}

  //nodeModule();
  
//////////////////////////////////////////////
/*  function exercise 7  HTTP CLIENT        */
//////////////////////////////////////////////


function httpClient(){
    
    var http = require('http'); // load http module
    var url = process.argv[2]; // get url from args
    http.get(url, function(response) {
        
        response.setEncoding('utf8'); // the "data" events will emit Strings rather than the standard Node Buffer objects

        response.on("data", function(data) {
            
            console.log(data);  // Print data
                  
        });
                    
    });
    
}

    //httpClient();

//////////////////////////////////////////////
/*  function exercise 8  HTTP COLLECT       */
//////////////////////////////////////////////

//npm install bl

function httpCollect(){
    
    var http = require('http'); // load http module
    var bl = require('bl'); // load bl module
    var url = process.argv[2]; // get url from args
    
    http.get(url, function(response) {    
        
        response.pipe(bl(function (err, data) { 
            
            if(!err){
                    
               var strString = data.toString(); // convert the buffer object to string      
               console.log(data.length);  // Print length
               console.log(strString);  // Print data
                
            }
            
        }));

    });
    
}

    //httpCollect();
    

//////////////////////////////////////////////
/*  function exercise 9  JUGGLING ASYNC     */
//////////////////////////////////////////////

//npm install bl

function httpAsync(){
    
    var http = require('http'); // load http module
    var bl = require('bl'); // load bl module
    var urls = [];
    urls.push(process.argv[2]); // get url 1 from args
    urls.push(process.argv[3]); // get url 2 from args
    urls.push(process.argv[4]); // get url 3 from args
    
    var res = [];   // responses recieved.  
    var count = 0;  // count number of responses.
    
    urls.forEach(function(url, index){

        http.get(url, function(response) {    
            
            response.pipe(bl(function (err, data) { 
                
                if(!err){
                        
                   var strString = data.toString(); // convert the buffer object to string 
                   res[index] = strString;
                   count++;
                   
                   if(count==3){
                       
                       res.forEach(function(item){
                           
                           console.log(item);  // Print data
                           
                       });
                   }
                    
                }
                
            }));
    
        });        
    });
}

    httpAsync();    