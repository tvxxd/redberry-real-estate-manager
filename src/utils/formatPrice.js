/**
 * formats price
 * @param price coming from api
 * @returns formatted price ex: 50 000 | 500 000
 */
export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
