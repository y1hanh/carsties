export type PageResult<T> = {
  result: T[];
  pageCount: number;
  totalCount: number;
};

export type Auction = {
  reservePrice?: number;
  seller: string;
  winner?: string;
  soldAmount?: number;
  currentHighBid?: number;
  createdAt: string;
  updateAt?: string;
  auctionEnd?: string;
  status: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  imageUrl: string;
  id: string;
};
