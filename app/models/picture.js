// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition
const picSchema = new Schema(
    {
        name: String,
        year: Number,
        description: String,
        picture: String,
        postDate : { type: Date, default: Date.now } // Timestamp

    }
);

// We export the schema to use it anywhere else
export default mongoose.model('Picture', picSchema);