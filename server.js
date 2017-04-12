let http=require("http");
 function onRequest(request,response){
  console.log(request.url);
  response.writeHead(200,{"Content-Type" :"text/plain"});
  response.write("connected");
  response.end();

}
http.createServer(onRequest).listen("8080");
console.log("server is now running");
