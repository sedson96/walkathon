const express = require("express");
const app = express();
const PORT = 5070;
const {getSponsors,addSponsor,deleteSponsor,updateSponsor} = require("./sponsors_controller")
const {getGoals,setLapGoal,setAmountGoal} = require("./goals_controller")

app.use(express.json());

//Sponsers Info
app.get("/api/sponsors", getSponsors);
app.post("/api/sponsors", addSponsor);
app.put("/api/sponsors/:id", updateSponsor);
app.delete("/api/sponsors/:id", deleteSponsor);



// Participants Goals
app.get("/api/goals/",getGoals)
app.post("/api/lap/goals/:lap",setLapGoal)
app.post("/api/amount/goals/:amount",setAmountGoal)


app.listen(PORT, () => console.log(`listening on port ${PORT}`))