export type Apartment = {
  address: string;
  location: string;
  city: string;
  readyToMove: boolean;
  price: number;
  comission?: number;
  downPayment?: number;
  deliveryYear?: Date;
};
