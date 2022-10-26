const http = require('http');
const fs = require('fs');
const path = require('path');

// 1- Create your HTTP server

const httpServer = http.createServer(requestResponseHandler); // requestResponseHandler is function which we will create below!

httpServer.listen(5050, ()=>{
  console.log('Node JS static file server is listening on port 5050!')
})

// 2- My Call Back Funciton
function requestResponseHandler(request,response){

  if (request.url === '/'){
    sendResponse('index.html','text/html',response) // function sendResponse(url,contentType,res){
  } else {
    sendResponse(request.url, getContentType(request.url), response); // Pass the url to contentType Func
  }
}

// 3- depends on content type, we will  read file
function sendResponse(url,contentType,res){ 

  let file = path.join(__dirname,url)
  // __dirname : /home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/7-pathHTTP/main
  // url : .css
  // path.join(__dirname,url) : main.css

  fs.readFile(file, (err, content)=>{
    if(err){
      res.writeHead(404);
      res.write(`File '${file}' Not Found!`);
      res.end();

      console.log("Response: 404 ${file}, err");
    } else {
      res.writeHead(200,{'Content-Type':contentType});
      res.write(content);
      res.end();

      console.log(`Response:200 ${file}`);

    }
  })

}

// 4- Define and choose your content type depends on extension!
function getContentType(url){
  switch (path.extname(url)){
    case '.html':
      return 'text/html';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'applicaction/json';
    default:
      return 'application/octate-stream'
  }
}