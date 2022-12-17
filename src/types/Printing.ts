export enum PaperSize {
  A4 = 'A4',
  A5 = 'A5',
  B4 = 'B4',
  B5 = 'B5',
}

export type PriceItem = {
  business_day: number;
  price: number;
  quantity: number;
  isSelected?: boolean;
};

export type PriceDataResponse = {
  paper_size: PaperSize;
  prices: PriceItem[][];
};
