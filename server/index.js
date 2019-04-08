const express = require("express");
const app = express();
const PORT = 5070;
const {getSponsors,addSponsor,deleteSponsor,updatePaid,updateAmount,filterSponsors} = require("./sponsors_controller")
const {getGoals,setLapGoal,setAmountGoal} = require("./goals_controller")

app.use(express.json());

//Sponsers Info
app.get("/api/sponsors", getSponsors);
app.get("/api/sponsors/filter", filterSponsors);
app.post("/api/sponsors", addSponsor);
app.put("/api/sponsors/:id", updatePaid);
app.put("/api/sponsors/amount/:id", updateAmount);
app.delete("/api/sponsors/:id", deleteSponsor);



// Participants Goals
app.get("/api/goals/",getGoals)
app.put("/api/lap/goals/:lap",setLapGoal)
app.put("/api/amount/goals/:amount",setAmountGoal)


app.listen(PORT, () => console.log(`listening on port ${PORT}`))