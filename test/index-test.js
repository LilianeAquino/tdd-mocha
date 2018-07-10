var assert = require('assert');
var should = require('should'); //mesma funcionalidade do assert

/*describe('Testes de exemplo', () => {
    it('2 + 2 ==== 4', () => {
        assert.equal(4,2 + 2);
    });

    it('2 * 2 === 8 (eu sei que não é)', () => {
        assert.equal(8, 2 * 2, 'Errado.....');
    });
});/*

//O módulo assert cria um ambiente de teste. Seu método equal() recebe 3 parâmetros: o valor atual (que você quer testar), 
//o valor esperado e uma mensagem que será mostrada no seu terminal quando esse teste rodar.*/

should(1 + 2).be.equal(3); //lê-se 1 + 2 deveria ser igual a 3.