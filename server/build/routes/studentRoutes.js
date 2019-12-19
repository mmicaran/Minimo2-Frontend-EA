"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Student_1 = __importDefault(require("../models/Student"));
class StudentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getStudents(req, res) {
        Student_1.default.find({}).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    getStudent(req, res) {
        Student_1.default.findOne({ "_id": req.params.id }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    createStudent(req, res) {
        const { name, address, phones, studies } = req.body;
        console.log(phones);
        const newStudent = new Student_1.default({ name, address, phones, studies });
        newStudent.save().then((data) => {
            res.status(201).json(data);
            console.log(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    getStudentTelecos(req, res) {
        Student_1.default.find({ "studies": { $all: ["telecos"] } }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    getStudentTelematica(req, res) {
        Student_1.default.find({ "studies": { $all: ["telematica"] } }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    getStudentAeros(req, res) {
        Student_1.default.find({ "studies": { $all: ["aeros"] } }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    deleteStudent(req, res) {
        const _id = req.params.id;
        const student = new Student_1.default();
        console.log(req.params.id);
        Student_1.default.findByIdAndDelete(_id).then((data) => {
            res.status(201).json(data);
            console.log(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    updateStudent(req, res) {
        const student = {
            name: req.body.name,
            address: req.body.address,
            phones: req.body.phones,
            studies: req.body.studies
        };
        Student_1.default.findByIdAndUpdate(req.params.id, { $set: student }, { new: true }).then((data) => {
            res.status(201).json(data);
            console.log(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    routes() {
        this.router.get('/students', this.getStudents);
        this.router.post('/students', this.createStudent);
        this.router.delete('/students/:id', this.deleteStudent);
        this.router.get('/students/:id', this.getStudent);
        this.router.get('/telecos', this.getStudentTelecos);
        this.router.get('/telematica', this.getStudentTelematica);
        this.router.get('/aeros', this.getStudentAeros);
        this.router.put('/students/:id', this.updateStudent);
    }
}
const studentRoutes = new StudentRoutes();
studentRoutes.routes();
exports.default = studentRoutes.router;
