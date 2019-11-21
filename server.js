const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();
// bodyparser middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "You have reached the digiDex API" })
);

//Route definitions
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

app.listen(PORT, () => console.log(`digiDex server started on PORT: ${PORT}`));
