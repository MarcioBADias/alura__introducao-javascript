const titulo = document.querySelector('h1');
titulo.textContent = "Clinica de Nutricionismo";

const pacientes = document.querySelectorAll('.paciente');

for(let c = 0; c < pacientes.length; c++){
    let paciente = pacientes [c]; //Passando por todos os pacientes
    //Capturando os elementos no HTML
    const peso = paciente.querySelector('.info-peso');
    const altura = paciente.querySelector('.info-altura');
    let imc = paciente.querySelector('.info-imc');
    //Criando as chaves de validação
    let pesoEhValido = true;
    let alturaEhvalida = true;
    //Validando
    if(peso.textContent <= 0 || peso.textContent >= 300){
        pesoEhValido = false;
        imc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
        //usamos Camel case para substituir o "-" no "background!-!color para usar essa propriedade no JS"
    }
    if (altura.textContent <= 0 || altura.textContent >= 3.0){
        alturaEhvalida = false;
        imc.textContent = "altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    //Confirmado as validações calcular o IMC
    if (pesoEhValido && alturaEhvalida){
        //Fazendo o resultado inteiro com método "PARSE"
        imc.textContent = parseInt(peso.textContent / (altura.textContent * altura.textContent));
        //Codigo conforme aula:
        /*let resCalc = parseInt(peso.textContent / (altura.textContent * altura.textContent));
        imc.textContent = resCalc.toFixed(2);*/
    }

}







