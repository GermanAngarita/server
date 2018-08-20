'use strict'

const Service = require('../models/service')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

function newService(req, res){
    const service = new Service({
        name: req.body.name ,
        type: req.body.type,
        code: req.body.code ,
        description: req.body.description ,
        value: req.body.value ,
        cost: req.body.cost ,
        tax: req.body.tax ,
        supplys:req.body.supplys ,
        account: req.body.account ,
    })
    service.save( (err)=>{
        if(err) return res.status(500).send({msg:'Error al crear el servicio', err:err})
        res.status(200).send({msg:'El Servicio se ha creado con exito'})
    })
}

function getServicesByAccount(req, res){
    let id = req.body.id
    Service.aggregate([
        { $match: { account:ObjectId(id) }}
    ], (err, services)=>{
        if(err) return res.status(500).send({msg:'Error al obtener los servicios', error:err})
        res.status(200).send(services)
    })
}

function findByIdAndUpdate(req, res){
    let id = req.body._id
    let upDate = req.body
    Service.findByIdAndUpdate(id, upDate, (err, response)=>{
        if(err) return res.status(500).send({msg:'Error al actualizar el serivicio', error:err})
        res.status(200).send({msg:'El servicio se ha actualizado correctamente'})
    })
}

module.exports = {
    newService,
    getServicesByAccount,
    findByIdAndUpdate
}