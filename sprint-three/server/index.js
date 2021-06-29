const express = require("express");
const cors = require("cors");

//routes

const videoRoutes = require("./routes/videos");

const app = express();

//config
require("dotenv").config();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('it works')
// })

app.use('/api/videos', videoRoutes);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})