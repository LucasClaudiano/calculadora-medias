const form = document.getElementById('form-atividade'); 
const imgAprovado = '<img src="./images/aprovado.png">';
const imgReprovado = '<img src="/images/reprovado.png">'; 

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaminima = parseInt(prompt("Digite a nota mínima:"))

let linhas =''; 
const atividade = [];
const nota = []; 

form.addEventListener('submit',function(e){
    e.preventDefault(); 
    adicionaLinha(); 
    atualizaTabela(); 
    atualizaMedias(); 
});

function adicionaLinha(){

    const inputAtividade = document.getElementById('nome-atividade'); 
    const inputNotas = document.getElementById('nota-atividade'); 

    if(atividade.includes(inputAtividade.value)){
        alert(`A atividade ${inputAtividade.value} já foi inserida!!`)
    }else{
        atividade.push(inputAtividade.value); 
        nota.push(parseFloat(inputNotas.value)); 
    
        let linha = '<tr>'; 
        linha += `<td>${inputAtividade.value}</td>`;
        linha += `<td>${inputNotas.value}</td>`;
        linha += `<td>${inputNotas.value >= notaminima ? imgAprovado : imgReprovado}<td>`;
        linha += '<tr>';
    
        linhas += linha;
    }

    
    inputAtividade.value= ''; 
    inputNotas.value= '' ; 
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas; 
}
function calculaMedia(){
    let somaNotas = 0 ; 
    for(let i=0 ; i<nota.length; i++){
        somaNotas += nota[i]; 
    }
    return somaNotas/nota.length; 
}   
function atualizaMedias(){
    const media = calculaMedia(); 

    document.getElementById('nota-da-media').innerHTML = media.toFixed(2); 
    document.getElementById('resutado-media').innerHTML = media >= notaminima ? spanAprovado : spanReprovado; 
}