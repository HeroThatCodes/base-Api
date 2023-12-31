const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthname': 'Chancelor Bennett',
        'birthLocation': 'Chicage, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthname': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers [rapperName]){
        response.json(rappers[rapperName])  
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT} better go catch it. `)
})