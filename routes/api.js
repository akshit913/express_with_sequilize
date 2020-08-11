const route = require('express').Router()
const db = require('../db')
//this route is available on the /api/ path.
route.get('/',(req,res)=>{
    db.getAllPersons()
        .then((persons) =>{
            res.send(persons)
        })
        .catch((err) =>res.send({error :err}))
})
route.post('/',(req,res)=>{
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
    .then(() => res.redirect("/api/"))
    .catch((err) => res.send({error: err}))
})

exports = module.exports = {
    route
}