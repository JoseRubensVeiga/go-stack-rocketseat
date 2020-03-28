export function formatPrice(number) {
  return `R$ ${number.toFixed(2).toLocaleString('pt-BR')}`;
}
