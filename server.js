const http = require('http');
const host = "localhost";
const port = 8080;
const myname ={
  Nombre: "Humberto",
  Apellido: "Rojas",
  Mensaje: "mi servidor esta activo ☺"
}


const requesListener = function(req,res) {
  //const url = new URL(req.url, `http://localhost:${port}/`);
  res.writeHead(200)
  res.end(JSON.stringify(myname))
}

const server = http.createServer(requesListener);
server.listen(port,host,() => {
  console.log(`servidor activo en el puerto ${port}`)
})