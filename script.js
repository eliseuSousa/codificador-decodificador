/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

// Botão para criptografar 
var botaoCriptografar = document.querySelector("#btn-cripto");

// Botão para descriptografar  
var botaoDescriptografar = document.querySelector("#btn-descripto");

// Botão copiar 
var botaoCopiar = document.querySelector("#btn-copy");

botaoCriptografar.addEventListener("click", function (event) {
        
    event.preventDefault();

    // capturando o texto para a criptografia
    var msg = document.querySelector("#input-texto");

    // Válida a mensagem inserida
    var ehValido = validaDados(msg.value);
    
    if (ehValido) {

        var msgCripto = codificador(msg.value);
        
        // Mensagem criptografada
        var displayMsgCriptografada = document.querySelector("#msg");

        // Mostra na tela a mensagem criptografada
        displayMsgCriptografada.value = msgCripto;
        msg.value = "";

    } else {

        msg.value = "";
        msg.focus();
    }
     
});

botaoDescriptografar.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    // Captura a mensagem para a descriptografia 
    var msg = document.querySelector("#input-texto");

    // Chama a função para realizar a descriptografia
    var msgDescripto = descriptografar(msg.value.toLowerCase());

    // Mostra a mensagem descriptografada
    var displayMsgDescriptografada = document.querySelector("#msg");
    
    displayMsgDescriptografada.value = msgDescripto;
});

botaoCopiar.addEventListener("click", function(event){

    event.preventDefault();

    // Pega a msg
    var msg = document.querySelector("#msg");

    copiarParaAreaDeTransferencia(msg.value);
});

/* Função para a validação de dados*/
function validaDados(dados) {

    if (dados == "") {

        alert("Insira uma mensagem");
        return false;
    }
    else if(/[A-Z]/.test(dados)) {

        alert("Apenas minúsculas");
        return false;
    }
    else if (/[á-ú]/.test(dados)) {
        
        alert("Não use acentos");
        return false;
    } else {

        return true;
    }
};
/* Função que realiza a criptografia */
function codificador(texto) {

    var msgCriptografada = "";
    var a = "enter";
    var e = "imes";
    var i = "ai";
    var o = "ober";
    var u = "ufat"

    var palavras = texto.split(" ");
    
    palavras.forEach(function (palavra) {
        
        letra = palavra.split("");
        letra.forEach(function (item) {

            if (item == "a") {

                msgCriptografada += a;
            }
            else if(item == "e") {

                msgCriptografada += e;
            } 
            else if (item == "i") {

                msgCriptografada += i;
            }
            else if (item == "o") {

                msgCriptografada += o;
            } 
            else if (item == "u") {
                
                msgCriptografada += u;
            } else {

                msgCriptografada += item;;
            }
        });
        msgCriptografada += " ";
    });

    return msgCriptografada;
}

/* Função que realiza a descriptografia */
function descriptografar (msgCripto){

    var msgDescriptografada;
    
    msgDescriptografada = msgCripto.replaceAll("enter", "a").replaceAll("imes", "e").replaceAll("ai", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    
    return msgDescriptografada;
}

// Função que copiar dados para a área de transferência
function copiarParaAreaDeTransferencia(msg) {
    
    navigator.clipboard.writeText(msg);
}