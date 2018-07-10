//Responsável pelos testes
var should = require( 'should' );
var sum = require( '../sum' );

describe( 'sum.js',() => {

    it( 'Tem que: a soma 2 + 3 deve retornar 5', () => {
        sum( 2, 3 ).should.be.equal( 5 );
    });

    it('Tem que: a soma 10 + 10 deve retornar 20', () => {
        sum(10, 10).should.be.equal(20);
    });

    it('Tem que: se não for número deve retornar undefined', () => {
        should(sum(1, 'tiao')).not.be.ok;
    });

});

//undefined e null não têm propriedades.
//Para testar se um valor é undefined ou null, usa-se o should como função.

//Ferramentas de Code Coverage testam quantos 
//porcento do nosso código está coberto por testes.