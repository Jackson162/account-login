const express = required('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hi, Alpha Camp.')
})


app.listen(port, () => {
    console.log(`This server is listening to http://localhost:${port}`)
})