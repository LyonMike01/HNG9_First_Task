const { urlencoded } = require('express')
const express= require('express')
const cors = require("cors")

const app = express()
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({
    origin:"*"
}));

console.log ("ok")

app.get("/", (req, res) => {
    res.json({ 
        "slackUsername": "Titimike1", 
        "backend": true, 
        "age": 18, 
        "bio": "My name is Titiloye Temitope Michael, I'm a Web Developer" 
    })
    })


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  
