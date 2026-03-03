import { Schema, model, Document, Types } from 'mongoose';

export interface IBalance extends Document {
  userId: Types.ObjectId;
  available: number;
  reserved: number;
  createdAt: Date;
  updatedAt: Date;
}

const balanceSchema = new Schema<IBalance>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    available: { type: Number, default: 10000, min: 0 },
    reserved: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

balanceSchema.virtual('total').get(function (this: IBalance) {
  return this.available + this.reserved;
});

balanceSchema.set('toJSON', { virtuals: true });

export const Balance = model<IBalance>('Balance', balanceSchema);
