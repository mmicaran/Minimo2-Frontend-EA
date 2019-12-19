"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SubjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    students: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', unique: false }]
});
exports.default = mongoose_1.model('Subject', SubjectSchema);
