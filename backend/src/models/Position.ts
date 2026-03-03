import { Schema, model, Document, Types } from 'mongoose';

export interface IPosition extends Document {
  userId: Types.ObjectId;
  assetSymbol: string;
  side: 'long' | 'short';
  quantity: number;
  entryPrice: number;
  stopLoss?: number;
  takeProfit?: number;
  status: 'open' | 'closed';
  closedAt?: Date;
  closedPrice?: number;
  realizedPnl?: number;
  createdAt: Date;
  updatedAt: Date;
}

const positionSchema = new Schema<IPosition>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assetSymbol: { type: String, required: true, uppercase: true, trim: true },
    side: { type: String, enum: ['long', 'short'], required: true },
    quantity: { type: Number, required: true, min: [0.000001, 'Quantity must be greater than zero'] },
    entryPrice: { type: Number, required: true, min: 0 },
    stopLoss: { type: Number, min: 0 },
    takeProfit: { type: Number, min: 0 },
    status: { type: String, enum: ['open', 'closed'], default: 'open' },
    closedAt: { type: Date },
    closedPrice: { type: Number, min: 0 },
    realizedPnl: { type: Number },
  },
  { timestamps: true }
);

positionSchema.index({ userId: 1, status: 1 });
positionSchema.index({ assetSymbol: 1, status: 1 });

export const Position = model<IPosition>('Position', positionSchema);
