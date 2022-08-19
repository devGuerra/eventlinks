export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
  hour: 'numeric',
  minute: 'numeric',
});
