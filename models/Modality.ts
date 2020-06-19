import mongoose, { Schema, model, Document } from 'mongoose';

export interface ModalityInterface extends Document{
    name: String,
    url: String
}

const ModalitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

mongoose.mo

export default mongoose.models.Modality || model<ModalityInterface>('Modality', ModalitySchema);