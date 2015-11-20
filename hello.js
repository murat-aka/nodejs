var http = require("http"); // add the hhtp module
var myServer = http.createServer(function(request, response){
    
    
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<b>Hello</b>World!");
    response.end();
});//create server


myServer.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = myServer.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
  
}
);
    
    
    
    

