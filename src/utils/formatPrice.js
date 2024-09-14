/**
 * formats price
 * @param price numbers
 * @returns formatted price ex: 50 000 | 500 000
 */
export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * formats price
 * @param price numbers
 * @returns formatted price ex: 50, 000 | 500, 000
 */
export function formatPrice2(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
}
