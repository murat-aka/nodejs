 //console.log("HELLO WORLD");
 
 //console.log(process.argv);
 
 var sum = 0;
 
 
 
 for(var i=2;i<process.argv.length;i++){ //loop through arguments and add them up
     
     sum+= Number(process.argv[i]); //arguments start from index 2
     
 }
 
 console.log(sum);