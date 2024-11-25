import mongoose, { Document, Schema } from 'mongoose';

export interface IApartment extends Document {
  address: string;
  location: string;
  city: string;
  readyToMove: boolean;
  price: number;
  comission?: number;
  downPayment?: number;
  deliveryYear?: Date;
}

const apartmentSchema: Schema = new Schema(
  {
    address: {
      type: String,
      required: [true, 'Address is required']
    },
    location: {
      type: String,
      required: [true, 'Location is required']
    },
    city: {
      type: String,
      required: [true, 'City is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    readyToMove: { type: Boolean, default: true },
    comission: { type: Number },
    downPayment: { type: Number },
    deliveryYear: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IApartment>('Apartment', apartmentSchema);
