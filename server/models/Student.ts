import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phones: [{
        key: String,
        value: String
    }],
    studies: [String]
});

export default model('Student', StudentSchema);