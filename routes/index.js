'use strict'

const express = require('express')
const users = require('../controllers/userController')
const account = require('../controllers/accountController')
const plans = require('../controllers/plansController')
const center = require('../controllers/centerController')
const supplys = require('../controllers/supplyController')
const service = require('../controllers/serviceController')


const isAuth = require('../middlewares/auth')
const api = express.Router()


api.get('/', (req, res)=>{
    res.status(200).send({message:`Hola ya está en marcha el servidor, perfectirijillo, amigucho ucho, lima limón `})
})
api.get('/users', users.getUsers )


// Log In
api.post('/signin', users.signIn)
api.post('/getuserbyemail', users.getUserByEmail)
// End login

//Account
api.post('/account/newAccount',isAuth, account.newAccount)
api.post('/account/countAccount',isAuth, account.countAccount)
api.post('/account/getAccount',isAuth, account.getAccount)
api.post('/account/getAccountById/:id',isAuth, account.getAccountById)
api.post('/account/editAccount',isAuth, account.editAccount)
//End Account

//Plans
api.post('/plans/newPlan',isAuth, plans.newPlan)
api.post('/plans/getPlans',isAuth, plans.getPlans)
api.post('/plans/deletPlans',isAuth, plans.deletPlans)
api.post('/plans/getPlanById/:id',isAuth, plans.getPlanById)


//Center
api.post('/center/centerCount',isAuth, center.centerCount)
api.post('/center/newCenter',isAuth, center.newCenter)
api.post('/center/getCenterById',isAuth, center.getCenterById)
api.post('/center/editCenter',isAuth, center.editCenter)
api.post('/center/getCenters',isAuth, center.getCenters)
api.post('/center/findCenterById/:id',isAuth, center.findCenterById)

// api.get('/users/allusers', users.getUsers)

//Users
api.post('/users/signUp', users.signUp)
api.post('/users/getUsers', users.getUsers)
api.post('/users/getUserById/:id', users.getUserById)
api.post('/users/upDateUser/:id', users.upDateUser)


//Supply
api.post('/supplys/newSupply', supplys.newSupply)
api.post('/supplys/getSupply', supplys.getSupply)
api.post('/supplys/updateSupply', supplys.updateSupply)


//Services
api.post('/services/newService', service.newService)
api.post('/services/getServicesByAccount', service.getServicesByAccount)
api.post('/services/findByIdAndUpdate', service.findByIdAndUpdate)

//test
api.get('/private', function(req, res){
    res.status(200).send('genial funciona')
})
api.get('/master', users.master)

module.exports = api
