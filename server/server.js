const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/api/v1/blueberry", (req, res) => {
    res.status(200).send({message: "Shut up and give me food hooman!"});
});

// serve static assets

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`Server is up on: ${port}`);
});