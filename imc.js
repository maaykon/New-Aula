let botaocalcular = document.getElementById('#btnCalcular');

function calculadoraIMC(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value/100;
    let resultado = document.getElementById('resultado');

    if(altura !=="" && peso !==""){
        imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";
    

    if(imc<18.5){
        mensagem = "Abaixo do peso";
    }

    else if(imc>=18.5 && imc<=24.9){
        mensagem = "Peso normal";
    }

    else if(imc>=24.9 && imc<=29.9){
        mensagem = "Acima do peso";
    }   

    else if(imc>=29.9 && imc<=34.9){
        mensagem = "Obesidade I";
    } 
    
    else if(imc>=34.9 && imc<=39.9){
        mensagem = "Obesidade II";
    }
    
    else if(imc>=40){   
        mensagem = "Obesidade III";
    }

    resultado.textContent = "Seu IMC é" +imc+ "e você esta" + mensagem;
    }
    else{
        resultado.textContent = "Preencha todos os campos";
    }

}

botaocalcular.addEventListener('click', calculadoraIMC)



