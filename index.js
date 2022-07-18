 let express = require("express");
 let app = express();
 let fs = require("fs");
 let path = require("path");

 app.use(express.json())

app.use(express.urlencoded({ extended: true })) ;

let path1 = path.join(".","one.txt")
 let rf = fs.readFileSync(path1);

 console.log(rf.toString());

app.get("/api" , (req , res)=>{

      res.send(rf.toString());

})

app.post("/api" , (req , res) =>{
    let data = req.body;
    rf = fs.writeFileSync(path1,JSON.stringify(data))
    let r = fs.readFileSync(path1)
    res.send(r);
})


 app.listen(4005 , () => console.log("listening to port no : 4005"));