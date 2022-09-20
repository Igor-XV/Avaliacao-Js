let altura = 1.50;
let sexo = 'F';
let pesoIdeal;

if(sexo === 'M'){
    pesoIdeal = (72.7 * altura) -58;
};
if(sexo === 'F'){
    pesoIdeal = (62.1 * altura) -44.7;
};
document.write('pesoideal:', pesoIdeal);