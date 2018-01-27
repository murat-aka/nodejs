
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

