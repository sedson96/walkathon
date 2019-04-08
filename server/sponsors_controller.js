let id = 8
let sponsors = [
    {
        id: 0,
        firstName: "Cat",
        lastName: "Dog",
        phone: "213-132-2133",
        amount: 50,
        perLap: false,
        paid: false,
        comment: null
    },
    {
        id: 1,
        firstName: "Grim",
        lastName: "Reaper",
        phone: "232-982-2323",
        amount: .50,
        perLap: true,
        paid: false,
        comment: "not to sure about going to the underworld for the money"
    },
    {
        id: 2,
        firstName: "Larry",
        lastName: "The Lobster",
        phone: "843-2543-6523",
        amount: 1,
        perLap: true,
        paid: false,
        comment: "get the money at the dark alley"
    },
    {
        id: 3,
        firstName: "Tony",
        lastName: "Stark",
        phone: "942-432-4234",
        amount: 7000,
        perLap: false,
        paid: true,
        comment: "don't tell pepper"
    },
    {
        id: 4,
        firstName: "Poseidon",
        lastName: "god of the sea",
        phone: "234-234-2342",
        amount: 10,
        perLap: false,
        paid: false,
        comment: "make sure the money is not wet"
    },
    {
        id: 5,
        firstName: "Pikkachu",
        lastName: "",
        phone: "234-234-2342",
        amount: 2,
        perLap: true,
        paid: false,
        comment: "Donation was very shocking"
    },
    {
        id: 6,
        firstName: "Tinky",
        lastName: "Winky",
        phone: "234-234-2342",
        amount: 89,
        perLap: true,
        paid: false,
        comment: ""
    },
    {
        id: 7,
        firstName: "Josh",
        lastName: "Nicholes",
        phone: "232-346-4235",
        amount: 100,
        perLap: false,
        paid: false,
        comment: "get the money from Helen at the premier"
    },
    {
        id: 8,
        firstName: "Tom",
        lastName: "& Jerry",
        phone: "239-653-7644",
        amount: 2,
        perLap: false,
        paid: true,
        comment: null
    }
]






let getSponsors = (request,response) => {
    response.json(sponsors)
}


let addSponsor = (request,response) => {
    let newSponsor = request.body;
    newSponsor.amount = +request.body.amount
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
    })
    response.json(sponsors)
}

let filterSponsors = (request, response) => {
    let filtered = []
    sponsors.map ((sponsor,index) => {
        if (sponsor.firstName.includes(request.query.text) || sponsor.lastName.includes(request.query.text)) {
            filtered.push(sponsor)
        }
    })
    response.json(filtered);
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
    filterSponsors,
    deleteSponsor
}