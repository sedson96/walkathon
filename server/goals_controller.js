let lapGoal = 10;
let amountGoal = 10000;


let getGoals = (request,response) => {
    response.json({lapGoal,amountGoal})
}


let setLapGoal = (request,response) => {
    lapGoal = request.params.lap
    response.json(lapGoal)
}


let setAmountGoal = (request,response) => {
    amountGoal = request.params.amount
    response.json(amountGoal)
}



module.exports = {
    getGoals,
    setLapGoal,
    setAmountGoal
}