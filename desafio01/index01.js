class ComponenteUI {
    descrever() {
      throw new Error("Este método deve ser implementado pela subclasse.");
    }
  }
  
  class Botao extends ComponenteUI {}
  class Texto extends ComponenteUI {}
  
  class BotaoClaro extends Botao {
    descrever() {
      return "Componente: Botão | Tema: Claro";
    }
  }
  
  class TextoClaro extends Texto {
    descrever() {
      return "Componente: Texto | Tema: Claro";
    }
  }
  
  class BotaoEscuro extends Botao {
    descrever() {
      return "Componente: Botão | Tema: Escuro";
    }
  }
  
  class TextoEscuro extends Texto {
    descrever() {
      return "Componente: Texto | Tema: Escuro";
    }
  }
  
  class FabricaDeUI {
    criarBotao() {
      throw new Error("Este método deve ser implementado pela subclasse.");
    }
  
    criarTexto() {
      throw new Error("Este método deve ser implementado pela subclasse.");
    }
  }
  
  class FabricaTemaClaro extends FabricaDeUI {
    criarBotao() {
      return new BotaoClaro();
    }
  
    criarTexto() {
      return new TextoClaro();
    }
  }
  
  class FabricaTemaEscuro extends FabricaDeUI {
    criarBotao() {
      return new BotaoEscuro();
    }
  
    criarTexto() {
      return new TextoEscuro();
    }
  }
  
  module.exports = {
    FabricaTemaClaro,
    FabricaTemaEscuro,
  };
  
  
  console.log("Iniciando a criação de componentes de UI...");
  
  console.log("\n--- Usando a Fábrica do Tema Claro ---");
  const fabricaClara = new FabricaTemaClaro();
  const botaoClaro = fabricaClara.criarBotao();
  const textoClaro = fabricaClara.criarTexto();
  
  console.log(botaoClaro.descrever());
  console.log(textoClaro.descrever());
  
  console.log("\n--- Usando a Fábrica do Tema Escuro ---");
  const fabricaEscura = new FabricaTemaEscuro();
  const botaoEscuro = fabricaEscura.criarBotao();
  const textoEscuro = fabricaEscura.criarTexto();
  
  console.log(botaoEscuro.descrever());
  console.log(textoEscuro.descrever());
  
  console.log("\nCriação de componentes finalizada.");