const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATABASE_CONNECTION = "mongodb+srv://assignuser:mongodbkapass@cluster0.96utj.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose
  .connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at : http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error));

const calorie = require("./routes/calorie.routes");
const users = require("./routes/users.routes");

app.use("/calorie", calorie);
app.use("/users", users);