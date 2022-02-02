console.clear();
console.log();

var prompt = require('prompt-sync')();

let rep = 0;
let result = 0;
var sucesso = 0;

console.log(
	`Essa é a história de Aerin. O Jovem elfo guerreiro, cresceu em uma pequena vila que fica entre a Floresta Oculta e o Império de Constant.
Como filho do chefe, cujo nome era Callen, foi ensinado a lutar e a caçar para ajudar seu povo a sobeviver. 
Sabe-se que há anos os elfos eram expulsos de suas terras pelos humanos, porém havia uma mistura de paz e ressentimento no ar, 
pois nos últimos 20 anos nenhuma grande guerra acontecia naquelas terras. Aerin também se destacava pela sua maestria com magia. 
Apesar de seus irmãos nascerem com essa aptidão, ele conseguia surpreender a todos pela sua criatividade e experiências com novos feitiços. 
Sua mãe Anna, era a principal sacerdotisa da vila e ensinava aos jovens como manipular a magia elemental e a magia de cura.
Após a morte do Imperador, Andreas III de Constante, houve um golpe de estado dos oficiais de alto escalão, movidos pelo preconceito e ódio aos elfos. 
Era o fim da paz e o início da história de Aerin o elfo guerreiro. Um ano após o golpe, o Império de Constant envia tropas para a Floresta Oculta, a fim de exterminar as poucas centenas de elfos que ali viviam. 
A sacerdotisa Anna, mãe de Aerin, atrvés de seu dom de clarividência, pressentiu que o mal estava próximo e enviou seu filho para longe, dias antes do exército do Império chegar. 
Quando Aerin retorna, após uma semana de treino com magia em um vilarejo a oeste de sua casa, ele encontra uma cena de desruição e morte,
com alguns poucos soldados saqueando as casas e os corpos dos seus irmãos elfos, que apesar de lutarem bravamente, foram dizimados pelo exército de 5 mil homens do império.
Ele se vinga dos vinte soldados armados com espadas e escudos, e faz isso de forma brilhante, sem levar nenhum arranhã, porém acaba desmaiando por ter usado muita magia. Ao acordar, 
Aerin jura vingança e começa sua jornada para se fortalecer e destruir o novo Imperador, George I da dinastia Maximillian, também cohecido como usurpador.
Responda`
);

while (rep < 1) {
	const p1 = prompt(
		`Aerin ganhou experiência e poder sobrevivendo na Floresta Oculta? `
	);

	if (p1 == 'sim') {
		console.clear();
		sucesso++;
		rep++;
	} else if (p1 == 'nao') {
		console.clear();
		rep++;
	} else {
		console.clear();
		console.log(`Digite apenas sim ou nao!`);
		console.log();
	}
}
console.log();

while (rep < 2) {
	const p2 = prompt(
		`Aerin se junta a um grupo de elfos remanescentes, liderados por Rohana, Galadriel e Idrill? `
	);

	if (p2 == 'sim') {
		console.clear();

		sucesso++;
		rep++;
	} else if (p2 == 'nao') {
		console.clear();
		rep++;
	} else {
		console.clear();
		console.log('Digite apenas sim ou nao!');
		console.log();
	}
}

console.log();

while (rep < 3) {
	const p3 = prompt(
		`Aerin, após vencer inúmeras batalhas para sobreviver, se alia a membros da corte simpatizante dos elfos? `
	);

	if (p3 == 'sim') {
		console.clear();
		sucesso++;
		rep++;
	} else if (p3 == 'nao') {
		console.clear();
		rep++;
	} else {
		console.clear();
		console.log('Digite apenas sim ou nao!');
		console.log();
	}
}
console.log();

while (rep < 4) {
	const p4 = prompt(
		`Aerin consegue sua vingança e destrona George I, o usurpador dando um fim a sua curta dinastia? `
	);

	if (p4 == 'sim') {
		console.clear();

		sucesso++;
		rep++;
	} else if (p4 == 'nao') {
		console.clear();

		rep++;
	} else {
		console.clear();
		console.log('Digite apenas sim ou nao!');
		console.log();
	}
}
console.log();

while (rep < 5) {
	const p5 = prompt(
		`Aerin consegue se reestabelecer com uma nova vila, e um novo ciclo de paz entre humanos e elfos? `
	);

	if (p5 == 'sim') {
		console.clear();

		sucesso++;
		rep++;
	} else if (p5 == 'nao') {
		console.clear;

		rep++;
	} else {
		console.clear();
		console.log('Digite apenas sim ou nao!');
		console.log();
	}
}

console.clear();
console.log();

while (result < 1) {
	const final = prompt('Digite CORAGEM para desbloquear o desfecho: ');

	if (final == `CORAGEM` || final == `coragem`) {
		console.clear();
		result++;
	} else {
		console.clear();
		console.log();
		console.log(`Somente a CORAGEM desbloqueará o desfecho, digite coragem: `);
	}
}
console.clear();

if (sucesso == 0) {
	console.log(
		`\nAerin, apesar de seu imenso poder, é capturado quando tentava invadir o Império sozinho e é condenado a morte.\n`
	);
} else if (sucesso == 2 || sucesso == 1) {
	console.log(
		`\nAerin desistiu de sua vingança e tenta sobreviver nos arredores da Floresta Oculta enquanto é 
caçado pelo Imperador George I Maximillian.\n`
	);
} else if (sucesso == 3) {
	console.log(
		`\nAerim encontrou o amor e desistiu de sua vingança, utilizando um feitiço de disfarce, 
ele troca o seu nome para Arthur, e vive uma vida tranquila como camponês, com sua esposa humana chamada Laura e seus 3 filhos de sangue híbrido.\n`
	);
} else if (sucesso == 4) {
	console.log(
		`\nAerin conquistou suas terras de volta, conseguiu o respeito e o amor do povo humano por conseguir 
libertá-los do cruel Imperador George I. Porém, continua sofrendo ao lembrar dos companheiros mortos em batalha.\n`
	);
} else if (sucesso == 5) {
	console.log(`\nAerin conquistou tudo o que pretendia, seu poder e inteligência são admirados por 
todo o povo. Os elfos migravam de todas as partes do mundo, tornando a Floresta Oculta uma potência cultural e militar.
Ele também encontrou o amor, em sua parceira de batalhas Rohana, criando assim, seu próprio ciclo de paz e felicidade.\n`);
}