const titulo = document.querySelector('h1');
titulo.textContent = "Clinica de Nutricionismo";

const pacientes = document.querySelectorAll('.paciente');

for(let c = 0; c < pacientes.length; c++){
    let paciente = pacientes [c]; //Passando por todos os pacientes
    //Capturando os elementos no HTML
    const tdPeso = paciente.querySelector('.info-peso');
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector('.info-altura');
    const altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');
    //Criando as chaves de validação
    let pesoEhValido = validaPeso(peso);
    let alturaEhvalida = validaAltura(altura);
    //Validando
    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
        //usamos Camel case para substituir o "-" no "background!-!color para usar essa propriedade no JS"
    }
    if (!alturaEhvalida){
        alturaEhvalida = false;
        tdImc.textContent = "altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    //Confirmado as validações calcular o IMC
    if (pesoEhValido && alturaEhvalida){
        tdImc.textContent = calculaImc(peso,altura);
    }
}

function validaPeso(peso){

    if(peso >= 0 && peso <= 500){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
} 

//escutando eventos:
titulo.addEventListener("click", () => {
    console.log('Olá eu fui clicado.');
});

function calculaImc(peso,altura){
    let imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}








