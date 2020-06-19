import mongoose, { Schema, model, Document } from 'mongoose';

const RequestsSchema = new Schema({}, {
    timestamps: true,
    strict: false
});

export default mongoose.models.Requests || model('Requests', RequestsSchema);