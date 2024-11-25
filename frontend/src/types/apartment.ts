export type Apartment = {
  _id: string,
  address: string;
  location: string;
  city: string;
  readyToMove: boolean;
  price: number;
  comission?: number;
  downPayment?: number;
  deliveryYear?: Date;
};

export type ApartmentFormData = {
  address: string;
  location: string;
  city: string;
  readyToMove: boolean;
  price: number;
  comission?: number;
  downPayment?: number;
  deliveryYear?: Date | null;
}
