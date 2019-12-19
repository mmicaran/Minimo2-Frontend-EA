"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Subject_1 = __importDefault(require("../models/Subject"));
const Student_1 = __importDefault(require("../models/Student"));
class SubjectRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getSubjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subjects = yield Subject_1.default.find({});
                if (!subjects) {
                    res.status(404).send({ message: 'Subjects not found' });
                }
                else {
                    res.status(201).json(subjects);
                }
            }
            catch (err) {
                res.status(500).json(err);
            }
        });
    }
    getSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subject = yield Subject_1.default.findOne({ "_id": req.params.id });
                if (!subject) {
                    res.status(404).send({ message: 'Subject not found' });
                }
                else {
                    res.status(201).json(subject);
                }
            }
            catch (err) {
                res.status(500).json(err);
            }
        });
    }
    createSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = new Subject_1.default({ name: req.body.name });
            try {
                const newSubject = yield subject.save();
                if (!newSubject) {
                    res.status(404).send({ message: 'Subject not created' });
                }
                else {
                    res.status(201).json(subject);
                }
            }
            catch (err) {
                res.status(500).json(err);
            }
        });
    }
    deleteSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subjectId = req.params.id;
            try {
                const deleteSubject = yield Subject_1.default.findByIdAndDelete(subjectId);
                if (!deleteSubject) {
                    res.status(404).send({ message: 'Subject not deleted' });
                }
                else {
                    res.status(201).json({ message: 'Subject deleted' });
                }
            }
            catch (err) {
                res.status(500).json(err);
            }
        });
    }
    addStudentSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentId = req.body.studentId;
            const subjectId = req.body.subjectId;
            console.log(`SubjectID: ${subjectId}, StudentId: ${studentId}`);
            try {
                let studentOk = yield Student_1.default.findById(studentId);
                console.log(studentOk);
                if (!studentOk) {
                    return res.status(404).send({ message: 'Student not found' });
                }
                else {
                    let subjectUpdate = yield Subject_1.default.findOneAndUpdate({ _id: subjectId }, { $addToSet: { students: studentId } });
                    if (!subjectUpdate) {
                        return res.status(404).send({ message: 'Subject not found' });
                    }
                    else {
                        console.log(subjectUpdate);
                        return res.status(201).send({ message: 'Student added' });
                    }
                }
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    deleteStudentSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentId = req.body.studentId;
            const subjectId = req.body.subjectId;
            console.log(`SubjectID: ${subjectId}, StudentId: ${studentId}`);
            try {
                let studentOk = yield Student_1.default.findById(studentId);
                console.log(studentOk);
                if (!studentOk) {
                    return res.status(404).send({ message: 'Student not found' });
                }
                else {
                    let subjectUpdate = yield Subject_1.default.findOneAndUpdate({ _id: subjectId }, { $pull: { students: studentId } });
                    if (!subjectUpdate) {
                        return res.status(404).send({ message: 'Subject not found' });
                    }
                    else {
                        console.log(subjectUpdate);
                        return res.status(201).send({ message: 'Student deleted from Subject' });
                    }
                }
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    updateSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = { name: req.body.name };
            try {
                let subjectUpdate = yield Subject_1.default.findByIdAndUpdate(req.params.id, { $set: subject }, { new: true });
                if (!subjectUpdate) {
                    return res.status(404).send({ message: 'Subject not found' });
                }
                else {
                    return res.status(201).send({ message: 'Subject updated' });
                }
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    routes() {
        this.router.get('/subjects', this.getSubjects);
        this.router.get('/subjects/:id', this.getSubject);
        this.router.post('/subjects', this.createSubject);
        this.router.post('/subjects/addstudent', this.addStudentSubject);
        this.router.post('/subjects/deletestudent', this.deleteStudentSubject);
        this.router.delete('/subjects/:id', this.deleteSubject);
        this.router.put('/subjects/:id', this.updateSubject);
    }
}
const subjectRoutes = new SubjectRoutes();
subjectRoutes.routes();
exports.default = subjectRoutes.router;
