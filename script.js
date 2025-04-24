class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = " magia";
                break;
            case "guerreiro":
                ataque = " espada";
                break;
            case "monge":
                ataque = " artes marciais";
                break;
            case "ninja":
                ataque = " shuriken";
                break;
            default:
                ataque = " um ataque indefinido"
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

function criarHeroi() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const tipo = document.getElementById("tipo").value;

    const novoHeroi = new Heroi(nome, idade, tipo);
    const mensagem = novoHeroi.atacar();

    document.getElementById("resultado").textContent = mensagem;

}