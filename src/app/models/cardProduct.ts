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
