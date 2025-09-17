const { CarroBuilder, MotoBuilder } = require('./problemBuilder.js');

console.log('### EXECUTANDO DEMONSTRAÇÃO DO BUILDER ###');

const carroBuilder = new CarroBuilder();

const carro = carroBuilder
  .definirTipo()
  .construirMotor()
  .instalarRodas()
  .instalarPortas()
  .getVeiculo();

console.log('--> Carro construído:');
carro.descrever();

const motoBuilder = new MotoBuilder();

const moto = motoBuilder
  .definirTipo()
  .construirMotor()
  .instalarRodas()
  .getVeiculo();

console.log('--> Moto construída:');
moto.descrever();

console.log('Padrão Builder implementado com sucesso!\n');