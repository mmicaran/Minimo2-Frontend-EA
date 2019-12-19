import { Request, Response, Router } from 'express';
import Student from '../models/Student';


class StudentRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    getStudents(req: Request, res: Response): void {
        Student.find({}).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });

    }

    getStudent(req: Request, res: Response): void {
        Student.findOne({ "_id": req.params.id }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });

    }

    createStudent(req: Request, res: Response): void {

        const { name, address, phones, studies } = req.body;
        console.log(phones);
        const newStudent = new Student({ name, address, phones, studies});

        newStudent.save().then((data) => {
            res.status(201).json(data);
            console.log(data);

        }).catch((err) => {
            res.status(500).json(err);
        });


    }

    getStudentTelecos(req: Request, res: Response): void {
        Student.find({ "studies": {$all : ["telecos"]} }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });

    }

    getStudentTelematica(req: Request, res: Response): void {
        Student.find({ "studies": {$all : ["telematica"]} }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });

    }

    getStudentAeros(req: Request, res: Response): void {
        Student.find({ "studies": {$all : ["aeros"]} }).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });

    }




    deleteStudent(req: Request, res: Response): void {
        const _id = req.params.id;
        const student = new Student();
        console.log(req.params.id);

        Student.findByIdAndDelete(_id).then((data) => {
            res.status(201).json(data);
            console.log(data);

        }).catch((err) => {
            res.status(500).json(err);
        });

    }

    updateStudent(req: Request, res: Response): void {
        const student = {
            name: req.body.name,
            address: req.body.address,
            phones: req.body.phones,
            studies: req.body.studies
        };

        Student.findByIdAndUpdate(req.params.id, { $set: student }, { new: true }).then((data) => {
            res.status(201).json(data);
            console.log(data);

        }).catch((err) => {
            res.status(500).json(err);
        })
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

export default studentRoutes.router;