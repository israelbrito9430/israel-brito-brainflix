const express = require("express");
const cors = require("cors");

//routes
const bookRoutes = require("./routes/books");
const genreRoutes = require("./routes/genres");

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

app.use('/api/books', bookRoutes);
app.use('/api/genres', genreRoutes);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})