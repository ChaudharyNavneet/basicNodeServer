const fs= require('fs');


const returnBody =(res, body)=>{
    res.write("<html>")
    res.write("<head> <title> Basic Node server</title> </head>")
    res.write(body)
    res.write("</html>")
}
const requestHandler=(req, res)=>{
    const {url , method }= req;
    if(url === '/'){
        res.setHeader("Content-Type", "text/html")
        returnBody(res, 
            `<body>
                <h1>This server is made with Node.js only:</h1>
                <p>Here You can trigger Multiple type of requests to /text route.<p>
                <form action="/text" method="POST">
                    <input type="text" name="message" />
                    <button type="submit">Send POST Request</button>
                </form>
                <a href="/text">Send GET Request</a>
            </body>
            `
        )
        return res.end();
    }
    else if(url ==='/text' && method ==='POST'){
        const body = [];
        req.on( "data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        let parsedBody
        req.on("end", () => {
            parsedBody = Buffer.concat(body).toString();
            console.log("Raw body:", parsedBody);
            fs.writeFileSync('data.txt', parsedBody);
            res.setHeader("Content-Type", "text/html")
            returnBody(res,
                `<body><h1>Your form details submitted : ${parsedBody}</h1></body>`
            );
            return  res.end()
        });
        
    }
    else if(url ==='/text' && method ==='GET'){
        const body = [];
        req.on( "data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        let parsedBody
        req.on("end", () => {
            parsedBody = Buffer.concat(body).toString();
            console.log("Raw body:", parsedBody);
            fs.writeFileSync('data.txt', parsedBody);
            res.statusCode= 302;
            res.setHeader("Location", "/get")
            return  res.end()
        });
    }
    else{
        res.setHeader("Content-Type", "text/html")
        returnBody(res, 
            `<body>
                <h1>This server is made with Node.js Only  : This is default page for random route</h1>
            </body>`
        )
        return res.end()
    }
}

module.exports = requestHandler;