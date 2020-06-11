import { Schema, model, Document } from 'mongoose';

const ResultsSchema = new Schema({}, {
    timestamps: true,
    strict: false
});

export default model('Results', ResultsSchema);