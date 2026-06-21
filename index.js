// Insere o caractere clicado no campo de exibição.
function inserir(data){
document.querySelector('#Barra').value += data;

}

// Limpa completamente o campo de exibição.
function limpar(){

document.querySelector('#Barra').value = '';
}

// Calcula a expressão informada e mostra o resultado com duas casas decimais.
function resultado(){
     const display = document.querySelector('#Barra');
     try{
        display.value = eval(display.value).toFixed(2);
     }catch{
        display.value = 'Erro';
     }
}

// Remove o último caractere digitado no display.
function apagar(){
 const display = document.querySelector('#Barra');
 display.value = display.value.slice(0, -1);
}