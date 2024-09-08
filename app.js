const express = require("express")
const routerBook = require("./Routers/book")

const app = express()

app.use('/books', routerBook)

const port = 8000
/*
   req = REQUEST é oque é mandado
   res = RESPONSE oque é devolvido 
*/

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})