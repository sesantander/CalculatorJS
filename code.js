
var var1=0;
var var2=0;

var input= document.querySelector(".result");

var numeros = document.getElementsByClassName('boton_num');

var operator;

var varresult;

for (var i = 0; i < numeros.length; i++) {
  
    numeros[i].addEventListener('click', function () { 
        
       
        if (this.innerHTML==0) {
           
            if (input.value.charAt(0)=="0") {
                
            }else{
                input.value=input.value+this.innerHTML
            }
          
            
        }else if(this.innerHTML=="."){
            if (input.value.includes('.')==true) {
                
            }else{
                input.value=input.value+this.innerHTML 
            }
        }else{
          
            input.value=input.value+this.innerHTML
        }
        
    });
     
}


var operadores = document.getElementsByClassName('operators');

for (var i = 0; i < operadores.length; i++) {
    
    if (operadores[i].innerHTML=="+") {

        operadores[i].addEventListener('click', function () {
           
            if (input.value !== "") {
                var1= parseFloat(input.value)
                input.value=""
                operator="+"
            }
            
            
        });
    }

    if (operadores[i].innerHTML=="÷") {

        operadores[i].addEventListener('click', function () {
           
            if (input.value !== "") {
                var1= parseFloat(input.value)
                input.value=""
                operator="÷"
            }
            
            
        });
    }

    if (operadores[i].innerHTML=="-") {

        operadores[i].addEventListener('click', function () {
           
            if (input.value !== "") {
                var1= parseFloat(input.value)
                input.value=""
                operator="-"
            }
            
            
        });
    }

    if (operadores[i].innerHTML=="x") {

        operadores[i].addEventListener('click', function () {
           
            if (input.value !== "") {
                var1= parseFloat(input.value)
                input.value=""
                operator="x"
            }
            
            
        });
    }


   
     
}

var resultado = document.getElementById('result_operator');
    resultado.addEventListener('click', function () {
        
        if (input.value !== "") {
            var2= parseFloat(input.value)
            
            
            
            if (operator=="+") {
                varesult=var1+var2;
                operator="";
                input.value=varesult;
                var2=0;
                var1=varesult;
            }
            if (operator=="-") {
                varesult=var1-var2;
                operator="";
                input.value=varesult;
                var2=0;
                var1=varesult;
            }
            if (operator=="÷") {
                varesult=var1/var2;
                operator="";
                input.value=varesult;
                var2=0;
                var1=varesult;
            }
            if (operator=="x") {
                varesult=var1*var2;
                operator="";
                input.value=varesult;
                var2=0;
                var1=varesult;
            }
            
            
        }
        
        
    });


    var borrar = document.getElementById('erase');
    borrar.addEventListener('click', function () {
         input.value="";
         var1=0;
         var2=0;
    });    