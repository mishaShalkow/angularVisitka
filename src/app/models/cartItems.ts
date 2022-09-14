import { cartItem } from './cart';

export class cart {
  cartItems: cartItem[] = [];

  addToCart(cartItem: cartItem) {
    this.cartItems = this.cartItems.map((abc) => {
      if (abc.item?.id == cartItem.item?.id) {
        /* abc.quantity++; */
      }
      return abc;
    });
  }
}
