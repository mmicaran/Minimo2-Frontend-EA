import { Phone } from "./phone";

export class Student {
  constructor(_id = '', name = '', address = '', phones, studies) {
    this._id = _id;
    this.name = name;
    this.address = address;
    this.phones = phones;
    this.studies = studies;
  }

  _id: string;
  name: string;
  address: string;
  phones: Phone[];
  studies: String[];


}
