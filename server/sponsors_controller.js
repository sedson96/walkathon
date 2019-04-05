let id = 3
let sponsors = [
    {
        id: 0,
        firstName: "John",
        lastName: "Smith",
        phone: "213-132-2133",
        amount: 500,
        perLap: false,
        paid: false,
        comment: null
    },
    {
        id: 1,
        firstName: "Charlie",
        lastName: "Daniels",
        phone: "232-982-2323",
        amount: .50,
        perLap: true,
        paid: false,
        comment: null
    },
    {
        id: 2,
        firstName: "Sandy",
        lastName: "Cheeks",
        phone: "843-2543-6523",
        amount: 2000,
        perLap: false,
        paid: true,
        comment: "get the money at the dark alley"
    }
]






let getSponsors = (request,response) => {
    response.json(sponsors)
}


let addSponsor = (request,response) => {
    let newSponsor = request.body;
    newSponsor.id = id
    sponsors.push(newSponsor)
    response.json(sponsors)
    id++
}


let updatePaid =(request,response) => {
    sponsors.forEach((sponsor,index) => {
        if (+request.params.id === sponsor.id) {
            sponsor.paid = request.body.paid
        }
    })
    response.json(sponsors)
}

let updateAmount = (request,response) => {
    sponsors.map((sponsor,index) => {
        if (+request.params.id === sponsor.id) {
            sponsor.amount = +request.body.amount
            sponsor.perLap = request.body.perLap
        }
        response.json(sponsors)
    })
}


let deleteSponsor = (request,response) => {
    sponsors.map((sponsor,index) => {
        if (+request.params.id === sponsor.id) {
            sponsors.splice(index,1)
        }

    })
    response.json(sponsors)
}




module.exports = {
    getSponsors,
    addSponsor,
    updatePaid,
    updateAmount,
    deleteSponsor
}