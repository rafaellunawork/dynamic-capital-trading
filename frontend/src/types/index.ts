export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  isVerified: boolean;
}

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  change24h: number;
  high24h: number;
  low24h: number;
  icon?: string;
}

export interface Order {
  id: string;
  userId: string;
  assetSymbol: string;
  type: 'market' | 'limit';
  side: 'buy' | 'sell';
  quantity: number;
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
  status: 'pending' | 'filled' | 'partially_filled' | 'cancelled';
  createdAt: string;
  filledAt?: string;
}

export interface Position {
  id: string;
  userId: string;
  assetSymbol: string;
  side: 'long' | 'short';
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnl: number;
  stopLoss?: number;
  takeProfit?: number;
  status: 'open' | 'closed';
  openedAt: string;
}

export interface Trade {
  id: string;
  userId: string;
  assetSymbol: string;
  side: 'buy' | 'sell';
  quantity: number;
  entryPrice: number;
  exitPrice: number;
  pnl: number;
  fee: number;
  openedAt: string;
  closedAt: string;
}

export interface Balance {
  available: number;
  reserved: number;
  total: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'trade' | 'balance' | 'price' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
