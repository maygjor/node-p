let http=require("http");
let fs=require("fs");

function send404Response(response){
  response.writeHead(404,{"Content-Type":"text/plain"});
  response.write("404 page not found");
  response.end();

}
 function onRequest(request,response){
  if(request.method=="GET"&&request.url=="/"){

    fs.createReadStream("./index.html").pipe(response);
  }else{
    send404Response(response);
  }

}
http.createServer(onRequest).listen("8080");
console.log("server is now running");
