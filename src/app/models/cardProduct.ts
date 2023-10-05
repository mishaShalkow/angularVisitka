export interface IProduct {
  id: number
  price: number
  count: number
  titleImg: string
  titleCard: string
  informationProduct: string
  total: number
  art: number
  fullName: string
  awayDelivery: string
  numberCustomer: number
  protection: string
  power: string
  light: number
  color: string
  Execution: string
  voltage: number
  material: string
  temperature: number
  Dmaterial: string
  size: number
  package: string
}

export interface OfferProduct {
  art: number
  titleCard: string
  price: number
  count: number
  fullName: string
  awayDelivery: string
  numberCustomer: number
}

export interface basket {
  art: number
  titleCard: string
  price: number
  count: number
  totalPrice: number
}
