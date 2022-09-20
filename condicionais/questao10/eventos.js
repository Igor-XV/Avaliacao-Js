let peso = 78;
let altura = 1.68;

let imc = peso / (altura*altura);

if(imc < 18.59){
    document.write("Abaixo do peso");
};
if(imc >= 18.59 && imc <= 25 ){
    document.write("Peso normal");
};
if(imc >= 25 && imc <= 30){
    document.write("Acima do peso");
};
if(imc > 30){
    document.write("Obeso");
};