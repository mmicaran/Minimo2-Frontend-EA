import { Student } from "./student";

export class Subject {

  constructor(_id = '', name = '', students= []) {
    this._id = _id;
    this.name = name;
    this.students = students;
  }

  _id: string;
  name: string;
  students: Student[];
}
