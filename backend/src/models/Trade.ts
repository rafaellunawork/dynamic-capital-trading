import { Schema, model, Document, Types } from 'mongoose';

export interface ITrade extends Document {
  userId: Types.ObjectId;
  orderId: Types.ObjectId;
  positionId: Types.ObjectId;
  assetSymbol: string;
  side: 'buy' | 'sell';
  quantity: number;
  entryPrice: number;
  exitPrice: number;
  pnl: number;
  fee: number;
  openedAt: Date;
  closedAt: Date;
  createdAt: Date;
}

const tradeSchema = new Schema<ITrade>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    positionId: { type: Schema.Types.ObjectId, ref: 'Position', required: true },
    assetSymbol: { type: String, required: true, uppercase: true, trim: true },
    side: { type: String, enum: ['buy', 'sell'], required: true },
    quantity: { type: Number, required: true, min: [0.000001, 'Quantity must be greater than zero'] },
    entryPrice: { type: Number, required: true, min: [0.000001, 'Entry price must be greater than zero'] },
    exitPrice: { type: Number, required: true, min: [0.000001, 'Exit price must be greater than zero'] },
    pnl: { type: Number, required: true },
    fee: { type: Number, default: 0, min: 0 },
    openedAt: { type: Date, required: true },
    closedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

tradeSchema.index({ userId: 1, closedAt: -1 });
tradeSchema.index({ assetSymbol: 1 });

export const Trade = model<ITrade>('Trade', tradeSchema);
