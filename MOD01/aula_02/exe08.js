// Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. 
// O valor do troco deve ser exibido no console.

const compra = 100.98
const pagamento = 150
const troco = (pagamento - compra).toFixed(2);

console.log(`Valor da compra: R$ ${compra}
Valor recebido: R$ ${pagamento}
Troco: R$ ${troco}`);
