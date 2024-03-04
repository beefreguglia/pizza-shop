export function translatePriceInCentsInCurrency(priceInCents: number) {
  return priceInCents.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
