import { Schema, model, Document, Types } from 'mongoose';

export interface IOrder extends Document {
  userId: Types.ObjectId;
  assetSymbol: string;
  type: 'market' | 'limit';
  side: 'buy' | 'sell';
  quantity: number;
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
  status: 'pending' | 'filled' | 'partially_filled' | 'cancelled';
  filledQuantity: number;
  filledPrice?: number;
  filledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assetSymbol: { type: String, required: true, uppercase: true, trim: true },
    type: { type: String, enum: ['market', 'limit'], required: true },
    side: { type: String, enum: ['buy', 'sell'], required: true },
    quantity: { type: Number, required: true, min: [0.000001, 'Quantity must be greater than zero'] },
    price: { type: Number, min: 0 },
    stopLoss: { type: Number, min: 0 },
    takeProfit: { type: Number, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'filled', 'partially_filled', 'cancelled'],
      default: 'pending',
    },
    filledQuantity: { type: Number, default: 0, min: 0 },
    filledPrice: { type: Number, min: 0 },
    filledAt: { type: Date },
  },
  { timestamps: true }
);

orderSchema.index({ userId: 1, status: 1 });
orderSchema.index({ assetSymbol: 1, status: 1 });
orderSchema.index({ createdAt: -1 });

export const Order = model<IOrder>('Order', orderSchema);
