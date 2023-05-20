const connnecttomongo = require('./db');
const express = require('express');
var cors = require('cors')

const app = express();
const port =5000;

connnecttomongo();

app.use(cors());
app.use(express.json())
app.use('/api/auth' , require('./routes/auth'))

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("Done")
})

app.listen(port,()=>{
    console.log(`app lisetmimg at http://localhost:${port}`);
})