const express = require("express");
const app = express();

const port = 3000;

app.get('/method', (req, res) => {
    return res.send("hello there")
})

app.get('/', (req, res) => {
    return res.send("hello home")
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
})


// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => { console.log(`Example app listening on port ${port}`) })