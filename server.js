// Importing expressjs

//Express Js for creating server and api get,post,put and delete
const express=require('express')

//Body Parsers for getting the data through the urls
const bodyParser=require('body-parser')


//const app controls the entire app with express functional constructor
const app=express()

//we express saying expressjs that to use body parser unlencoded to be true
app.use(bodyParser.urlencoded({extended:true}))

//Create route with creating the quote
app.post('/quotes',(req,res)=>{
    res.send(req.body)
})



app.get('/',(req,res)=>{
    res.sendFile(__dirname + './index.html')
    res.send('Hello world')
})

const PORT=3000

app.listen(PORT,()=>{
    console.log('server running at port ${PORT}')
})
    