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