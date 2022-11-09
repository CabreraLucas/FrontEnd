// As senhas são iguais
function validaSenha(){
    var senha = document.getElementById("senha");
    var csenha = document.getElementById("csenha");
    if(senha.value != csenha.value){
        alert("As senhas são diferentes.");
    }
}

function senhaCorreta(){
    var senhaLogin = document.getElementById("senhaLogin");
    if(senhaLogin.value == "123456"){
        alert("Login efetuado!");

    }
}