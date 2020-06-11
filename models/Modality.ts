import { Schema, model, Document } from 'mongoose';

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

export default model<ModalityInterface>('Modality', ModalitySchema);