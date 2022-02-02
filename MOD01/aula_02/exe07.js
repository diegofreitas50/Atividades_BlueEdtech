// Defina uma variável para o valor de uma refeição que custou R$ 42,54. Na sequência, 
// defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será 
// responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 
// (valor com duas casas decimais).

const opcao1 = ("ovos com bacon");
const valor1 = 42.54;
const taxa = valor1 * 0.1 // 10% é o mesmo que multiplicar por 0.1
console.log (`Refeição: ${opcao1}
Valor da Refeição: ${valor1}
Taxa de serviço: ${taxa.toFixed(2)}
Valor total: ${(valor1 + taxa).toFixed(2)}`);

//.toFixed() serve para definir quantas casas decimais irão aparecer
