class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        alert(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.cargo}.`);
    }

   trabalhar(){
        alert(`O funcionário ${this.nome} está exercendo a função de ${this.cargo}`);
   }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        alert(`Informações sobre funcionário: Nome: ${this.nome}; Idade: ${this.idade} anos; Cargo: ${this.cargo}; Departamento: ${this.departamento}. Atualmente trabalhando na seleção e contratação de novos funcionários.`);
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        alert(`Informações sobre funcionário: Nome: ${this.nome}; Idade: ${this.idade} anos; Cargo: ${this.cargo}; Linguagem: ${this.linguagem}. Atualmente trabalhando no desenvolvimento de um recurso para implementação no site da emrpesa.`);
    }
}

function verificarFuncionario(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var cargo = document.getElementById("cargo").value;
    var departamento = document.getElementById("departamento").value;
    var linguagem = document.getElementById("linguagemProgramacao").value;

        if(cargo === "gerente"){
            try{
                if(departamento.trim() === ""){
                    throw new Error("Erro ao autenticar dados do funcionário. Por favor, preencha o campo 'Departamento'.");
                }
            }catch(error){
                alert(error.message);
                return;
            }
            const ger = new Gerente(nome, idade, cargo, departamento);
            ger.seApresentar();
            ger.gerenciar();
        }
        else{
            try{
                if(linguagem.trim() === ""){
                    throw new Error("Erro ao autenticar dados do funcionário. Por favor, preencha o campo 'Linguagem de programação.'");
                }
            }catch(error){
                alert(error.message);
                return;
            }
            const dev = new Desenvolvedor(nome, idade, cargo, linguagem);
            dev.seApresentar();
            dev.programar();
        }
    
}