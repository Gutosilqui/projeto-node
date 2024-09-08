const fs = require("fs")

function getAllBooks() {
    return JSON.parse( fs.readFileSync("books.json"))
}

function getBookForId(){
    
} 

module.exports = {
    getAllBooks
}