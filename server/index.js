const express = require("express");
const app = express();
const PORT = 5070;
const {getSponsors,addSponsor} = require("./sponsors_controller")

app.use(express.json());

app.get("/api/sponsors", getSponsors);
app.post("/api/sponsors", addSponsor)


app.listen(PORT, () => console.log(`listening on port ${PORT}`))