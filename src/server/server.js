const express = require("express");
const app = express();
const cors = require("cors");

const { getScore } = require("./score");
const { getPdf } = require("./pdfGenerator");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/page-9",   (req, res) => {
  // console.log(req.body);
  let results = getScore(req.body);
  getPdf(results).then(()=>{
    console.log("pdf generated.")
  })
  res.status(200).json({results});
});