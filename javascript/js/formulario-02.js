

const form = document.getElementById('formulario-02');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailValido = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const cepValido = /\d{5}-\d{3}/;



function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


function nomeValido(){
    if (campos[0].value.length < 3)
    {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailValido.test(campos[1].value))
    {
      setError(1);
    }
    else{
        removeError(1);
    }
}

function cepValidate(){
    if(!cepValido.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

function cidadeValida(){
    if( campos[3].value.length == " ")
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}

function ufvalidate(){
    if(campos[4].value.length >= 3)
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}
