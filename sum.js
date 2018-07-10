//módulo responsável pela soma
module.exports = function sum(parcelaUm, parcelaDois){
    /*return 5;  //passa só o 1 teste
    return parcelaUm + parcelaDois; //para passar no teste 2 também*/

    if(isNaN(parcelaUm)|| isNaN(parcelaDois)) {return;};
    
    return parcelaUm + parcelaDois; //para passar no teste 3 tbm
};  