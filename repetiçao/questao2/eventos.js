let galera = [1.59, 1.82, 1.89, 1.55, 2.00, 1.33, 1.63, 1.77, 1.70, 2.05, 1.22, 1.61, 1.75, 1.95, 1.91]


let maiorAltura = 0;
let menorAltura = 1;


for (let n = 0; n < galera.length; n++){

    if( galera[n] > maiorAltura){
        maiorAltura = galera[n];
    };

    if(galera[n] < menorAltura){
        menorAltura = galera[n];
    };
};

document.write('Pessoa com menor altura de:', menorAltura, 'm <br>');
document.write('Maior Pessoa com altura de:', maiorAltura, 'm <br>');