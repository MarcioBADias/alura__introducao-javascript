const botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', (event) => { 
    event.preventDefault();

    let form = document.querySelector('.form-adiciona');
    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);

    let erro = validaPaciente(paciente);

    if(!erro.length > 0){
        
        return;
    }

    let tabelaPacientes = document.querySelector('#tabela-pacientes');
    tabelaPacientes.appendChild(pacienteTr);

    form.reset();

})

function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

    return pacienteTr;
}

function montaTd(dado,classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return '';
    }else {
        return 'Peso invalido';
    }
}