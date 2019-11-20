const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.json({ msg: "You have reached the digiDex API" })
);

app.listen(PORT, () => console.log(`digiDex server started on PORT: ${PORT}`));
