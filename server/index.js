const express = require('express');
// import cors from 'cors';


const app = express()
// app.use(cors())
app.use(express.json())


app.listen(5500)