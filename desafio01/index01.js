
const { FabricaTemaClaro, FabricaTemaEscuro } = require('./problemAbstract.js');

console.log('### EXECUTANDO DEMONSTRAÇÃO DO ABSTRACT FACTORY ###');

const fabricaClara = new FabricaTemaClaro();

const botaoClaro = fabricaClara.criarBotao();
const textoClaro = fabricaClara.criarTexto();

console.log(botaoClaro.descrever());
console.log(textoClaro.descrever());

console.log('---');

const fabricaEscura = new FabricaTemaEscuro();
const botaoEscuro = fabricaEscura.criarBotao();
const textoEscuro = fabricaEscura.criarTexto();

console.log(botaoEscuro.descrever());
console.log(textoEscuro.descrever());

console.log('\n Padrão Abstract Factory implementado com sucesso!\n');