import mongoose, { Schema, model, Document } from 'mongoose';

const ResultsSchema = new Schema({}, {
    timestamps: true,
    strict: false
});

export default mongoose.models.Results || model('Results', ResultsSchema);