class Veiculo {
  constructor() {
    this.tipo = '';
    this.motor = '';
    this.rodas = 0;
    this.portas = 0;
  }

  descrever() {
    console.log(`
      --- Detalhes do Veículo ---
      Tipo: ${this.tipo}
      Motor: ${this.motor}
      Rodas: ${this.rodas}
      Portas: ${this.portas || 'N/A'}
      ---------------------------
    `);
  }
}

class VeiculoBuilder {
  definirTipo() {}
  construirMotor() {}
  instalarRodas() {}
  instalarPortas() {}
  getVeiculo() {}
}

class CarroBuilder extends VeiculoBuilder {
  constructor() {
    super();
    this.veiculo = new Veiculo();
  }

  definirTipo() {
    this.veiculo.tipo = 'Carro';
    return this; 
  }

  construirMotor() {
    this.veiculo.motor = '1.6 V4';
    return this;
  }

  instalarRodas() {
    this.veiculo.rodas = 4;
    return this;
  }

  instalarPortas() {
    this.veiculo.portas = 4;
    return this;
  }

  getVeiculo() {
    return this.veiculo;
  }
}

class MotoBuilder extends VeiculoBuilder {
  constructor() {
    super();
    this.veiculo = new Veiculo();
  }

  definirTipo() {
    this.veiculo.tipo = 'Moto';
    return this;
  }

  construirMotor() {
    this.veiculo.motor = '500cc';
    return this;
  }

  instalarRodas() {
    this.veiculo.rodas = 2;
    return this;
  }

  instalarPortas() {
    return this;
  }

  getVeiculo() {
    return this.veiculo;
  }
}

module.exports = {
  CarroBuilder,
  MotoBuilder,
};



console.log("Iniciando a construção de veículos com o padrão Builder...");

console.log("\n--> Construindo um Carro...");
const carroBuilder = new CarroBuilder();
const carro = carroBuilder
  .definirTipo()
  .construirMotor()
  .instalarRodas()
  .instalarPortas()
  .getVeiculo();

carro.descrever();


console.log("--> Construindo uma Moto...");
const motoBuilder = new MotoBuilder();
const moto = motoBuilder
  .definirTipo()
  .construirMotor()
  .instalarRodas()
  .getVeiculo();

moto.descrever();

console.log("\nConstrução de veículos finalizada.");